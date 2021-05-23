The user interface (UI) is designed using a modular and (somewhat) object oriented methodology. The general design goal behind the entire UI: any single component can be replaced without needing to rebuild the entire UI.

# Basic Architecture

The UI has four key areas: common code, plugins, plugin structure, and menus structure. Each of these areas cover specific functionality:

* **Common code** is effectively a shared-library of functions. Functions either perform complex computations *or* format output, but not both.

* **Plugins** provide specific feature-based functionality. (Want another feature? Create another plugin!) Unlike common code, plugins provide complex computations *and* format output. Specifically, plugins may perform different computations based on the type of output.

* **Plugin structure** is a global structure that lists every plugin, and whether or not it accessible.

* **Menus structure** is a global structure used by plugins so that they can register with other plugins. 

The system has been designed with a separation between computations and output. Computations do not need to be rewritten if the output alternates between a web browser, PDF document, XML file, printer, or something else.

## Directory Structure

The user interface directory structure is as follows:

```
ui/common/  - All common code is stored here.
ui/html     - This directory contains all static HTML pages
ui/images   - This directory contains all image files
ui/plugins  - All code for plugins is stored here.
ui/template - The plugin template is stored here.
```

With the web-based user interface, all URLs are relative to the ui/ directory. Thus, individual developers can have their own ui directories for software development.

## Common Code

Common code is stored in the "ui/common" directory. This code is accessible by everything in the UI: other common functions and plugins.

Common code has no explicit initialization; each common function must validate all dependencies. For example, if a function queries the database then it should make sure the $DB global variable is set:

```C
global $DB;
if (empty($DB)) { return; }
```

For ease of maintenance, common functions have been grouped together based on feature functionality. For example, common-license.php contains functions related to license information. In this common library are functions such as:

* LicenseGet(): Return licenses for a specific pfile.

* LicenseGetAll(): Return licenses for every file under a given uploadtree_pk.

* LicenseSearch(): Given a license name and uploadtree_pk, return each file containing the license.

Similarly, common-menu.php contains a library of menu-related functions. In common-license.php are functions like:

* menu_insert(): Insert an item into the menu data structure.

* menu_find(): Given a top-level menu name, return the list of sub-menus below it and max depth of menu.

* menu_to_1list(): Take a menu data structure and render it as one HTML line with items in a list.

Common code is unaware of the output format. Functions that only perform computations (e.g., "find all licenses for a given file" -- the LicenseGet() function), do not format the resulting data. Before the data is sent to the output device, it must be formatted by a plugin.

However, some common code functions do generate pre-formatted output. These functions should not perform complex computations. The separation ensures that different output devices only need to call output-specific formatting functions and not output-specific computations. For example, menu_to_1html() generates HTML text, but it does nothing more complicated than traversing the menu data structure.

Common code may have a dependency on plugins. For example, common-license.php accesses the database (via the core-db.php plugin) and common-agents.php accesses plugins that define agents. However, common code must*always* check to make sure the plugin exists before attempting to access it.

### Common Code Loading

Common code is loaded by the file common/common.php. This PHP file is used to load all defined common files and functions. Beyond this, no initialization is performed. Specifically, common code must not perform any tasks outside of the functions since common code has no means to tell if the functionality is actually required.

### Common Code Naming Convention

There is no specific naming convention used for the common code files or function names. In general, files are named after the general type of task. Function names are descriptive and frequently include the type of task. For example, common-dir.php is used for identifying the directories into which uploaded FOSSology files are stored. Most of the functions begin with "Dir": Dir2Path() stores an uploaded item's directory as a path, and Dir2Browse() creates the yellow directory box found in the web interface's browse window and search results.

## Plugins

Plugins provide specific input/output features. For example, if you need a UI module for displaying licenses, then that functionality would be defined by a plugin.

Unlike common code, plugins may perform complex computations *and* format the output within a single function. In fact, different computations may be formed based on the output type.

In addition, while common code is always available, a plugin's availability may vary based on input parameters, global settings, user permissions, and output type. Thus, a plugin may provide a very specific functionality, but may not always be accessible.

