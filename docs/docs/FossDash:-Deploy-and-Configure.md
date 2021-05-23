# Configuration guide for FossDash

FossDash is a Grafana based dashboard for you FOSSology usage and system metrics.  
It was partly developped by [@darshank15](https://github.com/darshank15) as part of the 2020 GSoC.

It is two-fold:
1. FOSSology: regularly exports usage and system metrics to an external database
2. FossDash: A pre-configured InfluxDB + Grafana solution collects, stores and displays graphs

Moreover, you may also:
- export FOSSology metrics to any other InfluxDB compatible service
- integrate multiple FOSSology instances, and/or combine any other kind of data from other services

This guide will walk you through Docker deployment and configuration of the FossDash service:
1. Deploy FOSSology
1. Configure and deploy FossDash
1. Configure FossDash on FOSSology

## Deploy FOSSology
**The minimum version of FOSSology is 3.10** *<- UPDATE*

Deploy Fossology as usual, and make sure the `Admin->Fossdash` menu entry is available
[[img/FossDash/fossology_menu.png]]

## Deploy FossDash

In the basic setup below, FossDash is expected to run on the same server as Fossology.

1. Clone the FossDash repository: https://github.com/Orange-OpenSource/fossdash  *<- MOVE and UPDATE ?*
2. Configure the `.env` file as appropriate (***TODO* add `INFLUXDB_HTTP_SHARED_SECRET` variable**)
[[img/FossDash/fossdash_dot-env-file.png]]

The [docker-copose.yml](https://github.com/Orange-OpenSource/fossdash/blob/master/docker-compose.yml) file will run 3 containers:
1. `grafana`: to build and show graphs
1. `influxdb`: to collect and store the metrics
1. `apache-reverse-proxy`: to access separately the Grafana and InfluxDB web pages on a single port.
   - View the dashboard at: _https://my-server/fossdash_
   - Push metrics to _https://my-server/influxdb/write?db=fossology_db_
   - May also be used to configure an SSL layer.

The Docker network `fossology_default` is shared with the Fossology containers.

Run: `docker-compose -p fossdash up`

## Configure Fossology
The details to configure FossDash in Fossology can be found here: https://github.com/darshank15/GSoC_2020_FOSSOlogy/wiki/Fossdash-setup---Getting-started#fossdash-install-fossology-and-configure-the-fossdash

***TODO*: Move the Doc, and update the *Token Generation* link in the Fossology configuration page**

[[/img/FossDash/fossology_fossdash-config.png]]

## Access Grafana
Browse to <http://localhost:8080/grafana>
In the Dashboards management page, two default dashboards are provided:
- one global to all Fossology instances reporting to this FossDash service
- another that will report data specifically for a selected instance

[[img/FossDash/fossdash_manage-dashboards.png]]

Example for Instance specific dashboard:
[[img/FossDash/fossdash_instance-dashboard.png]]