The monk license scanner is a full text license scanner searching for any license text contained in the [license-ref table](https://github.com/fossology/fossology/wiki/License-Ref-Table).

In addition to the detected license it produces a full diff output to see differences of the texts if the match is not 100%.

monk is a full text license scanner.

Its purpose is to look for occurrences of reference license texts in the given files.

## Scheduler Mode

When started by the Fossology scheduler, monk tries to match files in the Fossology repo.

The result is written in the database and can be accessed from the Fossology web interface.

## CLI Mode

When run in command line mode it expects filenames as arguments and tries to match them against all the licenses, it then prints a line for each found file/license pair.

Note that this mode still requires a connection to the regular fossology database, as it needs to retrieve all the license reference texts.

To change the path of the database configuration file use the -c option to point to your local Fossology installation (by default in /usr/local/etc/fossology/ or as configured at compilation).

At the time of this writing monk supports the following options:

```
Usage: /usr/local/share/fossology/monk/agent/monk [options] -- [file [file [...]]
  -h   :: help (print this message), then exit.
  -c   :: specify the directory for the system configuration.
  -v   :: verbose output.
  file :: if a file print the licenses detected.
  -V   :: print the version info, then exit.
```

If you use the -v option you will also get output for files which do not match

Tip: if you want to recursively scan a folder use find, for example

```
find /directory/to/scan/ -type f -exec /path/to/fossology/monk/agent/monk '{}' +
```

### What is a match for monk?

When monk scans a file it compares it with all the reference text contained in the fossology database.

The comparison is done word-by-word, ignoring all white space between each word.

```
"this is a sentence" = "this  is a <tab>  sentence" 
```

N.B. Work is in progress to conform monk to the specifications of SPDX.

The rules that follow describe some key differences, but we intend to improve on them.

No case normalization is performed:

```
"A Sentence With Strange Capital Letters" != "A SENTENCE WITH STRANGE CAPITAL LETTERS" 
```

Commas and punctuation are not discarded, but they are not words on their own.

```
"no comma between these words" != "no comma, between these words" 
"a comma, between these words" != "a comma , between these words" 
```

There is no special handling of "(c)" or of quotes:

```
"(c) of 'Fossology'" != "Copyright of ''Fossology''" 
```

Programming language specific comment delimiters are not considered

```
"* This is a line of a license inside a source file" != "// This is a line of a license inside a source file" 
```

### Full

```
./monk ../agent_tests/testlicenses/expectedFull/Apache-*
found full match between "../agent_tests/testlicenses/expectedFull/Apache-1.1" and "Apache-1.1" (rf_pk=221); matched: 0+2825
found full match between "../agent_tests/testlicenses/expectedFull/Apache-2.0" and "Apache-2.0" (rf_pk=213); matched: 0+10272
```

in case of a complete match ('full 'match') between the file and a license text, monk prints the position in the text where the match was found.

The format is 'matched: startPosition+length' the unit of measure is 1-byte characters

### Diff

If some words are changed monk still finds a match, but it advertises it as a 'diff match' with a percentual which depends on the extent of the changes.

```
./monk ../agent_tests/testlicenses/expectedDiff/GPL-1.0,biggerremove ../agent_tests/testlicenses/expectedDiff/GPL-1.0,biggeraddition 
found diff match between "../agent_tests/testlicenses/expectedDiff/GPL-1.0,biggeraddition" and "GPL-1.0" (rf_pk=384); rank 95; diffs: {t[20+6025] M0 s[20+6143], t[6047+709] M+ s[6167], t[6759+6583] M0 s[6167+6712]}
found diff match between "../agent_tests/testlicenses/expectedDiff/GPL-1.0,biggerremove" and "GPL-1.0" (rf_pk=384); rank 98; diffs: {t[20+2489] M0 s[20+2540], t[2511] M- s[2566+201], t[2511+9917] M0 s[2769+10110]}
```

In this case monk prints an array describing the differences between the file and the license.

The format is 'diff: {diff1, ..., diffN}' and each difference is encoded as follows:

* the numbers in the square brackets encode the position: startPosition+length (1-byte characters)

* if the length is not relevant only the position is encoded as [startPosition]

* t stands for 'text' (the input file), s stands for 'searched' (the reference license which matched)

* the type of difference is encoded by

*   M0: text that is equal to the reference text
   M-: text that is in the reference but not in the file (removed text)
   M+: text that is not in the reference but is in the file (added text)
   MR: text replaced

So in the example:

```
't[2511+9917] M0 s[2769+10110]' means
  t[2511+9917]   =  in the file the 9917 characters after character 2511
  M0             =  are equals to
  s[2769+10110]  =  the 10110 characters after character 2769 in the reference license
```

Note that whitespace is counted, but is ignored in the comparison. So this means that the reference license here has 193 whitespace characters more than the text.

```
't[2511] M- s[2566+201]' means
   t[2511]       =  in the file at position 2511
   M-            =  from file are missing
   s[2566+201]   =  the 201 characters after character 2566 in the reference license

't[6047+709] M+ s[6167]' means
  t[6047+709]    =  in the file the 709 characters after character 6079
  M+             =  are added
  s[6167]        =  at position 6167 in the reference license
```

### Text Overlap

Since April there is a filtering of overlapping text match results

monk/agent/match.c:73 finds all matches in the database

monk/agent/match.c:57 filtering and dropping of sub matches

monk/agent/match.c:291 find a super match by comparing two of these

Example (every single character is a token):

* Text = abcdefghij
* License A = abcdxfyhij
* License B = cdxf
* Match MA = abcdefghij
* Match MB = cdef

So the Match MA contains Match MB, but MA is <100%.
The licenses do not fulfil  monk/agent/match.c:280 licensesCanNotOverlap-Condition, because License A contains the License B.

So, for this example, the ranking is not considered:
rankMA= 8/12 > 3/5 = rankMB *not* considered.

Therefore a match smaller can still exists (although it might be superfluous).

Note another example on the ranking. 

Another example, but without tokens e and x would result in:

rankMA'=8/10<3/3=rankMB'. 

As done in the bSAM ranking, the Jaccard could have a convex function where the result is multiplied with the length of the mathcing area - so longer matches get more weight than shorter matches.  For example:

rankMA° = 9 * (8/10)^t > 3 * (3/3)^t = rankMB° for t=4.

These changes are under construction and might change w.r.t parameterization.

## Monk Workflow

These is a summary of the steps followed by monk when looking for licenses.

#### Database connection

Monk establishes a database connection through fo_scheduler_connect_dbMan(), this (as usual for other agents) also handles the initiation of the scheduler interface protocol if appropriate (--scheduler_start cli option).

#### License tokenizing

all the available license reference text are read from license_ref and tokenized.
They are then stored in an array of [struct_License].
From this point on the array is read-only and reused for each scanned file.

#### File scanning 

filenames are read from the command line (CLI mode) or from the database using the uploadId provided by the scheduler.
In this phase monk runs with multiple threads, each taking care of a file at a time and trying to match it using the shared array of licenses.

#### File contents tokenization

the contents of the file are tokenized to an array of tokens.

#### Match finding

each thread loops over the licenses and compares its reference text with the file tokens.
Either all the license tokens are contiguously found inside the file ('full match') or there are some differences.

#### Diff finding

The process starts when the first token of the license in found in a position inside the file, from there on tokens are compared.
Every time that monk finds a difference between the text and the reference it tries to find the next series of tokens that is again equal.
The two parameters monk.h:MAX_ALLOWED_DIFF_LENGTH and monk.h:MIN_TRAILING_MATCHES govern this process.
The former is the maximum number of tokens that can be jumped on either side (combined) before monk decides that the current match is negative and tries with the next one.
The latter is the minimum number of consecutive equal tokens needed to decide that the current difference finishes there, so monk can continue trying to match the following tokens.

If the last token of the license is found it declares the match positive and it is saved for the next stage.
If the end of the file is not reached a new match is tried starting from one token after the first of the current attempt.

#### Matches ranking

Each diff match is classified according to the Jaccard Index: rank = #{matched} / (#{added} + #{removed} + #{matched})
Full matches have all the same rank, higher than that of any diff match.

Matches with a rank lower than monk.h:MIN_ALLOWED_RANK will be automatically discarded.

#### Matches filtering
During the previous scan phase all the positive matches were collected inside an array.
When matches with all the reference license have been tried, the array is analyzed and monk decides which results are important and which match must be discarded.

The rule for deciding the matches to keep is:
for each pair of matches which are contained one in the other, only that with the bigger rank is kept.

This is the strategy to obtain a group of matches with this property:
* divide the matches in ordered groups in which the first element contains all the other matches in the same group.
* for each group: if the match with the biggest rank is the first, keep only the first, otherwise discard the first and recursively analyze the current group.

#### Print/save result

In scheduler mode results are saved in the database. Each match is saved in license_file and the primary key is used to link this information to the information about the differences, which is saved in the highlight table.
The database scheme used to store this information is described in the database model documentation. // TODO cross-link

In command line mode the results are printed to stdout, according to the format described in the user documentation.
