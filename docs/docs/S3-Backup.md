## To run S3 Backup

1. cd `fossology/utils/backup/S3/`
2. Use something like tmux or screen, because the backup will take a while depending on the data you're transfering, cpu power and the connection speed you got available to S3.
3. Make sure, you are running with sudo permissions and execute the S3 Backup script with the following environment variables:

| Environment Variable | Description                                  | Required | Defaults to              |
|----------------------|----------------------------------------------|----------|--------------------------|
| BUCKET               | Your S3 Bucket name                          | Yes      | Null                     |
| FILENAME             | The filename of the backup in the S3 storage | No       | hostname of your machine |

Example:
<pre> sudo BUCKET=testBucket FILENAME=test.tar ./fo-backup-s3 </pre>


### Proxy
* If you're mainly using a proxy, make sure you connect to S3 directly as proxies can be unreliable
* The script is going to download the Amazon S3 Tool from the offical Python PIP repositories. If your python environment is setup to use a proxy, you can run the ./install script first to avoid changing the configuration of your python instance first  