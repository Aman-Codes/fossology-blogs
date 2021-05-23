(self.webpackChunkfossology_blogs=self.webpackChunkfossology_blogs||[]).push([[5324],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||r;return n?i.createElement(d,a(a({ref:t},u),{},{components:n})):i.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6764:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var i=n(2122),o=n(9756),r=(n(7294),n(3905)),a={},l={unversionedId:"docs/Definition-of-Done",id:"docs/Definition-of-Done",isDocsHomePage:!1,title:"Definition-of-Done",description:"The definition of done helps to set a common understanding for solving a ticket.",source:"@site/docs/docs/Definition-of-Done.md",sourceDirName:"docs",slug:"/docs/Definition-of-Done",permalink:"/fossology-blogs/docs/docs/Definition-of-Done",editUrl:"https://github.com/Aman-Codes/fossology-blogs/edit/master/docs/docs/Definition-of-Done.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Core files",permalink:"/fossology-blogs/docs/docs/Debugging-tips"},next:{title:"Dependency-injection",permalink:"/fossology-blogs/docs/docs/Dependency-injection"}},s=[{value:"Definition of done policy",id:"definition-of-done-policy",children:[]},{value:"Definition of done items",id:"definition-of-done-items",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The definition of done helps to set a common understanding for solving a ticket."),(0,r.kt)("h3",{id:"definition-of-done-policy"},"Definition of done policy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Review points should involve one person from another angle (not just the person you were sitting together with anyways)"),(0,r.kt)("li",{parentName:"ul"},"Limit items in review to 5, try to coordinate ",(0,r.kt)("h1",{parentName:"li",id:"using-github-assignments-to-issues-or-pull-requests"},"Using Github assignments to issues or pull requests"),(0,r.kt)("h1",{parentName:"li",id:"then-the-mailing-list"},"then the mailing list")),(0,r.kt)("li",{parentName:"ul"},"Open review items requires mailing list")),(0,r.kt)("h3",{id:"definition-of-done-items"},"Definition of done items"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"File headers in file OK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GPLv2 License (see code style)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Or, if the file is too small, configuration file: license note (see code style)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copyright and Author")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Avoid (seriously) compiler warnings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fast forward merge to master")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"That means that merge to master is prepared")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"No breaking test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unit, php and c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You have more - use them!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For new / added functionality")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"in the Githuib Wiki-Section if you have done something new")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Review"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Code style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DoD items reached")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Design / architecture issues")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upstream / fossology community contribution suitability")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ticket coverage (does it actually solve the problem?)"))))}u.isMDXComponent=!0}}]);