---
number headings: first-level 2, max 6, 1.1
banner: "[[Journal-2.jpg]]"
aliases:
---
<%*
  let title = tp.file.title
  if ((title.startsWith ("未命名")) || (title.startsWith ("Untitled"))) {
	title = tp.date.now("YYYY-MM-DD ddd");
	await tp.file.rename(`${title}`);
  }
%><< [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').format('YYYY-[W]ww') %>]] | [[<%  fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').format('YYYY-[Q]Q') %>]] | [[<%  fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').format('YYYY') %>]] >>
<< [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').add(-6, 'days').format('YYYY-[W]ww') %> | Previous Week]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').format('YYYY-[W]ww') %>]] | [[<% moment(`${title}`, 'YYYY-MM-DD ddd').endOf('week').add(6, 'days').format('YYYY-[W]ww') %> | Next Week]] >>
<< [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').subtract(1, 'd').format('YYYY-MM-DD ddd') %> | Yesterday]] | [[<%  fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').format('YYYY-MM-DD ddd') %> | Today]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').add(1, 'd').format('YYYY-MM-DD ddd') %> | Tomorrow]] >>

> [!tips]- Jorunaling
> ![](https://www.youtube.com/watch?v=KwatUSh-6xY)

![[📖 Favourite Quote.base#Random]]
## Time-Block:
#### ✅ Task that I want to finish
> [!abstract]- 📌 Due Today
> ```tasks
> not done
> (due on {{query.file.filenameWithoutExtension}}  OR (scheduled on {{query.file.filenameWithoutExtension}})
> ```
#### 📅 Upcoming Task
> [!warning]- 📅 Due This Week
> ```tasks
> not done
> (due after {{query.file.filenameWithoutExtension}} and due before in 7 days) OR (scheduled after {{query.file.filenameWithoutExtension}} and scheduled before in 7 days)
> ```
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
## 📕 Dairy
>[!abstract]- 📕 Dairy
_“You are 42% more likely to achieve your goals, simply by writing them down on a regular basis.”_
1. **What the most IMPORTANT Thing I've done today**
- [ ] #day/review 
1. **What the HIGHLIGHT of the day**?**
- [ ] #day/review 
1. **What's something I'm proud of today?**
- [ ] #day/feeling 
1. **What gives you energy today?**
- [ ] #day/feeling 
1. **What do I need to stop doing and start doing?**
- [ ] #day/insight 
1. **How can I make TMR even better?**
- [ ] #day/insight 
7. **Any decisions to be made?**
- [ ] #day/action 
1. **Top 3 priority TMR??**
- [ ] #day/plan 

---
### Notes
>[!info]- Notes Created / Modified Today
>```dataview
> table file.mtime as "Modified"
> where file.cday = this.file.day
> sort file.mtime desc
> ```

---
## 💪 Habits 
📍 [route ::] 
💼 [apply_job ::] 
🏃‍♂️ [exercise ::] 
🔖 [reading ::] 
🎓 [learning ::]
<% tp.file.move ("/🌊 001 RIVER/01 My Journal/01 Daily/"+ `${title}`) %>