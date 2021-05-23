(note that this page requires updating since it has references to the Redmine wiki)

# 1 FOSSology Testing Overview

  [[FOSSology_system_testing_2.6.2|FOSSology Test Plan]]

## 1.1 Quality Assurance (QA) Philosophy

The FOSSology team believes that quality must be "built-in" through good engineering practices, not "bolted-on" later through a lot of testing. To provide a product that not only meets its requirements but also is maintainable and supportable over time, the team pursues solutions that are engineered, not just programmed.  The QA infrastructure provides a framework for engineered solutions to be built, for quality to be tested and validated at every step, and for the product to be able to be released as frequently as needed.

For more information on test automation, see [[FOSSology Automation]].

## 1.2 Validating Requirements

Requirements for new or improved FOSSology features come from various stakeholders like internal HP groups (primarily the OSRB) and external users. The requirements are captured and tracked in the external wiki as part of the project "Roadmap/Backlog":http://www.fossology.org/projects/fossology/roadmap.  This allows everyone to review and comment on the FOSSology requirements as they are documented and implemented.


## 1.3 Types of Testing

Testing occurs not only to make sure the mainstream use cases function appropriately but also the corner cases (like invalid data) get handled appropriately.  It ensures expected errors are trapped and the system produces expected behavior.  (Click for more information re: [[Testing Basics]])  

The FOSSology team uses several types of tests to achieve its software quality goals.  The continuous integration (CI) environment exercises all these tests, except manual system tests, on a regular basis.  

**key Areas of Focus**

