## Common settings

For values that you might want to adjust across the whole build tree

the build system uses variables set in Makefile.conf. The build

system uses these variables in all Makefiles and variables are inherited

down the hierarchy. By setting variables on the make command line you

can easily change things in the build

## CFLAGS

The default CFLAGS for all C compilation is "-g -O2 -Wall". Let's say

you wanted to build the whole tree with debugging and warnings but

without optimization. You could do that with

```Bash
$ make clean; make CFLAGS=-g -Wall
```

or just in a particular subdir and everything below it

```Bash
$ cd src/nomos/agent; make clean; make CFLAGS=-g -Wall
```

Or maybe you want to build the scheduler using electricfence

```Bash
$ cd src/scheduler/agent; make clean; make CFLAGS=-lefence
``

## Debugging examples

```Bash
$ make clean; make CFLAGS=-g -Wall
$ make clean; make CFLAGS="-g -Wall"  DEFS="-D DEBUG"
$ gdb -c core --args ./demomod  -v myfile.o
$ valgrind --track-origins=yes --tool=memcheck --leak-check=yes ./nomos -v copyright.txt 2> valgrind.out
```

For debugging the UI, xdebug is handy.

## Installation location

All installation locations are controlled by variables as well. You can

adjust the paths on the system where various files live by setting

variables from Makefile.conf. You can also install to a pseudoroot, for

example let's say you wanted to do a test install into a pseudoroot

rather than on the system itself

```Bash
$ make; make DESTDIR=/tmp/foo install
```

If you are someone packaging for a distribution you want to use the paths

defined by the FHS for distributions, and install to a pseudoroot so you

can run your packaging results.

```Bash
$ make PREFIX=/usr SYSCONFDIR=/etc/fossology LOCALSTATEDIR=/var
$ make DESTDIR=/tmp/foo PREFIX=/usr SYSCONFDIR=/etc/fossology LOCALSTATEDIR=/var \
          install
```

Note: PREFIX, SYSCONFDIR and LOCALSTATEDIR need to be set during the build as

the location of the files using these is embedded in the binaries. But

none of the other variables should need to be set at build time, only

at install time.

## File Preprocessing

The build tree has a lightweight file preprocessing system. This is

mainly used to load values from Makefile.conf into text or scripts that

will be installed on the system. To use it:

1. Name your input file with the name you want the output file to be

2. with a ".in" on the end. So if you wanted the post-processed file to

3. be "example" then name the input file "example.in".

4. Edit your input file and wherever you would like to use a variable

5. insert "{$VARIABLE}" in the input file. While we mostly use this for

6. variables, you can actually use perl code if you need to.

7. Insert the following into your Makefile (for our "example" above),

8. making sure to add something to your clean target to remove the

9. generated file

```
# include the preprocessing stuff
include $(TOP)/Makefile.process
# generate the example file
example: example-process

clean:
    rm -f example
```

Now you can also make other targets (like "all") dependent on the

"example" target.

## Clean up and testing

The utils/fo-cleanold utility is provided for users to be able to

remove old FOSSology installs from their system, but it is also very

useful in cleaning up a test system when testing installs. See the

help text for additional flags to remove the database and repository.

## Config Files

By default the install and postinstall do the right thing and don't

overwrite your config files. But if you do happen to want to overwrite

them there are ways to do that

* When doing 'make install' you can set the OVERWRITE variable like so # make OVERWRITE=yes install

* When running the postinstall you can use the -o option like so # /usr/local/lib/fossology/fo-postinstall -o

* These are also useful in testing if you want to make sure you are back

* at a basic install.

## Debugging php

If you are making changes to the web interface, you probably want to

turn on error reporting. Edit the php.ini file (location dependent on

your install, but probably something like /etc/php5/apache2/php.ini)

and add something like:

```
error_reporting  =  E_ALL & E_STRICT

 display_startup_errors = On

 log_errors = On

 log_errors_max_len = 0

 error_log = /var/log/apache2/php5.log
```

The log location must be writable by the user the webserver is running

as (probably www-data).

## Using Git

The FOSSology build system is designed to properly clean up your tree of

all built objects when you run a "make clean".

If you want to see what outstanding differences you have to the tree

you have checked out, run:

```Bash
$ make clean
$ git status
```

If it returns nothing then you are clean, otherwise it will list

files with differences and files that git doesn't know about.

## Coexisting installs

FOSSology is designed to support coexisting installations in 

different locations. For example you might have distribution packages of

FOSSology installed under /usr, but decide you want to try a new

version from Git using the normal install process to /usr/local. This

should work with the following caveats:

* database

* Your newer install may update the database. So your older code

* may not work, you may even break things.

* If you use two different databases. Adjust the Db.conf

* files to point at separate. The one exception might be if you are

* testing a fix of two very similar versions of the code and only

* have one active at a time.

* scheduler init script

* The FHS does not define how init scripts are supposed to coexist

* for multiple versions of the same software.

* FOSSology always installs in /etc/init.d/fossology

* It's up to you to decide which you want started on boot. Adjust the

* init script accordingly (note both the scheduler and default file

* locations) or just start the scheduler by hand.

* apache config

* apache works fine for two running fossology instances, but they will

* live in different locations on the filesystem and they can't both

* live at the same URL. Adjust accordingly.

* User interface

* It's easy to have two different versions of the UI operate on the same

* DB. Just install the alternate UI in a new location and point your

* web browser.