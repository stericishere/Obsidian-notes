  

# 工作流：使用NotebookLM进行对话式学习规划

## 核心理念

通过与Google NotebookLM进行三阶段的对话，将一批无序的、私有的学习资料（如PDF、文档），系统性地转化为一个结构清晰、可用于自动化搭建Obsidian知识库的Markdown大纲。

其核心思想是“人机协作，逐步校准”：避免一次性指令可能带来的理解偏差，通过分步对话，确保每一步的产出都经过人类的确认和微调，从而保证最终成果的质量。



### 第一阶段：宏观理解

**目标：** 确认NotebookLM已经正确、全面地理解了你上传的所有资料的核心内容。这是后续所有工作的基础。

**你的工作：**

1. 向NotebookLM发送以下第一个提示词。
2. 仔细审查AI返回的“摘要报告”，确认其对核心主题、价值和高频概念的理解是否与你的预期一致。
3. 如有偏差，通过追问进行校准，直到你满意为止。

**提示词 1：生成核心摘要**

```markdown
针对我上传的资料，为我生成一份“摘要报告”，以确保我们对这些资料的理解是一致的。这份报告应包含：

1.  **核心主题概括**：总结这些资料整体上涵盖了该知识领域的哪些主要方面？
2.  **核心概念列表**：列出这些资料中被反复提及或强调的高频核心概念，并为每个概念附上它主要出现的来源引用 `[数字]`。

请生成这份摘要报告。输出语言为中文
```  

```markdown
Based on the materials I have uploaded, generate a "Summary Report" for me to ensure our understanding of these materials is aligned. This report should include:

1.  **Core Theme Summary**: Summarize which major aspects of this knowledge domain are covered by these materials as a whole.
2.  **Core Concepts List**: List the high-frequency core concepts that are repeatedly mentioned or emphasized in these materials. For each concept, attach a source citation `[number]` indicating where it primarily appears.

Please generate this summary report. The output language should be English.
```
---

### 第二阶段：设计学习路径

**目标：** 基于第一阶段已对齐的宏观理解，与AI共同设计一个逻辑清晰、循序渐进的学习路径。

**你的工作：**

1. 在确认第一阶段无误后，继续在同一个对话中发送以下第二个提示词。
2. 审查AI生成的学习路线图，重点关注其**学习顺序**和**模块划分**的合理性。
3. 通过对话与AI探讨，调整路线图，使其最符合你的个人学习习惯和目标。

**提示词 2：设计学习路线图**

```markdown
非常好，我们对资料的宏观理解已经达成一致。

现在，请基于我们刚才确认的核心主题和高频概念，为我设计一个逻辑清晰、循序渐进的“学习路线图”。

这个路线图应该：
1.  **划分类别**：将相关知识内容划分成4-8个主要类别。
2.  **内容详实**：在每个类别下，明确指出需要学习的关键主题和技术。
3.  **来源清晰**：为每一个学习主题，都附上最重要的来源引用 `[数字]`，告诉我应该去阅读哪几份核心文档。

请生成这份学习路线图。
```

```markdown
Excellent, we have reached an agreement on the macro-level understanding of the materials.

Now, based on the core themes and high-frequency concepts we just confirmed, please design a logically structured and progressive "Learning Roadmap" for me.

This roadmap should:
1.  **Categorize Knowledge**: Divide the relevant knowledge content into 4-8 main categories.
2.  **Provide Detail**: Under each category, clearly specify the key topics and techniques that need to be learned.
3.  **Cite Sources Clearly**: For each learning topic, attach the most important source citations `[number]` to tell me which core documents I should read.

Please generate this learning roadmap.
```

---

### 第三阶段：生成最终“施工图”

**目标：** 将我们共同确认的学习路径，精确地转换成最终的、用于自动化施工的Markdown大纲。

**你的工作：**

1. 在确认第二阶段的路线图完美无误后，发送以下第三个提示词。
2. 获取最终产出的Markdown大纲。这份大纲是纯粹的、结构化的“施工蓝图”，可以直接用于下一步的自动化搭建流程。

**提示词 3：输出Markdown大纲**

```markdown
完美！这份学习路线图正是我想要的。

现在，请执行最后一步，也是最重要的一步：将我们刚刚确定的这份学习路线图，严格转换成一个用于自动化搭建Obsidian知识库的、纯粹的Markdown大纲。

请严格遵循以下设计规则：

1.  **最终格式**：最终的输出只能包含二级标题（H2）、三级标题（H3）、以及无序列表项（使用 `-`）。绝对不能包含任何描述性段落或解释性文字。
2.  **二级标题 (H2)**：直接使用我们路线图中的“类别”作为二级标题，并加上数字编号。例如：`## 01-核心基础`。
3.  **三级标题 (H3)**：直接使用我们路线图中的“主题”作为三级标题。例如：`### 什么是提示词工程`。
4.  **列表项**：将每个主题下的具体知识点或技术术语，作为无序列表项。
5.  **文字格式：** 二级标题，三级标题和列表项都会被用于powershell来创建文件夹和文件，所以标题和列表项的文字要考虑到不能含有特殊字符，以导致powershell代码失效或导致无效的文件夹和文件名。也就是说，要针对这些名称进行文字上的优化。

请生成这份最终的Markdown大纲“施工图”。
```

```markdown
Perfect! This learning roadmap is exactly what I wanted.

Now, please execute the final and most important step: Strictly convert the learning roadmap we just finalized into a pure Markdown outline for automatically building an Obsidian knowledge base.

Please adhere strictly to the following design rules:

1.  **Final Format**: The final output must only contain Level 2 headings (H2), Level 3 headings (H3), and unordered list items (using `-`). It must absolutely not include any descriptive paragraphs or explanatory text.
2.  **Level 2 Headings (H2)**: Directly use the "categories" from our roadmap as Level 2 headings, and add a numerical prefix. For example: `## 01-Core Fundamentals`.
3.  **Level 3 Headings (H3)**: Directly use the "topics" from our roadmap as Level 3 headings. For example: `### What is Prompt Engineering`.
4.  **List Items**: Use the specific knowledge points or technical terms under each topic as unordered list items.
5.  **Text Formatting**: The text for Level 2 headings, Level 3 headings, and list items will be used by PowerShell to create folders and files. Therefore, the text must not contain special characters that could cause the PowerShell code to fail or result in invalid folder and file names. In other words, you need to sanitize these names.

Please generate this final Markdown outline "blueprint".
```