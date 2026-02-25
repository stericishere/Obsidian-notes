# 🧠 AWESOME Vault System Guide

Your minimal, connected second brain for learning, work, and personal growth.

---

## 📐 System Architecture

### **4 Core Domains** (Everything lives here)

```
🧠 SELF
   └─ Life Mindset, Philosophy, Values, Health

👥 PEOPLE
   └─ Relationships, Communication, Leadership, Interpersonal Skills

⚙️ WORK
   └─ Career, Business, Entrepreneurship, Projects

🔧 SYSTEMS & FRAMEWORKS
   └─ Mental Models, Methodologies, Decision Frameworks, Processes
```

### **Inbox** (Everything starts here)
```
📥 INBOX
   └─ Raw captures from all sources
   └─ Processed weekly into the 4 domains
```

### **Quote Base** (One Unified View)
```
💬 QUOTES BASE (Single Index)
   ├─ Pulls ALL quotes from all 4 domains
   ├─ Searchable by: Author, Theme, Source, Date
   └─ One database view of all wisdom
```

---

## 📊 Visual Flow: Quotes System

```
🧠 SELF/Quote
   └─ > "Quote 1"
   └─ > "Quote 2"
        ↓
👥 PEOPLE/Quote
   └─ > "Quote 3"    ↓────────────┐
   └─ > "Quote 4"         ╲       │
        ↓                  ╲      │
⚙️ WORK/Quote           ↓────→ 💬 ONE QUOTE BASE
   └─ > "Quote 5"         ╱       │
   └─ > "Quote 6"    ╱────        │
        ↓           │             │
🔧 SYSTEMS/Quote    │             │
   └─ > "Quote 7"   └─────────────┘
   └─ > "Quote 8"

Result: One searchable database with ALL quotes from ALL domains
```

---

## 🔄 The Workflow

### **Step 1: CAPTURE** (Minutes)
When you consume content, create a note in `📥 INBOX` using the template below.

