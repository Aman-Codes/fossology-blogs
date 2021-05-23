An agent is a background process that is initiated by the [scheduler](http://www.fossology.org/projects/fossology/wiki/Scheduler) at the request of a user. The request could come through the fossology user interface, or a [fossology command line utility](http://www.fossology.org/projects/fossology/wiki/Using_fossology_from_the_command_line).

Agents are spawned by the scheduler to process a job queue. More information on [programming the job queue can be found here](http://www.fossology.org/projects/fossology/wiki/Programming_for_the_job_queue).

## 4 Steps

Creating an agent is really a four step process.

1. Write the agent in fossology/agents/{NewAgentName}

2. Write a user interface plugin to allow the user to scheduler jobs for this new agent

3. Modify fossology/scheduler/mkschedconf.c to include the new agent in the scheduler selftest.

4. Update the fossology package confs to include any new agent dependencies.

## Some Agent Basics

### Idempotent

idempotent |ˈīdemˌpōtənt| This means that multiple requests to an agent to operate on the same data, will result in exactly the same results. So you can invoke the agent on file A as many times as you like, but the results will be the same as if you invoked the agent on file A a single time. No more data is produced, no less data is produced, and the data is the same.

With this property, you can re-invoke an agent without fear of corrupting the results stored in the database. This property is also used as an optimization. An agent can see that it has already processed a file, and therefore, ignore the request if asked to process it again.

If you want an agent to reanalyze a file you need a new agent key. *(add more on that and agent keys)* You need to save the agent_pk with the result of each analysis so the result record has a unique identifier that specified what agent wrote the data. This also provides an audit trail, if you reanalyze some data, the results of the previous analysis are available for comparison.

### Multiple Hosts

Agents will be scheduled to run on one or more hosts as specified in Scheduler.conf. This means that there may be 1-to-N instances of a single agent running simultaneously on 1-to-M hosts. Fortunately, each instance doesn't need to process all files. The scheduler is your friend. The scheduler can feed each running agent unique files to process. It can even feed them files that are local to the agent. When a job is queued, and jobqueue.runonpfile is NULL, jobqueue.jq_args are passed to the agent. If runonpfile is not null, jq_args contains sql which is executed by the scheduler, and each record of the result is passed to an agent. In this case, runonpfile contains the name of the column that the scheduler uses to determine which host to send which result to. This is how the scheduler knows what data to send to which host such that the files the agent processes are local to that host. See[programming_for_the_job_queue ](http://www.fossology.org/projects/fossology/wiki/Programming_for_the_job_queue_).

### What to process

So how does the agent know what to process? For example, let's say the agent needs to analyze all the files that were unpacked from upload "mypkg". You could write the agent with "mypkg" hardcoded as the upload to analyze, but that would be crazy. You could write it so that you pass in (cmd line arg or stdin) "mypkg". But that's not such a great technique given that there could be multiple instances of your agent running simultaneously on multiple machines. A good technique is to pass a data pair: pfile_pk, and file name. By doing this, the scheduler can farm out unique files to each agent instance. The scheduler can even farm out this data such that each agent only processes local files (as opposed to NFS mounted files).

### Death and Axes

Agents exist at the discretion of the scheduler. The scheduler can start them when needed and terminate them by closing the communication I/O channel (aka agent stdin). The scheduler may also send SIGKILL to an agent to make sure it really dies. When the scheduler starts a killing rampage, it SIGKILL's every instance of the agent. The scheduler KILL's an agent if the agent fails to start within 60 seconds. This means that the agent is spawned and has 60 seconds to write "OK" to stdout. That is the message telling the scheduler that the agent is ready. If no "OK" within 60 secs, then it's tough love from the scheduler and SIGKILL to the agent._(more on this later)_

Another time agents get SIGKILL'd is when the scheduler simply wants to test an agent (scheduler options -t and -T). The scheduler starts the agent, checks that it started successfully (gets the "OK"), then politely sends it a SIGKILL to immediately and unceremoniously die. This sounds like the scheduler really needs to work on its communication skills, but agents need to know how to handle this kind of rejection without making it personal. That is, they need to handle a KILL without getting in some bad state that changes its future behavior - remember Idempotent.

### Checklists

#### **Minimum Agent Checklist **

#### **Each agent must do the following:**

* Start heartbeat

* Tell scheduler agent is ready (write "OK" to stdout)

* Loop to read stdin (stop when stdin is closed)

#### **Typical Agent Checklist**

Agents typically do the following:

* Initialize internal data structures

* Open the fossology database

* Get their unique agent key

* Process command line options

* Start heartbeat

* Tell scheduler agent is ready (write "OK" to stdout)

* Loop to read stdin (stop when stdin is closed) ** Do work, based on data from stdin

* Close the database

* exit

### Initializing

#### **Init Data structs**

#### **Finding Agent Key**

#### **Flags and Options**

#### **DB access**

### Communicating with the FOSSology Scheduler

Agents communicate to the scheduler via stdin/stdout. This simple interface makes it easy for an agent to be written in any language. Agents must also support a heartbeat _ (link to below)._ However, the current agent library of common functions is only written in C. Some common agent utilities are also available as standalone utilities. _ (link to rep utilities)_

#### **Agent parameters**

Important fields to queue an agent are jq_args and jq_runonpfile. These contain the agent specific code. jq_args contains a string that is passed to the agent UNLESS jq_runonpfile is set. In the latter case, jq_args is sql that the scheduler runs, and then the scheduler passes the results (one row at a time) to the agent. jq_runonpfile is the name of a column returned by the query and it is used to determine which host receives the data. So jq_runonpfile needs to be the name of the column that returns the sha1 of the pfile.

As soon as the agent writes "OK", the scheduler sees that you are ready to accept data. If the scheduler is ready to run the agent, it makes sure it has data (runs the sql from jq_args), then it starts passing, one line at a time, the sql results to the agent, using the jq_runonpfile to determine which host should get the data.

The code in jq_args should logically say "given an upload_pk, find all the pfiles, that this agent_pk has not yet processed". Typically, the query also has a limit clause so that a single query won't hog the scheduler. Limit 5000 is what we use for bsam-engine. So after every 5000 records passed to bsam_engine, the scheduler looks to see if other higher priority jobs need to run. If not, is runs the exact same query (jq_args) again. This is why the logic says "that this agent_pk has not yet processed".

#### **Messages**

An agent can send the following commands to the scheduler (by writing to stdout):

<table>
  <tr>
    <td>Command</td>
    <td>Meaning</td>
  </tr>
  <tr>
    <td>OK</td>
    <td>This tells the scheduler that the agent is ready to accept data (eg file to process)</td>
  </tr>
  <tr>
    <td>FATAL message</td>
    <td>This tells the scheduler to write a FATAL error (the message) to the scheduler log file.</td>
  </tr>
  <tr>
    <td>FATAL: message</td>
    <td>Same as FATAL</td>
  </tr>
  <tr>
    <td>ERROR message</td>
    <td>Write Error message to log file</td>
  </tr>
  <tr>
    <td>ERROR: message</td>
    <td>Same as ERROR</td>
  </tr>
  <tr>
    <td>WARNING message</td>
    <td>Write Warning message to log file</td>
  </tr>
  <tr>
    <td>WARNING: message</td>
    <td>Same as WARNING</td>
  </tr>
  <tr>
    <td>LOG message</td>
    <td>Write message to log file</td>
  </tr>
  <tr>
    <td>Success</td>
    <td>Not currently used</td>
  </tr>
  <tr>
    <td>Heartbeat</td>
    <td>The scheduler must receive a heartbeat every MAXHEARTBEAT seconds or else it will assume the agent has died or is hung. If the agent times out, the scheduler log the event and then attempt to kill it. MAXHEARTBEAT is a constant in agents.h, default is 180 seconds.</td>
  </tr>
  <tr>
    <td>DB: sql</td>
    <td>The scheduler executes sql.</td>
  </tr>
  <tr>
    <td>ItemsProcessed integer</td>
    <td>Scheduler updates items processed for the job</td>
  </tr>
  <tr>
    <td>ECHO message</td>
    <td>same as LOG</td>
  </tr>
  <tr>
    <td>JQ_SUBS string value(proposed for future)</td>
    <td>Tells the scheduler to substitute value for string in jq_args. For example, JQ_SUBS $agent_pk 1234 tells the scheduler to look at jq_args and replace every "$agent_pk" string with "1234". This command may be sent multiple times to substitute multiple different variables (up to MAXJQSUBS set to 10 in spawn.h).</td>
  </tr>
  <tr>
    <td></td>
    <td>Writing anything else to the scheduler, is treated like LOG</td>
  </tr>
</table>


### Repository

### Removing Analysis Results

### Running Standalone

## Common Utilities

## Optimizations

### Local repository

### Avoid reinitialization

## Database

### Agent table

### Agent specific tables

### Shared agent tables

### Temp tables

## Agent Template

[Agent Template](http://www.fossology.org/projects/fossology/wiki/Agent_template_)

### Code

## Agent Examples