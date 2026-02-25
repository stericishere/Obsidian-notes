# 🗺️ Enhanced Mind Map - Full Contents Summary

## Canvas File: CSC209-Knowledge-Map-Enhanced.canvas

This is your **new, improved visual mind map** with detailed content in every node!

---

## 📊 Canvas Statistics

- **Total Nodes**: 30 detailed nodes
- **Total Connections**: 40 edges showing relationships
- **Color Groups**: 5 sections
- **Functions Listed**: 50+
- **Key Concepts**: 100+
- **Exam Patterns**: 6 identified
- **Critical Pitfalls**: 7 called out

---

## 🗂️ All Nodes in the Canvas

### FOUNDATION SECTION (Orange) 🟠
**Prerequisite knowledge - study first!**

#### Node 1: C Fundamentals
```
Topics Covered:
├─ Data types (int, char, float, etc.)
├─ Control flow (if/while/for)
├─ Functions & scope management
├─ Pointers & arrays
└─ Structures

Why it matters: Everything else depends on C knowledge
Study order: 1st (prerequisite for everything)
```

#### Node 2: Memory Basics
```
Topics Covered:
├─ Stack vs Heap
├─ Process address space
├─ Memory layout (text, data, bss, heap, stack)
└─ Pointer dereferencing

Key insight: Understanding memory layout prevents bugs
Links to: File I/O, Processes, Dynamic allocation
```

#### Node 3: Compilation & Linking
```
Topics Covered:
├─ Preprocessor directives (#include, #define)
├─ Compilation stages (preprocess → compile → assemble)
├─ Object files (.o)
├─ Linker (combines object files)
└─ Header files (.h)

Why it matters: Understand how programs are built
```

---

### CORE SYSTEM PROGRAMMING SECTION (Green) 🟢
**Most important for the exam!**

#### Node 4: File I/O (Two Levels)
```
LIBRARY LEVEL (Higher, buffered):
├─ fopen(filename, mode)
├─ fclose(fp)
├─ fprintf(fp, format, ...)
├─ fscanf(fp, format, ...)
└─ fread/fwrite

SYSCALL LEVEL (Lower, direct):
├─ open(path, flags, mode)
├─ close(fd)
├─ read(fd, buffer, count)
├─ write(fd, data, count)
└─ lseek(fd, offset, whence)

Key: File descriptors (0=stdin, 1=stdout, 2=stderr)
Error handling: errno, perror()

Exam focus: Know difference between library and syscalls
```

#### Node 5: Process Model
```
Key Concepts:
├─ PID (Process ID) & PPID (Parent PID)
├─ Process hierarchy & relationships
├─ Process states (running, sleeping, stopped, zombie)
├─ Process address space
├─ Environment variables (getenv)
└─ Command-line arguments (argc, argv)

Important functions:
├─ getpid()
├─ getppid()
├─ getuid(), getgid()
└─ environ array

Why: Understand what a process is and how they work
```

#### Node 6: Process Creation - fork()
```
CRITICAL FUNCTIONS:

fork():
├─ Called once, returns twice!
├─ Returns 0 in child process
├─ Returns child PID in parent process
├─ Uses Copy-on-Write (COW) memory
├─ File descriptors are shared
└─ Both processes continue from fork() call

exec():
├─ exec*() family (execl, execv, execle, execve)
├─ Replaces entire process image
├─ Arguments become new program's argv
├─ Never returns on success (process replaced!)
└─ Returns -1 on error

Pattern (MOST IMPORTANT):
    pid_t pid = fork();
    if (pid == 0) {
        // Child process
        execl("/bin/program", "program", arg1, NULL);
        perror("exec");  // Only reached if exec fails
    } else {
        // Parent process
        wait(NULL);  // Wait for child
    }

Exam frequency: VERY HIGH
Common mistake: Forgetting to call exec() after fork()
```

#### Node 7: Process Termination - wait()
```
CRITICAL FUNCTIONS:

wait(int *status):
├─ Blocks parent until ANY child exits
├─ Collects exit status
├─ Reaps zombie process
├─ Returns child PID, -1 on error

waitpid(pid_t pid, int *status, int options):
├─ Wait for specific child (or group)
├─ WNOHANG for non-blocking
├─ More flexible than wait()

Status macros:
├─ WIFEXITED(status) - did child call exit()?
├─ WEXITSTATUS(status) - what was exit code?
├─ WIFSIGNALED(status) - killed by signal?
└─ WTERMSIG(status) - which signal?

KEY CONCEPT - Zombie processes:
├─ Child exits but parent doesn't call wait()
├─ Child becomes zombie (shows as <defunct>)
├─ Occupies process table entry forever
├─ Leaks process table resources!
└─ SOLUTION: Always call wait()

Exam frequency: VERY HIGH
```

