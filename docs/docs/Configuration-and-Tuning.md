### System Configuration and Tuning

**IMPORTANT NOTICE** if you see version numbers of Postgresql in the text or examples, it is just for the purpose of demonstration. It does not mean that you must install postgresql 8.4, for example. Postgresql version of current Debian and Ubuntu distros should do fine.

This document is designed to help you get FOSSology installed and ready
to use. Its intended audience is the system administrator who wants to
quickly get a local FOSSology instance up and running, or a distribution
developer looking to create packages.

For other system administrator documentation, see:
http://www.fossology.org/projects/fossology/wiki/Sysadmin_Documentation

### Disk Space

FOSSology stores uploaded data in a filesystem repository.  As you
upload and analyze packages via FOSSology, the repository can grow very
large.  The default location for a single system repository is
/srv/fossology/repository/ however this can be adjusted by the system
administrator to another location if desired.

It is recommended that the area you choose to keep the repository in,
be a separate mount point with at least 10x the size of the unpacked
data you intend to scan.  For a small system intended to just scan a
few small personal projects this might mean gigabytes, but for systems
intended for scanning large collections of software including Linux
distributions, this probably means hundreds of gigabytes to terabytes.
If you are using multiple hosts to store the repository, it is best to
spread the repository data evenly across the hosts.  See the User Guide
for more information about using multiple hosts.

#### Optional Email Notifications

Fossology can send email to users when their jobs finish.  To enable this 
feature sendmail and a mail transport agent (MTA) must be installed.  The script
fo-installdeps does NOT install a MTA as there is no easy way for fossology to
determine which MTA your site uses.  All mail transport agents (MTA), such as 
postfix, exim, sendmail, etc., provide a 'sendmail' command, and you probably
already have it on your system, but you may need to configure the MTA to be 
able to send the mail where you want it to go.

#### Adjusting the Kernel

On modern large memory systems (4 GB or larger), the linux kernel needs to be
adjusted to give PostgreSQL more shared memory.  This is an optimization step
for postgresql.

You can find more information about this optimization in the postgres docs.
For example,
   http://www.postgresql.org/docs/9.0/static/kernel-resources.html

