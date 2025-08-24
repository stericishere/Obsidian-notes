---
number headings: first-level 2, max 6, 1.1
banner: "[[Journal-2.jpg]]"
---
<< [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').subtract(1, 'M').format('YYYY-MM') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').format('YYYY-MM') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').add(1, 'M').format('YYYY-MM') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').add(2, 'M').format('YYYY-MM') %>]]| [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').add(3, 'M').format('YYYY-MM') %>]]>>

---

## Task this week
```tasks
(due after {{moment(query.file.filenameWithoutExtension, "gggg-[W]ww").format("YYYY-MM-DD")}} AND (due before in 7 days)
not done
```


## Goals:


## Task:

<% tp.file.move ("/🌊 001 RIVER/01 My Journal/ 03 Weekly/"+ `${title}`) %>