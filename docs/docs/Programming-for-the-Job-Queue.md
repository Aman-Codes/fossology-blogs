UI processes add analysis tasks to the job queue. However, scheduling tasks is not necessarily straightforward.

## Job Schema

Analysis tasks are stored using three database tables: job, jobqueue, and jobdepends. ([SchemaSpy for these tables](http://fossology.org/schemaspy/tables/jobqueue.html))

* **Job**. A "job" may require a sequence of tasks that are performed by the scheduler's agents. The job table provides a parent name to the set of tasks. For example, the "License Analysis" job consists of many tasks (filter_license, bsam-engine, licterms, filter_clean, etc.). For a given upload, all of these tasks have the same primary key from the job table. The job is simply "License Analysis" regardless of the tasks needed to perform the job.

* **Jobqueue**. While the job table is the general type of analysis, the jobqueue lists the specific steps. Each task for a given job is listed in the jobqueue table.

* **Jobdepends**. While some tasks (jobqueue table) can be run concurrently, others are dependent on the results from previous tasks. The jobdepends table identifies which jobqueue items depend on which other jobqueue items. A single jobqueue items may depend on multiple jobqueue items, and the dependency may span different jobs. For example, the "filter_license" jobqueue item depends on an sqlagent job; both filter_license and sqlagent have the same job primary key. However, the sqlagent for license analysis has a dependency on an unpack job (it cannot analyze files until the upload is unpacked).

## UI Job Programming

By naming convention, all of the "ui/plugins/agent-*.php" files are used to schedule analysis agents. Each agent plugin has two required functions above and beyond the default template:

* **function AgentCheck($uploadpk)**. Given an upload_pk, check if the job is already in the queue. It will return 0 if the job is not scheduled, 1 if it is scheduled but not completed, and 2 if it is scheduled and completed. For example, the AgentCheck() for agent-license.php performs it's check by testing for the presence of a filter_clean jobqueue item; filter_clean is unique to license analysis:

```C
function AgentCheck($uploadpk)
{
  global $DB;
  $SQL = "SELECT jq_pk,jq_starttime,jq_endtime FROM jobqueue \
				  INNER JOIN job ON job_upload_fk = '$uploadpk' AND job_pk = jq_job_fk \
					AND jq_type = 'filter_clean';";
 $Results = $DB->Action($SQL);
 if (empty($Results[0]['jq_pk'])) { return(0); }
 if (empty($Results[0]['jq_endtime'])) { return(1); }
   return(2);
} // AgentCheck()
```

* **function AgentAdd($uploadpk,$Depends=NULL,$Priority=0)**. This function actually schedules the job. It should only be called when AgentCheck() returns zero.

For agent-license.php, the AgentAdd() function first checks for an external dependency (license analysis cannot start until the unpack job 'adj2nest' completes). If the dependency is not scheduled, then it is scheduled. In either case, the jobqueue id is retrieved as a dependency ($Dep).

```C
function AgentAdd ($uploadpk,$Depends=**NULL**,$Priority=0)
{
	global $DB;

	/* Get dependency: "license" require "adj2nest". */
	$SQL = "SELECT jq_pk FROM jobqueue
					INNER JOIN job ON job.job_upload_fk = '$uploadpk'
					AND job.job_pk = jobqueue.jq_job_fk
					WHERE jobqueue.jq_type = 'adj2nest';";
	$Results = $DB->Action($SQL);
	$Dep = $Results[0]['jq_pk'];
	if (empty($Dep))
	{
		global $Plugins;
		$Unpack = &$Plugins[plugin_find_id("agent_unpack")];
		$rc = $Unpack->AgentAdd($uploadpk);
		if (!empty($rc)) { return($rc); }
		$Results = $DB->Action($SQL);
		$Dep = $Results[0]['jq_pk'];
		if (empty($Dep)) { return("Unable to find dependent job: unpack"); }
	}
}
```

The AgentAdd() function uses the JobAddJob() code (from common/common-job.php) to schedule the job and retrieve the job's primary key.

```C
$jobpk = JobAddJob($uploadpk,"license",$Priority);
if (empty($jobpk) || ($jobpk < 0)) { return("Failed to insert job record"); }
```

As an aside, the function name "JobAddJob" is decomposed as "From common-job (Job), the AddJob function".

After creating the job entry, the AgentAdd() function begins to insert each jobqueue and jobdepends item. Both tables are populated by using the JobQueueAdd() function (found in common-jobs).

```C
$jqargs = "SELECT DISTINCT(pfile_pk) as Akey,
    pfile_sha1 || '.' || pfile_md5 || '.' || pfile_size AS A,
    pfile_size as Size
    INTO $TempTable
    FROM uploadtree,pfile
WHERE upload_fk = '$uploadpk'
      AND pfile_fk IS NOT **NULL**
      AND (ufile_mode & (**1**<<**29**)) = 0
      AND pfile_fk = pfile_pk
    ORDER BY Size DESC;";
/* sqlagent does not like newlines! */
$jqargs = str_replace("\n"," ",$jqargs);
$jobqueuepk = JobQueueAdd($jobpk,"sqlagent",$jqargs,"no","",array($Dep));
if (empty($jobqueuepk)) { return("Failed to insert first sqlagent into job queue"); }
```

The JobQueueAdd() function associates the job's type (in this example, "sqlagent"), parameters ($jqargs), repetition ("no"), and run-on column (in this example, an empty string) with the job_pk and list of dependencies.

The list of dependencies ($Dep) can be empty -- indicating no dependencies, or an array of jobqueue_pk values for multiple dependencies. If there is only one dependency, then it must still be passed as an array.

Each call to JobQueueAdd() returns the new jobqueue_pk value. This value is then used in subsequent calls so dependent tasks are linked:

```C
...

$jobqueuepk = JobQueueAdd($jobpk,"filter_license",$jqargs,"yes","a",array($jobqueuepk));

if (empty($jobqueuepk)) { return("Failed to insert filter_license into job queue"); }

...

$jobqueuepk = JobQueueAdd($jobpk,"license",$jqargs,"yes","a",array($jobqueuepk));

if (empty($jobqueuepk)) { return("Failed to insert license into job queue"); }

...

$jobqueuepk = JobQueueAdd($jobpk,"licinspect",$jqargs,"yes","a",array($jobqueuepk));

if (empty($jobqueuepk)) { return("Failed to insert licinspect into job queue"); }

...
```