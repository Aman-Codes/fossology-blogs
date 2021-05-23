The file repository is used to store the actual files loaded into the FOSSology system. While the Database stores meta information about files, the Repository holds the actual files.

* Each file is named after a pseudo-unique checksum: sha1.md5.length

    * sha1. This is the sha1 value of the file's contents.

    * md5. This is the md5 value of the file's contents.

    * length. This is size of the file's contents.

Although sha1 and md5 are relatively unique hashes, there is still a possibility of a hash collision. The working belief is that, while the triplet could have a collision, it is extremely unlikely.

Some notes about filenames:

* Filenames can actually contain any characters, not just hex characters. ("happy_go_lucky.txt" is a valid filename). The only real exceptions: a filename cannot begin with a dot and can only have characters in the set [a-zA-Z0-9@%_.=+-]. All other filenames are invalid. (In particular, directory slashes, quotes, and shell commands are invalid.)

* All filenames are converted to lowercase. "HeLlO" is the same as "hello". This is done because hex characters are expected and "F" is the same as "f".

## Directory

Since the repository can store hundreds of thousands of files, we want a quick way to organize the contents. The selected method is based on octets. For example, the file

```
ffe1cd8dd6b0b4c031262402ab0375ee876b17cb.732fe0681bc974f1075c4bee147c91f8.4232
```

is stored in the directory "/ff/e1/cd/".

**NOTE**: If the filename is shorter than the number of characters needed for the path, then the path is padded with underscores. The filename "abcde" would be stored as "ab/cd/e_/abcde".

## Types

The repository must store many different types of files. The type of file determines the contents and the tool that uses it. Some example types:

* **gold**. These denote the golden repository.

* **files**. These are the original, extracted files.

* **license**. These are the FOSSology license cache files.

* **test**. These files are reserved for testing.

The type of file is prepended to the directory tree. Thus, the example file could be found under "/files/ff/e1/cd/".

The different types are not static -- new types can be created at any time. (The type is specified when using the tool -- see below.)

Some notes about types:

* Type names can only have characters in the set [a-zA-Z0-9@%_=+-]. This is to prevent a type titled ".." from leaving the directory, or a type "Depth.conf" from screwing up the depth configuration file.

* Type strings are case-sensitive. "Test" is different than "test".

## Hosts

In order load balance storage and processing, the files in the Repository can be distributed across NFS-mounted hosts. A host configuration file specifies which host actually stores which files.

The hostname is prepended to the path, so there only needs to be one mount point per host. For example, "/host1/files/ff/e1/cd/".

**Note**: If there is no host configuration file entry, then no hostname is prepended to the path.

## Configuration

The directory for storing the repository configuration files is /srv/fossology/repository/. If this does not exist, then "." is used. This can be changed (for testing) by specifying the environment variable "REPCONF". This should contain the path to the repository.

fossology.conf contains some information relevant to repository configuration. The group REPOSITORY and the fields depth and path under the group FOSSOLOGY. The fields of depth and path relate to the location of files on the file system.

* **depth** of the file tree is a configurable parameter. As a result the desired depth is a parameter and if the parameter is not specified, default is 2.

* **path** is the path to the top of the repository. All repository mounts will happen under this directory.

* **REPOSITORY** example: "localhost[] = * 00 0ff"
    * Hostname[]: the name of the host. Since the same host name can appear on multiple lines this must be followed by [] to identify this
    * Type: the type of files stored on the host. This is either a string or a "*" to denote "all types"
    * Start: A series of lowercase octets that denote the beginning range of filenames for the host. This can be any length (it does not need to be a multiple of two)
    * End a series of lowercase octets that denote the end range of filenames for the host.

For example:

```
host1[] = test 00 7f
host2[] = test 80 af
host3[] = test b000 b080
host1[] = gold 00 7f
host2[] = gold 80 ff
host4[] = * 00 ff
```

In this example, the 'test' file (file type = "test") "b081cd8dd6b0b4c031262402ab0375ee876b17cb.732fe0681bc974f1075c4bee147c91f8.4232" would be stored on host4, but the same filename would be on host2's 'gold' repository.

Some notes about using the Hosts.conf configuration file:

* Two host entries can cover the same range. The first one listed wins. There is no "fallback" to the next entry if a file does not exist.

* If no viable host is found in the Hosts.conf file, then it defaults to storing on the localhost with no hostname prepended.

## Repository Tools

The following command-line tools exist for managing the repository:

### rephost type sha1.md5.length

This displays the hostname where the file would be found or stored. This is used for optimizing processing by running a process on a local host rather than accessing files remotely. If no hostname is found, then localhost is returned.

Note: This does not check if the file exists. It only says where the file could be found.

### reppath type sha1.md5.length

This tool displays the path to the file (reading, writing, or debugging).

