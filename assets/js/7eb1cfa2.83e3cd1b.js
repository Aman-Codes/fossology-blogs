(self.webpackChunkfossology_blogs=self.webpackChunkfossology_blogs||[]).push([[3864],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return h},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,d=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return r?n.createElement(d,o(o({ref:t},h),{},{components:r})):n.createElement(d,o({ref:t},h))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4274:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={},s={unversionedId:"docs/Repository",id:"docs/Repository",isDocsHomePage:!1,title:"Repository",description:"The file repository is used to store the actual files loaded into the FOSSology system. While the Database stores meta information about files, the Repository holds the actual files.",source:"@site/docs/docs/Repository.md",sourceDirName:"docs",slug:"/docs/Repository",permalink:"/fossology-blogs/docs/docs/Repository",editUrl:"https://github.com/Aman-Codes/fossology-blogs/edit/master/docs/docs/Repository.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reporting-bugs",permalink:"/fossology-blogs/docs/docs/Reporting-bugs"},next:{title:"S3-Backup",permalink:"/fossology-blogs/docs/docs/S3-Backup"}},l=[{value:"Directory",id:"directory",children:[]},{value:"Types",id:"types",children:[]},{value:"Hosts",id:"hosts",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Repository Tools",id:"repository-tools",children:[{value:"rephost type sha1.md5.length",id:"rephost-type-sha1md5length",children:[]},{value:"reppath type sha1.md5.length",id:"reppath-type-sha1md5length",children:[]},{value:"repexist type sha1.md5.length",id:"repexist-type-sha1md5length",children:[]},{value:"repcat type sha1.md5.length",id:"repcat-type-sha1md5length",children:[]},{value:"repwrite type sha1.md5.length &lt; input",id:"repwrite-type-sha1md5length--input",children:[]},{value:"repcopyin type source sha1.md5.length",id:"repcopyin-type-source-sha1md5length",children:[]}]},{value:"Repository Library",id:"repository-library",children:[{value:"REPCONF environment variable",id:"repconf-environment-variable",children:[]},{value:"int RepOpen ();",id:"int-repopen-",children:[]},{value:"void RepClose ();",id:"void-repclose-",children:[]},{value:"char <em> RepMkPath (char </em>Type, char *Filename);",id:"char--repmkpath-char-type-char-filename",children:[]},{value:"char * RepGetRepPath ();",id:"char--repgetreppath-",children:[]},{value:"char <em> RepGetHost (char </em>Path, char <em>Type, char </em>Filename);",id:"char--repgethost-char-path-char-type-char-filename",children:[]},{value:"int RepExist (char <em>Type, char </em>Filename);",id:"int-repexist-char-type-char-filename",children:[]},{value:"int RepHostExist (char <em>Type, char </em>Host);",id:"int-rephostexist-char-type-char-host",children:[]},{value:"int RepRemove (char <em>Type, char </em>Filename);",id:"int-repremove-char-type-char-filename",children:[]},{value:"FILE <em> RepFread (char </em>Type, char *Filename);",id:"file--repfread-char-type-char-filename",children:[]},{value:"FILE <em> RepFwrite (char </em>Type, char *Filename);",id:"file--repfwrite-char-type-char-filename",children:[]},{value:"int RepFclose (FILE *F);",id:"int-repfclose-file-f",children:[]},{value:"int RepImport (char <em>Source, char </em>Type, char *Filename, int HardLink);",id:"int-repimport-char-source-char-type-char-filename-int-hardlink",children:[]},{value:"RepMmapStruct <em> RepMmap (char </em>Type, char *Filename);",id:"repmmapstruct--repmmap-char-type-char-filename",children:[]},{value:"RepMmapStruct <em> RepMmapFile (char </em>Filename);",id:"repmmapstruct--repmmapfile-char-filename",children:[]},{value:"void RepMunmap (RepMmapStruct *M);",id:"void-repmunmap-repmmapstruct-m",children:[]}]}],p={toc:l};function h(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The file repository is used to store the actual files loaded into the FOSSology system. While the Database stores meta information about files, the Repository holds the actual files."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Each file is named after a pseudo-unique checksum: sha1.md5.length"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"sha1. This is the sha1 value of the file's contents.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"md5. This is the md5 value of the file's contents.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"length. This is size of the file's contents."))))),(0,i.kt)("p",null,"Although sha1 and md5 are relatively unique hashes, there is still a possibility of a hash collision. The working belief is that, while the triplet could have a collision, it is extremely unlikely."),(0,i.kt)("p",null,"Some notes about filenames:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Filenames can actually contain any characters, not just hex characters. ("happy',(0,i.kt)("em",{parentName:"p"},'go_lucky.txt" is a valid filename). The only real exceptions: a filename cannot begin with a dot and can only have characters in the set [a-zA-Z0-9@%'),".=+-]. All other filenames are invalid. (In particular, directory slashes, quotes, and shell commands are invalid.)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'All filenames are converted to lowercase. "HeLlO" is the same as "hello". This is done because hex characters are expected and "F" is the same as "f".'))),(0,i.kt)("h2",{id:"directory"},"Directory"),(0,i.kt)("p",null,"Since the repository can store hundreds of thousands of files, we want a quick way to organize the contents. The selected method is based on octets. For example, the file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ffe1cd8dd6b0b4c031262402ab0375ee876b17cb.732fe0681bc974f1075c4bee147c91f8.4232\n")),(0,i.kt)("p",null,'is stored in the directory "/ff/e1/cd/".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),': If the filename is shorter than the number of characters needed for the path, then the path is padded with underscores. The filename "abcde" would be stored as "ab/cd/e_/abcde".'),(0,i.kt)("h2",{id:"types"},"Types"),(0,i.kt)("p",null,"The repository must store many different types of files. The type of file determines the contents and the tool that uses it. Some example types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"gold"),". These denote the golden repository.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"files"),". These are the original, extracted files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"license"),". These are the FOSSology license cache files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"test"),". These files are reserved for testing."))),(0,i.kt)("p",null,'The type of file is prepended to the directory tree. Thus, the example file could be found under "/files/ff/e1/cd/".'),(0,i.kt)("p",null,"The different types are not static -- new types can be created at any time. (The type is specified when using the tool -- see below.)"),(0,i.kt)("p",null,"Some notes about types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type names can only have characters in the set ","[a-zA-Z0-9@%_=+-]",'. This is to prevent a type titled ".." from leaving the directory, or a type "Depth.conf" from screwing up the depth configuration file.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Type strings are case-sensitive. "Test" is different than "test".'))),(0,i.kt)("h2",{id:"hosts"},"Hosts"),(0,i.kt)("p",null,"In order load balance storage and processing, the files in the Repository can be distributed across NFS-mounted hosts. A host configuration file specifies which host actually stores which files."),(0,i.kt)("p",null,'The hostname is prepended to the path, so there only needs to be one mount point per host. For example, "/host1/files/ff/e1/cd/".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": If there is no host configuration file entry, then no hostname is prepended to the path."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,'The directory for storing the repository configuration files is /srv/fossology/repository/. If this does not exist, then "." is used. This can be changed (for testing) by specifying the environment variable "REPCONF". This should contain the path to the repository.'),(0,i.kt)("p",null,"fossology.conf contains some information relevant to repository configuration. The group REPOSITORY and the fields depth and path under the group FOSSOLOGY. The fields of depth and path relate to the location of files on the file system."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"depth")," of the file tree is a configurable parameter. As a result the desired depth is a parameter and if the parameter is not specified, default is 2.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"path")," is the path to the top of the repository. All repository mounts will happen under this directory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"REPOSITORY"),' example: "localhost[] = * 00 0ff"'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hostname[]: the name of the host. Since the same host name can appear on multiple lines this must be followed by [] to identify this"),(0,i.kt)("li",{parentName:"ul"},'Type: the type of files stored on the host. This is either a string or a "*" to denote "all types"'),(0,i.kt)("li",{parentName:"ul"},"Start: A series of lowercase octets that denote the beginning range of filenames for the host. This can be any length (it does not need to be a multiple of two)"),(0,i.kt)("li",{parentName:"ul"},"End a series of lowercase octets that denote the end range of filenames for the host.")))),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"host1[] = test 00 7f\nhost2[] = test 80 af\nhost3[] = test b000 b080\nhost1[] = gold 00 7f\nhost2[] = gold 80 ff\nhost4[] = * 00 ff\n")),(0,i.kt)("p",null,"In this example, the 'test' file (file type = \"test\") \"b081cd8dd6b0b4c031262402ab0375ee876b17cb.732fe0681bc974f1075c4bee147c91f8.4232\" would be stored on host4, but the same filename would be on host2's 'gold' repository."),(0,i.kt)("p",null,"Some notes about using the Hosts.conf configuration file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Two host entries can cover the same range. The first one listed wins. There is no "fallback" to the next entry if a file does not exist.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If no viable host is found in the Hosts.conf file, then it defaults to storing on the localhost with no hostname prepended."))),(0,i.kt)("h2",{id:"repository-tools"},"Repository Tools"),(0,i.kt)("p",null,"The following command-line tools exist for managing the repository:"),(0,i.kt)("h3",{id:"rephost-type-sha1md5length"},"rephost type sha1.md5.length"),(0,i.kt)("p",null,"This displays the hostname where the file would be found or stored. This is used for optimizing processing by running a process on a local host rather than accessing files remotely. If no hostname is found, then localhost is returned."),(0,i.kt)("p",null,"Note: This does not check if the file exists. It only says where the file could be found."),(0,i.kt)("h3",{id:"reppath-type-sha1md5length"},"reppath type sha1.md5.length"),(0,i.kt)("p",null,"This tool displays the path to the file (reading, writing, or debugging)."),(0,i.kt)("p",null,"Note: This does not check if the file exists, or even if the directories are valid. It only says where the file could be found."),(0,i.kt)("h3",{id:"repexist-type-sha1md5length"},"repexist type sha1.md5.length"),(0,i.kt)("p",null,'Determine if the file exists in the repository. This is for use in shell scripts: returns "0" for yes, "1" for no.'),(0,i.kt)("h3",{id:"repcat-type-sha1md5length"},"repcat type sha1.md5.length"),(0,i.kt)("p",null,"If the file exists, cat the contents to stdout."),(0,i.kt)("h3",{id:"repwrite-type-sha1md5length--input"},"repwrite type sha1.md5.length < input"),(0,i.kt)("p",null,"Creates a file in the repository."),(0,i.kt)("h3",{id:"repcopyin-type-source-sha1md5length"},"repcopyin type source sha1.md5.length"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"echo 'source sha1.md5.length' | repcopyin type")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"cat 'XML from ununpack' | repcopyin type XML")),(0,i.kt)("p",null,"Bulk-populates the repository. There are three use options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The command-line specifies the source and destination names.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The command-line specifies only the type of repository. Stdin contains pairs of destination and source names, one pair per line.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The command-line specifies the type of repository and XML. Stdin contains an XML file generated by Ununpack."))),(0,i.kt)("p",null,"All files are inserted into the repository. But, if the file already exists, then it is not copied in again. (This is for a speed improvement.)"),(0,i.kt)("p",null,"The program displays the total number of files imported, duplicated (not imported), and errors (failed to import)."),(0,i.kt)("h2",{id:"repository-library"},"Repository Library"),(0,i.kt)("p",null,"The repository is managed by a C library: librep.a and librep.h. This library contains the following common functions:"),(0,i.kt)("h3",{id:"repconf-environment-variable"},"REPCONF environment variable"),(0,i.kt)("p",null,'The environment variable REPCONF specifies the configuration directory for the repository. If this is not set, then /srv/fossology/repository/ is used. (And if that does not exist, then the current directory (".") is used.)'),(0,i.kt)("h3",{id:"int-repopen-"},"int RepOpen ();"),(0,i.kt)("p",null,"Since the repository configuration files may be accessed by every function call, we don't want to call fopen/fclose millions of times. This opens and sets up global variables. You should call this first -- but if you forget, then it is called anyways by all of the other repository functions. Returns 1 if it is configured, 0 if configuration failed."),(0,i.kt)("h3",{id:"void-repclose-"},"void RepClose ();"),(0,i.kt)("p",null,"This closes all global variables. It is proper to call this when you are done, but if you forget... shared memory will not be lost."),(0,i.kt)("p",null,"NOTE: If you want to refresh the configuration, then call: RepClose(); RepOpen();"),(0,i.kt)("h3",{id:"char--repmkpath-char-type-char-filename"},"char ",(0,i.kt)("em",{parentName:"h3"}," RepMkPath (char "),"Type, char *Filename);"),(0,i.kt)("p",null,"Allocate a string containing a path for the type and file. Returns a string, or NULL if the type/filename is invalid (or an allocation error occurs)."),(0,i.kt)("p",null,'The depth of the path is determined by the value in $REPCONF/Depth.conf. If this file does not exist, then the default is "2". The caller is responsible for calling free().'),(0,i.kt)("h3",{id:"char--repgetreppath-"},"char * RepGetRepPath ();"),(0,i.kt)("p",null,"Allocate a string containing the path to the top of the repository. Returns NULL if an error occurred. The caller is responsible for calling free()."),(0,i.kt)("h3",{id:"char--repgethost-char-path-char-type-char-filename"},"char ",(0,i.kt)("em",{parentName:"h3"}," RepGetHost (char "),"Path, char ",(0,i.kt)("em",{parentName:"h3"},"Type, char "),"Filename);"),(0,i.kt)("p",null,"Allocate a string containing the hostname where the file is stored. The hostname is determined from the $REPPATH/Hosts.conf file. Returns a string if the hostname was found. Returns NULL if there is no hostname OR if an error occurred. The caller is responsible for calling free()."),(0,i.kt)("h3",{id:"int-repexist-char-type-char-filename"},"int RepExist (char ",(0,i.kt)("em",{parentName:"h3"},"Type, char "),"Filename);"),(0,i.kt)("p",null,"Determines if the type+file exists in the repository. Returns 1 if it exists. Returns 0 if it does not exist. Returns -1 if an error occurred."),(0,i.kt)("h3",{id:"int-rephostexist-char-type-char-host"},"int RepHostExist (char ",(0,i.kt)("em",{parentName:"h3"},"Type, char "),"Host);"),(0,i.kt)("p",null,"Determines if the type+hostname exists in the repository. This is useful for determining of this particular host stores any files of the given type. Returns 1 if it exists. Returns 0 if it does not exist. Returns -1 if an error occurred."),(0,i.kt)("h3",{id:"int-repremove-char-type-char-filename"},"int RepRemove (char ",(0,i.kt)("em",{parentName:"h3"},"Type, char "),"Filename);"),(0,i.kt)("p",null,"Remove a file from the repository. Returns the result from unlink() -- 0 on success. If there is an error, then a non-zero value is returned."),(0,i.kt)("h3",{id:"file--repfread-char-type-char-filename"},"FILE ",(0,i.kt)("em",{parentName:"h3"}," RepFread (char "),"Type, char *Filename);"),(0,i.kt)("p",null,'This is a replacement for fopen(filename,"rb"). It returns a FILE pointer to the type+filename, or NULL on error. The caller should run RepFclose() when they are finished.'),(0,i.kt)("h3",{id:"file--repfwrite-char-type-char-filename"},"FILE ",(0,i.kt)("em",{parentName:"h3"}," RepFwrite (char "),"Type, char *Filename);"),(0,i.kt)("p",null,'This is a replacement for fopen(filename,"wb"). This function will also create the repository\'s directory if it is needed. It returns a FILE pointer to the type+filename, or NULL on error. The caller should run RepFclose() when they are finished.'),(0,i.kt)("h3",{id:"int-repfclose-file-f"},"int RepFclose (FILE *F);"),(0,i.kt)("p",null,"This is a replacement for fclose(FilePointer). This returns the value from fclose()."),(0,i.kt)("h3",{id:"int-repimport-char-source-char-type-char-filename-int-hardlink"},"int RepImport (char ",(0,i.kt)("em",{parentName:"h3"},"Source, char "),"Type, char *Filename, int HardLink);"),(0,i.kt)("p",null,"This is a really fast file copy. If HardLink is set (not zero), then it will use a hard link before trying a regular file copy (making it REALLY fast). The contents from Source are copied into the repository. This returns 0 on success, non-zero on failure."),(0,i.kt)("h3",{id:"repmmapstruct--repmmap-char-type-char-filename"},"RepMmapStruct ",(0,i.kt)("em",{parentName:"h3"}," RepMmap (char "),"Type, char *Filename);"),(0,i.kt)("p",null,"This is a replacement for mmap(). The file is opened for read-only access! Do not use this command to create a new file. It allocates and returns a structure containing the mmap handle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C"},"struct RepMmapStruct\n  {\n  int FileHandle; /* handle from open() */\n  unsigned char *Mmap; /* memory pointer from mmap */\n  int MmapSize; /* size of mmap */\n  };\ntypedef **struct** RepMmapStruct RepMmapStruct;\n")),(0,i.kt)("p",null,"The caller must call RepMunmap() to free the structure."),(0,i.kt)("h3",{id:"repmmapstruct--repmmapfile-char-filename"},"RepMmapStruct ",(0,i.kt)("em",{parentName:"h3"}," RepMmapFile (char "),"Filename);"),(0,i.kt)("p",null,"Similar to RepMmap(), but takes a full filename as a parameter rather than a repository entry. (Technically, this is used by the RepMmap() function.)"),(0,i.kt)("h3",{id:"void-repmunmap-repmmapstruct-m"},"void RepMunmap (RepMmapStruct *M);"),(0,i.kt)("p",null,"This un-mmaps and deallocates the RepMmapStruct variable created by RepMmap() and RepMmapFile()."))}h.isMDXComponent=!0}}]);