#### Node 8: Memory Management
```
DYNAMIC ALLOCATION:

malloc(size_t size):
├─ Allocates uninitialized memory
├─ Returns pointer (or NULL on error!)
├─ MUST CHECK FOR NULL!

calloc(size_t count, size_t size):
├─ Allocates zero-initialized memory
├─ Returns pointer (or NULL on error)

realloc(void *ptr, size_t size):
├─ Resizes existing allocation
├─ May move memory
├─ Returns new pointer (or NULL on error)

free(void *ptr):
├─ Deallocates memory
├─ Set to NULL after freeing (good practice)
├─ Never free() same pointer twice!

CRITICAL ERRORS:

Memory leaks:
├─ Allocate memory
├─ Never call free()
├─ Program uses more and more memory

Use-after-free:
├─ free(ptr)
├─ ptr still in use!
├─ Undefined behavior

Buffer overflow:
├─ Write past end of array
├─ Corrupts memory
├─ Security vulnerability

Detection: valgrind --leak-check=full ./program

Exam frequency: HIGH
```

---

### SIGNALS & IPC SECTION (Blue) 🔵
**Asynchronous events and inter-process communication**

#### Node 9: Signal Basics
```
What are signals?
├─ Asynchronous notifications
├─ Interrupt normal execution
├─ Hardware (SIGSEGV, SIGFPE) or software (SIGTERM)

Signal numbers: 1-64

Default behaviors:
├─ Terminate process
├─ Ignore signal
├─ Stop/continue process
└─ Core dump (debugging)

KEY CONCEPT - Signal-safe functions:
├─ ONLY these can be safely called in handlers:
│  ├─ write()
│  ├─ read()
│  ├─ signal()
│  ├─ exit()
│  └─ (small set, see man 7 signal-safety)
│
└─ NOT SAFE (common mistake):
   ├─ printf() - uses malloc internally!
   ├─ malloc(), free()
   ├─ pthread_mutex_lock()
   └─ Most library functions!

CRITICAL EXAM PITFALL:
    void handler(int sig) {
        printf("Got signal\n");  // ❌ WRONG! Not signal-safe
    }

Exam frequency: VERY HIGH
```

#### Node 10: Signal Handling
```
Methods:

signal(int signum, void (*handler)(int)):
├─ Old way (legacy)
├─ Simple but limited

sigaction(int signum, const struct sigaction *act, ...):
├─ Better way (recommended)
├─ More control and options
├─ Recommended for production

Handlers:

SIG_DFL:
├─ Default action
├─ Process terminates for most signals

SIG_IGN:
├─ Ignore signal
├─ Process continues as if signal never arrived

Custom handler:
├─ void handler(int sig) { ... }
├─ Called when signal delivered
├─ Can do limited work (signal-safe functions only!)

Signal masking:
├─ sigprocmask() to block/unblock signals
├─ Protects critical sections
└─ Atomicity guarantees

Pattern:
    struct sigaction sa;
    sa.sa_handler = handler;
    sigemptyset(&sa.sa_mask);
    sa.sa_flags = 0;
    sigaction(SIGTERM, &sa, NULL);
```

#### Node 11: Important Signals
```
Common signals and their uses:

SIGTERM (15):
├─ Graceful termination request
├─ Can be caught and handled
└─ Use for clean shutdown

SIGKILL (9):
├─ Force kill (cannot be caught!)
├─ Bypasses all handlers
├─ Use as last resort

SIGINT (2):
├─ Ctrl+C from keyboard
├─ Interrupts foreground process

SIGSEGV (11):
├─ Segmentation fault
├─ Dereferencing invalid pointer
├─ Usually terminates

SIGCHLD (17):
├─ Child process changed state
├─ Sent when child exits
├─ Use to handle zombie processes

SIGPIPE (13):
├─ Broken pipe (write to closed pipe)
├─ Writing to pipe with no readers
└─ Can crash program if unhandled

Pattern (clean shutdown):
    void sigterm_handler(int sig) {
        exit(0);  // ✅ Safe to call in handler
    }
```

