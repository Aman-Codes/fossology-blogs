License detection agents like bSAM, Monk and F1 match the text in a file with the text of a reference license to determine which license(s) match and which are the best matches. Think of this as a sophisticated diff(1). A reference license can be the full license text, for example, the gpl v2 complete text, or it can be text that declares the license, for example "This is under GPL v2". In each of this case, there would be two license_ref records, one for each text used by the analysis agent as a reference.

The nomos license agent does not use reference licenses. This agent works with heuristics, typically expressed by regular expressions but could also involve procedural logic, for example, if regular expression B has a match and text C does not appear in the file, then report the license as "license A". Even though this agent does not use this table in the analysis, it still must refer to a license_ref table when it records its results in the database. The reason for this is so that license reports can use the same logic regardless of which agent was used. This common method to identify licenses through the license_ref table also means that it is possible to compare the results of different analysis agents.

When a license agent determines a license, it must know which license_ref record is to be used to report the license (the license_file table shows which licenses (license_ref records) were found in which file. In the case of nomos, after it determines which license(s) are in a file, it looks up that license by name (rf_shortname) and records the file and the found license_ref primary key (rf_pk) in the license_file table. In the case of F1, it knows which reference license it used to make the match and records that rf_pk in license_file. Note that since nomos and F1 use completely different methods to determine a license, they each have their own license_ref records. However, these records share common rf_shortnames. So they may refer to different license_ref records, but you can still compare their output via the shortnames. For this reason, shared shortnames must be applied to every new license agent.

What about the original bSAM license agent? The idea of having a single license table structure for all (new) license agents was introduced in v 1.2. Since there is no good way to combine bSAM/licterms agents with the new tables, and because we plan to deprecate bSAM/licterms, there was no attempts to backport all those old records into the new tables. This means there is no easy way to compare the output of bSAM/licterms with the new nomos and F1 agents.

<table>
  <tr>
    <td>Column</td>
    <td>Meaning</td>
  </tr>
  <tr>
    <td>rf_pk</td>
    <td>Primary key</td>
  </tr>
  <tr>
    <td>rf_shortname</td>
    <td>The common name for the license, eg. AGPL v3, AFL v2.1. This is the name of the license as it is reported. Multiple rows can have the same rf_shortname. There are multiple ways people declare a license. There is one row for each different way. They all mean the same license so rf_shortname is used to group different license_ref records together so they report the same. The data is still reported in license_file by individual rf_pk. So if someone wants to know the criteria for a specific license determination, the data is in the db.</td>
  </tr>
  <tr>
    <td>rf_fullname</td>
    <td>Full license name (e.g. Academic Free License v2.1). Since the nomos agent doesn't use reference licenses, it looks up this name to get the rf_pk of the license to match.</td>
  </tr>
  <tr>
    <td>rf_text</td>
    <td>License text used by the analysis agent. In the case of nomos, this text isn't used by the agent but may be populated with text describing how the agent determines how this license was determined (e.g. the regex used)</td>
  </tr>
  <tr>
    <td>rf_url</td>
    <td>URL of the license</td>
  </tr>
  <tr>
    <td>rf_add_date</td>
    <td>Date license was added to this table.</td>
  </tr>
  <tr>
    <td>rf_notes</td>
    <td>Notes a user can record about this license. Since the note is attached to a license_ref record, multiple records that refer to the same reporting name (rf_shortname) each have their own notes.</td>
  </tr>
  <tr>
    <td>rf_active</td>
    <td>Only rf_active=True reference license (license_ref records) are used by the analysis engine. Of Nomos and F1, only F1 use this. Since license_ref records cannot be removed (because existing analyses may refer to them), in order to keep a license ref from being used, you have to set rf_active=False.</td>
  </tr>
  <tr>
    <td>rf_text_updatable</td>
    <td>If true, rf_text may be updated. This is used by Admin > License to allow or disallow editing the license text. This should be true for nomos license records and false for f1 license records.</td>
  </tr>
  <tr>
    <td>rf_md5</td>
    <td>Where the rf_text is used by the agent (F1), this is the md5 of that text. This has a unique constraint on it to insure no duplicate licenses are added to the table.</td>
  </tr>
  <tr>
    <td>marydone</td>
    <td>Will be renamed or removed before release. It's simply a user flag one can attach to a record (how you use it is up to you)</td>
  </tr>
  <tr>
    <td>rf_FSFfree</td>
    <td>FUTURE: True if this license is FSF free</td>
  </tr>
  <tr>
    <td>rf_copyleft</td>
    <td>FUTURE: True if this is a copyleft license.</td>
  </tr>
  <tr>
    <td>rf_OSIapproved</td>
    <td>FUTURE: True if this license is OSI approved.</td>
  </tr>
  <tr>
    <td>rf_FSFfree</td>
    <td>FUTURE: True if this license is FSF free</td>
  </tr>
  <tr>
    <td>rf_GPLv2compatible</td>
    <td>FUTURE: True if this license is GPL v2 compatible</td>
  </tr>
  <tr>
    <td>rf_GPLv3compatible</td>
    <td>FUTURE: True if this license is GPL v3 compatible</td>
  </tr>
  <tr>
    <td>rf_Fedora</td>
    <td>FUTURE: True if this license is a "Good" Fedora license</td>
  </tr>
</table>

### New columns since 2.6

The data model / table schema for the 2.6 was extended with the following columns to add more functionality. The following three columns were added:

<table>
  <tr>
    <td>risk</td>
    <td>Risk is a number value that allows you to score the business risk of a license for your own purpose in the Fossology server. By default no score is set (or set to 0). The score can be set when importing licenses, while then, the risk value will be set for data sets already present. The risk value can be also set for existing licenses in the edit view for a particular license.</td>
  </tr>
  <tr>
    <td>report_shortname</td>
    <td>In case a liceseref entry exists that does not refer to an actual license (for example Apache-2.0-header or zlib-possibility), this attribute can be set to adjust the license name in reporting. In the given example, a license short name 'Apache-2.0-header' could have the report_shortname 'Apache-2.0' in order to close the gap between matching a different text to the reference license text while pointing to the license.</td>
  </tr>
  <tr>
    <td>parent_shortname</td>
    <td>Different license texts can exist that adhere to the same type, for example, BSD-3 variations may be different in copyright holder / author names, but the same w.r.t. license terms. If two agents would recognize different variants of the same license at the same time, auto decisions do not work. This column attribute allows to set a license short id for the decider in order to do auto decisions when two or more agents have found the same license.</td>
  </tr>
</table>
### Monk Agent

The Monk agent uses the texts in this table to test for matching with text found in the files. 
Monk agent text matching has the goal to add more confidence to a license match found by Nomos (which is based on special terms plus regular expressions). In fact, if the Monk agent determines a 100% match, then, the user of Fossology can be sure that the entire license text has been found in the file, which helps to determine the concluded license. In turn, variations of license text can be determined when Monk is reporting a partial match. 

As an additional help, Monk provides also highlight information about the matched text portions, the added text portions found in the file and the missing text portions from the reference license text (from the licenseref table).

### License Headers versus License Texts

The main downside of the Monk agent is that it compares full license texts as found in the licenseref table. As such, common headers, as they are defined for the GPL or Apache licenses are not matched, while 100% matches would be helpful also for defined license headers. licenseref table does not contain headers be default. However, they can be imported with the CSV-based file import.

### Import and export of licenses

In order to enhance the functionality of Monk, also license texts can be added by providing a CSV file. At admin user rights, the Licenses item in the admin menu has two sub menu entries that allow for import and export of licenses. The import gives you the ability to add more license texts to the server system so Monk is considering more texts. The export functionality has two purposes: First, it gives you the opportunity to migrate the set of licenses from one Fossology server to another. And second, it provides you with an example how the CSV file format looks like. Find attached one example.

The downside taking the text fro license.ref is that some texts there (see "Public domain" or "GPL") will not lead to useful matches, because they do not represent a license text. However, such texts are very rare, so it appears tolerable at the moment.

### Example of File for Import

```
'shortname','fullname','text','parent_shortname','report_shortname','url','notes','source','risk'
'Apache-2.0-header','Apache 2.0 License Header','Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or ','Apache-2.0','Apache-2.0','http://www.apache.org/licenses/LICENSE-2.0','manual import',,5
'MIT','MIT License','Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, m','MIT','MIT','http://opensource.org/licenses/MIT','manual import',,0
```