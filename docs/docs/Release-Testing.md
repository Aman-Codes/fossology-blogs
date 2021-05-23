# Release Testing and Criteria

This page documents the minimum set of criteria and tests that must pass before a FOSSology release can be made.  This pages describes the process of what the team does for a release.  For details on a specific release, see the release documentation on this wiki.

As additional issues are discovered and our testing becomes more mature, expect this list to grow, and expect that more of these tests will become automated.

## Unit test coverage

All new code must have unit tests written for it.

  * License regression tests based on RedHat.tar and fossology test files should all pass
  * All unit tests should pass
  * Code coverage will be measured.  The long term plan is to establish a baseline, and not allow the unit test coverage to go below that baseline.

## Automated Functional Testing

  * All functionality that can be tested from a higher level than with unit tests will have automated functional tests
  * All automated functional tests should pass

## Manual Functional Testing

  * Each release will have a test plan describing how (either in narrative or with test cases) the new features/bug fixes will be tested that can't be adequately tested via automation.

## Customer Assessment Testing

Before final release, a RC will be installed on an internal assessment system and used for a number of days (up to a week) by the the internal FOSSology customer assessment team.  FOSSology must pass internal customer acceptance testing prior to being installed on the production systems.

Note that we have future plans to include an external assessment system for external customer RC testing, as well.  

## Stress Testing

In parallel with Customer Acceptance testing, FOSSology will be stress tested by uploading large and varied files.  The team will often upload many isos and combinations of isos which can take several days to process.  No critical defects can be found in this phase of testing.  If stress testing produces a critical defect, it must be fixed, tested and the stress test must be restarted and run to completion with no critical defects found.

## Linux Distros

We will test on the following Linux distros:  (more detailed test requirements below)

  * Current Debian release
  * Previous Debian release
  * Current Fedora release
  * Latest RHEL5/CentOS5 using yum (end of life is March 2014) (RHEL5 is based on Fedora Core 6)
  * Latest RHEL6/CentOS6 using yum (end of life is November 2017) (RHEL6 is based on Fedora12/13 )
  * The latest long-term and latest short-term release of Ubuntu will be tested by building un-offical debian packages and running the standard test suites on them.  No test failures should occur.

(see http://www.redhat.com/security/updates/errata/ for RHEL support policies and http://en.wikipedia.org/wiki/Red_Hat_Enterprise_Linux#Relationship_to_free_and_community_distributions for RHEL/fedora relationship)

## Package/Install/Update Testing

On **all distros** listed above the following will be tested:

| Test | Criteria |
| ---  | --- |
| Clean install from native distro packaging (.deb on Debian, .rpm on Fedora/RHEL  | No errors or obvious failures  |
| Run automated tests  | All tests pass or have well-documented exceptions  |
| Upgrade from previous release  | No errors or obvious failures, all existing data is maintained  |


On the **current Debian release** the following will be tested in addition: 

| Test | Criteria |
| ---  | --- |
| Multi-system clean install from native distro packaging  | No errors or obvious failures  |
| Fedora distro analysis  | No errors or obvious failures, spot-check the license analysis for errors  |


## References

Here are links to relevant documentation for testing FOSSology

  * [[How to Configure and Run UI Tests]]
 