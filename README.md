# How to use this image

Pre-requisites:
- Install docker-compose ([official](https://docs.docker.com/compose/install))
- Have ports 18080 and 18081 available on localhost

```shell
$ git clone https://github.com/mcnew/aguacate-swagger-demo.git aguacate-swagger-demo
$ cd aguacate-swagger-demo
$ docker-compose run -d
```

You can test it by visiting http://localhost:18080 in a browser

# License
View [license information](https://www.apache.org/licenses/LICENSE-2.0) for the software contained in this image.

As with all Docker images, these likely also contain other software which may be under other licenses (such as Bash, etc from the base distribution, along with any direct or indirect dependencies of the primary software being contained).

As for any pre-built image usage, it is the image user's responsibility to ensure that any use of this image complies with any relevant licenses for all software contained within.
