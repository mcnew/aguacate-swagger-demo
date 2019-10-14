FROM razzek/aguacate-swagger:latest

RUN curl -sSL -o "$CATALINA_HOME/webapps/ROOT/WEB-INF/lib/mariadb-java-client-2.5.0.jar" https://repo1.maven.org/maven2/org/mariadb/jdbc/mariadb-java-client/2.5.0/mariadb-java-client-2.5.0.jar \
 && echo "819742c86ddcd66c3e0263ee16a86cdc896edfc1  $CATALINA_HOME/webapps/ROOT/WEB-INF/lib/mariadb-java-client-2.5.0.jar" | sha1sum -c

COPY web.xml $CATALINA_HOME/webapps/ROOT/WEB-INF/

COPY database/* $DIRECTORY_DATABASE/
COPY script/* $DIRECTORY_SCRIPT/
COPY configuration/* $DIRECTORY_CONFIGURATION/
COPY swagger/* $DIRECTORY_SWAGGER/
