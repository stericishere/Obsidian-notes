# 🎨 Canvas Quick Start

How to use and edit your Domain Canvases

---

## 🚀 Quick Overview

Your vault has **4 domain canvases**:
- `🧠 SELF.canvas`
- `👥 PEOPLE.canvas`
- `⚙️ WORK.canvas`
- `🔧 SYSTEMS & FRAMEWORKS.canvas`

Each canvas is a **visual mind map** where you embed your actual notes.

---

## 📖 How to View a Canvas

1. In Obsidian, open any canvas file:
   - Click on `🧠 SELF.canvas`
   - It opens in Canvas view (looks like a visual diagram)

2. **Explore the canvas:**
   - Zoom: Scroll wheel or pinch
   - Pan: Click and drag background
   - Click nodes to see content or open notes

---

## ✏️ How to Edit a Canvas (Add Your Notes)

### **Option 1: Edit in Canvas UI (Easiest)**

1. Open the canvas in Obsidian
2. Click the **+** button (or Cmd+Click in empty space)
3. Choose **File**
4. Search for and select your note (e.g., `Philosophy.md`)
5. It appears on canvas as an embedded file node

**Result:** Your actual note is now visible on the canvas!

---

### **Option 2: Edit JSON Directly (Advanced)**

If you want to manually edit the JSON:

1. Right-click canvas file → Open with → Default text editor (or similar)
2. Add a file node in the `"nodes"` array:

```json
{
  "id": "philosophy_001",
  "type": "file",
  "x": 50,
  "y": 50,
  "width": 350,
  "height": 250,
  "file": "🧠 SELF/Philosophy.md"
}
```

3. Save the file
4. Go back to Obsidian, it updates automatically

---

## 🔗 How to Connect Notes (Add Edges)

### **In Canvas UI:**

1. Open canvas
2. Click on a node, drag the connection point to another node
3. An arrow (edge) appears connecting them
4. Optionally add label: "leads to", "informs", "relates to", etc.

### **In JSON:**

Add an edge in the `"edges"` array:

```json
{
  "id": "edge_001",
  "fromNode": "philosophy_001",
  "fromSide": "right",
  "toNode": "values_002",
  "toSide": "left",
  "toEnd": "arrow",
  "label": "shapes"
}
```

---

## 📐 Canvas Coordinate System

- **X axis**: increases to the right
- **Y axis**: increases downward
- **Coordinates**: measured in pixels from top-left (0,0)
- **Negative values**: allowed (canvas extends infinitely)

**Example positioning:**
```
Left side:   x: 0-400
Center:      x: 400-800
Right side:  x: 800+

Top:         y: 0-300
Middle:      y: 300-600
Bottom:      y: 600+
```

---

## 📝 Typical Node Sizes

| Type | Width | Height |
|------|-------|--------|
| Small text | 200-300 | 100-150 |
| File node | 300-400 | 200-300 |
| Large node | 400-600 | 300-500 |
| Group container | 600+ | 400+ |

---

## 🎯 Workflow: Adding Your First Note to Canvas

**Scenario:** You created `🧠 SELF/Philosophy.md` and want to add it to the canvas.

### **Step 1: Open Canvas**
```
Obsidian → 🧠 SELF.canvas
```

### **Step 2: Add File Node**
- Click **+** button
- Choose **File**
- Search: `Philosophy`
- Select `🧠 SELF/Philosophy.md`
- It appears on canvas

### **Step 3: Position It**
- Drag it to a good spot
- Maybe near the "Philosophy" text node

### **Step 4: Connect It**
- Draw an arrow from Philosophy node to your note
- Add label: "detailed notes"

### **Step 5: Done!**
- Your actual Philosophy note is now visible on the canvas
- Others can see it and click through to the full note

---

## 💡 Pro Canvas Tips

**Tip 1:** Organize by time/relationship
- Left side: Foundation concepts
- Right side: Applications/results
- Or: Top = problems, bottom = solutions

**Tip 2:** Use color coding
```json
"color": "1"  // Red = active/priority
"color": "2"  // Orange = in progress
"color": "3"  // Yellow = learning
"color": "4"  // Green = complete
"color": "5"  // Cyan = reference
"color": "6"  // Purple = meta/system
```

**Tip 3:** Group related nodes
- Create invisible group containers
- Add multiple file nodes inside
- Helps organize complex domains

**Tip 4:** Use descriptive labels on edges
```
"supports" → "informs" → "contradicts"
"depends on" → "related to" → "evolved from"
```

---

## 🔄 Keeping Canvases In Sync

**During weekly review:**

1. Move new note to domain (e.g., `🧠 SELF/Mindset.md`)
2. Open domain canvas (e.g., `🧠 SELF.canvas`)
3. Add file node for the new note
4. Draw edges to related nodes
5. Canvas now reflects your latest knowledge

**This takes ~2 min per note** but keeps your visual map current.

---

## ❌ Common Canvas Issues

| Issue | Solution |
|-------|----------|
| Node appears empty | File path is wrong - check path in `"file"` |
| Can't see my notes | Zoom out (Ctrl+Minus) to find them |
| Edges disappeared | They're there - zoom to see full canvas |
| Canvas is messy | Organize nodes into groups or sections |
| Too many nodes | Create sub-canvases for specific topics |

---

## 📚 Reference: File Node Template

Copy this template to add a file node:

```json
{
  "id": "unique_id_123",
  "type": "file",
  "x": 0,
  "y": 0,
  "width": 350,
  "height": 250,
  "file": "DOMAIN/Note Name.md",
  "color": "5"
}
```

Replace:
- `unique_id_123` → Something unique (e.g., `philosophy_node_1`)
- `x`, `y` → Where you want it positioned
- `DOMAIN/Note Name.md` → Your actual note path
- `color` → Optional, 1-6 for preset colors

---

## 🎓 Examples

### Simple Canvas (3 notes)
```json
{
  "nodes": [
    {
      "id": "hub",
      "type": "text",
      "x": 400,
      "y": 200,
      "width": 200,
      "height": 100,
      "text": "# Philosophy"
    },
    {
      "id": "note1",
      "type": "file",
      "x": 0,
      "y": 100,
      "width": 350,
      "height": 250,
      "file": "🧠 SELF/Philosophy.md"
    },
    {
      "id": "note2",
      "type": "file",
      "x": 800,
      "y": 100,
      "width": 350,
      "height": 250,
      "file": "🧠 SELF/Values.md"
    }
  ],
  "edges": [
    {
      "id": "e1",
      "fromNode": "note1",
      "toNode": "hub",
      "toEnd": "arrow"
    },
    {
      "id": "e2",
      "fromNode": "hub",
      "toNode": "note2",
      "toEnd": "arrow"
    }
  ]
}
```

---

## 🚀 Ready to Go!

1. Open your first domain canvas
2. Add a file node for an existing note
3. See your knowledge become visual!

**Happy mapping!** 🗺️
