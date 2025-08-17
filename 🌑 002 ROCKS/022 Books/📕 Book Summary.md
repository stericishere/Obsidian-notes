
```button
name New Book 📕
type command
action QuickAdd: New Book 📕 
color default
```

> 新创建的读书笔记会出现在这里 ⬇️
```dataview
TABLE without id file.link as 书名, author as 作者
from "🌑 002 ROCKS · 泥石/022 Books 阅读"
where file.path != this.file.path
```