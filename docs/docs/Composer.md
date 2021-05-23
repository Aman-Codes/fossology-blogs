# Composer

Composer is a tool for dependency management in PHP. It allows you to declare the dependent libraries your project needs and it will install them in your project for you.

Please have a look at the [[Composer Documentation|https://getcomposer.org/doc/]]
This nice article on [[What is PHP Composer |http://culttt.com/2013/01/07/what-is-php-composer]] will give you a quick overview.

## How does it work?

Composer allows to *select dependencies* for runtime and development in the file composer.json. In addition it enables easy integration of autoloading.

The file composer.lock is used to *store the current version* state.

## Usage

Use
<pre>
composer install
</pre>
to **install** dependencies according to the content of composer.lock.

Use

<pre>
composer update
</pre>
to **update to the latest packages** according to composer.json and update composer lock accordingly.

The dependencies added by composer will be located in src/vendor.

## Use of composer behind a proxy server

Composer uses the default proxy environment variables HTTP_PROXY etc.

In some cases an additional
<pre>
export HTTPS_PROXY_REQUEST_FULLURI=false
</pre>
may help.

## Composer on a machine without internet access

You will need a computer with internet access and PHP installed.

Let's assume that the computer with internet access is called `compON`and that without internet access is called `compOFF`.

### Preparation on compON

Get the source code of FOSSology that you want to install on `compOFF` (let's call this directory `fossytree`). It is important that it's exactly the same source code, so that `composer.json` and `composer.lock` are the same.

Create a directory to gather all files that will be transferred later to `compOFF` (let's call this directory `phpvendors`).

#### Getting Composer

If the command `which composer` *returns* a path (Composer is already installed), then copy the file of the path to "phpvendors" as `composer.phar`:
<pre>
cp `which composer` phpvendors/composer.phar
</pre>

If the command `which composer` *doesn't* return a path, download Composer manually:
<pre>
cd phpvendors ; curl -sS https://getcomposer.org/installer | php
</pre>

Both ways you should get Composer in the file `phpvendors/composer.phar`.

#### Getting FOSSology PHP dependencies

Get into the directory `fossytree` and execute the required make target:
<pre>
make phpvendors
</pre>

This way composer will install the PHP dependencies of FOSSology into `fossytree/src/vendor`. Move this directory to `phpvendors`:
<pre>
cp -R fossytree/src/vendor phpvendors/
</pre>

You should have at this point the directory `phpvendors` with following content:
<pre>
/ phpvendors
|- composer.phar
|- /vendor
   |- autoload.php
   |- /bin
   |- /composer
   ...
</pre>

### Preparation on compOFF

Get the files prepared on `compON`:
<pre>
scp -R compON:phpvendors compOFF:phpvendors
</pre>

#### Installing Composer

Copy Composer as root to a directory available through the environment variable PATH (for example, /usr/local/bin):
<pre>
cp phpvendors/composer.phar /usr/local/bin/composer
</pre>

#### Getting FOSSology PHP dependencies

This step is required during the installation of FOSSology from source code before running `make install`.

Ensure that the directory `/usr/local/share/fossology` exists.

Copy as root the directory `phpvendors/vendor` to `/usr/local/share/fossology`:
<pre>
cp -R phpvendors/vendor /usr/local/share/fossology/
</pre>

Then you can go on with the installation procedure.