## Add:
```button
name New Phase 👨‍💻
type command
action QuickAdd: New Phase ✨
```
## Pick Up:
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "🍠 Date" AND type = "pickup"
SORT file.ctime DESC
```
---
## Call:
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "🍠 Date" AND type = "call"
SORT file.ctime DESC
```
---
## Texting:
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "🍠 Date" AND type = "texting"
SORT file.ctime DESC
```
---
## Date:
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "🍠 Date" AND type = "date"
SORT file.ctime DESC
```
---
## Recent:
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "🍠 Date"
SORT file.ctime DESC
```
---