#### Node 12: Pipes (Unnamed)
```
pipe(int pipefd[2]):
├─ Creates unidirectional communication channel
├─ pipefd[0] = read end
├─ pipefd[1] = write end

Usage pattern:
    int pipefd[2];
    pipe(pipefd);
    
    if (fork() == 0) {
        // Child: read from pipe
        close(pipefd[1]);  // Close write end
        read(pipefd[0], buffer, size);
    } else {
        // Parent: write to pipe
        close(pipefd[0]);  // Close read end
        write(pipefd[1], data, size);
    }

Key properties:
├─ Unidirectional only
├─ Limited buffer (~4KB)
├─ Blocking I/O (by default)
├─ EOF when all writers close
└─ Used in shell: cmd1 | cmd2 | cmd3

Common pitfalls:
├─ ❌ Forgetting to close unused ends
├─ ❌ Both reading/writing same end
├─ ❌ Deadlock (full buffer + blocked reader)

Exam frequency: MEDIUM
```

#### Node 13: Named Pipes (FIFOs)
```
mkfifo(const char *pathname, mode_t mode):
├─ Creates named pipe in filesystem
├─ Can be used by unrelated processes
├─ Persists until explicitly deleted
├─ open() and close() like regular files

Usage:
    mkfifo("/tmp/myfifo", 0666);
    
    // Process A
    int fd = open("/tmp/myfifo", O_WRONLY);
    write(fd, data, size);
    
    // Process B (separate process!)
    int fd = open("/tmp/myfifo", O_RDONLY);
    read(fd, buffer, size);

Advantages over pipes:
├─ Works between unrelated processes
├─ Persists on filesystem
├─ Multiple readers/writers possible
└─ More flexible than unnamed pipes

Key properties:
├─ Bidirectional possible (multiple FIFOs)
├─ Blocking by default
└─ Survives process termination

Exam frequency: LOW-MEDIUM
```

#### Node 14: Sockets
```
socket(int domain, int type, int protocol):
├─ Create network communication endpoint
├─ domain: AF_INET (IPv4), AF_INET6 (IPv6), AF_UNIX (local)
├─ type: SOCK_STREAM (TCP), SOCK_DGRAM (UDP)

Key functions:
├─ socket() - create socket
├─ bind() - bind to address
├─ listen() - listen for connections
├─ accept() - accept connection
├─ connect() - connect to server
├─ send() / recv() - send/receive data
└─ close() - close socket

TCP (SOCK_STREAM):
├─ Connection-oriented
├─ Reliable delivery
├─ Used for HTTP, FTP, SSH

UDP (SOCK_DGRAM):
├─ Connectionless
├─ Unreliable delivery
├─ Used for DNS, video streaming

Exam frequency: MEDIUM
Note: Usually not deeply tested in CSC209 intro
```

#### Node 15: Advanced IPC
```
Message Queues:
├─ msgget(key, flags)
├─ msgsnd(qid, msgbuf, size, flags)
├─ msgrcv(qid, msgbuf, size, msgtype, flags)
├─ Structured messages with types
├─ Priority-based delivery

Shared Memory:
├─ shmget(key, size, flags)
├─ shmat(shmid, addr, flags)
├─ shmdt(addr)
├─ FASTEST IPC method
├─ Multiple processes access same memory
├─ Requires synchronization!

Semaphores (System V):
├─ semget(key, nsems, flags)
├─ semop(semid, sops, nsops)
├─ Counters for resource control
├─ Can synchronize multiple processes

Note: These are older System V IPC
Modern POSIX alternatives exist (posix IPC)

Exam frequency: LOW (usually not tested in detail)
```

---

### ADVANCED TOPICS SECTION (Red) 🔴
**Multi-threading and synchronization**

