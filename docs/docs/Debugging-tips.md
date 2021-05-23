# Core files
The default action of certain signals is to cause a process to terminate and produce a core dump file, a disk file containing an image of the process's memory at the time of termination. This image can be used in a debugger (e.g., gdb) to inspect the state of the program at the time that it terminated. A list of the signals which cause a process to dump core can be found in signal.

A process can set its soft **RLIMIT_CORE** resource limit to place an upper limit on the size of the core dump file that will be produced if it receives a "core dump" signal.

There are various circumstances in which a core dump file is not produced:

*  The process does not have permission to write the core file.
    *  Writing the core file will fail if the directory in which it is to be created is nonwritable, or if a file with the same name exists and is not writable or is not a regular file (e.g., it is a directory or a symbolic link).
*  A (writable, regular) file with the same name as would be used for the core dump already exists, but there is more than one hard link to that file.
*  The file system where the core dump file would be created is full; or has run out of inodes; or is mounted read-only; or the user has reached their quota for the file system.
*  The directory in which the core dump file is to be created does not exist.
*  The **RLIMIT_CORE** (core file size) or **RLIMIT_FSIZE** (file size) resource limits for the process are set to zero; see getrlimit and the documentation of the shell's ulimit command.
*  The binary being executed by the process does not have read permission enabled.
*  The process is executing a set-user-ID (set-group-ID) program that is owned by a user (group) other than the real user (group) ID of the process.

## Check current core file limit
Linux system set limit on core file size which can be stored by a given user. Generally it is set to 0. You can check it for a user by running `ulimit -c` as the target user.

To set this limit to file size system, run `ulimit -c unlimited` as the target user.

## Place where core files are placed
Every time a core file is generated, it is place at the location set by `/proc/sys/kernel/core_pattern`. You can check it using `cat /proc/sys/kernel/core_pattern` or `sudo sysctl -p`.

To change it, edit `/etc/sysctl.conf` and add/change `kernel.core_pattern` with the template as `kernel.core_pattern = /var/crash/core-%e-%s-%u-%g-%p-%t` where

|Placeholder|Meaning|
|:---|:---|
|%%|a single % character|
|%p|PID of dumped process|
|%u|(numeric) real UID of dumped process|
|%g|(numeric) real GID of dumped process|
|%s|number of signal causing dump|
|%t|time of dump, expressed as seconds since the Epoch, 1970-01-01 00:00:00 +0000 (UTC)|
|%h|hostname (same as nodename returned by uname)|
|%e|executable filename (without path prefix)|
|%E|pathname of executable, with slashes ('/') replaced by exclamation marks ('!')|
|%c|core file size soft resource limit of crashing process (since Linux 2.6.24) |

Run `sudo sysctl -p` to update the core path and verify it.

To check if the changes are working, you can run
```
sleep 10 &
killall -SIGSEGV sleep
```

A core dump for sleep will be stored in `/var/crash/`.

## To analyze core dump file
The most common debugging program used is [GNU project debugger](https://www.gnu.org/software/gdb/). You can install gdb using
* On Debian based systems
    - `sudo apt-get install gdb`

### Loading core file
Core file can be loaded using `gdb <process> <core_file>`. This will help to load program symbols in the debugger along with the core file. If the original process who crated the dump is not available, you can simply pass it using `gdb --core <core_file>`.

To back-trace the function calls, call `bt` in the gdb.

For mode command [please refer the documentation](https://sourceware.org/gdb/current/onlinedocs/gdb/)

## Collecting core files for FOSSology
1. Enable core limits
    - `sudo su fossy -c "ulimit -c unlimited"`
1. Set the path for core files
    - `echo "kernel.core_pattern = /var/crash/core-%e-%s-%u-%g-%p-%t" | sudo tee -a /etc/sysctl.conf`
1. Reload the path
    - `sudo sysctl -p`