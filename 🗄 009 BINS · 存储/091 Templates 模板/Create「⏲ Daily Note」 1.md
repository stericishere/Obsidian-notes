<%*
  let title = tp.file.title
  if ((title.startsWith ("未命名")) || (title.startsWith ("Untitled"))) {
	title = tp.date.now("YYYY-MM-DD ddd");
	await tp.file.rename(`${title}`);
  }
  tR += "---"
%>
banner: "[[Journal-2.jpg]]"
banner_x: 0.48709
---

<< [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').subtract(1, 'd').format('YYYY-MM-DD ddd') %>]] | [[<% fileDate = moment(`${title}`, 'YYYY-MM-DD ddd').add(1, 'd').format('YYYY-MM-DD ddd') %>]] >>


# <%* tR += `${title}` %>

## 💪 Habits 习惯
📍 [route ::] 
💼 [apply_job ::] 
🏃‍♂️ [exercise ::] 
🔖 [reading ::] 
🎓 [learning ::]
##  Day Planner
### Main Tasks that I want to Finish today:
```tasks
due today
not done
```

### 🌅 Morning
- [ ] 09:30 First Alarm #Routine 

- [ ] 09:40 Final Wake #Routine

- [ ] 09:40 Push-ups & Shower #Routine

- [ ] 10:00 Mediation #Routine

- [ ] 10:10 Coffee #routine 
📍 [route ::]
### 🌞 Midday
- [ ] 11:00 —  
- [ ] 11:30 —  
- [ ] 12:00 —  
- [ ] 12:30 —  
- [ ] 13:00 (1pm) —  
- [ ] 13:30 —  
- [ ] 14:00 (2pm) —    
- [ ] 14:30 —  

### 🌆 Afternoon
- [ ] 15:00 (3pm) —  
- [ ] 15:30 —  
- [ ] 16:00 (4pm) —  
- [ ] 16:30 —  
- [ ] 17:00 (5pm) —  
- [ ] 17:30 —  
- [ ] 18:00 (6pm) —  
- [ ] 18:30 —  

### 🌙 Evening
- [ ] 19:00 (7pm) —  
- [ ] 19:30 —  
- [ ] 20:00 (8pm) —  
- [ ] 20:30 —  
- [ ] 21:00 (9pm) —  
- [ ] 21:30 —  
- [ ] 22:00 (10pm) —  
- [ ] 22:30 —  
- [ ] 23:00 (11pm) —  

## 📕 Dairy 日记

1. **What the most IMPORTANT Thing I've done today**
	>
2. **What did I learn today? How can I apply this knowledge in the future?**
	>
3. **What do I need to stop doing and start doing?**
	>
4. **What could I have done differently today?**
	>
5. **How can I make tomorrow even better?**

##  Notes Created / Modified Today
```dataview
table file.link as "New Notes", file.mtime as "Created"
from ""
where file.day = date(today)
sort file.mtime desc
```

<% tp.file.move ("/🌊 001 RIVER/011 Daily/"+ `${title}`) %>