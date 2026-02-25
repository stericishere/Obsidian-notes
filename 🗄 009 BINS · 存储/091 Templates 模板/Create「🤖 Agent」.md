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
tag: 🤖
type:
---
# <%* tR += `${title}` %>


## <u>Main points:</u>
<u>For what data?</u>
> -
<u>What's special about it?</u>
> -
<u>What task it suitable for?</u>
> -

## Advantage:
> - 

## Disadvantage:
> - 

## Extended explanation:
> - l


<%* await tp.file.move ("💎 003 GEMS/032 Evergreen/00 Programming/"+`${title}`) %>