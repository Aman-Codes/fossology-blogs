#  i18N Internationalization

##  Requirements

Separate text in UI to facilitate i18N (Step 2)

* Only the user interface (web GUI) is internationalized.  All these files are located in fossology/ui/. 
* Licenses are not translated.  Agent messages are not translated.  Code comments are not translated. 
* Error strings from non-fossology libraries will have to be translated by their own locale settings (or not at all).  For example, this includes postgresql error strings, system error strings, etc.


##  Step 1 - install gettext-library

This will define the _() function used to do the string translation.
    <?php
    require_once('i18n.php');
    echo _('hello world');
    ?>

Then the translatable strings are extracted and stored in a separate file (po-file).

In the po-file, which is setup for each supported language, the translated strings are added.

    # this is messages.po in locale/de_DE/LC_MESSAGES

    msgid "hello world"

    msgstr "hallo welt"


For performance reasons, this file is converted into a binary form (mo-file), and also stored in the same directory, fossology/ui/locale/de_DE/LC_MESSAGES.
When the php-file is now requested, there is a tiny php-script - which is added by inserting it plainly or
by using 'required_once', to identify the wanted locale-setting.

The lines to be added contain the gettext-specifics

    // this is i18n.php
    [some code to determine locale and encoding]
    setlocale(LC_MESSAGES, $locale);
    bindtextdomain($domain, './locale');
    bind_textdomain_codeset($domain, $encoding);
    textdomain($domain);


##  Step 2 - separate message text from code

To make it clear what is being translated, the translated string should be separated from the rest of the statement.  The translated text can include printf substitution characters (%s, etc) but should not contain variables, html tags, or anything set at runtime or translated by php, the compiler, or webserver.

###  Example 1

Separate text for readability.

    $V.= displayMessage("Scheduling of re-analysis failed, return code: $rc");

should be written as:

    $msg = "Scheduling of re-analysis failed, return code: ";
    $V.= displayMessage($msg.$rc);

In the final step, this is run through gettext to perform the translation.

    $msg = _("Scheduling of re-analysis failed, return code: ");
    $V.= displayMessage($msg.$rc);

###  Example 2

Translate text not tags.

    $VH .= "<tr><th width='15%'>Count</th>";

should be

    $text = _("Count");
    $VH .= "<tr><th width='15%'>$text</th>";

###  Example 3

Substitution characters may be in translated string.

    printf( "<small>Elapsed time: %.2f seconds</small>", $Time);

Should be written as

    $text = _("Elapsed time: %.2f seconds");
    printf( "<small>$text</small>", $Time);


##  Notes  
 We should provide a 'translators manual' that can be understood by non-technical users. Perhaps we can transfer the translation to an extra sub-project, so that translation can progress independently from major FO-releases? But that should done later, after the concept was firmly established.
 This creates a new install dependency on the PHP-gettext library.  It would be good to failover to no translations if the library is not found.  In php we can test for the existence of the required functions and use stubs if they don't exist.
 It's always a good idea to have a sort of testpage, where any user can navigate to, to find out which locale is set. Because many users might not be aware of the actual locale setting they use.

    Hello Fossology-user,

    Your current locale is set to 'ES'. To set it to another
    language, please consult <reference>.
    FOSSology currently has translations for the following
    locales: ...

The above should be translated to the current locale. 

##  Tutorial

This is a Tutorial on how to add new languages to FOSSology.  I want to thank Stefan Schroeder for writing the initial version of this tutorial and for leading us into multiple language support.

###  Requirements


This tutorial will use the barebones commands that are available in any decent Linux distribution. If they are not: Switch to a better one, e.g. Debian or Ubuntu. I will refer to the debian-package names, so YMMV concerning the package names.

 

As root, install the packages for gettext, gettext-support for PHP.

 
    apt-get install gettext gettext-php
 

The gettext package contains xgettext - which is required to extract the prepared strings from the PHP-sources - and msgfmt - which will compile the message catalogue into a binary form.

Before you get started make sure you are working on the latest version in the source tree.

    svn update

###  Determine locale

To find out the proper abbreviation for the language which you wish to provide.  Run

    locale -a

If the locale that you want to translate for is not available, refer to your distributions' i18n-documentation. There is a plethora of pages about language specific topics, some of them are authoritative, like RFCs, IANA and W3c-recommendations. Let's assume, that you select de_DE. Actually you don't want de_DE, because I already provided this one ;-)

###  Extract strings

    cd ~/fossology/trunk/fossology/ui
 
