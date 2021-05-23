fossology-gold is accessible through fossology.org and is the fossology database from which the master schema, the one used in releases, is derived. So any database changes going into a released version need to be reflected here. Once the changes have been made to this database, it needs to be written to src/www/ui/core-schema.dat and checked in. This is because core-schema.dat is what is actually used in releases.

To change the master schema:

1. Test your changes on your development machine

2. Update fossology-gold. Typically this is done via phppgadmin. Don't export your development schema and check it in since it may contain unwanted changes!

3. Login to fossology.org (with ssh). You need a new account on the server that is in group fossy. Login is only possible with ssh-keys.

    1. Export the gold schema: 

    2. schema-export -c /etc/fossology -f core-schema.dat.new

4. Test the output file on a **development** machine:

5. /usr/local/lib/fossology/fossinit.php -c /etc/fossology -f core-schema.dat.new

    3. Copy core-schema.dat.new to core-schema.dat in your src/www/ui/ and check it in.

If you don't have a fossology.org account or don't know the phppgadmin url and db user/pass, contact another developer who does.