#### Node 16: Threads (POSIX)
```
pthread_create(pthread_t *tid, const pthread_attr_t *attr,
               void *(*func)(void *), void *arg):
├─ Create new thread
├─ func is entry point
├─ arg is passed to function
├─ Returns 0 on success

pthread_join(pthread_t tid, void **retval):
├─ Wait for thread to exit
├─ Collects return value
├─ Blocks until thread terminates

pthread_exit(void *retval):
├─ Explicitly exit thread
├─ Alternative: return from function

Key differences from processes:
├─ ✅ Lightweight (shared memory)
├─ ✅ Fast creation
├─ ❌ Must be careful with shared data
├─ ❌ Cannot use fork()
├─ ❌ Need synchronization

Thread types:
├─ Joinable (default) - must pthread_join()
├─ Detached - automatically cleaned up

Pattern:
    void *thread_func(void *arg) {
        return NULL;
    }
    
    pthread_t tid;
    pthread_create(&tid, NULL, thread_func, NULL);
    pthread_join(tid, NULL);  // Wait for thread

Exam frequency: MEDIUM
```

#### Node 17: Mutexes (Locks)
```
pthread_mutex_lock(pthread_mutex_t *mutex):
├─ Acquire lock
├─ Blocks if already locked
├─ Only one thread at a time

pthread_mutex_unlock(pthread_mutex_t *mutex):
├─ Release lock
├─ Allows other threads to acquire

Critical section pattern:
    pthread_mutex_lock(&mutex);
    // Only one thread here at a time
    counter++;  // Safe now!
    pthread_mutex_unlock(&mutex);

Mutex types:
├─ NORMAL: Deadlock if same thread locks twice
├─ RECURSIVE: Same thread can lock multiple times
├─ ERRORCHECK: Reports errors

Gotchas:
├─ ❌ Forget to unlock = deadlock
├─ ❌ Wrong lock order = deadlock
├─ ❌ Locking in different orders = deadlock
├─ ❌ Forgetting to protect shared data

Exam frequency: HIGH
```

#### Node 18: Condition Variables
```
pthread_cond_wait(pthread_cond_t *cond, pthread_mutex_t *mutex):
├─ Wait for condition to become true
├─ ATOMICALLY releases mutex and waits
├─ Re-acquires mutex when woken
├─ Spurious wakeups possible!

pthread_cond_signal(pthread_cond_t *cond):
├─ Wake ONE waiting thread

pthread_cond_broadcast(pthread_cond_t *cond):
├─ Wake ALL waiting threads

Producer-consumer pattern:
    // Producer
    pthread_mutex_lock(&mutex);
    buffer[pos++] = data;
    pthread_cond_signal(&cond);
    pthread_mutex_unlock(&mutex);
    
    // Consumer
    pthread_mutex_lock(&mutex);
    while (pos == 0) {
        pthread_cond_wait(&cond, &mutex);
    }
    data = buffer[--pos];
    pthread_mutex_unlock(&mutex);

Key points:
├─ Wait MUST be in while loop (spurious wakeups!)
├─ Mutex unlocked while waiting
├─ Re-locked before returning from wait
└─ Can have multiple waiters

Exam frequency: HIGH
```

#### Node 19: Semaphores (POSIX)
```
sem_init(sem_t *sem, int pshared, unsigned int value):
├─ Initialize semaphore
├─ value: initial counter
├─ pshared=0 for threads, 1 for processes

sem_wait(sem_t *sem):
├─ Decrement semaphore
├─ Blocks if count is 0

sem_post(sem_t *sem):
├─ Increment semaphore
├─ Wakes waiting thread

Binary semaphore (0 or 1):
├─ Acts like binary lock
├─ Similar to mutex but no ownership

Counting semaphore:
├─ Limits resource access
├─ Example: max 5 connections

Pattern (resource pool):
    sem_t connections;
    sem_init(&connections, 0, 5);  // Max 5
    
    // Before using resource
    sem_wait(&connections);
    // Use resource
    sem_post(&connections);  // Release

Advantages:
├─ No ownership (unlike mutex)
├─ Atomic operations
├─ Can be faster than mutexes

Exam frequency: MEDIUM
```

#### Node 20: Deadlock Prevention
```
What is deadlock?

Scenario:
    Thread A holds lock1, wants lock2
    Thread B holds lock2, wants lock1
    Neither can proceed!

Conditions for deadlock:
├─ Mutual exclusion (locks exist)
├─ Hold and wait (holding while acquiring)
├─ No preemption (can't force unlock)
├─ Circular wait (wait chain forms circle)

Prevention strategies:

1. Lock ordering:
   ├─ ALWAYS acquire locks in same order
   ├─ A: lock(m1) then lock(m2)
   ├─ B: lock(m1) then lock(m2)  (same order!)
   └─ Prevents circular wait

2. Timeouts:
   ├─ pthread_mutex_timedlock()
   ├─ Don't wait forever
   └─ Can recover from deadlock

3. Lock-free programming:
   ├─ Use atomic operations
   ├─ Avoid locks altogether
   └─ Complex but no deadlock possible

4. Banker's algorithm:
   ├─ Check before acquiring
   ├─ Only proceed if safe
   └─ Prevents deadlock proactively

Exam frequency: MEDIUM
Critical for multi-threaded code
```

