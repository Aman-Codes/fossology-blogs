This page maintains the FOSSology Project release notes, from the most recent release back to release 1.3.0.


### 3.2.0 Released Feb 8th, 2018

This release contains a number of big fixes and corrections for 3.2 Release Candidate 1

More information here: https://github.com/fossology/fossology/releases/tag/3.2.0

### 3.2.0 Release Candidate 1 Released Oct 20th, 2017

Major improvements include:

* Import of SDPX files and showing license result along with browse UI of the upload files and folders
* Word processor document output (for e.g. LibreOffice, OpenOffice) document summarizing analysis information
* Management of obligations a.k.d. license to-dos for licenses
* Brought the package builder infrastructure to work again

More information here: https://github.com/fossology/fossology/releases/tag/3.2.0rc1

### 3.1.0 Released April 21st 2017

Major improvements include:

* User Interface improvements to make bulk scan more efficient when used with multiple licenses at the same time
* New Dockerfile also used for Docker Hub, including composed containers with separate DB server
* Support for SPDX 2.1 document formats(tag:value format now available as well as RDF)
* Generation of Debian copyright file (aka DEP5).

More information at: https://github.com/fossology/fossology/releases/tag/3.1.0

### 3.1.0 Release Candidate 2 Released May 21st 2016

Just few corrections.

More information here: https://github.com/fossology/fossology/releases/tag/3.1.0rc2

### 3.1.0 Release Candidate 1 Released April 21st 2016

Many of the features for the 3.1.0 release

More information here: https://github.com/fossology/fossology/releases/tag/3.1.0rc1

### 3.0.0 Released November 5th, 2015

Small corrections compared to 3.0.0-RC1.

More information here: https://github.com/fossology/fossology/releases/tag/3.0.0

### 3.0.0-RC1 Released October 25th, 2015

#### New Features

Feature | Brief Explanation
--- | ---
New folder navigation | Jquery based table UI for downloads including sorting and filtering with more handling attributes per upload 
New license UI for editing concluded licenses | Instead of providing a separate UI for license conclusion, now a single file view license UI allows for efficient license situation review: highlighted texts and selected licenses are moving together to one view now.
Re-use of license decisions | At uploading a new file, a user can select existing uploads for reusing already applied license decisions, if the file hash is the same
Bulk assignment of license decisions based on text phrases | When identifying a phrase hinting to particular license (e.g. "license info can be found in readme"), the user can define this text as search string and assign a license decision to every matching file.
Auto-decision of the Monk and Nomos scanner find the same license in the same same text area | If both scanners find the same license by short name, then a license decision can be applied automatically
Adding Ninka as optional scanner | At upload or at scheduling jobs, the user can run Ninka scanner with FOSSology as third license scanner
New UI for editing copyrights | Separate display for URL, E-Mails, copyright statements and authorship notes
Adding the concept of candidate licenses, to let users add licenses as candidates for the system | New licenses must be added carefully to the server database. However, in order not to stop a user a reviewing an upload, candidate licenses can be registered for addition to the server by the server admin
License import and export using a CSV interface | Using CSV formatted files, licenses with the reference texts can be imported and exported to the FOSSology server
Adding readme / copying file generation  | Concluded licenses and copyright statements are written into a text file that is information for the distribution.
SPDX 2.0 file generation | Based on the scan results and concluded licenses, SPDX 2.0 XML format is generated (passes verification tool)

#### Issues: Corrections

