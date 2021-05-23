### Install and configure xdebug on server

```
sudo apt-get install php5-xdebug
```
for configuration, the file

```
sudo vim /etc/php5/apache2/conf.d/20-xdebug.ini
```
open and enter the following contents

```
zend_extension=xdebug.so
xdebug.idekey='fossydebug'
xdebug.remote_autostart=0
xdebug.remote_enable=1
xdebug.remote_host=10.0.2.2
xdebug.remote_port=9000
```

Just to be on the safe side, just restart the apache server so you are sure that the config is read

```
sudo service apache2 restart
```
From now on the apache server will send requests with activated Debug-Cookie or referrign information to the  10.0.2.2:9000. The IP 10.0.2.2 is the IP of the host system on which the IDE actually runs.

### Setting XDebug-Cookie

For this some extensions for multiple browsers are available. For Firefox for example "The easiest XDebug 2.0".

### Configure the IDE 

IDE should listen on port 9000 to incoming Debug-Connection-Requests.