If your system has the getconf utility, you can compute shmmax and shmall with
the following script (let's call it shm.sh):
```
#!/bin/bash
page_size=`getconf PAGE_SIZE`
phys_pages=`getconf _PHYS_PAGES`
shmall=`expr $phys_pages / 2`
shmmax=`expr $shmall \* $page_size`
echo kernel.shmmax=$shmmax
echo kernel.shmall=$shmall
```
Run shm.sh as root.
Set shmmax and shmall to take effect now (USE THE VALUES FROM shm.sh, NOT THE
SAMPLE VALUES BELOW):
```
# sysctl -w kernel.shmmax=17179869184
# sysctl -w kernel.shmall=4194304
```
Then make the changes persistant (on boot):
```
# ./shm.sh >> /etc/sysctl.conf
```

#### Preparing Postgresql

Your postgresql install should be configured and running. If you need
help doing that, consult the PostgreSQL user documentation at
http://www.postgresql.org/docs/manuals/.  If you are using SSL in
particular, see the section "Secure TCP/IP Connections with SSL" to set it up.

Edit `/etc/postgresql/<version>/main/postgresql.conf`:
The tuning and preferences in the config file will vary depending on your
installation. We don't provide an automated way to do this because it
is complicated and specific to your particular install goals. A good 
discussion of configuration settings can be found at 
http://wiki.postgresql.org/wiki/Tuning_Your_PostgreSQL_Server. Here are a
few of the more common settings you should consider changing. The integer 
values below are based on hypothetical system with *4GB* of RAM.

```
 listen_addresses = '*'              # listen to connections from all IPs
 max_connections = 50                # maximum number of client connections
                                     # allowed
 shared_buffers = 1GB                # If you have a system with 1GB or more
                                     # of RAM, a reasonable starting value 
                                     # for shared_buffers is 1/4 of the memory 
                                     # in your system.
 effective_cache_size = 2GB          # how much memory is available for disk 
                                     # caching; 1/2-3/4 of memory
 work_mem = 128MB                    # work_mem parameter allows PostgreSQL 
                                     # to do larger in-memory sorts
 maintenance_work_mem = 200MB        # roughly 50MB/GB of ram
 fsync = on                          # turns forced synchronization on or off
 full_page_writes = off	             # recover from partial page writes
 log_line_prefix = '%t %h %c'        # prepend a time stamp to all log entries
 standard_conforming_strings = on
 autovacuum = on                     # Enable autovacuum subprocess?  'on'
```

#### Database authentication

1. Make sure /etc/postgresql/8.4/main/pg_hba.conf is configured
   correctly to allow your connection.  This file controls: which hosts
   are allowed to connect, how clients are authenticated, which
   PostgreSQL user names they can use, which databases they can access.
   As a starting point, you will need something like the following for
   local connections:
```
    # local      DATABASE  USER  METHOD  [OPTION]
      local       all      all   md5
```
See http://www.postgresql.org/docs/current/static/client-authentication.html
   for detailed information.
   If you do need to edit it then restart postgresql so the changes take
   effect:
`/etc/init.d/postgresql-<version> restart`

2. Once the database is defined, verify connection with
`psql -d fossology -U fossy`
use the default password "fossy".  You should connect and see the following:
```
        Welcome to psql 8.4.11, the PostgreSQL interactive terminal.

        Type:  \copyright for distribution terms
               \h for help with SQL commands
               \? for help with psql commands
               \g or terminate with semicolon to execute query
               \q to quit

        fossology=>
```
      If so then you successfully connected. Type \q to quit.
3. If any steps fail, check the postgres log file for errors:
  /var/log/postgresql/postgresql-8.4-main.log

4. Change the default fossy password from "fossy" to something more secure.
`alter role 'fossy' with password 'newpassword'`

5. Change Db.conf (in /usr/local/etc/fossology, or /etc/fossology) for the new password.

#### Configuring PHP

If you're using the default PHP config, you can run this script to automatically adjust your php.ini to optimal settings for FOSSology.
```
sudo fossology/install/scripts/php-conf-fix.sh --overwrite
```

If you changed your particular php.ini file you may need to adjust these values manually.
Edit your php.ini file for apache (location dependent on your install, but
probably something like /etc/php5/apache2/php.ini) and make adjustments
that will work for your system and usage. Here are some things to
consider:

`max_execution_time = 300`
This controls how long, in seconds, a php process is allowed to run.  For "one shot" license analysis, particularly large jobs, or if your system is slow you may need to increase this.
```
memory_limit = 702M
post_max_size = 701M
upload_max_filesize = 700M
```
These control the size of file you will be able to upload via the UI, "Upload from File".  For very large uploads (for example DVD images) we recommend using the command line upload method or "Upload from URL", but you might want to increase these to handle up to larger sized uploads.  For example,
```
post_max_size=2048M
upload_max_filesize=2048M
```

#### Configuring Apache

You need to add something like the following to the apache config, and this will depend on:

* How you have apache configured. You might be creating a new site config using apache's "sites-available"/a2ensite(8) mechanism or editing an existing config you have setup. For example, on a Debian apache2 install you would have site config files in /etc/apache2/sites-available/ and you might be editing the default one or creating a new one.
* The path you want the FOSSology UI to appear on the server; this example uses "/repo/"
* Where your FOSSology is installed; this example assumes the source install path `/usr/local/share/fossology/www/ui`
The default package install path would be `/usr/share/fossology/www/ui`
* What other things you might be using apache for on the system.  For these reasons we can't provide an automated way of doing this. Put the configuration content in `/etc/apache2/sites-available/fossology.conf`
```
##### FOSSology example apache config

Alias "/repo" "/usr/local/share/fossology/www/ui"
<Directory "/usr/local/share/fossology/www/ui">
    AllowOverride None
    Options FollowSymLinks
    <IfVersion < 2.3>
        order allow,deny
        allow from all
        Satisfy Any
    </IfVersion>
    <IfVersion >= 2.3>
        Require all granted
    </IfVersion>
    # uncomment to turn on php error reporting
    #php_flag display_errors on
    #php_value error_reporting 2039
</Directory>
```
Enable the configuration using `sudo a2ensite fossology`.


**NOTE**: included in the above example are some commented lines used for
enabling php error reporting. If you are having problems you might
choose to enable these to help determine the problem. Normally you
probably want them turned off so they don't report confusing error
messages to your end users or reveal information about your system
configuration to potential attackers.

**NOTE**: in Fedora 18, in order to get the permission to visit, you have to add the entry 
'Require all granted' into Directory section.
```

##### FOSSology example apache config for Fedora 18

Alias /repo /usr/local/share/fossology/www/ui

<Directory "/usr/local/share/fossology/www/ui">
        AllowOverride None
        Options FollowSymLinks MultiViews
        Require all granted
        # uncomment to turn on php error reporting
        #php_flag display_errors on
        #php_value error_reporting 2039
</Directory>
```

Because this software dynamically generates web pages based on the database, you may want to tell web robots not to index pages.  You can do this with a robots.txt file in your DocumentRoot.  Here is a sample that tells all agents to ignore your /repo urls:
```
    User-agent: *
    Disallow: /repo
```

Once you have installed the configuration you can test it by running
(as root):
`apache2ctl configtest`
and if it tests ok, then you can restart the server with the new config
by running (as root):
`apache2ctl graceful`

#### Checking the Default Configuration Files

On a fresh install you start with default versions of configuration
files that contain reasonable defaults (where possible). You need to review and edit
where needed.
1. /usr/local/etc/fossology/fossology.conf (or /etc/fossology/fossology.conf)  
This file contains FOSSology configuration information and contains enough comments to make it self describing. Previous to version 2.0, there were four separate config files (Depth.conf, RepPath.conf, Proxy.conf, Hosts.conf).
 For a single server install, you will probably only need to look at the http_proxy and the section under EMAILNOTIFY.  For a detailed description of the new scheduler and config file, please see the [Scheduler Docs](http://www.fossology.org/projects/fossology/wiki/Scheduler_20)
2. Individual module (agent) configuration files:
With the introduction of FOSSology 2.0 and the new scheduler, each agent will come with its own configuration file.
```
/usr/local/etc/fossology/mods-enabled/adj2nest/adj2nest.conf
/usr/local/etc/fossology/mods-enabled/buckets/buckets.conf
/usr/local/etc/fossology/mods-enabled/copyright/copyright.conf
/usr/local/etc/fossology/mods-enabled/delagent/delagent.conf
/usr/local/etc/fossology/mods-enabled/mimetype/mimetype.conf
/usr/local/etc/fossology/mods-enabled/nomos/nomos.conf
/usr/local/etc/fossology/mods-enabled/pkgagent/pkgagent.conf
/usr/local/etc/fossology/mods-enabled/ununpack/ununpack.conf
/usr/local/etc/fossology/mods-enabled/wget_agent/wget_agent.conf
```
Each configuration file provides the following information to the scheduler:
*  command: the command line that will be used when starting the agent
*  max: the maximum number of instances of this agent running concurrently, -1 for no max.
*  special: list of anything special about the agent.

See the "Agent.conf's" section in the [Scheduler Docs](http://www.fossology.org/projects/fossology/wiki/Scheduler_20).