<%*
  let title = tp.file.title
  if ((title.startsWith ("未命名")) || (title.startsWith ("Untitled"))) {
    title = await tp. system. prompt ("YT title");
    await tp.file.rename(`${title}`);
  } 
  tR += "---"
%>
banner: "[[Archive-2.jpg]]"
banner_x: 0.5
author:
tag: 📺 
rating: 
---
# <%* tR += `${title}` %>
>Links:

## ✨内容概述


## 💭我的反思


## ✍全文高亮


<%* await tp.file.move ("/🌑 002 ROCKS/023 Internet/0231 YT/"+`${title}`) %>