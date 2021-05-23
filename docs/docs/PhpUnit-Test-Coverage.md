After running `(Composer) update` in the src/ directory, you can simply run

```
vendor/bin/phpunit
```

which also generates a coverage report in ./testReport. Selecting a subset of test files is possible via the command line, e.g.
vendor/bin/phpunit --coverage-html ../subTest lib/php/

uses only tests located in src/lib/php.
Editing phpunit.xml is another way to change the phpunit configuration, see the manual http://phpunit.de/manual/3.7/en/appendixes.configuration.html. Add the line <directory suffix=".php">nomos/agent_tests/Functional</directory> in the block

```
    <testsuites>
        <testsuite name="Fossology PhpUnit Test Suite">
            <directory suffix="Test.php">lib/php</directory>
            <directory suffix=".php">lib/php/tests</directory>
            <directory suffix=".php">www/ui_tests/Unit</directory>
            <directory suffix=".php">nomos/agent_tests/Functional</directory>
        </testsuite>
    </testsuites>
```

to push `nomos/agent_tests/Functional` into the test set.
To avoid trouble due to relative paths in tests, absolute paths should be used in all files, i.e.

```
require_once(dirname(dirname(dirname(dirname(__FILE__))))."/lib/php/common.php");
```

instead of `require_once("../../../lib/php/common.php");`