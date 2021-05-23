(transferred from https://github.com/fossology/fossology/issues/1266)

## Intro

We from the fossology project would like to apply for GSOC. Please see two main resources for finding out more FOSSology in general:

* https://www.fossology.org
* https://github.com/fossology/fossology/wiki

## Interested in Application? - Getting Grip

If you are interested in an application - great! We encourage your application. So the question is how to get started with the topic, just a few points:

* check https://www.fossology.org and these Github pages
* maybe check some initial intro at https://github.com/fossology/fossology/wiki/New-at-FOSSology%2C-You-Could-...
* https://www.fossology.org/get-started/basic-workflow/
* https://www.fossology.org/get-started/basic-training/
* try to install fossology, either using vagrant or docker
* read the proposed topics
* use the mailing list fossology-devel@fossology.org or contact proposed mentors for further steps
* see the proposed meeting in the issue #1266 ... next meeting at Wed, 20th of March 2019 at 12:30 CET
* if you are interested in trying to make contributions, see out issues with the label [ready for newbies](https://github.com/fossology/fossology/issues?q=is%3Aopen+is%3Aissue+label%3A%22ready+for+newbies%22). Maybe you could sort out the workflow and make a first pull request.

## Organisational

* 2019-02-06: Our application for the fossology organisation was submitted (100% completion status) - so it is currently under review.
* we are offering a call at Wed, 20th of March 2019 at 12:30 CET - Join using the Circuit web client (ideally Chrome) or mobile app: https://circuit.siemens.com/guest?token=55e3cb5c-26e6-4b02-bc1b-fca5d61aa3d2

#### Mentors

so far, the following users have oouted themselveds

* ag4ums
* amanjain97 
* GMishx
* shaheemazmalmmd 
* mcjaeger

Interested in becoming a mentor? please reach out to us!
  
## Topic Proposals

### Integration with Software Heritage

Software heritage is an archive for published (open source) software. More information can be found here:

* https://en.wikipedia.org/wiki/Software_Heritage
* https://www.softwareheritage.org

The integration with fossology would target the following use cases:

* a user in fossology can see if the current file (or the files of an upload) can be actually found as in Software Heritage. With this functionality a user can see if the file has been published in a different open source before or is this file is really part of the distribution
* by querying the files in an upload in software heritage, an origin can be determined if the majority of files actually belong to an identifying release of OSS. With such functionality, FOSSology could determine the actual package that is scanned by FOSSology. Currently, FOSSology is agnostic which software is being uploaded, just processing files of an unpacked archive.
* For proprietary OSS uploads, the FOSSology can determine the OSS parts of it.

There is a REST API provided  and a simple agent could just connect with this REST API to check if the file is already in the archive. Added tables to the FOSSology database could then hold the references for an upload.

### License compatibility Agent

FOSSology finds licensing statements in OSS Software. In some cases, multiple licenses are found. Then there can be a problem if licensing is not compatible with each other in the same package. See following cases:

* https://en.wikipedia.org/wiki/License_compatibility
* https://wiki.creativecommons.org/wiki/Wiki/cc_license_compatibility
* https://www.gnu.org/licenses/license-compatibility.html

Since the FOSSology agents find licenses and also the user can conclude licensees, there will b a definitive set of licenses for a package. Then, functionality could compute conflicts between the licenses and show this in the UI as well write it to the unified report.

Good read: https://dwheeler.com/essays/floss-license-slide.html

### Integration with ClearlyDefined.io

Clearly defined is a project for collecting metadata about published software. This metadata shall help, among other things, for achieving OSS license compliance. More info can be found at:

* https://docs.clearlydefined.io 
* https://github.com/clearlydefined/clearlydefined

FOSSology could connect to the ClearlyDefined REST API. This could be done using an agent that queries the license metadata displayed by ClearlyDefined. Moreover the analysis functionality of FOSSology leads to new license metadata which could lead to a new contribution to clearly defined. The task for FOSSology would be to download metadata of clearly defined by using an agent and display this in FOSSology. At the same time anew analysis results of the FOSSology software will be processed for uploading this as new metadata as "data curation" 

[Go to project specific page for the clearly defined integration fork](https://github.com/vivekaindia/fossology/wiki)

### Collect Wisdom to Auto-Conclude Licensing

FOSSology is an analysis tool to assess the licensing information. Like the SPDX data model there is a difference between licenses found by scanners and licenses concluded, just because licensing can be ambiguous. So FOSSology works also in this split mode. However, due to the different facilities in FOSSology, there are a number of auto conclusion options possible where there could be auto conclusions:

1. Auto conclude when a sufficient number of agents is detecting the same license.
2. Adding `NOTICE` file which are part of the Apache licensing scheme to acknowledgements
3. If the entire upload only contains permissive licenses, fill out the file info fields appropriately (explains that license texts and coyprights need to be preserved, checkboxes to no).

### New License Scanner: Atarashi

Continuation of Atarashi OSS: Topics for continuation of fossology/atarashi which is a project, topics how to evolve this further would be:

1. Improve its usability, because currently the interface is a simple command line interface
2. Improving the algorithm or implementing new algorithms: LSH, KD-Tree, etc.
3. Max voting factor: we have multiple output for a single license, which one to choose based on testing.

## More Proposals (Partly Work-in-Progress)

### New Search

Search in FOSSology needs to be enhanced: currently, it is not nice to search for a file / folder / upload. Not even considering "all packages which contain a license X", right now the search only applies to file based search and both the interface for posing queries as well as the result view is "very technical". Another area of search enhancements would be a search REST interface.

### REST API

Extend the REST API: align it with Richardson model level 3: t.b.d.

### New Job Management UI

FOSSology is server system which allows multiple users to perform analysis jobs. As such, there are multiple jobs running simultaneously on the server as server processes. However, FOSSology does not provide an overview about all jobs running currently in the UI, not even thinking of filtering for particular job types and so on.