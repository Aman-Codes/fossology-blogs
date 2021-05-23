This agent find statements within code that could indicate ownership of the copyright. This obviously includes a standard copyright statement, but can also include statements beginning with "written by" or "maintained by." This agent also finds emails and urls embedding in source code, since these can also indicate the ownership of the code.

## General Technical Remarks

* The copyright agent is written in C++, this is easier for handling regular expressions.
* The regular expression are put into  file that parsed at agent startup. Note that agent startup means started by the scheduler service, not when you surf to the FOSSology Web pages.
* File nme is ```src/copyright/agent/copyright.conf```
* The regular expressions have been tested with the notorious FSF-copyright statements including really many years and going over up to three lines, check projects like libelf.

In addition, the copyright agent can:

* look for URLs like http, https, ftp
* look for emails

## How does it work?

You can use the copyright agent for two main use cases:

* review the findings (copyrights, author statements, e-mails, URLs) in the FOSSology Web UI.

* For example, you could search for contributors from France to identify a bunch of French people, then you could check the top level domain of the found e-mail addresses on screen. See the screenshot as example also using the filter function in the upper left of each table.

![Copyright E-Mail Example](https://raw.githubusercontent.com/wiki/fossology/fossology/img/2015-10-15%2000_16_50-Copyright_Email_URL_Author%20Browser%20.png)

* Edit the copyright statements for generation of a readme-/notice-file for your distribution or a SPDX file (or maybe a Debian copyright file for a package in future). You need to know that the listed copyright statements are there in a black list basis:
 * all statements you see will land in a report
 * you must delete statements rows with the red cross to get rid of them
 * or, as an alternative, you can edit or correct copyright statements, by clicking into the respective text line. Please do not forget to enter return to save your edited text.

## Fidelity

Since the copyright agent has changed with 2.6.2, the question rises, how are the findings. While a complete proof is impossible because this would involve a complete scan of all open source packages. Rather, a qualitative look has been performed at some heterogeneous package, OpenSSL 1.0.2.

The analysis has been done as part of solving ticket
https://github.com/fossology/fossology/issues/352 (please scroll down for spreadsheet attachment)

In summary, the newer implementation offers handling advantages and seems to find slightly more items than the implementation prior to 2.6.2. Moreover, the matched statements seem more complete. Please see the issue description for details.

## Command Line

Copyright can be run from the command line:

```
./copyright -c file1.c -c file2.c 
```

The output is formatted like this:

```
file1.c :: [start_byte:end_byte:statement] 'text of statement' [start_byte:end_byte:url] 'text of url' file2.c :: [start_byte:end_byte:url] 'text of url' [start_byte:end_byte:email] 'text of email'
```

## Copyright Agent Prior to 2.6.2

The copyright agent uses to two dictionaries to determine if a sentence is, or is not a copyright statement. The first dictionary is a list of trigger words and should be very small. The second is a list of words that will be used to validate a statement found using the first dictionary. The second dictionary used by the copyright agent is much larger than the first and mostly contains names. The idea behind this is to find a statement like "copyright (c) 2010 hewlett-packard development company, l.p." by finding the work "copyright" and matching it with one of the other words in the sentence, in this case the agent would match it with "2010" since years are an excellent method for identifying copyrights.

The entirety of the first dictionary used currently by the copyright agent:

```
copyright (c) written modified patched maintained contributed &copy; &#169; &#xa9; author
```

A section of the second dictionary used by the copyright agent:

... hartzel haruko harv harvard harvey harville harvison harwell harwerth harwilll harwood hasan ...

## Copyright doesn't find a specific copyright?

If the copyright agent isn't finding a copyright that you know is present in a file, there are a couple simple changes that can be made to the dictionaries to cause it to find your copyright.

**Change copyright.dic**

This is the best choice if the copyright agent is missing an entire class of copyrights. If there is some word that whenever it is seen, the agent should look for a name match nearby then simply add it to this file. Run a "make install" on the directory and restart the scheduler. Then run the copyright agent on the files again. See [[Useful SQL]] for a method to delete the results for a particular upload.

**Change names.dic**

This is the best choice when there is a specific person that you are looking for. If you know that a piece of code has an author, but the copyright agent is unable to find any statements relating them, add that name to the names.dic file. As with changes to the copyright.dic file, simply run a "make install" and restart the scheduler. Then run the copyright agent on the files again. See [[Useful SQL]] for a method to delete the results for a particular upload.

#### Copyright doesn't find a specific copyright?

If the copyright agent isn't finding a copyright that you know is present in a file, there are a couple simple changes that can be made to the dictionaries to cause it to find your copyright.

**Change copyright.dic**

This is the best choice if the copyright agent is missing an entire class of copyrights. If there is some word that whenever it is seen, the agent should look for a name match nearby then simply add it to this file. Run a "make install" on the directory and restart the scheduler. Then run the copyright agent on the files again. See [[Useful SQL]] for a method to delete the results for a particular upload.

**Change names.dic**

This is the best choice when there is a specific person that you are looking for. If you know that a piece of code has an author, but the copyright agent is unable to find any statements relating them, add that name to the names.dic file. As with changes to the copyright.dic file, simply run a "make install" and restart the scheduler. Then run the copyright agent on the files again. See [[Useful SQL]] for a method to delete the results for a particular upload.