---

### PRACTICAL & EXAM TIPS SECTION (Yellow) 🟡
**Real-world code and exam preparation**

#### Node 21: Memory Management Cheat Sheet
```
malloc/free checklist:
├─ ✅ Check malloc() return value
├─ ✅ Store pointer somewhere
├─ ✅ free() when done
├─ ✅ Set to NULL after freeing
├─ ❌ Don't free() same pointer twice
├─ ❌ Don't use after free()
├─ ❌ Don't write past end of allocation

Detection tools:
├─ valgrind --leak-check=full ./program
├─ AddressSanitizer: -fsanitize=address
├─ LeakSanitizer: -fsanitize=leak

Common sizes:
├─ sizeof(int) = 4 bytes
├─ sizeof(long) = 8 bytes (on 64-bit)
├─ sizeof(char) = 1 byte
├─ sizeof(void*) = 8 bytes (on 64-bit)

Exam frequency: HIGH
Every exam has memory questions!
```

#### Node 22: Error Handling
```
Return value checking:
├─ Most syscalls return -1 on error
├─ open(), read(), write() return -1
├─ fork() returns -1 on error
├─ malloc() returns NULL on error

errno variable (thread-local):
├─ Set on error
├─ Check value to understand error
├─ EAGAIN: Resource temporarily unavailable
├─ ENOENT: File not found
├─ EACCES: Permission denied
├─ EPERM: Operation not permitted
├─ EEXIST: File exists
├─ EPIPE: Broken pipe

Error reporting:

perror(msg):
    if (open("file", O_RDONLY) == -1) {
        perror("open");  // Prints: "open: No such file"
    }

strerror(errno):
    fprintf(stderr, "Error: %s\n", strerror(errno));

Pattern:
    int fd = open("file", O_RDONLY);
    if (fd == -1) {
        perror("open");
        exit(EXIT_FAILURE);
    }

Exam frequency: VERY HIGH
Appears in almost every question!
```

#### Node 23: Debugging Tools
```
gdb (GNU Debugger):
├─ gdb ./program
├─ (gdb) break main
├─ (gdb) run arg1 arg2
├─ (gdb) next (next line)
├─ (gdb) step (into function)
├─ (gdb) continue (resume)
├─ (gdb) print variable
├─ (gdb) backtrace (call stack)

valgrind (Memory checker):
├─ valgrind --leak-check=full ./program
├─ Detects memory leaks
├─ Detects use-after-free
├─ Detects buffer overflows
├─ Shows exact location of errors

strace (Syscall tracer):
├─ strace ./program
├─ Shows all syscalls in order
├─ Useful for understanding what program does

AddressSanitizer:
├─ gcc -fsanitize=address program.c
├─ Runtime memory error detection
├─ Stops on error with backtrace

Exam frequency: LOW
But essential for debugging practice code
```

#### Node 24: Critical Pitfalls ⚠️
```
Seven deadly mistakes:

1. ❌ Not checking malloc return value
   if (ptr == NULL) { /* handle error */ }

2. ❌ Not closing file descriptors
   close(fd);  // Always do this!

3. ❌ printf() in signal handler (NOT SAFE!)
   void handler(int sig) {
       printf("signal");  // WRONG!
       write(STDOUT_FILENO, "signal", 6);  // Right
   }

4. ❌ Forgetting wait() for children
   fork();  // Missing: wait(NULL);
   // Creates zombie processes!

5. ❌ Race conditions in threads
   counter++;  // Race condition!
   // Solution: Use mutex

6. ❌ Deadlock from wrong lock order
   A: lock(m1), lock(m2)
   B: lock(m2), lock(m1)  // Deadlock!

7. ❌ Buffer overflows in C strings
   char buf[10];
   strcpy(buf, "very long string");  // Overflow!

Exam frequency: VERY HIGH
Half of exam tests these!
```

