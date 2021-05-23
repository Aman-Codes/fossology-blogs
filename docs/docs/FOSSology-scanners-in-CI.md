# License/Copyright scanning automation using FOSSology in CI tools

License and copyright scanning can be put into continuous job allowing developers to find out underlying license in the code and fix it as early as possible. This will greatly reduce the work at final clearance from OSS team and also will reduce rework need to be done in case of OSS license violation.

To aid with the task, FOSSology CI scanner image can be used with the GitLab CI and Travis CI. The image can be pulled from Docker Hub using `fossology/fossology:scanner`

## Scanners in CI
The current runner image ships with following scanners:
1. nomos
1. ojo
1. copyright
1. keyword

This provides a good set of license scanning tool set. Also, with the help of copyright and keyword scanner, potential violations can be identified and resolved at the earliest.

### Scanning modes
Due to various stages and operations over SDLC, various scanning modes are required. Thus, the image provides following two scanning modes:
1. Diff scan
    - Scans only diff between two branch (merge request).
    - Good choice to run with existing job on CI for every push.
    - Provide early detection at commit level.
1. Repo scan
    - Scans complete repo, not just the diffs.
    - Good to run at every release tag and scheduled builds.
    - Provides good overview of the repository.

The scanning modes can be easily set as a command line argument, explained bellow.

## Whitelisting
Since a repo can contain test sets and development dependency list which are not shipped in a release, a whitelist is setup in the scanners to ignore such file/folders.

Also, since the license scanners do not know which licenses are good or bad for the project, they can also be listed as whitelisted and will not be reported.

### Format

Sample whitelist file can be found at [`utils/automation/whitelist.sample.json`](https://github.com/fossology/fossology/blob/master/utils/automation/whitelist.sample.json). The whitelist file must be stored at root of repo and names `whitelist.json`.

The license scanners (nomos and ojo) read the whitelisted licenses from the file and every scanner reads the list of files to be ignored from the file.

The file is a JSON document with two arrays:
1. `licenses`
    - Licenses to be ignored from scanning.
    - Case sensitive.
1. `exclude`
    - Files to be ignored from scanning.
    - Understands wild characters like `*`

### Explanation
```json
{
  "licenses": [
    "GPL-2.0+",
    "GPL-2.0",
    "LGPL-2.1+"
  ],
  "exclude": [
    "*/agent_tests/*",
    "src/vendor/*"
  ]
}
```
The above whitelist file will have the following effects on the scanning:
1. The licenses `GPL-2.0+`, `GPL-2.0` and `LGPL-2.1+` will be ignored if found during a scan. You should place your main licenses here.
1. Any file with `/agent_tests/` in its path will be ignored from scanning. Example of test cases being ignored.
1. Any file under `src/vendor/` folder will be ignored from scanning. Example of development artifacts.

## Setting up GitLab CI
The CI setup is pretty simple. However, there are some constraints which must be taken care of.

### The diff for the Merge Requests
The diff are fetched by the [GitLab API](https://docs.gitlab.com/ee/api/merge_requests.html) which requires authentication. To set this up, you must create a [Personal Access Token](https://gitlab.com/profile/personal_access_tokens) with at least `read_api` privilege and put it as an environment variable in CI/CD settings.

The name of the variable should be `API_TOKEN` and the `Protected` flag should not be set, otherwise the pipeline will fail for non-protected branches.

**Note:** Every fork should set the `API_TOKEN` as forks can not read variables from main repo.

### Repo scan
Repo scan does not interact with other entities and thus do not require any other authentication methods.

### Sample configuration
The sample CI file can be found at [`utils/automation/.gitlab-ci.sample.yml`](https://github.com/fossology/fossology/blob/master/utils/automation/.gitlab-ci.sample.yml).

## Setting up Travis CI
The Travis CI does not require additional steps to be followed for public projects.

### The diff for Pull Requests
The diff can only be fetched from GitHub API for now. So projects not hosted on GitHub will not work.

### Repo scan
Repo scan does not interact with APIs, so can be used by any repository.

### Sample configuration
The sample CI file can be found at [`utils/automation/.travis.sample.yml`](https://github.com/fossology/fossology/blob/master/utils/automation/.travis.sample.yml).

## Docker image
The CI jobs should use the image created by the `utils/automation/Dockerfile.ci` or pulled from Docker Hub as `fossology/fossology:runner` image to get the scanners.

The scanner (at `/bin/fossologyscanner`) accept following parameters:
1. `nomos`
    - Run `nomos` scanner
1. `ojo`
    - Run `ojo` scanner
1. `copyright`
    - Run `copyright` scanner
1. `keyword`
    - Run `keyword` scanner
1. `repo`
    - Run on whole repo (if not provided, the diff scan is done)

All the parameters can be used in any combination to get the desired functionality.

#### Merge commit scans
To scan commits at creation of every merge request, you can all following step to your pipeline:

**GitLab**

```yaml
stages:
  - license

license_check:
  stage: license
  image: fossology/fossology:runner
  script:
    - /bin/fossologyscanner nomos ojo
  only: [merge_requests]
  artifacts:
    paths:
    - results
    expire_in: 1 week
    when: on_failure

copyright_check:
  stage: license
  image: fossology/fossology:runner
  script:
    - /bin/fossologyscanner copyright keyword
  only: [merge_requests]
  artifacts:
    paths:
    - results
    expire_in: 1 week
    when: on_failure
```
**Travis**

```yaml
    - stage: Compliance
      name: copyright_check
      services: docker
      script:
        - >-
          if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
          docker pull fossology/fossology:scanner
          && docker run --name "fossologyscanner" -w "/opt/repo" -v ${PWD}:/opt/repo
          -e TRAVIS=${TRAVIS} -e TRAVIS_REPO_SLUG=${TRAVIS_REPO_SLUG}
          -e TRAVIS_PULL_REQUEST=${TRAVIS_PULL_REQUEST}
          fossology/fossology:scanner "/bin/fossologyscanner" copyright keyword ;
          fi
    - stage: Compliance
      name: license_check
      services: docker
      script:
        - >-
          if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
          docker pull fossology/fossology:scanner
          && docker run --name "fossologyscanner" -w "/opt/repo" -v ${PWD}:/opt/repo
          -e TRAVIS=${TRAVIS} -e TRAVIS_REPO_SLUG=${TRAVIS_REPO_SLUG}
          -e TRAVIS_PULL_REQUEST=${TRAVIS_PULL_REQUEST}
          fossology/fossology:scanner "/bin/fossologyscanner" nomos ojo ;
          fi
```

It will create a new stage in your pipeline with two jobs namely `license_check` to scan for licenses using `nomos` and `ojo` scanner and `copyright_check` to scan with `copyright` and `keyword` scanner. Make sure you have the `only: [merge_requests]` in place otherwise the diff could not be recreated in GitLab.

For Travis, the scan artifacts will be created under **results** folder.

#### Repo scan
Repo scan can be done in a similar way by just adding `repo` as another argument.
```yaml
stages:
  - license

repo_license_scan:
  stage: license
  image: fossology/fossology:runner
  script:
    - /bin/fossologyscanner repo nomos ojo
  only: [tags]

repo_copyright_check:
  stage: license
  image: fossology/fossology:runner
  script:
    - /bin/fossologyscanner copyright keyword repo
  only: [tags]
```
These jobs will be similar to the jobs created above with one exception. The jobs now run with `repo` argument. Since, it is a nice idea to run this scan at every release, the `only: [tags]` will run the jobs only at releases (tagging).