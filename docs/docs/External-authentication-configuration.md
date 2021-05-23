Fossology can be configured to replace the default internal authentication scheme by any Apache web server based authentication mechanism.

The idea is to rely on an external service to authenticate users within Fossology: An authentication module in Apache handles the authentication process against an external service, and forwards all necessary information in HTTP header, then used by Fossology.

# How it works

## General workflow
1. Apache is configured to redirect unauthenticated users to an authentication provider (anything supported by an Apache module: OIDC, LDAP, etc.)
1. The Apache module injects the authentication information in environment variables, that can be retrieved by the Fossology web pages.
   - the exact variable names and content will depend on you Apache configuration and authentication provider.
   - see configuration below.
1. Fossology reads this info through environment variables and authenticates the user.

## Features & Options

The external authentication feature is configured in the [configuration file](https://github.com/fossology/fossology/blob/master/install/defconf/fossology.conf.in) (block `[EXT_AUTH]`)

### Enable feature
To enable the feature, set: `CONF_EXT_AUTH_ENABLE=true`

### Configure environment variables

The Username, email address and User description are taken from the environment variable as provided by the authentication provider. See:
- `CONF_EXT_AUTH_ENV_USER=`
- `CONF_EXT_AUTH_ENV_MAIL=`
- `CONF_EXT_AUTH_ENV_DESC=`

Note that only the USER is mandatory for successful authentication.

### User auto-creation

If the user logging in does not exist yet, it can be automatically added to the database.

Enable: `CONF_EXT_AUTH_NEW_USER_AUTO_CREATE=true`

In that case, a list of agents can be selected for the new user:

`CONF_EXT_AUTH_NEW_USER_AGENT_LIST=<agent list>`

Example: `CONF_EXT_AUTH_NEW_USER_AGENT_LIST="agent_copyright,agent_keyword,agent_mimetype,agent_monk,agent_nomos,agent_ojo,agent_shagent"`

### Username case

Authentication providers may return usernames indifferently in lower or uppercase ; however, Fossology is case-sensitive when searching user entries in the database.

An option forces all incoming usernames to lowercase:

See: `CONF_EXT_AUTH_LOWERCASE_USER=true`

# Caveats & Missing options

- Today, the `logout` feature is ineffective.
- On user creation, only the default list of agent is configurable
- REST API authentication exception may be a little tricky to configure

# REST API

With a basic configuration, Apache will redirect all queries within `http://fossology.fqdn/repo/`to the authentication provider.
However, REST calls are authenticated with a separate token mechanism should be excluded from redirection.

Several solutions exist, depending on your authentication provider, for example:
- It may be possible to exclude a sub-space from authentication (see Shibboleth example below)
- If not (like with LDAP), the trick is to add a separate `Location` section where authentication is not required.

# Apache configuration examples

```
<Directory "/usr/local/share/fossology/www/ui">
    <IfModule mod_rewrite.c>
        RewriteEngine on
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule "^api/(.*)" "/repo/api/index.php" [QSA,L]
        RewriteRule .* - [env=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
    </IfModule>
</Directory>

<VirtualHost *:80>
    ServerName https://fossology.fqdn
    Alias /repo /usr/local/share/fossology/www/ui

    php_flag display_errors on
    php_value error_reporting 2039

    <Location "/">
        RedirectMatch "^/$" "http://fossology.fqdn/repo"
    </Location>

    <Location "/repo">
        AllowOverride None
        Options FollowSymLinks MultiViews

        AuthLDAPURL "ldap://..."
        AuthLDAPBindDN "..."
        AuthLDAPBindPassword "..."
        AuthLDAPInitialBindAsUser on
        AuthLDAPInitialBindPattern (.+) uid=$1,ou=...
        AuthType Basic
        AuthName "Use LDAP Credentials"
        AuthBasicProvider ldap
        AuthUserFile /dev/null
        require valid-user
    </Location>

    <Location "/repo/api">
        Options Indexes FollowSymLinks MultiViews ExecCGI
        AllowOverride None
        Require all granted
        Order allow,deny
        allow from all
    </Location>

    ErrorLog /var/log/apache2/error.fossology.local.log
    CustomLog /var/log/apache2/access.fossology.local.log combined
</VirtualHost>
```

## Shibboleth

```
LoadModule mod_shib /usr/lib/apache2/modules/mod_shib2.so

<VirtualHost *:80>

    ServerName fossology-fqdn:80
    Alias /repo /usr/local/share/fossology/www/ui

    <Location "/repo">
        AllowOverride None
        Options FollowSymLinks MultiViews
        AuthType shibboleth
        Require shibboleth
    </Location>
</VirtualHost>
```

REST API exception can be handled like above for LDAP, or directly in the Shibboleth configuration ;

Example in shibboleth2.xml:

```
    <RequestMapper type="Native">
        <RequestMap>
            <Host name="fqdn.org" authType="shibboleth" requireSession="true">
                <AccessControl>
                    <Rule require="profilsApplicatifs">FOSSOLOGY</Rule>
                </AccessControl>
                <Path name="/api" requireSession="false">
                     <AccessControlProvider uri="accesscontrol.xml" type="..." />
                </Path>
            </Host>
        </RequestMap>
    </RequestMapper>
```

