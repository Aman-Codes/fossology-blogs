## Basic Coding Style

Below are the very basic coding style conventions, if you prefer the concise, quick way.

####  Match braces

Align braces in same column.

    struct mystruct 
    {
      int myvar;
    };


**NOT**

    struct mystruct {
      int myvar;
    };

This is a general rule for braces.  It applies to switch statements, blocks under if statements, function blocks, ...

#### Tabs

* Don't insert tabs into the source file.  
* Set your editor to translate a tab into two spaces.

#### Indent Offset

Use two spaces as indent offset.

    for (i=0; i<bufsize; i++)
    {
      buf[i] = tolower(buf[i]);
      if(buf[i] < 0) 
      {
        buf[i] = 127;
      }
    }

**NOT**

    for (i=0; i<bufsize; i++)
    {
            buf[i] = tolower(buf[i]);
            if(buf[i] < 0) 
            {
                    buf[i] = 127;
            }
    }

#### Local Function Names

Don't use an underscore to denote local functions.

    void  entry_print(void* to_print, FILE* ostr)

**NOT**

    void  _entry_print(void* to_print, FILE* ostr)

####  Doxygen

The source documentation is embedded in the code and parsed by doxygen.  Use "Doxygen commands.":http://www.stack.nl/~dimitri/doxygen/commands.html A typical doc header looks like:

    /*!
     * \brief analyze a file for the copyright information
     *
     * This will open and analyze the file provided. It is important to note that
     * this function will clear any information that was previously stored in copy.
     * All information that is needed should be extracted from copy after a call to
     * analyze before calling analyze again.
     *
     * \param copy the copyright instance that will be analyzed
     * \param file_name the name of the file to be openned and analyzed
     *
     * \return 0 on OK, -1 on failure.
     * 
     * \todo blah blah
     */
    void copyright_analyze(copyright copy, FILE* istr)

There are many other useful doxygen commands, including:  
  \code ... \endcode  
  \verbatim ... \endverbatim  
  \li  
  \n  

####  Comments

Comments are good.  Use them.
When commenting a variable, indent the comment starting on the same line

    struct regex_file_struct
    {
      int      ftype1;          /* 1=filename, 2=license 
                                 * 3=bucket, 4=tag       */
      char    *regex1;          /* regex1 string         */
      regex_t  compRegex1;
    };

**NOT**

    struct regex_file_struct
    {
      /* 1=filename, 2=license */
      int      ftype1;
      /* regex1 string */
      char    *regex1;
      regex_t  compRegex1;
    };
####  SQL 

The current code base has sql scattered in each file that executes a sql statement.  The problem with this is that we sometimes have multiple statements to accomplish the same task.  Sometimes both versions work correctly and sometimes they don't.  I propose that we start a /ui/common/common-sql.php to define common functions to return results.  For example, one common function is to get all the non-artifact uploadtree records in an upload or subtree.  

    function GetUploadtreeResult($upload_fk, $lft="", $rgt="")
    {
      global $PG_CONN;

      if (empty($upload_fk)) return NULL;

      /* Missing $lft or $rgt means to return results for the
       * whole upload instead of a subtree 
       */
      if (empty($lft) || (empty($rgt))) {
        $LftRgtCondition = "";
      }
      else {
        $LftRgtCondition = "and lft>'$lft'  and rgt<'$rgt'";
      }
      $sql = "select uploadtree_pk, ufile_name, lft, rgt from uploadtree 
                where upload_fk='$upload_fk' 
                  $LftRgtCondition
                  and ((ufile_mode & (1<<28)) = 0)";
        $outerresult = pg_query($PG_CONN, $sql);
        DBCheckResult($outerresult, $sql, __FILE__, __LINE__);
      return $outerresult;
    }

####  Internationalization

[Internationalization] (/fossology/fossology/wiki/i18N-Internationalization)


## Default License and File Headers

Each source file should have a GPL 2.0+ license header copyright notice.  For HP developers, this looks like

    /***************************************************************
    Copyright (C) 2008-2010 Hewlett-Packard Development Company, L.P.

    This program is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    version 2 as published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
    ***************************************************************/

Please do not forget to update the year when a file is modified. If you feel like the license and copyright in the beginning of each file is too much - maybe also because a config file is not suitable for 'licensing'), please use that header:

