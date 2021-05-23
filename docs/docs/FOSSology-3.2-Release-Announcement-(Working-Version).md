_(this page is to prepare the release notes)_

## New Features in FOSSology 3.2

The FOSSology development community is pleased to release 3.2. This release information includes changes for release candidate 1 of this release. 
 
Key features in FOSSology 3.2 are: 

* **Import of SDPX files** and showing license result along with browse UI of the upload files and folders
* **Word processor document output** (for e.g. LibreOffice, OpenOffice) document summarizing analysis information
* **Management of obligations** a.k.d. license to-dos for licenses 
* Brought the **package builder infrastructure to work again**

After the second release candidate of 3.2, the majority of contributions are therefore in the correction ares (see "fix") and the cleanup of the files and infrastructure (see "chore"). Some statistics:

* What happened since the release candidate for 3.2? The community has merged about 32 pull requests between 3.2 release candidate 1 and this release.
* From release 3.1, a total number of 128 pull requests merged: 56 feature pull requests, 52 pull requests providing corrections, and 20 pull requests improving infrastructure, documentation and testing.

## Credits

Looking into the git commit history shows you all the users who have contributed to this release since 3.1, the git user names:
> alpianon,
> Anupam,
> bill-auger,
> Bruno Cornec,
> Daniel Landau,
> Daniele Fognini,
> Dmitry Marakasov,
> Marion Deveaud,
> Max Wittig,
> Maximilian Huber,
> Michael,
> Shaheem,
> Steffen Weber,
> Tim Murphy,

### Release 3.2

#### Smaller Features

* `99254a5` feat(unifiedreport): update phpword from v0.12.0 to v0.13.*
* `2aab236` feat(copyright-testcases): test for getallcopyrightentries for report
* `7dd9ac9` feat(unifiedReport): add user findings of copyright and ecc from files with non-agent finding
* `f0f484f` feat(treeView): add remove option for deletion of applied irrelevant decisions through file tree edit
* `ce78359` feat(schema): add new combined indexes to database tables copyright, author, ecc, clearing_decision, license_file, uploadtree_a
* `edaa1ad` feat(unifiedreport): add upload history url to title table add groupname next to username correct warnings in obligation
* `3d0c016` feat(report): report assessment summary checkbox selection

#### Corrections

* `62580c8` fix(delagent): Delete-Folder without deleting duplicate upload/s in other folders
* `85ae4ba` fix(lib): container.php access fix from cache
* `1a7fcde` fix(spdx): make SPDX-rdf and SPDX-tv templates consistend
* `19a4919` fix(unifiedreport): rearrange common and additional obligation text for word report
* `4deb48c` fix(deploy): Fix TimeZone computation when links are used
* `72ce275` fix(common-agents): add check for empty array and false
* `85ae4ba` fix(lib): container.php access fix from cache
* `33d5c2b` fix(ui): checkbox param call more adaptable with php 5.4
* `c48cc64` fix(www): change var name to not be used in RegisterMenus
* `dee3aa2` fix(bulk): separate td for each image and add width for select
* `283352a` fix(lib): decision for future occurrence of files
* `439c496` fix(treeView): removed license through edit, still exists
* `56b47ea` fix(candidateLicense): add a scrollbar to list of files in popup if exceeds 200px
* `b9d595f` fix(obligation): select obligation type and classification by default
* `a9003b1` fix(dep5): add missing endif for deb5 document
* `a9606e9` fix(copyright): fix edit and undo of copyright and ecc
* `90fd1d8` refactor(delagent) use template
* `9b00ca2` Revert "chore(changelog): update to commitlint"

#### Improvements on Infrastructure, Packaging and Testing

* `402ae25` fix(pb): general correction to enable rpm-based packages
* `9995f56` fix(rpm): Fix VERSION delivery under /etc/fossology
* `e431594` fix(rpm): Copy the correct VERSION file in /etc/fossology for spec
* `3b73c0f` fix(pb): smaller corrections to enable build on master
* `15e8645` chore(make): Remove declaration of COMPOSER_PHAR variable
* `33431fa` chore(pb): corrections on the project builder rpm build
* `bf814ff` chore(pb): Provides a working build infrastructure

