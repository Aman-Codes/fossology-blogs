The known security risks are as follows:

* **Ununpack**. The UNiversal Unpacker (ununpack) is used to extract files from archives. This program relies on tools such as "ar" and "unzip" to extract contents. If any of these tools are vulnerable to "../" traversal or other exploits from hostile files, then the user "fossy" may be compromised. In general, the UI may be externally accessible, but generic file submission from unknown users should be discouraged. We have done our best to protect ununpack from zip bombs but may be susceptible to other unarchiving vulnerabilities.

* **PHP and DB**. Parameters from the URL are used to access the database. While effort has been made to protect the database, it could be possible to poison the system through a malicious URL. This should be treated as a risk though we know of no current injection vulnerabilities. Still, consider using apache rewrite rules to remove all URLs that contain quotes, pipes, and other shell-like characters.

* **File distribution**. Uploaded files can be downloaded using the download link. While not a technical vulnerability, if the license specifies distribution restrictions, then this could be considered distribution. Consult your attorney before enabling file downloads.

## Mitigation Options

To mitigate the risks, we have taken the following precautions and recommend the following steps:

* All agents run as user fossy in group fossy. Any exploit will be limited to the range of the fossy user.
* Uploads should be limited to trusted users and not just anyone with web access.
* Use a .htaccess to restrict logins and filter out harmful URLs. For example, this set of .htaccess rules uses mod_rewrite to block malicious URLs containing quotes (used for many SQL-injection attacks):
```
 RewriteEngine On 
 RewriteCond %{REQUEST_URI} .*('|"|`|%22|%27|%60|&quot;).* [OR] 
 RewriteCond %{REQUEST_URI} .*(/\.\./).* 
 RewriteRule ^.*$ - [F]
```
* Sensitive data submissions should be limited to internal server instances.
* Discuss with your legal council the implications of distributing software via this system.

## Security Contact

Should you come across any known or potential security risks, please contact **fossology-devel@fossology.org**. Be sure to provide enough information so that we can reproduce and validate the risk. We take security very seriously. However, there are not many of us so it may take a few days for us to respond (especially on weekends and holidays). Thank you for your understanding and reporting efforts.
