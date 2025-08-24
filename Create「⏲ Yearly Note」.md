---
number headings: first-level 2, max 6, 1.1
banner: "[[Journal-2.jpg]]"
---
<< [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').subtract(1, 'd').format('YYYY') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').format('YYYY') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').add(1, 'Y').format('YYYY') %>]] >>



<% tp.file.move ("/🌊 001 RIVER/01 My Journal/ 05 Yearly/"+ `${title}`) %>