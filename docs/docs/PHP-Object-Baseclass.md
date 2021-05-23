# New information since PHP7.2

Since PHP 7.2 Object is a reserved word. Please check the changes introduced in pull request [#1180](https://github.com/fossology/fossology/pull/1180).

### Why should I use the object baseclass?

The object baseclass allows to have more readable classname access which is indifferent of name changes.

Any place where a class name is required one can use the method instead of String constant:

without object baseclass:
```php
    ...
    usort($data, '\Fossology\Lib\Foo', 'dataSorter'));
    ...
```

with object baseclass:
```php
    ...
    usort($data, array($this->classname(), 'dataSorter'));
    ...
```

If method known from other languages / newer php versions like equals() or hashcode() are required the can be implemented in the object baseclass as well.

### How to use the object baseclass

Just extend the object baseclass from your class:

```php

use Fossology\Lib\Util\Object;

class Foo extends Object {

}
```