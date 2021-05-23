# Namespaces

Namespaces provide a simple way to restrict visibility of functions and classes to a defined path.

## How to define a namespace

You can use the namespace statement to declare a namespace for the current file
```
<?php
namespace Fossology\Lib\Foo;
class Bar {
    ...
}
```

## How to use classes from other namespaces

You can use a fully qualifying classname e.g. Fossology\Lib\Foo\Bar
```
<?php
namespace Fossology\Lib\Baz;
$bar = Fossology\Lib\Foo\Bar();
```
or pull the definition in the current namespace by using the "use" command
```
<?php
namespace Fossology\Lib\Baz;
use Fossology\Lib\Foo\Bar
$bar2 = new Bar();
```