### Release Candidate 1 for 3.2

#### Smaller Features

* `b389a4c` feat(report): new word report
* `05a3061` feat(reportImport): some cleanup and minor improvements
* `cb24345` feat(reportImport): handle `orLaterOperator` correctly
* `025c4fe` feat(reportImport): add imported coyprights as decisions
* `5fdb4ce` feat(reportImport): add corresponding debain definitions
* `09b90a2` feat(reportImport): minor changes to satisfy older PHP versions
* `74f6241` feat(reportImport): parse also xml files
* `0fdba11` feat(spdx2): also export ninka and import data
* `0d46873` feat(reportImport): add option to create real licenses
* `3f95181` feat(reportImport): handle all arguments from UI
* `fa56a96` feat(spdx2Import): splitup to support other formats
* `0bc8788` feat(spdx2Import): refactoring and splitup of files
* `3d469b2` feat(spdx2Import): menu entry at "Upload::..."
* `bd20cc7` feat(spdx2Import): start to make conclusions optional
* `26c4187` feat(spdx2Import): compare only by sha1
* `9e68781` feat(spdx2Import): conclusions
* `26bff73` feat(spdx2Import): also import copyright statements
* `b7bd5b6` feat(spdx2Import): inital commit
* `effb5a2` feat(candidate): add delete feature to candidate licenses
* `3ee22e9` feat(copyright): allow to have multiple copyright decisions
* `7bc2e43` feat(treeView): add operation to make multiple files irrelevant
* `4716837` feat(backup): add s3 backup and restore
* `b69a771` feat(spdx2): add name field to extracted license info
* `6cb3192` feat(copyright): also show deactivated copyrights in the UI
* `eb6f19e` feat(spdx2): bump output version from 2.0 to 2.1
* `27225f4` feat(spdx2): strip invalid characters from non-spdx-compatible licenses
* `fb99c54` feat(docker-compose): increase apache verbosity
* `82356c2` feat(copyright): JSON output
* `956855f` feat(monk): JSON output
* `2a397af` feat(nomos): JSON output
* `5439978` feat(obligations): extend datamodel and obligation management
* `e9a1481` feat(copyright): split tables, separate tables for copyright and email,author,url
* `97fe4c4` feat(dashboard): add PHP info table
* `6fa1479` feat(delete): allow deletion of multiple uploads
* `d88a645` feat(delete): add select2 to folder select
* `c946064` feat(organize): allow searching for folders to copy/move to
* `d5871d7` feat(search): show number of search-results
* `5576025` feat(install): provide easy install script
* `268b689` feat(reuse): search all folders
* `e59ee82` feat(clearing): load clearing history in a model on click
* `919503c` feat(monk): make use of rf_active to detect monk scan for licenses
* `5523b77` feat(clearing): Add dialog box for text and comment feilds in single file clearing view
* `dfcc733` feat(Obligation): add first implementation of obligations and risks management
* `d8b291e` feat(clearingView): add action column in the leftmost position
* `cb582fa` feat(advice-license): add full text search to advice license
* `d19cb3b` feat(licenseList): add clearing decisions as part of license list generation and export in csv
* `64e5ffa` feat(copyright): split copyright histogram to seperate copyrights hist and email,author,url hist
* `21c2787` feat(GUI): yellow flag for files with decision type "To Be Determined"
* `a77cba4` feat(select-searchbar): add select2 searchbar

#### Corrections

