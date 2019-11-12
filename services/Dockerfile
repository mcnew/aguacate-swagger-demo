FROM razzek/aguacate-swagger:latest

RUN curl -sSL -o "$CATALINA_HOME/webapps/ROOT/WEB-INF/lib/mariadb-java-client-2.5.1.jar" https://repo1.maven.org/maven2/org/mariadb/jdbc/mariadb-java-client/2.5.1/mariadb-java-client-2.5.1.jar \
 && echo "eeddfc676ca7abb49d052c904bd310e07705c7ac  $CATALINA_HOME/webapps/ROOT/WEB-INF/lib/mariadb-java-client-2.5.1.jar" | sha1sum -c

COPY database/* $DIRECTORY_DATABASE/
COPY script/* $DIRECTORY_SCRIPT/
COPY configuration/* $DIRECTORY_CONFIGURATION/
COPY swagger/* $DIRECTORY_SWAGGER/