| Type | Description | Characteristics | Used in Developer Sandbox? | Incorporated into CI? | Frequency | 
|---|---|---|---|---|---|
| [[Testing_FOSSology#16-Unit-Testing|[[Unit tests]] | Unit tests ensure that a code unit meets its design and behaves as intended. | - Focused on testing the code unit (the atomic piece of code) in isolation, not the interactions with other code, with as few dependencies as possible  <br/> - Should test all possible inputs (valid and invalid), functions, and error cases of the code unit <br/> - Do not depend on external systems to be installed/set up <br/> - Standalone, can be run within a sandbox <br/> - Are fast and easy to run through "push-button" automation <br/> - Developers should ensure all unit tests (old and new) pass in their sandbox before checking in code - Are the basis of measuring code coverage | Yes | Yes | Every Commit |
| [[Testing_FOSSology#17-Functional-Testing|Functional tests]] | Ensure that a set of code units work together correctly.  | - Focus on testing the interaction of several units together, not just one unit; typically, they test specific features or code paths <br/> - There is no user interaction; the tests are automated, repeatable, and/or scripted <br/> - Are more involved, they usually take longer than unit tests to run <br/> - Run both in and out of sandbox; external systems such as database connections and repo may be required to be installed/set up <br/> - From the command line, they test all CLI options and invalid data <br/> - Tests are wrapped by and interact with the test harness | Yes | Yes | Multiple times per day, not every commit | 
| [[Automation Testing Packaging and Installation Tests]]|[[Packaging and Installation tests]] | Ensure the evolving code can always be packaged and installed for both source and package installs and on all supported platforms. | - Tests the packaging and installation processes for both package- and source-installs <br/> - Includes installation and testing across all supported platforms using VMs <br/> - Depends on external systems to be set up  <br/> - Tests the installed version of FOSSology outside a sandbox using the functional tests | No | Yes | Daily |
| [[Testing_FOSSology#18-System-Testing]]|[[System tests]] | Ensures that the system behaves correctly from the "user level"; final method of testing before release. | - Prep for "release", trying to catch defects not found in the above areas <br/> - Focus on manually exercising the system via documented intructions in ways that users typically do <br/> - Are the basis of ensuring that user features behave as expected <br/> - Focus at user level for (1) installation (2) UI (3) analysis <br/> - Tested within "deployment" environment with complete system dependencies installed | No | No | Every iteration or release |

**Important Areas of Future Focus**

| Type | Description | Characteristics | Used in Developer Sandbox? | Incorporated into CI? | Frequency | 
|---|---|---|---|---|---|
| [[Automation Testing Environment and Configuration]]|[[Environmental/Configuration tests]] | Ensure configuration/environment is set up correctly. | TBD | No | Yes | Daily |
| [[Automation Testing Performance and Load|Performance/Load tests]] | Ensures adequate FOSSology performance | - Stress tests attempt to load the system up and ensure it can perform adequately. <br/> - DB performance testing identifies areas for improvement through code/query/schema re-factoring.  <br/> - Apache HTTP server performance  - UI usability & response time | No | TBD| Regularly | 
| [[Automation Testing Cluster]]|[[Cluster tests]] | Ensures FOSSology can be successfully installed and configured as a cluster. Validates the scheduler/agent communications in a cluster. | TBD | No | TBD | TBD |
| [[Automation Testing Migration]]|[[Migration tests]] | Ensures FOSSology can be successfully migrated from one version to another. | TBD | No | TBD | TBD |

## 1.4 Test Infrastructure 

### 1.4.1 *Test Organization*

The FOSSology source code is organized so that each agent has all the needed components for its operation in its source tree.  This includes the unit and functional tests for that agent and associated Makefiles to drive the necessary test creation and execution.  See [[Module Structure]] for details.

### 1.4.2 *Makefiles*

Each module has a high-level Makefile and lower-level Makefiles to drive testing, whether it be unit or functional, with associated _test_ targets.  If both unit and functional testing is desired, the high-level Makefile is invoked from the module's root directory which in turn calls the lower-level Makefiles to run the tests.  If only one type of testing is desired, the lower-level Makefile is invoked directly with its _test_ target and only that test is executed.  In this way, a developer has complete control over what gets run in his sandbox, and the Continuous Integration server has the necessary granularity to run the desired tests whenever it wants.

###1.4.3 *Test Data*

TBD
* A basic database that the tests can query with known-good data
* A common test repo that the tests can use

The test database/repo should not have any dependencies on any system value or configuration outside of the sandbox; in other words, all information to make the tests work should either be checked into the sandbox that gets created or created by the high-level test target as a matter of initiation.  There shouldn’t be any dependencies on any other system file to run within the sandbox.

### 1.4.4 *Reports*

All tests produce output in junit format for test reporting; if one of the existing test frameworks are not used, then whatever is used must produce a xml report in junit format. The definition for the junit report format can be found on the fossology wiki at: http://fossology.org/test:junit_format.

It is strongly suggested that one of the existing test frameworks be used to create tests.  If an existing test framework is not chosen, a suggested method to produce junit report formats is to wrap all test cases in PHUnit.  By running PHPUnit with --log-junit flag, the results will be in junit format.

```
--log-junit <file>
```

### 1.4.5 *Test Documentation*

All tests should be documented using doxygen.  Test documentation is needed for a number of reasons.
* Tests are code, code should be documented.  For example, what does the test test?
* Test documentation can serve as the test plan, so either a small test plan is needed or none at all depending on how well the test documentation is done.
* Tests can have an API, the API should be documented so other tests can use it.

The documentation for the tests can be found at "Test Documentation":http://fotest.fc.hp.com/~markd/testDocs/Docs/index.html.  These documents are updated frequently as part of the continuous integration.

### 1.4.6 Test Server

TBD - a new server/cluster that mimics production and allows testing and troubleshooting outside the production and sandbox environments.

* [[Testing-vm_machine_list]]

## 1.5 Overall Testing & Dashboard Metrics

* "FOSSology Testing Dashboard":http://fotest.fc.hp.com:8080 (HP only)

To ensure an expected level of quality and to improve that level over time, there are specific metrics that are measured and tracked over time.

* number of tests
    * Unit
    * Functional
    * System
    * Stress
* Code Coverage
    * Lines of Code (LOC) covered
    * Functions covered
    * Branches covered

!Test_Metrics_Pictures.jpg! !Test_Metrics_Pictures_201306.jpg!
!Test_Metrics_Numbers_201306.jpg!

## 1.6 Unit Testing

### 1.6.1 Unit Testing Dashboard (Tests and Coverage)

* "Latest FOSSology Unit Test report":http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Unit_Test_Results/Unit_Tests_Results.html (HP only)
* "Mimetype code coverage":http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Mimetype_Coverage_Report/
* "Delagent code coverage":http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Mimetype_Coverage_Report/
* "Pkgagent code coverage":http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Pkgagent_Coverage_Report/
* "Ununpack code coverage":http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Ununpack_Coverage_Report/
* "Copyright code coverage":http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Copyright_Coverage_Report/
* "Wgetagent code coverage":http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Wget_Agent_Coverage_Report/
* "Scheduler code coverage":http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/scheduler_Coverage_Report/
* "Common php code coverage":http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Common_PHP_Lib_Coverage_Report/

### 1.6.2 Additional Resources

* [[Automation_Testing_Unit_Tests| Unit Tests]]

## 1.7 Functional Testing

#### 1.7.1 Functional Testing Dashboard (Tests and Coverage)

* "Latest FOSSology Functional Test report":http://fotest.fc.hp.com:8080/job/Fossology_Functional_Tests/Agent_Functional_Test_Results/Functional_Tests_Results.html (HP only)

### 1.7.2 Additional Resources

* [[Automation_Testing_Functional_Tests| Functional Tests]]

## 1.8 System Testing

### 1.8.1 System Testing Dashboard

* [[FOSSology_system_testing_2.6.2| 2.6.2 release system testing dashboard]]

* [[FOSSology_system_testing_2.6.0| 2.6.0 release system testing dashboard]]

* [[FOSSology_system_testing_2.5.0| 2.5.0 release system testing dashboard]]

* [[FOSSology_system_testing_2.4.0| 2.4.0 release system testing dashboard]]

* [[FOSSology_system_testing_2.3.0| 2.3.0 release system testing dashboard]]

* [[FOSSology_system_testing_2.2.0| 2.2.0 release system testing dashboard]]

* [[FOSSology_system_testing_pre_2.2.0| pre 2.2.0 release system testing dashboard]]

### 1.8.2 Additional Resources

* [[Automation_Testing_System_Tests| System Tests]]

# 2  Obsolete - may be useful so left around

UI Tests

* [[How to Write PHP UI tests]]  
* [[FOSSology Test Suite]]
* [[How to configure and run UI Tests]]  