Prepare the folder to store your translation

    mkdir -p locale/de_DE/LC_MESSAGES
 

The directory 'locale' should already exist or you are in the wrong working directory. Now collect all translatable strings to the new directory. xgettext does not support recursion, thus we use find to dive into the subdirectories.

<pre>
find . -iname "*.php" | \
xargs xgettext -o locale/de_DE/LC_MESSAGES/messages.po
</pre>

Now edit locale/de_DE/LC_MESSAGES/messages.po and supply your translations for each string.
 
<pre>
vim locale/de_DE/LC_MESSAGES/messages.po
</pre>
 

The texts come in pairs: The untranslated original, followed by the translated string for you to enter. There are several tools out there, e.g. poedit or gtranslator.

 

In the header of the po-file you should supply some information about yourself (email) and you should define the character set like this:

<pre>
"Content-Type: text/plain; charset=utf-8\n"
</pre>

Note: I ran into some minor problems with the encoding: Although I selected UTF-8 for encoding everywhere, my browser did not properly display German umlauts when setting the pages' encoding type to utf-8 in the browser; I had to choose ISO-8859-1, which is not what I wanted or expected. As a work-around I wrote the umlauts as HTML-entities, like this &auml; and that works perfectly regardless of the browsers settings.

<pre>
...
msgid "Welcome to FOSSology"
msgstr "Willkommen bei FOSSology"
...
</pre>

###  Compilation

Next, you have to compile the text version of your translations into a binary format using msgfmt.

<pre>
cd locale/de_DE/LC_MESSAGES

msgfmt messages.po
</pre>
 

This will create messages.mo in the same directory.

###  Add your language to i18n

Finally you have to add your language in fossology/ui/i18n.php  

<pre>
  // Add new languages below HERE!
  case ("de"): $locale = "de_DE"; break;
  // Add new languages above HERE!
</pre>

for the reasons I lay out in the last paragraph. Before testing your translation, don't forget to configure your browser to request your language. And change the line
 
<pre>
//require("i18n.php"); DISABLED
</pre>
 
to

<pre> 
require("i18n.php"); // not DISABLED
</pre>

in fossology/ui/index.php.
 

Probably it's a good idea to restart apache after doing all this.

 
<pre>
/etc/init.d/apache2 restart
</pre>
 

 
###  Submit your files

After you verified the correct setup you have to add your new files to the svn-repository and update i18n.php, too. I won't explain that... Since I added the locale subtree to the install-Makefile, the next installation should be aware of your contribution. Please DO NOT update index.php in the repository. I'd like to keep i18n-support commented out until we do some more testing.

 
###  How it works

index.php has to include i18n.php. Currently the inclusion is commented out and has to be activated by removal of the // comment in front of the call to require(). After the testing phase, I hope to have i18n activated by default.

i18n examines the browsers ACCEPT_LANGUAGE-field and extracts the first two characters. Then these two are mapped to the corresponding locale-directory. Therefore you have to add your language in i18n.php (with short name of your lanugage, like 'de' and your chosen locale directory, like de_DE. It is - of course - possible to automatically check for existing locales based on the ACCEPT_LANGUAGES-tags, but I prefer to have tight control over which languages are activated to prevent the usage of only partially translated message catalogues.

If you wish to examine what your browser sends in the accepted languages field I recommend the HTTP-liveheader "Add-On for Firefox":https://addons.mozilla.org/en-US/firefox/addon/3829/

 
###  Finally

I NEED FEEDBACK for the tutorial. Please reply to the mailing list.

Note: The w3c does not recommend the chosen "approach":http://www.w3.org/International/questions/qa-accept-lang-locales

I will have to check this out.

###  Random Notes

* Don't use `<i>`. It's not yet deprecated, but will be really soon now.
* It's a bad idea from a translators perspective to tear apart strings until they can no longer be translated without looking at the code.
      E.g. "Click here to continue" was separated into "Click" and "here" and "to continue", where _here_ was a href.
      There are several issues here:
# You cannot understand (=translate) any of the three strings without knowing the context.
# You never name a link "_here_.":http://www.useit.com/alertbox/980111.html
# You cannot understand the full sentence either.
      What to do? Rephrase: "Goto login-page" and make the full sentence a link.
* Learn how to write good i18n-strings, "see":http://www.gnu.org/software/gettext/manual/gettext.html (OK, I haven't read all of it, albeit it's really a must-read)
* "And":http://www.debian.org/doc/manuals/intro-i18n/index.en.html
* There is no quick introduction to gettext for developers on the whole net!?



