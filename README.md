# How to use this project

## WARNING
If you cloned this repository before, build the images again
```shell
$ docker-compuse build
```

## Pre-requisites:
- Software
  * docker ([Install Docker](https://docs.docker.com/install/))
  * docker-compose ([Install Docker Compose](https://docs.docker.com/compose/install))
- Ports at localhost
  * 18080
  * 18081

## Stop-Remove demo
```shell
$ docker-compose down -v
```

## Run demo
```shell
$ git clone https://github.com/mcnew/aguacate-swagger-demo.git aguacate-swagger-demo
$ cd aguacate-swagger-demo
$ docker-compose build
$ docker-compose up -d
```

You can view swagger interface visiting [http://localhost:18080](http://localhost:18080) in a browser

### Field description

* `name`: A string with a minimum length of 2, maximum length 10 and that must comply with the regular expression `^[a-zA-Z]+$`
* `description`: A string with a minimum length of 5, maximum length 20 and that must comply with the regular expression `^[a-zA-Z 0-9]+$`
* `date`: A date with a minimum of tomorrow (see below 1)
* `startTime`: The start time, should be between `08:00` and `20:59` (see below 2)
* `endTime`: The end time, should be between `08:00` and `20:59` (see below 2)
* `active`: Indicative flag of active elements

1. The format of a date field is `dd/mm/yyyyTZ` (see below 3), for example __2020-12-31-05:00__.
2. The format of a time field is `hh:mmTZ` (see below 3), for example __10:25-05:00__.
3. `TZ`: Is time zone, for example `+00:00`, `+08:00`, `-06:00` or `Z`.

### Business Rules

* The `startTime` will be minor than `endTime`
* The `description` must have at least one occurrence of the value of the `name` field. For example, if the name has the value "alpha", the description can be "__alpha__ is a letter".
* You cannot update the fields of an inactive record, except for the `active` field
 
### Insert an element

Just expand the [PUT /colores](http://localhost:18080/#/color/put_colores), to see the Example Value like this:

```json
{
  "name": "string",
  "description": "string",
  "date": "2019-11-24",
  "startTime": "string",
  "endTime": "string"
}
```

Click on "Try it out" button, and replace the body with the following data

```json
{
  "name": "alpha",
  "description": "alpha is a letter",
  "date": "2025-11-24-06:00",
  "startTime": "13:00-06:00",
  "endTime": "14:00-06:00"
}
```

And click on execute. The server status code is 201

### List all elements

Expand the [GET /colores](http://localhost:18080/#/color/get_colores), click on "Try it out", click on execute, to get data like this

```json
[
  {
    "date": "2025-11-24Z",
    "name": "alpha",
    "active": true,
    "id": "1"
  }
]
```

And click on execute. The server status code is 200

### Get data from one element

Expand the [GET /colores/{id}](http://localhost:18080/#/color/get_colores__id_), click on "Try it out".

Enter the number 1 in the box of parameter `id` and click on execute.

```json
{
  "date": "2025-11-24",
  "name": "alpha",
  "description": "alpha is a letter",
  "active": true,
  "startTime": "19:00Z",
  "id": 2,
  "endTime": "20:00Z"
}
```

And click on execute. The server status code is 200

### Update one element.

Expand the [PATCH /colores/{id}](http://localhost:18080/#/color/patch_colores__id_), click on "Try it out".

Enter the number 1 in the box of parameter id and in the body of request

```json
{
  "date": "2025-12-24-06:00"
}
```

And click on execute. The server status code is 200

### How it works
In docker-compose.yml 3 services are declared

- db: That is a [mariadb](https://hub.docker.com/_/mariadb) instance, with just one table on the `cenicienta` schema:
  ```sql
  CREATE TABLE color (
    id int(11) NOT NULL AUTO_INCREMENT,
    name varchar(50),
    description varchar(100),
    date date,
    startTime time,
    endTime time,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    PRIMARY KEY (id)
  );
  ```
  
- swagger: That is a [swagger-ui](https://hub.docker.com/r/swaggerapi/swagger-ui/) instance, pointing to `http://localhost:18081/colorante.yaml`
- aguacate: An aguacate-swagger instance, with maria jdbc driver jar (mariadb-java-client) and that uses 4 files

  * services/configuration/colores.json

    This file contains the definition of the colores `REST` endpoint
  * services/database/laser.json

    *datasource* definition, references to `db` service via jdbc (`jdbc:mariadb://db/cenicienta`)
  * services/script/colores1.js

    Definition of unamed object with a function `validation1`, referenced in colores.json.
  * services/swagger/colorante.json

    Swagger auxiliar file.

## Modify existing REST service without restart

[video](https://www.youtube.com/watch?v=0BcuYHIGxg8)

Objective, add a new column (description) to `/colores` with method `GET` in the demo project

1. Visit the swagger interface [http://localhost:18080/](http://localhost:18080/)
2. Check the current description of [GET /colores](http://localhost:18080/#/color/get_colores)
    In code 200 the example value is:
```json
{
  "id": 0,
  "name": "string",
  "date": "2020-01-30",
  "active": true
}
```
3. Modify the configuration file ([services/configuration/colores.json](https://github.com/mcnew/aguacate-swagger-demo/blob/master/services/configuration/colores.json)) applying the provided patch file [colores-description.patch](https://github.com/mcnew/aguacate-swagger-demo/blob/master/colores-description.patch).

For example using git cli
```shell
$ git apply colores-description.patch
```
Or using [TortoiseGit](https://tortoisegit.org/docs/tortoisegit/tgit-dug-patch.html)

4. The internal definition will be update automatically
5. Refresh the swagger-ui page, using the `Explore` in the browser page.
6. See the modified version of [GET /colores](http://localhost:18080/#/color/get_colores), now with the new column
```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "date": "2020-01-30",
  "active": true
}
```
7. Execute [GET /colores](http://localhost:18080/#/color/get_colores) and see the result.

## Add new REST service without restart

Objetive: Deploy a new REST service using the path [/ideal](http://localhost:18081/ideal)

Prerequisites: Check if the service is already deployed, visiting the path [/ideal](http://localhost:18081/ideal) and getting a 404 error.

1. Copy the script file new/script/perfect.js to services/script in the aguacate-swagger-demo
```shell
    $ ### Assuming to be in the "aguacate-swagger-demo" directory & using UNIX like
    $ cp new/script/perfect.js services/script/
```
2. Copy the file new/configuration/ideal.json to services/configuration in the aguacate-swagger-demo.
```shell
    $ ### Assuming to be in the "aguacate-swagger-demo" directory & using UNIX like
    $ cp new/configuration/ideal.json services/configuration/
```
3. Browse again [/ideal](http://localhost:18081/ideal) & you see something like
```json
[{"code":"89ed1","id":"1","value":"Lorem ipsum dolor"},{"code":"29ef50","id":"2","value":"Curabitur pretium"}]
```
Explanation:

    This service implements a CRUD interface with the table `cenicienta`.`perfect`. This table has already data (see [db/ddl.sql](db/ddl.sql) & [db/dml.sql](db/dml.sql), you can access this data using the cli in the db service, declared in the docker-compose.yml file.

# License
View [license information](https://www.apache.org/licenses/LICENSE-2.0) for the software contained in this image.

As with all Docker images, these likely also contain other software which may be under other licenses (such as Bash, etc from the base distribution, along with any direct or indirect dependencies of the primary software being contained).

As for any pre-built image usage, it is the image user's responsibility to ensure that any use of this image complies with any relevant licenses for all software contained within.
