# Introduction
Twig is template framework for PHP, see http://twig.sensiolabs.org/doc/api.html.
It has a very concise syntax, which make templates more readable.

# Caching
Twig has the ability to cache loaded templates, which makes the rendering faster. This desired speed-up is enabled in the master branch.
However, the mechanism requires to remove the cached files after changing templates. The command `make empty-cache` will do so.
For development, one can disable the caching mechanism by changing TWIG_CACHE variable in _Makefile.conf_ to
`TWIG_CACHE = <parameter key=\"cache\" type=\"constant\">false</parameter>`.
This will change the value for key "twig.environment.config" in the generated file _src/lib/php/service.xml_.

# I18n
With Twig_Extensions_Extension_I18n, variables in templates are translated by the `trans` filter.