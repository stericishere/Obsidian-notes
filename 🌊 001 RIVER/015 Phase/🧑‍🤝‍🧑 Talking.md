## Add
```button
name New Quote 👨‍💻
type command
action QuickAdd: New Phase ✨
```
## Framework:
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "🧑‍🤝‍🧑 Talking" AND type = "framework"
SORT file.ctime DESC
```
---
## Question:
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "🧑‍🤝‍🧑 Talking" AND type = "question"
SORT file.ctime DESC
```
---
## Quote:
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "🧑‍🤝‍🧑 Talking" AND type = "quote"
SORT file.ctime DESC
```
---
## Recent Phases
```dataview
TABLE
FROM "🌊 001 RIVER/015 Phase/00 Storage"
WHERE category = "🧑‍🤝‍🧑 Friends"
SORT file.ctime DESC
```
---
