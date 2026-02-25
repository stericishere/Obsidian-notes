# 📚 CSC209 Midterm Prep - Complete Index

## 🎯 Start Here: [[README-Midterm-Study.md]]
Your complete study roadmap with day-by-day plan and tips

---

## 📖 Study Materials (in recommended order)

### 1️⃣ **[[Midterm-Prep-Guide.md]]** - Comprehensive Topic Breakdown
   - UNIX Shell & Commands (15%)
   - C Fundamentals & Pointers (20%)
   - Memory Management (30%) ⭐ MOST IMPORTANT
   - Strings & Buffers (20%)
   - Structs & Data Types (15%)
   - Common mistakes checklist
   - **Time:** 2-3 hours
   - **Use:** Read each section, take notes

### 2️⃣ **[[Midterm-Practice-Problems.md]]** - Active Practice
   - 5 problem sets + final challenge
   - ~15 problems with detailed solutions
   - Problems ordered by difficulty
   - **Time:** 2-4 hours (active problem-solving)
   - **Use:** Solve problems, compare to solutions, redo if needed

### 3️⃣ **[[Midterm-Quick-Reference.md]]** - 1-Page Cheat Sheet
   - Critical concepts to memorize
   - Quick lookup tables
   - Command reference
   - Common bug patterns
   - **Time:** 30-60 minutes
   - **Use:** Study, memorize, print out, keep handy

### 4️⃣ **[[Exam-Examples-Visual.md]]** - Visual Learning
   - Memory diagrams (stack/heap)
   - Pointer visualizations
   - Common error patterns illustrated
   - Code tracing examples
   - **Time:** 1-2 hours
   - **Use:** See patterns, understand deeply, draw your own diagrams

### 5️⃣ **[[Topic-Deep-Dives.md]]** - Original Course Material
   - Your detailed course notes
   - Deep technical explanations
   - **Use:** Reference for specific topics

---

## 🎓 Topic Coverage Map

```
UNIX/Shell (15%)
├── Commands: ls, cd, cp, mv, rm, grep, wc, cut
├── Permissions: r=4, w=2, x=1 → Octal notation
├── Redirection: >, <, |
└── Path navigation: absolute vs relative

C Fundamentals (20%)
├── Pointers: &address, *dereference
├── Arrays: decay, indexing, arithmetic
├── Control flow: if, loops, functions
└── Compilation: gcc flags

Memory Management (30%) ⭐
├── Stack vs Heap: allocation, lifetime
├── malloc/free: allocation, checks, cleanup
├── Memory errors: leak, double-free, use-after-free
├── Memory layout: code, globals, heap, stack
└── Stack pointer danger: returning local variables

Data Types (15%)
├── Strings: null-terminated, strlen, strcpy (NEVER!), strncpy
├── Buffer overflow: vulnerability, prevention
├── Structs: allocation, pointers, deep copy, alignment
└── Arrays of pointers: proper cleanup

Integration (5%)
└── Multi-concept problems combining all topics
```

---

## 🗓️ Recommended Study Schedule

### Day 1-2: Foundations (4-5 hours)
- Read: Midterm-Prep-Guide sections 1-2
- Practice: Problems 1.1-1.3, 5.1-5.2
- Reference: Quick-Reference sections on pointers & shell

### Day 3-4: Critical Content (4-5 hours)
- Read: Midterm-Prep-Guide section 3 (Memory Mgmt)
- Practice: Problems 2.1-2.3
- Visual: Exam-Examples-Visual memory diagrams
- Reference: Quick-Reference section on memory errors

### Day 5: Data Types & Integration (4-5 hours)
- Read: Midterm-Prep-Guide sections 4-5
- Practice: Problems 3.1-3.3, 4.1-4.3
- Practice: Final Challenge
- Review: All quick-reference sections

### Day 6-7: Polish & Review (2-3 hours)
- Redo any problems where you struggled
- Final review of Quick-Reference
- Draw memory diagrams from scratch
- Time yourself on problem-solving

---

## 📊 Problem Sets at a Glance

| Set | Topic | Problems | Difficulty | Time |
|-----|-------|----------|-----------|------|
| 1 | Pointers | 1.1-1.3 | ⭐ Easy | 15 min |
| 2 | Memory | 2.1-2.3 | ⭐⭐⭐ Hard | 30 min |
| 3 | Strings | 3.1-3.3 | ⭐⭐ Medium | 20 min |
| 4 | Structs | 4.1-4.3 | ⭐⭐ Medium | 20 min |
| 5 | Shell | 5.1-5.3 | ⭐ Easy | 15 min |
| Final | All | Challenge | ⭐⭐⭐ Hard | 20 min |

---

## ⚠️ Topics Students Struggle With Most

1. **Memory allocation order** - Know when to malloc what
2. **Free sequence** - Inner before outer
3. **Buffer overflow** - Why strcpy is dangerous
4. **Deep vs shallow copy** - Structs with pointers
5. **Permission bits** - Converting octal/symbolic
6. **Pointer arithmetic** - Type size scaling
7. **Stack vs heap lifetime** - When memory is valid

