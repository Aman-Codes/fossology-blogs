This page is a near duplicate of [Creating_and_Using_Bucketpools](http://www.fossology.org/projects/fossology/wiki/Creating_and_Using_Bucketpools). This should be cleaned up.

# Creating Bucket Pools

Buckets are methods to classify, or group, data for reports. Introduced in v1.2, the original idea was to allow users to classify licenses by their own value system. For example, buckets can report files by "Good Licenses" and "Bad Licenses", "Academic Licenses", "Copyleft Licenses", "Packages that had licenses I liked before but now contain licenses that I don't like", ...

Although license classification was the original requirement, buckets are not limited to classifying licenses. For example, if one wants to report files by copyright holder, or by file type, or files without my copyright, or by any other data you have access to, you can.

As introduced in v1.2, there is no FOSSology user interface to create bucket pools, bucket definitions, scripts, or anything else you need. The purpose of this page is to explain how to create these files and database records.

## Bucket Pools

A bucket pool is a set of bucket definitions. The first step in creating a bucket pool is to add a bucketpool table record:

**Table: bucketpool**

<!-- <table>
  <tr>
    <td>Column</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>bucketpool_pk</td>
    <td>integer</td>
    <td>Primary key</td>
  </tr>
  <tr>
    <td>bucketpool_name</td>
    <td>text</td>
    <td>Name of bucket pool</td>
  </tr>
  <tr>
    <td>version</td>
    <td>integer</td>
    <td>1,2,3, ...</td>
  </tr>
  <tr>
    <td>active</td>
    <td>char(1)</td>
    <td>'Y' if bucketpool can be used, 'N' if the results of this bucket pool are to be ignored. This is a quick way to hide results and make sure no one uses this pool</td>
  </tr>
</table> -->

| Column | Type | Description |
| ------ | ---- | ----------- |
| bucketpool_pk | integer | Primary key |
| bucketpool_name | text | Name of bucket pool |
| version | integer | 1,2,3, ... |
| active | char(1) | 'Y' if bucketpool can be used, 'N' if the results of this bucket pool are to be ignored. This is a quick way to hide results and make sure no one uses this pool |


It is important to add a new bucketpool record with an incremented version when you change any bucket definition for this pool. Internally, only the bucketpool_pk is used to identify a bucket, but the version is displayed to help users know which version is the latest.

All bucket results are tagged with the bucket agent_pk and bucketpool_pk. This allows multiple sets of bucket data for a given upload. Because of this, one could write a user interface that displays the difference between different different bucketpools, or different versions of the same pool. The immediate benefit to having a new set of results with each change in bucket agent or bucket pool is that bucket url's are persistent. If you give someone a url with results from bucketpool 1, then you create a new version (bucketpool 2) then the old url will continue to give the same results as before. By default, the latest bucket results are displayed.

The bucket_ars table is an audit trail recording each time the bucket agent is run. This audit trail is also used by the bucket agent to determine if it should run. That is, if the bucket agent sees that it already successfully processed the same repository data with the same bucketpool_pk, bucket agent_pk, and nomos license scanner agent_pk, then it will refuse to run it again and a message to that effect will be written to the fossology log file.

bucket_ars is defined as an inherited table.

```SQL
CREATE TABLE bucket_ars (
    nomosagent_fk integer,
    bucketpool_fk integer
)
INHERITS (ars_master);
```

## Bucket Definitions

### Table: bucket_def

The bucket_def table defines the rules (buckets) for a given bucketpool.

<!-- <table>
  <tr>
    <td>column</td>
    <td>type</td>
    <td>meaning</td>
  </tr>
  <tr>
    <td>bucket_pk</td>
    <td>integer</td>
    <td>Primary key</td>
  </tr>
  <tr>
    <td>bucket_name</td>
    <td>test</td>
    <td>Name of bucket</td>
  </tr>
  <tr>
    <td>bucket_color</td>
    <td>text</td>
    <td>Buckets are color coded when displayed in a report. This allows you to create visual cues to highlight results. For example, you could make some buckets red to draw your attention to them in the report. Values for this field are web colors like "red", "green", "lavender", or numeric values like '#fe0922'.</td>
  </tr>
  <tr>
    <td>bucket_reportorder</td>
    <td>int</td>
    <td>Order bucket gets reported if report has no other intrinsic order.</td>
  </tr>
  <tr>
    <td>bucket_evalorder</td>
    <td>integer</td>
    <td>Order bucket is evaluated in pool. In other words, a bucket with evalorder 10 will get evaluated before a bucket with evalorder 20. The evaluation order is critical when you have buckets with stopon=Y.</td>
  </tr>
  <tr>
    <td>bucketpool_fk</td>
    <td>int</td>
    <td>Foreign key to bucketpool_pk</td>
  </tr>
  <tr>
    <td>bucket_type</td>
    <td>integer</td>
    <td>1=MATCH_EVERY, 2=MATCH_ONLY, 3=REGEX, 4=EXEC, 5=REGEX-FILE, 99=Not in any other bucket.</td>
  </tr>
  <tr>
    <td>bucket_regex</td>
    <td>text</td>
    <td>Regular expression (posix extended) for bucket_type=3</td>
  </tr>
  <tr>
    <td>bucket_filename</td>
    <td>text</td>
    <td>data file name for types 1,2,4,5. Data files are located in $PROJECTSTATEDIR/bucketpools/{bucketpool_pk}</td>
  </tr>
  <tr>
    <td>stopon</td>
    <td>char(1)</td>
    <td>If this rule is a match and stopon='Y', then don't continue evaluating other bucket rules. If stopon='N', then continue checking rules whether this one matched or not.</td>
  </tr>
  <tr>
    <td>applies_to</td>
    <td>char(1)</td>
    <td>'f' if rule applies to every file. 'p' if rule only applies to (rpm or debian) packages.</td>
  </tr>
</table> -->

| column | type | meaning |
| ------ | ---- | ----------- |
| bucket_pk | integer | Primary key |
| bucket_name | text | Name of bucket |
| bucket_color | text | Buckets are color coded when displayed in a report. This allows you to create visual cues to highlight results. For example, you could make some buckets red to draw your attention to them in the report. Values for this field are web colors like "red", "green", "lavender", or numeric values like '#fe0922'. |
| bucket_reportorder | int | Order bucket gets reported if report has no other intrinsic order. |
| bucket_evalorder | integer | Order bucket is evaluated in pool. In other words, a bucket with evalorder 10 will get evaluated before a bucket with evalorder 20. The evaluation order is critical when you have buckets with stopon=Y. |
| bucketpool_fk | int | Foreign key to bucketpool_pk |
| bucket_type | integer | 1=MATCH_EVERY, 2=MATCH_ONLY, 3=REGEX, 4=EXEC, 5=REGEX-FILE, 99=Not in any other bucket. |
| bucket_regex | text | Regular expression (posix extended) for bucket_type=3 |
| bucket_filename | text | data file name for types 1,2,4,5. Data files are located in `$PROJECTSTATEDIR/bucketpools/{bucketpool_pk}` |
| stopon | char(1) | If this rule is a match and stopon='Y', then don't continue evaluating other bucket rules. If stopon='N', then continue checking rules whether this one matched or not. |
| applies_to | char(1) | 'f' if rule applies to every file. 'p' if rule only applies to (rpm or debian) packages. |

### Column: bucket_type

**Match Every**

A type 1 (MATCH_EVERY) file contains pipe separated lists of licenses (one list per line). A file that contains EVERY license on a line will be in this bucket. The file may contain additional licenses, but if the combination on a MATCH_EVERY file line is found, then the file is in this bucket.

```
APSL

GPL | MPL

GPL | OSL
```

**Match Only**

A type 2 (MATCH_ONLY) file contains a list of licenses (one per line). To be in this bucket, a file must ONLY contain licenses found in this file.

```
GPL

GPL_v1

GPL_v1+

GPL_v2

GPL_v2+

etc
```

**REGEX**

Type 3, (REGEX) means that a posix type regular expression is in the bucket_regex field.

```
(GPL_?v3|Affero_?v3)
```

**EXEC**

Type 4, (EXEC) tells the bucket agent to execute the program in bucket_filename. Typically these are scripts (see examples below). This is the most complex, and most flexible bucket type.

**REGEX File**

The REGEX_FILE type is in the format: {kwd} {regex} {operator} {kwd} {regex}

kwd is "license" or "filename" 

operator is "and", "or", "not" 

The operator and following kwd, regex are optional

For example:

```
 license "[^,]*(GPL_?v3|Affero_v3)[^,]*" and filename binutils
  filename realplayer.*
  filename ksh and license ATT
  license .*-eula
```

* 99 *

* This is a special bucket type for files that didn't go into any other bucket.

# Multiple Bucket Pools

You can have as many bucket pools as you like. Users can set their default bucket in their account settings. As of this writing there isn't a way for users to pick the bucket they want to use (it uses their default bucket). That might or might not change before the 1.2 release.

# Rerunning Buckets

When you create a new bucket pool, you might need multiple attempts to get the definitions right. Or you might be creating a new bucket pool that is just an update of a previous one. In either case you will need to rerun the bucket agent on the same upload. In v 1.2, you need to create a new bucket pool (bucketpool and bucket_def records), then go to Admin > Users > Account settings and pick the new default bucket pool. Then in Show Jobs, delete the bucket job. Finally, in Jobs > Agents, queue up a new bucket agent job.

If you want to rerun ALL the bucket jobs you have done and throw away all the bucket results, then do this in psql:

```SQL
fossology=# delete from bucket_container; delete from bucket_file;
 delete from bucket_ars;

update jobqueue set jq_starttime=null, jq_endtime=null, jq_endtext=null, 
       jq_end_bits=0, jq_elapsedtime=0, jq_processedtime=0, jq_itemsprocessed=0 
       where jq_type='buckets';

delete from report_cache;
```

# **Deleting Bucket Results**

When you are working on bucket definitions, sometimes it's nice to run a bucket scan and then delete the data you just created, change a definition, rerun, repeat, all without creating a new bucket pool or changing your default bucket pool.

To erase the data you just created, there are three tables that need to be updated: bucket_ars, bucket_container, and bucket_file. The first two are easy, the last is not. In the following, lets assume you are working with upload_pk = 456.

Since the bucket_ars table recorded the last bucket scan, delete that record. It's only a single record and it's easy to identify. If this upload is only used for testing, you can just:

```SQL
delete from bucket_ars where upload_fk=456;
```

The bucket_container table says what buckets apply to containers (directories, tars, ...). Each record is tagged with an uploadtree_pk, so to delete all the bucket_container recs:

```SQL
delete from bucket_container where uploadtree_fk 

in (select uploadtree_pk from uploadtree where upload_fk=456);
```

Removing records from the bucket_file table is not so easy because these records are tagged to a physical file (pfile_pk). Multiple uploads may refer to the same physical file so you can't simply delete bucket_file records that refer to a given pfile because that record records the bucket for all uploads that refer to that pfile. This is a good thing because it means once a file has been scanned, it doesn't have to be scanned again just because it's uploaded again. But it means that before you delete a bucket_file record you have to make sure that the pfile isn't used by another upload.

There is a corner case where you might want to delete ALL bucket records. For example, you might be working on a test fossology installation to develop your buckets. In this case:

```SQL
delete from bucket_ars;

delete from bucket_file;

delete from bucket_container;
```

# **Bucket Scripts**

The EXEC type bucket will execute any program and pass the following environment variables to it:

<table>
  <tr>
    <td>Variable</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>FILENAME</td>
    <td>Name of file being scanned</td>
  </tr>
  <tr>
    <td>LICENSES</td>
    <td>Pipe separated list of licenses for this file</td>
  </tr>
  <tr>
    <td>PKGVERS</td>
    <td>Package version from the package header</td>
  </tr>
  <tr>
    <td>VENDOR</td>
    <td>Vendor from the package header</td>
  </tr>
  <tr>
    <td>PKGNAME</td>
    <td>simple package name (e.g. "cup", "mozilla-mail", ...) of file being checked. Only applies to packages.</td>
  </tr>
  <tr>
    <td>SRCPKGNAME</td>
    <td>Source Package Name</td>
  </tr>
  <tr>
    <td>UPLOADTREE_PK</td>
    <td>uploadtree_pk</td>
  </tr>
  <tr>
    <td>PFILE_PK</td>
    <td>pfile_pk</td>
  </tr>
  <tr>
    <td>PKGTYPE</td>
    <td>'s' if source, 'b' if binary package, '' if not a package</td>
  </tr>
</table>


## Custom tables and data files

You can create whatever custom tables and files that you need. FOSSology won't remove tables in the database that it didn't create. Data files can be located anywhere, including `$PROJECTSTATEDIR/bucketpools/{bucketpool_pk}`.

# **Examples**

## Example 1: Hello World (shell)

```Bash
 #!/bin/bash
  # Everthing will get put into this bucket because it always returns zero (success)
  cd /tmp
  echo "FILENAME: ", $FILENAME >> testexec.out
  echo "LICENSES: ", $LICENSES >> testexec.out
  echo "PKGNAME: ", $PKGNAME >> testexec.out
  echo "PKGVERS: ", $PKGVERS >> testexec.out
  echo "VENDOR: ", $VENDOR >> testexec.out
  echo "SRCPKGNAME: ", $SRCPKGNAME >> testexec.out
  echo "UPLOADTREE_PK: ", $UPLOADTREE_PK >> testexec.out
  echo "PFILE_PK: ", $PFILE_PK >> testexec.out
  echo "PKGTYPE: ", $PKGTYPE >> testexec.out
  echo "LOG: testexec is done (this will be written to the fossology log file)" 
  # return success
  exit 0
```

## Example 2: Simple PHP script

```PHP
#!/usr/bin/php
<?php
  global $GlobalReady;
  $GlobalReady = 1;   // required for pathinclude.php to read common php functions
  // pathinclude.php defines global variables $WEBDIR, $SYSCONFDIR, etc
  require_once ('/usr/local/share/fossology/php/pathinclude.php');
  require_once ("$WEBDIR/common/common.php");

  $path="$SYSCONFDIR/$PROJECT/Db.conf";

  $PG_CONN = pg_pconnect(str_replace(";", " ", file_get_contents($path)));
  if ($PG_CONN === false)
  { 
    echo "FATAL: failed to open fossology db\n";
    return(1);
  }

  $sql = "select count(*) as count from license_file";
  $result = pg_query($PG_CONN, $sql);
  DBCheckResult($result, $sql, __FILE__, __LINE__);
  $row = pg_fetch_assoc($result);
  pg_free_result($result);
  echo "license_file count is $row[count]\n";

  echo "LOG: hello from db connected php script\n";

  $envVals = array("FILENAME", "PKGNAME", "SRCPKGNAME", "LICENSES", "PKGVERS",
                   "VENDOR", "UPLOADTREE_PK", "PFILE_PK", "PKGTYPE");
  foreach ($envVals as $envVal) echo $envVal, getenv($envVal)," \n";

  pg_close($PG_CONN);
  echo "LOG: Good-bye\n";
  return 0;
?>
```

# **Step by Step**

Buckets were made to be defined by an IT or sysadmin person because of the technical skill required. Specifically, they should understand regular expressions and possibly scripting. If you aren't a programmer or system administrator the term "regular expression" probably means nothing to you. So for this step by step, just enter in the values I specify in the instructions.

Here are step by step instructions for creating a bucketpool called "mybuckets" and a bucket to group all the Apache Software Foundation licenses. I am assuming that you know how to insert records into a database. For example, you might use phppgadmin, pgadminIII, or psql. If you want a simple web interface to the database, install phppgadmin.

**1) Create a bucketpool record in the fossology database.**

