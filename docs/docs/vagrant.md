You can provision a vm with a full FOSSology install by running the following commands on your Debian machine:

 ```sh
apt-get install virtualbox vagrant
git clone git@github.com:fossology/fossology.git
cd fossology
vagrant up
```

and browse [http://localhost:8081/repo/](http://localhost:8081/repo/)

you can ``export PROXY=true`` if you like to use the cntlm proxy of your host listening on port 3128


look at the [Vagrantfile](https://github.com/fossology/fossology/blob/master/Vagrantfile) for further details