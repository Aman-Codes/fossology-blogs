#  Release Process (aka the Release Checklist)

The following steps should be taken to produce new FOSSology releases:

## Release Candidates

  * Determine the revision number and create a tag in svn for the release candidate (e.g. tags/rc/0.6.5_rc1): [[How to Create a New Release]]
  * Check/update INSTALL and INSTALL.multi
  * Update changelog (svn) *_what does this mean?_*
  * Build Packages
    * All packages are built on fobuild.usa.hp.com using project builder
  * Post [[How_to_Create_a_New_Release#Creating-a-tarball|tarball to SourceForge]] from fossbuild:/home/build/pb/projects/fossology/delivery
  * Post release notes to SourceForge from [[Release_Notes|here]]
  * Copy packages to fossology.org (see below)
  * Create list of known issues from the issue tracker
  * Announce candidate release to fossology@fossology.org & fossology-devel@fossology.org mailing lists using this (or a similar) [[RC_email_announce|template]], including the list of supported platforms and known issues
  * External & internal testing cycles with release candidate
    * Install on single test system (internal)
    * Initial sanity tests (internal)
    * Install on multiple test system (internal)
    * Multiple system/integration tests (internal)
    * Perform upgrade tests (from previous release)
  * Updates to fossology.org 
    * [Add a new News item](http://www.fossology.org/projects/fossology/news)
    * [[Wiki#Download-38-Install-FOSSology | update download links & info]]
    * Add a new Install and Update page (similar to these: [[Install_1_4_0]], [[Install_2_0]])

## Final Release

  * Begin a discussion on irc and send email to fossology-devel that the final release process is taking place (suggested by taggart, so we don't miss stuff).  Give people a few days to respond and review the release notes that will be sent with the release announcement.
  * Complete/double-check the list of items above for Release Candidates
 
## Copy Packages to fossology.org

* Login to fossology.org from fobuild as user fossology ([laser@fobuild ~]$ssh fossology@fossology.org)  Your public key must be added to the authorized_keys file (for the fossology user).
* Packages on fossology.org are stored at: ```/var/www/fossology.org/htdocs/releases/ ```.
* Create a new version directory
Eg. /var/www/fossology.org/htdocs/releases/2.1.0
* Create the subdirectories using the directory tree on fobuild (in /var/www/ftp/pub) as a guide.  For example:
<!-- <code> -->
```
fossology@fossology:/var/www/fossology.org/htdocs/releases$ for i in Debian  Fedora RHEL Ubuntu; do mkdir -p 2.1.0/$i; done
```
<!-- </code> -->

  
* You must copy from fossbuild to fossology.org as the user fossology.  Your public key must be added to the authorized_keys file (for the fossology user) to copy the files. 
** For example, to copy the rc2 Ubuntu bits from fossbuild to fossology.org:
<!-- <code> -->
```
cd /var/ftp/pub/fossology/2.0.0rc2/ubuntu
```
<!-- </code> -->
<!-- <code> -->
```
scp -r * fossology@fossology.org:/var/www/fossology.org/htdocs/releases/2.0.0-rc2/Ubuntu
```
<!-- </code> -->

**NOTE** the use of __fossology@fossology.org:__
<!-- <code> -->
```
scp -r * fossology@fossology.org:/var/www/fossology.org/htdocs/releases/<version>/Debian/
```
<!-- </code> -->
<!-- <code> -->
```
`scp -r * fossology@fossology.org:/var/www/fossology.org/htdocs/releases/<version>/Fedora/`
```
<!-- </code> -->
<!-- <code> -->
```
`scp -r * fossology@fossology.org:/var/www/fossology.org/htdocs/releases/<version>/RHEL/`
```
<!-- </code> -->
<!-- <code> -->
```
`scp -r * fossology@fossology.org:/var/www/fossology.org/htdocs/releases/<version>/Ubuntu/`
```
<!-- </code> -->