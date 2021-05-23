The FOSSology project was originally using SVN. At some point it was transferred to Github. This quick reference guide assumes you are already familiar with basic git concepts but could help with the transition.

##  Git Installation

* "Mac setup git":https://help.github.com/articles/set-up-git#platform-mac
* "Windows setup git":https://help.github.com/articles/set-up-git#platform-windows
* "Linux setup git":https://help.github.com/articles/set-up-git#platform-linux

##  Git Documentation

* "Git Book":http://git-scm.com/book
* "git svn crash course":https://git.wiki.kernel.org/index.php/GitSvnCrashCourse
* man pages are in the form of "man git-commit"  the same pages can be accessed through git "git --help commit"
* "Password caching":https://help.github.com/articles/generating-ssh-keys
* "GUI's and other tools":https://git.wiki.kernel.org/index.php/InterfacesFrontendsAndTools

##  Useful tree-ish's

Parent commit references use caret:  HEAD^, ab389d^, master^
Grandparent commit reference: HEAD^^, ab389d^^, master^^
GreatGrandparent commit reference: HEAD^^^, ab389d^^^, master^^^
or go back n generations:  HEAD~1, HEAD~3, HEAD~  (default is 1)

##  Configuring Git

Git can be configured at the system, user and project level:

| command | level |
| :--- | :--- |
| `git config --system` | System |  
| `git config --global` | User |  
| `git config --` | Project |  

Important config files should be manipulated with git commands, but here are their locations:  
* ~/.gitconfig   (configured with git config --global)
* GIT_DIR/config  (project settings)
* GIT_DIR/.gitignore

It is critical that you configure your name and email.

###  Typical git config examples:

```
  git config --global user.name "Vincent Ma"
  git config --global user.email "dong.ma@hp.com"

  git config --global color.ui true
  git config --global core.editor "vi"
  git config --global core.excludesfile ~/.gitignore_global    (sets my personal global ignore file, not in repo)
  git config --global alias.st status  
  git config --global alias.co checkout
  git config --global alias.br branch
  git config --global alias.df diff
  git config --global alias.dfs "diff --staged"
  git config --global alias.logg "log --oneline --graph --all --decorate --abbrev-commit"
  git config --list
```


##  Clone the FOSSology git repository

```bash
$ git clone https://github.com/fossology/fossology
```

##  Create a new git repository

```bash
mkdir mynewrepo
cd mynewrepo
git init
```

##  Basic workflow

```
git pull       (fetch and merge changes from tracking remote repo)
make changes
git add       (move changes to staging index)
git commit  (commit changes to local repo)
git push  (merge to remote repo, e.g. FOSSology master repo)
```

You can see what will be pushed with:

```bash
git diff --stat --cached origin/master

Remove the --stat if you want to see the actual code diffs.
diff --numstat will show full paths.
```

Some shortcuts are:
* git commit -am "my commit message"    _Adds to staging index, commits and uses inline message_
* git commit -a && git push    _Adds to staging, commits, and pushes to remote_

Be careful with the short cuts so that all files needed to fix an issue or implement a feature are committed in a single transaction.
Make sure your commit messages are descriptive.

##  Viewing the commit log

```
git log -n 5   (to see last 5 commit log entries)
git log --since=2014-06-15    (to see log entries since this date ("after"==="since"))
git log --until=2014-06-15    (to see log entries up to this date ("before"==="until"))
git log --since="2 weeks ago" --until="3 days ago"
git log --since="2.weeks" --until="3.days"
git log --author="Bob"
git log --grep="7071"   (to grep commit message)
git log --oneline
git log --oneline -3    (show last three)
git log --format=oneline  (like --oneline but shows the full sha1)
git log 2904a7df.. index.html  (show a range of commits for a file)
git log 2904a7df..3ff76a2 --oneline
git log -2 -p common-ui.php  (show patches (-p) from last two commits of common-ui.php)
git log --oneline --graph --all --decorate (good for showing merges, see sample alias for this above)
git log myotherbranch --oneline
```