<pre style="white-space: pre-wrap; 
white-space: -moz-pre-wrap; 
white-space: -pre-wrap; 
white-space: -o-pre-wrap; 
word-wrap: break-word;">

# properties file of the fossology xy agent
# Copyright Siemens AG 2015, some.person@siemens.com
#
# Copying and distribution of this file, with or without modification,
# are permitted in any medium without royalty provided the copyright
# notice and this notice are preserved.  This file is offered as-is,
# without any warranty.
#
# Description: this amazing file hold the information about
</pre>

After some time of using Fossology you will understand that explicit licensing in files are such a great help!

## Coding Guidelines for PHP

* Code must use 2 spaces for indenting, not tabs.
* There must be one blank line after the namespace declaration, and there must be one blank line after the block of use declarations.
* Opening braces for classes must go on the next line, and closing braces must go on the next line after the body.
* Opening braces for methods must go on the next line, and closing braces must go on the next line after the body.
* Visibility must be declared on all properties and methods; abstract and final must be declared before the visibility; static must be declared after the visibility.
* Control structure keywords must have one space after them; method and function calls must not.
* Opening braces for control structures must go on the same line, and closing braces must go on the next line after the body.
* Opening parentheses for control structures must not have a space after them, and closing parentheses for control structures must not have a space before.
* The closing?> tag must be omitted from files containing only PHP.
* The PHP constants true, false, and null must be in lower case.
* variables: CamelCase starting with lowercase
* methods: CamelCase starting with lowercase
* struct types: CamelCase starting with uppercase
* Extends and implements keywords must be declared on the same line as the class name.
* Property names should not be prefixed with a single underscore to indicate protected or private visibility. And var keyword must not be used to declare a property.
* Method names must not be declared with a space after the method name. The opening brace must go on next line, and the closing brace must go on the next line following the body, there must not be a space after opening parenthesis and closing parenthesis.

**Example:**
```php
namespace Fossology\Lib\Dao;

/**
 * Class AgentsDao
 * @package Fossology\Lib\Dao
 */
class AgentsDao extends Object
{
  /** @var DbManager */
  private $dbManager;
  
  /**
   * @param DbManager $dbManager
   */
  function __construct(DbManager $dbManager)
  {
    $this->dbManager = $dbManager;
    $this->logger = new Logger(self::className());
  }
}
```

* An if, for, foreach, while and do while structure is same. Note the placement of parentheses, spaces, and braces; and that else and else if are on the same line as the closing brace from the earlier body.
* Note for Switch case the placement of parentheses, spaces, and braces. The case statement must be indented once from switch, and the break keyword (or other terminating keyword) must be indented at the same level as the case body.

**Example**
```php
    if (preg_match($pattern='/^[a-zA-Z0-9]+$/', $subject)) {
      $var = '$this->vars["'.$subject.'"]';
    } else if (preg_match($pattern='/^([a-zA-Z0-9]+)\.([a-zA-Z0-9]+)$/', $subject, $matches)) {
      $var = '$this->vars["'.$matches[1].'"]["'.$matches[2].'"]';
    }
```

The general style rules for control structures are as follows:

* There must be one space after the control structure keyword.
* There must not be a space after the opening parenthesis.
* There must not be a space before the closing parenthesis.
* There must be one space between the closing parenthesis and the opening brace
* The structure body must be indented once.
* The closing brace must be on the next line after the body.

The body of each structure must be enclosed by braces. This standardizes how the structures look, and reduces the likelihood of introducing errors as new lines get added to the body.

## Coding Guidelines for jQuery

* Indentation with 2 spaces not tabs.
* No white space at the end of line or on blank lines.
* If/else/for/while/try : Note the placement of parentheses, spaces, and braces; and that else and else if are on the same line as the closing brace go on next line.
* Unary special-character operators (e.g.,!, ++) must not have space next to their operand.
* Any, and; must not have preceding space.
* Any; used as a statement terminator must be at the end of the line.
* Any: after a property name in an object definition must not have preceding space.
* The? And: in a ternary conditional must have space on both sides.
* No filler spaces in empty constructs (e.g., {}, [], fn())
* New line at the end of each file.
* Better to initialize variables on top. 

