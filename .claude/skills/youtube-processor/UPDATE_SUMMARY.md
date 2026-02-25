# YouTube Processor Skill - Update Summary v2.0

## Date: February 1, 2026

### Major Update Overview
The youtube-processor skill has been significantly enhanced to **automatically generate three complementary summary formats and organize them in a structured folder hierarchy** under your Obsidian vault.

---

## What Changed

### New Workflow (5-Step Process)

**Step 1:** Extract YouTube transcript (Python/yt-transcript-download)
**Step 2:** Summarize the content with context and intelligence
**Step 3:** Generate three complementary summary formats automatically:
   - **Detailed Guide** (comprehensive markdown breakdown)
   - **Canvas Visualization** (JSON mind map for visual knowledge mapping)
   - **Actionable Templates** (implementation recipes, formulas, and AI prompts)
**Step 4:** Organize all files into `🌑 002 ROCKS/0231 YT/[Video Title]/`
**Step 5:** Confirm folder structure and file locations

### Automatic Folder Organization

**New Feature:** The skill now creates organized folder structures automatically:

```
🌑 002 ROCKS/
└── 0231 YT/
    └── [Video Title]/
        ├── [Video Title]-Guide.md (detailed guide)
        ├── [Video Title].canvas (visual canvas)
        └── [Video Title]-Templates-Formulas.md (actionable templates)
```

---

## Three Summary Formats Explained

### Format 1: Detailed Guide (Markdown)
- Comprehensive breakdown of video content
- Section-by-section analysis
- Key concepts explained with context
- Implementation steps or actionable insights
- Related frameworks or methodologies
- **Filename:** `[Video Title]-詳細指南.md` or `[Video Title]-Guide.md`

### Format 2: Canvas Visualization (JSON Canvas)
- Visual mind map of key concepts
- Hierarchical node structure showing relationships
- Color-coded by topic/theme
- Quick reference for key points
- Enables visual knowledge mapping in Obsidian
- **Filename:** `[Video Title].canvas`

### Format 3: Actionable Templates (Markdown)
- Specific templates for implementing insights
- Prompts for AI tools (Gemini, ChatGPT, Claude)
- Frameworks or checklists from the video
- Implementation recipes
- Quick-reference bullet points
- **Filename:** `[Video Title]-Templates-Formulas.md`

---

## Usage Examples

### Example 1: Basic Video Summarization
```
User: "Summarize this video: https://www.youtube.com/watch?v=..."

Output:
✅ Video processed and organized!

📁 Folder created: 🌑 002 ROCKS/0231 YT/[Video Title]/
├── [Video Title]-Guide.md
├── [Video Title].canvas
└── [Video Title]-Templates-Formulas.md

[Brief summary of what was generated]
```

### Example 2: Newsletter Content
```
User: "Process this video for the newsletter"

Output:
✅ Video processed and organized!

📁 Folder created: 🌑 002 ROCKS/0231 YT/[Video Title]/
├── [Video Title]-Guide.md (includes newsletter hooks)
├── [Video Title].canvas (visual reference)
└── [Video Title]-Templates-Formulas.md (implementation angles)

Available for newsletter-coach skill integration
```

---

## Integration with Existing Workflows

- **Legacy Zettelkasten save:** Still available but no longer the default (Step 6 in docs)
- **Newsletter integration:** Three-format output enables seamless handoff to newsletter-coach skill
- **Mission context:** Skill maintains compatibility with mission-context and other skills

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | 2026-02-01 | **Major Update**: Automated three-format generation and folder organization. Now generates detailed guide (markdown), canvas visualization (JSON), and actionable templates. Automatically organizes all files in 🌑 002 ROCKS/0231 YT/ folder structure as final step of workflow. |
| 1.1 | 2026-01-03 | Added Vercel API for Claude.ai/Mac client support |
| 1.0 | 2026-01-02 | Initial build with transcript extraction |

---

## Benefits

✅ **Consistency:** Every video generates the same three-format output structure
✅ **Organization:** All video summaries automatically organized in one location
✅ **Discoverability:** Folder structure makes finding video resources easy
✅ **Multiple Learning Styles:** Visual (canvas), detailed (guide), and actionable (templates) formats
✅ **Time Saving:** Automated folder creation and file organization eliminates manual steps
✅ **Knowledge Management:** Structured organization enables better long-term knowledge retention

---

## Next Steps

1. The skill is now ready to use with the new automated workflow
2. When you summarize any YouTube video, you'll automatically get three formats organized in the 🌑 002 ROCKS/0231 YT/ structure
3. All your existing video summaries can be re-organized using this new structure if desired

---

**Questions?** Check the full SKILL.md file for detailed instructions on each step of the process.