Buckets are used in sets called bucketpools. So you could have a bucket pool called "my experiments". In this pool you will create your apache bucket. So the first step is to insert a bucketpool record into the database table 'bucketpool'. If you are unfamiliar with sql, you can use a program like phppgadmin which will give you a web browser interface to the database. I'm going to assume you have phppgadmin installed and know how to use it to browse the fossology database. To add a new bucketpool record, click on table 'bucketpool', then Insert. Type in a bucketpool name, and a description of what this bucket pool is for and then click on Insert. You won't need to change any of the other default values.

**2) Get the bucketpool key.**

After you insert the bucket pool record in step 1, stay in phppgadmin and click on the bucketpool table, then click on 'Browse'. This will show you a list of all your bucketpool records. The one you just added should be the last one. Look at the bucketpool_pk of the record you just added and remember it. If your only other bucketpool is the demo, then your new one should be bucketpool_pk = 2. But whatever it is, remember it for step 3.

**3) Create the bucket definition** (the actual bucket that will group all the different apache license versions).

In phppgadmin, click on table 'bucket_def', then insert. Leave all the default values for now. Fill in the following fields:

1. - bucket_name This is the name of your bucket. In this case something like "All Apache Licenses" seems appropriate.

2. - bucketpool_fk This is the bucketpool_pk that you remember from step 2. Don't worry that one is called _fk and the other is _pk, that is not an error.

