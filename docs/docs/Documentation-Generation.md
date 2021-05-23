### Doxygen

[Doxygen](http://www.stack.nl/~dimitri/doxygen/manual/index.html) is used for all the inline source documentation.  To generate the docs, go to src/srcdocs and do a 
`make doxygen`

### SchemaSpy

[SchemaSpy](http://schemaspy.sourceforge.net/) can be used to generate a web based graphical database schema browser.  To generate the pages, go to src/srcdocs and do a 
`make schemaspy`.  This is a very handy way to see all the foreign key assignments and other data.

### Accessing the reports

You can generate both the doxygen and SchemaSpy reports in src/srcdocs with a simple
`make`

After the pages are generated a `src/srcdocs/www` directory will be created with the results.  Just point your browser there.  You will see a `fodox` directory with the Doxygen pages and a schemaspy directory with the schemaspy pages.

### man pages

Man pages for the FOSSology command line utilities are generated with `make` in src/cli