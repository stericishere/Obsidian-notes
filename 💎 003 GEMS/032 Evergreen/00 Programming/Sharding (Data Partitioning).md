---
banner: "[[Notes-2.jpg]]"
creation date: 2025-07-25 00:14
aliases:
  - Sharding
tags:
  - 👨‍💻
type:
---
# Sharding
![[image.png|600]]
<u>Turn master into DB1, DB2</u>

## Method of Sharding:
<u>Example:</u>  <u>A social media post(Id, User_id)</u>
- Id% N -> 0, ..., N-1
	-  when we search for a specific user's post, 
	- we need to go throu all the data shard, (db1, db2...)
		-  This is called <u>Scatter and Gather</u>
		- Scatter => sending a query to all the shard
		- Gather => collecting the results from all shards
- User % N -> 0, ..., N-1
	- Some user might have larger query
	- Make a larger load for a specific database
- 
## Advantage:
> - 

## Disadvantage:
> - 

## Extended explanation:
> - l


