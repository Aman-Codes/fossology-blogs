(self.webpackChunkfossology_blogs=self.webpackChunkfossology_blogs||[]).push([[4927],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return g},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,u=p["".concat(s,".").concat(h)]||p[h]||m[h]||i;return a?n.createElement(u,o(o({ref:t},g),{},{components:a})):n.createElement(u,o({ref:t},g))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2587:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return g}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o={},l={unversionedId:"docs/Git-basic-commands",id:"docs/Git-basic-commands",isDocsHomePage:!1,title:"Git-basic-commands",description:"The FOSSology project was originally using SVN. At some point it was transferred to Github. This quick reference guide assumes you are already familiar with basic git concepts but could help with the transition.",source:"@site/docs/docs/Git-basic-commands.md",sourceDirName:"docs",slug:"/docs/Git-basic-commands",permalink:"/fossology-blogs/docs/docs/Git-basic-commands",editUrl:"https://github.com/Aman-Codes/fossology-blogs/edit/master/docs/docs/Git-basic-commands.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"General-Administration-Notes",permalink:"/fossology-blogs/docs/docs/General-Administration-Notes"},next:{title:"Global-System-Configuration-Variables",permalink:"/fossology-blogs/docs/docs/Global-System-Configuration-Variables"}},s=[{value:"Git Installation",id:"git-installation",children:[]},{value:"Git Documentation",id:"git-documentation",children:[]},{value:"Useful tree-ish&#39;s",id:"useful-tree-ishs",children:[]},{value:"Configuring Git",id:"configuring-git",children:[{value:"Typical git config examples:",id:"typical-git-config-examples",children:[]}]},{value:"Clone the FOSSology git repository",id:"clone-the-fossology-git-repository",children:[]},{value:"Create a new git repository",id:"create-a-new-git-repository",children:[]},{value:"Basic workflow",id:"basic-workflow",children:[]},{value:"Viewing the commit log",id:"viewing-the-commit-log",children:[]},{value:"Show the whole commit",id:"show-the-whole-commit",children:[]},{value:"List git tree",id:"list-git-tree",children:[]},{value:"Showing commit diffs",id:"showing-commit-diffs",children:[]},{value:"Move, Restore, Unstage, Revert, etc.",id:"move-restore-unstage-revert-etc",children:[]},{value:"List available tags",id:"list-available-tags",children:[]},{value:"Branches",id:"branches",children:[]},{value:"Testing pull requests",id:"testing-pull-requests",children:[{value:"Putting current branch in PS1",id:"putting-current-branch-in-ps1",children:[]}]},{value:"Merging",id:"merging",children:[]},{value:"The Stash",id:"the-stash",children:[]},{value:"Remote repos",id:"remote-repos",children:[]},{value:"Patches",id:"patches",children:[]},{value:"Moving HEAD",id:"moving-head",children:[]},{value:"Remove untracked files (not staged or commited). CAUTION! this <em>deletes</em> files:",id:"remove-untracked-files-not-staged-or-commited-caution-this-deletes-files",children:[]}],c={toc:s};function g(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The FOSSology project was originally using SVN. At some point it was transferred to Github. This quick reference guide assumes you are already familiar with basic git concepts but could help with the transition."),(0,i.kt)("h2",{id:"git-installation"},"Git Installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Mac setup git":',(0,i.kt)("a",{parentName:"li",href:"https://help.github.com/articles/set-up-git#platform-mac"},"https://help.github.com/articles/set-up-git#platform-mac")),(0,i.kt)("li",{parentName:"ul"},'"Windows setup git":',(0,i.kt)("a",{parentName:"li",href:"https://help.github.com/articles/set-up-git#platform-windows"},"https://help.github.com/articles/set-up-git#platform-windows")),(0,i.kt)("li",{parentName:"ul"},'"Linux setup git":',(0,i.kt)("a",{parentName:"li",href:"https://help.github.com/articles/set-up-git#platform-linux"},"https://help.github.com/articles/set-up-git#platform-linux"))),(0,i.kt)("h2",{id:"git-documentation"},"Git Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Git Book":',(0,i.kt)("a",{parentName:"li",href:"http://git-scm.com/book"},"http://git-scm.com/book")),(0,i.kt)("li",{parentName:"ul"},'"git svn crash course":',(0,i.kt)("a",{parentName:"li",href:"https://git.wiki.kernel.org/index.php/GitSvnCrashCourse"},"https://git.wiki.kernel.org/index.php/GitSvnCrashCourse")),(0,i.kt)("li",{parentName:"ul"},'man pages are in the form of "man git-commit"  the same pages can be accessed through git "git --help commit"'),(0,i.kt)("li",{parentName:"ul"},'"Password caching":',(0,i.kt)("a",{parentName:"li",href:"https://help.github.com/articles/generating-ssh-keys"},"https://help.github.com/articles/generating-ssh-keys")),(0,i.kt)("li",{parentName:"ul"},'"GUI\'s and other tools":',(0,i.kt)("a",{parentName:"li",href:"https://git.wiki.kernel.org/index.php/InterfacesFrontendsAndTools"},"https://git.wiki.kernel.org/index.php/InterfacesFrontendsAndTools"))),(0,i.kt)("h2",{id:"useful-tree-ishs"},"Useful tree-ish's"),(0,i.kt)("p",null,"Parent commit references use caret:  HEAD^, ab389d^, master^\nGrandparent commit reference: HEAD^^, ab389d^^, master^^\nGreatGrandparent commit reference: HEAD^^^, ab389d^^^, master^^^\nor go back n generations:  HEAD~1, HEAD~3, HEAD~  (default is 1)"),(0,i.kt)("h2",{id:"configuring-git"},"Configuring Git"),(0,i.kt)("p",null,"Git can be configured at the system, user and project level:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"command"),(0,i.kt)("th",{parentName:"tr",align:"left"},"level"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"git config --system")),(0,i.kt)("td",{parentName:"tr",align:"left"},"System")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"git config --global")),(0,i.kt)("td",{parentName:"tr",align:"left"},"User")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"git config --")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Project")))),(0,i.kt)("p",null,"Important config files should be manipulated with git commands, but here are their locations:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"~/.gitconfig   (configured with git config --global)"),(0,i.kt)("li",{parentName:"ul"},"GIT_DIR/config  (project settings)"),(0,i.kt)("li",{parentName:"ul"},"GIT_DIR/.gitignore")),(0,i.kt)("p",null,"It is critical that you configure your name and email."),(0,i.kt)("h3",{id:"typical-git-config-examples"},"Typical git config examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  git config --global user.name "Vincent Ma"\n  git config --global user.email "dong.ma@hp.com"\n\n  git config --global color.ui true\n  git config --global core.editor "vi"\n  git config --global core.excludesfile ~/.gitignore_global    (sets my personal global ignore file, not in repo)\n  git config --global alias.st status  \n  git config --global alias.co checkout\n  git config --global alias.br branch\n  git config --global alias.df diff\n  git config --global alias.dfs "diff --staged"\n  git config --global alias.logg "log --oneline --graph --all --decorate --abbrev-commit"\n  git config --list\n')),(0,i.kt)("h2",{id:"clone-the-fossology-git-repository"},"Clone the FOSSology git repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/fossology/fossology\n")),(0,i.kt)("h2",{id:"create-a-new-git-repository"},"Create a new git repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir mynewrepo\ncd mynewrepo\ngit init\n")),(0,i.kt)("h2",{id:"basic-workflow"},"Basic workflow"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git pull       (fetch and merge changes from tracking remote repo)\nmake changes\ngit add       (move changes to staging index)\ngit commit  (commit changes to local repo)\ngit push  (merge to remote repo, e.g. FOSSology master repo)\n")),(0,i.kt)("p",null,"You can see what will be pushed with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git diff --stat --cached origin/master\n\nRemove the --stat if you want to see the actual code diffs.\ndiff --numstat will show full paths.\n")),(0,i.kt)("p",null,"Some shortcuts are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'git commit -am "my commit message"    ',(0,i.kt)("em",{parentName:"li"},"Adds to staging index, commits and uses inline message")),(0,i.kt)("li",{parentName:"ul"},"git commit -a && git push    ",(0,i.kt)("em",{parentName:"li"},"Adds to staging, commits, and pushes to remote"))),(0,i.kt)("p",null,"Be careful with the short cuts so that all files needed to fix an issue or implement a feature are committed in a single transaction.\nMake sure your commit messages are descriptive."),(0,i.kt)("h2",{id:"viewing-the-commit-log"},"Viewing the commit log"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'git log -n 5   (to see last 5 commit log entries)\ngit log --since=2014-06-15    (to see log entries since this date ("after"==="since"))\ngit log --until=2014-06-15    (to see log entries up to this date ("before"==="until"))\ngit log --since="2 weeks ago" --until="3 days ago"\ngit log --since="2.weeks" --until="3.days"\ngit log --author="Bob"\ngit log --grep="7071"   (to grep commit message)\ngit log --oneline\ngit log --oneline -3    (show last three)\ngit log --format=oneline  (like --oneline but shows the full sha1)\ngit log 2904a7df.. index.html  (show a range of commits for a file)\ngit log 2904a7df..3ff76a2 --oneline\ngit log -2 -p common-ui.php  (show patches (-p) from last two commits of common-ui.php)\ngit log --oneline --graph --all --decorate (good for showing merges, see sample alias for this above)\ngit log myotherbranch --oneline\n')),(0,i.kt)("h2",{id:"show-the-whole-commit"},"Show the whole commit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git show 57a3df\ngit show --format=oneline HEAD^\ngit show HEAD common-ui.php  (shows commit diff)\n")),(0,i.kt)("h2",{id:"list-git-tree"},"List git tree"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git ls-tree HEAD\ngit ls-tree master tests/\ngit ls-tree master^ tests/\ngit ls-tree 628ad86df\n")),(0,i.kt)("h2",{id:"showing-commit-diffs"},"Showing commit diffs"),(0,i.kt)("p",null,"Get differences between working files and repo HEAD"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git diff\ngit diff --color-words    (red is old, green is new)\n")),(0,i.kt)("p",null,"diff between staged files and named commit (default is HEAD)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git diff --staged\n")),(0,i.kt)("p",null,"diff between working file and version that is parent of HEAD (i.e. previous version)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git diff HEAD^ myfile.c\n")),(0,i.kt)("p",null,"diff between working file and file at the time of a commit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git diff cdae34a\ngit diff cdae34a myfile.c\n")),(0,i.kt)("p",null,"Diff between commits"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git diff 6a89f318fe32..7543ad2d34\ngit diff 6a89f318fe32..HEAD\ngit diff origin/master..master\n")),(0,i.kt)("p",null,"Stat summary of changes between versions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git diff --stat --summary 13987de8..HEAD\n")),(0,i.kt)("h2",{id:"move-restore-unstage-revert-etc"},"Move, Restore, Unstage, Revert, etc."),(0,i.kt)("p",null,"Rename (automatically adds to staging index):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git mv oldname.c newname.c\n")),(0,i.kt)("p",null,"Move to a different directory and renaming at the same time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git mv myfile.c newdir/mynewfilename.c\n")),(0,i.kt)("p",null,"Restore my working copy from the repository (the -- says to keep in the same branch)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -- myfile.c\n")),(0,i.kt)("p",null,"Unstage a file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git reset HEAD myfile.c\n")),(0,i.kt)("p",null,"To change the LAST commit (files/message), put change in staging area, then:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git commit --amend -m "my new message"\n')),(0,i.kt)("p",null,"Checkout a previous version (-- means same branch), puts file in staging index:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout 286ab2d90aa -- myfile.c\n")),(0,i.kt)("p",null,"Remove a file from repo and working directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git rm checkedin.log\n")),(0,i.kt)("p",null,"Remove a file from TRACKING (staging index) only.  Do not remove from working directory or repo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git rm --cached checkedin.log\n")),(0,i.kt)("p",null,"To revert a commit (and commit the change unless you use -n, simply reverts only else use merge)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git revert da38256abc33 myfile.c\n")),(0,i.kt)("p",null,"Moving aside a directory and restoring from head.\nFor example, say you made a bunch of changes in an agent directory, then decided you want to save your work (locally) but restore to the last commit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mv agent agent.save\ngit checkout -- agent\n")),(0,i.kt)("h2",{id:"list-available-tags"},"List available tags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git tag\n")),(0,i.kt)("h2",{id:"branches"},"Branches"),(0,i.kt)("p",null,"List branches"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git branch   (shows branches on our local machine, asterisk in output shows current branch ie. where HEAD points and what is in our working directory)\ngit branch -r (shows remote branches)\ngit branch -a (shows local and remote branches)\n")),(0,i.kt)("p",null,"Create a branch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git branch newfeaturebranch\n")),(0,i.kt)("p",null,"Switch to a branch (moves HEAD and working directory, working files must be mostly clean i.e. no uncommitted changes):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout newfeaturebranch\n")),(0,i.kt)("p",null,"Create and switch "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b newbranch   (create and switch to branch in one step)\ngit checkout -b newbranch origin/frombranch (create tracking branch and switch to it)\n")),(0,i.kt)("p",null,"diff branches"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git diff master..newbranch\n")),(0,i.kt)("p",null,"Show all branches completely included in this branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git branch --merged\n")),(0,i.kt)("p",null,"Rename a branch (use -m or synonym --move)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -m newbranch newagentx_branch\n")),(0,i.kt)("p",null,"Delete a branch (-d synonomous with --delete):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -d mybranch\n")),(0,i.kt)("h2",{id:"testing-pull-requests"},"Testing pull requests"),(0,i.kt)("p",null,"Fetch the pull request into a new branch to test.  The pull request id is the number in the pull request title.  It looks like ","#","123.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Fetch pull request 123 into mytestbranch\ngit fetch origin pull/123/head:mytestbranch\n\n# Switch to the new branch\ngit checkout mytestbranch\n\n# test\n# to push the new branch back to origin\ngit push origin mytestbranch\n\n# to switch back to branch master\ngit checkout master\n")),(0,i.kt)("h3",{id:"putting-current-branch-in-ps1"},"Putting current branch in PS1"),(0,i.kt)("p",null,"When working with branches it is helpful to be aware of what branch you are working in.  This script\nchanges the bash prompt to display current git branch. This requires git-completioni.bash from github: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -0L http://github.com/git/git/raw/master/contrib/completion/git-completion.bash\n")),(0,i.kt)("p",null,"The git-completion.bash file contains a function called __git_ps1 to return the current branch.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export PS1='\\W$(__git_ps1 \"(%s)\") > '\n")),(0,i.kt)("h2",{id:"merging"},"Merging"),(0,i.kt)("p",null,"Merge a branch into another branch (master in this example)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git checkout master    (start in branch that is receiving the merge, i.e. the branch you are mergin into)\ngit merge newagentx_branch (merges newagentx_branch into the current branch)\ngit merge origin/master  (merges in from origin/master, usually after a fetch)\n")),(0,i.kt)("p",null,"After resolving conflicts do an add to the MERGING branch to stage the changes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git add myfile.c\ngit commit\n")),(0,i.kt)("p",null,"Abort a merge"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git merge --abort\n")),(0,i.kt)("p",null,"Show merge tools you can use if you if you want:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git mergetool\n")),(0,i.kt)("h2",{id:"the-stash"},"The Stash"),(0,i.kt)("p",null,"The stash is a special fourth area of git where you can store changes temporarily without having to commit them to the repository.\nStash is global (not attached to a branch and does not have a sha1)."),(0,i.kt)("p",null,"Save modified uncommitted files to stash:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git stash save "my change reminder message"\n')),(0,i.kt)("p",null,"Show what is in the stash:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git stash list\n")),(0,i.kt)("p",null,"View the stash object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git stash show stash@{0}   (see git stash list for stash object name)\ngit stash show -p stash@{0} (to see patches)\n")),(0,i.kt)("p",null,"Get changes out of the stash, if object is unspecified, the first one is used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git stash pop stash@{0}    (removes stash object)\ngit stash apply stash@{0}  (leaves object in stash)\n")),(0,i.kt)("p",null,"Delete items from the stash:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git stash drop stash@{0}\ngit stash clear    (deletes all items from stash)\n")),(0,i.kt)("h2",{id:"remote-repos"},"Remote repos"),(0,i.kt)("p",null,"List the remotes you know about:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git remote\ngit remote -v\n")),(0,i.kt)("p",null,'Add a remote repo (note remote repo "origin" is fossology remote master repo):'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git remote add <alias> <url>\ne.g. git remote add spdx https://github.com/spdx/spdx.git\n")),(0,i.kt)("p",null,"Remove a remote:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git remote rm spdx\n")),(0,i.kt)("p",null,"Push to remote (e.g. push local master branch to remote origin):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git push -u origin master  (-u makes this a tracking branch)\ngit push   (if a tracking branch)\n")),(0,i.kt)("p",null,"Pull down a git repo (make local copy):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/mydir/myrepo.git\ngit clone https://github.com/mydir/myrepo.git newreponame\n")),(0,i.kt)("p",null,"Sync origin/master from remote. origin/master is local cache of remote origin/master repo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git fetch origin\ngit fetch  (since we only have one remote)\ngit merge origin/master (to merge origin/master with current branch)\ngit pull (shorthand for git fetch; git merge FETCH_HEAD  that is, it fetches and merges with master in one step)\n")),(0,i.kt)("p",null,"Create a branch from a remote branch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git branch mynewbranch origin/Marysbranch\n")),(0,i.kt)("p",null,"Note, if you can't push to the remote, you need to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git fetch\nresolve conflicts\ntry to push again\n")),(0,i.kt)("p",null,"Delete a remote branch (note semicolon before branch name):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin :remotebranchtodelete\nor\ngit push origin --delete remotebranchtodelete\n")),(0,i.kt)("p",null,"Merge a remote repo (should probably be done in a new branch)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git remote add joshovi git://git.code.sf.net/u/joshovi/fossology\ngit pull joshovi master\ngit push origin master   (Push the changes to our repository)\n")),(0,i.kt)("h2",{id:"patches"},"Patches"),(0,i.kt)("p",null,"Apply a patch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git apply file1.patch\n")),(0,i.kt)("p",null,"An alternative for patches created with git format-patch is this, which does the add and commit including the original commit message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git am file1.patch\n")),(0,i.kt)("p",null,"Create patches on a new feature branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout -b mynewpatchbranch\nDo the changes\n$ git commit -a\n$ git format-patch -1\n")),(0,i.kt)("h2",{id:"moving-head"},"Moving HEAD"),(0,i.kt)("p",null,"Move the HEAD pointer (",(0,i.kt)("em",{parentName:"p"},"CAUTION THIS CAN DELETE FILES"),"!).  Make text file of log in case you need to move HEAD forward again."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git reset --soft da372645cd8d (move HEAD and nothing else, does not change staging index or working directory)\ngit reset --mixed da372645cd8d (default, moves HEAD and changes staging index to match repo, does not change working directory)\ngit reset --hard da372645cd8d (moves HEAD and changes both repo AND WORKING DIRECTORY TO MATCH REPO)\n")),(0,i.kt)("h2",{id:"remove-untracked-files-not-staged-or-commited-caution-this-deletes-files"},"Remove untracked files (not staged or commited). CAUTION! this ",(0,i.kt)("em",{parentName:"h2"},"deletes")," files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clean -n   (dry run)\ngit clean -f   (force to run)\ngit clean -x   (don't use ignore rules)\ngit clean -X   (only remove files ignored by git)<pre>\n")))}g.isMDXComponent=!0}}]);