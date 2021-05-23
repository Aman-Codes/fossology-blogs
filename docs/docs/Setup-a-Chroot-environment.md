This page serves as guidelines to setup a Chroot environment to install and hack inside Fossology locally, on your own Linux machine.

# Why ?

This how to lets you setup a working local Fossology environment on a Linux machine within minutes:
- It's then easy to hack inside the source code and check the behaviour on your local host
- No dependency to be installed on your host machine
- Your working state can be backed up, and shared
- You can trash, refresh, maintain multiple Fossology setups simultaneously

# Prepare & Run

## Download and extract
1. Setup a Debian based Chroot as pdescribed here: https://wiki.debian.org/chroot

## Install tooling

The guideline below apply to systems running `systemd`:

1. Install `systemd-nspawn` (see: http://0pointer.de/blog/projects/changing-roots)
1. Install package: `sudo apt install coreutils systemd-container`
1. You may want to copy you own SSH keys to `chroot/root/.ssh/` (for ex. to pull from GitLab)

## Running the Chroot

Enter the Chroot: `sudo systemd-nspawn -D <chroot-dir>`

Once inside your Fossology Chroot, note that:
- If you exit the Chroot, the services running inside will be stopped
- You probably wan to use [tmux](https://github.com/tmux/tmux/wiki), to keep a working environment and services up.
- Some directories need to be mounted, I use this script: `fix_var-run.sh`
```bash
mkdir -p /run/
mount -t tmpfs -o rw,noexec,nosuid,size=10%,mode=0755 tmpfs /run
chmod 755 /run
mkdir -p /run/lock
```

## Prepare source code

- you can install required dependencies
- you can `git clone` the source code as usual.
- /!\ To be able to git pull & push from inside the Chroot, you may need to copy you SSH keys in `/root/.ssh` folder

- You can build and re-deploy Fossology:
```shell
(chroot)[root] /opt/fossology : make install
make -C install                                            
make[1]: Entering directory '/opt/fossology/install'    
Regenerating variables list ...
(...)
```
# Run
- You can start the services with `/root/start-stop.sh start` - see below
- Browse to http://localhost/repo/
- Login using default credentials: `fossy` / `fossy`

Content of `start-stop.sh`
```bash
#!/bin/sh


./fix_var-run.sh

start_stop() {
    echo "--- $1  --------------------------------------------------------"
    for service in postgresql apache2 fossology
    do
        echo "=z= $service"
        service $service $1
    done
    echo
}

case x$1 in
    xstart|xstop) start_stop $1 ;;
    *)
        start_stop stop
        start_stop start
        ;;
esac

echo "--------------------------------------------------------------------"

echo
echo "Listening on port 80 ?"
ss -lnp 'sport = 80'
```

# Backup & share the Chroot
Before backing up, sharing, please consider that:
- you may have installed you private SSH key
- you may have configured Git with your credentials

You may consider the 2 following scripts that backup (excluding `.ssh`and `.gitconfig`) and restore chroots:

```bash
#!/bin/sh
#
# Script: chroot-backup.sh
#

out=chroot.cpio.gz
dir=chroot
if [ -s $out ]
then
    echo "File $out exists, aborting"
    exit 1
fi

sudo find $dir \
    -path "$dir/root/.ssh" -prune -o  \
    -path "$dir/root/.gitconfig" -prune -o \
    -print0 | \
     sudo cpio --null --create | gzip > $out
ls -l $out
```

```bash
#!/bin/sh -e
#
# Script: chroot-restore.sh
#

f_fatal() {
    echo "$@"
    exit 1
}

in=chroot.cpio.gz
[ -n "$1" ] && in="$1"
[ -s "$1" ] || f_fatal "Cannot find input file '$in'"

head_dir=$(gunzip -c $in | sudo cpio --list | head -n 1)

# check that first entry is a directory
echo "$head_dir" | grep -q '/' && f_fatal "Head dir: $head_dir => problem"

# Panic if destination directory aready exists
test -d "$head_dir" && f_fatal "Dir $head_dir already exists, aborting"

echo "Exctracting Chroot to '$head_dir'"
gunzip -c $in | sudo cpio --extract 

```


