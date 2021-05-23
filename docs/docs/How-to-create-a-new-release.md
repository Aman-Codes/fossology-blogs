# How to Create a New Release
Release Checklist is [[here|Release-Process]]

## Increment Version Number Appropriately

First thing's first... How do you increment version numbers?

To summarize:

  `A.B.C`

where

      A = Major release number

      Reason for change:

      schema and/or agent API _breakage_

      B = Minor release number

      Reasons for change:

      schema and/or agent APIs are _added_ or _extended_ 
       
      new agents added

      security fixes

      major roll up of bugfixes

      C = Bugfix release number

      Reasons for change:

      any bugfix worth doing a new release/test cycl


### Tagging the release in github

  * Edit `VERSIONSTRING ` change the content to the appropriate version number based on the guidelines above.  
  * Create a new tag for the release:  save it in `/tags/\<revision\>/` 

       `git tag -a 2.6.2 -m "Tag fossolgy release 2.6.2 at git commit 0a62dd."`

### Branching in github

To create a new branch:
`git branch fossology-2.6.2 -m "Create fossolgy branch 2.6.2 at git commit 0a62dd."`

### Creating a tarball

To create a tarball, check out the released version.  Within that directory, simply run 

  make tar-release

This will create a file called ''fossology-A.B.C.tar.gz''.


### Uploading the tarball to Sourceforge

  * The tarball you intend to upload to Sourceforge must exist on your local system.

  * Log into http://sourceforge.net/ (using the same login/username you would use to do svn checkins).

  * Go to the FOSSology project page (https://sourceforge.net/projects/fossology/) and click on the "Files" tab.

  * Click on the "fossology" folder

  * Use "Add Folder" to create a new release folder (if necessary) for the tarball.

  * Click on the newly created folder and select "Add File"

  * Upload the tarball from your local system

  * Note there is no final "Submit" once you've uploaded the file.  The file is released.  You can confirm this by going to the "Download" tab in sourceforge and ensuring the file you just uploaded shows up there.  It will also show up on the "Files" management page after "Looking for the latest version?".  

### Writing Release Notes

You must create a set of release notes in Dokuwiki at http://fossology.org/release_notes  

Simply add the release notes to the top of the page, shifting all the previous versions down below them. 

Be sure to highlight all the new features, bugfixes, any other errata.

### Add news blurb to front page

Be sure to update the http://fossology.org/ front page with a short news blurb about the new release.  You may also want to remove the oldest news blurb as well, to keep the page a bit current and up-to-date.

### Sending email announcement

Finally it's important to send an announcement of the new release to the mailing list.

Email to ''fossology@fossology.org'' something like the following:

  Subject:  Announcing FOSSology A.B.C Release
  
  The FOSSology Project is pleased to announce the release of FOSSology A.B.C.
  
  New in version A.B.C:
    * New feature
    * New feature
    * Important bug fix
    * etc... don't get too specific, but try to highlight the major changes
  
  For more information on the FOSSology project and to download the software, 
  please visit http://fossology.org/
  
  -- About FOSSology --
  
  FOSSology is a Free Open Source Software (FOSS) project built around an open 
  architecture for analyzing software. Existing modules include license analysis, 
  Copyright/Email/URL scanner, analysis of deb and rpm packages.  This open
  source software tool analyzes a given set of software packages, and reports items 
  such as the software licenses used by these packages.
  
  More than simply reporting, “Package X uses license Y,” the FOSSology tool 
  attempts to analyze every file within the package to determine its license. The 
  license report is thus an aggregate of all of the different licenses found to be 
  in use by a package. A single package may be labeled as “GPL” but contain files 
  that use other licenses (BSD, OSL, or any of the hundreds of other licenses). Even
  if an exact license is unknown, the license may be identifiable by common license 
  phrases.
  
  The FOSSology Project started as an internal software development effort within 
  Hewlett Packard’s Open Source and Linux Organization. The tool evolved over 
  several years at HP from a few simple shell scripts to the much more comprehensive
  tool you see today.
  
  Enjoy!
  The FOSSology team


### Post-incrementing the version number in svn

After making a release, increment the version number in ''trunk/fossology/Makefile.conf'' in subversion.  Increment the least-significant digit by 1, and add "~svn" to it (tilde svn).

For example if the release you just completed was ''"0.17.0"'', update ''Makefile.conf'' in subversion to be version "''0.17.1~svn''".  Why?  So that future checkouts of HEAD will not advertise being the previous release, which they certainly are not.