##  Show the whole commit

```
git show 57a3df
git show --format=oneline HEAD^
git show HEAD common-ui.php  (shows commit diff)
```

##  List git tree

```bash
git ls-tree HEAD
git ls-tree master tests/
git ls-tree master^ tests/
git ls-tree 628ad86df
```

##  Showing commit diffs

Get differences between working files and repo HEAD
```
git diff
git diff --color-words    (red is old, green is new)
```

diff between staged files and named commit (default is HEAD)
```bash
git diff --staged
```

diff between working file and version that is parent of HEAD (i.e. previous version)
```bash
git diff HEAD^ myfile.c
```

diff between working file and file at the time of a commit
```bash
git diff cdae34a
git diff cdae34a myfile.c
```

Diff between commits
```bash
git diff 6a89f318fe32..7543ad2d34
git diff 6a89f318fe32..HEAD
git diff origin/master..master
```

Stat summary of changes between versions
```bash
git diff --stat --summary 13987de8..HEAD
```

##  Move, Restore, Unstage, Revert, etc.

Rename (automatically adds to staging index):
```bash
git mv oldname.c newname.c
```

Move to a different directory and renaming at the same time:
```bash
git mv myfile.c newdir/mynewfilename.c
```

Restore my working copy from the repository (the -- says to keep in the same branch)
```bash
git checkout -- myfile.c
```

Unstage a file
```bash
git reset HEAD myfile.c
```

To change the LAST commit (files/message), put change in staging area, then:
```bash
git commit --amend -m "my new message"
```

Checkout a previous version (-- means same branch), puts file in staging index:
```bash
git checkout 286ab2d90aa -- myfile.c
```

Remove a file from repo and working directory.
```bash
git rm checkedin.log
```

Remove a file from TRACKING (staging index) only.  Do not remove from working directory or repo.
```bash
git rm --cached checkedin.log
```

To revert a commit (and commit the change unless you use -n, simply reverts only else use merge).
```bash
git revert da38256abc33 myfile.c
```

Moving aside a directory and restoring from head.
For example, say you made a bunch of changes in an agent directory, then decided you want to save your work (locally) but restore to the last commit.
```bash
mv agent agent.save
git checkout -- agent
```


##  List available tags

```bash
$ git tag
```

##  Branches

List branches
```
git branch   (shows branches on our local machine, asterisk in output shows current branch ie. where HEAD points and what is in our working directory)
git branch -r (shows remote branches)
git branch -a (shows local and remote branches)
```

Create a branch
```bash
git branch newfeaturebranch
```

Switch to a branch (moves HEAD and working directory, working files must be mostly clean i.e. no uncommitted changes):
```bash
git checkout newfeaturebranch
```

Create and switch 
```bash
git checkout -b newbranch   (create and switch to branch in one step)
git checkout -b newbranch origin/frombranch (create tracking branch and switch to it)
```

diff branches
```bash
git diff master..newbranch
```

Show all branches completely included in this branch:
```bash
git branch --merged
```

Rename a branch (use -m or synonym --move)
```bash
git branch -m newbranch newagentx_branch
```

Delete a branch (-d synonomous with --delete):
```bash
git branch -d mybranch
```

##  Testing pull requests

Fetch the pull request into a new branch to test.  The pull request id is the number in the pull request title.  It looks like \#123.  

```bash
# Fetch pull request 123 into mytestbranch
git fetch origin pull/123/head:mytestbranch

# Switch to the new branch
git checkout mytestbranch

# test
# to push the new branch back to origin
git push origin mytestbranch

# to switch back to branch master
git checkout master
```

###  Putting current branch in PS1

When working with branches it is helpful to be aware of what branch you are working in.  This script 
changes the bash prompt to display current git branch. This requires git-completioni.bash from github: 
```bash
curl -0L http://github.com/git/git/raw/master/contrib/completion/git-completion.bash
```
The git-completion.bash file contains a function called __git_ps1 to return the current branch.
For example:
```bash
export PS1='\W$(__git_ps1 "(%s)") > '
```