**Takes:** 3-5 minutes per item
**Timing:** Immediately while consuming (don't wait)

### **Step 2: EXTRACT** (Daily/Weekly)
Pull out key insights:
- Bullets
- Quotes
- Your reflection

**Takes:** Already done in capture template

### **Step 3: PROCESS** (Weekly Review)
Batch process your inbox every week:
- Review each inbox note
- Move to appropriate domain
- Ensure quotes are captured
- Link to related notes

**Frequency:** Weekly (pick a day: Monday? Friday?)
**Time:** 30 min per week

### **Step 4: CONNECT** (Ongoing)
- Add backlinks to related notes
- Update existing notes with new insights
- Quotes automatically appear in Quote Base

---

## 📝 Capture Template

Use this template for **ALL** content (video, podcast, article, book):

```markdown
# [Title of Content]

**Source Type:** YouTube | Podcast | Article | Book
**Creator/Author:** [Name]
**Date:** [When you consumed it]
**Link:** [URL or reference]

## Quick Bullets
- Insight 1
- Insight 2
- Insight 3

## Key Quotes
> "Quote 1" - [timestamp if applicable]
> "Quote 2"

## My Reflection
[Your thoughts, how it applies to you, action items]

## Maps To
[Domain(s) this belongs to: Self | People | Work | Systems]
```

### **Example**

```markdown
# Naval Ravikant on Decision-Making

**Source Type:** YouTube
**Creator:** Naval Ravikant
**Date:** 2025-01-15
**Link:** https://youtube.com/watch?v=...

## Quick Bullets
- Distinguish reversible vs irreversible decisions
- Reversible decisions: decide fast, you can change
- Irreversible decisions: think deeply, get input
- Most people decide too slowly on reversible stuff

## Key Quotes
> "Most of life's regrets come from reversible decisions made too slowly"
> "Have a decision framework before you need it"

## My Reflection
This changes how I approach work decisions. I've been overthinking reversible choices. I should document my decision framework for work and life.

## Maps To
🔧 Systems & Frameworks | 🧠 Self
```

---

## 📥 Input Types Quick Reference

| Input | Capture Method | Time |
|-------|---|---|
| **YouTube Video** | Pause at key moments, grab timestamp + bullet, then quote | 5 min |
| **Podcast** | Listen once for bullets, jot quotes, rewind for accuracy | 10 min |
| **Article** | Copy key section, quote it, add your thought | 5 min |
| **Book** | One note per chapter/section you liked, include page #s | 10 min |
| **Multiple Sources** | Create synthesis note linking to all of them | 10 min |

---

## 🎯 Weekly Review Ritual

**When:** Every [DAY]
**Duration:** 30 minutes
**Process:**

1. Open `📥 INBOX`
2. For each note:
   - ✅ Check bullets are clear
   - ✅ Verify quotes are good
   - ✅ Read your reflection
   - ✅ Decide: which domain(s)?
3. Move note to domain folder:
   - `🧠 SELF/[subtopic].md`
   - `👥 PEOPLE/[subtopic].md`
   - `⚙️ WORK/[subtopic].md`
   - `🔧 SYSTEMS/[subtopic].md`
4. Check Base view → quotes appear
5. Add backlinks to 2-3 related notes
6. Mark inbox note as processed (or delete if extracted)

---

## 🔗 How Backlinks Work

**When moving a note to a domain:**

Add backlinks to related notes. Example:

In `🔧 SYSTEMS/Decision Making.md`:
```markdown
Related:
- [[Frameworks - Risk Management]]
- [[Self - Philosophy on Regret]]
- [[Work - Project Decisions]]
```

This creates a web of connections across your vault.

---

## 🎨 Domain Canvases (Visual Knowledge Graphs)

Each domain has a **Canvas** - a visual mind map that shows connections between notes.

### **What Canvases Do**
- 📊 Show your knowledge visually
- 🔗 Display connections between topics
- 📝 Embed actual note content for context
- 📈 Grow organically as you add more notes

### **Four Domain Canvases**
```
🧠 SELF.canvas       → Visual philosophy & personal growth
👥 PEOPLE.canvas     → Visual relationships & leadership
⚙️ WORK.canvas       → Visual career & projects
🔧 SYSTEMS.canvas    → Visual frameworks & mental models
```

### **How to Use Canvases**

**Step 1: Create notes in your domain**
```
🧠 SELF/Philosophy.md
🧠 SELF/Values.md
🧠 SELF/Decision Making.md
```

**Step 2: Embed notes into the canvas as FILE NODES**

Instead of text placeholders like "*Add notes here*", embed actual notes:

```json
{
  "type": "file",
  "file": "🧠 SELF/Philosophy.md",
  "x": 0,
  "y": 0,
  "width": 350,
  "height": 250
}
```

**Step 3: View in Obsidian Canvas**
- Open `🧠 SELF.canvas`
- See your actual notes displayed visually
- Click to expand/edit notes
- Add connections (edges) between related notes

### **File Node Syntax**

```json
{
  "id": "unique_id",
  "type": "file",
  "x": 0,
  "y": 0,
  "width": 350,
  "height": 250,
  "file": "🧠 SELF/Philosophy.md",
  "subpath": "#Key Ideas"  // Optional: link to specific heading
}
```

### **When to Use File Nodes**

✅ **Do:** Embed notes to show actual content + context
✅ **Do:** Link notes that are connected/related
✅ **Do:** Update canvas as you add new notes

❌ **Don't:** Leave placeholder text nodes
❌ **Don't:** Create notes without adding to canvas
❌ **Don't:** Let canvas get out of sync with notes

### **Example Workflow**

```
1. Capture: "Naval on Philosophy" → 📥 INBOX
   ↓
2. Process: Move to 🧠 SELF/Philosophy.md
   ↓
3. Embed: Add file node to 🧠 SELF.canvas
   {
     "type": "file",
     "file": "🧠 SELF/Philosophy.md"
   }
   ↓
4. Result: Canvas shows your philosophy note visually
           with connections to other self-knowledge notes
   ↓
5. Future: Add more notes, add more file nodes → canvas grows
```

### **Benefits of Embedding Notes**

✅ **Visual context** - See note content without opening file
✅ **Connections** - Understand how ideas relate
✅ **Discovery** - Find related notes at a glance
✅ **Living document** - Canvas evolves with your knowledge
✅ **Quick reference** - Canvas is faster than search

---

---

## 💬 Quote Base (One Unified System)

**How it works:**
1. You embed quotes in notes when capturing content
2. ONE Quote Base automatically surfaces ALL quotes from all 4 domains
3. Search/filter across all quotes by:
   - Author/Creator
   - Theme/Domain
   - Source (YouTube/Podcast/Article/Book)
   - Date

**Quote Location:**
- **Live in:** Notes within 🧠 Self | 👥 People | ⚙️ Work | 🔧 Systems
- **Viewable in:** One unified Quote Base (all domains together)
- **No duplication:** Quote exists once, visible everywhere

---

## 🚫 Common Mistakes to Avoid

| ❌ Don't                                  | ✅ Do                                     |
| ---------------------------------------- | ---------------------------------------- |
| Store 7 different organizational systems | Stick to 4 domains only                  |
| Capture without thinking                 | Pause and extract meaningful bullets     |
| Leave quotes without reflection          | Always add your thought/application      |
| Forget to link notes                     | Spend 2 min adding 2-3 backlinks         |
| Process inbox daily (wastes time)        | Batch review once per week               |
| Create new folders for new topics        | New topics stay in one of 4 domains      |
| Store content without source info        | Always tag: YouTube/Podcast/Article/Book |
| Leave canvas empty with placeholder text | Embed actual notes as file nodes         |
| Create notes but don't add to canvas     | Always add new notes to their domain canvas |
| Let canvas get out of sync with notes    | Update canvas as you create/move notes   |

---

## 🎯 Your Dashboard

**Quick Links to Check Daily:**

1. **What's in my Inbox?** → See what needs processing
2. **Recent notes** → What did I learn this week?
3. **Quote Base** → Browse all wisdom (unified view from all 4 domains)
4. **Active projects** → What am I working on?

(Create a Dashboard note linking to these)

---

## 📋 Folder Structure Reference

```
AWESOME/
├── 📥 INBOX/
│   ├── [Raw captures from this week]
│
├── 🧠 SELF/
│   ├── Philosophy.md
│   ├── Values.md
│   ├── Health & Wellness.md
│   └── [Other subtopics]
│
├── 👥 PEOPLE/
│   ├── Communication.md
│   ├── Leadership.md
│   ├── Relationships.md
│   └── [Other subtopics]
│
├── ⚙️ WORK/
│   ├── Career Path.md
│   ├── Business Ideas.md
│   ├── Projects/
│   └── [Other subtopics]
│
├── 🔧 SYSTEMS & FRAMEWORKS/
│   ├── Decision Making.md
│   ├── Problem Solving.md
│   ├── Mental Models.md
│   └── [Other methodologies]
│
├── 💬 QUOTE BASE.base
│   └─ [One unified database view pulling all quotes from all 4 domains]
│
├── 🎛️ META/
│   ├── Dashboard.md
│   ├── SYSTEM_README.md (this file)
│   └── Weekly Review Template.md
│
└── 🗄️ BINS/ (existing system)
    ├── Templates/
    ├── Attachments/
    └── [Other storage]
```

---

## 🚀 Getting Started

### **Today (Setup)**
- [ ] Create the 4 domain folders
- [ ] Move existing notes into appropriate domains
- [ ] Set up Quote Base if not done
- [ ] Create Dashboard.md
- [ ] Open the 4 Domain Canvases (🧠 SELF, 👥 PEOPLE, ⚙️ WORK, 🔧 SYSTEMS)
- [ ] Save this README for reference

### **This Week**
- [ ] Capture 3-5 pieces of content using the template
- [ ] Do your first weekly review (organize inbox into domains)
- [ ] Test Quote Base view
- [ ] Add backlinks to 5-10 notes
- [ ] Add 3-5 file nodes to your canvases (embed actual notes)

### **Ongoing**
- [ ] Capture to inbox as you consume content (3-5 min per item)
- [ ] Weekly review every [DAY] (30 min)
- [ ] When moving notes to domains, add them to the domain canvas as file nodes
- [ ] Check Dashboard when you need ideas/insights
- [ ] Search Quote Base when building on existing knowledge
- [ ] View canvases to see your knowledge grow visually

---

## 💡 Pro Tips

**Tip 1:** Don't overthink domain placement—if it fits multiple, pick the PRIMARY one and backlink to others.

**Tip 2:** Keep Inbox notes short. Your reflection is the most valuable part.

**Tip 3:** Quotes + your reflection > just the quote. The reflection is YOUR insight.

**Tip 4:** Set a calendar reminder for weekly review. Make it a ritual.

**Tip 5:** Review your Dashboard monthly. Celebrate what you've learned.

**Tip 6: Canvases are living documents** - Always embed notes (file nodes) instead of text placeholders. This keeps your visual knowledge graph connected to actual content.

**Tip 7: During weekly review, add new notes to canvases** - After moving a note to a domain, spend 2 min adding it as a file node to the domain canvas. This is when connections are freshest in your mind.

**Tip 8: Canvas = visual discovery** - Use canvases when you need ideas or want to explore a topic visually. They're faster than searching when you want to browse related knowledge.

**Tip 6:** Link liberally. Backlinks are how you discover connections.

---

## 📞 Questions?

If something isn't clear:
1. Check this README
2. Look at a completed example note
3. Ask yourself: "Which of the 4 domains does this serve?"
4. When in doubt: Inbox first, organize later

---

**Last Updated:** 2025-02-01
**Version:** 1.0 (Minimal, Connected Second Brain System)

🚀 **Happy learning!**
