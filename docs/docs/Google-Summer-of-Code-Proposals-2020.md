(transferred from https://github.com/fossology/fossology/issues/1587)

## Important News!

We will offer our telco call "GSoC Contact Session" on

> Every Thursday at 11:30 UTC, 13:30 CEST, 17:00 IST, 20:30 CST, 7:30 ET

If you have questions, please consider joining in. If it is does not work for you, consider contacting us via slack.

Please see dial-in details at the end of this page.

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
* https://fossology.github.io/
* try to install fossology, either using vagrant or docker
* read the proposed topics
* use the mailing list fossology-devel@fossology.org or contact proposed mentors for further steps
* [Slack invite link](https://join.slack.com/t/fossology/shared_invite/enQtNzI0OTEzMTk0MjYzLTYyZWQxNDc0N2JiZGU2YmI3YmI1NjE4NDVjOGYxMTVjNGY3Y2MzZmM1OGZmMWI5NTRjMzJlNjExZGU2N2I5NGY)
* if you are interested in trying to make contributions, see out issues with the label [good first issue](https://github.com/fossology/fossology/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22). Maybe you could sort out the workflow and make a first pull request.

## Examples from Last Year

We were awarded three slots last year, please see here what was the result of it:

* Ayush' work on the Atarashi license scanner: https://github.com/hastagAB/atarashi/wiki/Google-Summer-of-Code-2019 
* Sandeep's work on Software Heritage Integration: https://github.com/sandipbhuyan/fossology/wiki/GSoC-Final-Report:-Integration-of-Software-Heritage-in-FOSSology
* Vivek has worked on integrating clearly defined: https://github.com/viv9k/fossology/wiki/GSoC-Final-Report:-Agent-Spasht 

Also - very much fun - Ayush made a youtube video / interview style of his experience: 
https://www.youtube.com/watch?v=C8f_etew-yc 

## Mentors

So far, the following users have opted themselves

* @ag4ums
* @GMishx
* @shaheemazmalmmd 
* @mcjaeger
* @sandipbhuyan

Interested in becoming a mentor? please reach out to us!
  
## Topic Proposals

### License Compatibility Agent

FOSSology finds licensing statements in OSS Software. In some cases, multiple licenses are found. Then there can be a problem if licensing is not compatible with each other in the same package. See following cases:

* https://en.wikipedia.org/wiki/License_compatibility
* https://wiki.creativecommons.org/wiki/Wiki/cc_license_compatibility
* https://www.gnu.org/licenses/license-compatibility.html
* https://github.com/Open-Source-Compliance/Sharing-creates-value/blob/defining-capability-map/Tooling-Landscape/Unanimous-Understanding/OC-Reference-Tooling-Capabilities-Glossary.md#compliance-checker

Since the FOSSology agents find licenses and also the user can conclude licensees, there will be a definitive set of licenses for a package. Then, functionality could compute conflicts between the licenses and show this in the UI as well write it to the unified report.

**The goal is to show users incompatible licenses** based on the existing license incompatibility analyses. It is not part of the project to assess which licenses are incompatible to each other. This is already available data. The goal is to find an appropriate model for such data and display it to the user in the Web UI and the document reporting.

Good read: https://dwheeler.com/essays/floss-license-slide.html

| Category | Rating |
| ---- | ---- |
| Low Hanging Fruit | - |
| Risk/Exploratory | *** |
| Fun/Periphial | **|
| Core Development | *|
| Infrastructure | - |

### Dashboard

FOSSology generates large set of data which can be exported to some time-series database and visualized with help of different visualizer software.

The basic idea is to write a script/agent which will run periodically on FOSSology DB and export following data which can be consumed by a time-series DB like Prometheus or InfluxDB:
- No. of uploads stored in FOSSology at the time
    - Upload should contain extra meta data like which group uploaded it, size, etc.
- No. of unique upload hashes in FOSSoloy at the time
- No. of times an agent was run.

With help of such data, following visualizations will be easier on a tool like Grafana:
- Line graph of uploads
    - Which can be filtered based on group
    - Also can show total file size stored by FOSSology for uploads
- Line graph for agents (combined and individual)
    - Can also show agent run duration

**The goal is to help administrators** and serve providers for FOSSology to understand the usage of the system and maybe even provide more accurate billing of the service based on usage data. The goal is also to understand trends and usage of Open Source components in an organisation.

| Category | Rating |
| ---- | ---- |
| Low Hanging Fruit | - |
| Risk/Exploratory | *** |
| Fun/Periphial | *** |
| Core Development | *|
| Project Infrastructure | - |

### Rewrite FOSSology UI, for example, using Angular, Bootstrap, Vue.js or ReactJS

FOSSology already have template based UI with the help of Symfony-Twig. In addition, FOSSology is using jQuery-UI, datatable, etc. to generate the pages. These are running for long and FOSSology needs a fresh view. Idea is to rewrite the UI using new technologies like Angular, Bootstrap, Vue.js or ReactJS. The twig-based templating could be considered for reuse.

The FOSSology UI initiated very HTML-90s style which works but does not look good today. A simple HTML has also the advantage that it runs from a variety of machines and different platform. Moreover, some of the PHP scripts even do not return HTML but just character streams. Today, the user base of FOSSology has grown and many persons use the Web UI. **The goal of this project** is to consistently provide a new UI technology to FOSSology which help to build more modern pages.

| Category | Rating |
| ---- | ---- |
| Low Hanging Fruit | - |
| Risk/Exploratory | * |
| Fun/Periphial | * |
| Core Development | *** |
| Project Infrastructure | - |

### New Search

Search in FOSSology needs to be enhanced: currently, it is not nice to search for a file / folder / upload. Not even considering "all packages which contain a license X".

Right now the search only applies to filename-based search and both the interface for posing queries as well as the result view is "very technical". Moreover criteria cannot be combined.

Another additional area of search enhancements would be a search REST interface.

**The goal of this project** is to provide the user with more search capabilities than searching for file names and maybe include wildcards. 

| Category | Rating |
| ---- | ---- |
| Low Hanging Fruit | ** |
| Risk/Exploratory | * |
| Fun/Periphial | ** |
| Core Development | ** |
| Project Infrastructure | - |

### Autoversioning and Packaging

This is a bigger infrastructure topic which is tied also to the technologies already used by the project (Github, travis-ci): Two basic things:

* Every commit to master creates a new version, at patch level. Project can manually decide to make a minor/major version jump. 

* Every version generates package that should be made available somehow.

While this can be done quickly at a minimum level, there are a number of details to make this right. For example, the packaging should also pull changelog and documentation (user documentation and REST) automatically into the distributed software.

**The goal of this project** is to automate the process of providing new versions to the users.

| Category | Rating |
| ---- | ---- |
| Low Hanging Fruit | ** |
| Risk/Exploratory | * |
| Fun/Periphial | ** |
| Core Development | - |
| Project Infrastructure | *** |

### Enhancement with ClearlyDefined.io (spasht)

Clearly defined is a project for collecting metadata about published software. This metadata shall help, among other things, for achieving OSS license compliance. More info can be found at:
* https://docs.clearlydefined.io
* https://github.com/clearlydefined/clearlydefined
* https://api.clearlydefined.io/api-docs/

The spasht agent is already pulling the data from ClearlyDefined, following enhancements are required:
1. Fetch the main license of the package.
2. Push the curated data back to ClearlyDefined.io
    * Would require understanding of the REST API

**The goal of this project** is to contribute compliance metadata back to community.

| Category | Rating |
| ---- | ---- |
| Low Hanging Fruit | ** |
| Risk/Exploratory | - |
| Fun/Periphial | *** |
| Core Development | ** |
| Project Infrastructure | * |

### FOSSology Server Job Dashboard

FOSSology has a dashboard, but that is more for the data. In fact, if FOSSology runs as a server for multiple users. There are many jobs around. Depending on the utilisation, there are number of packages scanned and analysed and therefore plenty of jobs in the queue. Now comes the problem: FOSSology currently allows only to view own jobs or jobs with access rights for the referring upload. While this is consistent in terms of access restrictions, a normal user does not understand what is going on the Fossology server and why own tasks are being processed. Then, impatient users submit jobs again and again until they see some progress. But in fact they have worsened the Job situation.

What would be required would be nice dashboard also for the tasks or scan jobs being processed in addition to the data / upload dashboard:

* tasks in queue
* which task are currently processed
* who is doing what
* better list, sort and filter capabilities than current job view

In the ideal case some good UI elements are used to replace the flat tables without sorting and filtering currently in place.

| Category | Rating |
| ---- | ---- |
| Low Hanging Fruit | ** |
| Risk/Exploratory | - |
| Fun/Periphial | ** |
| Core Development | ** |
| Project Infrastructure | - |

### Code Comment Extractor

Currently used [comment extractor](https://github.com/amanjain97/code_comment/) for [atarashi](https://github.com/fossology/atarashi) is a fork of the [code comment](https://github.com/kelvintaywl/code_comment) that is not maintained anymore. 
So we would like to develop a new code comment extractor that can be used with atarashi as well as fossology.

**The goal of this project**
- (Initial goal)
  * support for different other languages (eg.. python multiline comment, xml based languages)
  * removing control characters.
  * hosting it in pypi
- (Final Goal)
  * in fossology it should be able to separate out comments from code.

| Category | Rating |
| ---- | ---- |
| Low Hanging Fruit | - |
| Risk/Exploratory | ** |
| Fun/Periphial | * |
| Core Development | *** |
| Project Infrastructure | - |

### Integrating Reuse

Integrating [REUSE](https://reuse.software/) with fossology

Copyright and licensing is difficult, especially when reusing software from different projects that are released under         various different licenses. REUSE make it easier for you to declare the licenses under which your works are released, but they also make it easier for a computer to understand how your project is licensed.
This specification defines a standardized method for declaring copyright and licensing for software projects.
REUSE also helps in creating a bill of materials with just one simple command. 

**The goal of this project**
* check license and copyrights for each files of package.
* List of files without licensing information, can to notified to the user of that package.  

Important links
- https://github.com/fsfe/reuse-tool
- https://reuse.software/spec/
- https://git.fsfe.org/reuse/tool
 
| Category | Rating |
| ---- | ---- |
| Low Hanging Fruit | - |
| Risk/Exploratory | ** |
| Fun/Periphial | ** |
| Core Development | *** |
| Project Infrastructure | - |

### License change detection

As the software evolves in time, so does their licensing. A scenario where a package (say "mylib-v1.2") was scanned by FOSSology and cleaned by a clearing team. The new version of the package (say "mylib-v1.5") was released and uploaded again to FOSSology for clearing. Now, another metric can be generated showing the files from both packages against the change in licensing per file (addition, removal, change of license or new file).

It can generated a table like:
| File path | mylib-v1.2 | mylib-v1.5 |
| :--- | :--- | :--- |
| path/to/file| MIT | MIT |
| path/to/file2 | MIT,BSD | MIT |
| path/to/file3 | GPL-2.0 | GPL-3.0 |
| path/to/new-file | | BSD |

# Telco Call: Questions

At the scheduled time click to join the voice, video or screen sharing session:

Join using the Circuit Desktop App or mobile app: 
circuit://circuit.siemens.com/guest?token=03c07e30-3e55-4bc1-a417-0ec418152055

Join using the Circuit web client or mobile app:
https://circuit.siemens.com/guest?token=03c07e30-3e55-4bc1-a417-0ec418152055

To enjoy the best possible experience while working with Circuit on your desktop computer, try Circuit Desktop App, Chrome or Firefox.

To participate in a voice-only conference, dial one of the following numbers.

PIN 3965 9097 61 #

Join via voice-only. Your microphone will be muted. Press *3 to unmute it.

Frequently used dial-in numbers: 

Canada (English): +19292704096 
   tel:+19292704096,,3965909761#

China, Peoples Republic (中文): 4008198763 
   tel:4008198763,,3965909761#

Germany (Deutsch): +498923128020 
   tel:+498923128020,,3965909761#

Spain (Español): +34912158038 
   tel:+34912158038,,3965909761#

United Kingdom (English): +442076606076 
   tel:+442076606076,,3965909761#

United States (English): +19292704096 
   tel:+19292704096,,3965909761#



All dial-in numbers:

Argentina (Español): +541159842552 
   tel:+541159842552,,3965909761#

Australia (English): +61282784325 
   tel:+61282784325,,3965909761#

Austria (Deutsch): +4313602774621 
   tel:+4313602774621,,3965909761#

Belgium (English): +3226200317 
   tel:+3226200317,,3965909761#

Brazil (English): +551138788268 
   tel:+551138788268,,3965909761#

Bulgaria (English): +35929358238 
   tel:+35929358238,,3965909761#

Canada (Français): +18887768707 
   tel:+18887768707,,3965909761#

Canada (English): +18887768708 
   tel:+18887768708,,3965909761#

Canada (English): +19292704096 
   tel:+19292704096,,3965909761#

Canada (Français): +15148412132 
   tel:+15148412132,,3965909761#

Chile (Español): +56226188362 
   tel:+56226188362,,3965909761#

China, Peoples Republic (中文): 4008198763 
   tel:4008198763,,3965909761#

Colombia (Español): +5714864866 
   tel:+5714864866,,3965909761#

Costa Rica (Español): +50625397362 
   tel:+50625397362,,3965909761#

Croatia (English): +38517776197 
   tel:+38517776197,,3965909761#

Czech Republic (English): +420225382900 
   tel:+420225382900,,3965909761#

Denmark (English): +4535158116 
   tel:+4535158116,,3965909761#

Dominican Republic (Español): +18299566315 
   tel:+18299566315,,3965909761#

Ecuador (Español): +1800000742 
   tel:+1800000742,,3965909761#

El Salvador (Español): +50321367565 
   tel:+50321367565,,3965909761#

Estonia (English): +3726868885 
   tel:+3726868885,,3965909761#

Finland (English): +358981710072 
   tel:+358981710072,,3965909761#

France (Français): +33185148486 
   tel:+33185148486,,3965909761#

Germany (Deutsch): +498923128020 
   tel:+498923128020,,3965909761#

Greece (English): +302111809487 
   tel:+302111809487,,3965909761#

Guatemala (Español): +50223661200 
   tel:+50223661200,,3965909761#

Hungary (English): +3614292267 
   tel:+3614292267,,3965909761#

Indonesia (English): +622150851722 
   tel:+622150851722,,3965909761#

Ireland (English): +35315339866 
   tel:+35315339866,,3965909761#

Israel (English): +97237207564 
   tel:+97237207564,,3965909761#

Italy (Italiano): +390699748020 
   tel:+390699748020,,3965909761#

Japan (English): +81366344738 
   tel:+81366344738,,3965909761#

Kazakhstan (English): +77273122918 
   tel:+77273122918,,3965909761#

Korea South (English): +82264108576 
   tel:+82264108576,,3965909761#

Latvia (English): +37166163137 
   tel:+37166163137,,3965909761#

Lithuania (English): +37052141723 
   tel:+37052141723,,3965909761#

Luxembourg (Français): +35227300013 
   tel:+35227300013,,3965909761#

Malaysia (English): +60320535108 
   tel:+60320535108,,3965909761#

Mexico (Español): +525550912420 
   tel:+525550912420,,3965909761#

Morocco (English): +212520480311 
   tel:+212520480311,,3965909761#

Netherlands (English): +31207219093 
   tel:+31207219093,,3965909761#

Norway (English): +4723500290 
   tel:+4723500290,,3965909761#

Oman (English): +96880074490 
   tel:+96880074490,,3965909761#

Oman (English): 80074490 
   tel:80074490,,3965909761#

Pakistan (English): +92518108858 
   tel:+92518108858,,3965909761#

Peru (Español): +5117087113 
   tel:+5117087113,,3965909761#

Philippines (English): +63283953534 
   tel:+63283953534,,3965909761#

Poland (English): +48225048376 
   tel:+48225048376,,3965909761#

Portugal (English): +351210608117 
   tel:+351210608117,,3965909761#

Romania (English): +40311305020 
   tel:+40311305020,,3965909761#

Russian Federation (Русский): +73433511796 
   tel:+73433511796,,3965909761#

Russian Federation (Русский): +74232492964 
   tel:+74232492964,,3965909761#

Russian Federation (Русский): +74957459864 
   tel:+74957459864,,3965909761#

Russian Federation (Русский): +78127186937 
   tel:+78127186937,,3965909761#

Singapore (English): +6563131571 
   tel:+6563131571,,3965909761#

Slovakia (English): +421250112159 
   tel:+421250112159,,3965909761#

Slovenia (English): +38616002736 
   tel:+38616002736,,3965909761#

South Africa (English): +27118446101 
   tel:+27118446101,,3965909761#

Spain (Español): +34912158038 
   tel:+34912158038,,3965909761#

Sweden (English): +46851992037 
   tel:+46851992037,,3965909761#

Switzerland (English): +41225675325 
   tel:+41225675325,,3965909761#

Thailand (English): +6621040793 
   tel:+6621040793,,3965909761#

Turkey (English): +902123755830 
   tel:+902123755830,,3965909761#

United Arab Emirates (English): 800035704335 
   tel:800035704335,,3965909761#

United Kingdom (English): +442076606076 
   tel:+442076606076,,3965909761#

United States (English): +19292704096 
   tel:+19292704096,,3965909761#

Uruguay (Español): +59829028657 
   tel:+59829028657,,3965909761#

Venezuela (Español): +582123358895 
   tel:+582123358895,,3965909761#

Vietnam (English): +842844581451 
   tel:+842844581451,,3965909761#