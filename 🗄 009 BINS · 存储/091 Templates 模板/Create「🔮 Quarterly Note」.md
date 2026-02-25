---
number headings: first-level 2, max 6, 1.1
banner: "[[Journal-2.jpg]]"
---
<%*
  let title = tp.file.title
  if ((title.startsWith ("未命名")) || (title.startsWith ("Untitled"))) {
	title = tp.date.now("YYYY-MM");
	await tp.file.rename(`${title}`);
  }
%><< [[<% moment(tp.file.title, 'YYYY-MM').startOf('month').add(-1, 'days').format('YYYY-MM') %> | Previous Month]] | [[<% moment(tp.file.title, 'YYYY-MM').format('YYYY-MM') %>]] | [[<% moment(tp.file.title, 'YYYY-MM').endOf('month').add(1, 'days').format('YYYY-MM') %> | Next Month]] >>
<< [[<% moment(tp.file.title, 'YYYY-MM').format('YYYY-MM') %>]] | [[<% moment(tp.file.title, 'YYYY-[W]ww').format('YYYY-[Q]Q') %>]] | [[<% moment(tp.file.title, 'YYYY-MM').format('YYYY') %>]] >>






<% tp.file.move ("/🌊 001 RIVER/01 My Journal/ 04 Quarterly/"+ `${title}`) %>