3. - bucket_type Enter the number 3

4. - bucket_regex Enter "apache" (but without the quotes)

5. - bucket_filename Click on the Null checkbox

6. - Hit insert

To add more bucket definitions to the same bucketpool, all you need to do is repeat step 3. You should create one more bucket.

**4) Create bucket for all files that are not in any other bucket.**

It is important that every file go into a bucket. This is what bucket_type 99 is for. 

Repeat step 3:

1. - bucket_name "Not in any other bucket"

2. - bucket_evalorder 1000

3. - bucketpool_fk same as in step 3

4. - bucket_type 99

5. - bucket_regex click on NULL checkbox

6. - bucket_filename click on NULL checkbox

7. - Hit insert

**5) make your new bucket your default**

If you have gotten this far, your new bucketpool and bucket are defined and ready to use, so make your new bucketpool your default. In the fossology user interface, click on "Admin" > "Users" > "Account Settings" to change your user settings.

1. - Enter your password in the "enter your password" field.

2. - Where it says "Default bucketpool", select your new bucketpool from the pull down.

3. - Click on "Update" to update your account.

You are all set. To use your new bucket, upload a file and select "Buckets" as one of the scans you want to run.

If you are successful with the above, then I can tell you more about more complicated buckets.

### Notes

1. As you can see from the above, a lot more could be done to make buckets easier to define and use. Your vote counts.
