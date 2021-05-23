(self.webpackChunkfossology_blogs=self.webpackChunkfossology_blogs||[]).push([[7906],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5451:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l={},i={unversionedId:"docs/Package-Agent",id:"docs/Package-Agent",isDocsHomePage:!1,title:"Package-Agent",description:"`",source:"@site/docs/docs/Package-Agent.md",sourceDirName:"docs",slug:"/docs/Package-Agent",permalink:"/fossology-blogs/docs/docs/Package-Agent",editUrl:"https://github.com/Aman-Codes/fossology-blogs/edit/master/docs/docs/Package-Agent.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"New information since PHP7.2",permalink:"/fossology-blogs/docs/docs/PHP-Object-Baseclass"},next:{title:"Permissions-and-Groups",permalink:"/fossology-blogs/docs/docs/Permissions-and-Groups"}},p=[],s={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./pkgagent -h\n\nUsage: ./pkgagent [options] [file [file [...]]\n\n-i :: initialize the database, then exit.\n\n-v :: verbose (-vv = more verbose)\n\n-c :: Specify the directory for the system configuration.\n\n-C :: run from command line.\n\nfile :: if files are rpm package listed, display their package information.\n\nno file :: process data from the scheduler.\n")),(0,o.kt)("p",null,"| Purpose  | Cli Tests for Package Agent  |\n| Dependencies  | need debs and rpms available on the system for analysis |"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Step"),(0,o.kt)("th",{parentName:"tr",align:null},"Action"),(0,o.kt)("th",{parentName:"tr",align:null},"Expected Results"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"./pkgagent -h"),(0,o.kt)("td",{parentName:"tr",align:null},"should print useage 1233")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"./pkgagent -C 'file'"),(0,o.kt)("td",{parentName:"tr",align:null},"print details of package on stdout 1239")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3."),(0,o.kt)("td",{parentName:"tr",align:null},"./pkgagent -c /tmp/fossology/ -C -v ~markd/public_html/CUnit-2.1.2-7.fc15.src.rpm"),(0,o.kt)("td",{parentName:"tr",align:null},"had to use -v, works fine")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"./pkgagent -C <no such file>")),(0,o.kt)("td",{parentName:"tr",align:null},"indicates file can't be found.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5."),(0,o.kt)("td",{parentName:"tr",align:null},"./pkgagent -i"),(0,o.kt)("td",{parentName:"tr",align:null},"exit code should be 0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"6."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"./pkgagent <no file>")),(0,o.kt)("td",{parentName:"tr",align:null},"can't test with cli")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"7."),(0,o.kt)("td",{parentName:"tr",align:null},"./pkgagent -v and -vv"),(0,o.kt)("td",{parentName:"tr",align:null},"compare output, there should be more details. 1251")))))}c.isMDXComponent=!0}}]);