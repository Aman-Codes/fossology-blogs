(self.webpackChunkfossology_blogs=self.webpackChunkfossology_blogs||[]).push([[1841],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return n?i.createElement(u,r(r({ref:t},c),{},{components:n})):i.createElement(u,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7556:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),r={},l={unversionedId:"docs/Email-notification-configuration",id:"docs/Email-notification-configuration",isDocsHomePage:!1,title:"Email notifications",description:"FOSSology have the capabilities of send an email to the users every time any of their job finishes, i.e when every agent assigned for the job finishes their task. This can be configured by following the steps in this page.",source:"@site/docs/docs/Email-notification-configuration.md",sourceDirName:"docs",slug:"/docs/Email-notification-configuration",permalink:"/fossology-blogs/docs/docs/Email-notification-configuration",editUrl:"https://github.com/Aman-Codes/fossology-blogs/edit/master/docs/docs/Email-notification-configuration.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ECC",permalink:"/fossology-blogs/docs/docs/ECC"},next:{title:"External-authentication-configuration",permalink:"/fossology-blogs/docs/docs/External-authentication-configuration"}},s=[{value:"Enabling email notification for users",id:"enabling-email-notification-for-users",children:[]},{value:"Setting up the email client",id:"setting-up-the-email-client",children:[]},{value:"Setting up email body",id:"setting-up-email-body",children:[{value:"The email header",id:"the-email-header",children:[]},{value:"The email footer",id:"the-email-footer",children:[]},{value:"Email subject",id:"email-subject",children:[]},{value:"Macros",id:"macros",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"FOSSology have the capabilities of send an email to the users every time any of their job finishes, i.e when every agent assigned for the job finishes their task. This can be configured by following the steps in this page."),(0,o.kt)("h2",{id:"enabling-email-notification-for-users"},"Enabling email notification for users"),(0,o.kt)("p",null,"While adding or editing a user, there is an option to either enable or disable the email notification for the user. If the option is enabled, the user will receive email notification on their job completion else not."),(0,o.kt)("h2",{id:"setting-up-the-email-client"},"Setting up the email client"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"heirloom-mailx")," is installed side-by-side during the installation of FOSSology. ",(0,o.kt)("inlineCode",{parentName:"p"},"heirloom-mailx")," don't require a separate MTA to send emails over SMTP protocol."),(0,o.kt)("p",null,"If heirloom-mailx is not installed in your system, you can install using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in Debian based distro: ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt-get install heirloom-mailx")),(0,o.kt)("li",{parentName:"ul"},"in Red-Hat based distro: ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo yum install mailx"))),(0,o.kt)("p",null,"You must provide the connection information to the email server to the email client. This can be done with the Customize page under the Admin tab. The following fields are required in the page:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SMTP Host Name"),(0,o.kt)("p",{parentName:"li"},"  The domain/hostname of the SMTP server. e.g.: smtp.domain.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SMTP Port"),(0,o.kt)("p",{parentName:"li"},"  The port to which the client must connect. Standard port 25 for non-ssl connections, 465 for SSL connections and 587 for TLS connections. (Contact your network admin).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SMTP Auth Type"),(0,o.kt)("p",{parentName:"li"},"  heirloom-mailx support following authentication types:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Plain => The username and password are sent as plain text over the network (unsafe).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login => The username and password are sent as hashed text over the network (safe).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"None  => No authentication required to send mail."),(0,o.kt)("p",{parentName:"li"},"Contact network admin for the supported authentication type in your premises.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SMTP User"),(0,o.kt)("p",{parentName:"li"},"  The email address of the send from which the mail will be sent. Same email address will be used for logging in the SMTP server.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SMTP Login Password"),(0,o.kt)("p",{parentName:"li"},"  The password for the provided email address for logging in the SMTP server.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SMTP SSL verify"),(0,o.kt)("p",{parentName:"li"},"  If your SMTP server provides SSL connection, it can be verified by heirloom-mailx. Following options are supported:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Strict => The connection will fail if SSL can not be verified.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Warn   => The user will be warned if the SSL can not be verified, but the connection will not fail.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ignore => Do not verify the connection."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Note:")," For SSL verification, the host machine must have a SSL certificate and the SMTP server must have a copy of machine's SSL certificate.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Start TLS"),(0,o.kt)("p",{parentName:"li"},"  If your SMTP server require TLS connection (secure), put as 'Yes' otherwise put as 'No'."))),(0,o.kt)("h2",{id:"setting-up-email-body"},"Setting up email body"),(0,o.kt)("p",null,"Every email sent by FOSSology utilities two different files namely a header and a footer template and a few macros which can be placed in these templates as a placeholder. These macros are expanded at the runtime."),(0,o.kt)("h3",{id:"the-email-header"},"The email header"),(0,o.kt)("p",null,"Email header is the file which comes first in the email body. It is a simple text file and a sample is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"install/defconf/sampleheader.txt"),". The file can be changed, renamed or placed somewhere else with read access for ",(0,o.kt)("inlineCode",{parentName:"p"},"fossy")," user. The location of the file is located in the fossology.conf file (",(0,o.kt)("inlineCode",{parentName:"p"},"install/defconf/fossology.conf.in"),") under the header ",(0,o.kt)("inlineCode",{parentName:"p"},"[EMAILNOTIFY]")," and name ",(0,o.kt)("inlineCode",{parentName:"p"},"header"),". You can provide an absolute path or a relative path to fossology.conf file."),(0,o.kt)("h3",{id:"the-email-footer"},"The email footer"),(0,o.kt)("p",null,"It is same as the header file but it is placed after the header file in the email body. Sample file can be located in ",(0,o.kt)("inlineCode",{parentName:"p"},"install/defconf/samplefooter.txt"),". The path of the file is stored in fossology.conf file under the header ",(0,o.kt)("inlineCode",{parentName:"p"},"[EMAILNOTIFY]")," and name ",(0,o.kt)("inlineCode",{parentName:"p"},"footer"),"."),(0,o.kt)("h3",{id:"email-subject"},"Email subject"),(0,o.kt)("p",null,"The subject of the email being sent by the FOSSology is located in fossology.conf under the header ",(0,o.kt)("inlineCode",{parentName:"p"},"[EMAILNOTIFY]")," and name ",(0,o.kt)("inlineCode",{parentName:"p"},"subject"),". To change the subject, simply modify the field."),(0,o.kt)("h3",{id:"macros"},"Macros"),(0,o.kt)("p",null,"FOSSology currently support following macros in ether the header or footer file."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"$UPLOADNAME"),(0,o.kt)("p",{parentName:"li"},"Replaced by the name of the file that was uploaded.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"$BROWSELINK"),(0,o.kt)("p",{parentName:"li"},"Replaced by the URL that will link to the upload in the browse menu of the user interface.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"$JOBQUEUELINK"),(0,o.kt)("p",{parentName:"li"},"Replaced by the URL that will link to the job queue.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"$SCHEDULERLOG"),(0,o.kt)("p",{parentName:"li"},"Replaced by the URL that will link to the log file produced by the agent.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"$UPLOADFOLDERNAME"),(0,o.kt)("p",{parentName:"li"},"Replaced by the absolute path of the folder that the upload was stored under.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"$AGENTSTATUS"),(0,o.kt)("p",{parentName:"li"},"Replaced by a detailed list of agent run on the upload with their job ID, name and pass/fail status and a direct link to agent log file in case of failed agent.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"$DB.<table_name>.<column_name>"),(0,o.kt)("p",{parentName:"li"},"This macro is currently unimplemented."))))}c.isMDXComponent=!0}}]);