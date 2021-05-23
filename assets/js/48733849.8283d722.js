(self.webpackChunkfossology_blogs=self.webpackChunkfossology_blogs||[]).push([[804],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||l;return n?o.createElement(m,i(i({ref:t},h),{},{components:n})):o.createElement(m,i({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var c=2;c<l;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3385:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return r},toc:function(){return s},default:function(){return h}});var o=n(2122),a=n(9756),l=(n(7294),n(3905)),i={},r={unversionedId:"docs/Job-Scheduler",id:"docs/Job-Scheduler",isDocsHomePage:!1,title:"Job-Scheduler",description:"The FOSSology job scheduler is a daemon that periodically checks the job queue and spawns agents to run scans.  Multiple jobs can be run simultaneously as defined in fossology.conf.",source:"@site/docs/docs/Job-Scheduler.md",sourceDirName:"docs",slug:"/docs/Job-Scheduler",permalink:"/fossology-blogs/docs/docs/Job-Scheduler",editUrl:"https://github.com/Aman-Codes/fossology-blogs/edit/master/docs/docs/Job-Scheduler.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install-from-Source",permalink:"/fossology-blogs/docs/docs/Install-from-Source"},next:{title:"Known-Security-Risks",permalink:"/fossology-blogs/docs/docs/Known-Security-Risks"}},s=[{value:"Terminology",id:"terminology",children:[]},{value:"Scheduler Architecture",id:"scheduler-architecture",children:[]},{value:"Configuration files",id:"configuration-files",children:[{value:"fossology.conf",id:"fossologyconf",children:[]},{value:"Agent.conf&#39;s",id:"agentconfs",children:[]}]},{value:"Communicating with a running scheduler",id:"communicating-with-a-running-scheduler",children:[]},{value:"Log files",id:"log-files",children:[{value:"Setting Scheduler verbosity",id:"setting-scheduler-verbosity",children:[]}]},{value:"Agent interface",id:"agent-interface",children:[]}],c={toc:s};function h(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The FOSSology job scheduler is a daemon that periodically checks the job queue and spawns agents to run scans.  Multiple jobs can be run simultaneously as defined in fossology.conf."),(0,l.kt)("h2",{id:"terminology"},"Terminology"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"job stream"),": A list of all the job steps queued at the same time for an upload.  For example, all the job steps (programs) necessary to get a particular upload from unpack through all of its scans."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"job"),": a specific step in the process of working on an upload. Each job would be associated with a different type of agent. For example if a person uploaded a .tar file and wanted license and copyright analysis run on the file, there would be a job for the unpack step, a job for the license step and a job for the copyright step."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"agent"),": The actual process that the scheduler will spawn and be communicating with. An instance of the copyright scanner would be an example of an agent. A job is a scheduler construct used to run an agent process.")),(0,l.kt)("h2",{id:"scheduler-architecture"},"Scheduler Architecture"),(0,l.kt)("p",null,"We use a classic client server communication style for both the agent communication and the UI communication. Every time a new communication channel is needed (whether with the agents or the user interface), the scheduler will create a new thread to manage the communications with that channel. This makes the communication logic much simpler."),(0,l.kt)("p",null,"Every time a new agent is created, a new thread is spawned to manage its communications. If the communication thread receives anything that would involve changing a data structure internal to the scheduler, it passes the information off to the main thread instead of changing it personally. This is done to simplify the need for locking large data structures and to hopefully eliminate the possibility of a race condition within the scheduler. The communication threads send information to the main thread using events. The communication thread will package the function and arguments and pass it to a concurrent queue that the main thread is waiting on."),(0,l.kt)("p",null,"When a new job stream is found in the job queue, the scheduler will create only the jobs for that job stream that have all the preconditions fulfilled. Once created the jobs will have agents allocated to them. Allocated agents belong to the job and will remain in the scheduler's data structures until the job is removed from the system. Even if agents fail, the information about what the agent was processing is needed since it will be given to a different agent in an attempt to resolve the failure. Therefore, within the system, a job stream owns jobs, and these jobs own agents. Jobs are responsible for cleaning up any agents allocated to them."),(0,l.kt)("p",null,'Within a job, when an agent is ready for data, it will inform the main thread that it is waiting. The main thread will then take a chunk of data from the job that the agent belongs to and allocate it to the agent. The main thread will then inform the communication thread that there is pending data. The communication thread will then be responsible for sending the data to the corresponding process. It is important to note that the communication threads are using blocking IO on the pipe from the corresponding process. The only way for the main thread to wake a communication thread is to write to this pipe. As a result, any string that starts with "@" is reserved as a communication from the scheduler instead of the corresponding process. Writing anything that starts with "@" to stdout within an agent will result in undefined behavior. '),(0,l.kt)("p",null,"Here are some other properties of the scheduler:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Scheduler can take advantage of multiple processors on whatever machine it is running on. "),(0,l.kt)("li",{parentName:"ul"},"Simplified code for communicating with agents since all IO would be blocking instead of non-blocking. "),(0,l.kt)("li",{parentName:"ul"},"Master thread can not get swamped with communications between the agents and can concentrate on managing new jobs. "),(0,l.kt)("li",{parentName:"ul"},"Uses GLib"),(0,l.kt)("li",{parentName:"ul"},"Job queue is implemented in db tables: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"job  - ",(0,l.kt)("em",{parentName:"li"},"the job stream")),(0,l.kt)("li",{parentName:"ul"},"jobqueue  - ",(0,l.kt)("em",{parentName:"li"},"individual jobs")),(0,l.kt)("li",{parentName:"ul"},"jobdepends - ",(0,l.kt)("em",{parentName:"li"},"job dependencies (for example, you can't run buckets until the license scan is done)"))))),(0,l.kt)("h2",{id:"configuration-files"},"Configuration files"),(0,l.kt)("p",null,"The scheduler uses two configuration files, fossology.conf to define critical system parameters and agent specific config files."),(0,l.kt)("h3",{id:"fossologyconf"},"fossology.conf"),(0,l.kt)("p",null,"This is the master configuration file for the FOSSology installation.  It is divided into sections in square brackets, like ",(0,l.kt)("strong",{parentName:"p"},"[FOSSOLOGY]")," followed by key-value pairs.  Comments start with a semicolon.  By default the fossology.conf file is installed in /etc/fossology for packages and /usr/local/etc/fossology for source installs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'**Sample fossology.conf**\n\n[FOSSOLOGY]\n; These define the scheduler port and host\nport = 24693\naddress = localhost\n\n; Repository file hierarchy depth\n; For example, a depth of 3 would result in a file being saved in a directory like files/0f/23/e2/\n; Each directory level is the first, second and third characters of the filename being saved.\ndepth = 3\n\n; Location of the file repository\n; This is the location of all the uploaded files, job log files and temporary storage used for unpacking uploads.\npath = /srv/fossology/repository\n\n; proxy settings that will be used by fossology agents\n; NOTE: there must me NO spaces between items because these strings are used as is with wget.\n; examples:\nftp_proxy = http://web-proxy.mydomain.com:3128 \nno_proxy = \'localhost,.mydomain.com\'\nhttp_proxy  = http://web-proxy.mydomain.com:8088\nhttps_proxy = http://web-proxy.mydomain.com:8088\n\n[HOSTS]\n; Define hosts available to analyze files. \n; Format: {simple name} = {qualified domain name} {configuration directory} {Max simultaneous agents to run} \n; **AGENT_DIR** can be used instead of the configuration directory path.\n; Here is an example for a system that uses 6 other servers as slaves to run scans\nlocalhost = localhost AGENT_DIR 1\nbinky       = foagent2.mydomain.com /etc/fossology 5\ncrookshanks = foagent3.mydomain.com /etc/fossology 5\nfirenze     = foagent4.mydomain.com /etc/fossology 5\nhedwig      = foagent5.mydomain.com /etc/fossology 5\nhermes      = foagent6.mydomain.com /etc/fossology 5\nbane        = foagent1.mydomain.com /etc/fossology 5\n\n; A much simpler example would be if you are only running FOSSology on a single server.  In that case\n; you may only need something like:\n; localhost = localhost AGENT_DIR 10\n\n[REPOSITORY]\n; This defines how the repository is distributed among your servers.\n; Format: {simple name} = {repository area} {Start} {End}\n; The Start/End are the directory names (see Repository file hierarchy depth above)\n; The repository area would be "files" or "gold", but \'*\' is shorthand for all areas.\nbane[] = * 00 2a\ncrookshanks[] = * 2b 54\nbinky[] = * 55 7f\nfirenze[] = * 80 aa\nhermes[] = * ab d4\nhedwig[] = * d5 ff\n\n; A simple case for a single server running FOSSology would have all the repository files on localhost:\n; localhost[] = * 00 ff\n\n[DIRECTORIES]\n\n; Project Name and Group \n; Do not change after installation since PROJECT and PROJECTGROUP is used in installation \n; directory names and ownership.\n; Use PREFIX to install multiple copies of FOSSology.\nPROJECT=fossology\nPROJECTGROUP=fossy\n\n; all the directories in this section were chosen to be LSB compliant.\n; see http://www.linuxfoundation.org/collaborate/workgroups/lsb \n; base of the program data tree\nPREFIX=/usr\n\n; executable programs that users run\nBINDIR=$PREFIX/bin\n\n; executable programs that sysadmins run\nSBINDIR=$PREFIX/sbin\n\n; object code libraries\nLIBDIR=$PREFIX/lib\n\n; header files\nINCLUDEDIR=$PREFIX/include\n\n; executables/libraries that only our project uses\nLIBEXECDIR=$PREFIX/lib/$PROJECT\n\n; non-arch-specific data\nDATAROOTDIR=$PREFIX/share\n\n; non-arch-dependent program data\nMODDIR=$DATAROOTDIR/$PROJECT\n\n; local state\nLOCALSTATEDIR=/var/local\n\n; project local state\nPROJECTSTATEDIR=$LOCALSTATEDIR/lib/$PROJECT\n\n; Scheduler log directory\nLOGDIR=/var/log/$PROJECT\n\n[EMAILNOTIFY]\n; This section allows the scheduler to send email notifications to users when their\n; job stream has finished. Both the header and footer are text files\n; in the fossology system configuration directory (the same\n; directory that contains this file). The subject is simply the subject that\n; will be used in the email notification.\n; The following variables may be used in the header and footer:\n;  $UPLOADNAME  - name of the uploaded file\n;  $BROWSELINK  - FOSSology Browse link to the uploaded file\n;  $SCHEDULERLOG  - link to the showjobs details page for the upload\n;  $JOBQUEUELINK - link to the showjobs page for the upload\n;  $UPLOADFOLDERNAME  - folder containing the upload\n;  $JOBRESULT  -  The completed job stream status, usually "COMPLETE" or "FAILED"\n\nheader  = sampleheader.txt\nfooter  = samplefooter.txt\nsubject = FOSSology scan complete\nclient  = /usr/bin/mailx\n')),(0,l.kt)("h3",{id:"agentconfs"},"Agent.conf's"),(0,l.kt)("p",null,"Each agent has its own configuration file that tells the scheduler how to run the agent.  Agent\nconfiguration files are in their module directory.  For example, src/nomos/nomos.conf in the source tree, or /etc/fossology/mods-enabled/nomos/nomos.conf in the installation tree."),(0,l.kt)("p",null,"Each configuration file must provide the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"command: the command line that will be used when starting the agent"),(0,l.kt)("li",{parentName:"ul"},"max: the maximum number of instances of this agent that may be run concurrently, -1 for no max."),(0,l.kt)("li",{parentName:"ul"},"special: list of anything special about the agent.  The special flags are:"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"EXCLUSIVE")," -- the agent will not run concurrently with any other agents"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"NOEMAIL")," -- when the agent finishes running, it will not generate an email notification"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"LOCAL")," -- only run this agent on the same computer as the scheduler"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"NOKILL"),"  -- do not kill the agent even if it appears to be nonresponsive.  Without this flag agents that have not pinged the scheduler in 10 minutes are killed.")),(0,l.kt)("p",null,"For example, ununpack.conf:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"; Section.  Must be 'default' (all configuration values are in sections that define their namespace)\n[default]\n\n; command: The command that the scheduler will use when creating an instance of this agent. \n; This will be parsed like a normal Unix command line.\n; The variables on the command line are parsed by the agent, not the scheduler\ncommand = ununpack -d %R/%H/ununpack/%U -qRCQx\n\n; max: The maximum number of this agent that is allowed to exist at any one time. \n; This is set to -1 if there is no limit on the number of instances of the agent.\nmax = -1\n\n; special: Scheduler directive for special agent attributes. \nspecial[] = \n; If we wanted to set a couple of special flags, we would add a line for each flag.\n; For example:\n;  special[] = NOKILL\n;  special[] = EXCLUSIVE\n")),(0,l.kt)("h2",{id:"communicating-with-a-running-scheduler"},"Communicating with a running scheduler"),(0,l.kt)("p",null,'You can send commands to a running scheduler.  The scheduler listens on the port specified in fossology.conf.  Anytime a new connection is made on the port, the scheduler will open a set of sockets for the connection and wait for credentials.  After a command is sent, the scheduler will respond with "received".  You can send the following commands:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"close")," This will close the connection to the scheduler. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"stop")," The scheduler will gracefully shutdown after the currently running jobs have finished. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"pause <job_id>")," The job id (job_pk) will pause. All agents associated with the job will be put to sleep."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"agents")," The scheduler will respond with a space separated list of agents configured to run."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"reload")," The scheduler will reload the configuration information for the agents and hosts. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"status")," The scheduler will respond on the same socket with all of the status information."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"status <job_id>")," the scheduler will respond with a detailed status for the specific job "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"restart <job_id>")," the scheduler will restart the job specified. Used exclusively on jobs that have been paused, if the job isn't paused this will error. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"verbose <level>"))," the verbosity level for the scheduler will be changed to match level. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"verbose <job_id> <level>"))," the verbosity level for all of the agents owned by the specified job will be changed to level. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"priority")," changes the priority of a particular job within the scheduler, this does not change the priority of the related job in the db. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"database")," this causes the scheduler to check the database job queue for new jobs.")),(0,l.kt)("h2",{id:"log-files"},"Log files"),(0,l.kt)("p",null,"There are two types of log files.  The scheduler log which is written to LOGDIR (see fossology.conf).  The agent logs are anything written to stdout or stderr by a running agent and are saved in the repository 'logs' directory ('path' in fossology.conf sets the repository path)."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.fossology.org/projects/fossology/wiki/How_to_Interpret_the_log_files"},"How to read log files")),(0,l.kt)("p",null,"There are 3 different logging functions to standardize how messages are written by the scheduler."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"lprintf"),": acts much like a standard printf but prints formatted data to the log file. The formatting for this data is extremely strict. All lines will be prepended by a time stamp.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"vlprintf"),": identical to lprintf() but takes a va_list. This provided exactly the same functionality as vprintf() does for printf().")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"clprintf"),": identical to lprintf() but should be used when printing to the log file from any thread that isn't the main thread. This essentially creates an event that will call lprintf to prevent messages from getting intermixed."))),(0,l.kt)("h3",{id:"setting-scheduler-verbosity"},"Setting Scheduler verbosity"),(0,l.kt)("p",null,"The new scheduler uses a very powerful system for the verbosity levels, it combines the use of a bit mask with standard verbosity levels. This makes it possible to get powerful debugging info while making non-debugging info easy to understand. Any verbose level below 8 will be interpreted strictly as a verbosity level. So 2 is more verbose than 1 and three is more verbose than 2, etc. Anything 8 and above will be interpreted as a bit mask for debugging the scheduler. For the bit mask, each bit will correspond to turning on verbosity for a particular source file. The highest order bit is used for things that should be file independent. Currently only the SPECIAL command from the agents is under this category as it can create a large amount of useless information in the log files."),(0,l.kt)("p",null,"The currently defined levels:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"0"),": Scheduler will only print errors. All other logging is disabled"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"1"),": Scheduler will print errors and notifications. Notifications include the scheduler startup and shutdown messages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"2"),": Scheduler will print errors, notifications, and warnings.")),(0,l.kt)("p",null,"The verbosity levels can be set in the fossology startup file (e.g. /etc/init.d/fossology) with SCHEDULEROPT. By default the value is set to"),(0,l.kt)("p",null,'SCHEDULEROPT="--daemon --reset --verbose=1"'),(0,l.kt)("p",null,"The currently define bit mask:"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"mask"),(0,l.kt)("td",null,"relevant file"),(0,l.kt)("td",null,"integer value for fo_cli")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"00000001000"),(0,l.kt)("td",null,"job.c"),(0,l.kt)("td",null,"8")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"00000010000"),(0,l.kt)("td",null,"agent.c"),(0,l.kt)("td",null,"16")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"00000100000"),(0,l.kt)("td",null,"scheduler.c"),(0,l.kt)("td",null,"32")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"00001000000"),(0,l.kt)("td",null,"event.c"),(0,l.kt)("td",null,"64")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"00010000000"),(0,l.kt)("td",null,"interface.c"),(0,l.kt)("td",null,"128")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"00100000000"),(0,l.kt)("td",null,"database.c"),(0,l.kt)("td",null,"256")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"01000000000"),(0,l.kt)("td",null,"host.c"),(0,l.kt)("td",null,"512")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"10000000000"),(0,l.kt)("td",null,"all files"),(0,l.kt)("td",null,"1024"))),(0,l.kt)("p",null,"The debugging levels can be set using the scheduler command line tool, fo_cli."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".../fo_cli  -v <integer>")),(0,l.kt)("p",null,"NOTE: this can result in very large values for the verbosity level when turning on debugging output. For example, a verbose level of 1016 is the smallest value that will turn on all verbosity levels."),(0,l.kt)("h2",{id:"agent-interface"},"Agent interface"),(0,l.kt)("p",null,"Agents should use the LOG_* functions in libfossscheduler.h (LOG_FATAL, LOG_ERROR, LOG_VERBOSE, etc.)"),(0,l.kt)("p",null,"Agents should use the scheduler interface defined in src/lib/c/libfossscheduler.c  There are 5 functions that handle communications between the scheduler and the agents."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"fo_scheduler_heart"),": agents should call this to update the number of items processed by the agents.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"fo_scheduler_connect"),": an agent should call this before calling any other api functions or parsing their command line arguments.  This will insure that any agent output will be logged (like errors).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"fo_scheduler_next"),": an agent can call this every time it needs a new piece of information from the scheduler. When this function returns NULL, the agent should clean up any allocated memory and call the next method.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"fo_scheduler_disconnect"),": This closes the connection to the scheduler and provides the scheduler with the return code of the agent. Anything printed by the agent after this will not get placed in its log file or interpreted by the scheduler.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"fo_scheduler_set_special"),": This allows the agent to set a special attribute about itself. Currently the only option is SPECIAL_NOKILL which causes the scheduler to not kill the agent event if it doesn't seem to be processing information."))),(0,l.kt)("p",null,"There is a global verbosity flage ",(0,l.kt)("strong",{parentName:"p"},"agent_verbose")," that all agents should use. This is implemented so that the scheduler is able to change the agent's verbose level."),(0,l.kt)("p",null,"example minimal agent:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C"},'/* include the header for the fossology api */\n#include <libfossology.h>\n\nint main(int argc, char** argv)\n{\n  /* before parsing argv and argc make sure   */\n  /* to initialize the scheduler connection   */\n  fo_scheduler_connect(&argc, argv);\n\n  /* we can set the agent to not be killed    */\n  /* even if it appears to be dead            */\n  fo_scheduler_set_special(SPECIAL_NOKILL, TRUE);\n\n  /* enter the main agent loop, continue to   */\n  /* loop until receiving NULL                */\n  while(fo_scheduler_next() != NULL)\n  {\n    /* current simply provides access to last */\n    /* message from the scheduler             */\n    printf("%s\\n", fo_scheduler_current());\n\n    /* call the heart beat with the number of */\n    /* items processed since last call        */\n    fo_scheduler_heart(1);\n  }\n\n  /* after cleaning up agent, disconnect from */\n  /* the scheduler. 0 indicates the agent ran */\n  /* correctly. Anything else is a failure    */\n  fo_scheduler_disconnect(0);\n\n  return 0;\n}\n')))}h.isMDXComponent=!0}}]);