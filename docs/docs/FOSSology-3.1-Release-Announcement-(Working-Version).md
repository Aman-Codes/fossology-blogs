_(this page is to prepare the release notes)_

## New Features in FOSSology 3.1

The FOSSology development community is pleased to release 3.1. 
 
Key features in FOSSology 3.1 are: 

* User Interface improvements to make bulk scan more efficient when used with multiple licenses at the same time
* New Dockerfile also used for Docker Hub, including composed containers with separate DB server
* Support for SPDX 2.1 document formats(tag:value format now available as well as RDF)
* Generation of Debian copyright file (aka DEP5). 

After the second release candidate of 3.1, the majority of contributions are therefore in the correction ares (see "fix") and the cleanup of the files and infrastructure (see "chore"). Overall, the community has merged about 45 pull requests between 3.1 release candidate 2 and this release - see the listing below. Compared to release 3.0.0, about 123 pull requests have been merged. 

#### Smaller Features

* feat(nomos): add and correct nomos licenses
* feat(users): apply correct email validation
* feat(spdx2): allow licenses to be spdx compatible and adapt the templates enhancement needs review

#### Corrections

* fix(spdx2): add files with no license found to generated output format
* fix(ninka): ninka needs a new dependency
* fix(docker): use a simpler Dockerfile for standalone build 
* fix(browsefolder): added a check to see, if the folder is accessible
* fix(copyright): invalid pointer to regex
* fix(copyrightandeccview): added tooltip next to description
* fix(cp2foss): Refactor common perms
* fix(deshboard): Missing quotes around string literal
* fix(docker): change Dockerfile, docker run command
* fix(install): xenial support for postgres  in progress
* fix(make): do not place composer at `/tmp/composer/composer`
* fix(readme): Corrected the issue with mainlicense which was not displayed in readmeoss
* fix(scripts) : update timezone info to php.ini  bug needs review
* fix(setup): PHP warnings
* fix(spdx): fixes a list of SPDX compatibility bugs
* fix(test): fix copyright character
* fix(test): phpunit-bootstrap doesn't find Hamcrest  Category: Testing
* fix(ui): Added recent agent_pk in the place of any agent_pk
* fix(unpacking): fix unpacking of mime-type application/java-archive
* fix(user-creation): email needs to be unique and required
* fix(www): correct ETA in all job view
* fix(www): PHP warnings
* fix(cleanup): remove HACKING, install_locations.xls, build.xml 
* fix(spdx): typo in template and bump LicenseListVersion
* fix(spdx): add files with no license found to generated output format

#### Improvements on Infrastructure and Testing

* chore(docs): updating readme and changelog, consolidation of license information 
* chore(changelog): rename CHANGES.md to CHANGELOG.md
* chore(doc): update documentation, change releases link to Github
* chore(docker): docker usage information
* chore(docker): refactor dockerfiles, splitting containers, avoid rebuilding, etc.
* chore(gitignore): update gitignore
* chore(make): Fix a typo
* chore(make): Fix target name for stanalone nomos
* chore(php): remove 5.3, set 5.6, add 7.0 to travis-ci
* chore(setup): Set Postgres driver using variable reference
* chore(testing): travis php7.1, phpunit5 for php56
* chore(travis): remove gcc-4.4,clang-3.5, MAKETARGETS for gcc variants

#### Improvements on Packaging

* chore(packaging): first import of a pbconf tree
* chore(packaging): Fix EPEL dependency
* chore(packaging): updating existing debian packaging for current fossology  enhancement needs review
* chore(packaging): vagrant test file and config for httpd 2.4  enhancement
* chore(packaging): various enhancements with project builder

## How to Install 3.1 

Please refer to the github release page for the files available:

https://github.com/fossology/fossology/releases/tag/3.1.0

Unfortunately, the package building infrastructure is moving currently and we do not seem to be stable on the package generation right now.

Fossology uses PHP and Postgresql. Depending on your systems capabilities, you might want to adjust PHP memory settings and Postgresql deployment settings. Please have a look at:

http://www.fossology.org/projects/fossology/wiki/SysConfig

## How to Upgrade to 3.1 from 2.5/2.6

Please upgrade from 2.5/2.6 and then try to update to 3.1: Successful migration from 2.5 / 2.6 was one of the topics we have put a lot of care for in the past weeks. From a source point of view, we have no doubts that it works. 

Unfortunately, the package building infrastructure is moving currently. The works on the release were independent from the moving of the server and thus the release is ready, but the package building server is not. News regarding the new package build infrastructure will be on the mailing list.

## Known Issues

As is to be expected, with any release, there are known bugs that users may run into with this release. The ones we know about at this point (and some of the workarounds), are documented here so you don't need to spend time reporting these bugs again.

An overview about current bugs can be seen at: https://github.com/fossology/fossology/issues?q=is%3Aopen+is%3Aissue+label%3Abug

As a general issue, the package building infrastructure is not present at the current time. Therefore, installation from the following methods:

* Provided Debian 8 packages: https://github.com/fossology/fossology/releases/tag/3.1.0
* Using a vagrant script (such as the one provided in the project root structure)
* Using the docker-based deployment, see the project [Readme](https://github.com/fossology/fossology/blob/master/README.md) file
* Install from source: https://github.com/fossology/fossology/wiki/Install-from-Source

### New Install

* We are transitioning to a new build system, so prebuilt images are still being created.
* Did we mention that PHP and Postgresql likely requires adjustments? Please have a look at http://www.fossology.org/projects/fossology/wiki/SysConfig

### Upgrade 

* none known at this time

### Scanners

* Some licenses have been added to Nomos, as such, old scanner findings could be updated.

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

You can find out more about FOSSology on the https://www.fossology.org/ and https://github.com/fossology/fossology/wiki.

To sign up for future FOSSology release announcements, please subscribe to FOSSology's general list at:
http://lists.fossology.org/mailman/listinfo/fossology