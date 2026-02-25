---
name: youtube-processor
description: Process YouTube videos into three complementary summary formats and automatically organize them in Obsidian. Use when given a YouTube URL to summarize, extract insights, or turn videos into notes. Automatically generates: (1) Detailed guide markdown, (2) Canvas visualization mind map, (3) Actionable templates/formulas. Organizes all files under 🌑 002 ROCKS/0231 YT/ folder structure. Triggers on "summarize this video", "process this YouTube", "what's this video about", or any YouTube URL shared for processing.
allowed-tools: Read, Bash, Write, Glob, WebFetch
---

# YouTube Processor

## What This Does

Takes a YouTube URL, extracts the transcript, and you (Claude) summarize it. Outputs Obsidian-ready markdown. Zero friction: share a link, get actionable notes.

## When to Use

- "Summarize this video: [URL]"
- "Turn this YouTube into notes"
- "What's this video about?"
- "Process this for my newsletter"
- Any YouTube URL shared for processing

## Location

This skill's tools live at:
```
/Users/eddale/Documents/GitHub/powerhouse-lab/skills/youtube-processor/tools/
```

## How It Works

**Step 1:** Python/yt-transcript-download extracts the transcript (no API key needed)
**Step 2:** You (Claude) summarize using your intelligence + context
**Step 3:** You generate three complementary summary formats:
   - Detailed guide (comprehensive markdown breakdown)
   - Canvas visualization (JSON mind map)
   - Actionable templates (implementation recipes & prompts)
**Step 4:** You organize all three files into `🌑 002 ROCKS/0231 YT/[Video Title]/`
**Step 5:** You confirm the folder structure and file locations to user

This approach means you can use mission-context, newsletter-coach, and other skills during summarization. The automated folder organization ensures consistent knowledge management.

---

## Instructions

### Which Method to Use

| Environment | Method |
|-------------|--------|
| **Claude Code** | Local Python script (Step 1a) |
| **Claude.ai / Mac Client** | API via WebFetch (Step 1b) |

---

### Step 1a: Extract Transcript (Claude Code)

Run the Python tool to get the transcript:

```bash
cd /Users/eddale/Documents/GitHub/powerhouse-lab/skills/youtube-processor/tools && \
python3 get_transcript.py --url "[URL]"
```

For JSON output (easier to parse):
```bash
python3 get_transcript.py --url "[URL]" --json
```

### Step 1b: Extract Transcript (Claude.ai / Mac Client)

Use the API endpoint via WebFetch:

```
WebFetch: https://youtube-processor-eight.vercel.app/transcript?url=[VIDEO_URL]
```

The API returns JSON:
```json
{
  "success": true,
  "video_id": "abc123",
  "language": "en",
  "transcript": "...",
  "char_count": 5000,
  "word_count": 850
}
```

**Example prompt for WebFetch:**
"Extract the transcript text from the response"

---

### Step 2: Summarize the Transcript

Once you have the transcript, summarize it based on what the user needs:

**Quick Summary:**
- Headline (1 sentence)
- Key points (3-5 bullets)
- Main takeaway

**Detailed Analysis:**
- Headline summary
- Key points with context
- Main takeaways
- Action items mentioned
- How this relates to Ed's work (if relevant)

**Newsletter Mining:**
- Hook ideas for an article
- Core insight/framework
- Story beats for anecdotes
- Takeaways for readers
- Newsletter angle for The Little Blue Report

### Step 3: Format for Obsidian

Create markdown with this structure:

```markdown
---
source: YouTube
video_id: [ID]
url: [URL]
processed: [YYYY-MM-DD HH:MM]
tags: [youtube, video-notes]
mission_areas: [BlackBelt, Powerhouse, Newsletter, Prototyping, Daily workflow, Skill building]
action_verdict: [Act now | Bookmark | Ignore | Research]
---

# [Video Title or Topic]

**Link**: [URL]
**Processed**: [Date]

## Summary

[Your summary here]

## Mission Relevance

**Applies to:** [Tag which mission areas this content is relevant to]
- **BlackBelt** - Coaching program work
- **Powerhouse** - AI Amplified program / members
- **Newsletter** - The Little Blue Report
- **Prototyping** - Building leverage tools
- **Daily workflow** - Personal productivity
- **Skill building** - Improving the system itself

[Brief explanation of why it matters to each tagged area]

## Action Verdict

**Verdict:** [Act now | Bookmark | Ignore | Research]

[Specific recommendation and next step if applicable]

- **Act now** - Worth immediate attention. Next step: [specific action]
- **Bookmark** - Know it exists, use when relevant
- **Ignore** - Not applicable to Ed's mission
- **Research** - Needs more info before deciding

## Learning Triggers

[Any questions or opportunities this surfaces for Ed's system]

- **Questions raised:** [What this makes you wonder about]
- **Skill opportunities:** [Could this improve an existing skill?]
- **Newsletter angles:** [Story hook or insight for The Little Blue Report]
- **Follow-up research:** [Would a research-swarm help clarify something?]

---

## Full Transcript

[The transcript]

---

_Generated by youtube-processor skill_
```

### Step 4: Generate Three Summary Formats

After summarizing the video, automatically generate three complementary content formats:

