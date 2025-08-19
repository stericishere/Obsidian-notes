# ✅ Task 任务
# 🏗️ Projects 项目
```button
name New Project 👨‍💻
type command
action QuickAdd: New Project 👨‍💻
```
```dataview
TABLE without id file.link as 项目, type as 类别, priority as 优先级, complete as 标记完成
from "🌊 001 RIVER/013 Projects"
where file.path != this.file.path
and complete = null
SORT type asc, file.name asc
```
# 3 Question to ask:
> <u>What I need to do?</u>
> <u>What I shouldn't do</u>
> <u>What I need to do repeatedly?</u>
## 👍 本日完成任务
```tasks
done today
path does not include 从这里开始
group by due
sort by priority
```
## ➡️ 近期任务
```tasks
path does not include guide 使用说明
not done
due before tomorrow
path does not include 从这里开始
group by due
sort by priority
```
## 🔮 未来任务
```tasks
path does not include guide 使用说明
not done
due after today
happens this week
path does not include 从这里开始
group by due
sort by priority
```
## 💭 无限期任务
```tasks
path does not include guide 使用说明
not done
no due date

```
