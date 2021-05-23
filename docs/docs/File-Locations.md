Where FOSSology installs files and where it keeps temp files can be changed during install. To see where they are installed on your fossology installation, 

- Login in as a fossology admin

- On the top menu, click on Help > Debug > Global Variables

The default global variable locations are:

<table>
  <tr>
    <td>Variable</td>
    <td>path</td>
    <td>Removed by fo-cleanold?</td>
  </tr>
  <tr>
    <td>BINDIR</td>
    <td>/usr/bin</td>
    <td></td>
  </tr>
  <tr>
    <td>LIBDIR</td>
    <td>/usr/lib</td>
    <td></td>
  </tr>
  <tr>
    <td>LIBEXECDIR</td>
    <td>/usr/lib/fossology</td>
    <td></td>
  </tr>
  <tr>
    <td>INCLUDEDIR</td>
    <td>/usr/include</td>
    <td></td>
  </tr>
  <tr>
    <td>MAN1DIR</td>
    <td>/usr/share/man/man1</td>
    <td></td>
  </tr>
  <tr>
    <td>AGENTDIR</td>
    <td>/usr/lib/fossology/agents</td>
    <td></td>
  </tr>
  <tr>
    <td>SYSCONFDIR</td>
    <td>/etc</td>
    <td></td>
  </tr>
  <tr>
    <td>PROJECTSTATEDIR</td>
    <td>/var/lib/fossology</td>
    <td></td>
  </tr>
  <tr>
    <td>PROJECT</td>
    <td>fossology</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>DATADIR</td>
    <td>/usr/share/fossology</td>
    <td></td>
  </tr>
  <tr>
    <td>VERSION</td>
    <td>//a.b.c//</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>SVN_REV</td>
    <td>exported</td>
    <td>n/a</td>
  </tr>
</table>


If you want to see **all** the files on your system, go to the **top of the fossology source tree** and run 

```
utils/mkfilelists
```

The output is in /tmp/new-distro. Note, this will do multiple makes on the fossology source, ending with a make clean.

These file locations are based on the LSB see [LSB Location Table](http://lackof.org/taggart/hacking/FOSS-build/#table) put together by Matt Taggart.

# **/etc/fossology**

FOSSology configuration files:

<table>
  <tr>
    <td>File</td>
    <td>Purpose</td>
  </tr>
  <tr>
    <td>conf</td>
    <td>Directory of Apache configuration files</td>
  </tr>
  <tr>
    <td>Db.conf</td>
    <td>Database connection parameters</td>
  </tr>
  <tr>
    <td>fossology.conf</td>
    <td>FOSSology configuration file</td>
  </tr>
  <tr>
    <td>mods-enabled</td>
    <td>Directory of symlinks to fossology modules</td>
  </tr>
  <tr>
    <td>samplefooter.txt</td>
    <td>Sample file for scheduler email footer</td>
  </tr>
  <tr>
    <td>sampleheader.txt</td>
    <td>Sample file for scheduler email header</td>
  </tr>
  <tr>
    <td>VERSION</td>
    <td>Version, subversion rev, and build date for the installed release</td>
  </tr>
</table>


# **/usr/local/etc/fossology**

Same as /etc/fossology, but this is the default location of tarball installs.

# **/var/log**

<table>
  <tr>
    <td>File</td>
    <td>Purpose</td>
  </tr>
  <tr>
    <td>fossology.log</td>
    <td>log file, uses autorotate</td>
  </tr>
</table>


# **Other directories**

<table>
  <tr>
    <td>Directory</td>
    <td>Contents</td>
  </tr>
  <tr>
    <td>/usr/lib/fossology</td>
    <td>Command line programs, install utilities</td>
  </tr>
  <tr>
    <td>/usr/local/lib/fossology</td>
    <td>Same as /usr/lib/fossology, but for source installs</td>
  </tr>
  <tr>
    <td>/usr/share/fossology</td>
    <td>Module directory (see /etc/fossology/mods-enabled/)</td>
  </tr>
  <tr>
    <td>/usr/local/share/fossology</td>
    <td>Same as /usr/share/fossology, but for source installs</td>
  </tr>
  <tr>
    <td>/var/lib/fossology</td>
    <td>System specific data, e.g. bucketpools</td>
  </tr>
  <tr>
    <td>/var/local/lib/fossology</td>
    <td>Same as /var/lib/fossology, but for source installs</td>
  </tr>
  <tr>
    <td>/usr/bin</td>
    <td>command line executables</td>
  </tr>
  <tr>
    <td>/usr/local/bin</td>
    <td>Same as /usr/bin, but for source installs</td>
  </tr>
</table>
