## New Features in FOSSology 3.1

The FOSSology development team is _preparing_ to announce the **FOSSology 3.1** release.  This is an important release, because it contains very valuable refactoring of the UI besides a huge numbers of corrections. And we have also, again, nice features. 

### What is a Release candidate?

A release candidate is a version where no more issues are solved for, but the version is tested according to the test plan. You can feedback your issues with this release. The goal is to create a version that does not contain any blocking points.

#### Refactoring

* refactor(ui) rewrite upload pages 
* refactor(ui) rewrite/refactor delagent and fix #273 
* refactor(ui) escape strings which become HTML or SQL 

#### Larger Features

* New Dockerfile also used for Docker Hub, including composed containers with separate DB server
* DEP5 / debian-copyright file generation
* Adding tag-value format for the SPDX2 generation 
* More efficient UI for bulk scan with multiple licenses at the same time

#### Smaller Features

* feature(CONTRIBUTING.md) create initial CONTRIBUTING.md to support github feature
* feature(database) add reindexing option to maintenance agent, as turned out necessary
* feature(database) add some indexes and clusters to database 
* feature(infrastructure) add coverage coverage, adding badge to README.md
* feature(license-list) improve UI for allowing more agents 
* feature(spdx-tools) install spdx-tools script for vagrant and travis 
* feature(ui) add security check to `user-edit.php` 
* feature(ui) allow users to move and copy their uploads 
* feature(vagrant) increase upload size setting
* feature(vagrant) support proxy from host_ip:3128 

#### Corrections on the (PHP) UI

