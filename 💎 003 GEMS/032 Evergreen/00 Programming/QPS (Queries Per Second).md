---
banner: "[[Notes-2.jpg]]"
creation date: 2025-07-25 00:06
aliases: QPS (Queries Per Second)
tag: 👨‍💻
type: 
---
# QPS (Queries Per Second)
### Finding average QPS:
- peak QPS = 3 or 5* average QPS
- ex.
	- Our website have 100M clients
	- Each clients visit our website 10 time a day
	- There're 860,000 seconds in a day
	- QPS = 100M * 10 / 860,000
	- QPS = 10k
	- Peak QPS: 50k (5 x average QPS)
- <u>A Single MySQL can afford</u>
	- <u>Read</u> 
		- 1k-5k QPS
	- <u>Write</u> 
		- < 1k QPS
