## FOSSology General Administration Notes

FOSSology is a Linux server application. As such, basic knowledge of administering Linux application is very helpful for a successful installation of FOSSology. For demo or maybe personal purposes (or running the command line tools), the default settings when installing FOSSology might be OK, but using FOSSology as a server with multiple users, adjustments on the setup is required.

This document serves as an overview. For detailed technical background information, pls. see the separate [[Configuration and Tuning]] page.

## Introduction

FOSSology is a kind of LAMP application. In fact, instead of the MySQL server in LAMP applications, PostgreSQL is used. In summary FOSSology uses the following technologies:

* Apache Web server for serving PHP pages. Accordingly, mod_php, the module for processing PHP pages is required
* PHP, as you might have guessed is being used to generate the Web pages.
* PostgreSQL as database server.
* The file system for storing the unpacked uploads and also reports generated.
* Linux as the underlying OS.
* Some analysis agents are written in C/C++.

## Apache Web Server

The Apache Web Server is a key element for serving the Web pages. Accordingly a number of tasks are required for setting up a serious deployment, which include:

* Using the Apache configuration that come with FOSSology to adjust URL path, server name or port settings.
* Adding your own security settings, access control or that sort of what you might need.
* Maybe, for larger installations, tune the settings of allowed sessions.
* Configure the use of certificates for serving the Web pages over `https`.

A basic Apache [[site configuration file|https://github.com/fossology/fossology/blob/master/install/fo-apache.conf]] is provided as part of the installation.

## PHP and mod_php

FOSSology uses PHP to build and serve pages. Accordingly, the PHP settings may require adjustments when it comes to a larger amount of users or larger packages. The `php.ini`file require the following adjustments:

* The maximum size for uploading packages, which accordingly requires a change also for the maximum size for a `POST` request.
* The maximum memory size of a session

The following [[script|https://github.com/fossology/fossology/blob/master/install/scripts/php-conf-fix.sh]] used by the installation of FOSSology gives more technical insights.

## PostgreSQL

PostgreSQL is a rather sophisticated database server. Configuration options require understanding about database servers and also are required to tune the system for processing larger OSS packages, such as the Linux kernel. There is a detailed description on the page [[Configuration and Tuning]], just as some general points here:

* Access in a productive environment could consider changing the database password, the settings are found in `/etc/fossology/Db.conf`. Note that normally accessing the DB server from outside of the system is not easy possible after installation.
* Memory tuning should consider increasing the the `work_mem` from the default value to 32MB as a good start to work with packages as the Linux Kernel. Keep in mind that each session uses this amount of memory, so if plan to have 20 users concurrently (which is an excessive case already for an application like FOSSology), maybe each user having eight sessions open, this would translate to 5GB of RAM for this part alone.
* When running FOSSology, it might be a good idea to reindex the database from time to time (corntabbed, maybe every week end). As mentioned in the detailed [[Configuration and Tuning]], is another important point to consider.
* The [[page from the PostgreSQL project|https://wiki.postgresql.org/wiki/Performance_Optimization]] it is also a good read.

## File System

FOSSology unpacks every archive and stores the unpacked files in the file system. While this sounds normal, this can easily grow into an excessive amount of files in a single partition. One person reported a case where a 40GB partition was resulting in errors, not because of running out of space, but out of inodes. Some thoughts on the file system:

* Consider that unpacking files, means really unpacking it. Almost everything that is being uploaded to FOSSology is compressed in some ways, which gets unpacked on the server. Therefore, it is better to consider a flexible partitioning system where increasing the file system is not a big pain. 
* Do not consider platter-based hard drives as disk for FOSSology, both database and file system access significantly impact processing speed of FOSSology. We have found that on larger instances platter-based hard drives, FOSSology turned to not being usable anymore. In an virtualised environment, make sure that underlying hardware is based on SSDs.

## Linux

FOSSology needs Linux, because most of the dependencies are actually Linux packages. So unless your environment provides the required Linux packages, there is little chance for having it running natively on other OSes (maybe [[recent developments changes that|https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux]]). For important notes on the Linux part, please (again) see the [[Configuration and Tuning]] page.

FOSSology will create a fossy user in your system which runs the fossology parts. The main configuration files for FOSSology can be found in /etc/fossology. While the basic configuration file values are obvious, there is more tuning possible for the scheduler which schedules scan or analysis jobs on the server.

## The C/C++ part

Long running tasks on the FOSSology server are scheduled as separate processes running on your machine. There can be multiple users uploading OSS files for FOSSology concurrently. Or, if you have configured a "hot folder" where FOSSology automatically picks uploads for processing. For every upload some 6-8 processes are scheduled. Moreover, if you schedule reusing existing decisions, more jobs are scheduled and consequently, you can find easily 20 processes running concurrently on your server. So, multi-core processors help.

On another side, you may want to de-prioritize processes spawned by the FOSSology server if you would like to put an emphasis on particular analysis jobs. These settings can be found for each progress, in FOSSology terminology "agents", in `/etc/fossology/mods_enabled/*` By default, the may number of concurrently running agents is set to `-1`, meaning unlimited. Setting it to `1` results in allowing to have only one agent at a time. If you would like to serialize processing of uploads, setting the unpack agent to `1`, which is the first process that others depend on, would reduce the amount of the processing spent for new packages in the background for example. 