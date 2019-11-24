# How to use this project

## Pre-requisites:
- Installed software
  * docker ([Install Docker](https://docs.docker.com/install/))
  * docker-compose ([Install Docker Compose](https://docs.docker.com/compose/install))
- Available ports on localhost
  * 18080
  * 18081 

## Run demo
```shell
$ git clone https://github.com/mcnew/aguacate-swagger-demo.git aguacate-swagger-demo
$ cd aguacate-swagger-demo
$ docker-compose up -d
```

You can view swagger interface visiting [http://localhost:18080](http://localhost:18080) in a browser

### Insert an element

Just expand the [GET /colores/{id}](http://localhost:18080/#/color/put_colores), to see the Example Value like this:

```json
{
  "name": "string",
  "description": "string",
  "date": "2019-11-24",
  "startTime": "string",
  "endTime": "string"
}
```

### Field description

* `name`: A string limited by the regex `^[a-zA-Z]+$`, with a minimum length of 2 and a maximum length of 10.
* `description`: Another string limited vy regex `^[a-zA-Z 0-9]+$`, with a minimum length of 5 and a maximum length of 20.
* `date`: A Date, the format for all the dates is `yyyy-mm-dd`, this date will be 
* `startTime`: 
* `endTime`: 

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

## Modify existing REST service

Objective, add a new column to `/colores` with method `GET` in the demo project

1. Visit the swagger interface `http://localhost:18081/colorante.yaml`
2. Check the current description of /colores as GET (http://localhost:18080/#/color/get_colores)
    In code 200 the example value is:
```json
{
  "id": 0,
  "name": "string",
  "date": "2019-11-24"
}
```

# License
View [license information](https://www.apache.org/licenses/LICENSE-2.0) for the software contained in this image.

As with all Docker images, these likely also contain other software which may be under other licenses (such as Bash, etc from the base distribution, along with any direct or indirect dependencies of the primary software being contained).

As for any pre-built image usage, it is the image user's responsibility to ensure that any use of this image complies with any relevant licenses for all software contained within.
