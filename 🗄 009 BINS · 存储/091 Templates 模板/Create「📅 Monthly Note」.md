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

---
## Goals
1. 
## 📕 Dairy
### Standout day
> [!success]- Standout day!
> ```dataview
> TASK
> from "🌊 001 RIVER/01 My Journal/01 Daily"
> where (icontains(text, "#day/review") OR icontains(text, "#day/highlight"))
> AND dateformat(date(file.day), "yyyy-'W'WW") = this.file.name
> AND length(file.aliases) > 0
> group by file.link
> sort file.name asc
> ```
### Standout
> [!abstract]- Feelings!
> ```dataview
> TASK
> from "🌊 001 RIVER/01 My Journal/01 Daily"
> where icontains(text, "#day/feeling")
> AND dateformat(date(file.day), "yyyy-'W'WW") = this.file.name
> group by file.link
> sort file.name asc
> ```
### Insight
> [!example]- Insight!
> ```dataview
> TASK
> from "🌊 001 RIVER/01 My Journal/01 Daily"
> where icontains(text, "#day/insight")
> AND dateformat(date(file.day), "yyyy-'W'WW") = this.file.name
> group by file.link
> sort file.name asc
> ```
### Action
> [!tip]- Action!
> ```dataview
> TASK
> from "🌊 001 RIVER/01 My Journal/01 Daily"
> where icontains(text, "#day/action")
> AND dateformat(date(file.day), "yyyy-'W'WW") = this.file.name
> group by file.link
> sort file.name asc
> ```
### Weekly Review
> [!success]- Action!
> ```dataview
> TASK
> from "🌊 001 RIVER/01 My Journal/02 Weekly"
> where icontains(text, "#weekly/review")
> AND dateformat(date(file.day), "yyyy-'W'WW") = this.file.name
> group by file.link
> sort file.name asc
> ```
### Monthly Review
- [ ] #monthly/review 

---
## Life of Wheel 
```chart
type: polarArea
labels: [Soul, Career, Relationships, Health, Personal Growth, Social, Finance]
id: life-balance
series:
  - title: "Life Balance"
tension: 0.2
width: 69%
labelColors: true
fill: true
beginAtZero: true
rMax: 5
legendPosition: right
```

| Area            | Score | ----------------------------------- |
| --------------- | ----- | ----------------------------------- |
| Soul            | 5     |                                     |
| Career          | 4     |                                     |
| Relationships   | 3     |                                     |
| Health          | 5     |                                     |
| Personal Growth | 4     |                                     |
| Fun             | 2     |                                     |
| Social          | 5     |                                     |
| Finance         | 3     |                                     |
^life-balance

<% tp.file.move ("🌊 001 RIVER/01 My Journal/03 Monthly/"+ `${title}`) %>