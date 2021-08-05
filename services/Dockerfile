FROM maven:3.6-openjdk-8-slim AS builder

ENV AGT_HOME /var/lib/app/

WORKDIR $AGT_HOME

COPY pom.xml $AGT_HOME

RUN cd "$AGT_HOME" \
 &&  mvn package

FROM tomcat:9-jdk8

ENV AGT_HOME /var/lib/app/

COPY --from=builder "$AGT_HOME/target/ROOT.war" "$CATALINA_HOME/webapps/"