Issue No. | Issue Title | Resolution
--- | --- | ---
[#508](https://github.com/fossology/fossology/issues/508) | Copyright agent fails to show copyrights without license information | Corrected filter value
[#492](https://github.com/fossology/fossology/issues/492) | Correcting SPDX-non compliant LicenseRefs | FOSSology license refs contained so characters like single quotes which are not SPDX compliant
[#490](https://github.com/fossology/fossology/issues/490) | Missing (report) cache for license overview | Fixed performance issue with separate new view in PHP
[#479](https://github.com/fossology/fossology/issues/479) | Correcting Nomos Segmentation fault | That was an issue also shown in testing, corrected
[#472](https://github.com/fossology/fossology/issues/472) | Adding escaping to license texts in SPDX output | If a license contains super wired text, the generated extracted texts could contains also these non-UTF-8 characters. As such, the SPDX was invalid.
[#469](https://github.com/fossology/fossology/issues/469) | Adding tooltip to the priority of the browse menu | In order to explain the user what the green and blue arrows in the priority column mean
[#467](https://github.com/fossology/fossology/issues/467) | Adding header content of main table in the browse view | In order to tell the user which the current folder is that is displayed
[#465](https://github.com/fossology/fossology/issues/465) | using wget_agent can modify files | Fixed an incompatibility with the wget call
[#404](https://github.com/fossology/fossology/issues/404) | Error when load the license browse page | Fixed error in migration script
[#401](https://github.com/fossology/fossology/issues/401) | At fo_nomos_license_list.php using --user instead of --username | Fixed by corrected commit
[#400](https://github.com/fossology/fossology/issues/400) | Upload from File page cannot select folder | Corrected the according FolderDAO (data access object)
[#392](https://github.com/fossology/fossology/issues/392) | Error when run cli cp2foss script | Corrected wrong function call
[#384](https://github.com/fossology/fossology/issues/384) | Dashboard failure in 2.6.2 | Was a compatibility issue between different postgresql versions, solved for 9.2 and 9.3 now
[#366](https://github.com/fossology/fossology/issues/366) | Incomplete scheduler error message | Loggin missing columns
[#364](https://github.com/fossology/fossology/issues/364) | At large number of jobs - performance problem | Correcting the SQL query to be a dimension faster
[#362](https://github.com/fossology/fossology/issues/362) | Allow install to skip version (to skip versions at updates) | Changed the fossinit.php accordingly
[#360](https://github.com/fossology/fossology/issues/360) | MIT and University of Illinois Open Source licenses not detected | Added licenses
[#359](https://github.com/fossology/fossology/issues/359) | Remove hardcoded path in wget_agent | Fixed / removed hardcoced path
[#355](https://github.com/fossology/fossology/issues/355) | Password in DBConnection string is printed to Fossology log when connection attempt fails | Password is roved from connection info map before printed to log
[#352](https://github.com/fossology/fossology/issues/352) | Copyright agent using uploadtree: is it better now? | Ran analyses on copyright precisions which confirmed copyright performance
[#350](https://github.com/fossology/fossology/issues/350) | License not found | Not really licenses, but some license references where not found, but they are found now with correction to the Nomos
[#349](https://github.com/fossology/fossology/issues/349) | cp2foss fails to upload a directory using '*' option | Corrected the use of wild cards
[#347](https://github.com/fossology/fossology/issues/347) | Copyright agent 2.5.0: support copyright symbol | Copyright symbol in UTF-8 is supported
[#345](https://github.com/fossology/fossology/issues/345) | copyright agent 2.5.0: non-ASCII symbols | Changed copyright agent does cover also non-ASCII symbols
[#339](https://github.com/fossology/fossology/issues/339) | A read only user can find none public files | Corrected access rights
[#335](https://github.com/fossology/fossology/issues/335) | Scanner dependency: Monk agent rescan link not shown (needed for new licenses) | Adding manual setting to allow for enabling monk rescans
[#323](https://github.com/fossology/fossology/issues/323) | Completely remove BSAM | Removed BSAM sub-project and UI references from codebase
[#282](https://github.com/fossology/fossology/issues/282) | Need License Admin Documentation | Added documentation to the fossology.org wiki
[#264](https://github.com/fossology/fossology/issues/264) | Nomos missing unidentified license ("Tapjoy") | Corrected and Nomos finds it now
[#259](https://github.com/fossology/fossology/issues/259) | Documentation fix for copyright agent | Corrected documentation of the copyright agent
[#251](https://github.com/fossology/fossology/issues/251) | On Maintenance page, be able to check all checkboxes one time | Corrected issue
[#218](https://github.com/fossology/fossology/issues/218) | Edit users forgets users agent selections | Corrected issue
[#213](https://github.com/fossology/fossology/issues/213) | Copyright - missed after long year string, for example ten years in a row | Corrected issue
[#212](https://github.com/fossology/fossology/issues/212) | Moving an upload folder fails (circle protection) | Corrected issue
[#24](https://github.com/fossology/fossology/issues/24) | Migration issue with table license_file_audit | Corrected issue

#### Issues: Enhancements

Issue No. | Issue Title | Resolution
--- | --- | ---
[#342](https://github.com/fossology/fossology/issues/342) | Show Jobs - add estimated completion date/time | New completion time column was added (ETA)
[#319](https://github.com/fossology/fossology/issues/319) | Tooltips for UI elements | Added tooltips mechanism and text for many UI elements
[#224](https://github.com/fossology/fossology/issues/224) | At listing of copyrights - add text filter | Added a filter field - comes with the new jquery UI
[#214](https://github.com/fossology/fossology/issues/214) | Create survey & solicit fossology users to respond to questions about fossology usage | yeay: http://www.fossology.org/projects/fossology/wiki/WhoUsesFOSSology

#### Issues: Closed w/o Particular Commit

Issue No. | Issue Title | Resolution
--- | --- | ---
[#474](https://github.com/fossology/fossology/issues/474) | copyright browser file path misplaced | Indeed, but UI needs major correction anyways, unchanged
[#388](https://github.com/fossology/fossology/issues/388) | Major Nomos Regression with AGPL | Checked that license finding is acceptable
[#387](https://github.com/fossology/fossology/issues/387) | Both Monk and Nomos appear to miss PostgreSQL License | Checked that license are found with reference file
[#338](https://github.com/fossology/fossology/issues/338) | License browser regression - schedule link | Checked that link is there
[#318](https://github.com/fossology/fossology/issues/318) | Scaling performance issues | Checked that large files seem to work with tables (also referring to #490)
[#216](https://github.com/fossology/fossology/issues/216) | ‘(c)' is recognized as a copyright signature wrongly | Retested with current version and does not seem to be a serious problem since false positives have been reduced
[#247](https://github.com/fossology/fossology/issues/247) | The maintagent - add feature to remove failed uploads | Closed because user can remove uploads also with the menu item for organising uploads
[#238](https://github.com/fossology/fossology/issues/238) | Browser tab interference when using FOSSology | Changes in the PHP UI do not show this issue anymore
[#225](https://github.com/fossology/fossology/issues/225) | Folder selection fails in Edit Uploaded File Properties | Retested and current version does not show issue anymore
[#219](https://github.com/fossology/fossology/issues/219) | New regex scanner module | There is on new module in the form of the all-new copyright agent (in c++) which is also generalised and thus extensible for new applications
[#215](https://github.com/fossology/fossology/issues/215) | Flag license as possibly proprietary | Closed without modification because it needs to be solved with commercial license options
[#180](https://github.com/fossology/fossology/issues/180) | Push continuous integration information to fossology.org | Is going to be moved to TLF
[#26](https://github.com/fossology/fossology/issues/26) | View License Audit Link confusing with Edit concluded license | Covered with changes in the UI anyways
[#25](https://github.com/fossology/fossology/issues/25) | Pull SPDX module into master branch | Closed, because SPDX module was there

### 2.6.2 Released Jan 15, 2015

* No changes from 2.6.2-RC1

### 2.6.2-RC1 Released Jan 6, 2015

* Performance enhancements for large uploads
* Several license scanner updates
* Fix for uploading from Git
* Moved source from SourceForge to Github
* License Browser fixes

### 2.6.1 Released Oct 10, 2014

This is the same as 2.6.0-RC1 but with a performance fix that effected large databases.

### 2.6.0-RC1 Released September 15, 2014

* monk.  This is a new license scanner contributed by our friends at Siemens and TNGTech.  Monk looks for complete licenses (as defined in the database) and reports the percentage match (see also License highlighting below).
* License highlighting.  Now when you view a license you can see exactly what was added or removed from a license.  This works especially well with monk since monk scans for complete licenses (stored in the fossology database).  But it also works to show you what snippet nomos matched to identify a license.
* New license browser
* fo_copyright_list can now list files that contain a copyright, or list files that do not contain a copyright.
* fo_license_list has new options to exclude licenses (or directories)
* Many new licenses added
* Old bugs fixed, new ones added. see our "issue tracker": (link outdated)

### 2.5.0 Released April 9, 2014

See the RC1 notes below for what changed.
*If you are upgrading an RPM system* make sure you follow the [[Sysadmin_Documentation|System administration documentation]].  There was a serious bug in our previous rpm packages that can delete your existing repository.  So please follow the updated upgrade instructions.  Debian/Ubuntu systems are not effected by this.

### 2.5.0-RC1 Released March 26, 2014

#### NOTICE

* Be aware that the only supported upgrade path is a sequential one 2.0 > 2.1 > 2.2 > 2.3 > 2.4 > 2.5.
* If you run into any upgrade errors, for example with the copyright table, please let us know.
* Many thanks to all of you who submitted bugs, patches and suggestions.  FOSSology is for everyone, please help make it better.

#### What Changed

* Switched source code repository to GIT (but still on SourceForge)
* Fixed unpack failure when archive asks for password
* Make nightly builds publicly accessible
* Fix Ubuntu 12.04 packaging error
* Improve FOSSology upgrade speed
* New command line program to list buckets (fo_bucket_list)
* Several user interface bugs fixed.

License scanner updates:
* Fixed issue detecting Apache 2.0 reference
* Fix for GPL-v3 being labeled GPL-v3+ in certain cases
* Fixed several special cases where GPL was labelled LGPL or missed completely
* Fix problem of embedded quote in license names
* Fix case of GPL-2.0+ being identified as GPL-2.0
* Fix EPL labeled as CPL
* Fix special case of missed Boost software license
* Multiple fixes for special cases where GPL was missed
* Fix missed Sun Legal Notice
* Fix case where upload was failing on directories that contain spaces
* Fix special case where Freetype license was missed
* Fix MIT that should have been MIT-style
* Fix special case of missed CPL-1.0
* Fix cases of missed file references 
* Add LIBGCJ license
* Add WordNet (was being detected as MIT/Princeton license
* Add Interbase-1.0 license
* Add KnowledgeTree-1.1
* Add Open Cascade Technology Public License
* Add identifing licenses referenced in .spec files
* Add ACE license
* Add FACE license
* Add Tapjoy license
* Add ClearSilver license
* Add LGPL-2.1+-KDE-exception

All the issues can be seen in our "issue tracker": (link outdated)

### 2.4.0 Released Jan. 15, 2014

#### NOTICE

* Be aware that the database migration step can take a very long time.  During the upgrade it will look like it is stuck after printing "Update reference licenses".  For example, a 31 GB database (based on pg_dumpall output size) can take an hour.  The smaller the database, the faster this will go.
* The system user fossy home directory has been moved to /home.  If you have a fossology cluster configured, you will need to reestablish your ssh keys.
* For the CentOS 6.4 later system, the postgresql database needs to be installed separately and the command "service postgresql initdb" needs to be executed before install the packages.

#### New Features

*  New Dashboard. (Admin > Dashboard).  It's now fast and contains more useful information.
*  FOSSology Admin now has a link to see all jobs, not just their own.
*  Uploads now can have a "Public" permissions.
*  New license support for CC v4, Intel-wlan, IBM-pibs, SIL-OFL, ...
*  SPDX License list 1.19 compatibility update
*  There is a new Maintenance agent (Admin > Maintenance).  It can clean up some past database inconsistencies as well as run vacuum and analyze for you.  This will be further enhanced in the next release to do even more checking, upload expirations, and more.  As per all our features, let us know if you have any suggestions for improvement.  I want to reiterate the importance of running "vacuum analyze" on a postgres database.  This can make a very large performance improvement.  This is why postgres has autovacuum and autoanalyze daemons.  If you can't set those up, you can run the maintenance agent to do the vacuum analyze in the GUI, or through a cron job.  Admin > Dashboard will show you the last time vacuum and analyze have been run.
*  Added column sort options to license and copyright browsers

#### Issues Addressed

* "Freeze column" in compare browsers now works as expected.
* Affero false positives fixed.
* Multiple license scanner accuracy refinements
* Show Jobs now shows delete jobs
* Show Jobs shows items processed per second
* Admin's can now see the entire job queue, not just their own jobs
* The stand alone nomos license scanner is now installed in package install
* Fixed issue where unpack failure would return success
* All the issues can be seen in our "issue tracker": (link outdated)

### 2.3.0 Released September 26, 2013

No issues were found so 2.3.0-rc1 becomes 2.3.0 general release

### 2.3.0-rc1 Released September 12, 2013

#### New Features

* 2.3.0 contains a version of the license scanner (nomos) that can be built and run without installing the rest of fossology.
* Search now includes license and copyright filters
* You can now upload directly from GIT and subversion

#### Issues Addressed

* Many license scanner updates
* Fixes for RHEL/Fedora dependencies installation
* Fixed Edit Upload Properties so you can select different folders.
* Many enhancements to testing and developers continuous integration system.  This includes integrating nomos regression testing into CI.
* Group management UI improved to be less confusing.
* Folder properties can now be changed for other than the Software Repository folder.
* Agents can now accept a -v option to return their version number.
* apt-get purge now works correctly
* "see all 100+ issues addressed":(link outdated)

#### Known Issues

* All issues are documented in our "issue tracker": (link outdated)

### 2.2.0 Released June 28, 2013

* rc3 becomes the 2.2.0 official release!

### 2.2.0-rc3 Released June 25, 2013

* Features and issues are the same as rc2.  This iteration was mostly to allow the inclusion of a migration script to prevent duplicate license names.

### 2.2.0-rc2 Released May 13, 2013

#### New Features

* Stronger Group and User Permissions scheme per this spec: http://www.fossology.org/projects/fossology/wiki/Perms .  The upshot of this is, to browse a file you need three things: A) the user needs to have READ access or better to fossology, and B) the user has to be in a group that has read permission for the file (upload).
* Ability to view the full text of a license while browsing license results.
* Allow uploadtree to be an optional parameter for command line fo_nomos_license_list & fo_copyright_list - *Contributed by Alexander Kanevskiy*. Thanks!
* Improved robustness of dbcreate, delagent and the scheduler.
* Completion of changing license names to conform to SPDX names. (This may require you to reexamine your bucket definitions.)
* New licenses added that were found in SPDX but not FOSSology.

#### Issues Fixed

* "70+ bugs fixed": (link outdated)

#### Known Issues

* Copyright missed after long string of years
* Container search returning non-containers
* Upload from server using wildcards is not working
* Other known issues are documented in our "issue tracker": (link outdated)

### 2.1.1 Released December 18, 2012 

#### New Features

No new major fossology functionality.  This is primarily a bug fix release.  The 2.1.1 release has had minimal testing to verify the bugs addressed below.  We do not recommend upgrading unless you +must+ have one or more of the bug fixes below.  The next release and major testing cycle (2.2.0) is scheduled for March.

  * License short names have been changed to match SPDX naming conventions. +Thanks to a contribution from *Camille Moulin*!+ :-)
  * Ability to choose from multiple report versions for the same upload.
  * Automated package creation & testing.  

#### Issues Fixed

  * Nomos license additions and corrections. 
  * Improved syntax checking for fossology config files.
  * Copyright agent fixed to detect copyright dates after 2010.
  * Copyright UI fixed to display correct results when 'Show files without licenses' is selected.
  * Removed obsolete table from database schema.
  * Notification email for wget-agent failure fixed to accurately report failure.
  * common-agents.php fixed to only show valid agents choices in the Upload UI.
  * "Special" characters are now acceptable as part of the license reference text.
  * Clicking on "Show" for a specific license now shows files only (not containers).

#### Known Issues

*Installation/Upgrade Issues*

* Other known issues are documented in our "issue tracker": (...)

### 2.1.0 Released October 19, 2012

#### New Features

  * You can now correct the nomos scanner if it misidentified a license.
  * There are two new command line utilities to get a license and copyright list (fo_nomos_License_list and fo_copyright_list).
  * The scheduler can now pause jobs that haven't started.
  * Upload from Server can now select the server on a FOSSology cluster.
  * There is a new document on how to interpret log files (http://www.fossology.org/projects/fossology/wiki/How_to_Interpret_the_log_files)

#### Issues Fixed

  * Serious scheduler performance problem if you were running glib < v2.32.
  * Scheduler crash if log file wasn't being initialized correctly.
  * Some unprintable filename characters were causing ununpack to crash with postgres 8.3 (later versions of postgres were ok).
  * Search was misinterpreting some filename characters.
  * Default user (unauthenticated user) was not being given permissions in user record.
  * Several new nomos license signatures including "Dual-license"
  * fo-installdeps now only installs a new version of postgres if there is not already a version installed.
  * Several programs improved their error reporting.
  * PHP library files were inadvertantly GPL.  Now they are LGPL.
  * Database performance improved for large (over 500 MB uploads.  uploadtree table is now partitioned.
  * wget agent can now use https_proxy and ftp_proxy.
  * Many testing improvements.
  * Prototype FOSS discovery.  If interested, ask about this on the mailing list.
  * Add user/password from command line (cp2foss).  Prior to this any user could do anything, like deleting another users uploads.
  * One plugin load failure would prevent other plugins from installing.
  * Could not get a bucket report when the upload is only a single file.
  * Upload from server wasn't handling wildcards correctly.
  * View License file path was missing.
  * Fix one-shot micro menus
  * Copyright failure on weird file.
  * Scheduler now sends email on job completion instead of the individual job steps.
  * Copyright column width could sometimes be out of proportion to each other.
  * FOSSology installed files are now owned by user fossy instead of root.
  * apt-get purge fossology wasn't setting the correct exit status.
  * license_ref table gave sql errors with postgres 9.1.
  * fossology.conf now has better syntax checking.
  * fo-cleanold missed deleting some files when you installed from source.
  * email notification failed when wget-agent failed.

#### Known Issues in 2.1.0

*Installation/Upgrade Issues*

  * RHEL6 
  ** Need to install the EPEL sources (see http://fedoraproject.org/wiki/EPEL) in order to get the 'p7zip-plugins' package required by fossology-ununpack
  ** Need to temporarily disable selinux prior to installing ('sudo setenforce 0') to allow user/group creation.  Then selinux can be re-enabled ("sudo setenforce 1")
  ** Need to disable the iptables firewall, or more preferably add a new rule to allow port 80 access to the FOSSology web UI (see below)

  * Fedora 15
  ** Need to temporarily disable selinux prior to installing ('sudo setenforce 0') to allow user/group creation.  Then selinux can be re-enabled ("sudo setenforce 1")
  ** Need to disable the iptables firewall, or more preferably add a new rule to allow port 80 access to the FOSSology web UI (see below)

  * Fedora 17
  ** Need to temporarily disable selinux prior to installing ('sudo setenforce 0') to allow user/group creation.  Then selinux can be re-enabled ("sudo setenforce 1")
  ** Need to disable the iptables firewall, or more preferably add a new rule to allow port 80 access to the FOSSology web UI (see below)

  * To add a specific HTTP port 80 rule to the iptables firewall on RHEL/Fedora systems, edit /etc/sysconfig/iptables and add lines such as the following: 

@-A INPUT -i eth0 -p tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT -A OUTPUT -o eth0 -p tcp --sport 80 -m state --state ESTABLISHED -j ACCEPT@

  * Note: Consult your operating system documentation or a security export before making changes to your system's firewall configuration

  * Other known issues with 2.1.0 are documented in our "issue tracker": (link outdated)

### 2.0.0 Released June 6, 2012

#### New Features

  * The scheduler has been redesigned and reimplemented to improve robustness.
  * Modular agents.  Agents can now have their own release stream.
  * Scan logs are now independent of the fossology scheduler log, and can be viewed using the GUI.
  * Nomos license additions and corrections.
  * Buckets can now select from a list of datasets.
  * bsam license scanner no longer installed by default.
  * Tagging can be done from Nomos and Buckets file browser.
  * Search by tag.
  * Tags are now listed in Nomos and Buckets file browser.
  * Nomos and Buckets reports can be filtered by tag.
  * New agents can rescan files.

#### "Issues fixed in 2.0": (link outdated)

#### "Known Issues in 2.0": (link outdated)

#### Known Install Issues

Note for Rhel6 packages: FOSSology depends on the package php-process, which is not available from the default RHEL repository. You can download a copy from:

 http://fossology.org/rpms/epel/testing/6/i386/php-process5.3.2-6.el6_0.1.i686.rpm

 http://fossology.org/rpms/epel/testing/6/x86_64/php-process-5.3.2-6.el6_0.1.x86_64.rpm 

 Or apply this update: https://rhn.redhat.com/errata/RHSA-2011-0195.html

If this is an upgrade, the proper way to upgrade FOSSology is to use @apt-get|yum update; apt-get|yum install fossology@ after changing the sources.list file.  Using __apt-get upgrade fossology__ **will not work.** See +Recommended steps for upgrading+ below.

The apache configuration may need to be modified (remove the old 1.x.x configuration from sites-available/default).  FOSSology now configures apache to use fossology.

The baseurl in the fossology.repo file for Fedora and RHEL releases is **incorrect**.  After fossology installation the above file should be edited to use one of the URL's below.

#### Install Steps

##### New Installs

* Configure apt or yum with one of the url's below.
* Read the INSTALL document for configuration of postgresql, php5 and apache/httpd. http://fossology.svn.sourceforge.net/viewvc/fossology/branches/fossology2.0/fossology/install/INSTALL
* After the system is configured, install fossology.
* Restart apache/httpd and postgresql

#### Recommended steps for upgrading

* Change sources.list or the baseurl in the fossology.repo file (see below)
* Debian/Ubuntu: apt-get update; apt-get install fossology
   RHEL/Fedora: yum update; yum install fossology
* Shut down the scheduler: /etc/init.d/fossology stop
* Make adjustments in the apache2/httpd configuration as needed.
* Restart apache/http and postgresql so the new configurations take affect.
* Start the fossology scheduler: /etc/init.d/fossology start

FOSSology uses a new combined configuration file, called **fossology.conf**. Therefore the configuration data in:

* Depth.conf
* Hosts.conf
* Proxy.conf
* RepPath.conf
* Scheduler.conf

must be migrated into fossology.conf. After their data is migrated, these files can be removed. Do not remove Db.conf.

* For details on installing FOSSology, see "FOSSology2.0 Install and Upgrades": http://www.fossology.org/projects/fossology/wiki/Install_2_0*

##### Unofficial FOSSology packages

Unofficial install packages for RHEL, Fedora, Debian and Ubuntu (32 and 64 bit) are now available for download from:

FOSSology 2.0.0":http://www.fossology.org/releases/2.0.0/

Use the lines below to edit the baseurl in the fossology.repo file:

##### RHEL/Centos:

http://www.fossology.org/releases/2.0.0/RHEL/6/

##### Fedora 15:

http://fossology.org/releases/2.0.0/Fedora/15/


Use the lines below to edit the /etc/apt/sources.list file:

##### Debian:

http://fossology.org/releases/2.0.0/Debian/ 6.0 contrib

##### Ubuntu:

10.04.3:

http://fossology.org/releases/2.0.0/Ubuntu/ 10.04 contrib

11.04:

http://fossology.org/releases/2.0.0/Ubuntu/ 11.04 contrib

11.10

http://fossology.org/releases/2.0.0/Ubuntu/ 11.10 contrib

### 1.4.1 Released July 2011

  * Bug Fix release

### 1.4.0 Released April 2011

  * [[compare:licensediff|New Comparison tool]]. This allows one to focus on the differences between two file trees. For example, you might want to compare two versions of a package to see what licenses changed.
  * A new [[altui:alternateui|simplified User Interface]] AND the option to assign the “Simplified” or “Original” UI on a per user basis.  The Simplified UI is now the default for new users.
  * Implement [[tasks:authentication_using_siteminder|authentication using Siteminder]]
  * Improved [[quickstart|user documentation]]
  * [[upload_from_a_url|Multiple file upload from URL]]
  * Dramatic Improvements to the [[copyright:copyright_1.4.0|copyright agent]]
  * New FOSSology [[How_to_Configure_the_FOSSology_site| website customization]].
  * Bugs addressed in this release: "1.4.0 Defect List":http://bugs.linux-foundation.org/buglist.cgi?query_format=advanced&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&target_milestone=1.3.1&target_milestone=1.4&product=FOSSology
  * If you have created bucket files or scripts, then you need to move your bucketpool directory from DATADIR to PROJECTSTATEDIR.  Admins can see where these locations are from the main menu Help > Debug > Global Variables.  If you don't use buckets, or all your buckets are by regexes in the database, then you can ignore this.

### 1.3.0 Released January 2011

*New!* FOSSology generated Ubuntu debs for Karmic, Lucid and Maverick.

The 'supported distros' matrix can be found [[download#supported_distro_s|here]].

New features and fixes in 1.3.0 include:

  * Groups.  Implemented user groups inside of fossology as an indirect but critical requirement for 1.3 because tagging (the real 1.3 requirement) is dependent on having groups to administer tag permission.
  * File Tagging.  The ability to attach a tag (short (max 32 character) tag, plus a long text) to a file or container.
  * Copyright agent replaced. A quick experiment showed that we get better results with simple heuristics rather than the old agent based on naive Bayes. 
  * Fixed a cp2foss authentication bug that prevented bucket agent from getting scheduled.
  * fixed unpack defects and made some improvements.

#### Last Release for bsam agent 

After the 1.3.0 release the bsam and spec file agents will be removed from the product.  Existing bsam analysis will still be able to be viewed, but no new analysis by the bsam agent will be available.  The nomos agent is much faster and more accurate.  Users are encouraged to use the nomos license agent and to rescan their existing bsam uploads with nomos.

#### Known Issues in 1.3.0 

  * Details for outstanding non-critical bugs can be found at our "bug tracking site":http://bugs.linux-foundation.org/buglist.cgi?query_format=advanced&bug_severity=major&bug_severity=normal&bug_severity=minor&bug_severity=trivial&bug_status=UNCONFIRMED&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&product=FOSSology.
  * When upgrading from the previous version, you'll have to manually update the /etc/fossology/Scheduler.conf file to 
  * delete entries for pkgmettagetta
  * modify the entry for the copyright agent.  The copyright line in Scheduler.conf should look something like this (where <agent_hostname> should be replace with the actual hostname):


  agent=copyright host=<agent_hostname> | /usr/bin/ssh fossy@<agent_hostname> "/usr/lib/fossology/agents/copyright"


  * The 1.3.0 upgrade for a fossology instance with a large number of entries in the copyright table (millions) can take a several hours due to a change in data type.  (This was discovered while attempting to update a copyright table with >51 million records.)  If your installation appears to hang at "Applying database schema", then you may find it faster to use the following workaround to speed up the installation.  


Use the following ALTER command to change the datatype:
<pre>
  $ psql -U fossy -d fossology
Password for user fossy:


  Welcome to psql 8.3.12, the PostgreSQL interactive terminal.
  Type:  \copyright for distribution terms
       \h for help with SQL commands
       \? for help with psql commands
       \g or terminate with semicolon to execute query
       \q to quit
 
 
  fossology=> ALTER TABLE "public"."copyright" ALTER COLUMN "ct_pk" TYPE bigint;
</pre>

You can examine the size of your copyright table using this SELECT command:
 
<pre> 
   fossology=> Select count(*) from public.copyright;
    count
 
 
  ---------
 
 
   67366928
  (1 row)
</pre>

  * In order to unpack rar(>=RAR 3.x) file(s), you need to install rar(non-free) manually. In debian, you can install it through adding the non-free source, then apt-get install unrar. In centos and fedora, you can install it through adding the rpmfusion source, then yum install unrar.