For maintenance, plugins are named after their generic category. For example, all of the plugins that begin with "admin-" (e.g., admin-db-vacuum.php and admin-upload-delete.php) perform administrative functions. The "ui-" plugins (e.g., ui-topnav.php and ui-welcome.php) are closely tied to the HTML web-based user interface. And the "jobs-" plugins (e.g., jobs-runningjobs.php and jobs-showjobs-upload.php) handle job-oriented tasks.

While plugins are intended to process input and output, they may not actually generate output that gets displayed. For example, the command-line tool "fossjobs" (cli/fossjobs.php) uses the menu data structure to find all plugins for analysis agents, and calls plugin functions for scheduling analysis. However, the plugins do not actually generate the output for fossjobs.

### Plugin Flexibility

Since plugins provide feature-specific functionality, adding a new feature only means adding a new plugin (hence the name: plugging in a new feature). Similarly, changing a specific feature only requires altering the specific plugin.

As an example, the web-based user interface for FOSSology has gone through a number of iterations. Some had the menu at the top, others had the menu down the side. Some versions used HTML frames, while the current version does not use frames. All of these changes were limited to very specific plugins:

* ui/plugins/ui-menus.php: This renders the user menu bar. To change the menu bar, you only need to alter this plugin.

* ui/plugins/ui-topnav.php: The "topnav" plugin defines the main window used by FOSSology. It has a dependency on ui-menus.php, so topnav calls menus. Changing this plugin alters the entire web page layout.

* ui-treenav.php: This renders the folder tree seen when you click the "Browse" button in the web interface's menu.

### Plugins Template

All plugins are based off of a PHP template called FO_Plugin (ui/template/template-plugin.php). The template defines some public variables that are used for organizing plugins, and some methods common to all plugins.

```C
class FO_Plugin
{
  // All public fields can be empty, indicating that it does not apply.
  var $State=PLUGIN_STATE_INVALID;
```

The $State variable identifies whether the plugin is ready, initialized, partially initialized (not yet ready), or unavailable.

```C
var $Name="";
```

$Name defines the official name of this plugin. The name does not need to be the same as the PHP filename. Other plugins will look for this plugin based on this name.

```C
var $Version="1.0";
```

The $Version variable permits multiple plugins to have the same name. Only the plugin with the highest version number will be found when searching for a plugin by name (see plugin_find_id() in common/common-plugin.php). The version is very useful for development since you can replace a plugin by having a different file with the same $Name and a newer $Version.

Although plugins can generate any type of output, they are currently used to generate HTML. Thus, there are some variables used to define HTML values and web-based functionality:

```C
var $Title="";  // used for HTML title tags and window menu bars
var $NoMenu=0;        /* 1 = Don't show the HTML menu at the top of page */
var $NoHeader=0;      /* 1 = Don't show the HTML header at the top of page */
var $NoHTML=0;        /* 1 = Don't add any HTML to the output */
```

A plugin's availability may be dependent on some other plugin's availability:

```C
var $PluginLevel=10; /* used for sorting plugins -- higher comes first after dependencies are met */
var $Dependency = array(); /* an array of $Name found in the required plugins */
var $InitOrder=0; /* during initialization, some plugins may need to come first; higher is initialized first
```

Dependencies must not be cyclical. If "A" depends on "B" and "B" depends on "A", then neither will load because the dependency of "must be loaded before" is never met.

Finally, plugins may want to register with the main menu:

```C
var $MenuList=NULL;
var $MenuOrder=0;
var $MenuTarget=NULL;
```

For example, to define an "About" menu item under the "Help" menu:

```C
var $MenuList = "Help::About";
var $MenuOrder=0;
```

And a "delete" agent under the tool, administration menu and displaying in a new window would use:

```C
var $MenuList = "Tools::Administration::Delete";
var $MenuOrder=0;
var $MenuTarget="_new"; /* HTML <a target="_new"> */
```

### Plugin Process Flow

All plugins are based on a template that defines universal functionality. For example, every plugin has a function called "Initialize()". The plugin may override the default function for plugin-specific needs, but the function always exists. The default functions are as follows:

#### **During software installation**

The following functions are only called when source code is placed on the system. They are intended to perform any system-specific configurations prior to using the plugin.

