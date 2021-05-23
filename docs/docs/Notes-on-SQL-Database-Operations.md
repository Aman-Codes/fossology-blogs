## Notes on Query Optimization

When experiencing performance problems:

* extract the query
* try to run every element of the query alone and see which is taking most time
* try to run the query with individual constraints deactivated and try to see which of the constraints is taking much time

If the element that takes out time is identified:

* check the indices
* check if columns a,b can be made an index
* check if columns a,b,c can be made an index


## Useful SQL Commands

These are examples of SQL statements you might find handy. Don't forget to substitute real values for the example values given. For example, if the query says "upload_fk=456", you need to replace 456 with your upload value.

### Delete copyright records for an upload

```SQL
delete from copyright where pfile_fk in 
    (select distinct(pfile_fk) as pf from uploadtree where upload_fk=454);
```

Warning copyright results are on pfiles (the physical file reference in the database). So if you delete a copyright result for pfile 123 in upload 456, AND another upload (789) refers to pfile 123, then if you delete the results for 456, and do a copyright report on upload 789 you will see all the 789 copyrights with the results for pfile 123 omitted. This is a known problem that is solved in newer agents (nomos, buckets at this v 1.2 time).

### Delete nomos license records for an upload

```SQL
delete from license_file where pfile_fk in 
    (select distinct(pfile_fk) as pf from uploadtree where upload_fk=454);
```

The same warning above for copyrights also apply to nomos results. However, this is still a useful thing to know how to do if you understand the above warning on how pfiles are reused.

Sometimes you don't actually want to delete the records, you just want to rescan without breaking any previous reports. To do this, you need to add a new nomos record in the agent table, remember to update the version. Then reschedule the nomos agent. In v 1.2 the user interface to reschedule an agent was not updated to account for agents like nomos that can keep multiple revisions of results. So you can't simply hit the reset link in Show Job Queue. You have to delete the job, then use Jobs > Agents to schedule a new job.

Delete bucket records for an upload 

```SQL
delete from bucket_ars where upload_fk=97; 

delete from bucket_file where pfile_fk in (select distinct(pfile_fk) as pf from uploadtree where upload_fk=97); 

delete from bucket_container where uploadtree_fk in (select uploadtree_pk from uploadtree where upload_fk=97);
```

## Bucket SQL Commands

Bucket results are stored in two tables, bucket_file and bucket_container.

Table bucket_file is used to relate pfile_pk's to a bucket.

Table bucket_container is used to relate uploadtree_pk's to a bucket. This table

is used when the uploadtree_pk has no pfile. For example, directories.

### Selecting bucket_file records

```SQL
select distinct bucket_file.pfile_fk, ufile_name, bucket_fk

   from bucket_file,

   (select pfile_fk as PF, ufile_name from uploadtree where upload_fk=444) as SS

 where PF=bucket_file.pfile_fk;
```

The above will return the bucket_file recs for upload_pk=444 regardless of the file 

being an artifact or which version of the nomos and bucket agents were used to do the scan.

The condition to remove artifacts looks like

```
((ufile_mode & (1<&lt;28))=0)
```

So here is the new query to select the non-artifact pfile buckets for a specific scan of an upload, that is, for specific nomos and bucket agent pk's (nomos agent_pk 134 and the bucket agent_pk 151 are used in this example):

```SQL
select distinct bucket_file.pfile_fk, ufile_name, bucket_fk,

        nomosagent_fk, agent_fk

 from bucket_file,

      (select pfile_fk as PF, ufile_name, ufile_mode from uploadtree

         where upload_fk=444) as SS

 where PF=bucket_file.pfile_fk

   and ((ufile_mode & (1<&lt;28))=0)

   and nomosagent_fk=134

   and agent_fk=151;
```

Or if you want the bucket name resolved, add another join:

```SQL
select distinct bucket_file.pfile_fk, ufile_name, bucket_fk, bucket_name,

        nomosagent_fk, agent_fk

 from bucket_def,

      bucket_file,

      (select pfile_fk as PF, ufile_name, ufile_mode from uploadtree

         where upload_fk=444) as SS

 where PF=bucket_file.pfile_fk

   and ((ufile_mode & (1<&lt;28))=0)

   and nomosagent_fk=134

   and agent_fk=151

   and bucket_fk=bucket_pk;
```

### Selecting bucket_container records

The same query for bucket_container is:

```SQL
select distinct UPK, ufile_name, bucket_fk, bucket_name, 

nomosagent_fk, agent_fk 

from bucket_def, bucket_container, 

(select uploadtree_pk as UPK, ufile_name, ufile_mode from uploadtree 

where upload_fk=444) as SS 

where UPK=uploadtree_fk 

and ((ufile_mode & (1<<28))=0) 

and nomosagent_fk=134 

and agent_fk=151 

and bucket_fk=bucket_pk;
```