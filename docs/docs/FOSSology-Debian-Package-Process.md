# Building FOSSology Debian packages


**NOTE** These notes were taken from Matt Taggart's page called building_debian_packages on this wiki.  Those notes were left intact and changes were made here.  For important info on building a chroot, see also: [[building_debian_packages]].

These notes are specific to the setup we have on our build/package machine _cranky_.  Cranky is in the external FO ring. On cranky there is a user called _build_.  That account should be used when executing the package process described below. On cranky there is an area created for
doing package work.  The area has the following directories: **_packaging pbuilder svn tmp_**.  The notes below will be making references to these directories.  There is a link to this area in the build account. The build account has a lot of aliases set up in the shell.  These aliases will also be referenced in the steps below.

## Building Test Packages

This is what the fossology team does to create our debian packages we use for testing and local release.

### Prepare the source

1. SVN Update the branch that is going to be packaged.  Make sure that the sources are at the svn Rev/Tag you expect.
2. update VERSION in Makefile.conf to an SVN prerelease version
3. Use debchange to edit the debian change log.  Create or update the top entry in debian/changelog to match that version, with a -1 debian version, with a single bullet saying "unofficial svn testing". There should only ever be one entry of this type and it should be at the top  and will not remain in the file for any releases. See below for more discussion a how to craft a version.

### How to specify a version

One of the most important items of a version is that is sorts correctly so that the _newest_ versions are first.  Also, there is always a number associated with a version. 

Here is a typical set of versions currently used during a release
* Before an rc, use a date as a version.  E.g. 1.4.0~20110425+1, if more than one build is done on that day, then _ONLY_ the last number changes (e.g. from +1 to +2).
* For an rc, the same process is used but the version changes.  E.g. 1.4.0~rc1+1.  If for some reason you had to rebuild rc1, then the last number increments.
* For the final bits, Matt takes care of the release and other numbers.

