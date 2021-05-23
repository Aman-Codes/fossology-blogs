This page has been updated for v 2.2.

In 1.2 we only had user PLUGIN permissions, but to support tags in 1.3 we added tag permissions. In 2.2 we are getting rid of explicit tag permissions and basing all permissions on the user and upload. For permissions on uploads to be manageable, we have implemented "groups". Groups work like *ix groups. Groups have user members and uploads have permissions based on groups. Unlike *ix permissions, uploads do not have user/group/other permissions. They only have group permission.

Every user has their own group. So if you create a user Fred, a Fred group gets created automatically with Fred the user (and only user at creation time). Fred is given PERM_ADMIN. As admin, Fred can manage what other users are in his group.

## User Permissions

Currently, there are 4 user plugin permissions which are a subset of the pre 2.2 user plugin permissions. These user level permission control what plugins a user sees in the UI.

<table>
  <tr>
    <td>Permission</td>
    <td>DB value</td>
    <td>meaning</td>
  </tr>
  <tr>
    <td>PLUGIN_DB_NONE</td>
    <td>0</td>
    <td>No permissions</td>
  </tr>
  <tr>
    <td>PLUGIN_DB_READ</td>
    <td>1</td>
    <td>Read only</td>
  </tr>
  <tr>
    <td>PLUGIN_DB_WRITE</td>
    <td>3</td>
    <td>DB writes permitted</td>
  </tr>
  <tr>
    <td>PLUGIN_DB_USERADMIN</td>
    <td>10</td>
    <td>add/delete users and groups. This is the 'superuser' permission.</td>
  </tr>
</table>


## Groups

The group table defines the group name so that it can be associated with a primary key that will serve as the foreign key in referencing tables. Only users with PERM_WRITE or greater can create groups. Once a group is created, that group admin can manage their user membership. The only restrictions are on the group name length, that group names are unique, and that each user has their own group (Fred cannot rename, or delete the Fred group).

### Table: group

<table>
  <tr>
    <td>Column</td>
    <td>Type</td>
    <td>Key</td>
    <td>Function</td>
  </tr>
  <tr>
    <td>group_pk</td>
    <td></td>
    <td>Primary</td>
    <td></td>
  </tr>
  <tr>
    <td>group_name</td>
    <td>varchar(32)</td>
    <td>unique</td>
    <td>Name of group</td>
  </tr>
</table>


## Group members

A group can have as many members (users) as they like (0 - n). The group_user_member table defines the members of each group and if they can manage the group user list.

### Table: group_user_member

<table>
  <tr>
    <td>Column</td>
    <td>Type</td>
    <td>Key</td>
    <td>Function</td>
  </tr>
  <tr>
    <td>group_user_member_pk</td>
    <td></td>
    <td>Primary Key</td>
    <td></td>
  </tr>
  <tr>
    <td>group_fk</td>
    <td></td>
    <td>Foreign Key</td>
    <td>Group being joined.</td>
  </tr>
  <tr>
    <td>user_fk</td>
    <td></td>
    <td>Foreign Key</td>
    <td>User member of group_fk.</td>
  </tr>
  <tr>
    <td>group_perm</td>
    <td>int</td>
    <td></td>
    <td>Permission in this group. 0=user, 1=admin. Only admins can manage group members or change the group's name</td>
  </tr>
</table>


A user may be in multiple groups. So if multiple groups are given permission to an upload, a user may end up having conflicting permission levels. In this case, the user will be assigned the highest permission level.

## Upload Permissions

The perm_upload table gives groups permission to access an upload. The permission levels are PERM_NONE, PERM_READ, PERM_WRITE and PERM_ADMIN, just like the PLUGIN permissions. But plugin permissions give users access to plugins (so fossology can determine which plugins to display to the user), while these upload permissions relate which groups have permission to use an upload. If you upload a file, you will get PERM_ADMIN by default. All other users will have PERM_NONE unless you upgrade them. Currently, PERM_WRITE and PERM_ADMIN are equivalent permission levels. However, there may be a time in the future when we want to separate PERM_ADMIN (the upload owner) from PERM_WRITE and give PERM_ADMIN additional privileges.

### Table: perm_upload

