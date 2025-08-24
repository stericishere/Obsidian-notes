---
number headings: first-level 2, max 6, 1.1
banner: "[[Journal-2.jpg]]"
---
<< [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').subtract(4, 'M').format('YYYY-[Q]Q') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').format('YYYY-[Q]Q') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').add(4, 'M').format('YYYY-[Q]Q') %>]]  >>


<% tp.file.move ("/🌊 001 RIVER/01 My Journal/ 04 Quarterly/"+ `${title}`) %>