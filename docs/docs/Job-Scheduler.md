The FOSSology job scheduler is a daemon that periodically checks the job queue and spawns agents to run scans.  Multiple jobs can be run simultaneously as defined in fossology.conf.

## Terminology

* **job stream**: A list of all the job steps queued at the same time for an upload.  For example, all the job steps (programs) necessary to get a particular upload from unpack through all of its scans.
* **job**: a specific step in the process of working on an upload. Each job would be associated with a different type of agent. For example if a person uploaded a .tar file and wanted license and copyright analysis run on the file, there would be a job for the unpack step, a job for the license step and a job for the copyright step.
* **agent**: The actual process that the scheduler will spawn and be communicating with. An instance of the copyright scanner would be an example of an agent. A job is a scheduler construct used to run an agent process.

## Scheduler Architecture

We use a classic client server communication style for both the agent communication and the UI communication. Every time a new communication channel is needed (whether with the agents or the user interface), the scheduler will create a new thread to manage the communications with that channel. This makes the communication logic much simpler.

Every time a new agent is created, a new thread is spawned to manage its communications. If the communication thread receives anything that would involve changing a data structure internal to the scheduler, it passes the information off to the main thread instead of changing it personally. This is done to simplify the need for locking large data structures and to hopefully eliminate the possibility of a race condition within the scheduler. The communication threads send information to the main thread using events. The communication thread will package the function and arguments and pass it to a concurrent queue that the main thread is waiting on.

When a new job stream is found in the job queue, the scheduler will create only the jobs for that job stream that have all the preconditions fulfilled. Once created the jobs will have agents allocated to them. Allocated agents belong to the job and will remain in the scheduler's data structures until the job is removed from the system. Even if agents fail, the information about what the agent was processing is needed since it will be given to a different agent in an attempt to resolve the failure. Therefore, within the system, a job stream owns jobs, and these jobs own agents. Jobs are responsible for cleaning up any agents allocated to them.

Within a job, when an agent is ready for data, it will inform the main thread that it is waiting. The main thread will then take a chunk of data from the job that the agent belongs to and allocate it to the agent. The main thread will then inform the communication thread that there is pending data. The communication thread will then be responsible for sending the data to the corresponding process. It is important to note that the communication threads are using blocking IO on the pipe from the corresponding process. The only way for the main thread to wake a communication thread is to write to this pipe. As a result, any string that starts with "@" is reserved as a communication from the scheduler instead of the corresponding process. Writing anything that starts with "@" to stdout within an agent will result in undefined behavior. 

