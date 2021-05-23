Welcome to the FOSSology Wiki!

FOSSology is about OSS license compliance. It provides you with

* A set of command line tools
* A Web server application

for performing a number of scans, analyses and tasks when it comes to OSS license compliance:

* Scanning for licenses
* Scanning for copyright statements, also including finding e-mails, URLs or author statements
* Scanning for ECC relevant statements
* Reporting on the licensing situation, including writing SPDX files
* Reviewing licensing situation, including importing SPDX for reviewing external license information
* Managing licenses and their obligations, including reporting on obligations resulting from licensing of a component

Please find more general information on the main [FOSSology home page](https://www.fossology.org/).

## Contact and Information

The following table lists the main sources of information as well as the main ways to contact the fossology community

| Name | URL | Remarks |
| --- | --- | --- |
| Main home page | https://www.fossology.org/ | main home page with general info |
| Project @ Github | https://github.com/fossology/fossology | where the music plays |
| Main mailing list | fossology@fossology.org | for users discussion about using it |
| Developer mailing list | fossology-devel@fossology.org | for developers, discussion about developing |
| Organisers mailing list | fossology-steerign@fossology.org | to reach persons who are involved into organisation of the project |
| Slack Channel | https://fossology.slack.com/ | the main chat spot |
| Slack Channel Invitation Link | [Sharable join link to join](https://join.slack.com/t/fossology/shared_invite/enQtNzI0OTEzMTk0MjYzLTYyZWQxNDc0N2JiZGU2YmI3YmI1NjE4NDVjOGYxMTVjNGY3Y2MzZmM1OGZmMWI5NTRjMzJlNjExZGU2N2I5NGY) | that should bring you in |
| IRC | Yes, there is a channel on IRC ... | not sure if it still used |

## Contribute to FOSSology

There are many ways to contribute to FOSSology. If you are a developer and want to submit code, start by discussing what you want to do on our developer mailing list fossology-devel@fossology.org. Submit your patches there or as a pull request.

Once we know you a little better and trust your patches, we will give you commit access. You must agree with our licensing choice. All code is under GPL-2.0. If you want your copyright to appear in the code, put it in your patch.

But besides code, you may want to consider the following ways to support the project as well:

* Star it on Github!
* Give a presentation about FOSSology
* Explain it to your friends, colleagues
* If you are using FOSSology regularly consider putting your logo on the [FOSSology home page](https://www.fossology.org/)
* Write documentation
* Submit issues about what you found about it

## Get Started with Development

* [[Download Source via Git]]
* [[Install from Source]]
* [[Setup a Chroot environment]]
* [[Documentation Generation]]
* [[Reporting bugs]]
* [[Definition of Done]]
* [[Coding Style]]
* [[Git basic commands]]
* [Chris Beam's Intro on Git Comments](http://chris.beams.io/posts/git-commit/)
* [[New-at-FOSSology,-You-Could-...]]
* GSOC 2019! - Find Our [[Google Summer of Code Proposals 2019]] here
* GSOC 2020! - Find Our [[Google Summer of Code Proposals 2020]] here
* GSOC 2021! - Find Our [[Google Summer of Code Proposals 2021]] here
## Using FOSSology

* [[Obligations management]]
* [[FOSSology scanners in CI]]

## Administration of FOSSology

* [[General Administration Notes]]
* [[Configuration and Tuning]]
* [[Email notification configuration]]
* [[Groups and Access Rights configuration]]
* [[Improving IO performance]]
* [[External authentication configuration]]

## Developer Documentation

### Infrastructure

Infrastructure for the application is comprised by the database, the Web server, the PHP environment etc.

* [[Global System Configuration Variables]]
* [[File Locations]] and folder locations of the FOSSology server application.
* [[File Install Locations in 1.4 and 2.X]] as an overview - migration information.
* [[Repository]], where FOSSology stores uploads.

##### PHP  

* [[Composer]]
* [[Namespaces]]
* [[Autoloading]]  
* [[Dependency injection]]
* [[PHP Object Baseclass]]
* [[PHP Debugging with Apache]]
* [[Twig]]

##### Database

* [[Database]], the general setup.
* [[fossology-gold the master database schema]]
* [[License Ref Table]]
* [[Notes on SQL Database Operations]]
* [[DbManager]] for PHP
* [[DbManager-c]], for the C-Agents

### Agents and Jobs

##### General 

* [[Job Scheduler |Job-Scheduler]]
* [[FOSSology Agents]]
* [[Writing Agents & Plugins]]
* [[How To Create An Agent]]
* [[Writing a FOSSology agent (new work in progress)]]
* [[Programming for the Job Queue]]
* [[How to query an agent for version]]
* [[File Comparing and Diff type plugins]]
* [[HACKING]]

##### Particular Agent Documentation

* [[Nomos]], a license scanner based in regular expressions.
* [[Monk]], a license scanner based on text comparison.
* [[MonkBulk]], an extension to Monk for user-based phase searching.
* [[Copyright]], an Agent searching for copyright, URL, e-mail and authorship statements.
* [[ECC]], export control and customs as an extension to Copyright.
* [[Package Agent]], an agent exporting metadata from installation packages.
* [[Maintenance Agent]],  (new in 2.4.0)
* [[Mimetype Agent]], running over files trying to determine the mimetype.
* [[Buckets]], an agent to categorize files based un user-defineable definitions.

### User Interface

* [[UI Architecture Overview]]
* [[Tagging]]
* [[Access Control]]
* [[Permissions and Groups]]
* [[License Browser filter]]

### Testing

If you just want to run the tests or learn about them see the Running FOSSology Tests area of the wiki.

* [[FOSSology test automation]]
* [[PhpUnit test coverage]]
* [[Install Fossology on a Jenkins server]]
* [[Ant build file example for test execution]]
* [[Debugging tips]]
* [[Testing FOSSology]] _(to be migrated)_

### Releasing

This documents the nuts and bolts of producing a FOSSology release.

* [[Release Notes]] (from 1.3 onwards)
* [[Release Process]]
* [[Release Testing]] - Document the minimum tests necessary to pass before releasing
* [[How to create a new release]]
* [[Building FOSSology packages|Building Fossology using pbuilder]]
* [[FOSSology Debian Package Process]]
* [[Tag and Create packages for new release]]
* [[Notepad Building Packages]]

### Notice

* [[Known Security Risks]]
* [[REST API]], preliminary thoughts. 