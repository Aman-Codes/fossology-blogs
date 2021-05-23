FOSSology uses [Project Builder](http://www.project-builder.org) to build packages for different Linux distributions.

As of Jan 2017, the packages build process is almost (=not) finished. This page documents status and currently available facilities.

### Development and Testing with Vagrant

In the file `pbconf/Vagrantfile` a setup is provided for building packages for development and debugging purposes w.r.t. to building packages (not FOSSology itself). Just execute

> vagrant up

and see what happens. Required is a working Internet connection that also allows for FTP access. The package will be built inside the virtual machine in the pbbuild folder.

### Scripts for the Jenkins Server

The packages for releasing FOSSology are build on a Jenkins server. For this server two main scripts are provided:

> pbconf/ci-scripts/fo-installdeps-pb.sh

> pbconf/ci-scripts/fo-dockerbuild-pb.sh

The script `fo-installdeps-pb.sh` installs the dependencies on the machine. It is mainly docker and project builder for running containers with project builder in it on different Linux distros.

The script `fo-dockerbuild-pb.sh` runs the docker infrastructure to run different Linux distros. Inside the container, project builder builds the packages.

### Individual Packages Build Notepad

_(Note, Google Drive file downloads are previewing in browser, for download klick the download icon in the upper right)_

| Distro        | Link          | Issue  |
| ------------- |:-------------:| :-----|
| centos7       | [centos7-x86_64](https://drive.google.com/open?id=0B-KX3xvGmNDONzl4LXB5LTRnUzg) | <ul><li>requires fix at https://github.com/fossology/fossology/pull/749 </li><li>need to disable SElinux with `setenforce 0` at installation (was also there with 2.*)</li><li>SHA256: `e2fe478ab5ff1a1783d2fe706e86b67d07d080c33d94f28c7ea40d7b731a682f `</li> </ul> |
| ubuntu 14.04  | [trusty64](https://drive.google.com/file/d/0B-KX3xvGmNDOUnZOTmppQVJWZDg/view?usp=sharing)          | <ul><li>no known issues. archive name is confusing, should be ubuntu, not debian.</li><li>SHA256: `d42e32de49431360710d515ba8eaaa3aca35dbec6a388f8a5e7062dea4418848`</li></ul> |
| Debian 8 Jessie 64-bit  | [jessie8](https://drive.google.com/open?id=0B-KX3xvGmNDOcTdaRWJDMHFNQ2s)          | <ul><li>no known issues.</li><li>SHA256: `c85ce61a42d17ab605e8aac2da75f98c2ece0155352620f896ba9da86889b422`</li></ul> |
| fedora 25     | [[]]          | <ul><li>seems to run, restesting necessary</li></ul> |