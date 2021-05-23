## Dependency injection

Dependency injection is used to create singleton objects and their dependencies automatically. This is very useful when global objects should be available in a variety of objects.

Fossology currently uses the [symfony dependency injection](http://symfony.com/doc/current/components/dependency_injection/introduction.html) version v3.3.18.

The objects and their dependencies are configured in the XML file 

```
src/lib/php/services.xml
```

A simple example of the configuration would be:
```xml
<container xmlns="http://symfony.com/schema/dic/services">

    <services>
        <service id="logger" class="\Monolog\Logger">
            <argument type="string">default</argument>
        </service>
        <service id="db.manager" class="\Fossology\Lib\Db\DbManager">
            <argument type="service" id="logger"/>
        </service>
    </services>
</container>
```

The dependency injection container is created in the file src/lib/php/common-container.php and stored in the global variable $container.

It can be used anywhere in the application like in the following example:

```php
  global $container;
  $dbManager = $container->get('db.manager');
```