* fix(ui) fix ui-view error reporting [#615] 
* fix(ui) fo_copyright_list - bad error checking, - bad error message #277 and #276 
* fix(ui) handled exception in common-auth.php for incorrect username 
* fix(ui) mark decisions as irrelevant from file tree [edit] option for uploads 
* fix(ui) password handling for adding users improved
* fix(ui) #635: add parameter to URLs for showjobs 
* fix(ui) only admin should be able to create groups 
* fix(ui) repair error, which emerges in PHP <= 5.4 
* fix(ui) repair issue mentioned in #660 
* fix(ui) repair prepared statement in `admin-license-file.php` 
* fix(ui-download) add $filenameFallback solve #589 
* fix(ui) added branch name and separated version
* fix(license-browser) menu order with ECC and other corrected
* fix(upload-browser) visibility issues with selection of "entire folder"

#### Corrections on the Application Functionality

* fix(agents) fossupload_status print usage on error or --help 
* fix(agents) repair the calls of `heartbeat` #560
* fix(composer) replace hash with correct one 
* fix(copyright) fixing listing of copyrights at Readme export 
* fix(copyright) increase maximum length of TLD's 
* fix(copyrights) removed extra where condition which leads to miss copyright statements
* fix(dashboard) missing $this-> in method call 
* fix(delagent) any user who is not the owner can delete any folder via /delagent -F 
* fix(delagent) delagent error message wording 
* fix(monk) fix one shot functionality
* fix(nomos) #340 correct path output on command line use
* fix(nomos) Remove extra spaces from the end of usage messages 
* fix(reuse) Corrected lrb_ori to lrb_origin in bulkreuser 
* fix(security) SQL injection vulnerability in read_permission 
* fix(showjobs) correct view  for `&upload=-1` in the URL
* fix(spdx2) Remove control characters from SPDX output #591
* fix(spdx2) fix several bugs in DEP5 and SPDX2 reports 
* fix(ununpack) remove extraneous parentheses 
* fix(wget_agent) fix issue #298 
* fix(wget_agent) fix issue #298 

#### Corrections to the Database, Deployment, Tests and Framework

* fix(infrastructure) agent_desc not being initialized in install 
* fix(infrastrcuture) add to vagrant support for ninka 
* fix(infrastructure) Added DTD to index file to prevent phpunit test case failure 
* fix(infrastructure) add fo_chmod and fo_folder to .gitignore 
* fix(infrastructure) emoved SVN_REV from files and replaced Commit with commit_hash #331 
* fix(infrastructure) error which emerges in PHP <= 5.4 
* fix(infrastructure) improved protocol inference #580
* fix(infrastructure) Missing newline in fossupload_status utility 
* fix(infrastructure) Missing newlines in fo_chmod error messages 
* fix(infrastructure) reading of .fossology.rc for not parsing values 
* fix(infrastructure) remove duplicate test and fix #579 
* fix(infrastructure) SVN_REV and added branch name in version file #331 
* fix(infrastructure) Write correct version of DB-scheme to DB 
* fix(travis) `apt-get install -qq ...` times out 
* fix(travis) use debian perl instead of cpan 

## Closed Issues for this Release

In order to see the issues that were closed so far for this release candidate, please refer to the github page:

https://github.com/fossology/fossology/issues?q=milestone%3A3.1.0+sort%3Acreated-asc+is%3Aclosed

Please note that you will find some of the issues open for 3.1.0 milestone - the goal of the release candidate is testing and wrapping things up, and as such the issue space for 3.1.0 will be cleaned up soon.

## How to Install 3.1 Release-Candidate?

You have three options:

* Use the Ubntu-14-04 LTS packages from the release page
* Checkout and do a make/make install, see how it works for 2.6: 
http://www.fossology.org/projects/fossology/wiki/Install_2_6
* Checkout and use the vagrant script (based on a ubuntu 14-04 server image): ```vagrant up``` basically.

This release is as compatible as FOSSology 3.0, so it can be installed the same way, see the previous release notes:

https://github.com/fossology/fossology/wiki/FOSSology-3.0-Release-Announcement

Please refer to the github release page for the files available:

https://github.com/fossology/fossology/releases/tag/3.1.0rc1 (not yet)

Unfortunately, the package building infrastructure is moving currently and we do not seem to be stable on the package generation right now.

Fossology uses PHP and Postgresql. Depending on your systems capabilities, you might want to adjust PHP memory settings and Postgresql deployment settings. Please have a look at:

http://www.fossology.org/projects/fossology/wiki/SysConfig

## How to Upgrade to 3.1 from 2.5/2.6

Please see the release notes of the previous version:

https://github.com/fossology/fossology/wiki/FOSSology-3.0-Release-Announcement

## Known Issues

This release provides 61 tested, peer-reviewed, discussed and then merged pull requests from the last release on 5th of November. So there has been a strong focus on throughput. And currently we are reviewing the issues listing, if some can be closed. 

Besides, bugs are documented here so you don't need to spend time reporting these bugs again.

An overview about current bugs can be seen at: https://github.com/fossology/fossology/issues?q=is%3Aopen+is%3Aissue+label%3Abug

As a general issue, the package building infrastructure is not present at the current time. Therefore, installations from source is the preferred option for those distributions where the package is not ready yet. We will write to the mailing lists when we are done with that.

### New Install

* We are transitioning to a new build system, so pre-built images are still being created.
* Did we mention that PHP and Postgresql likely require adjustments? Please have a look at http://www.fossology.org/projects/fossology/wiki/SysConfig

### Upgrade 
* none known at this time

### Scanners
* none known at this time

### User Interface
* Developers use Firefox and Chrome, sometimes Safari. Maybe, with other browsers, there could be UI issues. 

## More information

### Participate in FOSSology

If you are a developer and want to submit code, start by discussing what you want to do on our developer mailing list fossology-devel@fossology.org.  Developer documentation can be found at 

  https://github.com/fossology/fossology/wiki

### Reporting bugs

Your comments, bug reports, patches and suggestions will help fix bugs and improve the quality of future releases. Please report bugs using the issue tracker of the project:

  https://github.com/fossology/fossology/issues

### More about FOSSology

You can find out more about FOSSology on the [[www.fossology.org|FOSSology website]] and [[https://github.com/fossology/fossology/wiki|FOSSology wiki]].

To sign up for future FOSSology release announcements, please subscribe to FOSSology's general list at:
http://lists.fossology.org/mailman/listinfo/fossology