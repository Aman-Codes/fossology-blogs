# Email notifications
FOSSology have the capabilities of send an email to the users every time any of their job finishes, i.e when every agent assigned for the job finishes their task. This can be configured by following the steps in this page.

## Enabling email notification for users
While adding or editing a user, there is an option to either enable or disable the email notification for the user. If the option is enabled, the user will receive email notification on their job completion else not.

## Setting up the email client
`heirloom-mailx` is installed side-by-side during the installation of FOSSology. `heirloom-mailx` don't require a separate MTA to send emails over SMTP protocol.

If heirloom-mailx is not installed in your system, you can install using:
* in Debian based distro: `sudo apt-get install heirloom-mailx`
* in Red-Hat based distro: `sudo yum install mailx`

You must provide the connection information to the email server to the email client. This can be done with the Customize page under the Admin tab. The following fields are required in the page:

* SMTP Host Name

    The domain/hostname of the SMTP server. e.g.: smtp.domain.com

* SMTP Port

    The port to which the client must connect. Standard port 25 for non-ssl connections, 465 for SSL connections and 587 for TLS connections. (Contact your network admin).

* SMTP Auth Type

    heirloom-mailx support following authentication types:
    1.  Plain => The username and password are sent as plain text over the network (unsafe).
    2.  Login => The username and password are sent as hashed text over the network (safe).
    3.  None  => No authentication required to send mail.

    Contact network admin for the supported authentication type in your premises.

* SMTP User

    The email address of the send from which the mail will be sent. Same email address will be used for logging in the SMTP server.

* SMTP Login Password

    The password for the provided email address for logging in the SMTP server.

* SMTP SSL verify

    If your SMTP server provides SSL connection, it can be verified by heirloom-mailx. Following options are supported:
    1.  Strict => The connection will fail if SSL can not be verified.
    2.  Warn   => The user will be warned if the SSL can not be verified, but the connection will not fail.
    3.  Ignore => Do not verify the connection.

    *Note:* For SSL verification, the host machine must have a SSL certificate and the SMTP server must have a copy of machine's SSL certificate.

* Start TLS

    If your SMTP server require TLS connection (secure), put as 'Yes' otherwise put as 'No'.

## Setting up email body

Every email sent by FOSSology utilities two different files namely a header and a footer template and a few macros which can be placed in these templates as a placeholder. These macros are expanded at the runtime.

### The email header

Email header is the file which comes first in the email body. It is a simple text file and a sample is located in `install/defconf/sampleheader.txt`. The file can be changed, renamed or placed somewhere else with read access for `fossy` user. The location of the file is located in the fossology.conf file (`install/defconf/fossology.conf.in`) under the header `[EMAILNOTIFY]` and name `header`. You can provide an absolute path or a relative path to fossology.conf file.

### The email footer

It is same as the header file but it is placed after the header file in the email body. Sample file can be located in `install/defconf/samplefooter.txt`. The path of the file is stored in fossology.conf file under the header `[EMAILNOTIFY]` and name `footer`.

### Email subject

The subject of the email being sent by the FOSSology is located in fossology.conf under the header `[EMAILNOTIFY]` and name `subject`. To change the subject, simply modify the field.

### Macros

FOSSology currently support following macros in ether the header or footer file.
1.  $UPLOADNAME

    Replaced by the name of the file that was uploaded.
2.  $BROWSELINK

    Replaced by the URL that will link to the upload in the browse menu of the user interface.
3.  $JOBQUEUELINK

    Replaced by the URL that will link to the job queue.
4.  $SCHEDULERLOG

    Replaced by the URL that will link to the log file produced by the agent.
5.  $UPLOADFOLDERNAME

    Replaced by the absolute path of the folder that the upload was stored under.
6.  $AGENTSTATUS

    Replaced by a detailed list of agent run on the upload with their job ID, name and pass/fail status and a direct link to agent log file in case of failed agent.
7.  $DB.<table_name>.<column_name>

    This macro is currently unimplemented.