<table>
  <tr>
    <td>Column</td>
    <td>Type</td>
    <td>Key</td>
    <td>Function</td>
  </tr>
  <tr>
    <td>perm_upload_pk</td>
    <td></td>
    <td>Primary Key</td>
    <td></td>
  </tr>
  <tr>
    <td>perm</td>
    <td>int</td>
    <td></td>
    <td>Permission granted to group_fk on upload upload_fk</td>
  </tr>
  <tr>
    <td>upload_fk</td>
    <td></td>
    <td>Foreign Key</td>
    <td>Upload ID</td>
  </tr>
  <tr>
    <td>group_fk</td>
    <td></td>
    <td>Foreign Key</td>
    <td>Group being having access.</td>
  </tr>
</table>


## One-shot uploads

The one-shot license and copyright scans are open to everyone. They require no User permission (they are PLUGIN_DB_NONE) and since no upload is saved in the database or repository, there is no Upload permission.

## API

GetUploadPerm($upload_pk, $user_pk)

   Returns the highest permission that $user_pk has for $upload_pk

See lib/php/common-perms.php for the complete list.

## Examples

### Case 1: Search

* User must have user type >= PLUGIN_DB_READ for search to appear on main or micro menu.

* For each upload returned by search, check the upload permission for the user. The user must have PERM_READ or greater.

### Case 2: Browse upload, same for License browser, Bucket browser, and Copyright browser

* User must have user type >= PLUGIN_DB_READ

* For each upload displayed, the user must have >= PERM_READ.

### Case 3: Upload from file/url/server, cp2foss, upload from fossjobs

* User type >= PLUGIN_DB_WRITE

* If a folder is specified, the user can write to any folder.

* If a folder is not specified, the upload goes into the user root folder.

* User is given PERM_WRITE to new upload.

### Case 4: Edit upload permissions

* user type = PLUGIN_DB_ADMIN or the user has admin permission for upload.

### Case 5: Tag an upload file

* User type >= PLUGIN_DB_WRITE

* User has perm >= PERM_WRITE for the upload

### Case 6: Fix a license result

* User type >= PLUGIN_DB_WRITE

* User has perm >= PERM_WRITE for the upload

### Case 7: Move upload to a different folder

* User type >= PLUGIN_DB_WRITE

* Destination folder must be in user root folder hierarchy or user type = PLUGIN_DB_ADMIN. Only folders that meet this criteria should be displayed in the UI.

## Questions

### Why can't I see (browse) a file (upload)?

For permission to browse a file, you need three things:

* When your user was created, you need READ permission or better.

* You need to be in a group that has read permission to the upload.

* The upload needs to be under your top-level folder.

### What happens to GlobalBrowse

It goes away. If you want everyone to be able to access everyone else's upload, then you might as well have them all log in to the same account or have them not log in at all and give Default User PLUGIN_DB_WRITE. If you want to keep seperate users and only allow every user to view every other users uploads, but not write to them, you have to give this permission explicitly. For example, create a group "all users" and give PERM_READ to every other user group. Then add every user to "all users".

### How do we migrate users to this new permission scheme?

Create groups for each user. Set up upload defaults to give the user PERM_ADMIN to their uploads. fossinit will run /install/db/dbmigrate_2.1-2.2.php to do this. Also provide user instructions (not a link to this document) explaining how the new permission scheme works, how to edit upload defaults, and how to edit permissions and groups.

### What about the current tag permissions?

These are superceded by this new method. You must have PERM_WRITE to an upload to tag it.

### What about table group_group_member we don't currently use it and it wasn't mentioned in this plan.

It has been removed.

### Folder permissions

Folder permissions are implicit and follow these rules. If you are PLUGIN_DB_ADMIN, you can move any folder (except Software Repository) anywhere and you can modify any folder properties and delete any folder (except Software Repository). If you are PLUGIN_DB_WRITE, you can move any folder (except Software Repository) anywhere within your root hierarchy and you can modify it's properties. You can also delete any folder within your hierarchy (subject to upload permission restrictions). If you are PLUGIN_DB_READ you cannot delete the folder or modify its properties. Access to the uploads in a folder are (as always) controlled by the upload permissions. This means, for example, that it is possible to have an upload in your folder that will not be visible with Browse (if the upload has PERM_NONE for the user).