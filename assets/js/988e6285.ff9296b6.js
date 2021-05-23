(self.webpackChunkfossology_blogs=self.webpackChunkfossology_blogs||[]).push([[8295],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(n),h=r,d=g["".concat(s,".").concat(h)]||g[h]||p[h]||a;return n?o.createElement(d,l(l({ref:t},c),{},{components:n})):o.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},529:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),l={},i={unversionedId:"docs/How-to-create-a-new-release",id:"docs/How-to-create-a-new-release",isDocsHomePage:!1,title:"How to Create a New Release",description:"Release Checklist is [[here|Release-Process]]",source:"@site/docs/docs/How-to-create-a-new-release.md",sourceDirName:"docs",slug:"/docs/How-to-create-a-new-release",permalink:"/fossology-blogs/docs/docs/How-to-create-a-new-release",editUrl:"https://github.com/Aman-Codes/fossology-blogs/edit/master/docs/docs/How-to-create-a-new-release.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How-To-Create-An-Agent",permalink:"/fossology-blogs/docs/docs/How-To-Create-An-Agent"},next:{title:"How-to-query-an-agent-for-version",permalink:"/fossology-blogs/docs/docs/How-to-query-an-agent-for-version"}},s=[{value:"Increment Version Number Appropriately",id:"increment-version-number-appropriately",children:[{value:"Tagging the release in github",id:"tagging-the-release-in-github",children:[]},{value:"Branching in github",id:"branching-in-github",children:[]},{value:"Creating a tarball",id:"creating-a-tarball",children:[]},{value:"Uploading the tarball to Sourceforge",id:"uploading-the-tarball-to-sourceforge",children:[]},{value:"Writing Release Notes",id:"writing-release-notes",children:[]},{value:"Add news blurb to front page",id:"add-news-blurb-to-front-page",children:[]},{value:"Sending email announcement",id:"sending-email-announcement",children:[]},{value:"Post-incrementing the version number in svn",id:"post-incrementing-the-version-number-in-svn",children:[]}]}],u={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Release Checklist is [","[here|Release-Process]","]"),(0,a.kt)("h2",{id:"increment-version-number-appropriately"},"Increment Version Number Appropriately"),(0,a.kt)("p",null,"First thing's first... How do you increment version numbers?"),(0,a.kt)("p",null,"To summarize:"),(0,a.kt)("p",null,"  ",(0,a.kt)("inlineCode",{parentName:"p"},"A.B.C")),(0,a.kt)("p",null,"where"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  A = Major release number\n\n  Reason for change:\n\n  schema and/or agent API _breakage_\n\n  B = Minor release number\n\n  Reasons for change:\n\n  schema and/or agent APIs are _added_ or _extended_ \n   \n  new agents added\n\n  security fixes\n\n  major roll up of bugfixes\n\n  C = Bugfix release number\n\n  Reasons for change:\n\n  any bugfix worth doing a new release/test cycl\n")),(0,a.kt)("h3",{id:"tagging-the-release-in-github"},"Tagging the release in github"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"VERSIONSTRING ")," change the content to the appropriate version number based on the guidelines above.  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a new tag for the release:  save it in ",(0,a.kt)("inlineCode",{parentName:"p"},"/tags/\\<revision\\>/")," "),(0,a.kt)("p",{parentName:"li"},"   ",(0,a.kt)("inlineCode",{parentName:"p"},'git tag -a 2.6.2 -m "Tag fossolgy release 2.6.2 at git commit 0a62dd."')))),(0,a.kt)("h3",{id:"branching-in-github"},"Branching in github"),(0,a.kt)("p",null,"To create a new branch:\n",(0,a.kt)("inlineCode",{parentName:"p"},'git branch fossology-2.6.2 -m "Create fossolgy branch 2.6.2 at git commit 0a62dd."')),(0,a.kt)("h3",{id:"creating-a-tarball"},"Creating a tarball"),(0,a.kt)("p",null,"To create a tarball, check out the released version.  Within that directory, simply run "),(0,a.kt)("p",null,"  make tar-release"),(0,a.kt)("p",null,"This will create a file called ''fossology-A.B.C.tar.gz''."),(0,a.kt)("h3",{id:"uploading-the-tarball-to-sourceforge"},"Uploading the tarball to Sourceforge"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The tarball you intend to upload to Sourceforge must exist on your local system.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Log into ",(0,a.kt)("a",{parentName:"p",href:"http://sourceforge.net/"},"http://sourceforge.net/")," (using the same login/username you would use to do svn checkins).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Go to the FOSSology project page (",(0,a.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/fossology/"},"https://sourceforge.net/projects/fossology/"),') and click on the "Files" tab.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Click on the "fossology" folder')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Use "Add Folder" to create a new release folder (if necessary) for the tarball.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Click on the newly created folder and select "Add File"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Upload the tarball from your local system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Note there is no final "Submit" once you\'ve uploaded the file.  The file is released.  You can confirm this by going to the "Download" tab in sourceforge and ensuring the file you just uploaded shows up there.  It will also show up on the "Files" management page after "Looking for the latest version?".  '))),(0,a.kt)("h3",{id:"writing-release-notes"},"Writing Release Notes"),(0,a.kt)("p",null,"You must create a set of release notes in Dokuwiki at ",(0,a.kt)("a",{parentName:"p",href:"http://fossology.org/release_notes"},"http://fossology.org/release_notes"),"  "),(0,a.kt)("p",null,"Simply add the release notes to the top of the page, shifting all the previous versions down below them. "),(0,a.kt)("p",null,"Be sure to highlight all the new features, bugfixes, any other errata."),(0,a.kt)("h3",{id:"add-news-blurb-to-front-page"},"Add news blurb to front page"),(0,a.kt)("p",null,"Be sure to update the ",(0,a.kt)("a",{parentName:"p",href:"http://fossology.org/"},"http://fossology.org/")," front page with a short news blurb about the new release.  You may also want to remove the oldest news blurb as well, to keep the page a bit current and up-to-date."),(0,a.kt)("h3",{id:"sending-email-announcement"},"Sending email announcement"),(0,a.kt)("p",null,"Finally it's important to send an announcement of the new release to the mailing list."),(0,a.kt)("p",null,"Email to ''",(0,a.kt)("a",{parentName:"p",href:"mailto:fossology@fossology.org"},"fossology@fossology.org"),"'' something like the following:"),(0,a.kt)("p",null,"  Subject:  Announcing FOSSology A.B.C Release"),(0,a.kt)("p",null,"  The FOSSology Project is pleased to announce the release of FOSSology A.B.C."),(0,a.kt)("p",null,"  New in version A.B.C:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"* New feature\n* New feature\n* Important bug fix\n* etc... don't get too specific, but try to highlight the major changes\n")),(0,a.kt)("p",null,"  For more information on the FOSSology project and to download the software,\nplease visit ",(0,a.kt)("a",{parentName:"p",href:"http://fossology.org/"},"http://fossology.org/")),(0,a.kt)("p",null,"  -- About FOSSology --"),(0,a.kt)("p",null,"  FOSSology is a Free Open Source Software (FOSS) project built around an open\narchitecture for analyzing software. Existing modules include license analysis,\nCopyright/Email/URL scanner, analysis of deb and rpm packages.  This open\nsource software tool analyzes a given set of software packages, and reports items\nsuch as the software licenses used by these packages."),(0,a.kt)("p",null,"  More than simply reporting, \u201cPackage X uses license Y,\u201d the FOSSology tool\nattempts to analyze every file within the package to determine its license. The\nlicense report is thus an aggregate of all of the different licenses found to be\nin use by a package. A single package may be labeled as \u201cGPL\u201d but contain files\nthat use other licenses (BSD, OSL, or any of the hundreds of other licenses). Even\nif an exact license is unknown, the license may be identifiable by common license\nphrases."),(0,a.kt)("p",null,"  The FOSSology Project started as an internal software development effort within\nHewlett Packard\u2019s Open Source and Linux Organization. The tool evolved over\nseveral years at HP from a few simple shell scripts to the much more comprehensive\ntool you see today."),(0,a.kt)("p",null,"  Enjoy!\nThe FOSSology team"),(0,a.kt)("h3",{id:"post-incrementing-the-version-number-in-svn"},"Post-incrementing the version number in svn"),(0,a.kt)("p",null,"After making a release, increment the version number in ''trunk/fossology/Makefile.conf'' in subversion.  Increment the least-significant digit by 1, and add \"~svn\" to it (tilde svn)."),(0,a.kt)("p",null,"For example if the release you just completed was ''\"0.17.0\"'', update ''Makefile.conf'' in subversion to be version \"''0.17.1~svn''\".  Why?  So that future checkouts of HEAD will not advertise being the previous release, which they certainly are not."))}c.isMDXComponent=!0}}]);