Here are some other properties of the scheduler:
* Scheduler can take advantage of multiple processors on whatever machine it is running on. 
* Simplified code for communicating with agents since all IO would be blocking instead of non-blocking. 
* Master thread can not get swamped with communications between the agents and can concentrate on managing new jobs. 
* Uses GLib
* Job queue is implemented in db tables: 
   * job  - _the job stream_
   * jobqueue  - _individual jobs_
   * jobdepends - _job dependencies (for example, you can't run buckets until the license scan is done)_

## Configuration files
The scheduler uses two configuration files, fossology.conf to define critical system parameters and agent specific config files.

###  fossology.conf 
This is the master configuration file for the FOSSology installation.  It is divided into sections in square brackets, like **[FOSSOLOGY]** followed by key-value pairs.  Comments start with a semicolon.  By default the fossology.conf file is installed in /etc/fossology for packages and /usr/local/etc/fossology for source installs.

```
**Sample fossology.conf**

[FOSSOLOGY]
; These define the scheduler port and host
port = 24693
address = localhost

; Repository file hierarchy depth
; For example, a depth of 3 would result in a file being saved in a directory like files/0f/23/e2/
; Each directory level is the first, second and third characters of the filename being saved.
depth = 3

; Location of the file repository
; This is the location of all the uploaded files, job log files and temporary storage used for unpacking uploads.
path = /srv/fossology/repository

; proxy settings that will be used by fossology agents
; NOTE: there must me NO spaces between items because these strings are used as is with wget.
; examples:
ftp_proxy = http://web-proxy.mydomain.com:3128 
no_proxy = 'localhost,.mydomain.com'
http_proxy  = http://web-proxy.mydomain.com:8088
https_proxy = http://web-proxy.mydomain.com:8088

[HOSTS]
; Define hosts available to analyze files. 
; Format: {simple name} = {qualified domain name} {configuration directory} {Max simultaneous agents to run} 
; **AGENT_DIR** can be used instead of the configuration directory path.
; Here is an example for a system that uses 6 other servers as slaves to run scans
localhost = localhost AGENT_DIR 1
binky       = foagent2.mydomain.com /etc/fossology 5
crookshanks = foagent3.mydomain.com /etc/fossology 5
firenze     = foagent4.mydomain.com /etc/fossology 5
hedwig      = foagent5.mydomain.com /etc/fossology 5
hermes      = foagent6.mydomain.com /etc/fossology 5
bane        = foagent1.mydomain.com /etc/fossology 5

; A much simpler example would be if you are only running FOSSology on a single server.  In that case
; you may only need something like:
; localhost = localhost AGENT_DIR 10

[REPOSITORY]
; This defines how the repository is distributed among your servers.
; Format: {simple name} = {repository area} {Start} {End}
; The Start/End are the directory names (see Repository file hierarchy depth above)
; The repository area would be "files" or "gold", but '*' is shorthand for all areas.
bane[] = * 00 2a
crookshanks[] = * 2b 54
binky[] = * 55 7f
firenze[] = * 80 aa
hermes[] = * ab d4
hedwig[] = * d5 ff

; A simple case for a single server running FOSSology would have all the repository files on localhost:
; localhost[] = * 00 ff

[DIRECTORIES]

; Project Name and Group 
; Do not change after installation since PROJECT and PROJECTGROUP is used in installation 
; directory names and ownership.
; Use PREFIX to install multiple copies of FOSSology.
PROJECT=fossology
PROJECTGROUP=fossy

; all the directories in this section were chosen to be LSB compliant.
; see http://www.linuxfoundation.org/collaborate/workgroups/lsb 
; base of the program data tree
PREFIX=/usr

; executable programs that users run
BINDIR=$PREFIX/bin

; executable programs that sysadmins run
SBINDIR=$PREFIX/sbin

; object code libraries
LIBDIR=$PREFIX/lib

; header files
INCLUDEDIR=$PREFIX/include

; executables/libraries that only our project uses
LIBEXECDIR=$PREFIX/lib/$PROJECT

; non-arch-specific data
DATAROOTDIR=$PREFIX/share

; non-arch-dependent program data
MODDIR=$DATAROOTDIR/$PROJECT

; local state
LOCALSTATEDIR=/var/local

; project local state
PROJECTSTATEDIR=$LOCALSTATEDIR/lib/$PROJECT

; Scheduler log directory
LOGDIR=/var/log/$PROJECT

[EMAILNOTIFY]
; This section allows the scheduler to send email notifications to users when their
; job stream has finished. Both the header and footer are text files
; in the fossology system configuration directory (the same
; directory that contains this file). The subject is simply the subject that
; will be used in the email notification.
; The following variables may be used in the header and footer:
;  $UPLOADNAME  - name of the uploaded file
;  $BROWSELINK  - FOSSology Browse link to the uploaded file
;  $SCHEDULERLOG  - link to the showjobs details page for the upload
;  $JOBQUEUELINK - link to the showjobs page for the upload
;  $UPLOADFOLDERNAME  - folder containing the upload
;  $JOBRESULT  -  The completed job stream status, usually "COMPLETE" or "FAILED"

header  = sampleheader.txt
footer  = samplefooter.txt
subject = FOSSology scan complete
client  = /usr/bin/mailx
```

### Agent.conf's

Each agent has its own configuration file that tells the scheduler how to run the agent.  Agent
configuration files are in their module directory.  For example, src/nomos/nomos.conf in the source tree, or /etc/fossology/mods-enabled/nomos/nomos.conf in the installation tree.

Each configuration file must provide the following:

* command: the command line that will be used when starting the agent
* max: the maximum number of instances of this agent that may be run concurrently, -1 for no max.
* special: list of anything special about the agent.  The special flags are:
* **EXCLUSIVE** -- the agent will not run concurrently with any other agents
* **NOEMAIL** -- when the agent finishes running, it will not generate an email notification
* **LOCAL** -- only run this agent on the same computer as the scheduler
* **NOKILL**  -- do not kill the agent even if it appears to be nonresponsive.  Without this flag agents that have not pinged the scheduler in 10 minutes are killed.

For example, ununpack.conf:

```
; Section.  Must be 'default' (all configuration values are in sections that define their namespace)
[default]

; command: The command that the scheduler will use when creating an instance of this agent. 
; This will be parsed like a normal Unix command line.
; The variables on the command line are parsed by the agent, not the scheduler
command = ununpack -d %R/%H/ununpack/%U -qRCQx

; max: The maximum number of this agent that is allowed to exist at any one time. 
; This is set to -1 if there is no limit on the number of instances of the agent.
max = -1

; special: Scheduler directive for special agent attributes. 
special[] = 
; If we wanted to set a couple of special flags, we would add a line for each flag.
; For example:
;  special[] = NOKILL
;  special[] = EXCLUSIVE
```

## Communicating with a running scheduler
You can send commands to a running scheduler.  The scheduler listens on the port specified in fossology.conf.  Anytime a new connection is made on the port, the scheduler will open a set of sockets for the connection and wait for credentials.  After a command is sent, the scheduler will respond with "received".  You can send the following commands:
* **close** This will close the connection to the scheduler. 
* **stop** The scheduler will gracefully shutdown after the currently running jobs have finished. 
* **pause <job_id>** The job id (job_pk) will pause. All agents associated with the job will be put to sleep.
* **agents** The scheduler will respond with a space separated list of agents configured to run.
* **reload** The scheduler will reload the configuration information for the agents and hosts. 
* **status** The scheduler will respond on the same socket with all of the status information.
* **status <job_id>** the scheduler will respond with a detailed status for the specific job 
* **restart <job_id>** the scheduler will restart the job specified. Used exclusively on jobs that have been paused, if the job isn't paused this will error. 
* **`verbose <level>`** the verbosity level for the scheduler will be changed to match level. 
* **`verbose <job_id> <level>`** the verbosity level for all of the agents owned by the specified job will be changed to level. 
* **priority** changes the priority of a particular job within the scheduler, this does not change the priority of the related job in the db. 
* **database** this causes the scheduler to check the database job queue for new jobs.

## Log files

There are two types of log files.  The scheduler log which is written to LOGDIR (see fossology.conf).  The agent logs are anything written to stdout or stderr by a running agent and are saved in the repository 'logs' directory ('path' in fossology.conf sets the repository path).

[How to read log files](http://www.fossology.org/projects/fossology/wiki/How_to_Interpret_the_log_files)

There are 3 different logging functions to standardize how messages are written by the scheduler.

* **lprintf**: acts much like a standard printf but prints formatted data to the log file. The formatting for this data is extremely strict. All lines will be prepended by a time stamp.

* **vlprintf**: identical to lprintf() but takes a va_list. This provided exactly the same functionality as vprintf() does for printf().

* **clprintf**: identical to lprintf() but should be used when printing to the log file from any thread that isn't the main thread. This essentially creates an event that will call lprintf to prevent messages from getting intermixed.

### Setting Scheduler verbosity

The new scheduler uses a very powerful system for the verbosity levels, it combines the use of a bit mask with standard verbosity levels. This makes it possible to get powerful debugging info while making non-debugging info easy to understand. Any verbose level below 8 will be interpreted strictly as a verbosity level. So 2 is more verbose than 1 and three is more verbose than 2, etc. Anything 8 and above will be interpreted as a bit mask for debugging the scheduler. For the bit mask, each bit will correspond to turning on verbosity for a particular source file. The highest order bit is used for things that should be file independent. Currently only the SPECIAL command from the agents is under this category as it can create a large amount of useless information in the log files.

The currently defined levels:
* **0**: Scheduler will only print errors. All other logging is disabled
* **1**: Scheduler will print errors and notifications. Notifications include the scheduler startup and shutdown messages
* **2**: Scheduler will print errors, notifications, and warnings.

The verbosity levels can be set in the fossology startup file (e.g. /etc/init.d/fossology) with SCHEDULEROPT. By default the value is set to

SCHEDULEROPT="--daemon --reset --verbose=1"

The currently define bit mask:

<table>
  <tr>
    <td>mask</td>
    <td>relevant file</td>
    <td>integer value for fo_cli</td>
  </tr>
  <tr>
    <td>00000001000</td>
    <td>job.c</td>
    <td>8</td>
  </tr>
  <tr>
    <td>00000010000</td>
    <td>agent.c</td>
    <td>16</td>
  </tr>
  <tr>
    <td>00000100000</td>
    <td>scheduler.c</td>
    <td>32</td>
  </tr>
  <tr>
    <td>00001000000</td>
    <td>event.c</td>
    <td>64</td>
  </tr>
  <tr>
    <td>00010000000</td>
    <td>interface.c</td>
    <td>128</td>
  </tr>
  <tr>
    <td>00100000000</td>
    <td>database.c</td>
    <td>256</td>
  </tr>
  <tr>
    <td>01000000000</td>
    <td>host.c</td>
    <td>512</td>
  </tr>
  <tr>
    <td>10000000000</td>
    <td>all files</td>
    <td>1024</td>
  </tr>
</table>


The debugging levels can be set using the scheduler command line tool, fo_cli.

`.../fo_cli  -v <integer>`

NOTE: this can result in very large values for the verbosity level when turning on debugging output. For example, a verbose level of 1016 is the smallest value that will turn on all verbosity levels.

## Agent interface
Agents should use the LOG_* functions in libfossscheduler.h (LOG_FATAL, LOG_ERROR, LOG_VERBOSE, etc.)

Agents should use the scheduler interface defined in src/lib/c/libfossscheduler.c  There are 5 functions that handle communications between the scheduler and the agents.

* **fo_scheduler_heart**: agents should call this to update the number of items processed by the agents.

* **fo_scheduler_connect**: an agent should call this before calling any other api functions or parsing their command line arguments.  This will insure that any agent output will be logged (like errors).

* **fo_scheduler_next**: an agent can call this every time it needs a new piece of information from the scheduler. When this function returns NULL, the agent should clean up any allocated memory and call the next method.

* **fo_scheduler_disconnect**: This closes the connection to the scheduler and provides the scheduler with the return code of the agent. Anything printed by the agent after this will not get placed in its log file or interpreted by the scheduler.

* **fo_scheduler_set_special**: This allows the agent to set a special attribute about itself. Currently the only option is SPECIAL_NOKILL which causes the scheduler to not kill the agent event if it doesn't seem to be processing information.

There is a global verbosity flage **agent_verbose** that all agents should use. This is implemented so that the scheduler is able to change the agent's verbose level.

example minimal agent:

```C
/* include the header for the fossology api */
#include <libfossology.h>

int main(int argc, char** argv)
{
  /* before parsing argv and argc make sure   */
  /* to initialize the scheduler connection   */
  fo_scheduler_connect(&argc, argv);

  /* we can set the agent to not be killed    */
  /* even if it appears to be dead            */
  fo_scheduler_set_special(SPECIAL_NOKILL, TRUE);

  /* enter the main agent loop, continue to   */
  /* loop until receiving NULL                */
  while(fo_scheduler_next() != NULL)
  {
    /* current simply provides access to last */
    /* message from the scheduler             */
    printf("%s\n", fo_scheduler_current());

    /* call the heart beat with the number of */
    /* items processed since last call        */
    fo_scheduler_heart(1);
  }

  /* after cleaning up agent, disconnect from */
  /* the scheduler. 0 indicates the agent ran */
  /* correctly. Anything else is a failure    */
  fo_scheduler_disconnect(0);

  return 0;
}
```