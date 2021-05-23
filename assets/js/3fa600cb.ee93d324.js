(self.webpackChunkfossology_blogs=self.webpackChunkfossology_blogs||[]).push([[3430],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),h=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(n),u=o,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var h=2;h<r;h++)a[h]=n[h];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2965:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var i=n(2122),o=n(9756),r=(n(7294),n(3905)),a={},s={unversionedId:"docs/Copyright",id:"docs/Copyright",isDocsHomePage:!1,title:"Copyright",description:'This agent find statements within code that could indicate ownership of the copyright. This obviously includes a standard copyright statement, but can also include statements beginning with "written by" or "maintained by." This agent also finds emails and urls embedding in source code, since these can also indicate the ownership of the code.',source:"@site/docs/docs/Copyright.md",sourceDirName:"docs",slug:"/docs/Copyright",permalink:"/fossology-blogs/docs/docs/Copyright",editUrl:"https://github.com/Aman-Codes/fossology-blogs/edit/master/docs/docs/Copyright.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration-and-Tuning",permalink:"/fossology-blogs/docs/docs/Configuration-and-Tuning"},next:{title:"Database",permalink:"/fossology-blogs/docs/docs/Database"}},l=[{value:"General Technical Remarks",id:"general-technical-remarks",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Fidelity",id:"fidelity",children:[]},{value:"Command Line",id:"command-line",children:[]},{value:"Copyright Agent Prior to 2.6.2",id:"copyright-agent-prior-to-262",children:[]},{value:"Copyright doesn&#39;t find a specific copyright?",id:"copyright-doesnt-find-a-specific-copyright",children:[]}],h={toc:l};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'This agent find statements within code that could indicate ownership of the copyright. This obviously includes a standard copyright statement, but can also include statements beginning with "written by" or "maintained by." This agent also finds emails and urls embedding in source code, since these can also indicate the ownership of the code.'),(0,r.kt)("h2",{id:"general-technical-remarks"},"General Technical Remarks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The copyright agent is written in C++, this is easier for handling regular expressions."),(0,r.kt)("li",{parentName:"ul"},"The regular expression are put into  file that parsed at agent startup. Note that agent startup means started by the scheduler service, not when you surf to the FOSSology Web pages."),(0,r.kt)("li",{parentName:"ul"},"File nme is ",(0,r.kt)("inlineCode",{parentName:"li"},"src/copyright/agent/copyright.conf")),(0,r.kt)("li",{parentName:"ul"},"The regular expressions have been tested with the notorious FSF-copyright statements including really many years and going over up to three lines, check projects like libelf.")),(0,r.kt)("p",null,"In addition, the copyright agent can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"look for URLs like http, https, ftp"),(0,r.kt)("li",{parentName:"ul"},"look for emails")),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"You can use the copyright agent for two main use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"review the findings (copyrights, author statements, e-mails, URLs) in the FOSSology Web UI.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For example, you could search for contributors from France to identify a bunch of French people, then you could check the top level domain of the found e-mail addresses on screen. See the screenshot as example also using the filter function in the upper left of each table."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wiki/fossology/fossology/img/2015-10-15%2000_16_50-Copyright_Email_URL_Author%20Browser%20.png",alt:"Copyright E-Mail Example"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit the copyright statements for generation of a readme-/notice-file for your distribution or a SPDX file (or maybe a Debian copyright file for a package in future). You need to know that the listed copyright statements are there in a black list basis:"),(0,r.kt)("li",{parentName:"ul"},"all statements you see will land in a report"),(0,r.kt)("li",{parentName:"ul"},"you must delete statements rows with the red cross to get rid of them"),(0,r.kt)("li",{parentName:"ul"},"or, as an alternative, you can edit or correct copyright statements, by clicking into the respective text line. Please do not forget to enter return to save your edited text.")),(0,r.kt)("h2",{id:"fidelity"},"Fidelity"),(0,r.kt)("p",null,"Since the copyright agent has changed with 2.6.2, the question rises, how are the findings. While a complete proof is impossible because this would involve a complete scan of all open source packages. Rather, a qualitative look has been performed at some heterogeneous package, OpenSSL 1.0.2."),(0,r.kt)("p",null,"The analysis has been done as part of solving ticket\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fossology/fossology/issues/352"},"https://github.com/fossology/fossology/issues/352")," (please scroll down for spreadsheet attachment)"),(0,r.kt)("p",null,"In summary, the newer implementation offers handling advantages and seems to find slightly more items than the implementation prior to 2.6.2. Moreover, the matched statements seem more complete. Please see the issue description for details."),(0,r.kt)("h2",{id:"command-line"},"Command Line"),(0,r.kt)("p",null,"Copyright can be run from the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./copyright -c file1.c -c file2.c \n")),(0,r.kt)("p",null,"The output is formatted like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"file1.c :: [start_byte:end_byte:statement] 'text of statement' [start_byte:end_byte:url] 'text of url' file2.c :: [start_byte:end_byte:url] 'text of url' [start_byte:end_byte:email] 'text of email'\n")),(0,r.kt)("h2",{id:"copyright-agent-prior-to-262"},"Copyright Agent Prior to 2.6.2"),(0,r.kt)("p",null,'The copyright agent uses to two dictionaries to determine if a sentence is, or is not a copyright statement. The first dictionary is a list of trigger words and should be very small. The second is a list of words that will be used to validate a statement found using the first dictionary. The second dictionary used by the copyright agent is much larger than the first and mostly contains names. The idea behind this is to find a statement like "copyright (c) 2010 hewlett-packard development company, l.p." by finding the work "copyright" and matching it with one of the other words in the sentence, in this case the agent would match it with "2010" since years are an excellent method for identifying copyrights.'),(0,r.kt)("p",null,"The entirety of the first dictionary used currently by the copyright agent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"copyright (c) written modified patched maintained contributed &copy; &#169; &#xa9; author\n")),(0,r.kt)("p",null,"A section of the second dictionary used by the copyright agent:"),(0,r.kt)("p",null,"... hartzel haruko harv harvard harvey harville harvison harwell harwerth harwilll harwood hasan ..."),(0,r.kt)("h2",{id:"copyright-doesnt-find-a-specific-copyright"},"Copyright doesn't find a specific copyright?"),(0,r.kt)("p",null,"If the copyright agent isn't finding a copyright that you know is present in a file, there are a couple simple changes that can be made to the dictionaries to cause it to find your copyright."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Change copyright.dic")),(0,r.kt)("p",null,'This is the best choice if the copyright agent is missing an entire class of copyrights. If there is some word that whenever it is seen, the agent should look for a name match nearby then simply add it to this file. Run a "make install" on the directory and restart the scheduler. Then run the copyright agent on the files again. See [',"[Useful SQL]","] for a method to delete the results for a particular upload."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Change names.dic")),(0,r.kt)("p",null,'This is the best choice when there is a specific person that you are looking for. If you know that a piece of code has an author, but the copyright agent is unable to find any statements relating them, add that name to the names.dic file. As with changes to the copyright.dic file, simply run a "make install" and restart the scheduler. Then run the copyright agent on the files again. See [',"[Useful SQL]","] for a method to delete the results for a particular upload."),(0,r.kt)("h4",{id:"copyright-doesnt-find-a-specific-copyright-1"},"Copyright doesn't find a specific copyright?"),(0,r.kt)("p",null,"If the copyright agent isn't finding a copyright that you know is present in a file, there are a couple simple changes that can be made to the dictionaries to cause it to find your copyright."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Change copyright.dic")),(0,r.kt)("p",null,'This is the best choice if the copyright agent is missing an entire class of copyrights. If there is some word that whenever it is seen, the agent should look for a name match nearby then simply add it to this file. Run a "make install" on the directory and restart the scheduler. Then run the copyright agent on the files again. See [',"[Useful SQL]","] for a method to delete the results for a particular upload."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Change names.dic")),(0,r.kt)("p",null,'This is the best choice when there is a specific person that you are looking for. If you know that a piece of code has an author, but the copyright agent is unable to find any statements relating them, add that name to the names.dic file. As with changes to the copyright.dic file, simply run a "make install" and restart the scheduler. Then run the copyright agent on the files again. See [',"[Useful SQL]","] for a method to delete the results for a particular upload."))}c.isMDXComponent=!0}}]);