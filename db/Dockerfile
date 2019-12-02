FROM mariadb:10.4

COPY ddl.sql /docker-entrypoint-initdb.d/01-ddl.sql
COPY dml.sql /docker-entrypoint-initdb.d/02-dml.sql
