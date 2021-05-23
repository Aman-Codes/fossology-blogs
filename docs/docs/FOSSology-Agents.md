The entire FOSSology system is a combination of agents that run in series:

- The **unpack** agent extracts files to analyze.

- The **adj2nest** agent ...

- The **license analysis** agent runs nomos against the extracted files. This generates the list of detected licenses.

- The **copyright** agent ...

- The **buckets** agent ...

- The **pkgagent** agent ...

- The **engine-shell** agent is a generic agent that can turn any command-line program into an agent. This is currently used by the unpack agent.

- The **mimetype** agent associates a mime-type with every file.

- The **pkgmetagetta** agent extracts meta data from files.

- The **sqlagent** agent performs generic SQL requests. This is useful if the purpose of the agent is to perform some SQL actions.

- The **fo_notify** agent ...

- The **delagent** agent deletes uploads, folders, or license information. It can also be used from the command-line.

Here is a brief summary of each of the 'core' agents and their functioning:

## Unpack

The unpack agent extracts files from containers. A container is any kind of file that stores other files. For example, a ZIP file contains an archive of different files. Other types of containers include tar, ar, ISO, and rpm files. The extraction is performed by the Universal Unpacker (ununpack) program.

task in v1.3

- [Unpack performance](http://www.fossology.org/projects/fossology/wiki/Unpack_performance) **DONE**

- [unpack_microsoft_proprietary_formatted_files](http://www.fossology.org/projects/fossology/wiki/Unpack_microsoft_proprietary_formatted_files) **DONE**

- [replace_some_of_the_other_utilities_used](http://www.fossology.org/projects/fossology/wiki/Replace_some_of_the_other_utilities_used) *** Pending***

- [unit test &](http://www.fossology.org/projects/fossology/wiki/Unit_test_&#38%3B+functional+test+for+unpack+agent) *** DONE briefly ***

coming up

- log organization, [http://fossology.org/pipermail/fossology-devel/2010-October/000487.html](http://fossology.org/pipermail/fossology-devel/2010-October/000487.html)

Universal Unpacker, version 0.9.6, compiled Feb 7 2007 14:16:32 Usage: ununpack [options] file [file [file...]] Extracts each file. If filename specifies a directory, then extracts everything in it. Unpack Options: -C :: force continue when unpack tool fails. -d dir :: specify alternate extraction directory. Default is the same directory as file. -m # :: number of CPUs to use (default: 1). -P :: prune files: remove links, >1 hard links, zero files, etc. -R :: recursively unpack (same as '-r -1') -r # :: recurse to a specified depth (0=none/default, -1=infinite) -X :: remove recursive sources after unpacking. -x :: remove ALL unpacked files when done (clean up). I/O Options: -L out :: Generate a log of files extracted to out. -F :: Using files from the repository. -Q :: Using osrb queue system. (Includes -F) Each source name should come from the repository. First 'gold' is checked, then 'files'. If -L is used, unpacked files are placed in 'files'. -T rep :: Set gold repository name to 'rep' (for testing) -t rep :: Set files repository name to 'rep' (for testing) -q :: quiet (generate no output). -v :: verbose (-vv = more verbose). Currently identifies and processes: * Unordered List Item * Compressed files: .Z .gz .bz .bz2 upx * Archives files: tar cpio zip jar ar rar cab * Data files: pdf * Installer files: rpm deb * File images: iso9660(plain/Joliet/Rock Ridge) FAT(12/16/32) ext2/ext3 NTFS * Boot partitions: x86, vmlinuz

Besides unpacking files, the ununpack program extracts meta data from containers. For example, ZIP and RPM files include meta data that is not unpacked during file extraction. The meta data is extracted to a ".meta" file. For example, happy.zip will create happy.zip.meta.

## Implementation Notes

The unpack agent uses the command-line universal unpacker (ununpack) tool to extract files.

The unpack agent is implemented using the Engine-Shell agent wrapper around the ununpack executable. The rational: Agents are expected to always be running. This is to cut down on spawning time. However, ununpack spawns lots of processes to unpack files. (For example, to unpack a tar file, tar is used in a system call. The same for unzip, rpm, ar, etc.) Since there is already a massive delay from spawning times, using Engine-Shell to spawn one ununpack process does not add a significant delay.

The unpack agent is implemented as a host-specific multi-SQL (MSQ) query. * The unpack agent takes two arguments: the ufile ID and pfile name (sha1.md5.len) to process. * The pfile name specifies the file to unpack. If the pfile exists in the gold repository, then it is used. Otherwise, the files repository is checked. Otherwise, the unpack fails since the file could not be found. * The ufile ID is used when inserting the first entry into the database. This allows unpacked files to be chained in a ufile relationship tree. * Although the MSQ query only returns one record, a host-specific MSQ query is used. This is because of the host-specific requirement. Since the source file may be an ISO and very large, we don't want to transfer it using NFS in order to unpack it. Thus, it runs on a specific host. There will still be a significant amount of NFS transfers (i.e., every unpacked file is placed in the repository; for two repository hosts, that is an average of 50% NFS transfers) however, the first file is usually the largest so the amount of the NFS transfers is less.

The unpack agent creates "artifact" files. There are three types of artifacts: artifact.meta, artifact.dir, and artifact.unpacked. * Meta data extracted by ununpack does not actually have a filename. When using ununpack as a command-line tool, it just appends ".meta" to the filename. However, when inserting data into the database, it uses the name "artifact.meta" and links it to the container file. * Files are unpacked into directories. The ununpack program creates a ".dir" directory for each container. (E.g., happy.zip is extracted into the directory happy.zip.dir.) This directory name is also an artifact and is added to the database with the name "artifact.dir". * Compressed files do not actually store their uncompressed filenames. For example, `zcat happy.gz` extracts the file contents but not the filename. (And for anyone who things "happy.gz" should extract to "happy", you need to remember that not every gzipped file ends with ".gz". What if the compressed file is called "happy" and not "happy.gz"?) Packed files, where a single file contains the packed contents of a single file (e.g., .gz, .Z, .bz2, and upx) extract to a file named ".unpacked". So happy.gz extracts to happy.gz.unpacked. Unpacked files are added to the database using the name "artifact.unpacked".

In general, anything that does not have an explicit filename is an "artifact".

## adj2nest

description needed

h2. The license analysis Agent

brief nomos description here

h2. Command-Line Parameters

## Input Values

## Output Values

## Performance

## Copyright

## Buckets

## Package Agent

## Engine-Shell

The engine-shell is a generic agent wrapper for command-line applications. Although spawning new applications for each database record is not efficient, it is frequently convenient. The engine-shell is designed for rapid prototyping and for long-term use by infrequently spawned agents.

For example, the unpack agent runs the command-line program "ununpack". Since this is only called once per upload, there is no significant impact from spawning the ununpack program as needed. Thus, there is no need for an ununpack-specific agent; ununpack can be started by using engine-shell instead.

Developers should consider not using engine-shell if the application is spawned thousands of times in rapid succession since the spawn times will create large processing delays.

The engine-shell converts all database parameters to shell environment variables and handles communications with the scheduler.

## Usage

`Usage: /usr/local/fossology/agents/engine-shell agent_name command < args`

The agent_name is a string assigned to the engine-shell. It can be used as a parameter to the command.

The command-line itself takes a series of parameters that are expanded each time the process is spawned:

%{%} = percent sign

%{P} = PID (process ID) of the engine-shell!

%{PP} = PPID (parent process ID) of the engine-shell!

%{U} = Unique string assigned by the engine-shell!

%{A} = Agent name assigned to the engine-shell.

%{1} = the first arg from scheduler (there is no %{0})

%{2} = 2nd arg from scheduler

%{1000} = 1000th arg from the scheduler (no real limit)

%{*} = all args from the scheduler

For example:

agent=unpack host=localhost | /usr/local/fossology/agents/engine-shell unpack '/usr/local/fossology/agents/ununpack -d /srv/fossology/repository/ununpack/%{U} -qRCQx' 

In this case, the directory for ununpack (-d) expands to "/srv/fossology/repository/ununpack/12ab45" where 12ab45 is a unique string. The unique string is guaranteed to be unique among all currently running scheduler processes, however it could have been used by a previous process and may be used by a future process when this process completes. It is unique as long as this process is running.

The %{U}, %{P}, and %{PP} parameters are intended to be used by command-lines that require a unique identifier. For example, if a temporary file is needed, then these parameters can form the temporary file name.

Normally the scheduler sends "field=value" pairs to agents for processing. The engine-shell converts these to environment variables before spawning the command. For example, if the scheduler sends "a=12345 b=yes" then the environment variable ARG_a becomes "12345" and ARG_b becomes "yes". The name of the variable comes from the field ("field=" becomes "ARG_field") and the variable is assigned the value.

To make this very clear: if the scheduler needs to call engine-shell 500 times with different parameters, then there will be 500 iterations of (1) set the environment variables and (2) spawn the command line to process the request.

## Return Codes

If the command returns a 0 return code, then engine-shell assumes the command succeeded. A non-zero return code indicates a command-failure.

The command-line should not generate any unnecessary output. All output it logged by the scheduler as debug statements.

## Mimetype Agent

Every file has a mimetype. Some may be "text/plain" or "image/jpeg", and others may be specific to programs like "application/pdf". The mimetype agent is passed a file to analyze and sets the mime-type value in the pfile table. (It also populates the database "mimetype" table as needed.)

This agent creates the "official" mimetype used by the database.

Mimetypes are determined in many ways.

- The unpack agent sets mimetypes for containers. Since it could unpack the file, the mimetype must be accurate.

- If there is no mimetype set, then it uses magic(5) to identify the mimetype. Magic(5) is usually right, but not always right. In particular, a binary file may falsely match a known magic type.

- Magic(5) has two default values for when a file is not matched: plain/text for text files, and application/octet-stream for binary files. In these cases, the file extention (from the ufile database table) is compared with the known suffixes in /etc/mime.types. If there is a match, then the matched mimetype is used. This could also lead to errors. For example, if a text file ends with ".c", it will be labeled as "text/x-csrc" even if it contains C headers. (This is common in the kernel source code -- many ".c" files are used by #include statements.) Similarly, a text file that happens to end with ".png" will be called "image/png" instead of "plain/text".

- If magic(5) returned a default mime type and the file ends with ".spec", then it is assigned the mimetype "application/x-rpm-spec" (for use with the specagent system).

- If the file extension does not exist or is unknown, then the first 100 bytes are checked for non-printable characters. This results in a default value of "text/plain", "application/octet-stream", or "application/x-empty" for a zero-length file.

Because magic(5), /etc/mime.types, and even the ".spec suffix" match may have false mime associations, the output from the mimetype agent is **likely correct**, but may contain some errors. Applications that process files based on the mimetype must be careful and check that the file is really the specified mimetype. Programs should not crash if the file contents do not match the mimetype.

## PkgMetaGetta Agent

Many file formats, such as DEB and RPM, contain meta data. While the unpack agent extracts meta data to "artifact.meta" files, this is not always complete or useful for applications. The pkgmetagetta agent (pronounced "Package Meta Getta") extracts meta information from files and stores the information as attributes in the database attrib table.

The extraction is performed using "libextractor". This library identifies hundreds of different meta types from dozens of different file formats. The extracted information is extremely useful for license analysis. For example, an RPM may have a "license" meta header that says "GPL", while the license analysis agent may identify GPLv2, MIT, OSL, and many other licenses within the package.

While libextractor is useful, there are some limitations: * Mimetype. The libextractor library uses different mimetype labels than those found in magic(5) and /etc/mime.types. For example, libextractor may find a file is "text/x-c", magic(5) may say "text/plain", and /etc/mime.types may identify "text/x-csrc". As a result, the mimetype found by the mimetype agent is considered authoritative and linked to the database pfile entry, while the value found by the pkgmetagetta agent is associated to the pfile through an attribute. * Reuse. The libextractor library does not distinguish purpose. For example, the "Packager" attribute from an RPM file lists the user who did the packaging, while the "Packager" from some other file format may indicate the program that created the package. * Duplication. If a single file contains multiple instances of the same header with different values, then the attribute table will least each instance. However, there is no sense of ordering in the attribute table; applications must not assume that the first one returned is the right one to use. * User error. Some mimetypes appear to be assigned arbitrary values. For example, I have seen some RPM files that contain a "Copyright" attribute with a real copyright statement, while other RPM files simply say "GPL" for the copyright. Since "GPL" is a license and not a copyright, this is a meta header with a non-sense value.

Because of these limitations, applications that process based on meta data must be aware that not every meta header may exist for a file, multiple headers may exist, and the header's value may be inaccurate.

## SQLAgent

The SQLAgent takes a single-line containing an SQL query and runs the SQL. The single line may be multiple SQL statements, separated by a ";".

Usage: sqlagent [options] -i :: initialize the database, then exit. -a arg :: Expect SQL in parameter 'arg='. no file :: process data from the scheduler.

The "-i" option initializes the database for use with the agent. (All agents have this option.)

The scheduler can run agents in two modes: any-host and MSQ. (See the scheduler documentation for details.) With the "any host" configuration, each line of input to the SQLAgent is an SQL comment to perform. No output is generated by the agent. However, if the SQL command fails, then the agent identifies the failure.

In the MSQ mode, use "-a" to specify the SQL column that contains the SQL query. For example, "sqlagent -a go" can be used with the input line:

a="anything" b="ignored" go="select * from ..."

## fo_notify

## DelAgent

The DelAgent is used to delete uploads, folders, or license information from the database and repository.

Usage: delagent [options] List or delete uploads. Options -i :: Initialize the DB, then exit. -u :: List uploads IDs. -U # :: Delete upload ID. -l :: List uploads IDs. (same as -u, but goes with -L) -L # :: Delete ALL licenses associated with upload ID. -f :: List folder IDs. -F # :: Delete folder ID and all uploads under this folder. Folder '1' is the default folder. '-F 1' will delete every upload and folder in the navigation tree. -s :: Run from the scheduler. -T :: TEST -- do not update the DB or delete any files (just pretend) -v :: Verbose (-vv for more verbose)

The DelAgent can be used from the command-line or from the scheduler.

## Command-Line Usage

The basic command-line uses lowercase options to list items that can be processed, and capitals to actually perform the processing. For example, to list the available folders, use "-f". This will generate output that matches the UI's left-hand tree. Each folder is enumerated. For example:

# Folders 63 :: AUrls (Parent folder AUrls) 65 :: a-c -- :: Contains: Bash -- :: Contains: ubuntu 64 :: v-z -- :: Contains: WebSuck 66 :: WebSuck 67 :: v-z -- :: Contains: WebSuck 75 :: baz (Parent folder baz) -- :: Contains: foo 77 :: Bobg (BobG test folder) -- :: Contains: rats-2.1.tar.gz 

Each number indicates a folder ID. The indentation matches the tree layout, and uploads contained in the folders are also displayed. Using '-F', you can delete a specific folder. This will remove the folder, all subfolders, and all uploads contained in the folders.

Similar to -f and -F, '-u" lists all available uploads with their IDs. These IDs can be used with -U to delete a specific upload.

The '-l' options actually works like -u, listing all uploads. However, -L (followed by an upload ID) will only delete license information associated with the upload. This is useful for resetting a license analysis.

The DelAgent is intelligent about file reuse. For example, -F and -U delete projects. However, files (technically pfiles) in those projects may also be used by other projects. When using -F and -U, pfile information (and associated license and repository data) are not deleted unless the pfile is no longer used by any uploads.

Finally, some notes: * There is a special folder number: folder "1" is the top of the folder tree. This folder cannot be deleted. Using "delagent -F 1" will recursively delete EVERY upload and folder, but will leave the top folder of the tree. (Only do this if you want to delete everything.) * If you use "-T", then no deletions occur. This is just used for testing the process. * While deleting entries from the database is relatively fast, removing files from the repository can be time-consuming (due to I/O delays). Also, the bigger the upload, the longer it will take. Be patient; don't expect an ISO to delete instantly. * If a folder or upload becomes detached from the tree for any reason, the "-f" option will identify it under the heading "Unlinked folders" or "Unlinked uploads".

## Scheduler Usage

When using the "-s" command-line option, the DelAgent will assume it is running from the scheduler. This is an "any host" agent since it primarily accesses the database. However, it requires write-access to the entire repository (for deleting unused repository entries).

The input from the scheduler requires three arguments: action, target, and id. The action can either be "LIST" (for debugging -- similar to the lowercase command-line options), or "DELETE". The target is either "UPLOAD", "LICENSE", or "FOLDER". The ID specifies the item to delete (it is optional and ignored for the "LIST" action).

For example, to delete folder 3, the value of the jobqueue jq_args should be:

DELETE FOLDER 3

This is equivalent to the command-line "delagent -F 3".
