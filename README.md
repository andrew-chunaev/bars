# Тестовое задание

В качестве БД использовал postgresql

Чтобы создать БД на Ubuntu:

```
sudo -u postgres psql
postgres=# create database bars;
postgres=# create user bars with encrypted password 'bars';
postgres=# grant all privileges on database bars to bars;
```
dump.sql - дамп используемой БД для работы приложения.

Само приложение в папке bars-backend,
```
node start
```
для его запуска.

Примеры запросов:

```
post 127.0.0.1:3000/register {"name":"user1","password":"12345678"}

get 127.0.0.1:3000/logout

post 127.0.0.1:3000/login {"name":"user1","password":"12345678"}

post 127.0.0.1:3000/doc {"name":"test", "memo":"doc for testing", "id":1, "date":"2019-11-29"}

get 127.0.0.1:3000/doc/1

post 127.0.0.1:3000/doc {"name":"test2", "memo":"another doc for testing", "id":2, "date":"2019-11-29"}

put 127.0.0.1:3000/doc/2 {"name":"testdoc"}

delete 127.0.0.1:3000/doc/1

get 127.0.0.1:3000/doc/currentUser
```