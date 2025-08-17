
# 工作流：使用Cursor自动化搭建Obsidian知识库

这是一套标准化的、分步执行的指令，用于指导Cursor（或其同类工具）根据一个结构化的Markdown大纲，自动化地创建一套完整、多层级的Obsidian知识库框架。

**前提：** 你需要预先准备好一份结构清晰的Markdown大纲文件。该大纲应遵循以下结构：

- **二级标题 (H2):** 用于定义顶级的知识分类。
- **三级标题 (H3):** 用于定义该分类下的具体主题。
- **无序列表项:** 用于定义该主题下最基础的原子知识点。

---

### **第一步：创建顶级分类结构**

**目标**：根据大纲的二级标题，创建知识库的顶级文件夹。

**提示词**：

```markdown
请读取我当前打开的Markdown大纲文件。
文件中，每一个二级标题下有多个三级标题，每一个三级标题下有一些无序列表项，阅读并理解文件内容和层级关系，接下来，我会要求你按照这个层级关系来为我创建文件夹和文件。

首先，请帮我执行第一步任务：
为文件中的每一个二级标题（H2），在当前根目录下创建一个对应的文件夹。
```

```markdown
Please read the Markdown outline file I currently have open.
In the file, each Level 2 heading has multiple Level 3 headings under it, and each Level 3 heading has several unordered list items. Read and understand the file's content and hierarchical structure. Next, I will ask you to create folders and files for me according to this structure.

First, please execute the first task for me:
For every Level 2 heading (H2) in the file, create a corresponding folder in the current root directory.
```
---

### **第二步：创建主题结构与MOC笔记**

**目标**：在顶级文件夹内，为每个主题创建对应的子文件夹，并在其中生成一个空的MOC（内容地图）笔记。

**提示词**：

```markdown
很好。现在请执行第二步任务：
请再次分析我的大纲文件。为每一个三级标题（H3），在它所属的二级标题对应的文件夹内，创建一个同名的文件夹。
然后，在这个新创建的主题文件夹内部，再创建一个以“主题名 MOC.md”命名的、空的Markdown文件。

例如，二级标题是“摄影”（已经在第一步中创建该文件夹），该二级标题下有一个三级标题是“人像摄影”
那么，在“摄影”文件夹下，创建一个“人像摄影”文件夹，并在“人像摄影”文件夹下，创建一个“人像摄影 MOC.md”文件
```

```markdown
Excellent. Now please execute the second task:
Please analyze my outline file again. For every Level 3 heading (H3), create a folder of the same name inside the folder corresponding to its parent Level 2 heading.
Then, inside this newly created topic folder, create an empty Markdown file named "[Topic Name] MOC.md".

For example, if a Level 2 heading is "Photography" (you already created this folder in Step 1), and under it is a Level 3 heading "Portrait Photography",
then, you should create a "Portrait Photography" folder inside the "Photography" folder, and within the "Portrait Photography" folder, create a file named "Portrait Photography MOC.md".
```

### **第三步：创建并链接原子笔记**  
**目标**：创建所有最底层的原子笔记，并自动将它们的链接填充到对应的MOC笔记中，完成内部的导航链接。 

**提示词**：

```markdown
太棒了。现在请执行第三步，这是最关键的一步：
请再次分析我的大纲文件。你需要做两件事：

1.  **创建原子笔记**：为每一个三级标题（H3）下的所有列表项，在对应的主题文件夹内，创建一个以**列表项文本内容为文件名**的、空的Markdown文件。

2.  **填充MOC笔记**：打开每一个MOC笔记（例如“什么是提示词工程 MOC.md”），将这个主题下所有原子笔记的链接，以无序列表和Obsidian双向链接的格式，写入其中。
    *   例如，“零样本提示 (Zero-Shot Prompting) MOC.md”文件的最终内容应该是：
        - [[零样本提示的定义]]
        - [[零样本提示的应用场景 (直接明确的任务)]]
        - [[零样本提示的优势 (简洁、高效、低成本)]]

请严格按照以上规则和示例执行。
```

```markdown
Fantastic. Now please execute the third and most critical step:
Please analyze my outline file once more. You need to do two things:

1.  **Create Atomic Notes**: For all list items under each Level 3 heading (H3), create an empty Markdown file within the corresponding topic folder. The filename should be the **text content of the list item**.

2.  **Populate MOC Notes**: Open each MOC note (e.g., "What is Prompt Engineering MOC.md") and write the links to all the atomic notes under that topic into it, formatted as an unordered list using Obsidian's wikilink format.
    * For example, the final content of the "Zero-Shot Prompting MOC.md" file should be:
        - [[Definition of Zero-Shot Prompting]]
        - [[Use Cases for Zero-Shot Prompting (Direct and clear tasks)]]
        - [[Advantages of Zero-Shot Prompting (Simple, efficient, low-cost)]]

Please follow the rules and examples above strictly.
```

### **第四步：创建知识库总览笔记**  

**目标**：创建一个作为整个知识库中央枢纽的、可供导航的总览页面。  

**说明**：这一步虽然可以由AI辅助生成框架，但强烈建议在生成后由你手动进行精修，以添加你自己的宏观理解和学习目标。  

**提示词**：

```markdown
框架搭建已完成，非常出色。现在请帮我创建总览笔记。

请在根目录下，创建一个名为“[你的知识主题] 总览.md”的新文件。（请手动替换括号内的文本）

然后，在这个文件内部，写入以下内容框架：  
首先，写入一级标题：“# [你的知识主题] 学习总览”。  
接着，写入一段引导语：“这是我系统性学习[你的知识主题]的知识中心。所有核心模块的入口都可以在这里找到。”  
然后，写入一个二级标题：“## 核心模块导航”。  
最后，请分析我所有的顶级文件夹（H2），将它们作为三级标题列出。在每个三级标题下，再列出该顶级文件夹内所有MOC笔记的双向链接。
```

```
The framework setup is complete, outstanding job. Now, please help me create the overview note.

In the root directory, create a new file named "[Your Knowledge Topic] Overview.md". (Please manually replace the text in the brackets).

Then, write the following content framework inside this file:
First, write a Level 1 heading: "# [Your Knowledge Topic] Learning Overview".
Next, write an introductory sentence: "This is my knowledge center for systematically learning [Your Knowledge Topic]. Entrances to all core modules can be found here."
Then, write a Level 2 heading: "## Core Module Navigation".
Finally, please analyze all my top-level folders (from the H2s) and list them as Level 3 headings. Under each Level 3 heading, list the wikilinks to all the MOC notes contained within that top-level folder.
```
### **执行建议**  
- **分步进行**：请严格按照顺序，一次只向Cursor发送一个步骤的提示词。 
- **耐心等待**：每一步操作，特别是第三步，可能需要AI思考和执行一段时间。请耐心等待，并随时通过直接查看文件管理器来确认操作是否已真实完成。 
- **检查与确认**：在执行每一步之前，都仔细检查AI给出的预览计划，确认无误后再点击“Accept”。`

