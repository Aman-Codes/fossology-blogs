# DbManager-c

It is an opaque struct fo_dbManager which facilitates queries for c.

To use it you need to include "libfossdbmanager.h", within in you can find the doxygen documentation for the interface. This is a short summary of the main features.

fo_dbManager* has the expected sematic for a C-style object:

* constructors are of the form "fo_dbManager* fo_dbManager_new([... parameters])"
* getters are of the form "(type) fo_dbManager_getProperty(fo_dbManager* dbManager);"
* setters are of the form "void fo_dbManager_setProperty(fo_dbManager* dbManager, (type) value);"
* destructors are "void fo_dbManager_\[...\](fo_dbManager* dbManager)"

Of particular interest are

* the **_setLogFile()** setter:
    opens by name a log file and redirects all output (if never set or set as NULL logs go to stdout).
* the **_finish()** destuctor:
    it closes the connection with the database before destroying the dbManager.
* the **_fork()** method:
    available if you have already a dbManager with a configuration file attached (for example created from fo_scheduler_connect_dbMan()).
    It creates a new dbManager from the existing one, with a newly opened connection (an eventual log file is not duplicated by default).
    Useful when working with multi-threading to provide an independent connection for each child thread.

## execution of simple queries

Always remember to escape strings that you use as parameters with fo_dbManager_StringEscape().
```
char* aString = fo_dbManager_StringEscape(dbManager, "aString");
long aLong = 1;
result = fo_dbManager_Exec_printf(dbManager, "SELECT * FROM t WHERE c='%s' OR c2=%ld", aString, aLong);
```

## separation query preparation from execution

The dbManager allows to easily use prepared statement in a very compact way and without having to worry about memory management or string manipulations.
For example to prepare a select statement named name you just need one call to fo_dbManager_PrepareStatement():
```
fo_dbManager_PreparedStatement* stmt;
stmt = fo_dbManager_PrepareStatement(dbManager, "name", "SELECT * FROM t WHERE c=$1 OR c2=$2", int, char*);
```
You will get an opaque pointer back.
To execute the statement you just need to give this pointer to fo_dbManager_ExecPrepared together with the parameters. 
```
PGresult* result = fo_dbManager_ExecPrepared(stmt, 1, "s");
```

You must never free the pointer: it is managed by the dbManager instance and it will be properly handled when you call fo_dbManager_free() or fo_dbManager_finish().
You can reuse the pointer as many times as you wish, for example
```
PGresult* result1 = fo_dbManager_ExecPrepared(stmt, 1, "s");
PGresult* result2 = fo_dbManager_ExecPrepared(stmt, 2, "t");
```

You don't have to worry about keeping this pointer, since trying to prepare again the same query will give back immediately the same pointer.
Be careful not to use the same name twice for different queries, the name here is the key.
```
stmt0 = fo_dbManager_PrepareStatement(dbManager, "name", "SELECT * FROM t WHERE c=$1 OR c2=$2", int, char*);
stmt1 = fo_dbManager_PrepareStatement(dbManager, "name", "");
stmt2 = fo_dbManager_PrepareStatement(dbManager, "name", "SELECT * FROM t WHERE other_field=$1", int);
/* these three pointers are the same. Trying to call _ExecPrepared(stmt2, 1) can only lead to pain.  
If you cannot think of a descriptive and unique name the makros __FILE__ __LINE__ or (since C99, edition2) __func__ come in handy
*/
```

This allows easily hiding calls without incurring a performance hit.

In the following example workingFunction() and workingFunction2() are equivalent.
Depending on the situation you can easily choose the approach which give greater readability and separation of concerns.
```
void workingFunction(fo_dbManager* dbManager) {
  fo_dbManager_PreparedStatement* write2 = 
     fo_dbManager_PrepareStatement(dbManager, "write2", "INSERT INTO t(s) VALUES($1)", int);

  for (int i=0; i<1000; i++) {
    int j = 42 * i;
    fo_dbManager_ExecPrepared(write2, j);
  }
}

void writerFunction(fo_dbManager* dbManager, int j) {
  fo_dbManager_ExecPrepared(
    fo_dbManager_PrepareStatement(dbManager, "write", "INSERT INTO t(s) VALUES($1)", int), j);
}

void workingFunction2(fo_dbManager* dbManager) {
  for (int i=0; i<1000; i++) {
    int j = 42 * i;
    writerFunction(dbManager, j);
  }
}
```

At the time of this writing supported types are: int, long, char*, unsigned, unsigned int, unsigned long, size_t

Note that, as usual with prepared statements, strings (char\*) must **not** be escaped.
There is currently no support for binary data (char* will be assumed to be null terminated).

Note that automatic promotion applies to any argument passed to ExecPrepared().
For example the **only** correct way use a short as a parameter is to use int as type specifier on the call to PrepareStatement()
```
short a;

fo_dbManager_ExecPrepared(fo_dbManager_PrepareStatement(dbManager, "write", "INSERT INTO t(s) VALUES($1)", int), a);
```

NB2: as you can see fo_dbManager_PrepareStatement() takes a list of types, so it can not be a function.
     It is a macro which makes use of the __VA_ARGS__ and stringification, so you should compile your agent at least with C99 to use it.