(self.webpackChunkfossology_blogs=self.webpackChunkfossology_blogs||[]).push([[4734],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,s=t.originalType,i=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=u(n),m=o,g=c["".concat(i,".").concat(m)]||c[m]||p[m]||s;return n?a.createElement(g,r(r({ref:e},d),{},{components:n})):a.createElement(g,r({ref:e},d))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=n.length,r=new Array(s);r[0]=c;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return i},default:function(){return d}});var a=n(2122),o=n(9756),s=(n(7294),n(3905)),r={},l={unversionedId:"docs/FOSSology-Test-Automation",id:"docs/FOSSology-Test-Automation",isDocsHomePage:!1,title:"FOSSology-Test-Automation",description:"(note that this page requires updating since it has references to the Redmine wiki)",source:"@site/docs/docs/FOSSology-Test-Automation.md",sourceDirName:"docs",slug:"/docs/FOSSology-Test-Automation",permalink:"/fossology-blogs/docs/docs/FOSSology-Test-Automation",editUrl:"https://github.com/Aman-Codes/fossology-blogs/edit/master/docs/docs/FOSSology-Test-Automation.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic guide to FOSSology REST API",permalink:"/fossology-blogs/docs/docs/FOSSology-REST-API"},next:{title:"License/Copyright scanning automation using FOSSology in CI tools",permalink:"/fossology-blogs/docs/docs/FOSSology-scanners-in-CI"}},i=[{value:"1.1 Quality Assurance (QA) Philosophy",id:"11-quality-assurance-qa-philosophy",children:[]},{value:"1.2 Validating Requirements",id:"12-validating-requirements",children:[]},{value:"1.3 Types of Testing",id:"13-types-of-testing",children:[]},{value:"1.4 Test Infrastructure",id:"14-test-infrastructure",children:[{value:"1.4.1 <em>Test Organization</em>",id:"141-test-organization",children:[]},{value:"1.4.2 <em>Makefiles</em>",id:"142-makefiles",children:[]},{value:"1.4.4 <em>Reports</em>",id:"144-reports",children:[]},{value:"1.4.5 <em>Test Documentation</em>",id:"145-test-documentation",children:[]},{value:"1.4.6 Test Server",id:"146-test-server",children:[]}]},{value:"1.5 Overall Testing &amp; Dashboard Metrics",id:"15-overall-testing--dashboard-metrics",children:[]},{value:"1.6 Unit Testing",id:"16-unit-testing",children:[{value:"1.6.1 Unit Testing Dashboard (Tests and Coverage)",id:"161-unit-testing-dashboard-tests-and-coverage",children:[]},{value:"1.6.2 Additional Resources",id:"162-additional-resources",children:[]}]},{value:"1.7 Functional Testing",id:"17-functional-testing",children:[{value:"1.7.2 Additional Resources",id:"172-additional-resources",children:[]}]},{value:"1.8 System Testing",id:"18-system-testing",children:[{value:"1.8.1 System Testing Dashboard",id:"181-system-testing-dashboard",children:[]},{value:"1.8.2 Additional Resources",id:"182-additional-resources",children:[]}]}],u={toc:i};function d(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"(note that this page requires updating since it has references to the Redmine wiki)"),(0,s.kt)("h1",{id:"1-fossology-testing-overview"},"1 FOSSology Testing Overview"),(0,s.kt)("p",null,"  [","[FOSSology_system_testing_2.6.2|FOSSology Test Plan]","]"),(0,s.kt)("h2",{id:"11-quality-assurance-qa-philosophy"},"1.1 Quality Assurance (QA) Philosophy"),(0,s.kt)("p",null,'The FOSSology team believes that quality must be "built-in" through good engineering practices, not "bolted-on" later through a lot of testing. To provide a product that not only meets its requirements but also is maintainable and supportable over time, the team pursues solutions that are engineered, not just programmed.  The QA infrastructure provides a framework for engineered solutions to be built, for quality to be tested and validated at every step, and for the product to be able to be released as frequently as needed.'),(0,s.kt)("p",null,"For more information on test automation, see [","[FOSSology Automation]","]."),(0,s.kt)("h2",{id:"12-validating-requirements"},"1.2 Validating Requirements"),(0,s.kt)("p",null,'Requirements for new or improved FOSSology features come from various stakeholders like internal HP groups (primarily the OSRB) and external users. The requirements are captured and tracked in the external wiki as part of the project "Roadmap/Backlog":',(0,s.kt)("a",{parentName:"p",href:"http://www.fossology.org/projects/fossology/roadmap"},"http://www.fossology.org/projects/fossology/roadmap"),".  This allows everyone to review and comment on the FOSSology requirements as they are documented and implemented."),(0,s.kt)("h2",{id:"13-types-of-testing"},"1.3 Types of Testing"),(0,s.kt)("p",null,"Testing occurs not only to make sure the mainstream use cases function appropriately but also the corner cases (like invalid data) get handled appropriately.  It ensures expected errors are trapped and the system produces expected behavior.  (Click for more information re: [","[Testing Basics]","])  "),(0,s.kt)("p",null,"The FOSSology team uses several types of tests to achieve its software quality goals.  The continuous integration (CI) environment exercises all these tests, except manual system tests, on a regular basis.  "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"key Areas of Focus")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Characteristics"),(0,s.kt)("th",{parentName:"tr",align:null},"Used in Developer Sandbox?"),(0,s.kt)("th",{parentName:"tr",align:null},"Incorporated into CI?"),(0,s.kt)("th",{parentName:"tr",align:null},"Frequency"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[[Testing_FOSSology#16-Unit-Testing"),(0,s.kt)("td",{parentName:"tr",align:null},"[","[Unit tests]","]"),(0,s.kt)("td",{parentName:"tr",align:null},"Unit tests ensure that a code unit meets its design and behaves as intended."),(0,s.kt)("td",{parentName:"tr",align:null},"- Focused on testing the code unit (the atomic piece of code) in isolation, not the interactions with other code, with as few dependencies as possible  ",(0,s.kt)("br",null)," - Should test all possible inputs (valid and invalid), functions, and error cases of the code unit ",(0,s.kt)("br",null)," - Do not depend on external systems to be installed/set up ",(0,s.kt)("br",null)," - Standalone, can be run within a sandbox ",(0,s.kt)("br",null),' - Are fast and easy to run through "push-button" automation ',(0,s.kt)("br",null)," - Developers should ensure all unit tests (old and new) pass in their sandbox before checking in code - Are the basis of measuring code coverage"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[[Testing_FOSSology#17-Functional-Testing"),(0,s.kt)("td",{parentName:"tr",align:null},"Functional tests]]"),(0,s.kt)("td",{parentName:"tr",align:null},"Ensure that a set of code units work together correctly."),(0,s.kt)("td",{parentName:"tr",align:null},"- Focus on testing the interaction of several units together, not just one unit; typically, they test specific features or code paths ",(0,s.kt)("br",null)," - There is no user interaction; the tests are automated, repeatable, and/or scripted ",(0,s.kt)("br",null)," - Are more involved, they usually take longer than unit tests to run ",(0,s.kt)("br",null)," - Run both in and out of sandbox; external systems such as database connections and repo may be required to be installed/set up ",(0,s.kt)("br",null)," - From the command line, they test all CLI options and invalid data ",(0,s.kt)("br",null)," - Tests are wrapped by and interact with the test harness"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[","[Automation Testing Packaging and Installation Tests]","]"),(0,s.kt)("td",{parentName:"tr",align:null},"[","[Packaging and Installation tests]","]"),(0,s.kt)("td",{parentName:"tr",align:null},"Ensure the evolving code can always be packaged and installed for both source and package installs and on all supported platforms."),(0,s.kt)("td",{parentName:"tr",align:null},"- Tests the packaging and installation processes for both package- and source-installs ",(0,s.kt)("br",null)," - Includes installation and testing across all supported platforms using VMs ",(0,s.kt)("br",null)," - Depends on external systems to be set up  ",(0,s.kt)("br",null)," - Tests the installed version of FOSSology outside a sandbox using the functional tests"),(0,s.kt)("td",{parentName:"tr",align:null},"No"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[","[Testing_FOSSology#18-System-Testing]","]"),(0,s.kt)("td",{parentName:"tr",align:null},"[","[System tests]","]"),(0,s.kt)("td",{parentName:"tr",align:null},'Ensures that the system behaves correctly from the "user level"; final method of testing before release.'),(0,s.kt)("td",{parentName:"tr",align:null},'- Prep for "release", trying to catch defects not found in the above areas ',(0,s.kt)("br",null)," - Focus on manually exercising the system via documented intructions in ways that users typically do ",(0,s.kt)("br",null)," - Are the basis of ensuring that user features behave as expected ",(0,s.kt)("br",null)," - Focus at user level for (1) installation (2) UI (3) analysis ",(0,s.kt)("br",null),' - Tested within "deployment" environment with complete system dependencies installed'),(0,s.kt)("td",{parentName:"tr",align:null},"No"),(0,s.kt)("td",{parentName:"tr",align:null},"No")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Important Areas of Future Focus")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Characteristics"),(0,s.kt)("th",{parentName:"tr",align:null},"Used in Developer Sandbox?"),(0,s.kt)("th",{parentName:"tr",align:null},"Incorporated into CI?"),(0,s.kt)("th",{parentName:"tr",align:null},"Frequency"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[","[Automation Testing Environment and Configuration]","]"),(0,s.kt)("td",{parentName:"tr",align:null},"[","[Environmental/Configuration tests]","]"),(0,s.kt)("td",{parentName:"tr",align:null},"Ensure configuration/environment is set up correctly."),(0,s.kt)("td",{parentName:"tr",align:null},"TBD"),(0,s.kt)("td",{parentName:"tr",align:null},"No"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[[Automation Testing Performance and Load"),(0,s.kt)("td",{parentName:"tr",align:null},"Performance/Load tests]]"),(0,s.kt)("td",{parentName:"tr",align:null},"Ensures adequate FOSSology performance"),(0,s.kt)("td",{parentName:"tr",align:null},"- Stress tests attempt to load the system up and ensure it can perform adequately. ",(0,s.kt)("br",null)," - DB performance testing identifies areas for improvement through code/query/schema re-factoring.  ",(0,s.kt)("br",null)," - Apache HTTP server performance  - UI usability & response time"),(0,s.kt)("td",{parentName:"tr",align:null},"No"),(0,s.kt)("td",{parentName:"tr",align:null},"TBD")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[","[Automation Testing Cluster]","]"),(0,s.kt)("td",{parentName:"tr",align:null},"[","[Cluster tests]","]"),(0,s.kt)("td",{parentName:"tr",align:null},"Ensures FOSSology can be successfully installed and configured as a cluster. Validates the scheduler/agent communications in a cluster."),(0,s.kt)("td",{parentName:"tr",align:null},"TBD"),(0,s.kt)("td",{parentName:"tr",align:null},"No"),(0,s.kt)("td",{parentName:"tr",align:null},"TBD")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[","[Automation Testing Migration]","]"),(0,s.kt)("td",{parentName:"tr",align:null},"[","[Migration tests]","]"),(0,s.kt)("td",{parentName:"tr",align:null},"Ensures FOSSology can be successfully migrated from one version to another."),(0,s.kt)("td",{parentName:"tr",align:null},"TBD"),(0,s.kt)("td",{parentName:"tr",align:null},"No"),(0,s.kt)("td",{parentName:"tr",align:null},"TBD")))),(0,s.kt)("h2",{id:"14-test-infrastructure"},"1.4 Test Infrastructure"),(0,s.kt)("h3",{id:"141-test-organization"},"1.4.1 ",(0,s.kt)("em",{parentName:"h3"},"Test Organization")),(0,s.kt)("p",null,"The FOSSology source code is organized so that each agent has all the needed components for its operation in its source tree.  This includes the unit and functional tests for that agent and associated Makefiles to drive the necessary test creation and execution.  See [","[Module Structure]","] for details."),(0,s.kt)("h3",{id:"142-makefiles"},"1.4.2 ",(0,s.kt)("em",{parentName:"h3"},"Makefiles")),(0,s.kt)("p",null,"Each module has a high-level Makefile and lower-level Makefiles to drive testing, whether it be unit or functional, with associated ",(0,s.kt)("em",{parentName:"p"},"test")," targets.  If both unit and functional testing is desired, the high-level Makefile is invoked from the module's root directory which in turn calls the lower-level Makefiles to run the tests.  If only one type of testing is desired, the lower-level Makefile is invoked directly with its ",(0,s.kt)("em",{parentName:"p"},"test")," target and only that test is executed.  In this way, a developer has complete control over what gets run in his sandbox, and the Continuous Integration server has the necessary granularity to run the desired tests whenever it wants."),(0,s.kt)("p",null,"###1.4.3 ",(0,s.kt)("em",{parentName:"p"},"Test Data")),(0,s.kt)("p",null,"TBD"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A basic database that the tests can query with known-good data"),(0,s.kt)("li",{parentName:"ul"},"A common test repo that the tests can use")),(0,s.kt)("p",null,"The test database/repo should not have any dependencies on any system value or configuration outside of the sandbox; in other words, all information to make the tests work should either be checked into the sandbox that gets created or created by the high-level test target as a matter of initiation.  There shouldn\u2019t be any dependencies on any other system file to run within the sandbox."),(0,s.kt)("h3",{id:"144-reports"},"1.4.4 ",(0,s.kt)("em",{parentName:"h3"},"Reports")),(0,s.kt)("p",null,"All tests produce output in junit format for test reporting; if one of the existing test frameworks are not used, then whatever is used must produce a xml report in junit format. The definition for the junit report format can be found on the fossology wiki at: ",(0,s.kt)("a",{parentName:"p",href:"http://fossology.org/test:junit_format"},"http://fossology.org/test:junit_format"),"."),(0,s.kt)("p",null,"It is strongly suggested that one of the existing test frameworks be used to create tests.  If an existing test framework is not chosen, a suggested method to produce junit report formats is to wrap all test cases in PHUnit.  By running PHPUnit with --log-junit flag, the results will be in junit format."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"--log-junit <file>\n")),(0,s.kt)("h3",{id:"145-test-documentation"},"1.4.5 ",(0,s.kt)("em",{parentName:"h3"},"Test Documentation")),(0,s.kt)("p",null,"All tests should be documented using doxygen.  Test documentation is needed for a number of reasons."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Tests are code, code should be documented.  For example, what does the test test?"),(0,s.kt)("li",{parentName:"ul"},"Test documentation can serve as the test plan, so either a small test plan is needed or none at all depending on how well the test documentation is done."),(0,s.kt)("li",{parentName:"ul"},"Tests can have an API, the API should be documented so other tests can use it.")),(0,s.kt)("p",null,'The documentation for the tests can be found at "Test Documentation":',(0,s.kt)("a",{parentName:"p",href:"http://fotest.fc.hp.com/~markd/testDocs/Docs/index.html"},"http://fotest.fc.hp.com/~markd/testDocs/Docs/index.html"),".  These documents are updated frequently as part of the continuous integration."),(0,s.kt)("h3",{id:"146-test-server"},"1.4.6 Test Server"),(0,s.kt)("p",null,"TBD - a new server/cluster that mimics production and allows testing and troubleshooting outside the production and sandbox environments."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"[","[Testing-vm_machine_list]","]")),(0,s.kt)("h2",{id:"15-overall-testing--dashboard-metrics"},"1.5 Overall Testing & Dashboard Metrics"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'"FOSSology Testing Dashboard":',(0,s.kt)("a",{parentName:"li",href:"http://fotest.fc.hp.com:8080"},"http://fotest.fc.hp.com:8080")," (HP only)")),(0,s.kt)("p",null,"To ensure an expected level of quality and to improve that level over time, there are specific metrics that are measured and tracked over time."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"number of tests",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Unit"),(0,s.kt)("li",{parentName:"ul"},"Functional"),(0,s.kt)("li",{parentName:"ul"},"System"),(0,s.kt)("li",{parentName:"ul"},"Stress"))),(0,s.kt)("li",{parentName:"ul"},"Code Coverage",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Lines of Code (LOC) covered"),(0,s.kt)("li",{parentName:"ul"},"Functions covered"),(0,s.kt)("li",{parentName:"ul"},"Branches covered")))),(0,s.kt)("p",null,"!Test_Metrics_Pictures.jpg! !Test_Metrics_Pictures_201306.jpg!\n!Test_Metrics_Numbers_201306.jpg!"),(0,s.kt)("h2",{id:"16-unit-testing"},"1.6 Unit Testing"),(0,s.kt)("h3",{id:"161-unit-testing-dashboard-tests-and-coverage"},"1.6.1 Unit Testing Dashboard (Tests and Coverage)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'"Latest FOSSology Unit Test report":',(0,s.kt)("a",{parentName:"li",href:"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Unit_Test_Results/Unit_Tests_Results.html"},"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Unit_Test_Results/Unit_Tests_Results.html")," (HP only)"),(0,s.kt)("li",{parentName:"ul"},'"Mimetype code coverage":',(0,s.kt)("a",{parentName:"li",href:"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Mimetype_Coverage_Report/"},"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Mimetype_Coverage_Report/")),(0,s.kt)("li",{parentName:"ul"},'"Delagent code coverage":',(0,s.kt)("a",{parentName:"li",href:"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Mimetype_Coverage_Report/"},"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Mimetype_Coverage_Report/")),(0,s.kt)("li",{parentName:"ul"},'"Pkgagent code coverage":',(0,s.kt)("a",{parentName:"li",href:"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Pkgagent_Coverage_Report/"},"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Pkgagent_Coverage_Report/")),(0,s.kt)("li",{parentName:"ul"},'"Ununpack code coverage":',(0,s.kt)("a",{parentName:"li",href:"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Ununpack_Coverage_Report/"},"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Ununpack_Coverage_Report/")),(0,s.kt)("li",{parentName:"ul"},'"Copyright code coverage":',(0,s.kt)("a",{parentName:"li",href:"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Copyright_Coverage_Report/"},"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Copyright_Coverage_Report/")),(0,s.kt)("li",{parentName:"ul"},'"Wgetagent code coverage":',(0,s.kt)("a",{parentName:"li",href:"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Wget_Agent_Coverage_Report/"},"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Wget_Agent_Coverage_Report/")),(0,s.kt)("li",{parentName:"ul"},'"Scheduler code coverage":',(0,s.kt)("a",{parentName:"li",href:"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/scheduler_Coverage_Report/"},"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/scheduler_Coverage_Report/")),(0,s.kt)("li",{parentName:"ul"},'"Common php code coverage":',(0,s.kt)("a",{parentName:"li",href:"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Common_PHP_Lib_Coverage_Report/"},"http://fotest.fc.hp.com:8080/job/Fossology_Unit_Tests/Common_PHP_Lib_Coverage_Report/"))),(0,s.kt)("h3",{id:"162-additional-resources"},"1.6.2 Additional Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"[","[Automation_Testing_Unit_Tests| Unit Tests]","]")),(0,s.kt)("h2",{id:"17-functional-testing"},"1.7 Functional Testing"),(0,s.kt)("h4",{id:"171-functional-testing-dashboard-tests-and-coverage"},"1.7.1 Functional Testing Dashboard (Tests and Coverage)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'"Latest FOSSology Functional Test report":',(0,s.kt)("a",{parentName:"li",href:"http://fotest.fc.hp.com:8080/job/Fossology_Functional_Tests/Agent_Functional_Test_Results/Functional_Tests_Results.html"},"http://fotest.fc.hp.com:8080/job/Fossology_Functional_Tests/Agent_Functional_Test_Results/Functional_Tests_Results.html")," (HP only)")),(0,s.kt)("h3",{id:"172-additional-resources"},"1.7.2 Additional Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"[","[Automation_Testing_Functional_Tests| Functional Tests]","]")),(0,s.kt)("h2",{id:"18-system-testing"},"1.8 System Testing"),(0,s.kt)("h3",{id:"181-system-testing-dashboard"},"1.8.1 System Testing Dashboard"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"[","[FOSSology_system_testing_2.6.2| 2.6.2 release system testing dashboard]","]")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"[","[FOSSology_system_testing_2.6.0| 2.6.0 release system testing dashboard]","]")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"[","[FOSSology_system_testing_2.5.0| 2.5.0 release system testing dashboard]","]")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"[","[FOSSology_system_testing_2.4.0| 2.4.0 release system testing dashboard]","]")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"[","[FOSSology_system_testing_2.3.0| 2.3.0 release system testing dashboard]","]")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"[","[FOSSology_system_testing_2.2.0| 2.2.0 release system testing dashboard]","]")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"[","[FOSSology_system_testing_pre_2.2.0| pre 2.2.0 release system testing dashboard]","]"))),(0,s.kt)("h3",{id:"182-additional-resources"},"1.8.2 Additional Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"[","[Automation_Testing_System_Tests| System Tests]","]")),(0,s.kt)("h1",{id:"2--obsolete---may-be-useful-so-left-around"},"2  Obsolete - may be useful so left around"),(0,s.kt)("p",null,"UI Tests"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"[","[How to Write PHP UI tests]","]  "),(0,s.kt)("li",{parentName:"ul"},"[","[FOSSology Test Suite]","]"),(0,s.kt)("li",{parentName:"ul"},"[","[How to configure and run UI Tests]","]")))}d.isMDXComponent=!0}}]);