---

## 🔍 Quick Problem Finder

**"How do I..."**

- ...understand pointers? → Problem 1.1-1.3, Exam-Examples-Visual
- ...trace code execution? → Problem 1.1, Examples-Visual Part 8
- ...spot memory leaks? → Problem 2.1-2.3, Quick-Reference
- ...fix buffer overflow? → Problem 3.1-3.3, Prep-Guide Section 4
- ...allocate structs safely? → Problem 4.1-4.3, Examples-Visual Part 6
- ...convert chmod notation? → Problem 5.1-5.3, Prep-Guide Section 1.4
- ...do error handling? → Problem 2.2, Problem 4.1

---

## ✅ Pre-Exam Verification

Can you do all of these WITHOUT looking at notes?

### Pointers
- [ ] Trace pointer code by hand
- [ ] Explain *p and &x
- [ ] Perform pointer arithmetic
- [ ] Spot uninitialized pointers

### Memory
- [ ] Draw stack/heap diagram
- [ ] Identify memory leaks
- [ ] Fix double-free errors
- [ ] Write malloc/free safely

### Strings
- [ ] Know strcpy is dangerous
- [ ] Use strncpy correctly
- [ ] Prevent buffer overflow
- [ ] Know strlen() doesn't count \0

### Structs
- [ ] Allocate with malloc
- [ ] Do deep copy (not shallow)
- [ ] Clean up in correct order
- [ ] Understand alignment

### UNIX
- [ ] Convert chmod octal↔symbolic
- [ ] Use pipes and redirection
- [ ] Navigate with paths
- [ ] Know key commands

---

## 📱 Mobile Study Tips

Can't access full materials? Use Quick-Reference!
- Screenshot [[Midterm-Quick-Reference.md]]
- Keep on phone for bus/breaks
- Study one section per day
- Do mental practice problems

---

## 🆘 If You're Stuck

**"I don't understand concept X"**
1. Read Prep-Guide section on X
2. Look at related problem
3. Study Examples-Visual diagram
4. Explain out loud to friend

**"I keep making the same mistake"**
1. Find it in Common Mistakes section
2. Understand WHY it's wrong
3. Do 3+ problems on that topic
4. Add to your own notes

**"Running out of time"**
1. Skip reading, focus on problems
2. Study Quick-Reference only
3. Do hardest topics first
4. Problems > reading always

**"I can't trace code fast"**
1. Slow down - accuracy first
2. Write each step on paper
3. Draw memory diagram
4. Speed comes after accuracy

---

## 🏆 Success Indicators

You're ready for the exam when:

✅ You can solve all practice problems without help
✅ You can trace pointer code in <2 minutes
✅ You can draw stack/heap diagrams quickly
✅ You know WHY each error happens
✅ You can convert permissions instantly
✅ You understand deep copy vs shallow
✅ You haven't looked at solutions in 2+ days

---

## 🚀 Exam Day Reminders

- Sleep well
- Eat breakfast
- Bring pen/pencil
- Trace code on paper
- Draw memory diagrams
- Show your work
- Don't get stuck - move on

---

## 📞 Quick Links Within Documents

### Midterm-Prep-Guide
- [[Midterm-Prep-Guide.md#-part-1-unix-shell--system-commands|UNIX Commands]]
- [[Midterm-Prep-Guide.md#-part-3-memory-management|Memory Management]]
- [[Midterm-Prep-Guide.md#-part-4-strings--buffers|Strings & Buffers]]
- [[Midterm-Prep-Guide.md#🏗️-part-5-structs--alignment|Structs]]

### Quick-Reference
- [[Midterm-Quick-Reference.md#🔴-critical-concepts|Critical Concepts]]
- [[Midterm-Quick-Reference.md#🔍-spotting-bugs|Common Bugs]]
- [[Midterm-Quick-Reference.md#⚡-pointer-arithmetic-rules|Pointer Arithmetic]]

### Practice-Problems
- [[Midterm-Practice-Problems.md#-problem-set-1-pointers--arrays|Pointers Problems]]
- [[Midterm-Practice-Problems.md#-problem-set-2-memory-management|Memory Problems]]
- [[Midterm-Practice-Problems.md#-problem-set-3-strings--buffers|Strings Problems]]

### Visual Examples
- [[Exam-Examples-Visual.md#-part-2-stack-vs-heap-diagrams|Stack vs Heap]]
- [[Exam-Examples-Visual.md#🚨-part-4-common-error-patterns|Error Patterns]]
- [[Exam-Examples-Visual.md#-part-8-trace-execution-examples|Code Tracing]]

---

## 📅 Last Updated
February 2, 2026

## 📝 Source
Created from your NotebookLM course materials

---

**Good luck! You've got all the tools you need. Focus on understanding, not just memorizing. 🎓**