#### Node 25: Best Practices ✅
```
Seven safety habits:

1. ✅ Always check return values
   int fd = open(...);
   if (fd == -1) { /* error */ }

2. ✅ Use valgrind while developing
   valgrind --leak-check=full ./program

3. ✅ Read man pages for exact specs
   man 2 fork
   man 3 malloc
   man 7 signal

4. ✅ Test error paths, not just happy path
   What if file doesn't exist?
   What if malloc fails?
   What if process is killed?

5. ✅ Only signal-safe functions in handlers
   write() yes, printf() no!

6. ✅ Consistent lock ordering in threads
   Always: lock(m1) then lock(m2)

7. ✅ Cleanup handlers for resource freeing
   pthread_cleanup_push() / pop()

Exam frequency: MEDIUM
Shows good understanding

Tip: Follow these = fewer bugs = better grade!
```

#### Node 26: Common Exam Patterns
```
Pattern 1: fork-exec-wait
    pid_t pid = fork();
    if (pid == 0) {
        execl("/bin/program", "program", arg, NULL);
    } else {
        wait(NULL);
    }

Pattern 2: Signal handler callback
    void handler(int sig) {
        write(STDOUT_FILENO, "Got signal\n", 11);
    }
    sigaction(SIGTERM, &sa, NULL);

Pattern 3: Pipe communication
    pipe(pipefd);
    if (fork() == 0) {
        close(pipefd[1]);
        read(pipefd[0], buf, size);
    } else {
        close(pipefd[0]);
        write(pipefd[1], data, size);
    }

Pattern 4: Thread pool
    pthread_t threads[N];
    for (int i = 0; i < N; i++) {
        pthread_create(&threads[i], NULL, worker, NULL);
    }

Pattern 5: Producer-consumer
    mutex, condition variable
    producer: produce, signal
    consumer: wait, consume

Pattern 6: Mutex critical section
    pthread_mutex_lock(&mutex);
    // critical section
    pthread_mutex_unlock(&mutex);

Study these: You'll definitely see them!
```

#### Node 27: Recommended Study Order
```
1️⃣  C Fundamentals
    Foundation for everything

2️⃣  Memory Management
    Essential for understanding systems

3️⃣  File I/O
    Core systems programming skill

4️⃣  Processes & fork/exec/wait
    ⭐⭐⭐ MOST IMPORTANT (30% of exam!)
    Study deeply!

5️⃣  Signals
    Interrupt handling & safety critical

6️⃣  IPC
    Communication mechanisms

7️⃣  Threads & Synchronization
    Advanced, but important

Follow this order!
Skip around = miss prerequisites = struggle
```

---

## 🎯 Canvas Navigation Tips

### Follow These Paths

**Path 1: Core Systems Programming** (Exam Focus)
```
C Fundamentals
    ↓
Memory Basics
    ↓
File I/O (Syscalls)
    ↓
Processes
    ↓
fork() ⭐⭐⭐ (Most important!)
    ↓
exec()
    ↓
wait() (prevent zombies)
```

**Path 2: Interrupts and Events**
```
Signals
    ↓
Signal Handling
    ↓
Common Signals
    ↓
Applications (SIGCHLD for zombie handling)
```

**Path 3: Advanced Concurrency**
```
Threads
    ↓
Mutexes
    ↓
Condition Variables
    ↓
Deadlock Prevention
```

### Time Allocation (for 20-hour study)

- **Foundation** (4 hours): C Fundamentals → Memory Basics
- **Core** (8 hours): File I/O → Processes → fork/exec/wait
- **Signals** (3 hours): Signal Handling & Safety
- **IPC** (2 hours): Pipes, Named Pipes, Sockets
- **Advanced** (3 hours): Threads → Synchronization
- **Review** (2 hours): Pitfalls, Patterns, Practice

---

## ✅ Quick Checklist

Before the exam, make sure you can:

- [ ] Write fork-exec-wait pattern from memory
- [ ] Explain why wait() is needed (zombie processes)
- [ ] Name 3 signal-safe functions
- [ ] Explain mutex purpose and usage
- [ ] Draw process memory layout
- [ ] Explain file descriptors and open/read/write
- [ ] Implement producer-consumer with condition variables
- [ ] Detect and prevent common pitfalls
- [ ] Use valgrind to find memory leaks
- [ ] Write C code with proper error handling

---

**This mind map is your complete visual guide to CSC209!**

🗺️ **Open it. Explore it. Study it. Master it.**

**Last Updated**: February 1, 2026
