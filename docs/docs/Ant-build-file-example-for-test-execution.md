This is an Ant build.xml file that executes some test. It has been moved to this location from the project root directory, because it might be worth preserving if someone would like to see how to do this in (Apache) Ant. But it was at that time not actively maintained anymore.


```xml
<?xml version="1.0" encoding="UTF-8"?>

<!--
Copyright Siemens AG 2014

Copying and distribution of this file, with or without modification,
are permitted in any medium without royalty provided the copyright
notice and this notice are preserved.  This file is offered as-is,
without any warranty.
-->

<project name="name-of-project" default="build">
    <target name="build"
            depends="prepare,lint,phploc,pdepend,phpmd-ci,phpcs-ci,phpcpd,phpdox,phpunit"/>

    <target name="build-parallel"
            depends="prepare,lint,tools-parallel,phpunit"/>

    <target name="tools-parallel" description="Run tools in parallel">
        <parallel threadCount="2">
            <sequential>
                <antcall target="pdepend"/>
                <antcall target="phpmd-ci"/>
            </sequential>
            <antcall target="phpcpd"/>
            <antcall target="phpcs-ci"/>
            <antcall target="phploc"/>
            <antcall target="phpdox"/>
        </parallel>
    </target>

    <target name="clean" description="Cleanup build artifacts">
        <delete dir="${basedir}/build/api"/>
        <delete dir="${basedir}/build/coverage"/>
        <delete dir="${basedir}/build/logs"/>
        <delete dir="${basedir}/build/pdepend"/>
    </target>

    <target name="prepare" depends="clean" description="Prepare for build">
        <mkdir dir="${basedir}/build/api"/>
        <mkdir dir="${basedir}/build/coverage"/>
        <mkdir dir="${basedir}/build/logs"/>
        <mkdir dir="${basedir}/build/pdepend"/>
        <mkdir dir="${basedir}/build/phpdox"/>
    </target>

    <target name="lint" description="Perform syntax check of sourcecode files">
        <apply executable="php" failonerror="true">
            <arg value="-l"/>

            <fileset dir="${basedir}/src">
                <include name="lib/php/**/*.php"/>
                <include name="*/ui/**/*.php"/>
                <include name="*/ui_tests/**/*.php"/>
                <modified/>
            </fileset>

        </apply>
    </target>

    <target name="phploc" description="Measure project size using PHPLOC">
        <exec executable="phploc">
            <arg value="--count-tests"/>
            <arg value="--log-csv"/>
            <arg value="${basedir}/build/logs/phploc.csv"/>
            <arg path="${basedir}/src"/>
        </exec>
    </target>

    <target name="pdepend" description="Calculate software metrics using PHP_Depend">
        <exec executable="pdepend">
            <arg value="--jdepend-xml=${basedir}/build/logs/jdepend.xml"/>
            <arg value="--jdepend-chart=${basedir}/build/pdepend/dependencies.svg"/>
            <arg value="--overview-pyramid=${basedir}/build/pdepend/overview-pyramid.svg"/>
            <arg path="${basedir}/src"/>
        </exec>
    </target>

    <target name="phpmd"
            description="Perform project mess detection using PHPMD and print human readable output. Intended for usage on the command line before committing.">
        <exec executable="phpmd">
            <arg path="${basedir}/src"/>
            <arg value="text"/>
            <arg value="${basedir}/build/phpmd.xml"/>
        </exec>
    </target>

    <target name="phpmd-ci"
            description="Perform project mess detection using PHPMD creating a log file for the continuous integration server">
        <exec executable="phpmd">
            <arg path="${basedir}/src"/>
            <arg value="xml"/>
            <arg value="${basedir}/build/phpmd.xml"/>
            <arg value="--reportfile"/>
            <arg value="${basedir}/build/logs/pmd.xml"/>
        </exec>
    </target>

    <target name="phpcs"
            description="Find coding standard violations using PHP_CodeSniffer and print human readable output. Intended for usage on the command line before committing.">
        <exec executable="src/vendor/bin/phpcs">
            <arg value="--standard=${basedir}/build/phpcs.xml"/>
            <arg path="${basedir}/src"/>
        </exec>
    </target>

    <target name="phpcs-ci"
            description="Find coding standard violations using PHP_CodeSniffer creating a log file for the continuous integration server">
        <exec executable="phpcs" output="/dev/null">
            <arg value="--report=checkstyle"/>
            <arg value="--report-file=${basedir}/build/logs/checkstyle.xml"/>
            <arg value="--standard=${basedir}/build/phpcs.xml"/>
            <arg path="${basedir}/src"/>
        </exec>
    </target>

    <target name="phpcpd" description="Find duplicate code using PHPCPD">
        <exec executable="phpcpd">
            <arg value="--log-pmd"/>
            <arg value="${basedir}/build/logs/pmd-cpd.xml"/>
            <arg path="${basedir}/src"/>
        </exec>
    </target>

    <target name="phpdox" description="Generate API documentation using phpDox">
        <exec executable="phpdox"/>
    </target>

    <target name="phpunit" description="Run unit tests with PHPUnit">
        <exec executable="src/vendor/bin/phpunit" failonerror="true"/>
    </target>
</project>
```