#### Format 1: Detailed Guide (Markdown)
- Comprehensive breakdown of video content
- Section-by-section analysis
- Key concepts explained with context
- Implementation steps or actionable insights
- Related frameworks or methodologies
- Filename: `[Video Title]-詳細指南.md` or `[Video Title]-Guide.md`

#### Format 2: Canvas Visualization (JSON Canvas)
- Visual mind map of key concepts
- Hierarchical node structure showing relationships
- Color-coded by topic/theme
- Quick reference for key points
- Enables visual knowledge mapping in Obsidian
- Filename: `[Video Title].canvas`

#### Format 3: Actionable Templates (Markdown)
- Specific templates for implementing insights
- Prompts for AI tools (Gemini, ChatGPT, Claude)
- Frameworks or checklists from the video
- Implementation recipes
- Quick-reference bullet points
- Filename: `[Video Title]-Templates-Formulas.md`

### Step 5: Organize into Folder Structure (Final Step - AUTOMATED)

**Final Step:** Automatically create organized folder and save all three formats:

**Location:** `🌑 002 ROCKS/0231 YT/`

**Folder Structure:**
```
🌑 002 ROCKS/
└── 0231 YT/
    └── [Video Title]/
        ├── [Video Title]-Guide.md (detailed guide)
        ├── [Video Title].canvas (visual canvas)
        └── [Video Title]-Templates-Formulas.md (actionable templates)
```

**Process:**
1. Extract video title from YouTube URL or metadata
2. Create new folder: `/🌑 002 ROCKS/0231 YT/[Video Title]/`
3. Generate all three summary formats (as described in Step 4)
4. Save each format with appropriate filename
5. Confirm folder structure creation with user
6. Provide folder path and file listing

**Example Output:**
```
✅ Video processed and organized!

📁 Folder created: 🌑 002 ROCKS/0231 YT/Agentic Workflows/
├── Agentic Workflows-Guide.md
├── Agentic Workflows.canvas
└── Agentic Workflows-Templates-Formulas.md

[Brief description of what was saved]
```

### Step 6: Save (Optional - Legacy)

Alternatively, save individual files to Ed's Zettelkasten:
```
/Users/eddale/Documents/COPYobsidian/MAGI/Zettelkasten/
```

Filename format: `YT - [Topic] - YYYY-MM-DD.md`

**Note:** The automated folder organization (Step 5) is now the default workflow. Use this legacy save only if specifically requested by the user.

---

## Error Handling

| Error | Meaning | What to Do |
|-------|---------|------------|
| "Transcripts disabled" | Creator turned off captions | Video can't be processed |
| "No transcript found" | No English captions available | Try a different video |
| "Video unavailable" | Private, deleted, or age-restricted | Check the URL |

---

## Examples

### Example 1: Quick Summary

**User says:**
```
Summarize this: https://www.youtube.com/watch?v=VIDEO_ID
```

**You do:**
1. Run: `python3 get_transcript.py --url "https://www.youtube.com/watch?v=VIDEO_ID"`
2. Read the transcript output
3. Provide a summary to the user

### Example 2: Process and Organize (NEW - Automated Workflow)

**User says:**
```
Summarize this video: [URL]
```

**You do:**
1. Extract transcript with the Python tool or yt-transcript-download skill
2. Summarize the content
3. Generate three summary formats:
   - Detailed guide (comprehensive markdown)
   - Canvas visualization (JSON mind map)
   - Actionable templates (implementation recipes)
4. Create folder: `🌑 002 ROCKS/0231 YT/[Video Title]/`
5. Save all three formats to the folder
6. Confirm:
```
✅ Video processed and organized!

📁 Folder created: 🌑 002 ROCKS/0231 YT/[Video Title]/
├── [Video Title]-Guide.md
├── [Video Title].canvas
└── [Video Title]-Templates-Formulas.md
```

### Example 3: Newsletter Mining

**User says:**
```
I want to write about this video for the newsletter: [URL]
```

**You do:**
1. Extract transcript
2. Analyze for newsletter angles (hooks, insights, story beats)
3. Generate the three summary formats with newsletter focus
4. Organize into 🌑 002 ROCKS/0231 YT/ folder structure
5. Present the newsletter angles and offer to hand off to newsletter-coach skill

---

## Integration Points

- **newsletter-coach**: After extracting video insights, hand off for article development
- **mission-context**: Use Ed's voice and style when summarizing
- **task-clarity-scanner**: Action items from videos can be added to daily notes

---

## Dependencies

The Python tool requires:
```
youtube-transcript-api
```

Install if needed:
```bash
pip3 install youtube-transcript-api
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | 2026-02-01 | **Major Update**: Automated three-format generation and folder organization. Now generates detailed guide (markdown), canvas visualization (JSON), and actionable templates. Automatically organizes all files in 🌑 002 ROCKS/0231 YT/ folder structure as final step of workflow. |
| 1.1 | 2026-01-03 | Added Vercel API for Claude.ai/Mac client support |
| 1.0 | 2026-01-02 | Initial build with transcript extraction |

## Notes & Learnings

- youtube-transcript-api works without API keys
- Most videos have auto-generated English captions
- Claude doing the summarization is better than Python calling the API (can use context)
- ~3-5 second transcript extraction for typical videos
