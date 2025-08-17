
```button
name New Heallth Note 🩺
type command
action QuickAdd: New Heallth Note 🩺
```

> 新创建的健康习惯会出现在这里 ⬇️

### 🌅 起床
```dataview
TABLE without id file.link as 健康主题, 起床 as 起床习惯
from "🔨 004 TOOLS · 工具/041 Health 健康"
WHERE 起床 != null
```
### 🍴 餐后
```dataview
TABLE without id file.link as 健康主题, 餐后 as "餐后习惯"
from "🔨 004 TOOLS · 工具/041 Health 健康"
WHERE 餐后 != null
```
### 🌞 全天
```dataview
TABLE without id file.link as 健康主题, 全天 as "全天习惯"
from "🔨 004 TOOLS · 工具/041 Health 健康"
WHERE 全天 != null
```
### 🛌 睡前

```dataview
TABLE without id file.link as 健康主题, 睡前 as "睡前习惯"
from "🔨 004 TOOLS · 工具/041 Health 健康"
WHERE 睡前 != null
```