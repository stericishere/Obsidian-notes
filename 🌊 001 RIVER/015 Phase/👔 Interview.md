## Add:
```button
name New Quote 👨‍💻
type command
action QuickAdd: New Phase ✨
```
## Trick
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "👔 Interview" AND type = "trick"
SORT file.ctime DESC
```
---
## Question & Answer:
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "👔 Interview" AND type = "Q&A"
SORT file.ctime DESC
```
---
## Follow up question:
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "👔 Interview" AND type = "follow up"
SORT file.ctime DESC
```
---
## Recent:
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "👔 Interview"
SORT file.ctime DESC
```
---
