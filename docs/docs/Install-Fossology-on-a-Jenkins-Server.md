This is some overview how to setup Jenkins with the fossology to have daily builds, daily testing, and building packages to install.

After, the Jenkins could be configured to check for updates in the repo / github.

## Install Jenkins

* Jenkins it self can be installed by adding the Jenkins debian package server to the list of packages (see homepage)
* for use within a company Intranet: proxy can be set with Acquire directive in apt-get
 * example. has worked well in /etc/apt/apt.conf: 
```
Acquire::http::proxy "http://proxyfarm.some.domain.net:84";
Acquire::https::proxy "http://proxyfarm.some.domain.net:84";
```
* it is necessary to configure Jenkins with proxy because the plugins need to be downloaded
* Jenkins - mind that the proxy host is entered in Jenkins settings is without protocol prefix

## Checkout

* for checkout use the github plugin
* Tipp: if deployment key authentication was not successful, try personal credentials to get it working and then go ahead with deployment key later
* mind the right branch, the setting field in Jenkins / github plugin is somewhat hidden

## Building fossology

* install postgresql-dev and other things by fossologyng/utis/fo-installdeps (must be executed with sudo)
* do not go away from the computer after the first two "yes", because there will be several confirmations asked for

## Running the php tests

* run `fo-postinstall` (to create the database ...)
 * you will need to `sudo make install` to prepare `fo-postinstall`

* install composer
 * see composer website
 * ie. with `curl -sS https://getcomposer.org/installer | php`

* install sqllite
 * using `sudo apt-get install php5-sqlite`
 
* then you will need to make php vendors manually once to check for further dependencies to install

```
siemagrant@vagrant-ubuntu-trusty-64:/var/lib/jenkins/jobs/FossologyNG.20.build/workspace/fossologyng$ sudo su jenkins
jenkins@vagrant-ubuntu-trusty-64:~/jobs/FossologyNG.20.build/workspace/fossologyng$ make phpvendors
````

*  successful output of this looks like this: 

```
jenkins@vagrant-ubuntu-trusty-64:~/jobs/FossologyNG.20.build/workspace/fossologyng$ make phpvendors
make -C ./src phpvendors
make[1]: Entering directory `/var/lib/jenkins/jobs/FossologyNG.20.build/workspace/fossologyng/src'
composer install -q
make[1]: Leaving directory `/var/lib/jenkins/jobs/FossologyNG.20.build/workspace/fossologyng/src'
```

* running the tests will fail at some occasions likely
 * most likely it is an execution rights problem

* adding user jenkins to group fossy for solving execution context 
 * `sudo usermod -G fossy jenkins`
 * add the setting in the jenkins config file (there is a setting to set the user and group at job execution)
 * should be user jenkins, group fossy
 
* installing & building ninka
 * ninka must be installed manually, since there is no package available for download from https://github.com/dmgerman/ninka and build it with
```
# first install `DBD::SQLite` and `Spreadsheet::WriteExcel` via `cpan`
$ sudo cpan DBD::SQLite; sudo cpan Spreadsheet::WriteExcel
$ perl Makefile.pl 
$ make
# after that, one has to make shure that `ninka` is somewhere in PATH, for example with
$ sudo cp -r lib/Ninka /etc/perl
$ sudo cp lib/Ninka.pm /etc/perl
$ sudo cp bin/ninka /usr/bin
```

* adding jenkins user to sudo
 * `sudo adduser jenkins sudo`

* preinstalling spdx-tools (because proxy will prevent this from fetching during test execution)
 * download spdx tools manually and put it into some folder where the test is expecting it
 * you can look at the test source code where this is / what exactly happens
* it will about the file https://github.com/spdx/tools/releases/download/V2.0.2/spdx-tools-2.0.2-jar-with-dependencies.jar
 * taken from https://github.com/fossology/fossology/commit/0f50a02bff9fe6968defc97af1d09deadb7989c9
 * `cp /var/lib/jenkins/userContent/spdx-tools-2.0.2-jar-with-dependencies.jar ./src/spdx2/agent_tests/Functional/`

## Running the c-based tests

* check the travisfile for a selection of working tests
 * for example at: https://github.com/siemens/fossologyng/blob/ng-master/.travis.yml

* install cppunit
 * `sudo apt-get install libcppunit-dev`

## Code style check for php

* check travis file on the server github
 * https://github.com/siemens/fossologyng/blob/ng-master/.travis.yml
 * copy line like `src/vendor/bin/phpcs --standard=src/fossy-ruleset.xml src/lib/php/*/`

## Doing the package installation

* edit sudoers file to add jenkins in the group of no-password enterers
 * normally if a user is in sudo, he may need to enter the password still to become sudo
 * that will not work in jenkins runs

* install the dependencies
 * dpkg-checkbuilddeps: will bring unmet build dependencies: debhelper postgresql-server-dev-all
 * if there are missing dependecies then
 * `sudo apt-get install -f`


## Trouble Shooting

The composer is generally an element that requires special care when it comes to running the build integration. Assume that you are going to run the PHP tests in a Jenkins target, failing composer could look like the following:

```
...
+ make phpvendors
make -C ./src phpvendors
make[1]: Entering directory `/var/lib/jenkins/jobs/FossologyNG.30.test.php/workspace/fossologyng/src'
composer install -q
make[1]: *** [phpvendors] Error 2
...
```

The you try to check if composer works with logging into the shell of the integration server and:

```
$ sudo composer update
```
Then the following error could show up:

```
Loading composer repositories with package information
Updating dependencies (including require-dev)
Your requirements could not be resolved to an installable set of packages.

  Problem 1
    - guzzle/guzzle v3.9.3 requires ext-curl * -> the requested PHP extension curl is missing from your system.
...
```

Possible solution:

```
$ sudo apt-get install php5-curl
...
$ sudo composer update
```

