(self.webpackChunkfossology_blogs=self.webpackChunkfossology_blogs||[]).push([[4166],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=u(n),d=l,h=k["".concat(s,".").concat(d)]||k[d]||c[d]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6676:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var a=n(2122),l=n(9756),o=(n(7294),n(3905)),r={},i={unversionedId:"docs/Buckets",id:"docs/Buckets",isDocsHomePage:!1,title:"Buckets",description:"This page is a near duplicate of CreatingandUsingBucketpools. This should be cleaned up.",source:"@site/docs/docs/Buckets.md",sourceDirName:"docs",slug:"/docs/Buckets",permalink:"/fossology-blogs/docs/docs/Buckets",editUrl:"https://github.com/Aman-Codes/fossology-blogs/edit/master/docs/docs/Buckets.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Autoloading",permalink:"/fossology-blogs/docs/docs/Autoloading"},next:{title:"Building Fossology using [[project builder| http://www.project-builder.org/]]",permalink:"/fossology-blogs/docs/docs/Building-Fossology-using-pbuilder"}},s=[{value:"Bucket Pools",id:"bucket-pools",children:[]},{value:"Bucket Definitions",id:"bucket-definitions",children:[{value:"Table: bucket_def",id:"table-bucket_def",children:[]},{value:"Column: bucket_type",id:"column-bucket_type",children:[]}]},{value:"Custom tables and data files",id:"custom-tables-and-data-files",children:[]},{value:"Example 1: Hello World (shell)",id:"example-1-hello-world-shell",children:[]},{value:"Example 2: Simple PHP script",id:"example-2-simple-php-script",children:[{value:"Notes",id:"notes",children:[]}]}],u={toc:s};function p(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page is a near duplicate of ",(0,o.kt)("a",{parentName:"p",href:"http://www.fossology.org/projects/fossology/wiki/Creating_and_Using_Bucketpools"},"Creating_and_Using_Bucketpools"),". This should be cleaned up."),(0,o.kt)("h1",{id:"creating-bucket-pools"},"Creating Bucket Pools"),(0,o.kt)("p",null,'Buckets are methods to classify, or group, data for reports. Introduced in v1.2, the original idea was to allow users to classify licenses by their own value system. For example, buckets can report files by "Good Licenses" and "Bad Licenses", "Academic Licenses", "Copyleft Licenses", "Packages that had licenses I liked before but now contain licenses that I don\'t like", ...'),(0,o.kt)("p",null,"Although license classification was the original requirement, buckets are not limited to classifying licenses. For example, if one wants to report files by copyright holder, or by file type, or files without my copyright, or by any other data you have access to, you can."),(0,o.kt)("p",null,"As introduced in v1.2, there is no FOSSology user interface to create bucket pools, bucket definitions, scripts, or anything else you need. The purpose of this page is to explain how to create these files and database records."),(0,o.kt)("h2",{id:"bucket-pools"},"Bucket Pools"),(0,o.kt)("p",null,"A bucket pool is a set of bucket definitions. The first step in creating a bucket pool is to add a bucketpool table record:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Table: bucketpool")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Column"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bucketpool_pk"),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"Primary key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bucketpool_name"),(0,o.kt)("td",{parentName:"tr",align:null},"text"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of bucket pool")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"version"),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"1,2,3, ...")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"active"),(0,o.kt)("td",{parentName:"tr",align:null},"char(1)"),(0,o.kt)("td",{parentName:"tr",align:null},"'Y' if bucketpool can be used, 'N' if the results of this bucket pool are to be ignored. This is a quick way to hide results and make sure no one uses this pool")))),(0,o.kt)("p",null,"It is important to add a new bucketpool record with an incremented version when you change any bucket definition for this pool. Internally, only the bucketpool_pk is used to identify a bucket, but the version is displayed to help users know which version is the latest."),(0,o.kt)("p",null,"All bucket results are tagged with the bucket agent_pk and bucketpool_pk. This allows multiple sets of bucket data for a given upload. Because of this, one could write a user interface that displays the difference between different different bucketpools, or different versions of the same pool. The immediate benefit to having a new set of results with each change in bucket agent or bucket pool is that bucket url's are persistent. If you give someone a url with results from bucketpool 1, then you create a new version (bucketpool 2) then the old url will continue to give the same results as before. By default, the latest bucket results are displayed."),(0,o.kt)("p",null,"The bucket_ars table is an audit trail recording each time the bucket agent is run. This audit trail is also used by the bucket agent to determine if it should run. That is, if the bucket agent sees that it already successfully processed the same repository data with the same bucketpool_pk, bucket agent_pk, and nomos license scanner agent_pk, then it will refuse to run it again and a message to that effect will be written to the fossology log file."),(0,o.kt)("p",null,"bucket_ars is defined as an inherited table."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE TABLE bucket_ars (\n    nomosagent_fk integer,\n    bucketpool_fk integer\n)\nINHERITS (ars_master);\n")),(0,o.kt)("h2",{id:"bucket-definitions"},"Bucket Definitions"),(0,o.kt)("h3",{id:"table-bucket_def"},"Table: bucket_def"),(0,o.kt)("p",null,"The bucket_def table defines the rules (buckets) for a given bucketpool."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"column"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bucket_pk"),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"Primary key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bucket_name"),(0,o.kt)("td",{parentName:"tr",align:null},"text"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of bucket")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bucket_color"),(0,o.kt)("td",{parentName:"tr",align:null},"text"),(0,o.kt)("td",{parentName:"tr",align:null},'Buckets are color coded when displayed in a report. This allows you to create visual cues to highlight results. For example, you could make some buckets red to draw your attention to them in the report. Values for this field are web colors like "red", "green", "lavender", or numeric values like \'#fe0922\'.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bucket_reportorder"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Order bucket gets reported if report has no other intrinsic order.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bucket_evalorder"),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"Order bucket is evaluated in pool. In other words, a bucket with evalorder 10 will get evaluated before a bucket with evalorder 20. The evaluation order is critical when you have buckets with stopon=Y.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bucketpool_fk"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Foreign key to bucketpool_pk")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bucket_type"),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"1=MATCH_EVERY, 2=MATCH_ONLY, 3=REGEX, 4=EXEC, 5=REGEX-FILE, 99=Not in any other bucket.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bucket_regex"),(0,o.kt)("td",{parentName:"tr",align:null},"text"),(0,o.kt)("td",{parentName:"tr",align:null},"Regular expression (posix extended) for bucket_type=3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bucket_filename"),(0,o.kt)("td",{parentName:"tr",align:null},"text"),(0,o.kt)("td",{parentName:"tr",align:null},"data file name for types 1,2,4,5. Data files are located in ",(0,o.kt)("inlineCode",{parentName:"td"},"$PROJECTSTATEDIR/bucketpools/{bucketpool_pk}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"stopon"),(0,o.kt)("td",{parentName:"tr",align:null},"char(1)"),(0,o.kt)("td",{parentName:"tr",align:null},"If this rule is a match and stopon='Y', then don't continue evaluating other bucket rules. If stopon='N', then continue checking rules whether this one matched or not.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"applies_to"),(0,o.kt)("td",{parentName:"tr",align:null},"char(1)"),(0,o.kt)("td",{parentName:"tr",align:null},"'f' if rule applies to every file. 'p' if rule only applies to (rpm or debian) packages.")))),(0,o.kt)("h3",{id:"column-bucket_type"},"Column: bucket_type"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Match Every")),(0,o.kt)("p",null,"A type 1 (MATCH_EVERY) file contains pipe separated lists of licenses (one list per line). A file that contains EVERY license on a line will be in this bucket. The file may contain additional licenses, but if the combination on a MATCH_EVERY file line is found, then the file is in this bucket."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"APSL\n\nGPL | MPL\n\nGPL | OSL\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Match Only")),(0,o.kt)("p",null,"A type 2 (MATCH_ONLY) file contains a list of licenses (one per line). To be in this bucket, a file must ONLY contain licenses found in this file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GPL\n\nGPL_v1\n\nGPL_v1+\n\nGPL_v2\n\nGPL_v2+\n\netc\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"REGEX")),(0,o.kt)("p",null,"Type 3, (REGEX) means that a posix type regular expression is in the bucket_regex field."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(GPL_?v3|Affero_?v3)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EXEC")),(0,o.kt)("p",null,"Type 4, (EXEC) tells the bucket agent to execute the program in bucket_filename. Typically these are scripts (see examples below). This is the most complex, and most flexible bucket type."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"REGEX File")),(0,o.kt)("p",null,"The REGEX_FILE type is in the format: {kwd} {regex} {operator} {kwd} {regex}"),(0,o.kt)("p",null,'kwd is "license" or "filename" '),(0,o.kt)("p",null,'operator is "and", "or", "not" '),(0,o.kt)("p",null,"The operator and following kwd, regex are optional"),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' license "[^,]*(GPL_?v3|Affero_v3)[^,]*" and filename binutils\n  filename realplayer.*\n  filename ksh and license ATT\n  license .*-eula\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"99 *")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This is a special bucket type for files that didn't go into any other bucket."))),(0,o.kt)("h1",{id:"multiple-bucket-pools"},"Multiple Bucket Pools"),(0,o.kt)("p",null,"You can have as many bucket pools as you like. Users can set their default bucket in their account settings. As of this writing there isn't a way for users to pick the bucket they want to use (it uses their default bucket). That might or might not change before the 1.2 release."),(0,o.kt)("h1",{id:"rerunning-buckets"},"Rerunning Buckets"),(0,o.kt)("p",null,"When you create a new bucket pool, you might need multiple attempts to get the definitions right. Or you might be creating a new bucket pool that is just an update of a previous one. In either case you will need to rerun the bucket agent on the same upload. In v 1.2, you need to create a new bucket pool (bucketpool and bucket_def records), then go to Admin > Users > Account settings and pick the new default bucket pool. Then in Show Jobs, delete the bucket job. Finally, in Jobs > Agents, queue up a new bucket agent job."),(0,o.kt)("p",null,"If you want to rerun ALL the bucket jobs you have done and throw away all the bucket results, then do this in psql:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"fossology=# delete from bucket_container; delete from bucket_file;\n delete from bucket_ars;\n\nupdate jobqueue set jq_starttime=null, jq_endtime=null, jq_endtext=null, \n       jq_end_bits=0, jq_elapsedtime=0, jq_processedtime=0, jq_itemsprocessed=0 \n       where jq_type='buckets';\n\ndelete from report_cache;\n")),(0,o.kt)("h1",{id:"deleting-bucket-results"},(0,o.kt)("strong",{parentName:"h1"},"Deleting Bucket Results")),(0,o.kt)("p",null,"When you are working on bucket definitions, sometimes it's nice to run a bucket scan and then delete the data you just created, change a definition, rerun, repeat, all without creating a new bucket pool or changing your default bucket pool."),(0,o.kt)("p",null,"To erase the data you just created, there are three tables that need to be updated: bucket_ars, bucket_container, and bucket_file. The first two are easy, the last is not. In the following, lets assume you are working with upload_pk = 456."),(0,o.kt)("p",null,"Since the bucket_ars table recorded the last bucket scan, delete that record. It's only a single record and it's easy to identify. If this upload is only used for testing, you can just:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"delete from bucket_ars where upload_fk=456;\n")),(0,o.kt)("p",null,"The bucket_container table says what buckets apply to containers (directories, tars, ...). Each record is tagged with an uploadtree_pk, so to delete all the bucket_container recs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"delete from bucket_container where uploadtree_fk \n\nin (select uploadtree_pk from uploadtree where upload_fk=456);\n")),(0,o.kt)("p",null,"Removing records from the bucket_file table is not so easy because these records are tagged to a physical file (pfile_pk). Multiple uploads may refer to the same physical file so you can't simply delete bucket_file records that refer to a given pfile because that record records the bucket for all uploads that refer to that pfile. This is a good thing because it means once a file has been scanned, it doesn't have to be scanned again just because it's uploaded again. But it means that before you delete a bucket_file record you have to make sure that the pfile isn't used by another upload."),(0,o.kt)("p",null,"There is a corner case where you might want to delete ALL bucket records. For example, you might be working on a test fossology installation to develop your buckets. In this case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"delete from bucket_ars;\n\ndelete from bucket_file;\n\ndelete from bucket_container;\n")),(0,o.kt)("h1",{id:"bucket-scripts"},(0,o.kt)("strong",{parentName:"h1"},"Bucket Scripts")),(0,o.kt)("p",null,"The EXEC type bucket will execute any program and pass the following environment variables to it:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Variable"),(0,o.kt)("td",null,"Description")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"FILENAME"),(0,o.kt)("td",null,"Name of file being scanned")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"LICENSES"),(0,o.kt)("td",null,"Pipe separated list of licenses for this file")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"PKGVERS"),(0,o.kt)("td",null,"Package version from the package header")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"VENDOR"),(0,o.kt)("td",null,"Vendor from the package header")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"PKGNAME"),(0,o.kt)("td",null,'simple package name (e.g. "cup", "mozilla-mail", ...) of file being checked. Only applies to packages.')),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SRCPKGNAME"),(0,o.kt)("td",null,"Source Package Name")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"UPLOADTREE_PK"),(0,o.kt)("td",null,"uploadtree_pk")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"PFILE_PK"),(0,o.kt)("td",null,"pfile_pk")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"PKGTYPE"),(0,o.kt)("td",null,"'s' if source, 'b' if binary package, '' if not a package"))),(0,o.kt)("h2",{id:"custom-tables-and-data-files"},"Custom tables and data files"),(0,o.kt)("p",null,"You can create whatever custom tables and files that you need. FOSSology won't remove tables in the database that it didn't create. Data files can be located anywhere, including ",(0,o.kt)("inlineCode",{parentName:"p"},"$PROJECTSTATEDIR/bucketpools/{bucketpool_pk}"),"."),(0,o.kt)("h1",{id:"examples"},(0,o.kt)("strong",{parentName:"h1"},"Examples")),(0,o.kt)("h2",{id:"example-1-hello-world-shell"},"Example 1: Hello World (shell)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Bash"},' #!/bin/bash\n  # Everthing will get put into this bucket because it always returns zero (success)\n  cd /tmp\n  echo "FILENAME: ", $FILENAME >> testexec.out\n  echo "LICENSES: ", $LICENSES >> testexec.out\n  echo "PKGNAME: ", $PKGNAME >> testexec.out\n  echo "PKGVERS: ", $PKGVERS >> testexec.out\n  echo "VENDOR: ", $VENDOR >> testexec.out\n  echo "SRCPKGNAME: ", $SRCPKGNAME >> testexec.out\n  echo "UPLOADTREE_PK: ", $UPLOADTREE_PK >> testexec.out\n  echo "PFILE_PK: ", $PFILE_PK >> testexec.out\n  echo "PKGTYPE: ", $PKGTYPE >> testexec.out\n  echo "LOG: testexec is done (this will be written to the fossology log file)" \n  # return success\n  exit 0\n')),(0,o.kt)("h2",{id:"example-2-simple-php-script"},"Example 2: Simple PHP script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-PHP"},'#!/usr/bin/php\n<?php\n  global $GlobalReady;\n  $GlobalReady = 1;   // required for pathinclude.php to read common php functions\n  // pathinclude.php defines global variables $WEBDIR, $SYSCONFDIR, etc\n  require_once (\'/usr/local/share/fossology/php/pathinclude.php\');\n  require_once ("$WEBDIR/common/common.php");\n\n  $path="$SYSCONFDIR/$PROJECT/Db.conf";\n\n  $PG_CONN = pg_pconnect(str_replace(";", " ", file_get_contents($path)));\n  if ($PG_CONN === false)\n  { \n    echo "FATAL: failed to open fossology db\\n";\n    return(1);\n  }\n\n  $sql = "select count(*) as count from license_file";\n  $result = pg_query($PG_CONN, $sql);\n  DBCheckResult($result, $sql, __FILE__, __LINE__);\n  $row = pg_fetch_assoc($result);\n  pg_free_result($result);\n  echo "license_file count is $row[count]\\n";\n\n  echo "LOG: hello from db connected php script\\n";\n\n  $envVals = array("FILENAME", "PKGNAME", "SRCPKGNAME", "LICENSES", "PKGVERS",\n                   "VENDOR", "UPLOADTREE_PK", "PFILE_PK", "PKGTYPE");\n  foreach ($envVals as $envVal) echo $envVal, getenv($envVal)," \\n";\n\n  pg_close($PG_CONN);\n  echo "LOG: Good-bye\\n";\n  return 0;\n?>\n')),(0,o.kt)("h1",{id:"step-by-step"},(0,o.kt)("strong",{parentName:"h1"},"Step by Step")),(0,o.kt)("p",null,'Buckets were made to be defined by an IT or sysadmin person because of the technical skill required. Specifically, they should understand regular expressions and possibly scripting. If you aren\'t a programmer or system administrator the term "regular expression" probably means nothing to you. So for this step by step, just enter in the values I specify in the instructions.'),(0,o.kt)("p",null,'Here are step by step instructions for creating a bucketpool called "mybuckets" and a bucket to group all the Apache Software Foundation licenses. I am assuming that you know how to insert records into a database. For example, you might use phppgadmin, pgadminIII, or psql. If you want a simple web interface to the database, install phppgadmin.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1) Create a bucketpool record in the fossology database.")),(0,o.kt)("p",null,"Buckets are used in sets called bucketpools. So you could have a bucket pool called \"my experiments\". In this pool you will create your apache bucket. So the first step is to insert a bucketpool record into the database table 'bucketpool'. If you are unfamiliar with sql, you can use a program like phppgadmin which will give you a web browser interface to the database. I'm going to assume you have phppgadmin installed and know how to use it to browse the fossology database. To add a new bucketpool record, click on table 'bucketpool', then Insert. Type in a bucketpool name, and a description of what this bucket pool is for and then click on Insert. You won't need to change any of the other default values."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2) Get the bucketpool key.")),(0,o.kt)("p",null,"After you insert the bucket pool record in step 1, stay in phppgadmin and click on the bucketpool table, then click on 'Browse'. This will show you a list of all your bucketpool records. The one you just added should be the last one. Look at the bucketpool_pk of the record you just added and remember it. If your only other bucketpool is the demo, then your new one should be bucketpool_pk = 2. But whatever it is, remember it for step 3."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3) Create the bucket definition")," (the actual bucket that will group all the different apache license versions)."),(0,o.kt)("p",null,"In phppgadmin, click on table 'bucket_def', then insert. Leave all the default values for now. Fill in the following fields:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'bucket_name This is the name of your bucket. In this case something like "All Apache Licenses" seems appropriate.'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"bucketpool_fk This is the bucketpool_pk that you remember from step 2. Don't worry that one is called _fk and the other is _pk, that is not an error."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"bucket_type Enter the number 3"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'bucket_regex Enter "apache" (but without the quotes)'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"bucket_filename Click on the Null checkbox"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Hit insert")))),(0,o.kt)("p",null,"To add more bucket definitions to the same bucketpool, all you need to do is repeat step 3. You should create one more bucket."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4) Create bucket for all files that are not in any other bucket.")),(0,o.kt)("p",null,"It is important that every file go into a bucket. This is what bucket_type 99 is for. "),(0,o.kt)("p",null,"Repeat step 3:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'bucket_name "Not in any other bucket"'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"bucket_evalorder 1000"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"bucketpool_fk same as in step 3"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"bucket_type 99"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"bucket_regex click on NULL checkbox"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"bucket_filename click on NULL checkbox"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Hit insert")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5) make your new bucket your default")),(0,o.kt)("p",null,'If you have gotten this far, your new bucketpool and bucket are defined and ready to use, so make your new bucketpool your default. In the fossology user interface, click on "Admin" > "Users" > "Account Settings" to change your user settings.'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Enter your password in the "enter your password" field.'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Where it says "Default bucketpool", select your new bucketpool from the pull down.'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Click on "Update" to update your account.')))),(0,o.kt)("p",null,'You are all set. To use your new bucket, upload a file and select "Buckets" as one of the scans you want to run.'),(0,o.kt)("p",null,"If you are successful with the above, then I can tell you more about more complicated buckets."),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"As you can see from the above, a lot more could be done to make buckets easier to define and use. Your vote counts.")))}p.isMDXComponent=!0}}]);