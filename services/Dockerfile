FROM razzek/aguacate-swagger:0.1.14

RUN curl -sSL -o "$CATALINA_HOME/webapps/ROOT/WEB-INF/lib/mariadb-java-client-2.6.0.jar" https://repo1.maven.org/maven2/org/mariadb/jdbc/mariadb-java-client/2.6.0/mariadb-java-client-2.6.0.jar \
 && echo "7ada3fc7b30ae8fa4616f47ef6d505bdda933605  $CATALINA_HOME/webapps/ROOT/WEB-INF/lib/mariadb-java-client-2.6.0.jar" | sha1sum -c
