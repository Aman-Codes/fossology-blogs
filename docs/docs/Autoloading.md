# Autoloading

After the introduction of [[Composer]] the configuration of PSR-4 style autoloading is quite simple.  Here are some links to provide background:
* [[PHP Autoloading Classes | http://php.net/autoload]]
* [[PSR-4 Autoloading Standard | http://www.php-fig.org/psr/psr-4/]]
* [[How to create a PSR-4 PHP package | http://culttt.com/2014/05/07/create-psr-4-php-package/]]

## What is autoloading?

Autoloading helps to avoid management of require statements to load depending classes. It can be configured by adding Namespace -> Path mapping to the file composer.json.

## How to use autoloading?

Each call of composer install/update creates or updates the autoloading configuration.

Content of composer.json:
```json
{
    ...

    "autoload": {
        "psr-4": {"Fossology\\Lib\\": "lib/php"}
    }
}
```

If you have a class on the path lib/php/Foo/Bar.php
```php
<?php

namespace Fossology\Lib\Foo;

class Bar
{
}
```

you can now instatiate an object of type Bar everywhere just by using

```php
$bar = new \Fossology\Lib\Foo\Bar();
```

The autoloader takes care of reading the file Bar.php once to ensure a defined class Bar.

## How to enable autoloading?

Just include the autoloader initialization file

```php
src/vendor/autoload.php
```

Currently this is done in src/lib/php/common.php.