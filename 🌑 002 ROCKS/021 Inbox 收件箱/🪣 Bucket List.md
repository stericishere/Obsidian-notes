# 🏗️ Bucket 
```button
nameNew Bucket 🪣
type command
action QuickAdd: New Bucket 🪣
```
```dataview
TABLE without id file.link as 项目, type as 类别, priority as 优先级, complete as 标记完成
from "🌊 001 RIVER/014 BucketList"
where file.path != this.file.path
and complete = null
SORT type asc, file.name asc
```
