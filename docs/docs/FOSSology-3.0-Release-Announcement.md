## New Features in FOSSology 3.0

The FOSSology development team is proud to announce the **FOSSology 3.0** release.  This is a major new release for the project and it is including some exciting new features. 

#### License Analyst Workflow Improvements 
* **New User Interface for reviewing licenses for determining concluded licenses**: Instead of providing a separate UI for license conclusion, now a single file view license UI allows for efficient license situation review: highlighted texts and selected licenses are moving together to one view now.
* **New user interface for editing copyrights**: Separate display for URL, E-Mails, copyright statements and authorship notes
* **New folder navigation**: Jquery based table user interface for downloads including sorting and filtering with more handling attributes per upload 
* **Added the concept of candidate licenses** This lets users add licenses as candidates for the system.   New licenses must be added carefully to the server database. However, in order not to stop a user a reviewing an upload, candidate licenses can be registered for addition to the server by the server admin
* **Re-use of license decisions**: At uploading a new file, a user can select existing uploads for reusing already applied license decisions, if the file hash is the same
* **Bulk assignment of license decisions based on text phrases**: When identifying a phrase hinting to particular license (e.g. "license info can be found in readme"), the user can define this text as search string and assign a license decision to every matching file.

#### Agents
* **Auto-decision of the Monk and Nomos scanner find the same license in the same same text area**: If both scanners find the same license by short name, then a license decision can be applied automatically
* **Adding Ninka as optional scanner** : At upload or at scheduling jobs, the user can run Ninka scanner with FOSSology as third license scanner
* **Detecting Export Control and Customs Information** : Addition of regular expressions to aid with detecting Export Control and Customs (ECC) data. 
* **command line use of scanning agents**: individual agents can now be invoked from the command line

#### Input/Output Options
* **SPDX 2.0 file generation** : Based on the scan results and concluded licenses, SPDX 2.0 XML format is generated (passes verification tool).
* **License import and export using a CSV interface**: Using CSV formatted files, licenses with the reference texts can be imported and exported to the FOSSology server.
* **Adding README / COPYING file generation** : Concluded licenses and copyright statements are written into a text file that is information for the distribution.

For more information on the features added into this release and historical releases see the [[Release Notes]].

## How to Install 3.0 

Please refer to the github release page for the files available:

https://github.com/fossology/fossology/releases/tag/3.0.0

Unfortunately, the package building infrastructure is moving currently and we do not seem to be stable on the package generation right now.

Fossology uses PHP and Postgresql. Depending on your systems capabilities, you might want to adjust PHP memory settings and Postgresql deployment settings. Please have a look at:

http://www.fossology.org/projects/fossology/wiki/SysConfig

## How to Upgrade to 3.0 from 2.5/2.6

Successful migration from 2.5 / 2.6 was one of the topics we have put a lot of care for in the past weeks. From a source point of view, we have no doubts that it works. 

Unfortunately, the package building infrastructure is moving currently. The works on the release were independent from the moving of the server and thus the release is ready, but the package building server is not. News regarding the new package build infrastructure will be on the mailing list.

## Known Issues

As is to be expected, with any release, there are some significant known bugs that users may run into with this release. The ones we know about at this point (and some of the workarounds), are documented here so you don't need to spend time reporting these bugs again.

An overview about current bugs can be seen at: https://github.com/fossology/fossology/issues?q=is%3Aopen+is%3Aissue+label%3Abug

As a general issue, the package building infrastructure is not present at the current time. Therefore, installations from source is the preferred option for those distributions where the package is not ready yet. We will write to the mailing lists when we are done with that.

### New Install
* We are transitioning to a new build system, so prebuilt images are still being created.
* Did we mention that PHP and Postgresql likely requires adjustments? Please have a look at http://www.fossology.org/projects/fossology/wiki/SysConfig

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