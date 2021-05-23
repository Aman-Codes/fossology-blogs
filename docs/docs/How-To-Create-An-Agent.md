This document covers how to create, configure, and install an agent for use with the scheduler, DB, and UI.

Tip: Look at the demomod, readmeoss and regexscan as an examples.

## Purpose

Agents are used to perform analysis, statistics, or management tasks related to anything in the database. Each agent performs one (1) task; do not overload agent functionality. If you need three different tasks, then create three different agents. For example, if your agent needs to unpack a file in order to analyze it, then ask yourself: can the unpack be done as a separate agent and does it make sense to spit the functionality?

* Don't overload agents with high-level functions.

* Try to break complex functions into serialized modules that can be reused.

* Check to see if another agent already performs the task.

## Building an Agent

Agents can be built in any language -- from shell script to C. Some of the existing agents are written in Shell, C, Perl, and PHP. Any kind of executable can be an agent.

For simplicity, we have some pre-built libraries for common functions.

* libdbapi: A DB-independent library for accessing the database. (This provides non-Postgres-specific calls.) Alternately, you can use the Postgres libraries to access the database.

* librep. This is a C library for accessing the file repository. Alternately, you can use the stand-alone executables in /usr/local/fossology/ (run the command without any parameters to see the usage):

<table>
  <tr>
    <td>Tool</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>repcat</td>
    <td>Display (cat) the contents of a file in the repository</td>
  </tr>
  <tr>
    <td>repexist</td>
    <td>Return a boolean value to tell if a file exists in the repository</td>
  </tr>
  <tr>
    <td>repremove</td>
    <td>Remove a file from the repository</td>
  </tr>
  <tr>
    <td>repcopyin</td>
    <td>Add a file to the repository</td>
  </tr>
  <tr>
    <td>rephost</td>
    <td>Specify the host where the file resides (or would reside if it does not currently exist)</td>
  </tr>
  <tr>
    <td>reppath</td>
    <td>Provide the full path to the file in the repository (regardless of whether the file exists)</td>
  </tr>
  <tr>
    <td>repwrite</td>
    <td>A simpler form of repcopyin, for adding anything to the repository</td>
  </tr>
</table>


### The Repository

The repository is a flat file system that contains the pfile contents. For load balancing, it may be divided across hosts. For organization, the repository has data separated by type. For example:

* /srv/fossology/repository/ is the root of the repository.

* /srv/fossology/repository/host1/ is the NFS (or RAID or whatever) mount for host1.

* /srv/fossology/repository/host2/ is the mount for host2.

* /srv/fossology/repository/host1/gold/ stores all submitted (gold) pfiles.

* /srv/fossology/repository/host1/files/ stores all of the unpacked pfiles.

* /srv/fossology/repository/host1/license/ stores all license cache files (for license analysis).

You should never need to search the repository for files. Instead, use the reppath command (or library function) since it will look up the directory for you.

You are not limited to the directories gold, files, or license. These are just organizational types. If you want to create your own type for files, go ahead and do it. The current convention is that related files have the same name. For example: "files/foo" will have the license cache file "license/foo". Since files represent pfiles, they do not use their human name (you will not find /license/COPYRIGHT.GPL in the directories). Instead, they are stored using pfile information: sha1.md5.length.

### The Database

Agents currently have access to all tables in the database. (But this might change in the future, so keep track of the tables you require.) Many agents have special tables just for their own information. Do what is right for your agent.

## What Kind of Data?

The scheduler sends data to the agent. The data comes from the jobqueue. There are two types of agents found in the jobqueue:

* Any-host, one parameter. The data passed to the agent is the value stored in the `jq_args` column of the jobqueue table. The agent could be running on any host. The scheduler has no idea what the data is -- it just passes the raw data and assumes that the agent knows how to handle it.

