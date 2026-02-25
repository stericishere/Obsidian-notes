<%*
  let title = tp.file.title
  if ((title.startsWith ("未命名")) || (title.startsWith ("Untitled"))) {
    title = await tp. system. prompt ("Enter New Bucket");
    await tp.file.rename(`${title}`);
  } 
  tR += "---"
%>
banner: "[[Research-2.jpg]]"
creation date: <% tp.file.creation_date() %>
tag: 🏗️
priority: 
aliases: <%* tR += `${title}` %>
type: 
complete:
---
[[✅ Manager#🏗️ Projects 项目|<< 🏗️ 项目主页]]
# <%* tR += `${title}` %>

## 🗃️ Resources


## 📒 Plans


## ✅  Tasks 任务


<%* await tp.file.move ("/🌊 001 RIVER/014 BucketList/" + `${title}`) %>

