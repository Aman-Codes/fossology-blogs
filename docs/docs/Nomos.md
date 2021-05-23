Thanks go to Raino for starting this page.

The following modifications to the license scanner require you to use development tools as well as using psql, phppgadmin, pgadmin3, or some other client to send sql commands directly to the postgres database engine. You might consider backing up your database (pg_dump) before doing direct sql database updates.

## Command Line

Nomos can be run from the command line:

```
./nomos myfile.c
```

The output is in this format:

```
File myfile.c contains license(s) AFL_v3.0, GPL_v2.1+
```

The option ```-S``` is a mode where Nomos prints the highlighting information as a result of the call. In Fossology, it is used to make the color highlighting in the Nomos OneShot GUI. You could use it to write your own highlighting.
The index is used to determine which license the finding corresponds to.

It returns keyword position, length and index. The index is used to determine which license the finding corresponds to.



## Licenses

The licenses that Nomos scans for are [here.](http://www.fossology.org/projects/fossology/wiki/Nomos_liclist_)

## How to Add a New License Signature

Adding a new license has three steps. In the first step you create a new license signature. In the second step you have to add the signature check to the scanner source code. The third step is to install the updated agent. The files are in the src/nomos/agent/.

### Step 1: Add the new signature - STRINGS.in

Nomos does license identification using short phrases (regular expressions) and heuristics (e.g. phrase must be found in (or out of) proximity to another phrase or phrases.

Nomos may also identify a "style" type of license if it has similarities with a known license type.

The file STRINGS.IN define the text portion of a license signature.

For example:

```
 %ENTRY% _TITLE_XYZ-LICENSE1
  %KEY%      "licen[cs]" 
  %STR%      "XYZ-licen[cs]e (v|version ) 1\.?0" 
```

* Note syntax. These are regular expressions.

* The ENTRY is a constant used in the code (step 2).

* KEY is a simple regular expression. This is used to quickly scan the code to see if we should look further for the XYZ license. KEY's are not unique between all the key signatures.

* STR is regular expression signature of something unique about the license. It depends on KEY being found first.

* In the top of STRINGS.IN you will find notes about how to update the file.

### Step 2: Change the scanner - parse.c

The second part of the license signature are the heuristics. These interpret when and how your entry in STRINGS.IN should be interpreted. This happens in parse.c. If the new license was identified a style type license then add to right place a new else if block like:

```
 else if (INFILE(_TITLE_XYZ-LICENSE1)) {
    INTERESTING("XYZ_v1.0");
  }
```

Nomos agent has to be now recompiled (make). Before you install the new agent you should test it on the command line. 

```
 ./nomos myfile.c
```

Sample output:
```
  File myfile.c contains license(s) XYZ_v1.0, LGPL_v2.1
```

### Install

The updated agent can be installed from the nomos directory:

```Bash
/etc/init.d/fossology stop
sudo make install
/etc/init.d/fossology start
```

### Contribute or Fork?

After you've gone though the effort of creating license signatures, recompiling, and installing your updated scanner, guess what happens the next time you upgrade your fossology package? Yep, we will replace your custom scanner with our new one and all your changes will be lost. That would probably irritate you as much as it would me. You should probably consider one of two approaches:

1. Contribute your new license signatures back to the project.

2. Maintain your own diffs.

## Debugging

### Activating traces

Activating the defines of PROC_TRACE and/or DOCTOR_DEBUG (see [line 31 of file parse.c](https://github.com/fossology/fossology/blob/master/src/nomos/agent/parse.c#L31)) Nomos generates lot of tracing information that is really helpful to debug it.

PROC_TRACE will show you, for example, which regex's were tried and which are successful. To see the successful matches, grep the output file for "addRef".

DOCTOR_DEBUG will show you the before and after versions of the buffer to be processed. Look in the output file or "----- [Dr-BEFORE:] -----" and "+++++ [Dr-AFTER] +++:"

## Rescanning

Changes to the license phrase file STRINGS.in and/or the code in parse.c are not automatically applied to previous license results. To reiterate, files that are already processed will not be reprocessed with the updated license phrases/code unless you force them to. This bears repeating: **EVEN IF YOU RE-UPLOAD FILES AS A NEW UPLOAD** your scanner will not run on any which have been scanned before, and you will get old results. This can make it seem like your Nomos is not working, and lead to the tearing-out of hair. Files will be rescanned if you install a newer version of nomos or follow the options below.

### New scan Option 1 - saving old and new results

If you want to keep all your old scan data available, but have your new scans use your custom nomos program, you need to create a new version record for the agent:

`SELECT * FROM agent WHERE agent_name='nomos' ORDER BY agent_rev ASC LIMIT 1;`

Duplicate this record and increment the agent_ref. If your agent record has a NULL or "default" in the agent_rev, just make up your own revision, like "1" or "2".

Once you have created a new agent record with an incremented revision, any new scan you request will use your custom nomos scanner.

If you want to rescan an upload:

1. Click on the main "Browse" tab.

2. Navigate using the left navigation bar till you see your upload in the right hand window.

3. Click on the "jobs" link to see the history of jobs run on your upload.

4. On the right side of the window, locate the "Reset | Delete" actions for the agent you wish to rerun.

5. Click on "Delete". The window will refresh and the job will be gone.

6. Select "Jobs" → “Agents” from the top menu bar.

7. Select the folder containing the upload you wish to analyze.

8. Select the upload to analyze.

9. A list of analyses available for the upload are listed in step 3.

10. Select the nomos and Click on the "Analyze" button.

11. The job is automatically queued up & run.

Notice that this method didn't delete any of your own data. That data will still be in the database and you can see it by selecting the nomos version in the nomos license browser. Since you didn't delete any previous data, you also won't break bucket results that depended on it.

I know we should make this easier for fossology system admins. If you feel the same, let us know in our public mailing list fossology@fossology.org.

### Rescan Option 2 - destroy old results, then rescan

If you would like to remove your old nomos license results, and then rescan, this section is for you. You can either remove results for individual uploads, or remove all the nomos results for everything in the repository.

### Remove Results for a single upload

First you need to identify the upload whose results you want to remove. This means finding the numeric key that fossology uses to identify uploads. You could do this by browsing the database table "upload". The information you need is the primary key "upload_pk". Another way to do it is to use the fossology file browser. In the url you will see an "upload" parameter. For example, if the url is:

[http://myfossology.com/?mod=browse&folder=1&show=detail&upload=16&item=3178627](#)

The upload_pk is 16.

Now that you know the upload key, you can erase all the license results for that upload with:

DELETE FROM license_file WHERE pfile_fk IN (SELECT pfile_fk FROM uploadtree WHERE upload_fk=16);

Next you need to remove the audit trail records for the previous license scan:

```
DELETE FROM nomos_ars WHERE upload_fk=16;
```

### Removing all license results

```
DELETE FROM license_file;
```

Next you need to remove the audit trail records for all the previous license scans:

```
DELETE FROM nomos_ars;
```

## Start the rescan

To rescan you need to reset the previous scan jobs in the jobqueue table by setting jq_endtime, jq_endtext to null where jq_type='nomos'. If you really want to be complete you can zero out jq_end_bits, jq_elapsedtime, jq_processedtime, jq_itemsprocessed in the same records. Finally, you need to queue something. When you do that the scheduler will notice all the changes you made, see all the incomplete jobs (started but no jq_endtime), queue them up, and run them. This is NOT recommended. Maybe I should have said that first. Well, it's not recommended if you have bucket scan data. This is because the bucket results are dependent on the previous license scan. The above instructions would be fine if you also remove ALL your bucket results (empty bucket_ars, bucket_file, bucket_container tables). You can requeue all the bucket scans just like the nomos scans for jq_type='buckets'.