* `f5e65fb` fix(reportImport): fix bug in reportImport, refactor file matching
* `29d5a7a` fix(delagent): Delete-Folder without deleting duplicate upload/s in other folders
* `c1f4cdb` fix(install): update packages deps for latest debian and ubuntu
* `55ce2bb` fix(debian9): add compatibility with debian9
* `e7603a5` fix(ui): own css file shoult be loaded last
* `c8af79d` fix(docker): .git should not be excluded via dockerignore
* `773c459` fix(obligations): select only single value for ob_classification and ob_type
* `8115de6` fix(obligations): rename obligation to license map table
* `4eda85d` fix(spdx): adhere file naming convention
* `8ba2d52` fix(travis): do not build multiple times
* `81d3590` fix(licenses): remove special chars from GPL-1.0, CPAL-1.0 and MPL-2.0
* `c49d4c0` fix(docker-compose): do not build twice
* `4616608` fix(www): Undefined index in admin-license-file.php
* `8a66754` fix(obligations): correct php syntax using phpcs
* `40775c5` fix(licenseref): changing shortname of 3DFX license to 'Glide'
* `9570e7f` fix(nomos): fix posix incomparible regular expressions
* `5d01085` fix(license): remove junk characters from LGPL-2.1 license text
* `4e222c8` fix(debian9): fix debian linker error
* `070ee8a` fix(jquery): remove old version of jquery from copyright-hist
* `a1b818a` fix(docker): use debian 8.8 for images
* `ecfefea` fix(delagent): remove unused variables
* `15f748a` fix(obligations): reintegrate lost changes
* `0cf4c7d` fix(folder-deletion): don't delete duplicate files in other folder ...
* `3105198` fix(licenseView): display clearing history for all clearings done on file level
* `e4e6cda` fix(delagent): delete child folder by parent id
* `cbe65df` fix(license-edit): fix regression with broken license edit list
* `6607b13` fix(resolveConflicts): resolve conflicts after merge from master
* `1985be3` fix(licenseExport): change the filename format of export license
* `5c5cb4f` fix(bulk-scan): don't schedule bulk scan, if no license/ref-text
* `35d12a5` feat(nomos): add new license RSA-Cryptoki
* `0b8e58b` fix(nomos): issue #754 (regex error)
* `14f6062` fix(libfoss): make agent processed items counting atomic
* `056a9a8` fix(spdx) typo 'spxd2' in document templates
* `9cdf1d6` refactor(reportImport): spdx2Import -> reportImport

#### Improvements on Infrastructure, Packaging and Testing

* `ca77960` chore(changelog): update to commitlint
* `fcb8357` chore(changelog): removed changelog
* `e268d89` chore(gitignore): add more entries to the blacklist
* `8dfcee6` chore(travis): fix changelog lint
* `833d4ce` chore(travis): enforce changelog
* `40495f7` chore(composer): composer enhancements
* `c77c7ad` chore(copyright): Fetch json.hpp on the fly
* `c655c84` chore(pb): vagrant file and spec file for pb run for centos7
* `ae26006` style(GUI): License Comment column needs line breaks
* `f62a4ec` chore(editorconfig): change indent_style and size
* `ed30641` chore(travis): Add PHP syntax checking to Travis
* `2a4b8d3` chore(jquery): update jQuery to 3.2.0 and jQuery UI to 1.12.1
* `acb62cc` chore(editorconfig): add editorconfig to project

## How to Install 3.2

Please refer to the github release page for the files available:

https://github.com/fossology/fossology/releases/tag/3.2.0

Unfortunately, the package building infrastructure is moving currently and we do not seem to be stable on the package generation right now.

Fossology uses PHP and Postgresql. Depending on your systems capabilities, you might want to adjust PHP memory settings and Postgresql deployment settings. Please have a look at:

http://www.fossology.org/projects/fossology/wiki/SysConfig

## How to Upgrade to 3.2 from 2.5/2.6

Please upgrade from 2.5/2.6 to 3.0 and then try to update to 3.2: Successful migration from 2.5 / 2.6 was one of the topics we have put a lot of care for when looking at 3.0. But from then on, no issue with migrations of previous versions were reported. From a source point of view, we have no doubts that it works. 

Unfortunately, the package building infrastructure is moving currently. The works on the release were independent from the moving of the server and thus the release is ready, but the package building server is not. News regarding the new package build infrastructure will be on the mailing list.

## Known Issues

As is to be expected, with any release, there are known bugs that users may run into with this release. The ones we know about at this point (and some of the workarounds), are documented here so you don't need to spend time reporting these bugs again.

An overview about current bugs can be seen at: https://github.com/fossology/fossology/issues?q=is%3Aopen+is%3Aissue+label%3Abug

As a general issue, the package building infrastructure is not present at the current time. Therefore, installation from the following methods:

* Provided Debian 8 packages: https://github.com/fossology/fossology/releases/tag/3.2.0
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