* **Install()**. This function is only called when the UI is first installed. It should make sure all requirements are available and create anything it needs to run. For example, if a database table needs default initialization values, then this function can add it. A failed install is not inserted in the system. Since Install() may be called multiple times, it must check that changes are needed *before* doing any changes. Also, it must check for partial installs in case the user is recovering from an installation failure.

* **Remove()**. The opposite of Install(). This is only called when the plugin is removed from the system.

The Install() functions are called by the fossinit command-line program. The 'fossinit' program is a simple UI that loads all plugins and runs every Install() function.

Currently, there is no "fossremove" script, so the Remove() function is not used. When it is eventually created, this will remove tables, values, and dependent files that are only used by this plugin.

#### **Per Instantiation**

Each time a UI (web or command-line) loads the plugins, the following functions are accessed:

* **Initialize()**: This is called once per instantiation, before the plugin is used. It should assume that Install() was already run one time (possibly years ago and not during this object's current instantiation). The big reminder: This function must **not** assume that other plugins are installed, including the database.

* **PostInitialize()**: This function is called before the plugin is used and after all plugins have been initialized. If there is any initialization step that is dependent on other plugins, put it here. The default function registers the plugin with the main menu. **Note**: This function is only called if all dependencies are met.

* **RegisterMenus()**: While menus can be added to any time at or after the PostInitialize phase, this is the standard location for registering this item with menus. This is intended for cross-plugin registration and not for the main menu.

At this point, the plugin is fully initialized and ready for operation. Calling function may call Action() to perform a default action, OutputOpen()/Output()/OutputClose() to generate output, or OutputSet()/Output()/OutputUnset() to generate output that will be included within other output.

* **Action()**: This function is used to perform a specific action.

* **OutputOpen()**: This function is called when user output is requested. This function is responsible for assigning output-specific headers.

* **OutputSet()**: Similar to OutputOpen, this sets the output type for this object. However, this does NOT change any global settings. This is called when this object is a dependency for another object.

* **Output()**: This function is called when user output is requested. This function is responsible for content. OutputOpen() and Output() are separated so one plugin can call another plugin's Output().

* **OutputClose()**: This function is called when user output is done. It generates output-specific footers.

* **OutputUnSet()**: Similar to OutputClose, this ends the output type for this object. However, this does NOT change any global settings. This is called when this object is a dependency for another object.

After the UI completes, the instantiated plugins are removed.

* **Destroy()**: This is a destructor called after the plugin is no longer needed. It should assume that PostInitialize() was already run one time (this session) and succeeded.

### Plugin Subtypes

Some groups of plugins have additional, standardized functions. Any other plugin with a dependency on these specific subclasses can assume that these standardized functions exist (see Plugin Structure).

For example, every "agent" plugin (plugin for scheduling an analysis task) has two additional functions:

* **AgentCheck()**: This function determines whether a job is already in the jobqueue.

* **AgentAdd()**: This function adds the agent to the jobqueue.

* Every agent that registers itself with the "agent" menu structure must have both of these functions defined.

As another example, every "upload-" plugin (plugin used for uploading a file into the FOSSology system) has a function called **Upload()**.

The use of these standardized functions simplifies the implementation in other plugins. For example, a UI plugin for selecting an analysis method does not need to know about every individual "agent" plugin. Instead, it can access the list of plugins that registered as agents and can call a generic method to see if the agent needs to be scheduled for analysis. If a new analysis agent is added to the system, then no other code needs to be modified in order to use the new agent.

### DB Plugin Caveat

For FOSSology, most plugins and common code access the database. Typically, one would think that the widely-used database access code would be a common-code library. However, the actual database connection and query code is located in a plugin (ui/plugins/core-db.php) and not in common code. This is intentional and done for the following reasons:

* The database is an input/output system. Plugins are used for managing input/output.

* The database requires an initialization phase to establish the DB connection. Common code cannot provide this, but plugins do.

* The database is a dependency used by many different plugins. If the database cannot be accessed (e.g., DB is offline), then the dependency should fail. Since plugins have a concept of dependencies, the database code should be a plugin. (Remember: common code is always available and the DB could be unavailable.)

* The database code is currently hard-coded for using PostgreSQL. If you want to use a different database, then you just need to replace the database plugin. This plugin abstraction is an advantage over using direct DB or PostgreSQL library calls.

Because the database is widely used by the entire system, the class pointer for the database plugin is stored in a global variable: $DB. The database plugin is the only plugin referenced directly by a global variable. For example, $DB->Action("$SQL");

## Plugin Data Structure

Each time FOSSology is accessed, the plugins are initialized and register with a global plugin structure (see the Plugin Process Flow diagram). This data structure tracks each plugin, common-name, and its state.

Plugins may have a dependency on one or more other plugins. This dependency is defined in the (template-defined) array "$Dependency". For example, viewing the license histogram (ui/plugins/ui-license.php with common name "license") has a dependency on plugins with common names "db", "browse", and "view-license".

```C
class ui_license extends FO_Plugin
  {
  var $Name       = "license";
  var $Title      = "License Browser";
  var $Version    = "1.0";
  var $Dependency = array("db","browse","view-license");
  ...
``` 

What this means is that the license plugin will not be postinitialized if any of these dependencies are missing. In effect, this feature will not exist unless all dependencies are met.

Plugins may use other plugins that are not explicitly listed as dependencies. This allows plugins to exist and work even if an optional dependency does not exist. However, the plugin must not assume that an optional dependency is initialized before the plugin, itself, initializes. To check for optional dependencies, there is a function in common-plugin.php called plugin_find_id(). If the desired plugin exists, then an id will be returned.

```C
if (plugin_find_id("view-license") >= 0)
{
  // plugin_find_id("view-license") is the index into the array of plugins.
  $ModLicView = &$Plugins[plugin_find_id("view-license")];
}
```

A plugin may choose not to initialize based on input and global settings. For example, there is a plugin called "core-init.php". This provides a feature with the common name "init". This plugin only initializes when a global flag indicates that the system is being installed and needs to be initialized.

Plugins also have the ability to alter the states of other plugins. For example, the "init" (core-init.php) and "auth" (core-auth.php) plugins both disable other plugins. This way, uninitialized plugins are not accessessible and users who are not authenticated (feature provided by the "auth" plugin) cannot access some other plugins.

## Sample Complex Plugin: init

The core-init.php plugin is only used when code is installed on the system. This plugin is responsible for ensuring that every other plugin does not run until the database has been properly configured and the Install() function has been called.

The init plugin (ui/plugins/core-init.php) has a non-default PostInitialize() function. This function looks for a semaphore that indicates the need for an initialization. The semaphore, a file named "init.ui" in the UI directory, denotes the semaphore. If the file exists then an initialization is required. If the semaphore does not exist, then this plugin disables itself.

```C
$Filename = getcwd() . "/init.ui";
if (!file_exists($Filename))
{
   $this->State = PLUGIN_STATE_INVALID;
   return;
}
```

The second thing init does is disable all other plugins. Since plugins are loaded in dependency order, every plugin already fully-initialized must be a dependency; thus, they are kept running. All other plugins are disabled (state set to 'INVALID') before they can become initialized. Disabling plugins ensures that they will not be initialized before they are installed.

```C
$Max = count($Plugins);
for($i=0; $i < $Max; $i++)
{
  $P = &$Plugins[$i];
  if ($P->State h5. PLUGIN_STATE_INVALID) { continue; }
  /* Don't turn off plugins that are already up and running. */
  if ($P->State  PLUGIN_STATE_READY) { continue; }
  if ($P->DBaccess h5. PLUGIN_DB_DEBUG) { continue; }
  $Key  array_search($P->Name,$this->Dependency);
  if (($Key h4. FALSE) && strcmp($P->Name,$this->Name))
  {
     // print "Disable " . $P->Name . " as $Key <br>\n";
     $P->Destroy();
     $P->State  PLUGIN_STATE_INVALID;
     }
}

Finally, the init plugin adds itself to the menu. This gives web users the menu option "Admin::Initialize".

```C
if ((@$_SESSION['UserLevel'] >= PLUGIN_DB_USERADMIN) && ($this->MenuList !h5. ""))
{
	menu_insert("Main::" . $this->MenuList,$this->MenuOrder,$this->Name,$this->MenuTarget);
}
```

The core-init.php plugin works closely with the core-schema.php plugin. Init disables all plugins and schema configures the system.

The init Output() function calls the ApplySchema() public function, found in ui/plugins/core-schema.php. This adds any missing tables, columns, views, etc. removes unused tables/columns/views/etc., inserts any missing default values, and runs every Install() function on every plugin.

From core-init.php:

```C
$Schema  &$Plugins[plugin_find_any_id("schema")];
$FailFlag = $Schema->ApplySchema($Schema->Filename,0,0);
```

and from core-schema.php:

```C
print "  Initializing plugins\n"; flush();
for($i=0; $i < $Max; $i++)
{
	$P = &$Plugins[$i];
	/* Init ALL plugins */
	if ($Debug) { print "    Initializing plugin '" . $P->Name . "'\n"; }
	$State = $P->Install();
	if ($State != 0)
	{
		$FailFlag = 1;
		print "FAILED: " . $P->Name . " failed to install.\n"; flush();
		return(1);
	}
}
```

Finally, the init plugin removes the semaphore. This ensures that future connections will not re-attempt to reconfigure the database and run Install() on every plugin.

```C
$State = unlink($Filename);
```

## Sample Complex Plugin: auth

The auth plugin (ui/plugins/core-auth.php) enforces user-level authentication. Users without the appropriate credentials will not have access to certain plugins.

The Install() function ensures that the database table for 'users' contains at least one default user. Otherwise, auth will block every plugin -- including init -- from working.

The magic for auth happens in the PostInitialize() function. Login sessions are stored by the web server and access via the $_SESSION[] global hash.

* Login sessions must timeout after a period of inactivity. The $_SESSION['time'] variable identifies the last time the session was accessed. If it has been longer than one hour, then the session is disabled. However, the web server may enforce a faster timeout (see session.gc_maxlifetime in /etc/php5/apache2/php.ini).

* Logins may be restricted to a specific IP address. If the session comes from a different address (i.e., session has been hijacked) then it is disabled.

* If the user is not logged in, then use the "Default User" settings from the database for setting the access level. Otherwise, use the access level found in the session.

* Disable every plugin that requires a higher access level.

```C
$Max = count($Plugins);
for($i=0; $i < $Max; $i++)
{
  $P = &$Plugins[$i];
  if ($P->State h5. PLUGIN_STATE_INVALID) { continue; }
  if (($P->DBaccess > $Level) || (empty($_SESSION['User']) && $P->LoginFlag) )
  {
    $P->Destroy();
    $P->State  PLUGIN_STATE_INVALID;
  }
}
```

The auth Output() function has two states:

* If the user is logged in, then log the user out and clear the $_SESSION[] structure.

* If the user is not logged in, then prompt for a username and password. These are compared with the database's contents. If they match, then $_SESSION[] is populated with the user's authentication level and related information.

## Menu Data Structure

The menu data structure is used for registering plugins with other plugins. It is called "menu" because most registrations are used to render pull-down or list-based menus.

This structure actually defines a suite of menu structures. Each element in the structure contains a name, sort-order, link to a plugin, HTML-specific code, URI, and a submenu. Each of these items are optional.

The menu structure is ordered by explicit sort priority and name. Each menu entry also defines the path through the menu. The top-most path identifies the core functional area. Everything below it is used for registration.

A few examples:

* "Main". The top-level menu "Main" is used to define the user-displayed main menu. Plugins that choose to register with the main menu are listed here. For example:

* Main

* Home

* Search

* Browse

* Upload

* Instructions

* From File

* From Server

* From URL

* One-Shot License

* Organize

* Folders

* Create

* Delete Folder

* Edit Properties

* Move

* ...

* "JobDetails". Items in this top-level menu appear as the list of available operations when viewing jobs.

* "Agents". This is the default list of agents available for analysis. Every agent plugin that defines an analysis agent registers with this menu. This list is used when the user is shown a list of available agents to schedule. It is also used by command-line tools when scheduling jobs; this is the list of available agents. NOTE: agents that do not perform analysis, such as "delete upload" are not registered with this menu option. Otherwise, scheduling all of the default analysis agents will also delete the upload.

As a more detailed view, the main menu may include the following menu tree summary (found by using "Help::Debug::Debug Menus" which calls the core-debug-menus.php plugin):

```
1. Home (18 -- Default _top)

 2. Search (14 -- search_file )

 3. Browse (12 -- browse )

 4. Upload (10 -- )

    4.1. Instructions (10 -- upload_instructions )

    4.2. From File (0 -- upload_file )

    4.3. From Server (0 -- upload_srv_files )

    4.4. From URL (0 -- upload_url )

    4.5. One-Shot License (0 -- agent_license_once )

 5. Organize (8 -- )

    5.1. Folders (0 -- )

        5.1.1. Create (0 -- folder_create )

        5.1.2. Delete Folder (0 -- admin_folder_delete )

        5.1.3. Edit Properties (0 -- folder_properties )

        5.1.4. Move (0 -- folder_move )

    5.2. License (0 -- )

        5.2.1. Default Groups (0 -- license_groups_default )

        5.2.2. Default Terms (0 -- license_terms_default )

        5.2.3. Manage Groups (0 -- license_groups_manage )

        5.2.4. Manage Terms (0 -- licterm_manage )

    5.3. Uploads (0 -- )

        5.3.1. Delete Uploaded File (0 -- admin_upload_delete )

        5.3.2. Edit Properties (0 -- upload_properties )

        5.3.3. Move (0 -- upload_move )

        5.3.4. Remove License Analysis (0 -- agent_reset_license @ )
```

The summary provides a quick overview of the actual menu structure. This lists the menu's name, order number (before the '--') and optional plugin associated with the menu item (after the '--'). If the resulting web page should be associated with an alternate target window, then that window name is after the '@'.

The full menu structure contains much more information. For example, the full "Search" menu item looks like:

```
menu Object

   (

   [Name] => Search

   [URI] => search_file

   [HTML] =>

   [Order] => 14

   [Target] =>

   [MaxDepth] => 0

   [SubMenu] =>

   [FullName] => Main::Search

   [Title] =>

   )
```

The 'FullName' is the path through the menu. The 'Name' is the text that appears in the menu. If HTML had a value, then that value would be used instead of the Name text.

Since this menu item appears under the 'Main' branch, it would normally be sorted alphabetically. This would make the top menu from the web browser: "Admin Browse Help Home Jobs Organize Search Upload". However, the unsorted ordering is not optimal for usability. The 'Order' is used to override alphabetical ordering. In this case, 'Search' has an order of 14. It will come after all menu items that have values > 14, and before all menu items that have values < 14. If there are other menu items with an order value of 14, then they will be sorted alphabetically.

Finally, the URI is set. Clicking on the 'Search' menu item will activate "${URI}?mod=search_file". This module is provided by ui/plugins/search-file.php.

# Error Handling

For the UI, there is a large amount of error detection, but virtually no error reporting. For detection, every function validates parameters and checks return codes to ensure active calls worked properly.

However, while parameters are validated and calls are checked, very few errors are reported to the user. Errors are only shown to the user if there is something the user can do about it. Since FOSSology is designed for use by many different types of users, and not just administrators with root access, reporting issues such as "the database is down" or "disk full" is only useful if the user can do something about it. Depending on your user level, you may never see these errors.

Instead of reporting cryptic error messages to the user, the FOSSology UI simply "does the right thing". If the right thing is to not schedule an analysis, then it is not scheduled. If the right thing is to inform the user, then the user is informed. This is very different than some applications and operating systems that constantly alert the user to errors that are beyond the user's control.

# **Security**

The largest risk to any user interface comes from hostile input. The input may be an overflow or SQL injection, or may be an honest cut-and-paste error. From the UI's viewpoint, these are all handled the same way:

* **Validate data types**. All user-supplied parameters are validate. If the input should be a number, then make sure it is a number. If it should be a string, then make sure it is a string. In ui/common/common-parm.php is a function called GetParm(). The caller provides a variable name to retrieve and the expected data type. The returned value is guaranteed to be of the correct data type.

* **PARM_INTEGER**. The value is an integer. Strings that begin with numbers only return the numberic portion. Non-integers strings return 0.

* **PARM_NUMBER**. Returns a floating point number. Non-numeric values return 0.0.

* **PARM_TEXT**. Returns a string with backslash-quoted characters removed (see the PHP function stripslashes).

* **PARM_STRING**. Decodes the URI-encoded string and returns it.

* **PARM_RAW**. Performs no decoding and returns the value. The caller must validate the data type.

* **Validate parameters**. A user may include any kind of parameter in the URL. However, only expected parameters are used. Every plugin uses GetParm() to retrieve values. When constructing subsequent URLs, functions like Traceback(), Traceback_uri(), Traceback_parm(), and Traceback_parm_keep() are used. For example, the plugin ui-view.php calls "showjobs". It does not pass on every URL parameter. Instead, it constructs the URL using only the required parameters:

* **No user-supplied code**. At no point in the UI does the user supply data that is directly used as an SQL query or executable system call. Instead, all parameters are validated. For example, the "mod=_string_" parameter defines which plugin to call. The string is **not** the plugin's file name. Instead, it is a reference to a table (the plugin structure) that identifies which plugin to run. Similarly, numeric IDs are commonly passed into the UI via the URL. The GetParm() function ensures that they are numbers before they are included in any SQL query.

```C
$URI = Traceback_parm_keep(array("show","format","page","upload","item"));
```

# **Debugging**

Developers may wish to debug the UI as new plugins are created. Some common debugging options are listed in the plugins core-debug-*.php.

* core-debug-plugins.php. This creates "Help::Debug::Debug Plugins". It lists every plugin in dependency order and active state. It also displays details about each plugin. This debugging code answers the question "Why didn't my plugin load?"

* core-debug-menus.php. Along with plugins, menus are a complex structure. "Help::Debug::Debug Menus" displays every item in the menu structure. In addition, it can enable a debug flag for the web UI's current user (flag is restricted to your login session). When enabled, every menu item displays the full menu path and order number, and not just the text name. This debug code answers questions like "Where is my menu?" and "What menu created that item?"

* core-debug-user.php. This displays information about the current user.

* core-debug-flush-cache.php. Some web pages are cached for speed. This debug option removes all cached entries.

Other debug plugins may enable additional features or display other data structures.

# **Program Main**

For web-based access, the main program is "index.php". This is a very small program that loads all plugins and calls one plugin based on the URI "mod=" parameter. With this main program, the output type is "HTML". For example:

[http://server/ui/](http://server/ui/)

is the same as

[http://server/ui/?mod=Default](http://server/ui/?mod=Default)

The module 'Default' is provided by ui/plugins/ui-default.php.

The front of the UI does not need to be complicated. For example, there are a variety of command-line tools that simply operate as a front-end to the UI. As an example, there is a command-line program called "fossjobs". This allows the user to schedule jobs for a particular upload. The actual program loads all plugins and accesses the "Agents" menu to get the list of available jobs. Depending on the command-line parameter, it also calls the appropriate plugin to schedule the task. With this main program, plugin Output() function is not even used.

# Future Enhancements

There are a couple of things that can be done to enhance this system:

Currently, every plugin and common code file is loaded every time the system is accessed. This isn't a huge problem right now, but as the system expands, this could be a performance hit. Rather than dynamically registering with the menu and plugin structures, these may become standalone tables for faster access.

1. PHP code can be pre-compiled. This is a good option if performance becomes an issue.

2. There are a few common functions that mix computations with HTML output formatting. These should be split. For example, common-folders.php has a function called FolderListOption(). This function retrieves the list of folders and generates HTML output. It should be split into one function that retrieves the list (probably should populate a menu structure with the results), and a second function to turn the structure into HTML. Otherwise, a command-line text UI would need to recreate the selection function before generating output. Sadly, most of the functions in "common-folders.php" need to be rewritten.

3. The "Action()" common function was a good idea, but really isn't used. Right now, it is only used by core-db.php, so it does not need to be defined in the template.

4. All URIs should be relative to the ui/ directory. Currently ui/common/common.php loads the plugin template from the installation directory instead of the relative directory. All other files are loaded from relative locations.