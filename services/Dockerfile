FROM maven:3.6-openjdk-8-slim AS builder

ENV AGT_HOME /var/lib/app/

WORKDIR $AGT_HOME

COPY pom.xml $AGT_HOME

RUN cd "$AGT_HOME" \
 &&  mvn package

FROM tomcat:9-jdk8

ENV AGT_HOME /var/lib/app/ \
    DIRECTORY_DATABASE=/var/lib/aguacate/database \
    DIRECTORY_SCRIPT=/var/lib/aguacate/script \
    DIRECTORY_CONNECTOR=/var/lib/aguacate/connector \
    DIRECTORY_ENVIRONMENT=/var/lib/aguacate/environment \
    DIRECTORY_CONFIGURATION=/var/lib/aguacate/configuration \
    DIRECTORY_SWAGGER=/var/lib/aguacate/swagger

RUN mkdir -p "$DIRECTORY_DATABASE" "$DIRECTORY_SCRIPT" "DIRECTORY_CONNECTOR" "DIRECTORY_ENVIRONMENT" "$DIRECTORY_CONFIGURATION" "$DIRECTORY_SWAGGER" \
 && rm -rf $CATALINA_HOME/webapps/*

COPY --from=builder "$AGT_HOME/target/ROOT.war" "$CATALINA_HOME/webapps/"
