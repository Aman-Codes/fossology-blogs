## Requirements
1. Make sure you got at least nodejs version 6. The tests will not work otherwise! To check your nodejs version
<pre> node --version </pre>

* if this command doesn't work you propably have to install the nodejs-legacy package from apt-get first
* <pre> sudo apt-get install nodejs-legacy </pre> 
<br />

2. Make sure, you're in the selenium folder 
<pre> cd src/testing/selenium/ </pre>
<br />

## To run the tests inside the docker container

1. Start the tests
<pre>npm start</pre>
<br />

2. This is gonna take a while for the container to build and selenium to download
<br />

## To run the tests locally

1. Download the selenium chrome standalone npm package
<pre>
npm install selenium-standalone@latest -g
selenium-standalone install
selenium-standalone start
</pre>
<br />

2. Start the tests
<pre>
FOSSOLOGY_ENV=`yourfossip` SELENIUM_ENV=`yourseleniumip` FOSSOLOGY_TEST_FOLDER=/home/TestData/ npm test
</pre>
<br />

## To add new tests to the E2E browser tests
1. Copy and rename the test template file empty.spec.js to the test case name you want.
2. Insert the test case file into conf.js as a spec

### More info on how to write tests
<a> https://jasmine.github.io/ </a>
