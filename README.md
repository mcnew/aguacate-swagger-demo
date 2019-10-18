# How to use this project

## Pre-requisites:
- Install docker ([Install Docker](https://docs.docker.com/install/))
- Install docker-compose ([Install Docker Compose](https://docs.docker.com/compose/install))
- Have ports 18080 and 18081 available on localhost

## Run demo
```shell
$ git clone https://github.com/mcnew/aguacate-swagger-demo.git aguacate-swagger-demo
$ cd aguacate-swagger-demo
$ docker-compose up -d
```

You can view swagger interface visiting http://localhost:18080 in a browser

# How it works
The docker-compose file declares 3 services

- db: is a [mariadb](https://hub.docker.com/_/mariadb) instance, with justo one table (color) and the following columns:
  * id
  * name
  * description
  * date
  * startTime
  * endTime
- swagger: is a [swagger-ui](https://hub.docker.com/r/swaggerapi/swagger-ui/) instance
- aguacate: an aguacate-swagger instance

# License
View [license information](https://www.apache.org/licenses/LICENSE-2.0) for the software contained in this image.

As with all Docker images, these likely also contain other software which may be under other licenses (such as Bash, etc from the base distribution, along with any direct or indirect dependencies of the primary software being contained).

As for any pre-built image usage, it is the image user's responsibility to ensure that any use of this image complies with any relevant licenses for all software contained within.
