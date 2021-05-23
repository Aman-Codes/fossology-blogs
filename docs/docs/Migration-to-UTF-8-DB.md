# Introduction to problem

When FOSSology was launched, the default character-set encoding for Postgres database was the evil `SQL_ASCII`. The `SQL_ASCII` represents bytes between 0-127 according to ASCII standards but stores the rest of 128-255 bytes as uninterpreted data. Which means you can store any binary value in it and Postgres will not complaint.

This caused multiple issues with copyright agent. Since copyright agent compares file content using RegEx and store anything it finds to DB (which defaults to `SQL_ASCII`) and this text can contain unicode characters or even binary which is not encoded anywhere. This also causes issues while generating reports. But with newer versions of PostgreSQL database, the default encoding changed to `UTF-8`.

# Need of external migration tool

Since old DB already contains non-encoded unicode characters plus binary data, it become impossible to simply use `pg_dump` and `psql` method to migrate data from old DB with `SQL_ASCII` encoding to new DB with `UTF-8` encoding.

To fix this, the binary strings have to be removed and the unicode data needs to be recoded.

# Migration solutions
## Fixing pg_dump (fast)

One of the solution is to run additional program provided by [PR #1557](https://github.com/fossology/fossology/pull/1557). The program uses `libicu` to do the magic. It works on dump created by `pg_dump` and is the recommended way for large DB as the read/write happens directly on filesystem.

### Steps for migration
1. Run the `pg_dump` to get the sql file (do not use any format other than plain)
2. Compile the tool
```console
$ make -C src/copyright fo_unicode_clean
```
3. Run the tool
```console
$ ./src/copyright/fo_unicode_clean -i <pg_dump.sql> -o <encoded_dump.sql>
```
4. Change the encoding in SQL dump (`<encoded_dump.sql>`)
    * Since old DB was with `SQL_ASCII` encoding, the dump generated will have `SQL_ASCII` as the encoding for the table.
    * Either edit the file using tools like `sed` or `awk`. If the dump file is huge, this might be a tricky job.
    * Or manually create the DB in new host (make sure the new DB have exactly the same name as old DB otherwise the dump will create a new DB and restore data to it) with `UTF-8` encoding. While restoring the DB, this will result in an error but unless `ON_ERROR_STOP` is set, you can ignore it.
5. Restore the data using `psql --file=<encoded_dump.sql>`

## Fixing existing DB (slow)

With the help of [PR #1651](https://github.com/fossology/fossology/pull/1651), a new script was added which can do recoding of data in current DB. The script directly reads the data from DB, fix the encoding, and write it back to the DB. This involves interaction in DB, thus this method is slow. This method is recommended if you have small DB or do not want to use `pg_dump`.

### Steps for migration
The script should work whenever you run `fo-postinstall`. But you will receive a warning if the total rows are more than 500,000.

To force the encoding, you can either
1. Run the script from the path provided in the warning.
1. Run the `fo-postinstall` with `--force-encode` flag.

Once the script finishes, it also changes the encoding of database to `UTF-8`.

# Changes done in copyright agent

`libicu` to the rescue. As with the migration tool `fo_unicode_clean`, the copyright (and sister agents) and ojo agent now filter the text before writing the text to DB. First change to clean non UTF-8 text was done with [PR #1528](https://github.com/fossology/fossology/pull/1528) and later the function was moved to FOSSology library in [PR #1651](https://github.com/fossology/fossology/pull/1651/files#diff-319fae1eeaaf8f40905e80e30abca806R43) under the function named `recodeToUnicode()`.

These changes will help prevent non UTF-8 text getting into DB with copyright (and sister agents) and ojo. Also, if the DB encoding is already UTF-8, it will eliminate the chance of DB rejecting the data since it is not UTF-8 compatible reducing data loss.

### Related issues
* https://github.com/fossology/fossology/issues/1492
* https://github.com/fossology/fossology/issues/1203