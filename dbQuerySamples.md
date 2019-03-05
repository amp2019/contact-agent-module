# Sample Queries and Results
## 1. Get a listing address and agent
### PostgreSQL
Query
`# select * from homes,agents where homes.id=10000000 AND agents.id=homes.agent;`

Results
```
heyagent=# select * from homes,agents where homes.id=10000000 AND agents.id=homes.agent;
    id    |       address        | agent |  id  |      name       | premier |        company         | reviews | recentsales |     phone      |                               imgurl                               
----------+----------------------+-------+------+-----------------+---------+------------------------+---------+-------------+----------------+--------------------------------------------------------------------
 10000000 | 991 Cecilia Crossing |  7526 | 7526 | Alexanne Conroy | f       | Auer, Abshire and Bode |      11 |          34 | (891) 481-8599 | https://s3.amazonaws.com/uifaces/faces/twitter/chrisstumph/128.jpg
(1 row)
```

### MongoDB
Query
`> db.tenmilli.find({"_id":"10000000"})`

Results
```
> db.tenmilli.find({"_id":"10000000"})
{ "_id" : "10000000", "address" : "878 Gabriella Groves", "agent" : { "agentname" : "Ivy Dicki", "premier" : "false", "company" : "Carroll - Walker", "reviews" : "64", "recentSales" : "11", "phone" : "(345) 658-4481", "imgurl" : "https://s3.amazonaws.com/uifaces/faces/twitter/carlosgavina/128.jpg" }, "messages" : [ { "username" : "Victoria DuBuque", "phone" : "(596) 603-7322", "email" : "Reynold_Grant38@yahoo.com", "note" : "microdosing beard enamel pin bespoke jianbing pok pok tofu next" }, { "username" : "Ms. Damian Grant", "phone" : "(524) 644-9018", "email" : "Jayden_Hagenes@yahoo.com", "note" : "kitsch health goth +1 bicycle rights tumeric farm-to-table hell of" } ] }
> 
```

## 2. Post a request to talk with an agent about a listing
### PostgreSQL
Query
`# insert into messages (home,name,phone,email,note) values (10,'Raaandy','(444) 888-1111','a.v@g.c','hipsum');`

Results
```
heyagent=# insert into messages (id,home,name,phone,email,note) values (20000001,10,'Raaandy','(444) 888-1111','a.v@g.c','hipsum');
INSERT 0 1
heyagent=# select * from messages where home=10;
    id    | home |       name        |     phone      |      email       |                                           note                                           |          created           
----------+------+-------------------+----------------+------------------+------------------------------------------------------------------------------------------+----------------------------
   802272 |   10 | Deondre Pagac Sr. | (324) 046-5233 | Tatum2@yahoo.com | batch dreamcatcher gastropub slow-carb franzen activated charcoal neutra squid pitchfork | 2018-06-08 04:25:02
 10000003 |   10 | Raaandy           | (444) 888-1111 | a.v@g.c          | hipsum                                                                                   | 2019-03-03 17:10:24.554777
(2 rows)
```

### MongoDB
Query
`> db.tenmilli.update({"_id":"10000000"},{$addToSet:{"messages":{"username":"Andy","phone":"(444) 888-1111","email":"a.v@g.c","note":"helloooooooo"}}})`

Results
```
> db.tenmilli.update({"_id":"10000000"},{$addToSet:{"messages":{"username":"Andy","phone":"(444) 888-1111","email":"a.v@g.c","note":"helloooooooo"}}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.tenmilli.find({"_id":"10000000"})
{ "_id" : "10000000", "address" : "878 Gabriella Groves", "agent" : { "agentname" : "Ivy Dicki", "premier" : "false", "company" : "Carroll - Walker", "reviews" : "64", "recentSales" : "11", "phone" : "(345) 658-4481", "imgurl" : "https://s3.amazonaws.com/uifaces/faces/twitter/carlosgavina/128.jpg" }, "messages" : [ { "username" : "Victoria DuBuque", "phone" : "(596) 603-7322", "email" : "Reynold_Grant38@yahoo.com", "note" : "microdosing beard enamel pin bespoke jianbing pok pok tofu next" }, { "username" : "Ms. Damian Grant", "phone" : "(524) 644-9018", "email" : "Jayden_Hagenes@yahoo.com", "note" : "kitsch health goth +1 bicycle rights tumeric farm-to-table hell of" }, { "username" : "Andy", "phone" : "(444) 888-1111", "email" : "a.v@g.c", "note" : "helloooooooo" } ] }
> 
```

## 3. Update the agent for a home
### PostgreSQL
Query
`# update homes set agent=2 where id=1;`

Results
```
heyagent=# update homes set agent=2 where id=2;
UPDATE 1
heyagent=# select * from homes where id=2;
 id |       address       | agent 
----+---------------------+-------
  2 | 2801 DuBuque Valley |     2
(1 row)
```

### MongoDB
Query
`> db.tenmilli.update({"_id":"9888888"},{$set:{"agent":{"agentname":"Raaaandy","premier":"true","company":"Buckridge LLC", "reviews":"8","recentSales":"1","phone":"(900) 187-0923", "imgurl":"https://s3.amazonaws.com/uifaces/faces/twitter/ponchomendivil/128.jpg"}}})`

Results
```
> db.tenmilli.update({"_id":"9988888"},{$set:{"agent":{"agentname":"Raaaandy","premier":"true","company":"Buckridge LLC", "reviews":"8","recentSales":"1","phone":"(900) 187-0923", "imgurl":"https://s3.amazonaws.com/uifaces/faces/twitter/ponchomendivil/128.jpg"}}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.tenmilli.find({"_id":"9988888"})
{ "_id" : "9988888", "address" : "945 Lenore Estate", "agent" : { "agentname" : "Raaaandy", "premier" : "true", "company" : "Buckridge LLC", "reviews" : "8", "recentSales" : "1", "phone" : "(900) 187-0923", "imgurl" : "https://s3.amazonaws.com/uifaces/faces/twitter/ponchomendivil/128.jpg" }, "messages" : [ { "username" : "Mrs. Orrin Kshlerin", "phone" : "(061) 393-9176", "email" : "Elta55@hotmail.com", "note" : "enamel pin bespoke jianbing pok pok tofu next level keffiyeh" }, { "username" : "Tito Barton", "phone" : "(152) 015-5336", "email" : "Koby_Goodwin70@gmail.com", "note" : "braid keffiyeh four dollar toast stumptown neutra hashtag chambray kogi" } ] }
```

## 4. Delete a home
### PostgreSQL
Query
`# delete from homes where id=4;`

Results
```
heyagent=# delete from homes where id=4;
DELETE 1
heyagent=# select * from homes where id=4;
 id | address | agent 
----+---------+-------
(0 rows)
```

### MongoDB
Query
`> db.tenmilli.remove({"_id":"9888887"})`

Results
```
> db.tenmilli.remove({"_id":"9888886"})
WriteResult({ "nRemoved" : 1 })
> db.tenmilli.find({"_id":"9888886"})
> 
```