```jQuery
var myKey = 0;
var myVal = 0;

var commentModal = null;
var uploadId = 0;
var statusId = 0;

$(document).ready(function () {
  table = createBrowseTable();
  $('#insert_browsetbl_filter').append($('#browsetbl_filter'));
  initPrioClick();
  table.on('draw', function () {
    initPrioClick();
    initPrioDraw();
  });
  commentModal = $('#commentModal').plainModal();
});

function initPrioClick() {
  $("td.priobucket").click(function () {
    table = createBrowseTable();
    elementData = table.fnGetData(this);
    yourKey = elementData[0];
    if (myKey > 0 && myKey !== yourKey) {
      changePriority(myKey, yourKey);
      myKey = 0;
      myVal = 0;
      return;
    } else if (yourKey === myKey) {
      myKey = 0;
      myVal = 0;
    } else {
      myKey = elementData[0];  //upload_pk
      myVal = elementData[1];  //priority
    }
    initPrioDraw();
  });
}
```

## Coding Guidelines for TWIG

* Put one (and only one) space after the start of a delimiter ({{, {%, and {#) and before the end of a delimiter (}}, %}, and #})
```Twig
{{ foo }}
{# comment #}
{% if foo %}{% endif %}
```
* When using the whitespace control character, do not put any spaces between it and the delimiter:
```Twig
{{- foo -}}
{#- comment -#}
{%- if foo -%}{%- endif -%}
```
* Put one (and only one) space before and after the following operators: comparison operators (==, !=, <, >, >=, <=), math operators (+, -, /, *, %, //, **), logic operators (not, and, or), ~, is, in, and the ternary operator (?:):
```Twig
{{ 1 + 2 }}
{{ foo ~ bar }}
{{ true ? true : false }}
```
* Put one (and only one) space after the : sign in hashes and , in arrays and hashes:
```Twig
{{ [1, 2, 3] }}
{{ {'foo': 'bar'} }}
```
* Do not put any spaces after an opening parenthesis and before a closing parenthesis in expressions:
```Twig
{{ 1 + (2 * 3) }}
```
* Do not put any spaces before and after string delimiters:
```Twig
{{ 'foo' }}
{{ "foo" }}
```
* Do not put any spaces before and after the following operators: |, ., .., []:
```Twig
{{ foo|upper|lower }}
{{ user.name }}
{{ user[name] }}
{% for i in 1..12 %}{% endfor %}
```
* Do not put any spaces before and after the parenthesis used for filter and function calls:
```Twig
{{ foo|default('foo') }}
{{ range(1..10) }}
```
* Do not put any spaces before and after the opening and the closing of arrays and hashes:
```Twig
{{ [1, 2, 3] }}
{{ {'foo': 'bar'} }}
```
* Use lower cased and underscored variable names:
```Twig
{% set foo = 'foo' %}
{% set foo_bar = 'foo' %}
```
* Indent your code inside tags (use the same indentation as the one used for the target language of the rendered template):
```Twig
{% block foo %}
{% if true %}
                  true
{% endif %}
{% endblock %}
```

## Coding Guidelines for C/C++

**Header Files:**

* All header files should have #define guards to prevent multiple inclusions. The format of the symbol name should be `<PROJECT>_<PATH>_<FILE>_H_`.
To guarantee uniqueness, they should be based on the full path in a project's source tree.
```C
#ifndef MONK_AGENT_CLI_H
#define MONK_AGENT_CLI_H
…
#endif  //MONK_AGENT_CLI_H
```

**Upper and lower case**
* variables: CamelCase starting with lowercase
* methods: CamelCase starting wiht lowercase
* struct types: CamelCase starting with upppercase
```
  char* string;
  
  Version version;

  void printVersion(char* string) {
```

**Types**

The dereference operator should be appended to the type without space in order to become a part of the type name.
```
  char* string;
```

**Structs**

Structs should be defined inside a typedef, omitting the intermediate struct type.
```
  typedef struct {
    int a;
    char* b;
  } Values;
```

**Match braces:**

* Align braces in same column.

```C
struct mystruct
{
  int myvar;
}
```
* This is a general rule for braces. It applies to switch statements, blocks under if statements, function blocks.

**Tabs:**

* Don't insert tabs into the source file. Set your editor to translate a tab into two spaces. 
```C
for (i=0; i<bufsize; i++)
{
  buf[i] = tolower(buf[i]);
  if(buf[i] < 0)
  {
    buf[i] = 127;
  }
}
```
**Indent Offset:**

* Use two spaces as indent offset.

**Local Function Names:**

* Don't use an underscore to denote local functions, use hunchedCamelCase.

```C
void entryPrint (void* to_print, FILE* ostr)     //Good

void _entry_print (void* to_print, FILE* ostr)   //Bad
```
**Structs:**

* Structs should be defined inside a typedef, omitting the intermediate struct type.

```C
typedef struct {
    int a;
    char* b;
  } Values;
```
**Doxygen:**

* The source documentation is embedded in the code and parsed by doxygen. 

A typical doc header looks like:
```C
  /*!
   * \brief analyze a file for the copyright information
   *
   * This will open and analyze the file provided. It is important to note that
   * this function will clear any information that was previously stored in copy.
   * All information that is needed should be extracted from copy after a call to
   * analyze before calling analyze again.
   *
   * \param copy the copyright instance that will be analyzed
   * \param file_name the name of the file to be opened and analyzed
   *
   * \return 0 on OK, -1 on failure.
   *
   * \todo blah blah
   */
  void copyright_analyze(copyright copy, FILE* istr)
```
**Comments:**

* Comments gets outdated very fast, it's preferable to write code is readable without comments using speaking variable names. Comments are a last resort to explain complex things, like mathematical formulae or algorithms in optimized code.
```C
struct regex_file_struct
{
  int      ftype1;       /* 1=filename, 2=license
                          * 3=bucket, 4=tag       */
  char    *regex1;       /* regex1 string         */
  regex_t  compRegex1;
};

Or 

typedef struct {
  License* license;
  union {
    DiffPoint* full;
    DiffResult* diff;
  } ptr;
  int type;
} Match;
```
**Performance and Readability:**

* It is more important to be correct than to be fast.
* It is more important to be maintainable than to be fast.
* Fast code that is difficult to maintain is likely going to be looked down upon.

**Operator Overloading in C++:**

* Overloaded Operators can yield very readable code, just follow the rule of least surprise.

**Where to put spaces:**

* Use a space before an opening parenthesis when calling functions, or indexing, do not put a space after the opening parenthesis and the closing on. Like this:
```C
void hashAdd (char * value, uint32_t * currentHash); //Good
targs [8]; //Good

void hash_add( char * value , uint32_t * currentHash); //Bad
targs[ 8 ]; //Bad
```
**Inline functions:**

* As Inline functions are handled by the compiler. These have to be defined in the header and are therefore hard to reuse. Please avoid them.

**Local Variables:**

* Place a function's variables in the narrowest scope possible, and initialize variables in the declaration.
* Declare local variables, as local to a scope as possible, and as close to the first use as possible.
```C
long uploadFileId;
uploadFileId = queryFileIdForUploadTreeId(state->dbManager, uploadTreeId);      //Bad

long uploadFileId = queryFileIdForUploadTreeId(state->dbManager, uploadTreeId); //Good
```
**Multiline Parameters:**

* When you need to write down parameters in multiple lines, indent the parameters to be below the previous line parameters, like this:

**GOOD**

```C
long licenseId = insertNewLicense(state->dbManager, shortLicenseNameForQuery,
                                  fullLicenseNameForQuery, refText, uploadId);
```
* If you do not want to have parameters in the same line as the method invocation because you are running out of space, you can indent the parameters in the next line, like this:


**GOOD**

```C
char* queryPFileForFileId(fo_dbManager* dbManager, long fileId) {
  PGresult* fileNameResult = fo_dbManager_ExecPrepared(
    fo_dbManager_PrepareStamement(
      dbManager,
      "queryPFileForFileId",
      "select pfile_sha1 || '.'|| pfile_size AS pfilename from pfile where pfile_pk=$1",
      long),
    fileId
  );
```

**BAD**

```C
char* queryPFileForFileId(fo_dbManager* dbManager, long fileId) {
  PGresult* fileNameResult = fo_dbManager_ExecPrepared(
    fo_dbManager_PrepareStamement(
      dbManager
      , "queryPFileForFileId"
      , "select pfile_sha1 ||'.'|| pfile_size AS pfilename from pfile where pfile_pk=$1"
      , long),
    fileId
  );
```

**Constructors:**

* Avoid doing complex initialization in constructors (in particular, initialization that can fail or that requires virtual method calls).

**Class data member’s initialization:**\

* If your class defines member variables, you must provide an in-class initializer for every member variable or write a constructor (which can be a default constructor). If you do not declare any constructors yourself then the compiler will generate a default constructor for you, which may leave some fields uninitialized or initialized to inappropriate values.

The following snippet shows usage of constructors to initialize the data members. 
```C
class CopyrightMatch
{
public:
  CopyrightMatch(std::string content, std::string type, unsigned start, unsigned length);
  CopyrightMatch(std::string content, std::string type, unsigned start);
  CopyrightMatch();
  const std::string getType() const;
  const std::string getContent() const;
  size_t getStart() const;
  size_t getLength() const;
private:
  std::string content;
  unsigned start;
  size_t length;
  std::string type;
};
```
**Delegating Constructors:**

* Use delegating constructors when they reduce code duplication. For example:
```C
CopyrightMatch::CopyrightMatch(std::string content, std::string type, unsigned int start, unsigned int length) :
        content(content), start(start), length(length), type(type)
{
}
```
**Inheritance:**

* Composition is often more appropriate than inheritance. When using inheritance, make it public.
All inheritance should be public. If you want to do private inheritance, you should be including an instance of the base class as a member instead.
Do not overuse implementation inheritance. Composition is often more appropriate. Try to restrict use of inheritance to the "is-a" case: RegexMatcher subclasses Matcher if it can reasonably be said that RegexMatcher "is a kind of" Matcher.
```C
class RegexMatcher : public virtual Matcher
{
public:
  RegexMatcher(const std::string type, const std::string pattern, int regexIndex = 0);
  virtual std::vector<CopyrightMatch> match(const std::string content) const;
  virtual ~RegexMatcher();
private:
  int regexIndex;
  rx::regex matchingRegex;
};
```

**Multiple Inheritance:**

* Multiple inheritance should be included when at most one of the base classes has an implementation.
Derive class as virtual in case of multiple inheritance to overcome from ambiguity.

**Access control:**

* Make data members private, and provide access to them through accessor functions as needed.
**Write Short Functions:**

Prefer small and focused functions. If a function exceeds about 40 lines, think about whether it can be broken up without changing the structure of the program.
Note: PLEASE DO NOT JUST BREAK THEM UP BY LINES BUT BY LOGICAL BUILDING BLOCKS

**Function Overloading:**

Use overloaded functions (including constructors) only if a reader looking at a call site can get a good idea of what is happening without having to first figure out exactly which overload is being called.

If you want to overload a function, consider qualifying the name with some information about the arguments.
```C
class MyClass {
 public:
  void Analyze(const string &text);
  void Analyze(const char *text, size_t textlen);
};
```

**TODO comments:**

Use TODO comments for code that is temporary or for a short-term solution.

TODOs should include the string TODO in all caps the best context about the problem referenced by the TODO followed by the author or the person going to address the TODO functionality.
```C
if (input.type.compare("statement") == 0)
  {
    /* !"#$%&' */
    input.content = rx::regex_replace(input.content, rx::regex("([\\x21-\\x27])|([*@])"), newtext);
    /*  numbers-numbers, two or more digits, ', ' */

//TODO    input.content = rx::regex_replace(input.content, rx::regex("(([0-9]+)-([0-9]+))|([0-9]{2,})|(,)"), newtext);
//TODO input.content = rx::regex_replace(input.content, rx::regex(" : "), newtext);// free :, <author name>
							OR
       input.content = rx::regex_replace(input.content, rx::regex(" : "), newtext);// free :, //TODO <author name>

  }
```
**Preprocessor directives:**

The hash mark that starts a preprocessor directive should always be at the beginning of the line.
Even when preprocessor directives are within the body of indented code, the directives should start at the beginning of the line.
```C
if (argc > 1)
  {
    const vector<RegexMatcher>& regexMatchers = state.getRegexMatchers();
#pragma omp parallel
    {
#pragma omp for
      for (int argn = 1; argn < argc; ++argn)
      {
        const char* fileName = argv[argn];

        fo::File file((unsigned long) argn, fileName);
        vector<CopyrightMatch> matches = findAllMatches(file, regexMatchers);

        stringstream ss;
        ss << fileName << " ::" << endl << matches << endl;
        cout << ss.str();
      }
    }
  }
```
