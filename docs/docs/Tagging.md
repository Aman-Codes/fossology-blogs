# Tags

Tags are short text labels (with an optional notes field) attached to a physical file (pfile_pk). Tag selection and visibility will be in:

1. Searching

2. Reports

3. Report filters

Because of their organizational and possibly confidential nature, tags are defined in their own namespaces (0 - n tags in each namespace), and there are 0 - n groups assigned permission levels to access each namespace. Related information about permissions can be found on the [permissions page.](http://www.fossology.org/projects/fossology/wiki/Perms)

Here are the [table definitions and relationships](http://www.fossology.org/projects/fossology/wiki/Tag_group_tables_) for the tag and permissions (group) tables.

The following shows how tags are defined internally and how they are associated with files.

## Next Steps

**Mockup UI, database tables, then review with OSRB and any other interested users** - this is currently in process, although we currently have no participants other than HP's OSRB.

### Task list & Plan & Status

* Requirements discussion and Mockup UI. **Done by Bob**

* Tagging implement design and Database table design. **Done by Bob**

* Code a small proof of concept to verify Bob's design idea. **In process by Bob**

* Database changes implementation. Bob have created the database table sql, Vincent will use the sql to implement the database changes and verify if any issues. **In process by Vincent, estimate end by Sep 2** | **Done**

* UI implementation to attach/edit/delete 1~n tag (1 or 2 words) to a file or container **Estimate end by Sep 9** | **Done attach part, and need add edit/delete part, estimate end by Sep 27** | **Done** * Tag the file only * Tag the container and all files it contains (recursively tagging)

* Tagging permission implementation. **Will have dependency with Group task, estimate end by Sep 15** | **Done without Group implement** * Tag namespace management * Assign tag namespace permission

* Searching **Estimate end by Sep 20** | **Done** * The search page will be revised to include tag searching * The ability to search tag in a file hierarchy. A "search" link needs to be in the micro menu

* Report Qualifier **Estimate end by Sep 24**

## Requirements

### OSRB Requirements

The HP OSRB has requested some method to keep track of where packages/files are in the review process. We are going to use file/container tags as the method. Tags will have other uses as well. For the OSRB, they would like to create tags like "Done", "ToDo", "CTO Approved", "In progress", etc. Currently they use a spreadsheet which is instead of a real-time solution. Tags would give everyone doing reviews real time updates of what needs to be done.

### Raino Requirements

FOSSology is a good license scanner but a company user has a wider OS governance view for the OS components.

Tags could be used for that purpose by including text with a tag. This could be used to associate some reasoning with the file. Eventually FOSSology could be the place for all the company's OS governance data.

## Tag usage

### Tagging

You tag a file (or group of files) [while you are browsing](http://www.fossology.org/projects/fossology/wiki/Tagbrowse). If you have write permission to the tag, you will also have options to edit the tag and tag text, and delete the tag. If the file you are browsing is a container, then you also have the option to cascade the tag or tag delete recursively to every single file inside the container.

### Searching

The search menu item should be revised to include tag searching. However, the main use case for searching for tags isn't at this global level, but the ability to search in a file hierarchy. A "search" link needs to be in the micro menu and that should include search for tags. For example, [here is how it could look.](http://fossology.org/_media/search-minimenu.gif?w=120&h=89)

Clicking on that search link would bring up the [new search plugin](http://fossology.org/_media/newsearch.gif?w=120&h=89)

### Report Qualifier

This critical feature allows reports to filter results based on tags. For example, on a nomos license report there could be a tag input that filters the results based on which packages are tagged "Needs CTO review", or whatever. For example, to filter on "Needs review", one would simply enter "Needs review". The user should be helped by autocompleting the tags where the user is shown the tag options once they start typing.

In a future release, this might be best done with a simple grammar to allow conditionals. To specify either of two tags, one could enter "tag A or tag B". A simple grammar could handle "and", "or", "not", "(", ")". I don't believe we need to do this for the first implementation.

### Process to get started tagging

To get started tagging, you need a fossology admin to:

1. Create a group or groups so you can later give them permissions in the tag namespace. Creating a group writes to the group table.

2. Assign members to the group. This writes to the group_user_member and group_group_member tables. The admin only needs to assign one user member or group member and give them admin privileges to the group. Then those users can add/delete user and group members and assign their gropu permissions.

3. Create a tag namespace. This writes the namespace name (like "my review process", or "my project tags") to the tag_ns table.

4. Give a user or group permissions to use and/or admin the namespace. This writes to the tag_ns_group table.

5. Any tag namespace admin (assigned in tag_ns_group) can create add, delete, and assign assign permissions other namespace users (more tag_ns_group entries).

6. Finally, anyone with read/write or above (admin) privileges can tag files. Tagging a file writes table tag_file records. Typically tagging is done while [while you are browsing](http://www.fossology.org/projects/fossology/wiki/Tagbrowse).

## Tag namespace definition

Tags are managed on the namespace level. So each tag namespace has a list of member groups and their permission level. A default namespace should be added to the users table, but users should also be allowed to switch namespaces, just as they can switch buckets, at runtime. Of course, they should only see tag namespaces for which they have, at least, read access.

Tags are not shared across namespaces.

This is the tag namespace table.

### Table: tag_ns

<table>
  <tr>
    <td>Column</td>
    <td>Type</td>
    <td>Key</td>
    <td>Function</td>
  </tr>
  <tr>
    <td>tag_ns_pk</td>
    <td></td>
    <td>Primary Key</td>
    <td></td>
  </tr>
  <tr>
    <td>tag_ns_name</td>
    <td>varchar(32)</td>
    <td>Unique</td>
    <td>The namespace name</td>
  </tr>
</table>


## Tags

Tags are members of namespaces. Each namespace has 0 - n tags in it. Tags are not shared across namespaces.

Since tags are meant to be short labels, their length is restricted (arbitrarily) to 32 characters. Their text is restricted to printable text (including spaces).

### Table: tag

<table>
  <tr>
    <td>Column</td>
    <td>Type</td>
    <td>Key</td>
    <td>Function</td>
  </tr>
  <tr>
    <td>tag_pk</td>
    <td></td>
    <td>Primary Key</td>
    <td></td>
  </tr>
  <tr>
    <td>tag</td>
    <td>varchar(32)</td>
    <td>Unique</td>
    <td>The tag text</td>
  </tr>
  <tr>
    <td>tag_ns_fk</td>
    <td></td>
    <td>Foreign Key</td>
    <td>The namespace the tag is in</td>
  </tr>
  <tr>
    <td>tag_desc</td>
    <td>text</td>
    <td></td>
    <td>Description of what tag means</td>
  </tr>
</table>


## Namespace Groups and Permissions

Tag permissions are assigned to tag namespaces, not individual tags.

Each namespace can allow access by 0 - n groups. Each group has their own permission level set by the namespace admin. If a user is in multiple groups, their permission level is set to the lowest level they are granted in the groups.

### Table: tag_ns_group

<table>
  <tr>
    <td>Column</td>
    <td>Type</td>
    <td>Function</td>
  </tr>
  <tr>
    <td>tag_ns_group_pk</td>
    <td></td>
    <td>Primary Key</td>
  </tr>
  <tr>
    <td>tag_ns_fk</td>
    <td></td>
    <td>Foreign key to tag_ns_pk</td>
  </tr>
  <tr>
    <td>group_fk</td>
    <td></td>
    <td>Foreign key to group_pk</td>
  </tr>
  <tr>
    <td>tag_ns_perm</td>
    <td>int</td>
    <td>Permission the group has in this tag namespace; 0=none, 1=read only, 2=read/write, 3=admin</td>
  </tr>
</table>


*Vincent: what's difference of 'tag_ns_group_perm'(group_fk Function) and 'tag_ns_perm'(column of table tag_ns_grp)?*

*Bob: mention of tag_ns_group_perm was left over from a previous version. I've removed it.*

"None" means NO access. A permission level of "none" can be used to specifically disallow usage by a group. For example, there may be 5 groups that are members of this namespace, but you want to specifically disallow a couple of users for bad behavior. Just have a user with create group privileges create a group with those couple of users in it, and assign that group the permissions "none". This way those users will have no privileges in the namespace even though they are members of another group that does have access.

In this case "read only" means that this group has access to anything that does not modify the tag. For example, they can search on tags, and use them as report filters.

"read/write" means that you can create new tags in this namespace.

"admin" permission allows you to change namespace and tag names. For example, one might want to correct spelling in a tag. Since items are tagged by the tag_fk and not the tag name, any changes in tag (or namespace) names will take effect immediately.

## File Tag

All the above describes what defines a tag and what visibility it has to the user. The tags_file associates a tag with a physical file.

### Table: tag_file

<table>
  <tr>
    <td>Column</td>
    <td>Type</td>
    <td>Key</td>
    <td>Function</td>
  </tr>
  <tr>
    <td>tag_file_pk</td>
    <td></td>
    <td>Primary Key</td>
    <td></td>
  </tr>
  <tr>
    <td>tag_fk</td>
    <td></td>
    <td>Foreign Key</td>
    <td></td>
  </tr>
  <tr>
    <td>pfile_fk</td>
    <td></td>
    <td>Foreign Key</td>
    <td>The namespace the tag is in</td>
  </tr>
  <tr>
    <td>tag_file_date</td>
    <td>date</td>
    <td></td>
    <td>Date tagged to file</td>
  </tr>
  <tr>
    <td>tag_file_text</td>
    <td>text</td>
    <td></td>
    <td>User supplied text</td>
  </tr>
</table>


### Future Possibilities

1. **Buckets setting tags** Agents need the ability to tags files. For example, one might want to have a bucket that sets every package in a distro to "Needs Review", except for packages that have been previously passed review and have no significant license changes.

2. **Buckets using tags** Tags could potentially be used as criteria for buckets. In other words a bucket script could query tags and use that as bucket criteria. However, this may not always be a good idea since tags are dynamic and bucket results are static.

3. **Tagging a bucket** would work the same as tagging files, except there would be no cascading tagging.

## Testing

[tagtest](http://www.fossology.org/projects/fossology/wiki/Tagtest)
