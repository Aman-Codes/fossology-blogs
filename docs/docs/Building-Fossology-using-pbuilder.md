# Building Fossology using [[project builder| http://www.project-builder.org/]]

These are instructions for building a release package.

*_Need to run with 'build' user on fobuild.fc.hp.com:~/_* 

## Instructions for automated Building packages

1. Building Test packages
  * Run [[runBuild_v2.0.php|https://github.com/fossology/fossology/blob/master/utils/runBuild_v2.0.php]] –V $version -t
  * All test packages generated under http://fobuild.fc.hp.com/fossology/$version/testing/$date/

2. Building Release packages
  * Use the script under build@fobuild.fc.hp.com:~/[[runBuild_v2.0.php|https://github.com/fossology/fossology/blob/master/utils/runBuild_v2.0.php]]

  * Commit all new $version conf files, using 2.0.0 as an example
    > cd to /home/build/pb/fossology/pbconf  
    > check out new code  
    > edit the following in the ...pbconf/tags/2.0.0/fossology.pb file:  
    > Change 'pburl fossology =' with new git url  
    > Change projver fossology = trunk to projver fossology = 2.0.0  
    > Change testver fossology = true to false.   
    > Change fossology/deb/changelog  
    > Check in  
 
  * Run runBuild_v2.0.php –V $version

  * All packages generated under http://fobuild.fc.hp.com/fossology/$version

from the irc log:
``` 
\<rando> hmmm, when I just try the number it says it can't be completed.... weird...  
\<vincent> 1. you should not change anything under /home/build/pb/project/   
\<rando> right, I figured that out.... :-)  
\<vincent> 2. go to /home/build/pb/fossology/pbconf/  
\<rando> K, I am there....  
\<vincent> 3. use the trunk/ directory to create release tag directlry under tags/  
\<vincent> for example, svn copy trunk/  tags/2.0.0-rc1/  
\<rando> 3 is confusing... ah ok, now I get it.... very important to mention svn copy rather than copy (cp)  
\<vincent> yes, for now under tags/ will have 2.0.0-rc1 directory  
\<rando> I have just removed that... let me copy again....  
\<rando> ok, so tag is now created....  
\<vincent> Change fossology.pb with new svn url  
\<vincent>  Change projver = 2.0.0-rc1   
\<vincent> Change testver fossology = false   
\<vincent>    Change fossology/deb/changelog   
\<rando> yes, but where do I change those?  In tags/2.0.0-rc1?   
\<vincent> yes  
\<rando> ah, ok....   
\<vincent> when finished the changes, checked it tags/2.0.0-rc1/    
\<vincent> checked in   
\<rando> ok, modifed and checked in.   
\<vincent> seems checked in wrong file   
\<rando> huh? it was under tags?    
\<vincent> need to change tags/2.0.0-rc1 and checked in tags/2.0.0-rc1   
\<rando> I changed: /home/build/pb/fossology/pbconf/tags/2.0.0-rc1/fossology.pb, wasn't that the right file?   
\<vincent> yes, but i saw your check in is trunk/fossology.pb   
\<rando> yes, I see that too, very weird... I checked in the above, but it shows as the trunk version?    
larrys_away is now known as larrys  
\<rando> under tags/2.0.0-rc1, there is nothing checked out and the fossology.pb file has been changed.   
\<rando> should I start the build?   
\<vincent> yes, just run runBuild_v2.0.php –V 2.0.0-rc1   
\<rando> have to change the deb change log first.... there doesn't seem to be a debchange command on this system, how did you edit the changelog?   
\<vincent> edit it by myself   
```

## Configure Build Server

1. Setup Build Environment
  * a.	need support virtualization(Inter VT or AMD-V)
  * b.	Memory, as larger as better, at least 4G Memory
  * c.	Disk: at least 100G disk space
  * d.	System: prefer RHEL5.6 x86_64 platform with kvm installed
  * e.	Check the server already installed: fobuild.fc.hp.com

2. Configure pb(project-builder) environment
  * a.	Create a configuration file under “build” user home directory called .pbrc
    >build@fobuild.fc.hp.com:~$ cat .pbrc  
    >\#how to get project-builder.org source  
    >pburl pb = svn://svn.project-builder.org/mondo/svn/pb  
    >  
    >\#where to get the packaging templates  
    >pbconfurl pb = svn://svn.project-builder.org/mondo/svn/pb/pbconf  
    >  
    >\#local prefix for sandbox checkouts and local build artifacts  
    >pbdefdir default = $ENV{'HOME'}/pb/projects  
    >pbdefdir pb = $ENV{'HOME'}  
    >pbconfdir pb = $ENV{'HOME'}/pb/pbconf  
    >  
    >\#location of Virtual Machine infrastructure  
    >vmpath default = /home/build/vm  
    >  
    >\#location of Virtual Environment (chroot) infrastructure  
    >vepath default = /home/mock  
    >  
    >\#fossology project URL of its pbconf  
    >pbconfurl fossology = git+https://github.com/fossology/fossology.git
    >\#pbconfurl fossology = $ENV{'HOME'}/pb/projects/fossology/pbconf  

  * b.	Get the prepared VM at fobuild.fc.hp.com:/home/build/vm/. Create a new directory to host these VMs.
    >build@fobuild.fc.hp.com:~$ mkdir ~/vm
  * c.	Create another .pbrc conf file in vmpath directory to store the parameters linked to VM management.    

    >build@osms.chn.hp.com:~$ cat ~/vm/.pbrc  
    >\#type of VM  
    >vmtype default = kvm  
    >vmcmd default = /usr/bin/kvm   
    >\#VM instance configuration   
    >vmntp default = pool.ntp.org   
    >vmntpcmd default = /usr/sbin/ntpdate   
    >vmhost default = localhost   
    >vmlogin default = pb   
    >vmport default = 2223   
    >vmtmout default = 120   
    >vmopt default = -m 1000 -nographic -no-kvm-irqchip   
    >vmsize default = 8G   
    >vmmonport default = 4444   
    >\#-nographic  
    >\#a comma seperated list of all the desired tuples (distro-ver-arch)  
    >vmlist default = fedora-17-i386,fedora-17-x86_64,ubuntu-10.04-i386,ubuntu-10.04-x86_64,rhel-6-i386,rhel-6-x86_64,ubuntu-11.10-i386,ubuntu-11.10-x86_64,ubuntu-11.04-i386,ubuntu-11.04-x86_64,debian-6.0-i386,debian-6.0-x86_64,ubuntu-12.10-i386,ubuntu-12.10-x86_64,ubuntu-12.04-i386,ubuntu-12.04-x86_64    

## Instructions for Building packages (runbuild_v2.0.php script automated this process)

If this builds environment setup correctly, just follow this instruction to create packages for testing and release. 
  1. Choose VERSION of packages to build, example 2.0.0    
When the VERSION choose, run follow command as login user:   

  > build@fobuild.fc.hp.com:~$ pb -p fossology -r 2.0.0 newproj fossology   
After run this command will generate $HOME/pb/projects/fossology/pbconf/2.0.0/ directory.   
  2. Check out all files needed by FOSSology building  

  > build@fobuild.fc.hp.com:~$ cd $HOME/pb/projects/fossology/pbconf/2.0.0/  
  > build@fobuild.fc.hp.com:~/pb/projects/fossology/pbconf/2.0.0$ rm -rf *  
Check out all files from https://github.com/fossology/fossology/tree/master/packaging/
To $HOME/pb/projects/fossology/pbconf/2.0.0/  
  3. Edit **fossology.pb** file under **$HOME/pb/projects/fossology/pbconf/2.0.0/** with new VERSION  

  > projver fossology = VERSION  
  > pburl fossology = git+https://github.com/fossology/fossology.git
  4. Generate all source and spec file for  different distro  

  > build@fobuild.fc.hp.com:~$ pb -p fossology -r 2.0.0 sbx2build  
  5. Build Packagess use all VMs  

  > build@fobuild.fc.hp.com:~$ pb -p fossology -r 2.0.0 -m debian-6.0-i386 launchvm  
  > build@fobuild.fc.hp.com:~$ pb -p fossology -r 2.0.0 -m debian-6.0-i386 setupvm  
  > build@fobuild.fc.hp.com:~$ pb -p fossology -r 2.0.0 -m debian-6.0-i386 build2vm  

## Create packages in RMs use project-builder

project-builder support to create packages in RMs, RM means Remote Machine, and could be a physical or Virtual one, which should pre-exist. (There are no detail documents introduce how to create packages in RMs, following instruction is my testing steps.)

  1. Add conf part into pbrc file

  > rmtype fossology = ssh   
  > rmlogin fossology = root   
  > rmport fossology = 22   
  > rmlist fossology = rhel-6-i386,debian-6-i386   
  > rmpath fossology = localhost   
  > rmtmout fossology = 10  
  > rmhost rhel-6-i386 = fo-centos-6-32.fc.hp.com   
  > rmhost debian-6-i386 = fo-debian-squeeze32.fc.hp.com   

  NOTE: rmhost list all the physical machine or virtual machine hostname connect with rmlist you want to build

  2. Setup the physical or virtual machine

  > a. Install project-builder on them   
  > b. setup machine `[build@fobuild ~]$ pb -p fossology -r 2.0.0 setuprm -P 22  `   
  > c. Install build package dependencies 

  3. Build packages on RMs

  > [build@fobuild ~]$ pb -p fossology -r 2.0.0 build2rm -P 22 