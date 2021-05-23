Maintagent is the FOSSology maintenance agent. This agent enforces the archive/expiration of an upload, checks the database for inconsistencies, checks for new updates, removes orphaned repository files and a host of other functions listed below. The agent can be run stand alone from the cli or from the scheduler. Each function can be individually specified, or -A (all) will run all the functions. You must be a FOSSology admin to run this. It will block all other agents when run from the scheduler.

* To run the maintagent, you must be a FOSSology admin (PLUGIN_DB_ADMIN).

* When run via the scheduler, maintagent.conf must specify special[] = EXCLUSIVE, and special[] = NOKILL

* Each maintenance action can be individually specified from the command line, or -a (all) can be specified.

## -A Run ALL operations

## -a Run all non slow operations

## -U Process expired uploads (Archive or Delete) (slow)

This will be a new feature in 2.5.0.

## -D Vacuum analyze the database

## -P Verify and fix file permissions

/usr/share/fossology

/srv/repostitory

/etc/fossology

And so on.

## -g Remove orphaned gold files from the repository.

These may be left by pre 2.4.0 versions of delagent.

## -p Verify (only) file permissions

## -Z remove orphaned files from the repository (slow)

Loop through each file in the repository and make sure there is a corresponding reference in pfile, and also make sure that the pfile is referenced in uploadtree. For a large system, this can be a very slow process.

## -R remove uploads that have no pfiles

```SQL
DELETE FROM upload WHERE upload_pk 
  IN (SELECT upload_fk FROM uploadtree WHERE parent IS NULL AND pfile_fk IS NULL) 
  OR upload_pk NOT IN (SELECT upload_fk FROM uploadtree)
```

## -F Validate folder contents

Remove folder contents with invalid upload references

DELETE FROM foldercontents WHERE foldercontents_mode = 2 AND child_id NOT IN (SELECT upload_pk FROM upload)

Remove folder contents with invalid uploadtree references

DELETE FROM foldercontents WHERE foldercontents_mode = 4 AND child_id NOT IN (SELECT uploadtree_pk FROM uploadtree)

Remove unreferenced folders

```SQL
DELETE FROM folder WHERE folder_pk 
   NOT IN (SELECT child_id FROM foldercontents WHERE foldercontents_mode = 1) 
   AND folder_pk != '1'
```

## -T Remove orphaned temp tables

Remove delagent tmp tables (the delup_xxxx_pfile tables)

Remove pkgmetagetta tmp tables (metaanalysis_xxx tables)

```SQL
DELETE FROM information_schema.tables WHERE table_type = 'BASE TABLE' 
   AND table_schema = 'public' AND table_name SIMILAR TO '^metaanalysis_[[:digit:]]+$'
```

## -i Initialize the database, then exit

## -V Print the version info, then exit.

## -c SYSCONFDIR