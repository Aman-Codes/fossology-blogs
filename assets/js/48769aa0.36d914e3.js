(self.webpackChunkfossology_blogs=self.webpackChunkfossology_blogs||[]).push([[4409],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return h}});var o=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,l=function(e,t){if(null==e)return{};var r,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=o.createContext({}),u=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(r),h=l,c=m["".concat(i,".").concat(h)]||m[h]||d[h]||n;return r?o.createElement(c,s(s({ref:t},p),{},{components:r})):o.createElement(c,s({ref:t},p))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,s=new Array(n);s[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,s[1]=a;for(var u=2;u<n;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},290:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return i},default:function(){return p}});var o=r(2122),l=r(9756),n=(r(7294),r(3905)),s={},a={unversionedId:"docs/Access-Control",id:"docs/Access-Control",isDocsHomePage:!1,title:"Access-Control",description:"This page has been updated for v 2.2.",source:"@site/docs/docs/Access-Control.md",sourceDirName:"docs",slug:"/docs/Access-Control",permalink:"/fossology-blogs/docs/docs/Access-Control",editUrl:"https://github.com/Aman-Codes/fossology-blogs/edit/master/docs/docs/Access-Control.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GSoC2020",permalink:"/fossology-blogs/docs/GSoC2020/GSoC2020"},next:{title:"Ant-build-file-example-for-test-execution",permalink:"/fossology-blogs/docs/docs/Ant-build-file-example-for-test-execution"}},i=[{value:"User Permissions",id:"user-permissions",children:[]},{value:"Groups",id:"groups",children:[{value:"Table: group",id:"table-group",children:[]}]},{value:"Group members",id:"group-members",children:[{value:"Table: group_user_member",id:"table-group_user_member",children:[]}]},{value:"Upload Permissions",id:"upload-permissions",children:[{value:"Table: perm_upload",id:"table-perm_upload",children:[]}]},{value:"One-shot uploads",id:"one-shot-uploads",children:[]},{value:"API",id:"api",children:[]},{value:"Examples",id:"examples",children:[{value:"Case 1: Search",id:"case-1-search",children:[]},{value:"Case 2: Browse upload, same for License browser, Bucket browser, and Copyright browser",id:"case-2-browse-upload-same-for-license-browser-bucket-browser-and-copyright-browser",children:[]},{value:"Case 3: Upload from file/url/server, cp2foss, upload from fossjobs",id:"case-3-upload-from-fileurlserver-cp2foss-upload-from-fossjobs",children:[]},{value:"Case 4: Edit upload permissions",id:"case-4-edit-upload-permissions",children:[]},{value:"Case 5: Tag an upload file",id:"case-5-tag-an-upload-file",children:[]},{value:"Case 6: Fix a license result",id:"case-6-fix-a-license-result",children:[]},{value:"Case 7: Move upload to a different folder",id:"case-7-move-upload-to-a-different-folder",children:[]}]},{value:"Questions",id:"questions",children:[{value:"Why can&#39;t I see (browse) a file (upload)?",id:"why-cant-i-see-browse-a-file-upload",children:[]},{value:"What happens to GlobalBrowse",id:"what-happens-to-globalbrowse",children:[]},{value:"How do we migrate users to this new permission scheme?",id:"how-do-we-migrate-users-to-this-new-permission-scheme",children:[]},{value:"What about the current tag permissions?",id:"what-about-the-current-tag-permissions",children:[]},{value:"What about table group_group_member we don&#39;t currently use it and it wasn&#39;t mentioned in this plan.",id:"what-about-table-group_group_member-we-dont-currently-use-it-and-it-wasnt-mentioned-in-this-plan",children:[]},{value:"Folder permissions",id:"folder-permissions",children:[]}]}],u={toc:i};function p(e){var t=e.components,r=(0,l.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This page has been updated for v 2.2."),(0,n.kt)("p",null,'In 1.2 we only had user PLUGIN permissions, but to support tags in 1.3 we added tag permissions. In 2.2 we are getting rid of explicit tag permissions and basing all permissions on the user and upload. For permissions on uploads to be manageable, we have implemented "groups". Groups work like ',(0,n.kt)("em",{parentName:"p"},"ix groups. Groups have user members and uploads have permissions based on groups. Unlike "),"ix permissions, uploads do not have user/group/other permissions. They only have group permission."),(0,n.kt)("p",null,"Every user has their own group. So if you create a user Fred, a Fred group gets created automatically with Fred the user (and only user at creation time). Fred is given PERM_ADMIN. As admin, Fred can manage what other users are in his group."),(0,n.kt)("h2",{id:"user-permissions"},"User Permissions"),(0,n.kt)("p",null,"Currently, there are 4 user plugin permissions which are a subset of the pre 2.2 user plugin permissions. These user level permission control what plugins a user sees in the UI."),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Permission"),(0,n.kt)("td",null,"DB value"),(0,n.kt)("td",null,"meaning")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"PLUGIN_DB_NONE"),(0,n.kt)("td",null,"0"),(0,n.kt)("td",null,"No permissions")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"PLUGIN_DB_READ"),(0,n.kt)("td",null,"1"),(0,n.kt)("td",null,"Read only")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"PLUGIN_DB_WRITE"),(0,n.kt)("td",null,"3"),(0,n.kt)("td",null,"DB writes permitted")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"PLUGIN_DB_USERADMIN"),(0,n.kt)("td",null,"10"),(0,n.kt)("td",null,"add/delete users and groups. This is the 'superuser' permission."))),(0,n.kt)("h2",{id:"groups"},"Groups"),(0,n.kt)("p",null,"The group table defines the group name so that it can be associated with a primary key that will serve as the foreign key in referencing tables. Only users with PERM_WRITE or greater can create groups. Once a group is created, that group admin can manage their user membership. The only restrictions are on the group name length, that group names are unique, and that each user has their own group (Fred cannot rename, or delete the Fred group)."),(0,n.kt)("h3",{id:"table-group"},"Table: group"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Column"),(0,n.kt)("td",null,"Type"),(0,n.kt)("td",null,"Key"),(0,n.kt)("td",null,"Function")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"group_pk"),(0,n.kt)("td",null),(0,n.kt)("td",null,"Primary"),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,"group_name"),(0,n.kt)("td",null,"varchar(32)"),(0,n.kt)("td",null,"unique"),(0,n.kt)("td",null,"Name of group"))),(0,n.kt)("h2",{id:"group-members"},"Group members"),(0,n.kt)("p",null,"A group can have as many members (users) as they like (0 - n). The group_user_member table defines the members of each group and if they can manage the group user list."),(0,n.kt)("h3",{id:"table-group_user_member"},"Table: group_user_member"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Column"),(0,n.kt)("td",null,"Type"),(0,n.kt)("td",null,"Key"),(0,n.kt)("td",null,"Function")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"group_user_member_pk"),(0,n.kt)("td",null),(0,n.kt)("td",null,"Primary Key"),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,"group_fk"),(0,n.kt)("td",null),(0,n.kt)("td",null,"Foreign Key"),(0,n.kt)("td",null,"Group being joined.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"user_fk"),(0,n.kt)("td",null),(0,n.kt)("td",null,"Foreign Key"),(0,n.kt)("td",null,"User member of group_fk.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"group_perm"),(0,n.kt)("td",null,"int"),(0,n.kt)("td",null),(0,n.kt)("td",null,"Permission in this group. 0=user, 1=admin. Only admins can manage group members or change the group's name"))),(0,n.kt)("p",null,"A user may be in multiple groups. So if multiple groups are given permission to an upload, a user may end up having conflicting permission levels. In this case, the user will be assigned the highest permission level."),(0,n.kt)("h2",{id:"upload-permissions"},"Upload Permissions"),(0,n.kt)("p",null,"The perm_upload table gives groups permission to access an upload. The permission levels are PERM_NONE, PERM_READ, PERM_WRITE and PERM_ADMIN, just like the PLUGIN permissions. But plugin permissions give users access to plugins (so fossology can determine which plugins to display to the user), while these upload permissions relate which groups have permission to use an upload. If you upload a file, you will get PERM_ADMIN by default. All other users will have PERM_NONE unless you upgrade them. Currently, PERM_WRITE and PERM_ADMIN are equivalent permission levels. However, there may be a time in the future when we want to separate PERM_ADMIN (the upload owner) from PERM_WRITE and give PERM_ADMIN additional privileges."),(0,n.kt)("h3",{id:"table-perm_upload"},"Table: perm_upload"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Column"),(0,n.kt)("td",null,"Type"),(0,n.kt)("td",null,"Key"),(0,n.kt)("td",null,"Function")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"perm_upload_pk"),(0,n.kt)("td",null),(0,n.kt)("td",null,"Primary Key"),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,"perm"),(0,n.kt)("td",null,"int"),(0,n.kt)("td",null),(0,n.kt)("td",null,"Permission granted to group_fk on upload upload_fk")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"upload_fk"),(0,n.kt)("td",null),(0,n.kt)("td",null,"Foreign Key"),(0,n.kt)("td",null,"Upload ID")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"group_fk"),(0,n.kt)("td",null),(0,n.kt)("td",null,"Foreign Key"),(0,n.kt)("td",null,"Group being having access."))),(0,n.kt)("h2",{id:"one-shot-uploads"},"One-shot uploads"),(0,n.kt)("p",null,"The one-shot license and copyright scans are open to everyone. They require no User permission (they are PLUGIN_DB_NONE) and since no upload is saved in the database or repository, there is no Upload permission."),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("p",null,"GetUploadPerm($upload_pk, $user_pk)"),(0,n.kt)("p",null,"   Returns the highest permission that $user_pk has for $upload_pk"),(0,n.kt)("p",null,"See lib/php/common-perms.php for the complete list."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"case-1-search"},"Case 1: Search"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"User must have user type >= PLUGIN_DB_READ for search to appear on main or micro menu.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For each upload returned by search, check the upload permission for the user. The user must have PERM_READ or greater."))),(0,n.kt)("h3",{id:"case-2-browse-upload-same-for-license-browser-bucket-browser-and-copyright-browser"},"Case 2: Browse upload, same for License browser, Bucket browser, and Copyright browser"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"User must have user type >= PLUGIN_DB_READ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For each upload displayed, the user must have >= PERM_READ."))),(0,n.kt)("h3",{id:"case-3-upload-from-fileurlserver-cp2foss-upload-from-fossjobs"},"Case 3: Upload from file/url/server, cp2foss, upload from fossjobs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"User type >= PLUGIN_DB_WRITE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If a folder is specified, the user can write to any folder.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If a folder is not specified, the upload goes into the user root folder.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"User is given PERM_WRITE to new upload."))),(0,n.kt)("h3",{id:"case-4-edit-upload-permissions"},"Case 4: Edit upload permissions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"user type = PLUGIN_DB_ADMIN or the user has admin permission for upload.")),(0,n.kt)("h3",{id:"case-5-tag-an-upload-file"},"Case 5: Tag an upload file"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"User type >= PLUGIN_DB_WRITE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"User has perm >= PERM_WRITE for the upload"))),(0,n.kt)("h3",{id:"case-6-fix-a-license-result"},"Case 6: Fix a license result"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"User type >= PLUGIN_DB_WRITE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"User has perm >= PERM_WRITE for the upload"))),(0,n.kt)("h3",{id:"case-7-move-upload-to-a-different-folder"},"Case 7: Move upload to a different folder"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"User type >= PLUGIN_DB_WRITE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Destination folder must be in user root folder hierarchy or user type = PLUGIN_DB_ADMIN. Only folders that meet this criteria should be displayed in the UI."))),(0,n.kt)("h2",{id:"questions"},"Questions"),(0,n.kt)("h3",{id:"why-cant-i-see-browse-a-file-upload"},"Why can't I see (browse) a file (upload)?"),(0,n.kt)("p",null,"For permission to browse a file, you need three things:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When your user was created, you need READ permission or better.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You need to be in a group that has read permission to the upload.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The upload needs to be under your top-level folder."))),(0,n.kt)("h3",{id:"what-happens-to-globalbrowse"},"What happens to GlobalBrowse"),(0,n.kt)("p",null,'It goes away. If you want everyone to be able to access everyone else\'s upload, then you might as well have them all log in to the same account or have them not log in at all and give Default User PLUGIN_DB_WRITE. If you want to keep seperate users and only allow every user to view every other users uploads, but not write to them, you have to give this permission explicitly. For example, create a group "all users" and give PERM_READ to every other user group. Then add every user to "all users".'),(0,n.kt)("h3",{id:"how-do-we-migrate-users-to-this-new-permission-scheme"},"How do we migrate users to this new permission scheme?"),(0,n.kt)("p",null,"Create groups for each user. Set up upload defaults to give the user PERM_ADMIN to their uploads. fossinit will run /install/db/dbmigrate_2.1-2.2.php to do this. Also provide user instructions (not a link to this document) explaining how the new permission scheme works, how to edit upload defaults, and how to edit permissions and groups."),(0,n.kt)("h3",{id:"what-about-the-current-tag-permissions"},"What about the current tag permissions?"),(0,n.kt)("p",null,"These are superceded by this new method. You must have PERM_WRITE to an upload to tag it."),(0,n.kt)("h3",{id:"what-about-table-group_group_member-we-dont-currently-use-it-and-it-wasnt-mentioned-in-this-plan"},"What about table group_group_member we don't currently use it and it wasn't mentioned in this plan."),(0,n.kt)("p",null,"It has been removed."),(0,n.kt)("h3",{id:"folder-permissions"},"Folder permissions"),(0,n.kt)("p",null,"Folder permissions are implicit and follow these rules. If you are PLUGIN_DB_ADMIN, you can move any folder (except Software Repository) anywhere and you can modify any folder properties and delete any folder (except Software Repository). If you are PLUGIN_DB_WRITE, you can move any folder (except Software Repository) anywhere within your root hierarchy and you can modify it's properties. You can also delete any folder within your hierarchy (subject to upload permission restrictions). If you are PLUGIN_DB_READ you cannot delete the folder or modify its properties. Access to the uploads in a folder are (as always) controlled by the upload permissions. This means, for example, that it is possible to have an upload in your folder that will not be visible with Browse (if the upload has PERM_NONE for the user)."))}p.isMDXComponent=!0}}]);