1. commit Makefile.conf and debian/changelog.  Another way to accomplish this is make the changes to Makefile.conf and debian/changelog before tagging the rc.  Then all that has to be done is the steps below.
2. Make a tarball from the sources.  From the top of the svn tree, make sure the tree is the way you want it, up to date, no outstanding files reported by *svn status**  and *svnrevision* (make sure it doesn't say xxxx:xxxxM or xxxxM), etc. Then run *utils/fo-mktar*, this will generate a tarball in ../  Make sure that one cd's to fossology and does an svn up.  For some reason the top directory doesn't show the correct revision and fo-mktar complains.  So I always svn up in the fossology dir and then from there run *utils/fo-mktar*.
3. create a packaging directory somewhere.  On cranky packages are stored at: *_/srv/build/packaging_*.
4. untar the tarball into the the packaging directory and move the result to the same name plus .orig
<!-- <pre> -->
```
  tar zxvf <pathtosvn>/../fossology-1.0.0~20081106.tar.gz /srv/build/packaging
  for example 
  mv fossology-1.0.0~20081106 fossology-1.0.0~20081106.orig
```
<!-- </pre> -->
5. untar it again
<!-- <pre> -->
```
  tar zxvf fossology-1.0.0~20081106.tar.gz
```
<!-- </pre> -->
    * at this point there should be two fossology trees one with .orig and one without it in the /srv/build/packaging directory.
6. export the debian directory from the svn tree to the new directory (//not the .orig copy//).
<!-- <pre> -->
```
  svn export <pathtosvn>/debian fossology-1.0.0~20081106/debian
```
<!-- </pre> -->

At this point you could just cd into the directory and do "debuild -rfakeroot" however for our official process we use pbuilder [[http://www.netfort.gr.jp/~dancer/software/pbuilder-doc/pbuilder-doc.html#introduction]] for building packages in clean chroots. (This document assumes you already have pbuilder setup)

### Build the releases and architechures

1. cd into the directory `/srv/build/packaging/<release>/<name of fossology tar ball>` For example, /srv/build/packaging/lenny/fossology-1.1.0~rc5/

For each arch/release target you want to generate debs for(currently we do 4. lenny and etch/i386 and  lenny etch/amd64)
Using lenny and rc5 as an example:
* as user 'build' cd to /srv/build/packaging/lenny/fossology-1.1.0~rc5/
* update the pbuilder images
<!-- <pre> -->
```
  pbuilder-lenny-i386-update;pbuilder-lenny-amd64-update
```
<!-- </pre> -->
* use pbuilder to build the source, binary-indep debs, and binary-arch debs for the first target
<!-- <pre> -->
```
  pdebuild-lenny-i386
```
<!-- </pre> -->


* For additional targets use pbuilder with "--binary-arch" so you won't build the source and binary-indep packages. This is already in the alias, so just use the alias.
* For this alias you must also supply a *.dsc file.  Use the one in parent directory e.g. ../*.dsc
<!-- <pre> -->
```
  pbuilder-lenny-amd64-only ../*.dsc
```
<!-- </pre> -->

### Build Issues

**NOTE** do not update the chroot like described below.  If there are new fossology dependencies, then the new dependencies should be retrofitted into the fo-installdeps script and in the control file.

When building the ubuntu chroots, they had to be updated with debhelper and apt-utils for some reason.

Note: for some reason using multiple packages does not seem to work.  Only the first package is updated.  So if there are multiple packages that need to be added, they should be done 1 at a time.
For example:
<!-- <pre> -->
```
  sudo pbuilder --update --basetgz /srv/build/pbuilder/tarballs/lenny-amd64.tar.gz --extrapackages apt-utils
```
<!-- </pre> -->


## Copy the Packages

1. copy the packages from the pbuilder results/arch directory, (/srv/build/pbuilder/{etch|lenny}/results) to the location you want to serve them from. 
2. on the system DOC where we serve the packges from:
    * create a release/rc dir in: /var/www/fossology.org/debian
<!-- <pre> -->
```
  cd /var/www/fossology.org/debian; sudo mkdir 1.1.0~rc5;sudo chown me:me 1.1.0~rc5
```
<!-- </pre> -->
    * create release directories under the directory above for each release.
<!-- <pre> -->
```
  mkdir 1.1.0~rc5/etch 1.1.0~rc5/lenny
```
<!-- </pre> -->
    * copy over the mkpackages script from the previous rc or release to this one.
    * cd to the appropriate directory and copy over the files:
<!-- <pre> -->
```
  cd lenny
  scp cranky:~build/build/pbuilder/result/lenny-i386/* .
  scp cranky:~build/build/pbuilder/result/lenny-amd64/*amd64* .
```
<!-- </pre> -->
NOTE: that there are duplicate files between architectures.  So the second copy must only grab the architecture specific files.
    * make the packages
<!-- <pre> -->
```
  ../mkpackages
```
<!-- </pre> -->

<!-- <del> -->
~~
On the system you want to use the packages, add something like this to sources.list
<!-- <pre> -->
```
  deb http://fossology.org/debian/{lenny|etch} ./
```
<!-- </pre> -->
~~
<!-- </del> -->

  * Run "apt-get update"
  * Install how you want

# General Instructions for Building packages for Release

Same as above but:
* Makefile.conf VERSION should be a non SVN version
* The debian/changelog entry will contain a proper list of changes and will remain in the file for historical reasons. Prune any SVN version entries.
* Become user build (lots of aliases to help with the build process).  User build is also in sudoers.
* You will use pbuilder to create the deb packages (as it uses chroots to build in a clean 
environment).  Also, pbuilder enables you to build for target releases and architectures other than the that of your build system.
* the build directory is /srv/build/pbuilder (create a link: /home/build/build -> /srv/build) and contains subdirectories tarballs and result.
* Create the initial base tarball for a target arch, distro with:
<!-- <pre> -->
```
  sudo pbuilder --create --distribution etch --debootstrapopts --arch=i386 \
  --mirror http://debian.osuosl.org/debian/ --basetgz /srv/build/tarballs/etch-i386
```
<!-- </pre> -->

* Subsequent builds can be done with: 
<!-- <pre> -->
```
  sudo pbuilder --update --basetgz /srv/build/tarballs/etch-i386.tar.gz
```
<!-- </pre> -->

Below is an example using the pbuilder --build option using the file package to build from a source package.
<!-- <pre> -->
```
  sudo pbuilder --build --basetgz /srv/build/pbuilder/tarballs/etch-i386.tar.gz file_4.17-5etch3.dsc
```
<!-- </pre> -->
Results go to /var/cache/pbuilder/result/ (or you can specify alternate destination with --buildresult)

* There is also a pdebuild command that builds the deb package from the source tree.

**NOTE: pay no attention to the notes below they are here for historical reasons.  DO NOT USE**

## FOSSology specific deb package build instructions

1. check out the source tree you wish to package:
<!-- <pre> -->
```
  svn co https://fossology.svn.sourceforge.net/svnroot/fossology/trunk/fossology/
```
<!-- </pre> -->
2. update VERSION in Makefile.conf to a release version, example: 1.0.0
3. Create or update the top entry in debian/changelog to match the release version.
4. svn co  Makefile.conf and debian/changelog
5. from the top of the svn tree, make sure the tree is the way you want it, up to date, no outstanding files reported by "svn status", etc. 
6. run "utils/fo-mktar", this will generate a tarball in ../
7. create a packaging directory somewhere
8. untar the tarball and move the result to the same name plus .orig
<!-- <pre> -->
```
  tar zxvf <pathtosvn>/../fossology-1.0.0~20081106.tar.gz
  mv fossology-1.0.0~20081106 fossology-1.0.0~20081106.orig
```
<!-- </pre> -->

9. untar it again
<!-- <pre> -->
```
  tar zxvf fossology-1.0.0~20081106.tar.gz
```
<!-- </pre> -->

10. export the debian directory from the svn tree to the new directory
<!-- <pre> -->
```
  svn export <pathtosvn>/debian fossology-1.0.0~20081106/debian
```
<!-- </pre> -->

For each arch/release target you want to generate debs for(currently we do etch/i386 
and etch/amd64)

1. update the pbuilder image
<!-- <pre> -->
```
  sudo pbuilder update
```
<!-- </pre> -->
2. use pbuilder to build the source, binary-indep debs, and binary-arch debs for the first target
<!-- <pre> -->
```
  pdebuild
```
<!-- </pre> -->
3. for additional targets use pbuilder with "--binary-arch" so you won't build the source and binary-indep packages.
<!-- <pre> -->
```
  sudo pbuilder --binary-arch --build *.dsc
```
<!-- </pre> -->
4. copy the packages from the pbuilder results directory to the location you want to serve them from.
5. In the location you want to serve them from run
<!-- <pre> -->
```
  apt-ftparchive packages . > Packages cat Packages | gzip -9 >Packages.gz
```
<!-- </pre> -->
<!-- <del> -->
~~
6. On the system you want to use the packages, add something like this to sources.list
<!-- <pre> -->
```
  deb http://fossology.org/~taggart/debian/ ./
```
<!-- </pre> -->
~~
<!-- </del> -->
7. Run "apt-get update"
8. Install how you want
