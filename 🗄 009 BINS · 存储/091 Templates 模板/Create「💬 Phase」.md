<%*
// Get title
let title = tp.file.title;
if (title.startsWith("未命名") || title.startsWith("Untitled")) {
  title = await tp.system.prompt("What the Phase");
  await tp.file.rename(title);
}

// Select category
const categories = ["💼 Professional", "🍠 Date", "🌐 Networking", "🧑‍🤝‍🧑 Talking", "📜 Life", "📈 Sales", "👔 Interview", "📖 Favourite Quote"];
const selectedCategory = await tp.system.suggester(categories, categories, false, "Select category:");

// Define types for each category
const categoryTypes = {
  "🍠 Date": ["call", "pickup", "texting", "date"],
  "💼 Professional": ["email", "meeting", "follow up"],
  "🌐 Networking": ["email","self intro", "ice breaker", "question", "follow up"],
  "🧑‍🤝‍🧑 Talking": ["question", "framework", "quote"],
  "📜 Life":["quote", "framework"],
  "📈 Sales": ["ToB", "ToC"],
  "👔 Interview": ["Q&A", "trick", "follow up"],
  "📖 Favourite Quote": ["life", "present", "past", "future"]
};

// Get types for selected category and ask user to choose
const availableTypes = categoryTypes[selectedCategory];
let phaseType;

if (availableTypes.length === 1) {
  // If only one type available, use it automatically
  phaseType = availableTypes[0];
} else {
  // Ask user to choose from available types
  phaseType = await tp.system.suggester(availableTypes, availableTypes, false, `Select ${selectedCategory} type:`);
}
tR += "---"
%>
creation date: <% tp.file.creation_date() %>
aliases: <% title %>
tags: 
  - 💬
  - phase/<% selectedCategory %>
category: <% selectedCategory %>
type: <% phaseType %>
---
**Category:** <% selectedCategory %>
**Type:** <% phaseType %>

<%*
// Move file
await tp.file.move("/🌊 001 RIVER/015 Phase/00 Storage/" + title);
%>