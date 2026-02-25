---
banner: "[[Birthday-2.jpg]]"
---
# 👥 Birthday Calendar

## 未来 30 天
```jsx:
<Show></Show>
```

## 全部联系人

```button
name 新建联系人
type command
action QuickAdd: 请输入联系人姓名
```

```dataview
TABLE aliases as "昵称",dateformat(birthday,"MMM dd") as "生日",type as "分组"
from "🌊 001 RIVER · 河流/012 People 联系人"
WHERE birthday != null
sort birthday.month, birthday.day asc
```

### 无生日信息
```dataview
TABLE aliases as "昵称",dateformat(birthday,"MMM dd") as "生日",type as "分组"
from "🌊 001 RIVER · 河流/012 People 联系人"
WHERE birthday = null
and file.path != this.file.path
sort birthday.month, birthday.day asc
```