##   Merging

Merge a branch into another branch (master in this example)
```
git checkout master    (start in branch that is receiving the merge, i.e. the branch you are mergin into)
git merge newagentx_branch (merges newagentx_branch into the current branch)
git merge origin/master  (merges in from origin/master, usually after a fetch)
```

After resolving conflicts do an add to the MERGING branch to stage the changes:
```bash
git add myfile.c
git commit
```

Abort a merge
```bash
git merge --abort
```

Show merge tools you can use if you if you want:
```bash
git mergetool
```


##  The Stash

The stash is a special fourth area of git where you can store changes temporarily without having to commit them to the repository.
Stash is global (not attached to a branch and does not have a sha1).

Save modified uncommitted files to stash:
```bash
git stash save "my change reminder message"
```

Show what is in the stash:
```bash
git stash list
```

View the stash object:
```bash
git stash show stash@{0}   (see git stash list for stash object name)
git stash show -p stash@{0} (to see patches)
```

Get changes out of the stash, if object is unspecified, the first one is used:
```bash
git stash pop stash@{0}    (removes stash object)
git stash apply stash@{0}  (leaves object in stash)
```

Delete items from the stash:
```bash
git stash drop stash@{0}
git stash clear    (deletes all items from stash)
```

##  Remote repos

List the remotes you know about:
```bash
git remote
git remote -v
```

Add a remote repo (note remote repo "origin" is fossology remote master repo):
```
git remote add <alias> <url>
e.g. git remote add spdx https://github.com/spdx/spdx.git
```

Remove a remote:
```bash
git remote rm spdx
```

Push to remote (e.g. push local master branch to remote origin):
```
git push -u origin master  (-u makes this a tracking branch)
git push   (if a tracking branch)
```

Pull down a git repo (make local copy):
```bash
git clone https://github.com/mydir/myrepo.git
git clone https://github.com/mydir/myrepo.git newreponame
```

Sync origin/master from remote. origin/master is local cache of remote origin/master repo
```
git fetch origin
git fetch  (since we only have one remote)
git merge origin/master (to merge origin/master with current branch)
git pull (shorthand for git fetch; git merge FETCH_HEAD  that is, it fetches and merges with master in one step)
```

Create a branch from a remote branch
```bash
git branch mynewbranch origin/Marysbranch
```

Note, if you can't push to the remote, you need to:
```
git fetch
resolve conflicts
try to push again
```

Delete a remote branch (note semicolon before branch name):
```bash
git push origin :remotebranchtodelete
or
git push origin --delete remotebranchtodelete
```

Merge a remote repo (should probably be done in a new branch)
```
git remote add joshovi git://git.code.sf.net/u/joshovi/fossology
git pull joshovi master
git push origin master   (Push the changes to our repository)
```


##  Patches

Apply a patch
```bash
$ git apply file1.patch
```

An alternative for patches created with git format-patch is this, which does the add and commit including the original commit message:
```bash
$ git am file1.patch
```

Create patches on a new feature branch:
```bash
$ git checkout -b mynewpatchbranch
Do the changes
$ git commit -a
$ git format-patch -1
```

##  Moving HEAD

Move the HEAD pointer (*CAUTION THIS CAN DELETE FILES*!).  Make text file of log in case you need to move HEAD forward again.

```
git reset --soft da372645cd8d (move HEAD and nothing else, does not change staging index or working directory)
git reset --mixed da372645cd8d (default, moves HEAD and changes staging index to match repo, does not change working directory)
git reset --hard da372645cd8d (moves HEAD and changes both repo AND WORKING DIRECTORY TO MATCH REPO)
```

##  Remove untracked files (not staged or commited). CAUTION! this *deletes* files:

```
git clean -n   (dry run)
git clean -f   (force to run)
git clean -x   (don't use ignore rules)
git clean -X   (only remove files ignored by git)<pre>
```
