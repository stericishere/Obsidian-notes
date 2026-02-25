# CSC209: Systems Programming - Midterm Study Guide

> **Knowledge source**: NotebookLM notebook - [Add content from your notebook here]

## Course Overview
- **Course Code**: CSC209
- **Topic**: Systems Programming
- **Midterm Focus**: [Add from your notebook]
- **Study Status**: 🔄 In Progress

---

## 1. C Language Fundamentals

### Key Topics
- [ ] Basic syntax and data types
- [ ] Control flow (if/else, loops)
- [ ] Functions and scope
- [ ] Header files and compilation

### Notes
[Add your NotebookLM insights here]

---

## 2. Memory Management

### Key Topics
- [ ] Stack vs Heap
- [ ] malloc() and free()
- [ ] Memory leaks and debugging
- [ ] valgrind and memory profiling

### Important Concepts
[Add your NotebookLM insights here]

---

## 3. Pointers & Arrays

### Key Topics
- [ ] Pointer arithmetic
- [ ] Arrays and multi-dimensional arrays
- [ ] Strings in C (char arrays)
- [ ] Function pointers

### Common Pitfalls
[Add your NotebookLM insights here]

---

## 4. File I/O & Streams

### Key Topics
- [ ] fopen(), fclose(), fread(), fwrite()
- [ ] stdin, stdout, stderr
- [ ] Binary vs text mode
- [ ] Error handling in file operations

### Practice Problems
[Add your NotebookLM insights here]

---

## 5. System Calls & Syscalls

### Key Topics
- [ ] open(), close(), read(), write()
- [ ] System vs library calls
- [ ] Return values and error codes
- [ ] errno and strerror()

### Important APIs
[Add your NotebookLM insights here]

---

## 6. Processes & Process Management

### Key Topics
- [ ] Process address space
- [ ] PID and process hierarchy
- [ ] Process states
- [ ] Environment variables and arguments

### Concepts
[Add your NotebookLM insights here]

---

## 7. fork(), exec(), wait()

### Key Topics
- [ ] fork() behavior and return values
- [ ] exec() family of functions
- [ ] wait() and waitpid()
- [ ] Parent-child process communication

### Code Examples
[Add your NotebookLM insights here]

---

## 8. Signals & Signal Handling

### Key Topics
- [ ] Common signals (SIGTERM, SIGKILL, SIGSEGV, etc.)
- [ ] signal() and sigaction()
- [ ] Signal masks and blocking
- [ ] Race conditions with signals

### Critical Knowledge
[Add your NotebookLM insights here]

---

## 9. Inter-Process Communication (IPC)

### Key Topics
- [ ] Pipes (unnamed pipes)
- [ ] Named pipes (FIFOs)
- [ ] Message queues
- [ ] Shared memory
- [ ] Sockets

### Use Cases
[Add your NotebookLM insights here]

---

## 10. Pipes, Named Pipes & Sockets

### Pipes (|)
- [ ] How pipes work
- [ ] Deadlock scenarios
- [ ] Buffering behavior

### Named Pipes (FIFOs)
- [ ] mkfifo()
- [ ] Opening FIFOs
- [ ] Reader/writer coordination

### Sockets
- [ ] Socket types (TCP, UDP)
- [ ] Socket API basics
- [ ] Client-server model

---

## 11. Concurrency & Threads

### Key Topics
- [ ] pthread basics
- [ ] Thread creation and termination
- [ ] Thread IDs and stack allocation
- [ ] Thread vs process tradeoffs

### Thread Safety
[Add your NotebookLM insights here]

---

## 12. Synchronization Primitives

### Key Topics
- [ ] Mutexes (pthread_mutex_t)
- [ ] Condition variables (pthread_cond_t)
- [ ] Semaphores
- [ ] Deadlock detection and prevention

### Best Practices
[Add your NotebookLM insights here]

---

## 13. Error Handling & Debugging

### Key Topics
- [ ] errno and error codes
- [ ] perror() and strerror()
- [ ] Return value checking
- [ ] gdb basics
- [ ] valgrind for memory debugging

### Debugging Techniques
[Add your NotebookLM insights here]

---

## 📋 Exam Checklist

### Must Know
- [ ] Basic C syntax and memory management
- [ ] Pointer manipulation and arithmetic
- [ ] fork() and exec() behavior
- [ ] System calls vs library calls
- [ ] Basic signal handling
- [ ] IPC mechanisms (pipes, sockets)
- [ ] Thread creation and basic synchronization
- [ ] Error handling and common pitfalls

### Should Know
- [ ] Advanced pointer concepts (function pointers, void*)
- [ ] Process communication patterns
- [ ] Signal safety
- [ ] Deadlock prevention
- [ ] File descriptor management

### Nice to Know
- [ ] Advanced threading patterns
- [ ] Performance optimization
- [ ] Security considerations
- [ ] Portability issues

---

## 📚 Practice Problems

### Topic 1: Memory Management
[Add problems from your notebook]

### Topic 2: Processes
[Add problems from your notebook]

### Topic 3: IPC
[Add problems from your notebook]

### Topic 4: Synchronization
[Add problems from your notebook]

---

## 🎯 Key Formulas & Quick Reference

```c
// Process creation pattern
pid_t pid = fork();
if (pid == 0) {
    // Child process
} else if (pid > 0) {
    // Parent process
} else {
    // Error
}

// Error handling pattern
if (syscall() == -1) {
    perror("syscall");
    exit(EXIT_FAILURE);
}

// Thread creation pattern
pthread_t tid;
pthread_create(&tid, NULL, thread_func, arg);
pthread_join(tid, NULL);

// Mutex pattern
pthread_mutex_lock(&mutex);
// critical section
pthread_mutex_unlock(&mutex);
```

---

## 📝 Session Notes

### Study Session 1
- Date: [Add date]
- Topics Covered: [Add topics]
- Confidence Level: [Add rating]

### Study Session 2
- Date: [Add date]
- Topics Covered: [Add topics]
- Confidence Level: [Add rating]

---

## 🔗 Related Resources
- [[CSC209-Knowledge-Map]] - Visual concept map
- [NotebookLM Notebook](https://notebooklm.google.com/notebook/c3ddb137-8fc6-4f2c-93a2-cb6ba08cf781)
- Man pages (man 2 syscall, man 3 function)

---

**Last Updated**: February 1, 2026  
**Study Status**: 🔄 In Progress  
**Confidence**: [To be updated]
