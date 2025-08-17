## Add:
```button
name New Phase 👨‍💻
type command
action QuickAdd: New Phase ✨
```
## Email:
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "💼 Professional" AND type = "email"
SORT file.ctime DESC
```
---
## Meeting:
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "💼 Professional" AND type = "meeting"
SORT file.ctime DESC
```
---
## Following Up:
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "💼 Professional" AND type = "follow up"
SORT file.ctime DESC
```
---
## Recent Phases
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "💼 Professional"
SORT file.ctime DESC
```
---
