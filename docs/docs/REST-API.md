# Note
This page represents use cases and goals of REST API, not the REST API itself.
To read about current REST API implementation, please refer to [FOSSology REST API](https://github.com/fossology/fossology/wiki/FOSSology-REST-API).

## API Use Cases

For the beginning the focus use cases are:

1. Upload and server performs scan and the uploader gets scan results back. Note that a single request response loop would not work straight forwardly because the scan times might take longer than most time outs)
2. Upload, server performs scan. Then a user, expert does some corrections and user can get report (SPDX, Writer) at later stage.

At some later stage:

1. User can check if a package has been uploaded by the SHA (SHA1) hash to check if a package has been uploaded to fossology and gets an upload id back (to retrieve scan and analysis results)

## API Issues

The API shall support some things

1. Authentication should be the same as with the Web UI
2. Versioning in the URL to capture the version of the REST API maybe
3. Documentation of the REST API along with the implemented functionaly - generating automatically would be good. maybe doxygen is a tool for this.
4. Maybe trying to align the used technology stack with the existing REST API

## FOSSology RESTful interface

Goal:
Provide a simple HTTP interface for those needing to do their own data access.
This is not an sql replacement, or even a simple grammar, but rather a simple 
method to do common queries while hiding the complexities of sql data retrieval.

This is a proposal. The only api that has been implemented in a branch to date is the following, which returns a comma separated list of licenses in a single file:

```
wget -qO - --post-file unwind.h http://repo.fossology.org/?mod=agent_nomos_once

Substitute unwind.h for your file.
```

## Need to specify in query:
```
1) Does the query apply to a specific file, or every file in a repository file tree?
    Only one of these may be specified.  Default is file.
    &range=file
    &range=tree
```
```
2) How to identify a file (range=file) or top of tree (range=tree).
    Zero or more of these may be specified.  Default is whole repository.
    &filepk={uploadtree_pk}   An uploadtree_pk is a fossology internal unique
                              key to a file in an upload file hierarchy.
                              e.g. &filepk=123
    &filename={filename}      e.g. &filename=foo.c
    &filepath={filepath}      e.g. &filepath=foo.tar.gz/A/B/myfile 
                                   &filepath=foo.c
    &uploadpk={upload_pk}     An upload_pk is a fossology internal unique key
                              to an uploaded file (which might be a simple file
                              like foo.c or a container like RHEL.x.iso or foo.tar.
                              e.g. &uploadpk=234
```
```
3) Query parameters.
    Query parameters may be any table.column, or pseudo parameter (see 4).
      e.g. &pkg_rpm.pkg_name="Pound-2.4-0.1.d.fc8.src.rpm" 
           &pkg_rpm.version=1.2.3
```
```
4) Operators
    Query parameters may include simple operators.
 4.1) >, <, =, !=, >=, <=  (the equal operator is implied in "version=1.2.3").  
      Otherwise, the operator is included in the value string.
      e.g. &pkg_rpm.version=">1.2.3" 
      e.g. &pkg_rpm.version=">=1.2.3"&pkg_rpm.version="&lt;2.1" 
 4.2) POSIX regular expressions 
      ~   matches regular expression, case sensitive
      *  matches regular expression, case insensitive
      !  Does not match regex, case sensitive
      !~* Does not match regex, case insensitive
      e.g. &filename="~'^Pound'"  To match all files whose names start with "Pound"
```
```
5) Pseudo parameters/values
```
```
5.1) Input
    latest   - latest agent version that produced result for the target.
               This is the default when an agent version is not specified.
    agent    - For some queries it may be important to specify which agent
               produced the results you are interested.
    agentrev - Fossology data (licenses and buckets) is persistent.  So there
               may be data from multiple scans of the same data with different
               versions of the scanner (agent).
    filename
    filepath
```
```
5.2) Output
    licenses - comma separated license string
    diff()   - difference (e.g. license difference between input files/trees)
```
```
6) Output columns
    &out="{column string}
    e.g. &out="filename, licenses"
```
Notes: 
1) There may be multiple ways to specify the same information. For example:
&filename=foo.c
&filepath=foo.c
2) Authentication may be turned off for REST interface, or it may be specified
in the http request.

## Query Examples
1) Retrieve licenses for RPM pkg abc, version 123. As determined by the latest
nomos run on the pkg.
Query: q=rpm&pkgname=abc&version=123&agent=nomos&agentrev=latest&out="licenses" 
Output: "lic1, lic2, lic3"

2) RPM package license history (defaults to latest agent scan)
Query: q=rpm?pkgname=abc&out="pkg_name,version,licenses" 
Output: pkgname, pkgversion, "lic1, lic2, lic3" 
Repeat with lines for each version

3) RPM package file licenses for each file in package abc for upload 12.
Query: q=rpm?pkgname=abc&upload=12&allfiles=yes&out="path,licenses" 
Output: abc.rpm/a/b/foo, "lic1, lic2, lic3" 
Repeat for each file in the package

4) Same as 3 but also report bucket file is in
Query: q=rpm?pkgname=abc&upload=12&allfiles=yes&out="path,bucket,licenses" 
Output: abc.rpm/a/b/foo, "SHIP-HOLD", "lic1, lic2, lic3" 
Repeat for each file in the package

5) Retrieve summary, pkg_arch for file Pound-2.4-0.1.d.fc8.src.rpm
Query: q=rpm?filename=Pound-2.4-0.1.d.fc8.src.rpm?out="summary, pkg_arch" 
This example shows how packages can be treated as files. This is a query
type "rpm" because the output fields are from the package information.

6) What licenses does file foo have?
Query: q=file&name=foo&agent=nomos&agentrev=latest&out="path, licenses" 
Output: "x.tar/dir/foo, "lic1, lic2, lic3" 
Repeat for each foo in the repository

7) Find file licenses for each file in foo.tar for upload 12.
Query: q=file?name=foo.tar&upload=12&allfiles=yes&out="path,licenses" 
Output: foo.tar/a/b/xyz.c, "lic1, lic2, lic3" 
Repeat for each file in foo.tar.

8) Retrieve the bucket history for all versions of pkg X and bucketpool Y

## Package fields
Here is the list of fields we save for packages. Each of these can be
specified as either an input or output field.

1) RPM package fields
pkg_name 
pkg_alias
pkg_arch
version
license
pkg_group
packager
release
build_date
vendor
url
source_rpm
summary
description

2) Debian package fields

```
pkg_name 
    pkg_arch
    version
    section
    priority
    installed_size
    maintainer
    homepage
    source
    description
    summary
    format
    uploaders
    standards_version
```

Fill out with other fields after api syntax is decided.

The API should be versioned (as in the OpenStack one) to allow for easy compatibility management and changes of interface with less issues.
```
E.g. wget http://www.fossology.org/v1/license/get/GPL-V2
```