* Host-specific, Multiple-SQL Query. The scheduler starts the agent on a specific host. The `jq_args` field contains an SQL query that is executed by the scheduler. The resulting rows are sent to the agent, one at a time. Use this kind of request when the data can be easily distributed among multiple instances of the same agent.

  * If there are multiple rows and multiple agents, then the workload will be divided between the agents on an as-ready basis (if you're ready, then you get the next row).

  * The parameters are send in `column="value"` pairs. All values are stored in quoted strings. If the value contains a quote, newline, or control characters, then it is escaped using a backslash. (Backslashes will appear as two backslashes: `\\`.)
    - For example, if the SQL returns two columns (A and B) with the values (5 and Tuba) then the data sent to the agent will be: `A="5" B="Tuba"`

## Populating the Job Queue

How does the data or SQL get into the jobqueue? You will need to develop the data or SQL and tell the front-end UI. The UI will place the data into the jobqueue when the job is requested by the user.

## Starting an Agent

At this point, we will assume that you have built the code that does the analysis. Now you need to make the agent able run from the scheduler.

The scheduler will start the agent using a `system()` call. The agent, and all of its parameters are static and defined in the scheduler's configuration file. The scheduler will feed each agents one piece of data to process. After the data is processed, the agent may be fed another piece of data.

Because the scheduler may run multiple instances of the agent, the agent must ensure that multiple instances will not interfere. In addition, different instances may be started on different hosts. Used of common temp (or writable) files and common shared memory is strongly discouraged. If an agent needs a unique ID, consider using the environment variable `$THREAD_UNIQUE`. This is an ID set by the scheduler that is guaranteed to be unique among the running processes.

* `$THREAD_UNIQUE` is a unique value among the current running processes.

* `$THREAD_UNIQUE` may have been used by a previous running process, so agents should remove any temp files before using them. (There is no guarantee that the previous agent assigned to the ID cleaned up before it exited.)

### When to Exit

Agents do not exit when they finish processing data! This is intentional: processes have a high cost for starting up, and may be called millions of times (resulting in a cumulative hours or days of startup time).

Agents should only exit under a limited number of circumstances:

* Stdin closes. The agent should cleanup and exit as fast as possible. This will only happen when either the agent is done processing data and the scheduler determines that it is no longer needed, or when the scheduler is killed.

* A SIGINT is received. This signal may be caught by the agent and is usually associated with stdin being closed. As with stdin, this will only happen when the agent is done processing data and the scheduler determines that it is no longer needed.

* An error occurs. If there is any kind of fatal processing error, then the agent should exit. If the agent dies during processing, it tells the scheduler that the job cannot be completed.

**Note:** If the agent does not die fast enough, then it will be killed. The current timeout is 20 seconds. You have 20 seconds to cleanup and exit after receiving a SIGINT. If the agent does not exit fast enough, then it will be killed using SIGKILL.

## Communicating with the Scheduler

Agents work with the scheduler to process data. Essentially, the agent specifies when it is ready for data to process and the scheduler doles out data as needed. The scheduler handles parallel processing of the data by starting up parallel agents.

All communication happens over the agent's stdin and stdout streams. The flow is as follows:

* Scheduler needs the agent to process something, so the agent is started.

* The agent does any required initialization and gets ready to receive data.

* When the agent is ready, it writes `"OK\n"` to stdout. Then it waits for data on stdin.

* The scheduler will send data on stdin. There will be one line of data.

* The agent will process the data, store results, etc.

* After processing the data, the agent will reinitialize itself and get ready for the next piece of data to process.

* When the agent is ready, it writes `"OK\n"` to stdout. Then it waits for data on stdin.

The entire communication is a series of OK - Data - OK - Data - OK strings. When there is no more data, stdin will close and a SIGINT will be sent.

**Caveat:** Because agents are spawned as needed, used in parallel, and killed when no longer needed, an agent may be spawned and killed without ever receiving data. This is rare, but happens when one agent is running and another is spawned. In the time that it takes for the second agent to spawn and become ready, the first agent completes all of the tasks. With nothing left to do, both agents are killed.

### Special Communications

There are a few special communication methods that can be used between the agent and the scheduler. However, these are usually used for debugging. Each of these are written to stdout.

* **ECHO.** The echo command is followed by a string that will be displayed as-is by the scheduler to the scheduler's log file.

* **DB:**. The DB: command is followed by an SQL command. The scheduler will run the command and return the results in the 'column="value"' format. There is one row per line. The last row will be followed by the word `"OK\n"`.
  * This method has lots of limitations and should not be used for anything beyond debugging fast, short SQL queries (under 64 characters). If you need to use the database, then use the dbapi or Postgres functions.

* **Anything else.** Any other output to stdout is treated as a debug message and logged by the scheduler. If the agent detects any type of unrecoverable execution or processing error, then it should write useful information to stdout before exiting. The information should describe the problem detected, cause of the problem, and any thing else needed to recreate and repair the problem.

### Error Handling

Errors are recorded as attributes in the database. They can be associated with pfiles, ufiles, or just about anything else found in the database.

Agents have the option to directly record errors in the database (inserting their own attribute records), or they can communicate errors to the scheduler. Communication with the scheduler is as follows:

keyword type(index) message

The keyword is one of the following:

* **FATAL**. The agent has failed to process the data. Following this message, the agent is expected to exit. However, agents may be able to reset themselves, so the exit is not mandatory.

* **ERROR**. An error occurred during processing. This error does not kill the agent, but the data is denoted as being unprocessed. (This is a fatal processing error, but not a fatal agent error.)

* **WARNING**. A non-fatal error occurred. Additional processing can continue, but the data may not be interpreted correctly. For example, if a ZIP file fails to unzip, then it can still be processed as a binary file.

* **LOG**. A debugging message. While FATAL/ERROR/WARNING should be human readable, this entry should contain all of the necessary data for debugging the problem.

The type and index denote how to attach the attribute. For example "pfile(1234)" will attach the error message to the pfile_pk 1234.

The message is a string that describes what happened and (optional) possible resolution methods. This string must be human readable. For a multi-line string, the message should contain the characters "\n" in place of newline characters.

Example messages:

```
FATAL ufile(1111) Unable to allocate required memory for analysis.
ERROR pfile(1234) Wget returned a zero-length file from the URL http://bad.url Please recheck and resubmit.
WARNING pfile(5557) RPM file missing meta data.
LOG ufile(9876) wget: SELECT returned no rows: 'SELECT * FROM blah where pfile_fk = 1234;' client.c:512
```

## Quick and Dirty Agents

If you just want to write a quick and dirty agent, then consider using the Engine-Shell program. This is a wrapper around `system()`. It takes a command-line parameter of the program to run, and handles all of the OK communications.

* Each time data is received, engine-shell saves the data in environment variables. For example `A="cow"` becomes `$Arg_A="cow"`.

* After setting the environment, `system()` is called to run the program.

* When the `system()` call returns, engine-shell sends the next "OK" to the scheduler.

Engine-Shell can replace macros in the `system()` string with variables.

* `%{%}` = percent sign

* `%{P}` = PID of the spawner!

* `%{PP}` = PPID of the spawner! (This is the pid of the scheduler or SSH.)

* `%{A}` = Agent name assigned to the spawner (e.g., "license" or "unpack")

* `%{U}` = Agent-unique string assigned by the scheduler.

* `%{*}` = data from the scheduler as sent to the spawner.

* `%{#n}` = if the argument is a number (`${1}`, `${5}`, etc.) then replace with this argument number from the scheduler. NOTE: This does not take spaces or quoting into account! Examples:

```
abc def = 2 args :: first arg is %{1}, second is %{2} a "b c" d = 4 args
```

If you forget the `"%{"` or `"}"`, or the middle part is unknown, then it is treated like regular characters.

An example entry in the scheduler's configuration file:

```
agent=unpack host=fawkes | /usr/bin/ssh fawkes.rags "/usr/local/bin/engine-shell \ unpack 'ununpack -d /home/repository/ununpack/%{U} -qRCQx'"
```

## Using SSH for Remote Access

The scheduler is only designed to run processes on the the local system; it does not provide remote agent support. However, it is possible to run an agent on a remote host by using ssh.

Agents communicate with the scheduler through stdin and stdout. Any tunneling system that forwards stdin and stdout (e.g., ssh, stunnel, rsh, pppd, and netcat) can be used to create a connection for running the agent on a remote server. The requirements for any tunneling service:

* Must forward stdin and stdout with either line-buffering or no-buffering. Full-buffer tunnels will impede communications. (SSH uses no buffering, rsh uses line buffering. Other serives will vary.)

* Must send signals. If this scheduler kills the child using SIGINT or SIGKILL then the remote child must receive the signal and die. (SSH passes signals.) At minimum, if the local service is terminated (e.g., kill ssh) then the remote server (sshd) must terminate.

* Must not daemonize. The spawned process must keep the scheduler as the parent process since the scheduler will need to receive the SIGCHLD signals. For example, ssh does not separate itself from the terminal, but pppd can separate from the terminal.

In the scheduler's configuration file, you will specify the command-line that the agent should run. Rather than running a local application, specify the tunnel software (e.g., ssh remote_host agent_command).

## Creating the Makefile

Agent Makefile should consist of:

```Makefile
TOP = ../../..
VARS = $(TOP)/Makefile.conf
include $(VARS)

... EVERYTHING ELSE ...

include $(TOP)/Makefile.deps
```

The TOP should should navigate make to the directory that contain the src directory. For all currently written agents this is "../../.." but this could change for future agents. The main make target (i.e. the target that a simple "make" will use) should include "$(FOLIB)" as one of the dependencies. The "include $(TOP)/Makefile.deps" should come at the end of the Makefile so that it does not change the default build rule. This will cause the fossology C libraries to correctly be built before the agent is built.

The Functional tests should include the agent's executable as a build dependency to make sure that it is available during the test execution. The Unit tests should include the "$(FOLIB)" as a dependency during the build of the Unit test executable also.
