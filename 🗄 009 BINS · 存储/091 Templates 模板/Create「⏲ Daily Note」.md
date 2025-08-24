---
number headings: first-level 2, max 6, 1.1
banner: "[[Journal-2.jpg]]"
---
<%*
  let title = tp.file.title
  if ((title.startsWith ("未命名")) || (title.startsWith ("Untitled"))) {
	title = tp.date.now("YYYY-MM-DD ddd");
	await tp.file.rename(`${title}`);
  }
%><< [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').subtract(1, 'd').format('YYYY-MM-DD ddd') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').add(1, 'd').format('YYYY-MM-DD ddd') %>]] >>

<< [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').subtract(1, 'W').format('YYYY-[W]ww') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').format('YYYY-[W]ww') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').add(1, 'W').format('YYYY-[W]ww') %>]]  >>

<< [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').subtract(1, 'M').format('YYYY-MM') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').format('YYYY-MM') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').add(1, 'M').format('YYYY-MM') %>]] >>

<< [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').subtract(4, 'M').format('YYYY-[Q]Q') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').format('YYYY-[Q]Q') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').add(4, 'M').format('YYYY-[Q]Q') %>]] >>

![](https://www.youtube.com/watch?v=KwatUSh-6xY)

![[📖 Favourite Quote.base#Random]]
## Time-Block:
### ✅ Tasks that I want to Finish today
```tasks
due after {{query.file.filenameWithoutExtension}}
not done
```
### Upcoming Tasks
```tasks
(due after {{query.file.filenameWithoutExtension}} AND (due before in 7 days)
not done
```
### 🌅 Morning
<span style="background:#fff88f">#Routine</span>
- [ ] 10:30 — First Alarm 
---
<span style="background:#fff88f">#Routine</span>
- [ ] 10:40 — Final Wake 
---
<span style="background:#fff88f">#Routine</span>
- [ ] 10:40 — Push-ups & Shower 
---
<span style="background:#fff88f">#Routine</span>
- [ ] 11:00 — Mediation 
---
<span style="background:#fff88f">#Routine</span>
- [ ] 11:10 — Coffee ##routine 
---
<span style="background:#d2cbff">#Resume</span>
- [ ] 11:10 — Apply for a job
---
📍 [route ::]
### 🌞 Midday
<span style="background:#affad1">#Topic</span>
- [ ] 12:00-14:00 — 
---
<span style="background:#affad1">#Topic</span>
- [ ] 14:30 (2pm) — 
---
<span style="background:#affad1">#Topic</span>
- [ ] 15:30 - 16:30 —
---
<span style="background:#affad1">#Topic</span>
- [ ] 17:00 - 18:00 — 
---
### 🌙 Evening
<span style="background:#d2cbff">#Topic</span>
- [ ] 19:00 (7pm) —  23:00 (11pm)
---
<span style="background:#d2cbff">#Topic</span>
- [ ] 19:30 —  
---
<span style="background:#d2cbff">#Topic</span>
- [ ] 20:30 —  
---
<span style="background:#fff88f">#Routine</span>
- [ ] 23:00 (11pm) —  Journal
---
### Upcoming Tasks
```tasks
(due after {{query.file.filenameWithoutExtension}} AND (due before in 7 days)
not done
```

## 📕 Dairy
_“You are 42% more likely to achieve your goals, simply by writing them down on a regular basis.”_

1. **What the most IMPORTANT Thing I've done today**
	> #day/review
2. **What the HIGHLIGHT of the day and Im grateful for or **?**
	> #day/highlight
3. **What's something I'm proud of today?**
	> #day/affirmation
4. **What do I need to stop doing and start doing?**
	> #day/insight
5. **How can I make TMR even better?**
	> #day/action
6. **Top 3 priority TMR??**
	> #day/plan
---
## Notes Created / Modified Today
```dataview
table file.mtime as "Modified"
where file.cday = this.file.day
sort file.mtime desc
```
---
## 💪 Habits 
📍 [route ::] 
💼 [apply_job ::] 
🏃‍♂️ [exercise ::] 
🔖 [reading ::] 
🎓 [learning ::]
<% tp.file.move ("/🌊 001 RIVER/01 My Journal/ 01 Daily/"+ `${title}`) %>