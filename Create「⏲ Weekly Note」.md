---
number headings: first-level 2, max 6, 1.1
banner: "[[Journal-2.jpg]]"
---
<< [[<% fileDate = moment(`${title}`, 'YYYY-[W]ww').subtract(1, 'w').format('YYYY-[W]ww') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-[W]ww').format('YYYY-[W]ww') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-[W]ww').add(1, 'w').format('YYYY-[W]ww') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-[W]ww').add(2, 'w').format('YYYY-[W]ww') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-[W]ww').add(3, 'w').format('YYYY-[W]ww') %>]]  >>

---


<% tp.file.move ("/🌊 001 RIVER/01 My Journal/ 03 Weekly/"+ `${title}`) %>