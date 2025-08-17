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
path does not include 从这里开始
group by due
sort by priority
```
## 💭 无限期任务
```tasks
path does not include guide 使用说明
not done
no due date
path does not include 从这里开始
```
>[!help]- 使用说明
>> 任务管理基于 Tasks 插件。[点击这里了解更多](https://github.com/obsidian-tasks-group/obsidian-tasks)
>
>你可以通过 `- [ ]` 字符在生命OS的任何位置创建任务，所有任务将被聚合至这个页面
>
> 在任务文字上右键选择创建/编辑任务，即可编辑具体信息：
> ![[Pasted image 20230314142242.png|300]]
> ![[Pasted image 20230314142548.png|300]]

>[!help]- 使用说明
>> 项目管理基于 Dataview 插件。[点击这里了解更多](https://github.com/blacksmithgu/obsidian-dataview)
>
>任务的类别、优先级和完成度需要点进项目后在笔记的顶部编辑。
>
>当一个项目被标记完成后 （在 complete 后面加上任何内容），会自动被隐藏。
> ![[Pasted image 20230405110646.png|300]]