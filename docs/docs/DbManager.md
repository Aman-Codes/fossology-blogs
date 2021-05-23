**The Fossology\Lib\Db\DbManager** (in directory src/lib/php/Db/) is a central class for communication with the database. Its constructor expects an Logger instance. After setting the driver, the functions listed below are available. The DbManager will check errors and log the used time.

* prepare($statementName, $sqlStatement): prepares the (single) query $sqlStatement which avoids SQL injections
	* example: $dbManger->prepare('limitedPrimes','SELECT number FROM primes WHERE number<$1')
* execute($statementName [, $params]) returns the ressource of query (with optional Parameters)
	* example: $dbManager->execute('limitedPrimes',array(3))
* fetchArray returns associated array
* freeResult unsets the ressource
* getSingleRow: prepares, executes, fetches first row and frees the ressource as condensed function

A global instance of this class is available via 

`$container->get('db.manager')`

which requries "src/lib/php/common.php". The configuration of this instance is done in "src/lib/php/services.xml".