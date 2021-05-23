This document covers the technical implementation of the scheduler. It is intended for anyone who needs to replace, modify, or debug the scheduler. User oriented scheduler documentation can be found at [foss-scheduler](http://www.fossology.org/projects/fossology/wiki/Foss-scheduler).

This document is not intended for people who want to create an agent (although it certainly helps to know this information). See [Writing an agent ](http://www.fossology.org/projects/fossology/wiki/Writing_an_agent_)if you want to know more about that.

## About the Scheduler

The scheduler is a *super-agent*, responsible for spawning and managing all other agents. The scheduler balances the needed tasks (found in the job queue) with the available resources. It tries to ensure that:

1. One task does not lock out other tasks.

2. Unused resources are used by other pending tasks.

3. Agents are spawned in an optimal fashion (fastest).

4. Agents do not exceed the alloted resources.

Although the scheduler is single-threaded, it manages child processes that run in parallel.

* Scheduler is single-threaded.

* Scheduler spawns agents (children) that run in parallel.

## Front-End Communications

The scheduler communicates with the front-end UI through the database's jobqueue table. This table lists which agents need to run, the necessary parameters for the agent, and the current operation status.

* Agents can either be general -- running an any available server (host) -- or they can be host-specific. The jobqueue specifies a "runonpfile" field if the agent should be locked to a specific host. The parameter denoted by the runonpfile field is used to identify the host: run on the host that matches the pfile.

* Jobs can contain a single parameter that is passed to the agent, or an SQL query can be provided for generating parameters. The latter multi-SQL-query (MSQ) is used in lieu of adding thousands of individual jobs to the jobqueue. The scheduler performs the MSQ request and the results are individually passed to agents.

The combination of host and query type leads to four combinations, but only two combinations are implemented.

<table>
  <tr>
    <td></td>
    <td>Any host</td>
    <td>Host-specific</td>
  </tr>
  <tr>
    <td>One parameter</td>
    <td>OK</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>MSQ</td>
    <td>N/A</td>
    <td>OK via runonpfile</td>
  </tr>
</table>


Some example agents:

* **wget:** Any host, one parameter (the URL to get)

* **license:** The bSAM agent uses a host-specific MSQ. This allows bSAM to run on the system containing the license files, rather than resorting to NFS accesses.

* **filter_license:** Similar to the bsam agent, the host-specific MSQ reduces NFS access.

Some agents could fit into other categories, but are limited by the two available choices:

* **unpack:** Host-specific, MSQ. The SQL parameter returns ONE record that contains the pfile and ufile to unpack. This should be implemented as a host-specific one-parameter job, but the only host-specific option is an MSQ.

* Any future agent that only performs database accesses could be better fit as an any-host MSQ job. However, they will likely be implemented as a host-specific MSQ job.

### Adding to the Queue

Jobs are added to the jobqueue by the front-end UI. The UI knows the desired agent type, whether it is an any-host or MSQ job, and the proper parameters (or SQL). The scheduler has no control over what is added and does not validate whether the added job is correct.

### Job Tracking

The scheduler tracks jobs based on the jobqueue start and end times.

* No start time? Ok to run.

* Start without end? Job is currently being managed by the scheduler.

* Start with end? Job is completed.

Some jobs need to be rescheduled. For example, an MSQ may have a "LIMIT 5000" (allowing the scheduler to only manage a few results at a time and permitting a limited timeslice scheduling). This is done by removing the start time when the job completes -- effectively putting the job back into the jobqueue. If the MSQ returns no results, then the end-time is set, completing the job.

The jobs run with the following priorities:

1. Anything currently running is allowed to run. The rationale: a job may take a long time and it is better not to cancel the job and try to restart it later.

2. Any jobs held by the scheduler come next. # Of the jobs held by the scheduler, jobs for available, active, agents come first. This reduces kill/spawn times. # If there are no running agents of the correct type, then one is spawned (possibly after killing an incorrect ready/active agent type first).

3. The job queue has a column for urgent tasks. These come next.

4. Any available job, oldest first.

5. Jobs that do not match the available agents are ignored and remain in the jobqueue.

The jobqueue keeps a prioritized table in case one agent depends on the results from another agent. As a result, there are frequently jobs in the jobqueue that cannot run (temporarily blocked due to a dependency).

This tracking method has a few limitations:

* If the scheduler dies, someone needs to remove the start times on incomplete tasks. (The scheduler tries to do this with signal handling, but sometimes dies before resetting the values.)

* Since the start time can be reset due to rescheduling, there is no way for the front-end to tell how long a job really took.

* The scheduler holds on to jobs. The front-end cannot distinguish between a "held" job and a "running job".

* The scheduler can only hold a few jobs at a time: one "any host" per agent, and four MSQ at a time (MAXMSQ in dbq.c). It is very possible for the four pending MSQ commands to be held and waiting for an agent to become available, while other MSQ commands in the queue could run.

The main function for checking the queue is in dbq.c: DBProcessQueue(). This checks the jobqueue for new tasks and processes the held MSQ records.

### Signals

The scheduler watches for a few signals. These are mainly used for debugging:

* **SIGINT**. Finish all running jobs, but do not start new ones. When all jobs complete, exit. This is denoted in the code by the "SLOWDEATH" flag and is used to provide a clean exit.

* **SIGQUIT**. Kill all running children, try to reset the jobqueue start time, and exit.

* **SIGTERM**. Handled the same as SIGQUIT.

* **SIGUSR1**. Display a quick summary of running processes (how many are running, waiting, or dead.)

* **SIGUSR2**. Display details about every MSQ job held by the scheduler. This can generate a huge amount of output, but allows debugging MSQ jobs.

* **SIGHUP**. This displays the number of running jobs and the summary of each process (same as SIGUSR1).

* **SIGSEGV**. If there is a crash, display all thread info (SIGHUP) before dying.

## Back-end Children

All children are treated as finite-state machines. The states (defined in spawn.h) are:

* **ST_FAIL = 0**. If an agent spawns and dies too rapidly, then mark it as failed. Failed agents are not respawned for a few minutes. (Prevents infinite spawning/death loops.) The timeout is defined in spawn.c as RespawnInterval (5 minutes) and RespawnCount (5 respawns). If the agent spawns faster than 5 times in 5 minutes, than mark it as a failure. It will remain a failure for RespawnInterval (5 minutes -- the variable is reused). NOTE: only abnormal deaths are counted here. If the scheduler intentionally kills a process (using ST_FREEING), then the number of spawns is reset and it should never reach ST_FAIL (even if it is spawned and killed rapidly).

* **ST_FREE.** The agent is not spawned yet and has no I/O allocated. All agents begin in this state.

* **ST_FREEING.** The agent was spawned, but has been told to die by the scheduler. It is now shutting down and has no I/O allocated.

* **ST_PREP**. The scheduler is preparing a child data structure. The structure has allocated memory but has not yet been spawned. This step prevents a well-timed SIGCHLD from freeing the data structure before the state becomes ST_SPAWNED. * As an aside: Signals are boolean states and not queued. If three children die at once, then the parent only receives one SIGCHLD. Thus, the scheduler must scan every child when a SIGCHLD is called just in case there were multiple deaths. However, a new-dead child will look just like an old-dead child; there is no distinction. The ST_PREP state prevents an old-dead child from appearing as a new-dead and having its memory freed in the signal interrupt handler, while it was being allocated in the normal (non-interrupt handler) code.

* **ST_SPAWNED.** The agent is spawned but not yet ready (I/O allocated). When the agent sends its first "OK", it will be transitioned to ST_READY.

* **ST_READY.** The agent is live and ready for data.

* **ST_RUNNING.** The agent is actively processing data. When the agent sends an "OK", it will be transitioned back to ST_READY.

* **ST_DONE**. This is used by the MSQ table. Each SQL record has a status field and this indicates that the record is completed. When all MSQ records are completed, the MSQ job is done.

* **ST_END**. This is an unused marked. Since states are numeric, this allows the code to loop over all possible states: for(i=0; i<ST_END; i++)...

Most of the time, the children are in the ST_FREE, ST_READY, or ST_RUNNING states.

**NOTE**: When the scheduler runs, it displays the different state transitions for each child. However, not all transitions are shown. Since active children switch rapidly between ST_READY and ST_RUNNING, these transitions (to and from) are not displayed.

### Talking with Children

Each spawned agent has stdin and stdout redirected to the scheduler. (Stderr is not redirected.) The workflow is as follows:

1. The agent is spawned by the scheduler. (Scheduler creates child.) This happens in the GetChild() function. The state is changed from ST_DEAD to ST_PREP (for populating the data structure) to ST_SPAWNED (indicating a process fork).

2. When the child is initialized and ready, it writes "OK\n" to stdout. This tells the scheduler that the child can accept data (ST_SPAWNED becomes ST_READY).

3. The child begins reading from stdin. # If stdin closes, then the child should die as quickly as possible. # If data appears on stdin, then the child should process it. The data will either come from the jq_args column (for any-host agents), or be the results from the MSQ query (in 'column=value' pairs, all on one line).

4. When the scheduler sends data to the child (via stdin), the state is changed from ST_READY to ST_RUNNING. No further data will be sent until the child is ready.

5. When the child finishes the task AND is ready for the next task, it writes "OK\n" to stdout. This transitions the child from ST_RUNNING to ST_READY. Note: The scheduler sees is no distinction between a child completing the first task and getting ready for the next task.

There are a few additional messages that the child can send to stdout:

* **"ERROR".** Sending the word "ERROR" on the line can be used to report processing problems. However, this is only logged by the scheduler and not actively used. If a processing error occurs, the agent should DIE.

* **"LOG".** Similar to "ERROR", log lines can be sent to the scheduler. The line contents are recorded in the database "log" table. (In the future, this table will be accessible via the UI.) In general, ERROR messages should be human-readable, while LOG lines should provide details about exactly what failed.

* **"Success".** Similar to "ERROR", this is counted for statistics, but not used by any error handling. It should denote a successfully completed task.

* **"ECHO"**. Anything following this keyword is sent to the scheduler's stderr.

* **"DB: SQL;".** If the child writes a line prefaced by "DB: " (space is needed), then the parameter is treated as a DB command. The scheduler will pass the SQL command to the DB and return any and all results to the agent. This is mainly for debugging and has some serious limitations: * The scheduler is single-threaded. A very slow DB query could hang the scheduler. * Many agents are spawned using SSH (to securely run them on remote servers). Although the scheduler can handle an SQL command that is up to 65K (MAXCMD in spawn.h), SSH returns data in blocks on 64 bytes. An SQL query larger than 64 bytes could be split, resulting in an invalid SQL command. * Since a SELECT may return multiple records. One record is printed per line, in a 'column="value"' format. After the last row, "OK\n" is printed. Here's the problem: if the agent reads this data slowly, it can slow down the scheduler.

Due to the "DB:" limitations, agents should communicate directly with the DB rather than use the "DB:" command. (The "DB:" was created as a test and has some uses, but agents should not depend on it.)

* Anything else. Any other output from the agent is displayed by the scheduler to stderr. These lines are prefaced with the word "DEBUG" and the thread ID.

### Killing Children

The scheduler limits the number of spawned processes by host. Thus, if a host has a maximum of 4 spawned processes and a fifth is needed, then an existing child is killed first.

Under normal circumstances, only children in the ST_READY state are killed. Killing occurs as follows:

1. Stdin to the child is closed AND the child is sent a SIGHUP. The child is moved from ST_READY to ST_FREEING.

2. The child may choose to catch SIGHUP and cleanup any remaining tasks.

3. If the child sees that stdin is closed, then it must exist ASAP. Similarly, if the child catches SIGHUP then it must exit quickly.

4. Since the child was at ST_READY, the jobqueue is not modified.

5. If the child is still in ST_FREEING after 20 seconds (defined in spawn.h as MINKILLTIME), then the child is assassinated using SIGKILL.

6. When the child dies, a SIGCHLD is sent to the scheduler. This is caught and used to transition the child from ST_FREEING to ST_FREE.

There are some abnormal circumstances when the child may die...

* If the scheduler aborts, it may send a SIGKILL to every child. Alternately, the operating system may send a SIGKILL, SIGHUP, or SIGINT to the child. When a new instance of the child is created, it should check for any residues from past deaths.

* If a child aborts, the scheduler receives a SIGCHLD. However, since the child was not in ST_FREEING, it is treated as an abnormal death. The thread info is sent to stderr and the death count is increased. The death count is used by RespawnInterval and RespawnCount to detect runaway spawning/freeing loops.

Other situations when a child may be ordered to die (normal death) or kept alive too long:

* If the child has been in the ST_READY state for more than 15 minutes (spawn.h, MAXKILLTIME), then it will be deemed unnecessary and killed.

* If the child has been in the ST_READY state for less than 20 seconds (clients.c, MINKILLTIME), then it will be kept alive in case some other job needs it. Without MINKILLTIME, and agent could be spawned for one job and immediately killed (since it is ST_READY) by a different job that wants to run. This leads to very fast SPAWNED/READY/FREEING/FREE loops as two jobs battle for dominance. MINKILLTIME breaks the loop since an agent has time to go from SPAWNED to READY to RUNNING before being killed by some other job.

## Configuring the Scheduler

See the User docs for [Configuring the Scheduler.](http://www.fossology.org/projects/fossology/wiki/Foss-scheduler#Configuring+the+Scheduler+)

## Testing

* You might want to use '-I'. This allows you to enter jobs to run on stdin. This is good for testing new agents.

* -H is useful if you want to use the real configuration file on the local host.

* I used to use -I and -H. Now I just create my own configuration file for the specific test.

If the scheduler is killed using "kill -9", then the queue may not be reset to a stable condition. When you start the scheduler, it will monitor the queue. After 10 minutes of inactivity, the abandoned queue entries will be reclaimed for use by the scheduler. For a faster response, you can use "-R" to reset the queue immediately. However, don't use -R if there are multiple schedulers running at the same time. (Multiple schedulers is not supported, but -R will make a bad situation worse.)

## Commanding the Scheduler

The scheduler runs as an independent back-end process from the front-end user interface. As a result, the UI cannot communicate directly with the scheduler. Instead, all commands are placed in the database's jobqueue. During normal operations, the jobqueue stores tasks to be run (the tasks should match the scheduler's configuration file). However, there is one special jobqueue task.

jq_type = "command" 
jq_args = parameters for command

When the jobqueue's jq_type is the lowercase string "command", the parameters in "jq_args" are interpreted directly by the scheduler. The following jq_args are supported.

* "shutdown". The scheduler will finish all running tasks, but not start anything new. When all tasks complete, the scheduler will exit.

* "shutdown now". The scheduler kills all running processes and exits ASAP.

* "killjob 1234". If the jobqueue item 1234 (jq_pk="1234") is currently being processed by the scheduler, then kill it and mark it as a failure. This is usually used when the user queues a job to be processed, then decided to delete the job while it is running.

The front-end UI knows that the job is complete because it will be marked as processed in the jobqueue.

## Building the Scheduler

The scheduler consists of 5 source files:

* clients.c: Handles client communications.

* dbq.c: Contains ALL DB accesses. If the function touches the DB, then it is here. MSQ results are managed here too.

* hosts.c: Functions for managing host-based spawning. This keeps track of the number of spawns per host and whether new spawns are permitted.

* sockets.c: The read() and select() functions for communicating with an agent over stdin/stdout.

* spawn.c: Functions for spawning processes and handling signals.

* scheduler.c: The main file -- handles configuration and the infinite control loop.

To build the scheduler, use the Makefile.

```Makefile
make clean        # remove all compiled files (clean slate for a new build)
make              # build the scheduler
sudo make install # install it to /usr/local/fossology/agents/
```

The make command should build without any errors or warnings (a clean make).

NOTE: If you make any changes to the state machine labels (the ST_* definitions in spawn.h) then you **must** use 'make clean' before 'make'. (Someday we might introduce a 'make depends' file so code is compiled when all dependencies change.)