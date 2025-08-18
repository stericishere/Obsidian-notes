<%*
  let title = tp.file.title
  if ((title.startsWith ("未命名")) || (title.startsWith ("Untitled"))) {
    title = await tp. system. prompt ("Model name");
    await tp.file.rename(`${title}`);
  } 
  tR += "---"
%>
banner: "[[Notes-2.jpg]]"
creation date: <% tp.file.creation_date() %>
aliases: <%* tR += `${title}` %>
tag: 🧠
type:
---
# <%* tR += `${title}` %>
