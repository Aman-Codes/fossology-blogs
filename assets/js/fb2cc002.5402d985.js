(self.webpackChunkfossology_blogs=self.webpackChunkfossology_blogs||[]).push([[3335],{3905:function(e,o,t){"use strict";t.d(o,{Zo:function(){return c},kt:function(){return h}});var n=t(7294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},c=function(e){var o=u(e.components);return n.createElement(l.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},d=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return t?n.createElement(m,s(s({ref:o},c),{},{components:t})):n.createElement(m,s({ref:o},c))}));function h(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5286:function(e,o,t){"use strict";t.r(o),t.d(o,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var n=t(2122),a=t(9756),r=(t(7294),t(3905)),s={},i={unversionedId:"docs/Configuration-and-Tuning",id:"docs/Configuration-and-Tuning",isDocsHomePage:!1,title:"Configuration-and-Tuning",description:"System Configuration and Tuning",source:"@site/docs/docs/Configuration-and-Tuning.md",sourceDirName:"docs",slug:"/docs/Configuration-and-Tuning",permalink:"/fossology-blogs/docs/docs/Configuration-and-Tuning",editUrl:"https://github.com/Aman-Codes/fossology-blogs/edit/master/docs/docs/Configuration-and-Tuning.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composer",permalink:"/fossology-blogs/docs/docs/Composer"},next:{title:"Copyright",permalink:"/fossology-blogs/docs/docs/Copyright"}},l=[{value:"System Configuration and Tuning",id:"system-configuration-and-tuning",children:[]},{value:"Disk Space",id:"disk-space",children:[]}],u={toc:l};function c(e){var o=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"system-configuration-and-tuning"},"System Configuration and Tuning"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT NOTICE")," if you see version numbers of Postgresql in the text or examples, it is just for the purpose of demonstration. It does not mean that you must install postgresql 8.4, for example. Postgresql version of current Debian and Ubuntu distros should do fine."),(0,r.kt)("p",null,"This document is designed to help you get FOSSology installed and ready\nto use. Its intended audience is the system administrator who wants to\nquickly get a local FOSSology instance up and running, or a distribution\ndeveloper looking to create packages."),(0,r.kt)("p",null,"For other system administrator documentation, see:\n",(0,r.kt)("a",{parentName:"p",href:"http://www.fossology.org/projects/fossology/wiki/Sysadmin_Documentation"},"http://www.fossology.org/projects/fossology/wiki/Sysadmin_Documentation")),(0,r.kt)("h3",{id:"disk-space"},"Disk Space"),(0,r.kt)("p",null,"FOSSology stores uploaded data in a filesystem repository.  As you\nupload and analyze packages via FOSSology, the repository can grow very\nlarge.  The default location for a single system repository is\n/srv/fossology/repository/ however this can be adjusted by the system\nadministrator to another location if desired."),(0,r.kt)("p",null,"It is recommended that the area you choose to keep the repository in,\nbe a separate mount point with at least 10x the size of the unpacked\ndata you intend to scan.  For a small system intended to just scan a\nfew small personal projects this might mean gigabytes, but for systems\nintended for scanning large collections of software including Linux\ndistributions, this probably means hundreds of gigabytes to terabytes.\nIf you are using multiple hosts to store the repository, it is best to\nspread the repository data evenly across the hosts.  See the User Guide\nfor more information about using multiple hosts."),(0,r.kt)("h4",{id:"optional-email-notifications"},"Optional Email Notifications"),(0,r.kt)("p",null,"Fossology can send email to users when their jobs finish.  To enable this\nfeature sendmail and a mail transport agent (MTA) must be installed.  The script\nfo-installdeps does NOT install a MTA as there is no easy way for fossology to\ndetermine which MTA your site uses.  All mail transport agents (MTA), such as\npostfix, exim, sendmail, etc., provide a 'sendmail' command, and you probably\nalready have it on your system, but you may need to configure the MTA to be\nable to send the mail where you want it to go."),(0,r.kt)("h4",{id:"adjusting-the-kernel"},"Adjusting the Kernel"),(0,r.kt)("p",null,"On modern large memory systems (4 GB or larger), the linux kernel needs to be\nadjusted to give PostgreSQL more shared memory.  This is an optimization step\nfor postgresql."),(0,r.kt)("p",null,"You can find more information about this optimization in the postgres docs.\nFor example,\n",(0,r.kt)("a",{parentName:"p",href:"http://www.postgresql.org/docs/9.0/static/kernel-resources.html"},"http://www.postgresql.org/docs/9.0/static/kernel-resources.html")),(0,r.kt)("p",null,"If your system has the getconf utility, you can compute shmmax and shmall with\nthe following script (let's call it shm.sh):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!/bin/bash\npage_size=`getconf PAGE_SIZE`\nphys_pages=`getconf _PHYS_PAGES`\nshmall=`expr $phys_pages / 2`\nshmmax=`expr $shmall \\* $page_size`\necho kernel.shmmax=$shmmax\necho kernel.shmall=$shmall\n")),(0,r.kt)("p",null,"Run shm.sh as root.\nSet shmmax and shmall to take effect now (USE THE VALUES FROM shm.sh, NOT THE\nSAMPLE VALUES BELOW):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# sysctl -w kernel.shmmax=17179869184\n# sysctl -w kernel.shmall=4194304\n")),(0,r.kt)("p",null,"Then make the changes persistant (on boot):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# ./shm.sh >> /etc/sysctl.conf\n")),(0,r.kt)("h4",{id:"preparing-postgresql"},"Preparing Postgresql"),(0,r.kt)("p",null,"Your postgresql install should be configured and running. If you need\nhelp doing that, consult the PostgreSQL user documentation at\n",(0,r.kt)("a",{parentName:"p",href:"http://www.postgresql.org/docs/manuals/"},"http://www.postgresql.org/docs/manuals/"),'.  If you are using SSL in\nparticular, see the section "Secure TCP/IP Connections with SSL" to set it up.'),(0,r.kt)("p",null,"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/postgresql/<version>/main/postgresql.conf"),":\nThe tuning and preferences in the config file will vary depending on your\ninstallation. We don't provide an automated way to do this because it\nis complicated and specific to your particular install goals. A good\ndiscussion of configuration settings can be found at\n",(0,r.kt)("a",{parentName:"p",href:"http://wiki.postgresql.org/wiki/Tuning_Your_PostgreSQL_Server"},"http://wiki.postgresql.org/wiki/Tuning_Your_PostgreSQL_Server"),". Here are a\nfew of the more common settings you should consider changing. The integer\nvalues below are based on hypothetical system with ",(0,r.kt)("em",{parentName:"p"},"4GB")," of RAM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," listen_addresses = '*'              # listen to connections from all IPs\n max_connections = 50                # maximum number of client connections\n                                     # allowed\n shared_buffers = 1GB                # If you have a system with 1GB or more\n                                     # of RAM, a reasonable starting value \n                                     # for shared_buffers is 1/4 of the memory \n                                     # in your system.\n effective_cache_size = 2GB          # how much memory is available for disk \n                                     # caching; 1/2-3/4 of memory\n work_mem = 128MB                    # work_mem parameter allows PostgreSQL \n                                     # to do larger in-memory sorts\n maintenance_work_mem = 200MB        # roughly 50MB/GB of ram\n fsync = on                          # turns forced synchronization on or off\n full_page_writes = off              # recover from partial page writes\n log_line_prefix = '%t %h %c'        # prepend a time stamp to all log entries\n standard_conforming_strings = on\n autovacuum = on                     # Enable autovacuum subprocess?  'on'\n")),(0,r.kt)("h4",{id:"database-authentication"},"Database authentication"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure /etc/postgresql/8.4/main/pg_hba.conf is configured\ncorrectly to allow your connection.  This file controls: which hosts\nare allowed to connect, how clients are authenticated, which\nPostgreSQL user names they can use, which databases they can access.\nAs a starting point, you will need something like the following for\nlocal connections:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    # local      DATABASE  USER  METHOD  [OPTION]\n      local       all      all   md5\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"http://www.postgresql.org/docs/current/static/client-authentication.html"},"http://www.postgresql.org/docs/current/static/client-authentication.html"),"\nfor detailed information.\nIf you do need to edit it then restart postgresql so the changes take\neffect:\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/init.d/postgresql-<version> restart")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Once the database is defined, verify connection with\n",(0,r.kt)("inlineCode",{parentName:"li"},"psql -d fossology -U fossy"),'\nuse the default password "fossy".  You should connect and see the following:')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"        Welcome to psql 8.4.11, the PostgreSQL interactive terminal.\n\n        Type:  \\copyright for distribution terms\n               \\h for help with SQL commands\n               \\? for help with psql commands\n               \\g or terminate with semicolon to execute query\n               \\q to quit\n\n        fossology=>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  If so then you successfully connected. Type \\q to quit.\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If any steps fail, check the postgres log file for errors:\n/var/log/postgresql/postgresql-8.4-main.log")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Change the default fossy password from "fossy" to something more secure.\n',(0,r.kt)("inlineCode",{parentName:"p"},"alter role 'fossy' with password 'newpassword'"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change Db.conf (in /usr/local/etc/fossology, or /etc/fossology) for the new password."))),(0,r.kt)("h4",{id:"configuring-php"},"Configuring PHP"),(0,r.kt)("p",null,"If you're using the default PHP config, you can run this script to automatically adjust your php.ini to optimal settings for FOSSology."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo fossology/install/scripts/php-conf-fix.sh --overwrite\n")),(0,r.kt)("p",null,"If you changed your particular php.ini file you may need to adjust these values manually.\nEdit your php.ini file for apache (location dependent on your install, but\nprobably something like /etc/php5/apache2/php.ini) and make adjustments\nthat will work for your system and usage. Here are some things to\nconsider:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"max_execution_time = 300"),'\nThis controls how long, in seconds, a php process is allowed to run.  For "one shot" license analysis, particularly large jobs, or if your system is slow you may need to increase this.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"memory_limit = 702M\npost_max_size = 701M\nupload_max_filesize = 700M\n")),(0,r.kt)("p",null,'These control the size of file you will be able to upload via the UI, "Upload from File".  For very large uploads (for example DVD images) we recommend using the command line upload method or "Upload from URL", but you might want to increase these to handle up to larger sized uploads.  For example,'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"post_max_size=2048M\nupload_max_filesize=2048M\n")),(0,r.kt)("h4",{id:"configuring-apache"},"Configuring Apache"),(0,r.kt)("p",null,"You need to add something like the following to the apache config, and this will depend on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'How you have apache configured. You might be creating a new site config using apache\'s "sites-available"/a2ensite(8) mechanism or editing an existing config you have setup. For example, on a Debian apache2 install you would have site config files in /etc/apache2/sites-available/ and you might be editing the default one or creating a new one.'),(0,r.kt)("li",{parentName:"ul"},'The path you want the FOSSology UI to appear on the server; this example uses "/repo/"'),(0,r.kt)("li",{parentName:"ul"},"Where your FOSSology is installed; this example assumes the source install path ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/share/fossology/www/ui"),"\nThe default package install path would be ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/share/fossology/www/ui")),(0,r.kt)("li",{parentName:"ul"},"What other things you might be using apache for on the system.  For these reasons we can't provide an automated way of doing this. Put the configuration content in ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/apache2/sites-available/fossology.conf"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'##### FOSSology example apache config\n\nAlias "/repo" "/usr/local/share/fossology/www/ui"\n<Directory "/usr/local/share/fossology/www/ui">\n    AllowOverride None\n    Options FollowSymLinks\n    <IfVersion < 2.3>\n        order allow,deny\n        allow from all\n        Satisfy Any\n    </IfVersion>\n    <IfVersion >= 2.3>\n        Require all granted\n    </IfVersion>\n    # uncomment to turn on php error reporting\n    #php_flag display_errors on\n    #php_value error_reporting 2039\n</Directory>\n')),(0,r.kt)("p",null,"Enable the configuration using ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo a2ensite fossology"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": included in the above example are some commented lines used for\nenabling php error reporting. If you are having problems you might\nchoose to enable these to help determine the problem. Normally you\nprobably want them turned off so they don't report confusing error\nmessages to your end users or reveal information about your system\nconfiguration to potential attackers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": in Fedora 18, in order to get the permission to visit, you have to add the entry\n'Require all granted' into Directory section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n##### FOSSology example apache config for Fedora 18\n\nAlias /repo /usr/local/share/fossology/www/ui\n\n<Directory "/usr/local/share/fossology/www/ui">\n        AllowOverride None\n        Options FollowSymLinks MultiViews\n        Require all granted\n        # uncomment to turn on php error reporting\n        #php_flag display_errors on\n        #php_value error_reporting 2039\n</Directory>\n')),(0,r.kt)("p",null,"Because this software dynamically generates web pages based on the database, you may want to tell web robots not to index pages.  You can do this with a robots.txt file in your DocumentRoot.  Here is a sample that tells all agents to ignore your /repo urls:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    User-agent: *\n    Disallow: /repo\n")),(0,r.kt)("p",null,"Once you have installed the configuration you can test it by running\n(as root):\n",(0,r.kt)("inlineCode",{parentName:"p"},"apache2ctl configtest"),"\nand if it tests ok, then you can restart the server with the new config\nby running (as root):\n",(0,r.kt)("inlineCode",{parentName:"p"},"apache2ctl graceful")),(0,r.kt)("h4",{id:"checking-the-default-configuration-files"},"Checking the Default Configuration Files"),(0,r.kt)("p",null,"On a fresh install you start with default versions of configuration\nfiles that contain reasonable defaults (where possible). You need to review and edit\nwhere needed."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"/usr/local/etc/fossology/fossology.conf (or /etc/fossology/fossology.conf)",(0,r.kt)("br",{parentName:"li"}),"This file contains FOSSology configuration information and contains enough comments to make it self describing. Previous to version 2.0, there were four separate config files (Depth.conf, RepPath.conf, Proxy.conf, Hosts.conf).\nFor a single server install, you will probably only need to look at the http_proxy and the section under EMAILNOTIFY.  For a detailed description of the new scheduler and config file, please see the ",(0,r.kt)("a",{parentName:"li",href:"http://www.fossology.org/projects/fossology/wiki/Scheduler_20"},"Scheduler Docs")),(0,r.kt)("li",{parentName:"ol"},"Individual module (agent) configuration files:\nWith the introduction of FOSSology 2.0 and the new scheduler, each agent will come with its own configuration file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/usr/local/etc/fossology/mods-enabled/adj2nest/adj2nest.conf\n/usr/local/etc/fossology/mods-enabled/buckets/buckets.conf\n/usr/local/etc/fossology/mods-enabled/copyright/copyright.conf\n/usr/local/etc/fossology/mods-enabled/delagent/delagent.conf\n/usr/local/etc/fossology/mods-enabled/mimetype/mimetype.conf\n/usr/local/etc/fossology/mods-enabled/nomos/nomos.conf\n/usr/local/etc/fossology/mods-enabled/pkgagent/pkgagent.conf\n/usr/local/etc/fossology/mods-enabled/ununpack/ununpack.conf\n/usr/local/etc/fossology/mods-enabled/wget_agent/wget_agent.conf\n")),(0,r.kt)("p",null,"Each configuration file provides the following information to the scheduler:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"command: the command line that will be used when starting the agent"),(0,r.kt)("li",{parentName:"ul"},"max: the maximum number of instances of this agent running concurrently, -1 for no max."),(0,r.kt)("li",{parentName:"ul"},"special: list of anything special about the agent.")),(0,r.kt)("p",null,'See the "Agent.conf\'s" section in the ',(0,r.kt)("a",{parentName:"p",href:"http://www.fossology.org/projects/fossology/wiki/Scheduler_20"},"Scheduler Docs"),"."))}c.isMDXComponent=!0}}]);