Note: This does not check if the file exists, or even if the directories are valid. It only says where the file could be found.

### repexist type sha1.md5.length

Determine if the file exists in the repository. This is for use in shell scripts: returns "0" for yes, "1" for no.

### repcat type sha1.md5.length

If the file exists, cat the contents to stdout.

### repwrite type sha1.md5.length < input

Creates a file in the repository.

### repcopyin type source sha1.md5.length

**echo 'source sha1.md5.length' | repcopyin type**

**cat 'XML from ununpack' | repcopyin type XML**

Bulk-populates the repository. There are three use options.

* The command-line specifies the source and destination names.

* The command-line specifies only the type of repository. Stdin contains pairs of destination and source names, one pair per line.

* The command-line specifies the type of repository and XML. Stdin contains an XML file generated by Ununpack.

All files are inserted into the repository. But, if the file already exists, then it is not copied in again. (This is for a speed improvement.)

The program displays the total number of files imported, duplicated (not imported), and errors (failed to import).

## Repository Library

The repository is managed by a C library: librep.a and librep.h. This library contains the following common functions:

### REPCONF environment variable

The environment variable REPCONF specifies the configuration directory for the repository. If this is not set, then /srv/fossology/repository/ is used. (And if that does not exist, then the current directory (".") is used.)

### int RepOpen ();

Since the repository configuration files may be accessed by every function call, we don't want to call fopen/fclose millions of times. This opens and sets up global variables. You should call this first -- but if you forget, then it is called anyways by all of the other repository functions. Returns 1 if it is configured, 0 if configuration failed.

### void RepClose ();

This closes all global variables. It is proper to call this when you are done, but if you forget... shared memory will not be lost.

NOTE: If you want to refresh the configuration, then call: RepClose(); RepOpen();

### char * RepMkPath (char *Type, char *Filename);

Allocate a string containing a path for the type and file. Returns a string, or NULL if the type/filename is invalid (or an allocation error occurs).

The depth of the path is determined by the value in $REPCONF/Depth.conf. If this file does not exist, then the default is "2". The caller is responsible for calling free().

### char * RepGetRepPath ();

Allocate a string containing the path to the top of the repository. Returns NULL if an error occurred. The caller is responsible for calling free().

### char * RepGetHost (char *Path, char *Type, char *Filename);

Allocate a string containing the hostname where the file is stored. The hostname is determined from the $REPPATH/Hosts.conf file. Returns a string if the hostname was found. Returns NULL if there is no hostname OR if an error occurred. The caller is responsible for calling free().

### int RepExist (char *Type, char *Filename);

Determines if the type+file exists in the repository. Returns 1 if it exists. Returns 0 if it does not exist. Returns -1 if an error occurred.

### int RepHostExist (char *Type, char *Host);

Determines if the type+hostname exists in the repository. This is useful for determining of this particular host stores any files of the given type. Returns 1 if it exists. Returns 0 if it does not exist. Returns -1 if an error occurred.

### int RepRemove (char *Type, char *Filename);

Remove a file from the repository. Returns the result from unlink() -- 0 on success. If there is an error, then a non-zero value is returned.

### FILE * RepFread (char *Type, char *Filename);

This is a replacement for fopen(filename,"rb"). It returns a FILE pointer to the type+filename, or NULL on error. The caller should run RepFclose() when they are finished.

### FILE * RepFwrite (char *Type, char *Filename);

This is a replacement for fopen(filename,"wb"). This function will also create the repository's directory if it is needed. It returns a FILE pointer to the type+filename, or NULL on error. The caller should run RepFclose() when they are finished.

### int RepFclose (FILE *F);

This is a replacement for fclose(FilePointer). This returns the value from fclose().

### int RepImport (char *Source, char *Type, char *Filename, int HardLink);

This is a really fast file copy. If HardLink is set (not zero), then it will use a hard link before trying a regular file copy (making it REALLY fast). The contents from Source are copied into the repository. This returns 0 on success, non-zero on failure.

### RepMmapStruct * RepMmap (char *Type, char *Filename);

This is a replacement for mmap(). The file is opened for read-only access! Do not use this command to create a new file. It allocates and returns a structure containing the mmap handle:

```C
struct RepMmapStruct
  {
  int FileHandle; /* handle from open() */
  unsigned char *Mmap; /* memory pointer from mmap */
  int MmapSize; /* size of mmap */
  };
typedef **struct** RepMmapStruct RepMmapStruct;
```

The caller must call RepMunmap() to free the structure.

### RepMmapStruct * RepMmapFile (char *Filename);

Similar to RepMmap(), but takes a full filename as a parameter rather than a repository entry. (Technically, this is used by the RepMmap() function.)

### void RepMunmap (RepMmapStruct *M);

This un-mmaps and deallocates the RepMmapStruct variable created by RepMmap() and RepMmapFile().