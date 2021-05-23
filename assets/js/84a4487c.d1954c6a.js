(self.webpackChunkfossology_blogs=self.webpackChunkfossology_blogs||[]).push([[4967],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return u},kt:function(){return d}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(o),d=r,b=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return o?n.createElement(b,l(l({ref:t},u),{},{components:o})):n.createElement(b,l({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7936:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var n=o(2122),r=o(9756),a=(o(7294),o(3905)),l={},i={unversionedId:"docs/Building-Fossology-using-pbuilder",id:"docs/Building-Fossology-using-pbuilder",isDocsHomePage:!1,title:"Building Fossology using [[project builder| http://www.project-builder.org/]]",description:"These are instructions for building a release package.",source:"@site/docs/docs/Building-Fossology-using-pbuilder.md",sourceDirName:"docs",slug:"/docs/Building-Fossology-using-pbuilder",permalink:"/fossology-blogs/docs/docs/Building-Fossology-using-pbuilder",editUrl:"https://github.com/Aman-Codes/fossology-blogs/edit/master/docs/docs/Building-Fossology-using-pbuilder.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Buckets",permalink:"/fossology-blogs/docs/docs/Buckets"},next:{title:"Coding-Style",permalink:"/fossology-blogs/docs/docs/Coding-Style"}},p=[{value:"Instructions for automated Building packages",id:"instructions-for-automated-building-packages",children:[]},{value:"Configure Build Server",id:"configure-build-server",children:[]},{value:"Instructions for Building packages (runbuild_v2.0.php script automated this process)",id:"instructions-for-building-packages-runbuild_v20php-script-automated-this-process",children:[]},{value:"Create packages in RMs use project-builder",id:"create-packages-in-rms-use-project-builder",children:[]}],s={toc:p};function u(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These are instructions for building a release package."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("em",{parentName:"em"},"Need to run with 'build' user on fobuild.fc.hp.com:~/"))," "),(0,a.kt)("h2",{id:"instructions-for-automated-building-packages"},"Instructions for automated Building packages"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Building Test packages")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run [","[runBuild_v2.0.php|https://github.com/fossology/fossology/blob/master/utils/runBuild_v2.0.php]","] \u2013V $version -t"),(0,a.kt)("li",{parentName:"ul"},"All test packages generated under ",(0,a.kt)("a",{parentName:"li",href:"http://fobuild.fc.hp.com/fossology/$version/testing/$date/"},"http://fobuild.fc.hp.com/fossology/$version/testing/$date/"))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Building Release packages")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the script under ",(0,a.kt)("a",{parentName:"p",href:"mailto:build@fobuild.fc.hp.com"},"build@fobuild.fc.hp.com"),":~/[","[runBuild_v2.0.php|https://github.com/fossology/fossology/blob/master/utils/runBuild_v2.0.php]","]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Commit all new $version conf files, using 2.0.0 as an example"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"cd to /home/build/pb/fossology/pbconf",(0,a.kt)("br",{parentName:"p"}),"\n","check out new code",(0,a.kt)("br",{parentName:"p"}),"\n","edit the following in the ...pbconf/tags/2.0.0/fossology.pb file:",(0,a.kt)("br",{parentName:"p"}),"\n","Change 'pburl fossology =' with new git url",(0,a.kt)("br",{parentName:"p"}),"\n","Change projver fossology = trunk to projver fossology = 2.0.0",(0,a.kt)("br",{parentName:"p"}),"\n","Change testver fossology = true to false.",(0,a.kt)("br",{parentName:"p"}),"\n","Change fossology/deb/changelog",(0,a.kt)("br",{parentName:"p"}),"\n","Check in  "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run runBuild_v2.0.php \u2013V $version")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All packages generated under ",(0,a.kt)("a",{parentName:"p",href:"http://fobuild.fc.hp.com/fossology/$version"},"http://fobuild.fc.hp.com/fossology/$version")))),(0,a.kt)("p",null,"from the irc log:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\\<rando> hmmm, when I just try the number it says it can't be completed.... weird...  \n\\<vincent> 1. you should not change anything under /home/build/pb/project/   \n\\<rando> right, I figured that out.... :-)  \n\\<vincent> 2. go to /home/build/pb/fossology/pbconf/  \n\\<rando> K, I am there....  \n\\<vincent> 3. use the trunk/ directory to create release tag directlry under tags/  \n\\<vincent> for example, svn copy trunk/  tags/2.0.0-rc1/  \n\\<rando> 3 is confusing... ah ok, now I get it.... very important to mention svn copy rather than copy (cp)  \n\\<vincent> yes, for now under tags/ will have 2.0.0-rc1 directory  \n\\<rando> I have just removed that... let me copy again....  \n\\<rando> ok, so tag is now created....  \n\\<vincent> Change fossology.pb with new svn url  \n\\<vincent>  Change projver = 2.0.0-rc1   \n\\<vincent> Change testver fossology = false   \n\\<vincent>    Change fossology/deb/changelog   \n\\<rando> yes, but where do I change those?  In tags/2.0.0-rc1?   \n\\<vincent> yes  \n\\<rando> ah, ok....   \n\\<vincent> when finished the changes, checked it tags/2.0.0-rc1/    \n\\<vincent> checked in   \n\\<rando> ok, modifed and checked in.   \n\\<vincent> seems checked in wrong file   \n\\<rando> huh? it was under tags?    \n\\<vincent> need to change tags/2.0.0-rc1 and checked in tags/2.0.0-rc1   \n\\<rando> I changed: /home/build/pb/fossology/pbconf/tags/2.0.0-rc1/fossology.pb, wasn't that the right file?   \n\\<vincent> yes, but i saw your check in is trunk/fossology.pb   \n\\<rando> yes, I see that too, very weird... I checked in the above, but it shows as the trunk version?    \nlarrys_away is now known as larrys  \n\\<rando> under tags/2.0.0-rc1, there is nothing checked out and the fossology.pb file has been changed.   \n\\<rando> should I start the build?   \n\\<vincent> yes, just run runBuild_v2.0.php \u2013V 2.0.0-rc1   \n\\<rando> have to change the deb change log first.... there doesn't seem to be a debchange command on this system, how did you edit the changelog?   \n\\<vincent> edit it by myself   \n")),(0,a.kt)("h2",{id:"configure-build-server"},"Configure Build Server"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Setup Build Environment")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a.\tneed support virtualization(Inter VT or AMD-V)"),(0,a.kt)("li",{parentName:"ul"},"b.\tMemory, as larger as better, at least 4G Memory"),(0,a.kt)("li",{parentName:"ul"},"c.\tDisk: at least 100G disk space"),(0,a.kt)("li",{parentName:"ul"},"d.\tSystem: prefer RHEL5.6 x86_64 platform with kvm installed"),(0,a.kt)("li",{parentName:"ul"},"e.\tCheck the server already installed: fobuild.fc.hp.com")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Configure pb(project-builder) environment")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"a.\tCreate a configuration file under \u201cbuild\u201d user home directory called .pbrc"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"mailto:build@fobuild.fc.hp.com"},"build@fobuild.fc.hp.com"),":~$ cat .pbrc",(0,a.kt)("br",{parentName:"p"}),"\n","#","how to get project-builder.org source",(0,a.kt)("br",{parentName:"p"}),"\n","pburl pb = svn://svn.project-builder.org/mondo/svn/pb  "),(0,a.kt)("p",{parentName:"blockquote"},"#","where to get the packaging templates",(0,a.kt)("br",{parentName:"p"}),"\n","pbconfurl pb = svn://svn.project-builder.org/mondo/svn/pb/pbconf  "),(0,a.kt)("p",{parentName:"blockquote"},"#","local prefix for sandbox checkouts and local build artifacts",(0,a.kt)("br",{parentName:"p"}),"\n","pbdefdir default = $ENV{'HOME'}/pb/projects",(0,a.kt)("br",{parentName:"p"}),"\n","pbdefdir pb = $ENV{'HOME'}",(0,a.kt)("br",{parentName:"p"}),"\n","pbconfdir pb = $ENV{'HOME'}/pb/pbconf  "),(0,a.kt)("p",{parentName:"blockquote"},"#","location of Virtual Machine infrastructure",(0,a.kt)("br",{parentName:"p"}),"\n","vmpath default = /home/build/vm  "),(0,a.kt)("p",{parentName:"blockquote"},"#","location of Virtual Environment (chroot) infrastructure",(0,a.kt)("br",{parentName:"p"}),"\n","vepath default = /home/mock  "),(0,a.kt)("p",{parentName:"blockquote"},"#","fossology project URL of its pbconf",(0,a.kt)("br",{parentName:"p"}),"\n","pbconfurl fossology = git+",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fossology/fossology.git"},"https://github.com/fossology/fossology.git"),"\n","#","pbconfurl fossology = $ENV{'HOME'}/pb/projects/fossology/pbconf  "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"b.\tGet the prepared VM at fobuild.fc.hp.com:/home/build/vm/. Create a new directory to host these VMs."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"mailto:build@fobuild.fc.hp.com"},"build@fobuild.fc.hp.com"),":~$ mkdir ~/vm"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"c.\tCreate another .pbrc conf file in vmpath directory to store the parameters linked to VM management.    "),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"mailto:build@osms.chn.hp.com"},"build@osms.chn.hp.com"),":~$ cat ~/vm/.pbrc",(0,a.kt)("br",{parentName:"p"}),"\n","#","type of VM",(0,a.kt)("br",{parentName:"p"}),"\n","vmtype default = kvm",(0,a.kt)("br",{parentName:"p"}),"\n","vmcmd default = /usr/bin/kvm",(0,a.kt)("br",{parentName:"p"}),"\n","#","VM instance configuration",(0,a.kt)("br",{parentName:"p"}),"\n","vmntp default = pool.ntp.org",(0,a.kt)("br",{parentName:"p"}),"\n","vmntpcmd default = /usr/sbin/ntpdate",(0,a.kt)("br",{parentName:"p"}),"\n","vmhost default = localhost",(0,a.kt)("br",{parentName:"p"}),"\n","vmlogin default = pb",(0,a.kt)("br",{parentName:"p"}),"\n","vmport default = 2223",(0,a.kt)("br",{parentName:"p"}),"\n","vmtmout default = 120",(0,a.kt)("br",{parentName:"p"}),"\n","vmopt default = -m 1000 -nographic -no-kvm-irqchip",(0,a.kt)("br",{parentName:"p"}),"\n","vmsize default = 8G",(0,a.kt)("br",{parentName:"p"}),"\n","vmmonport default = 4444",(0,a.kt)("br",{parentName:"p"}),"\n","#","-nographic",(0,a.kt)("br",{parentName:"p"}),"\n","#","a comma seperated list of all the desired tuples (distro-ver-arch)",(0,a.kt)("br",{parentName:"p"}),"\n","vmlist default = fedora-17-i386,fedora-17-x86_64,ubuntu-10.04-i386,ubuntu-10.04-x86_64,rhel-6-i386,rhel-6-x86_64,ubuntu-11.10-i386,ubuntu-11.10-x86_64,ubuntu-11.04-i386,ubuntu-11.04-x86_64,debian-6.0-i386,debian-6.0-x86_64,ubuntu-12.10-i386,ubuntu-12.10-x86_64,ubuntu-12.04-i386,ubuntu-12.04-x86_64    ")))),(0,a.kt)("h2",{id:"instructions-for-building-packages-runbuild_v20php-script-automated-this-process"},"Instructions for Building packages (runbuild_v2.0.php script automated this process)"),(0,a.kt)("p",null,"If this builds environment setup correctly, just follow this instruction to create packages for testing and release. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose VERSION of packages to build, example 2.0.0",(0,a.kt)("br",{parentName:"p"}),"\n","When the VERSION choose, run follow command as login user:   "),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"mailto:build@fobuild.fc.hp.com"},"build@fobuild.fc.hp.com"),":~$ pb -p fossology -r 2.0.0 newproj fossology",(0,a.kt)("br",{parentName:"p"}),"\n","After run this command will generate $HOME/pb/projects/fossology/pbconf/2.0.0/ directory.   "))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check out all files needed by FOSSology building  "),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"mailto:build@fobuild.fc.hp.com"},"build@fobuild.fc.hp.com"),":~$ cd $HOME/pb/projects/fossology/pbconf/2.0.0/",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"mailto:build@fobuild.fc.hp.com"},"build@fobuild.fc.hp.com"),":~/pb/projects/fossology/pbconf/2.0.0$ rm -rf *",(0,a.kt)("br",{parentName:"p"}),"\n","Check out all files from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fossology/fossology/tree/master/packaging/"},"https://github.com/fossology/fossology/tree/master/packaging/"),"\nTo $HOME/pb/projects/fossology/pbconf/2.0.0/  "))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit ",(0,a.kt)("strong",{parentName:"p"},"fossology.pb")," file under ",(0,a.kt)("strong",{parentName:"p"},"$HOME/pb/projects/fossology/pbconf/2.0.0/")," with new VERSION  "),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"projver fossology = VERSION",(0,a.kt)("br",{parentName:"p"}),"\n","pburl fossology = git+",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fossology/fossology.git"},"https://github.com/fossology/fossology.git")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Generate all source and spec file for  different distro  "),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"mailto:build@fobuild.fc.hp.com"},"build@fobuild.fc.hp.com"),":~$ pb -p fossology -r 2.0.0 sbx2build  "))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build Packagess use all VMs  "),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"mailto:build@fobuild.fc.hp.com"},"build@fobuild.fc.hp.com"),":~$ pb -p fossology -r 2.0.0 -m debian-6.0-i386 launchvm",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"mailto:build@fobuild.fc.hp.com"},"build@fobuild.fc.hp.com"),":~$ pb -p fossology -r 2.0.0 -m debian-6.0-i386 setupvm",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"mailto:build@fobuild.fc.hp.com"},"build@fobuild.fc.hp.com"),":~$ pb -p fossology -r 2.0.0 -m debian-6.0-i386 build2vm  ")))),(0,a.kt)("h2",{id:"create-packages-in-rms-use-project-builder"},"Create packages in RMs use project-builder"),(0,a.kt)("p",null,"project-builder support to create packages in RMs, RM means Remote Machine, and could be a physical or Virtual one, which should pre-exist. (There are no detail documents introduce how to create packages in RMs, following instruction is my testing steps.)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add conf part into pbrc file"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"rmtype fossology = ssh",(0,a.kt)("br",{parentName:"p"}),"\n","rmlogin fossology = root",(0,a.kt)("br",{parentName:"p"}),"\n","rmport fossology = 22",(0,a.kt)("br",{parentName:"p"}),"\n","rmlist fossology = rhel-6-i386,debian-6-i386",(0,a.kt)("br",{parentName:"p"}),"\n","rmpath fossology = localhost",(0,a.kt)("br",{parentName:"p"}),"\n","rmtmout fossology = 10",(0,a.kt)("br",{parentName:"p"}),"\n","rmhost rhel-6-i386 = fo-centos-6-32.fc.hp.com",(0,a.kt)("br",{parentName:"p"}),"\n","rmhost debian-6-i386 = fo-debian-squeeze32.fc.hp.com   ")),(0,a.kt)("p",{parentName:"li"},"NOTE: rmhost list all the physical machine or virtual machine hostname connect with rmlist you want to build")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Setup the physical or virtual machine"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"a. Install project-builder on them",(0,a.kt)("br",{parentName:"p"}),"\n","b. setup machine ",(0,a.kt)("inlineCode",{parentName:"p"},"[build@fobuild ~]$ pb -p fossology -r 2.0.0 setuprm -P 22  "),(0,a.kt)("br",{parentName:"p"}),"\n","c. Install build package dependencies "))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build packages on RMs"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"[build@fobuild ~]","$ pb -p fossology -r 2.0.0 build2rm -P 22")))))}u.isMDXComponent=!0}}]);