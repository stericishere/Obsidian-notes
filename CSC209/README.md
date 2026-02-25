# CSC209: Systems Programming - Study Hub

Welcome to your CSC209 midterm study hub! This folder contains organized resources to help you prepare for the exam.

## 📚 Study Materials

### 1. **[[CSC209-Knowledge-Map-Detailed|Detailed Knowledge Map]]** ⭐
   - Visual overview with DEEP CONTEXT for each topic
   - 60+ nodes with specific functions and concepts
   - Shows relationships and prerequisites
   - Color-coded by topic area
   - Start here for big-picture understanding

### 2. **[[Topic-Deep-Dives|Deep Dive Explanations]]** ⭐
   - In-depth explanations of all major topics
   - "What it is", "Why it matters" format
   - Code examples and common pitfalls
   - Visual diagrams and reference tables
   - READ THIS before each topic in Study Guide

### 3. **[[Study-Guide|Comprehensive Study Guide]]**
   - Detailed breakdown of all 13+ topics
   - Includes checklist for tracking progress
   - Practice problem sections
   - Session notes for tracking your learning

### 4. **[[Quick-Reference|Quick Reference Card]]**
   - System calls cheat sheet
   - Common pitfalls to avoid
   - Signal numbers and flags
   - Error handling patterns

## 🎯 How to Use These Materials

### The 3-Step Study Process

**Step 1: Understand the Big Picture** (30 min)
1. Open [[CSC209-Knowledge-Map-Detailed]]
2. Explore the connections between topics
3. See which topics build on which

**Step 2: Learn Each Topic in Depth** (Per topic)
1. Open [[Topic-Deep-Dives]] to that section
2. Read the explanation + examples + why it matters
3. View code examples and pitfalls
4. Then go to [[Study-Guide]] for that topic
5. Mark concepts complete as you understand them
6. Add notes from your NotebookLM notebook

**Step 3: Practice & Review** (Before exam)
1. Use [[Quick-Reference]] for rapid recall
2. Work through practice problems in [[Study-Guide]]
3. Test yourself on weak areas
4. Review common pitfalls section
5. Run code examples locally

### Recommended Study Order
```
C Fundamentals → Memory Management → Pointers
         ↓
 File I/O → System Calls → Processes
         ↓
  Signals → IPC → Threads → Synchronization
```
(See [[Topic-Deep-Dives#Summary Map]] for details)

## 📌 Topics Covered

### Core C Programming
- C Language Fundamentals
- Memory Management (malloc, free, pointers)
- Pointers & Arrays
- File I/O & Streams

### System Programming
- System Calls & Syscalls
- Error Handling & errno
- Processes & Process Management
- fork(), exec(), wait() family

### Advanced Topics
- Signals & Signal Handling
- Inter-Process Communication (IPC)
- Pipes, Named Pipes, Sockets
- Concurrency & Threads
- Synchronization Primitives (mutexes, condition variables)

## 🔗 Adding Content from NotebookLM

Your NotebookLM notebook: https://notebooklm.google.com/notebook/c3ddb137-8fc6-4f2c-93a2-cb6ba08cf781

### How to integrate your notes:
1. For each topic in [[Topic-Deep-Dives]]
2. Visit your NotebookLM and find that topic's insights
3. Add specific examples to the relevant section in [[Study-Guide]]
4. If you discover new concepts, add them to the appropriate Deep Dive
5. Update [[CSC209-Knowledge-Map-Detailed]] if new subtopics emerge

## ✅ Study Checklist

### Week 1: Foundation
- [ ] Review [[CSC209-Knowledge-Map]] 
- [ ] Read C Fundamentals section
- [ ] Review Memory Management concepts
- [ ] Complete pointer practice problems

### Week 2: System Calls
- [ ] Study System Calls section
- [ ] Practice file I/O syscalls
- [ ] Review error handling patterns
- [ ] Complete process management problems

### Week 3: Advanced Topics
- [ ] Study Signals section
- [ ] Understand IPC mechanisms
- [ ] Review threading basics
- [ ] Work on synchronization problems

### Week 4: Review
- [ ] Comprehensive review of all topics
- [ ] Focus on weak areas
- [ ] Review common pitfalls
- [ ] Take practice exam

## 📊 Progress Tracking

- **Overall Progress**: ⬜⬜⬜⬜⬜ [Update as you study]
- **Confidence Level**: 🔴 Just started [Will update]
- **Last Updated**: February 1, 2026

### By Topic Confidence
| Topic | Confidence | Last Review |
|-------|-----------|------------|
| C Fundamentals | [To update] | [Date] |
| Memory Management | [To update] | [Date] |
| Pointers & Arrays | [To update] | [Date] |
| File I/O | [To update] | [Date] |
| System Calls | [To update] | [Date] |
| Processes | [To update] | [Date] |
| fork/exec | [To update] | [Date] |
| Signals | [To update] | [Date] |
| IPC | [To update] | [Date] |
| Threads | [To update] | [Date] |
| Synchronization | [To update] | [Date] |

## 💡 Pro Tips for CSC209

1. **Run Code Locally**: Theory without practice is useless. Write actual C programs.
2. **Use valgrind**: Check your memory management code religiously
   ```bash
   valgrind --leak-check=full ./your_program
   ```

3. **Read Man Pages**: The exact specifications matter
   ```bash
   man 2 fork
   man 3 malloc
   ```

4. **Trace Execution**: Draw diagrams of what happens when fork() is called

5. **Test Edge Cases**: Think about:
   - What if malloc fails?
   - What if file doesn't exist?
   - What if pipe has no data?
   - What if process is killed?

6. **Practice Under Time Pressure**: Do problems within a time limit

7. **Understand vs Memorize**: Know WHY things work, not just HOW

## 🚀 Quick Start

**RIGHT NOW** (Next 30 minutes):
1. ⭐ Open [[CSC209-Knowledge-Map-Detailed]] 
2. ⭐ Read "C Language Fundamentals" in [[Topic-Deep-Dives]]
3. Then open [[Study-Guide]] and start marking what you know

**NEXT** (After understanding one topic):
1. Go to [[Topic-Deep-Dives]] for next topic
2. Read explanation and examples
3. Check understanding with [[Quick-Reference]]
4. Update [[Study-Guide]] with notes + NotebookLM content
5. Mark complete and move to next topic

## 📞 Need Help?

If you get stuck on a topic:
1. Check [[Quick-Reference]] first
2. Review the relevant section in [[Study-Guide]]
3. Consult man pages for specific syscalls
4. Write a small test program to understand behavior

---

**Good luck with your CSC209 midterm! 🎓**

Last updated: February 1, 2026  
Study hub created with Obsidian + Claude Code
