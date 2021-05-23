## Creating a new instance of the database

The Postgres command, pg_dump, can be used to dump the sql statements required to build the database schema and define users, functions, views, etc. When used with the options below, this will dump only the schema (not any database contents) to file ossdb.sql.

```
pg_dump --create -f ossdb.sql -s ossdb
```

For our purposes, the only user should be user "fossy". So the next step is to create that user (role) by adding to ossdb.sql:

create role fossy with option createdb login password fossy

**NOTE:** The password must match that in /usr/local/share/fossology/dbconnect/

After the this load file (ossdb.sql) has been created, keep it in a version control system to make future deployments easier.

### DB API (libfossdb)

**NOTE: Not all of us agree with the logic below and prefer to use direct libpq calls since they are much more powerful and we don't have to maintain the interface described here.**

There are two ways that applications can access the DB. Either they can use the Postgres function calls, or they can use the generic DB API.

Programs that use the Postgres library have access to every possible function and return value available from Postgres. However, there are some detracting issues to consider:

* Complexity. While the Postgres API gives a very complete level of control, it is also overly complicated.

* Portability. Developing for Postgres mean developing for a specific version of Postgres. If the database is every upgraded or replaced with a different DB, then you will need to modify every program that uses the DB.

* Consistency. Since every program will implement their DB interface independently, it is very possible for one program to be missing a critical function that another program has. Every program will be different.

Although there are some generic DB APIs available, I found them to either be too complicated or in need of wrappers to work with our DB configuration. The solution was libfossdb -- the generic DB API. This is a very simple API for accessing the DB used by the FOSSology analysis system. The functions are minimalistic and intended to be used without knowledge of Postgres (but knowledge of SQL is required).

By using the **libfossdb**, all applications use the same DB functions. If a problem occurs or we change databases, then only the API needs to be altered. In addition, the API ensures that all tools implement the DB interface the same way.

## Data Structures

Applications using libfossdb manage a "void *" structure that contains DB information. Under normal circumstances, the application should never need to access the actual contents of this structure. The structure is allocated by DBopen() and freed by DBclose().

For specific details, the structure is as follows:

```C
struct dbapi
{
	/****
	This is a DB-specific structure
	It holds connections and results.
	All manipulations should use the DB API to access it.
	If the DB ever changes, just change this structure (for state)
	and the DB functions.
	****/
	PGconn *Conn; /* DB-specific connection */
	PGresult *Res; /* result from query */
} ;

typedef struct dbapi dbapi;
```

