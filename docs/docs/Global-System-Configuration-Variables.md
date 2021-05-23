System configuration variables are stored in the sysconf table. There are core variables available in all installations, and there are plugin configuration variables that will depend on that plugin.

## admin-config.php

All configuration variables are managed (can have their values changed) by the plugin admin-config.php, which is accessible from the menu **Admin > Customize**. This plugin updates all configuration variables regardless of if they were defined as core values or added by a plugin.

At this time there are variables for support, a banner message, and the logo. The variables and their meaning is documented in the database and displayed by the UI. Here is a screenshot of admin-config:

![Admin Config](http://www.fossology.org/attachments/download/765)

## How to use

Configuration variables only have relevance if they are implemented in code. In the user interface they are stored in the global array $SysConf.

As of this wiki update, the following variables are defined:

* SupportEmailLabel

* SupportEmailAddr

* SupportEmailSubject

* BannerMsg

* LogoImage

* LogoLink

For example, here is the code in ui-menus.php to implement the banner message:

```PHP
global $SysConf;
if ($SysConf['BannerMsg'])
{
  $V .= "<h4 style='background-color:#ffbbbb'>$SysConf[BannerMsg]</h4>";
}
```

## Creating a new variable

To create a new variable you only have to add it to the sysconf table.

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>sysconfig_pk</td>
    <td>serial</td>
    <td>primary key</td>
  </tr>
  <tr>
    <td>variablename</td>
    <td>char varying(30) not null</td>
    <td>Name of configuration variable</td>
  </tr>
  <tr>
    <td>conf_value</td>
    <td>text</td>
    <td>the value of variablename</td>
  </tr>
  <tr>
    <td>ui_label</td>
    <td>char varying(60) not null</td>
    <td>Label that appears in the admin-config.php user interface to prompt for conf_value</td>
  </tr>
  <tr>
    <td>vartype</td>
    <td>'int', 'text', or 'textarea' not null</td>
    <td>HTML input type</td>
  </tr>
  <tr>
    <td>group_name</td>
    <td>char varying(20) not null</td>
    <td>Group name admin-config.php uses to cluster variables of the same type. For example, all the support configuration variables are in the group 'Support'</td>
  </tr>
  <tr>
    <td>group_order</td>
    <td>int</td>
    <td>The order that members of the group are displayed in admin-config.php. These need not be unique within the group, but if they are not, the order may be different each time admin-config displays them.</td>
  </tr>
  <tr>
    <td>description</td>
    <td>text not null</td>
    <td>Verbose description of the variable. See the admin-config screenshot above</td>
  </tr>
  <tr>
    <td>validation_function</td>
    <td>char varying(40)</td>
    <td>This is the name of the user interface validation function for this variable. This is not yet implemented.</td>
  </tr>
</table>


## Banner Message

This value of BannerMsg is simply copied to the top of our pages. You can include HTML, but if you break it, you break the page. Here is what it looks like:

![Banner Message](http://www.fossology.org/attachments/download/747)

## Support Email

Filling out the three support email variables adds a support link:

![Support Email](http://www.fossology.org/attachments/download/759)


## Logo

Replacing the logo does what you expect. Here I've replace the fossology logo with the HP logo:

![Logo](http://www.fossology.org/attachments/download/753)


## GlobalBrowse

As of FOSSology v1.4, users won't be able to browse all uploads unless they have read permission and GlobalBrowse is set to "true". This is security through obscurity. If you have a link to another users files, you will be allowed to access them. So don't count on this being secure. Admin users can always browse the entire repository.