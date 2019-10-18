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

You can view swagger interface visiting http://localhost:18080 in a browser

# How it works
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
- aguacate: An aguacate-swagger instance uses 4 files

  * services/configuration/colores.json
  * services/database/laser.json
  * services/script/colores1.js
  * services/swagger/colorante.json

# License
View [license information](https://www.apache.org/licenses/LICENSE-2.0) for the software contained in this image.

As with all Docker images, these likely also contain other software which may be under other licenses (such as Bash, etc from the base distribution, along with any direct or indirect dependencies of the primary software being contained).

As for any pre-built image usage, it is the image user's responsibility to ensure that any use of this image complies with any relevant licenses for all software contained within.