**NOTE**: If the DB or API changes, then this structure may change! Non-libfossdb functions should not depend on the contents of this structure! (This is why all applications of the API simple manage a void pointer. They don't need to see the internals.)

### Functions

The following functions are defined by the libfossdb.

**void * DBopen ()**

This function initiates a connection to the DB and returns a handle for the DB connection. This function will use a configuration file that contains the DB login account and password.

1. If the environment variable $DBCONF is defined, then it specifies the path to the configuration file.

2. If $DBCONF is undefined, then /etc/ossdb/dbconnect/ossdb is used.

**void DBclose (void *DB)**

This function closes the DB connection created by DBopen() and frees the data structure. Even if the DB connection closes prematurely, this function must be called to free the memory.

**void * DBmove (void *DB)**

The DB structure stores the connection and the results from the last SQL command. If you need to created a SQL query from a DB results (e.g., looping over the DB results), then you will need to move the results from the last command to a different handle. This function detaches the results from the DB handle and returns a new handle containing the results.

DBnew = DBmove(DBold);

There are some warnings when using this function:

* The results (DBnew) contains data but not an open DB connection. You cannot use this handle to communicate with the DB but you can use it to access the results from a previous query.

* When you are finished with the handle, you must call DBclose(). For example: DBnew = DBmove(DBold); DBclose(DBnew); Closing the data handle does not close the DB connection from the original (DBold) handle.

* There is no way to re-attach the data to the old handle.

**int DBaccess (void *DB, char *SQL)**

This is the main function for the entire API. Given a DB handle created from DBopen() and an SQL query, perform the query. There are a few possible result codes:

* 0. This value indicates that the query was successful, but there are no results. This usually happens when the SQL query performs an INSERT or UPDATE.

* 1. This value indicates that the query was successful, and there are results. This usually happens when the SQL query performs a SELECT. **NOTE**: The results may be empty -- zero returns rows is different from no returned rows.

* -1. The query failed due to a constraint error. The exact constraint is not specified.

* -2. The query failed due to an unspecified error.

* -3. The query timed out. By default the timeout is set to two minutes.

**int DBdatasize (void *DB)**

If there is data available, this identifies the number of rows returned. If there is no data (DBaccess() returned 0) or the DB handle is invalid, then -1 is returned. If the DBaccess() returned 1 but there is no data, then 0 is returned.

**int DBcolsize (void *DB)**

Returns the number of columns in the result. If there is no data (DBaccess() returned 0) or the DB handle is invalid, then -1 is returned. If the DBaccess() returned 1 but there is no data, then the number of columns will still be returned.

`char * DBgetcolname (void *DB, int Col)`

Returns the name of a specific column, or NULL if the column does not exist. This returns a pointer to a static memory location. The caller must **NOT** modify or free this value.

`int DBgetcolnum (void *DB, char *ColName)`

Given a string, return the number of the column whose name matches the string. -1 is returned if the column does not exist.

`char * DBgetvalue (void *DB, int Row, int Col)`

Return the contents of a cell in the results table, or NULL if the column does not exist. This returns a pointer to a static memory location. The caller must **NOT** modify or free this value.

`char * DBgetvaluename(DB,Row,ColName)`

This macro returns the contents of a cell, but the column is specified by name rather than number. NULL is returned if the row or column does not exist. This returns a pointer to a static memory location. The caller must **NOT** modify or free this value.

`int DBisnull (void *DB, int Row, int Col)`

The DBgetvalue() function does not distinguish between a non-existant cell and one with a value of NULL. This function determines if the cell is defined and has a value of NULL. It returns 1 if the cell is NULL and 0 if it is non-NULL or undefined.

### Sample Usage

An example use of the libfossdb API:

```C
void * DB; /* DB handle */
int rc; /* return code */
char *SQL; /* the SQL query to run */
int i,j; /* iterators */

DB = DBopen();
if (!DB) { fprintf(stderr,"ERROR: Could not connect to the DB\n"); exit(1); }
rc = DBaccess(DB,SQL);
switch(rc)
  {
  case 0: /* Ok, Got no results. Likely due to an INSERT or UPDATE SQL query */
    break;
  case 1: /* Got results.  Likely due to a SELECT query */
    /* Display results */
    for(i=0; i<DBgetdatasize(DB); i++) /* for each row */
      {
      printf("=====\n");  /* record separator */
      for(j=0; j<DBcolsize(DB); j++) /* for each column */
        {
        printf("%s: %s\n",DBgetcolname(DB,j), DBgetvalue(DB,i,j));
        }
      }
  default:
     fprintf(stderr,"ERROR running SQL command: %s\n",SQL);
  }
DBclose(DB);
```

### Test Applications

The following test applications are provided with the libfossdb library.

**dbtest**

This stand-alone program runs DBopen(). It reads SQL commands from stdin and calls DBaccess(). All results are displayed to stdout. When EOF is received (stdin is closed), DBclose() is called.

This is a very poor replacement for psql. In particlar, psql can handle multiple-line SQL commands and returns very verbose messages. In contrast, the dbtest program is more than adequate for testing the library's functions.

**dbq**

This program queries the job and jobqueue tables using the same calls that the Scheduler uses.

```
Usage: ./dbq <command> [args]
  Commands:
    list :: list ALL elements in the queue.
      If args are provided then only list those queue items
    top :: list top elements in the queue.
      If args are provided then only list those queue items
    add  :: add a queue item.
      Args are field=value pairs to be inserted.  They should be SQL compliant
      If no args, then you will be prompted for every value
    update :: update an existing queue item.
      1st arg type of record modify: 'job' or 'jobqueue'.
      2nd arg is the ID of the record to modify.
      Remaining Args are field=value pairs to be modified.
      They should be SQL compliant
      If no args, then you will be prompted for every value
    delete :: remove an existing queue item.
      Args are JOB IDs of the queue item to delete.
      This also removes all associated JOBQUEUE records.
```