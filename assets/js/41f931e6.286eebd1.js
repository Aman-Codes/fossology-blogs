(self.webpackChunkfossology_blogs=self.webpackChunkfossology_blogs||[]).push([[3385],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return f},kt:function(){return d}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=s,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},f),{},{components:r})):n.createElement(m,a({ref:t},f))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8206:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return l},default:function(){return f}});var n=r(2122),s=r(9756),i=(r(7294),r(3905)),a={},o={unversionedId:"docs/License-Browser-filter",id:"docs/License-Browser-filter",isDocsHomePage:!1,title:"License-Browser-filter",description:"The browse view uses the jQuery data tables element which already brings paging and other features such as column-sorting for free. This view got also extended and now, some more functionality is available:",source:"@site/docs/docs/License-Browser-filter.md",sourceDirName:"docs",slug:"/docs/License-Browser-filter",permalink:"/fossology-blogs/docs/docs/License-Browser-filter",editUrl:"https://github.com/Aman-Codes/fossology-blogs/edit/master/docs/docs/License-Browser-filter.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Known-Security-Risks",permalink:"/fossology-blogs/docs/docs/Known-Security-Risks"},next:{title:"License-Ref-Table",permalink:"/fossology-blogs/docs/docs/License-Ref-Table"}},l=[{value:"Details",id:"details",children:[]}],c={toc:l};function f(e){var t=e.components,a=(0,s.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The browse view uses the jQuery data tables element which already brings paging and other features such as column-sorting for free. This view got also extended and now, some more functionality is available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"change between flat and hierarchical file view"),(0,i.kt)("li",{parentName:"ul"},"enter plain text filter terms"),(0,i.kt)("li",{parentName:"ul"},'enter filter terms with qualifiers (such as "ext:" for file extensions)'),(0,i.kt)("li",{parentName:"ul"},"filter by licenses when clicking the license name in the histogram"),(0,i.kt)("li",{parentName:"ul"},"and multiple filter terms at the same time ...")),(0,i.kt)("h3",{id:"details"},"Details"),(0,i.kt)("p",null,"By default, you see the tree view, e.g., all files and directories which are immediately in the browsed path. The results are ordered by the adj2nest agent, hence directories come first and all files follow in alphabetically order. Directories are displayed in bold font. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tree view",src:r(2397).Z})),(0,i.kt)("p",null,"You can switch to flat view to see all plain files that are anywhere in the browsed path, e.g., also the files in subpaths. The results are sorted alphabetically hiding the nested structure.\n",(0,i.kt)("img",{alt:"flat view",src:r(1874).Z})),(0,i.kt)("p",null,"Any unqualified search filters for files (or directories) starting with this search string. Note that this is case-insensitive.\n",(0,i.kt)("img",{alt:"flat view",src:r(6800).Z})),(0,i.kt)("p",null,"This is equivalent to a search with the qualifier head, e.g., ",(0,i.kt)("strong",{parentName:"p"},"foo")," and ",(0,i.kt)("strong",{parentName:"p"},"head:foo")," yield the same selection.\n",(0,i.kt)("img",{alt:"flat view",src:r(4167).Z})),(0,i.kt)("p",null,"You can use the qualifier ",(0,i.kt)("strong",{parentName:"p"},"ext"),' to filter for file extensions. Note that the full extension must match, hence "ext:c" won\'t find class files.\n',(0,i.kt)("img",{alt:"flat view",src:r(9361).Z})),(0,i.kt)("p",null,"Click on the license name in the left table to insert a search term which filters for files where the license is found by scanners.\n",(0,i.kt)("img",{alt:"flat view",src:r(552).Z})),(0,i.kt)("p",null,"The corresponding qualifier for filtering by concluded results is ",(0,i.kt)("strong",{parentName:"p"},"con"),".\n",(0,i.kt)("img",{alt:"flat view",src:r(5200).Z})),(0,i.kt)("p",null,"Use ",(0,i.kt)("strong",{parentName:"p"},"open:1")," to look for files that still needs to be cleared.\n",(0,i.kt)("img",{alt:"flat view",src:r(541).Z})),(0,i.kt)("p",null,"It is also possible to combine filters by separating them with spaces.\n",(0,i.kt)("img",{alt:"flat view",src:r(8870).Z})))}f.isMDXComponent=!0},6800:function(e,t,r){"use strict";t.Z=r.p+"assets/images/browse_license_filter_any-ecd885435aef0fb60e7cc2f1d400ee30.png"},8870:function(e,t,r){"use strict";t.Z=r.p+"assets/images/browse_license_filter_combi-53654628a805cc7521fd4f9eac9d5bdb.png"},5200:function(e,t,r){"use strict";t.Z=r.p+"assets/images/browse_license_filter_con-072a17d15fa56468768deba0dc98cf7a.png"},9361:function(e,t,r){"use strict";t.Z=r.p+"assets/images/browse_license_filter_ext-b35e46a5be82524b19c520ad22652736.png"},1874:function(e,t,r){"use strict";t.Z=r.p+"assets/images/browse_license_filter_flat-b6b13f78d27e34a6ea86705d3b5549de.png"},4167:function(e,t,r){"use strict";t.Z=r.p+"assets/images/browse_license_filter_head-90f954f4de04b018d834fdf5ff55a64a.png"},541:function(e,t,r){"use strict";t.Z=r.p+"assets/images/browse_license_filter_open-c826faf0f0ab0fdf984fdaf3d5a8fc4d.png"},552:function(e,t,r){"use strict";t.Z=r.p+"assets/images/browse_license_filter_scan-f3c968a48433d172382626657e95c32c.png"},2397:function(e,t,r){"use strict";t.Z=r.p+"assets/images/browse_license_filter_tree-fafcfea376278e7c9f1ade5b15b71073.png"}}]);