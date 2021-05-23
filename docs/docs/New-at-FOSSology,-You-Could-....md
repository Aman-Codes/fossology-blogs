What you could do in order to get started: This page summarises first steps in order to get familiar with the project. It lists readings and links and first activities when being new to the project.

#### Domain Knowledge and Learning About Open Source Licenses ####

Some characterise FOSSology as a text scanner for finding licenses in files. In fact while true, the domain of open source licenses compliance is more complex and has some specialities. In order to get a start on the topics you could read:

* http://en.wikipedia.org/wiki/Open_source
* http://en.wikipedia.org/wiki/Open-source_license
* http://en.wikipedia.org/wiki/Free_software_license
* http://opensource.org/osd
* http://www.gnu.org/licenses/license-recommendations.html
* http://www.gnu.org/licenses/license-list.en.html

#### FOSSology Introduction ####

So FOSSology is a software project, a community software project having also several other contributors. It is public and therefore there a lot of resources freely available in the Internet. As general information about FOSSology you could:

* watch some introductory video cast of a talk about FOSSology: http://www.youtube.com/watch?v=HcCtyZLQG6E
* watch its second part: http://www.youtube.com/watch?v=LzILjbiFiuk
* read the main paper about FOSSology, from its kind of lead developer: https://fossbazaar.org/system/files/msr007p-gobeille.pdf

#### Testing Testing Testing ####

For development, testing is extremely important. Every developer should be familiar with the FOSSology built in tests. In order to get started with that you could:

* read the basics about FOSSology testing: http://www.fossology.org/projects/fossology/wiki/Testing_Basics
* read the testing infrastructure of the community FOSSology project: http://www.fossology.org/projects/fossology/wiki/Testing_FOSSology
* read (maybe just checking again) what has been done in the FOSSologyNG project: [wiki:Testing]
* run the LastGoodNomosTest for example on your machine.
* write a unit test for some feature of your colleagues where not unit test was created (happens) and add this to the test suite

#### First Own Steps ####

Then as initial development step, in order to understand FOSSology, a license to the scanner can be added. That means, you could:

* find a license, that is currently not covered by FOSSology
* add this license to the database
* add the license recognition capability to the Nomos scanner in order to let the Nomos find the license
* check in the UI if everything is all-right and if the license is recognized correctly
* add a test case accordingly as done with the other licenses
* then use the FOSSology tests to make sure you did not damage existing (license scanning) capability and check that your added test runs as well
* ask Michael if you could commit this to the FOSSology mainline :)

#### Alternative to First Own Steps: Agents ####

As an alternative you could also check how to write your own agent for FOSSology. Agents are the basic concept of workers in FOSSology. For example, the license scanner is implemented as an agent. An instance of an agent is deployed by the scheduler to perform a job. If multiple instances of the same agents are required (for example in order to scan different software packages at the same time), then the scheduler creates the instances accordingly.

You could write your own simple agent that does something tiny. For example, you could write an agent that finds inappropriate source code comments or simply "TODO" comments in source code as they could point out vulnerabilities or unstable code. You could start with reading the following link:

* http://www.fossology.org/projects/fossology/wiki/How_To_Create_An_Agent

Then you implement the agent, but mind that there are some tasks involved with this one, like make the agent available for selection in the user interface and so on ...

#### You Could ####

If you like coding you could check this: http://www.youtube.com/watch?v=U9Q4YE6b9dI It is about 3D demo programming with a very limited amount of memory, more on this here: http://en.wikipedia.org/wiki/Demo_%28computer_programming%29 Have Fun.