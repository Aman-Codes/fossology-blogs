# Basic guide to FOSSology REST API

1. [OAS3 document](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#oas3-document)
2. [Overview](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#overview)
    1. [HTTP Verbs](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#http-verbs)
    2. [Status Codes](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#status-codes)
    3. [Content-type](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#content-type)
    4. [Error message](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#error-message)
3. [Token](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#token)
    1. [JSON Web Token (JWT)](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#json-web-token-jwt)
    2. [JWT format](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#jwt-format)
    3. [Generating new token via POST call](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#generating-new-token-via-post-call)
    4. [Token life](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#token-life)
    5. [Authentication](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#authentication)
    6. [Selecting the group](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#selecting-the-group)
4. [Sample work flow](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#sample-work-flow)
    1. [Query folders](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#1-query-folders)
    2. [Uploading a new package](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#2-uploading-a-new-package)
    3. [Query accessible packages](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#3-query-accessible-packages)
    4. [Schedule scan agents](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#4-schedule-scan-agents)
    5. [Get upload summary](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#5-get-upload-summary)
    6. [Get upload license findings](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#6-get-upload-license-findings)
    7. [Generate and download report](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#7-generate-and-download-report)
5. [Editing REST Endpoints](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#editing-rest-endpoints)
    1. [Versioning scheme](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#versioning-scheme)
    2. [Notes](https://github.com/fossology/fossology/wiki/FOSSology-REST-API#notes)

## OAS3 document
The API is documented in OpenAPISpecification 3.0.2 and the document is stored at [src/www/ui/api/documentation/openapi.yaml](https://github.com/fossology/fossology/blob/master/src/www/ui/api/documentation/openapi.yaml).

The document can be loaded directly in Swagger UI.

## Overview
This guide will help you to get started with the FOSSology's REST API.

### HTTP Verbs
The REST API tries to adhere to all the HTTP verbs as closely as possible.

The major HTTP verbs supported are:

| HTTP Verb | Description |
| --- | --- |
| GET | Retrieve some information without altering server state. |
| POST | Create new data on FOSSology server. |
| PATCH / PUT | Modify some information about an element on the FOSSology server. |
| DELETE | Remove some information from the FOSSology server. |

### Status Codes
FOSSology's REST API tries to adhere to all the HTTP status codes as closely as possible.

Status codes which might be returned for a call are:

| Status code | Description |
| --- | --- |
| 200 | Request completed successfully. |
| 201 | Requested resource created. Please check the response message for more info. |
| 202 | Request is accepted. |
| 299 | Resource is deprecated. Please check the response message for more info. |
| 400 | Bad request. Please check the response message for more info. |
| 401 | Unauthorized access. |
| 403 | Access forbidden. |
| 404 | Required resource not found. |
| 500 | Internal server error. |
| 503 | Resource is not ready. Please check `Retry-After` header. |

### Content-type
FOSSology currently returns `application/json` data only.

### Error message
When an error has occurred, REST API will try to return an informative payload in the following format:

```javascript
{
  "code": 500,          /** HTTP status code **/
  "message": "string",  /** Brief description of the error **/
  "type": "ERROR"       /** Will be ERROR in case of error, INFO otherwise **/
}
```

## Token
### JSON Web Token (JWT)
FOSSology uses JWT tokens for secure authentication of each request. The users can generate new token from two ways.

1. Using the UI
    The user, once logged in, can navigate to Admin -> Edit User and found the space to generate/retrieve/revoke JWTs.
![PersonalAccessToken](https://www.fossology.org/wp-content/uploads/sites/39/2019/04/RESTAPI-interface-screenshot-1024x704.png)
1. Using a POST request
    Users can also generate new tokens by sending a new POST request to `/tokens` from where, their request is validated and a new token is returned.

### JWT format
FOSSology makes use of standard JWT claims like `exp`, `nbf` and `jti`. Along with these, another claim of `scope` is injected as well.

The JWT is signed using the HMAC 256 algorithm and a secret key is generated at each request for new token which is used for signing the JWT. This secret key is never revealed providing a confidence that the token has not been tempered with and is generated by FOSSology on user's request.

### Generating new token via POST call
A request similar to following cURL call can be used to generate a new token:

#### Request
```bash
curl -L -X POST \
  "https://fossology-server.com/api/v1/tokens" \
  -H  "Content-Type: application/json" \
  -d "{\"username\":\"john\",\"password\":\"awesomepassword\",\"token_name\":\"awesometoken\",\"token_scope\":\"read\",\"token_expire\":\"2019-04-24\"}"
```

#### Response
```json
{
  "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTEyOTIyMDAsIm5iZiI6MTU1MTIwNTgwMCwianRpIjoiTmk0eiIsInNjb3BlIjoicmVhZCJ9.v2RGTsELimbwF0aaHrJvDwC6bbz19oi1VlwTGq_6f0s"
}
```

### Token life
Tokens, by default, can have a minimum life of 1 day and maximum of 30 days. The cap can be changed by admin under Admin -> Customize.

Tokens right now have a granularity of 1 day. So, if a token is set to expire on 23rd of March 2019, it will be valid till 2019-03-23 23:59:59.

### Authentication
The user must include the **"Authorization"** header with the **`Bearer <JWT>`** as the value to validate the request.

### Selecting the group
Every API request by default executes with the group selected in UI. To change the group for the action, you can set the `groupName` header in your request. The header is acceptable by every endpoint.

#### Sample request
```bash
curl -L -X GET "https://fossology-server.com/api/v1/uploads"
  -H "groupName: group-2"
  -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxMzIuMTg2LjEzNy4xOTAiLCJhdWQiOiIxMzIuMTg2LjEzNy4xOTAiLCJleHAiOjE1NTU1MjU3OTksIm5iZiI6MTU1NTI2NjYwMCwianRpIjoiTWk0eE5qQT0iLCJzY29wZSI6IndyaXRlIn0.IFKfYjOzroQSfRpkAnVf-bn-C1rTHquAK_QJt3Jie-A"
```

## Sample work flow
Here is a sample workflow for uploading a packaging and generating a report.

We will perform following steps:
1. Query the folders accessible to upload a new package.
2. Upload a new package to FOSSology.
3. Query the packages accessible to us.
4. Schedule scan agents.
5. Get upload summary.
6. Get upload license findings.
7. Generate and download report.

### 1. Query folders
Let's generate a new JWT for the rest of the steps:

##### Request
```bash
curl -L -X POST \
  https://fossology-server.com/api/v1/tokens \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'username=fossy&password=fossy&token_name=myToken&token_scope=write&token_expire=2019-03-20'
```

##### Response
```json
{
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTEyOTIyMDAsIm5iZiI6MTU1MTIwNTgwMCwianRpIjoiTmk0eiIsInNjb3BlIjoicmVhZCJ9.v2RGTsELimbwF0aaHrJvDwC6bbz19oi1VlwTGq_6f0s"
}
```

Let's fetch the folders from the server.
##### Request
```bash
curl -L -X POST \
  "https://fossology-server.com/api/v1/uploads" \
  -H  "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTEyOTIyMDAsIm5iZiI6MTU1MTIwNTgwMCwianRpIjoiTmk0eiIsInNjb3BlIjoicmVhZCJ9.v2RGTsELimbwF0aaHrJvDwC6bbz19oi1VlwTGq_6f0s"
```

##### Response
```json
[
    {
        "id": 1,
        "name": "Software Repository",
        "description": "Top Folder",
        "parent": null
    },
    {
        "id": 3,
        "name": "Folder2",
        "description": "Some folder",
        "parent": 1
    },
    {
        "id": 6,
        "name": "Folder3",
        "description": "Another folder",
        "parent": 1
    }
]
```

### 2. Uploading a new package
Let's upload a package to the server inside **Folder3**. From the previous request, we know the folder id as 6

#### a. Upload a file
##### Request
```bash
curl -L -X POST \
  "https://fossology-server.com/api/v1/uploads" \
  -H  "folderId: 6" \
  -H  "uploadDescription: Test Upload" \
  -H  "public: public" \
  -H  "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTEyOTIyMDAsIm5iZiI6MTU1MTIwNTgwMCwianRpIjoiTmk0eiIsInNjb3BlIjoicmVhZCJ9.v2RGTsELimbwF0aaHrJvDwC6bbz19oi1VlwTGq_6f0s" \
  -H  "Content-Type: multipart/form-data" \
  -F "fileInput=@file-to-scan.zip;type=application/x-zip-compressed"
```

#### b. Upload from VCS
##### Request
```bash
curl -L -X POST \
  "https://fossology-server.com/api/v1/uploads" \
  -H 'folderId: 6' \
  -H 'uploadDescription: Test Upload' \
  -H 'uploadType: vcs' \
  -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTc1MTYxOTksIm5iZiI6MTU5NDgzNzgwMCwianRpIjoiTVRJdU13PT0iLCJzY29wZSI6IndyaXRlIn0.T_8Y1bcwoznlBSJwKgIR7xPXzv06Th9bWZOhl6Xwghk' \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "vcsType": "git",
    "vcsUrl": "http://my.git.server/awesome/project",
    "vcsBranch": "trunk",
    "vcsName": "Display name",
    "vcsUsername": "user",
    "vcsPassword": "pass"
}'
```

#### c. Upload from URL
##### Request
```bash
curl -L -X POST \
  "https://fossology-server.com/api/v1/uploads" \
  -H 'folderId: 6' \
  -H 'uploadDescription: Test Upload' \
  -H 'uploadType: url' \
  -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTc1MTYxOTksIm5iZiI6MTU5NDgzNzgwMCwianRpIjoiTVRJdU13PT0iLCJzY29wZSI6IndyaXRlIn0.T_8Y1bcwoznlBSJwKgIR7xPXzv06Th9bWZOhl6Xwghk' \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "url": "http://my.http.server/awesome/project.tar.gz",
    "name": "Display name"
}'
```

#### Response
(The `message` contains the new upload id.)
```json
{
    "code": 201,
    "message": 11,
    "type": "INFO"
}
```

### 3. Query accessible packages
**Note:** Uploading a new file will just trigger `ununpack` and `adj2nest` agents. Other agents need to be scheduled in a separate request. Also, the packages will not show up in the response until `ununpack` and `adj2nest` agents are finished.

#### a. Check if upload is finished
You can query the jobs running on upload by calling `/jobs` and passing uploadid to `upload` parameter.
##### Request
```bash
curl -L -X GET \
  "https://fossology-server.com/api/v1/jobs?upload=11" \
  -H  "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTEyOTIyMDAsIm5iZiI6MTU1MTIwNTgwMCwianRpIjoiTmk0eiIsInNjb3BlIjoicmVhZCJ9.v2RGTsELimbwF0aaHrJvDwC6bbz19oi1VlwTGq_6f0s"
```
##### Response
```json
[
    {
        "id": 401,
        "name": "project.tar.gz",
        "queueDate": "2020-02-07 15:46:29.74608+05:30",
        "uploadId": "11",
        "userId": "3",
        "groupId": "3",
        "eta": 0,
        "status": "Completed"
    }
]
```

**Note:** Your upload will not be accessible until you get a `"status": "Completed"` for the upload.

#### b. Getting the uploads
##### Request
```bash
curl -L -X GET \
  "https://fossology-server.com/api/v1/uploads" \
  -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QiLCJleHAiOjE1NTgzNzY5OTksIm5iZiI6MTU1NjEzMDYwMCwianRpIjoiTlM0eiIsInNjb3BlIjoid3JpdGUifQ.MaQ98AwRs6zlBgB8cEJJiLfzAX0MiJJqzlIgmRGEgR4"
```

##### Response
```json
[
    {
        "folderid": 1,
        "foldername": "Software Repository",
        "id": 3,
        "description": "",
        "uploadname": "folder.tar.gz",
        "uploaddate": "2019-03-26 13:50:37.283909+05:30",
        "hash": {
            "sha1": "B8672E0FBCD35B36E3596DA1BF112DCA91EBC096",
            "md5": "C63583EFF4BCEB4315228FF4881A7461",
            "sha256": "A151D8FACED15ED3035F0AAC43679B512DD66AE7885898CC2BC8A5823AAD81FB",
            "size": 773136
        }
    },
    {
        "folderid": 1,
        "foldername": "Software Repository",
        "id": 11,
        "description": "Test Upload",
        "uploadname": "FileToScan.zip",
        "uploaddate": "2019-04-25 11:36:20.903254+05:30",
        "hash": {
            "sha1": "3C6FC2603ED8FFE3A42D2D0BBFC67A498AFADC1A",
            "md5": "79E718DE81533AE7E7FC201B5DD3D757",
            "sha256": "D9ACFCBBDCAD078435586E00F73909358ED8D714D106E064DCBA52FA73E75D83",
            "size": 1065637
        }
    }
]
```

### 4. Schedule scan agents
Let's schedule all agents for the new upload.

**Note:** If you want to skip an agent, simply mark it as false in the request. You can skip entries which are not required, e.g. you do not want to use reuser, don't send the `reuse` object.

##### Request
```bash
curl -L -X POST \
  https://fossology-server.com/api/v1/jobs \
  -H 'Content-Type: application/json' \
  -H 'folderId: 1' \
  -H 'uploadId: 11' \
  -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTEyOTIyMDAsIm5iZiI6MTU1MTIwNTgwMCwianRpIjoiTmk0eiIsInNjb3BlIjoicmVhZCJ9.v2RGTsELimbwF0aaHrJvDwC6bbz19oi1VlwTGq_6f0s' \
  -d '{
   "analysis": {
      "bucket": true,
      "copyright_email_author": true,
      "ecc": true,
      "keyword": true,
      "mime": true,
      "monk": true,
      "nomos": true,
      "package": true
   },
   "decider": {
      "nomos_monk": true,
      "bulk_reused": true,
      "new_scanner": true
   },
   "reuse": {
      "reuse_upload": 9,
      "reuse_group": 3,
      "reuse_main": true,
      "reuse_enhanced": true
   }
}'
```

##### Response
(The `message` contains the job id.)
```json
{
    "code": 201,
    "message": 34,
    "type": "INFO"
}
```

#### a. Waiting for the scan to complete
Once you have scheduled the scans you want to run on your upload, you will have to wait till the scans are over before performing any action on the upload. To check the status, you can repeat the steps from point [3.a](#a-check-if-upload-is-finished).

### 5. Get upload summary
Once the scan on the upload is finished, you can get the summary about the upload which shows information like count of licenses found, concluded, main license and count of copyrights found.

**Note:** If the upload is not completed (`ununpack` and `adj2nest` have not finished), you will get `503` error with link to `/jobs` endpoint. Also, the headers `Retry-After` and `Look-at` will be populated.

##### Request
```bash
curl -L -X GET \
  "https://fossology-server.com/api/v1/uploads/11/summary" \
  -H  "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTEyOTIyMDAsIm5iZiI6MTU1MTIwNTgwMCwianRpIjoiTmk0eiIsInNjb3BlIjoicmVhZCJ9.v2RGTsELimbwF0aaHrJvDwC6bbz19oi1VlwTGq_6f0s"
```

##### Response
```json
{
    "id": 11,
    "uploadName": "FileToScan.zip",
    "mainLicense": null,
    "uniqueLicenses": 5,
    "totalLicenses": 24,
    "uniqueConcludedLicenses": 0,
    "totalConcludedLicenses": 0,
    "filesToBeCleared": 105,
    "filesCleared": 0,
    "clearingStatus": "Open",
    "copyrightCount": 36
}
```

### 6. Get upload license findings
Once the upload scanning is done, you can query the licenses found in the upload and do offline analysis on it. Based on the scanners you have choosen, you can query the findings.

**Note:** If the scans are not completed (the agents requested have not finished), you will get `503` error with link to `/jobs` endpoint. Also, the headers `Retry-After` and `Look-at` will be populated.

##### Request
```bash
curl -L -X GET \
  "https://fossology-server.com/api/v1/uploads/11/licenses?agent=nomos,monk,ojo&containers=true"\
  -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTEyOTIyMDAsIm5iZiI6MTU1MTIwNTgwMCwianRpIjoiTmk0eiIsInNjb3BlIjoicmVhZCJ9.v2RGTsELimbwF0aaHrJvDwC6bbz19oi1VlwTGq_6f0s"
```
Agents can be choosen from the list `nomos, monk, ninka, ojo, reportImport`. The containers (folders) can be skipped from the listing by setting the flag `containers` to `false`.

##### Response
```json
[
    {
        "filePath": "FileToScan.zip/README.rst",
        "findings": {
            "scanner": [
                "Python"
            ],
            "conclusion": [
                "MIT"
            ]
        }
    },
    {
        "filePath": "FileToScan.zip/pyproject.toml",
        "findings": {
            "scanner": [
                "MIT"
            ],
            "conclusion": [
                "MIT"
            ]
        }
    },
    {
        "filePath": "FileToScan.zip/poetry.lock",
        "findings": {
            "scanner": [
                "No_license_found"
            ],
            "conclusion": null
        }
    }
]
```

### 7. Generate and download report
Generating and downloading reports is a two step process. The first request will trigger the generation of the report and return a path from where the report can be downloaded later. If the user tries to hit the download resource before the report is created, the server sends a `HTTP 503` response with `Retry-After` header. Reports formats should be one of `dep5, spdx2, spdx2tv, readmeoss, unifiedreport`.

##### Request
```bash
curl -L -X GET \
  https://fossology-server.com/api/v1/report \
  -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTEyOTIyMDAsIm5iZiI6MTU1MTIwNTgwMCwianRpIjoiTmk0eiIsInNjb3BlIjoicmVhZCJ9.v2RGTsELimbwF0aaHrJvDwC6bbz19oi1VlwTGq_6f0s' \
  -H 'reportFormat: unifiedreport' \
  -H 'uploadId: 11'
```

##### Response
(The `message` contains the path from where the report can be downloaded.)
```json
{
    "code": 201,
    "message": "fossology-server.com/api/v1/report/35",
    "type": "INFO"
}
```

## Editing REST Endpoints
The code related to REST API is written in PHP and uses [Slim framework v3](https://www.slimframework.com/docs/v3/) for the routing.

The entire code resides under [src/www/ui/api](https://github.com/fossology/fossology/tree/master/src/www/ui/api) folder and is divided into following modules:
```
api/
├─ Controllers/         <-- Controllers handle all incoming requests
├─ Helper/              <-- Common helper classes/functions like RestHelper
│  ├─ UploadHelper/     <-- Helpers related to upload endpoints only
├─ Middlewares/         <-- Middlewares to do authentication and initialization of plugins
├─ Models/              <-- The output models
├─ documentation/
│  ├─ openapi.yaml      <-- The OpenAPI specification document
├─ index.php            <-- Main router using Slim framework to route calls to controllers
```

### Versioning scheme
The REST API version is stored in the `openapi.yaml` file in the semver format (major.minor.patch). It is important to update the version whenever there is a change in the REST API. This helps various clients to keep in sync with the project using the `/version` endpoint.
+ The major version will be updated only if the there are major changes in the API so that the clients needs to be rewritten.
+ The minor version needs to be updated if there are some breaking changes in the API. The patch version will go back to 0.
    - For example if the keys in JSON model are changed.
    - The datatype inside the object changed.
+ The patch version needs to be updated if the changes are backward compatible.
    - Like a new endpoint is added.
    - The JSON model includes additional data.

### Notes
- Do make sure to check if the existing Helpers and library functions provide the functionality/data you are looking for before implementing a new function. This helps reduce code redundancy.
- Try to add data validation wherever possible to keep the endpoints secure and in case there is some error, return the object of `Fossology\UI\Api\Models\Info` with appropriate `4xx` return code.