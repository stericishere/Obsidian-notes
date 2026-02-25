# CSC209: Deep Dive Topic Explanations

> Detailed context for each major topic in the visual mind map

---

## 1. C Language Fundamentals

### Data Types & Variables
**What it is**: The building blocks of C programs
- **Basic types**: `int` (4 bytes), `char` (1 byte), `float` (4 bytes), `double` (8 bytes)
- **Modifiers**: `short`, `long`, `unsigned`, `signed`
- **Structures**: `struct` for grouping related data
- **Unions**: `union` for memory-efficient overlapping data
- **Enumerations**: `enum` for named constants

**Why it matters**: Understanding size, alignment, and signedness prevents bugs
```c
struct Person { int age; char name[50]; };  // 54 bytes (with padding)
unsigned int x = -1;  // Different behavior than signed int!
```

### Control Flow
**What it is**: How programs make decisions and repeat operations
- **Conditionals**: `if/else`, `switch` for decision-making
- **Loops**: `for`, `while`, `do-while` for iteration
- **Jump statements**: `goto` (avoid), `break`, `continue`

**Why it matters**: Core to program logic and CPU performance

### Functions & Scope
**What it is**: Code organization and visibility rules
- **Local scope**: Variables exist only within their function
- **Global scope**: Variables accessible everywhere (avoid!)
- **Static**: Persist across function calls or limit visibility
- **Extern**: Declare variables from other files
- **Function prototypes**: Declare before use, define later

**Why it matters**: Prevents name collisions, enables code organization

### Compilation Process
**What it is**: How .c files become executable programs
1. **Preprocessor**: `#include`, `#define` expansion
2. **Compilation**: Convert to object code (.o files)
3. **Linking**: Combine object files and libraries

**Why it matters**: Understanding errors from each stage helps debugging

---

## 2. Memory Management

### Memory Layout
**What it is**: How process memory is organized
```
┌─────────────────────────────────────────┐
│ Text Segment (Code)                     │ Read-only, loaded from executable
├─────────────────────────────────────────┤
│ Initialized Data (Global variables)     │ Set during startup
├─────────────────────────────────────────┤
│ Uninitialized Data (BSS)                │ Zero-initialized
├─────────────────────────────────────────┤
│ Heap (Dynamic memory)                   │ malloc(), grows upward
│                                         │
├─────────────────────────────────────────┤
│ (Free space)                            │
├─────────────────────────────────────────┤
│                                         │
│ Stack (Local variables, arguments)      │ grows downward
└─────────────────────────────────────────┘
```

**Why it matters**: 
- **Stack**: Fast but limited (~1-8MB)
- **Heap**: Large but slower, manual management

### Dynamic Allocation
**What it is**: Requesting memory at runtime
```c
void *malloc(size_t size);      // Allocate uninitialized
void *calloc(size_t n, size_t size);  // Allocate zero-initialized
void *realloc(void *ptr, size_t size); // Resize allocation
void free(void *ptr);           // Return to system
```

**Key concepts**:
- **Alignment**: Memory addresses must be multiples of type size
- **Fragmentation**: Heap becomes scattered after many allocations/frees
- **Return value checking**: ALWAYS check for NULL!

**Why it matters**: Enables flexible data structures like linked lists

### Memory Issues
**What it is**: Common mistakes and how to find them
- **Memory leak**: Allocate but never free → memory exhaustion
- **Use-after-free**: Access freed memory → undefined behavior
- **Buffer overflow**: Write past array bounds → crash or exploit
- **Double-free**: Free same pointer twice → corruption

**Detection tools**:
- **valgrind**: `valgrind --leak-check=full ./program`
- **AddressSanitizer**: Compiler flag `-fsanitize=address`

**Why it matters**: These are exam favorites and real security issues

### Best Practices
- Always initialize pointers to NULL
- Check malloc() return value
- Use valgrind during development
- Understand ownership: who allocates? who frees?
- Consider memory lifetime: when is it needed?

---

## 3. Pointers & Arrays

### Pointer Basics
**What it is**: Variables that store memory addresses
```c
int x = 5;
int *p = &x;    // p points to x
printf("%d", *p);  // Dereference: prints 5
printf("%p", p);   // Address: prints 0x7fff...
```

**Key points**:
- `&x`: Address of x
- `*p`: Value at address p
- `NULL`: Special pointer meaning "no address"
- `void*`: Generic pointer, must cast when used

**Why it matters**: Pointers are how C enables data structures and dynamic memory

### Pointer Arithmetic
**What it is**: Mathematical operations on pointers
```c
int arr[] = {10, 20, 30};
int *p = arr;
p + 1;      // Points to arr[1] (advances by sizeof(int))
p[2];       // Same as *(p+2), accesses arr[2]
p - arr;    // Returns 0 (pointer difference)
```

**Key insight**: Addition/subtraction scales by type size
- `int *p; p+1` advances by 4 bytes
- `char *p; p+1` advances by 1 byte

**Why it matters**: Arrays are just pointers; understanding this enables array manipulation

### Arrays & Strings
**What it is**: Collections of elements and null-terminated text
```c
int arr[10];           // Static array
int *arr = malloc(10 * sizeof(int));  // Dynamic array
char str[] = "hello";  // String (6 chars: h,e,l,l,o,\0)
```

**String functions** (from `<string.h>`):
- `strlen()`, `strcpy()`, `strcat()`, `strcmp()`
- `strncpy()` (safer), `strncat()` (safer)

**Why it matters**: Strings are arrays of chars; off-by-one errors common

### Function Pointers
**What it is**: Pointers to functions for dynamic dispatch
```c
int (*compare)(int, int) = &strcmp;  // Pointer to function
compare(a, b);  // Call through pointer

// Common use: callbacks
qsort(arr, n, sizeof(int), &compare_func);
```

**Why it matters**: Enables callbacks, strategy pattern, function dispatch

---

## 4. File I/O & Streams

### Standard I/O Library
**What it is**: High-level buffered I/O operations
```c
FILE *fp = fopen("file.txt", "r");    // Open
fprintf(fp, "Hello %s\n", name);      // Write
fscanf(fp, "%d", &x);                 // Read
fclose(fp);                           // Close
```

**Modes**:
- `"r"`: Read (must exist)
- `"w"`: Write (create/truncate)
- `"a"`: Append
- `"b"`: Binary mode (e.g., "rb", "wb")

**Buffering modes**:
- **Full**: Buffer in memory until full or fclose()
- **Line**: Buffer until newline
- **No**: Write immediately

**Why it matters**: Standard for file operations in C

### Stream Operations
**What it is**: Working with file contents
```c
fread(buffer, sizeof(char), 100, fp);  // Read bytes
fwrite(data, sizeof(int), n, fp);      // Write bytes
fseek(fp, offset, SEEK_SET);           // Move pointer
ftell(fp);                             // Current position
```

**Seek positions**:
- `SEEK_SET`: Absolute position
- `SEEK_CUR`: Relative to current
- `SEEK_END`: Relative to end

**Why it matters**: Enables random access to files

### File I/O Error Handling
**What it is**: Detecting and responding to I/O errors
```c
if (fread(...) != expected_count) {
    if (feof(fp)) printf("End of file\n");
    if (ferror(fp)) perror("Read error");
}
clearerr(fp);  // Reset error flags
```

**Why it matters**: Files can fail; graceful degradation essential

---

## 5. System Calls & System Calls

### Syscalls vs Library
**What it is**: Two levels of I/O
- **Library calls** (stdio): `fopen()`, `fprintf()` - buffered, slow overhead
- **System calls** (unistd): `open()`, `write()` - direct to kernel, faster
- **Context switching**: User mode → kernel mode → user mode (expensive!)

```c
// Library: multiple syscalls per operation
fprintf(fp, "x");  // May just buffer

// Syscalls: direct to kernel
write(fd, "x", 1);  // Goes to kernel immediately
```

**Why it matters**: Performance-critical code uses syscalls directly

### File Descriptors
**What it is**: Integer handles to open files managed by the kernel
```
Per-process file descriptor table:
0: stdin  (standard input)
1: stdout (standard output)
2: stderr (standard error)
3+: files/sockets/pipes opened by process
```

**Why it matters**: Core abstraction; everything is a file descriptor

### File Operations (Syscalls)
**What it is**: Low-level file manipulation
```c
int fd = open("/path/file", O_RDONLY);  // Open
read(fd, buffer, 100);                  // Read
write(fd, data, 50);                    // Write
lseek(fd, offset, SEEK_SET);            // Seek
close(fd);                              // Close
```

**Flags**:
- `O_RDONLY`, `O_WRONLY`, `O_RDWR`: Access mode
- `O_CREAT`, `O_EXCL`, `O_TRUNC`: Creation options
- `O_APPEND`: Append mode

**Why it matters**: Required for file manipulation and IPC

### Error Handling
**What it is**: How syscalls report failures
```c
if (open(...) == -1) {
    perror("open");  // Prints: "open: Permission denied"
}
// OR manually:
if (open(...) == -1) {
    fprintf(stderr, "%s\n", strerror(errno));
}
```

**Common errno values**:
- `EAGAIN`: Resource temporarily unavailable
- `ENOENT`: File not found
- `EACCES`: Permission denied
- `EPERM`: Operation not permitted
- `EEXIST`: File exists

**Why it matters**: Robust error handling required for production code

### File Control
**What it is**: Querying and changing file descriptor properties
```c
int flags = fcntl(fd, F_GETFL);    // Get flags
fcntl(fd, F_SETFL, O_NONBLOCK);    // Set nonblocking
int fd2 = dup(fd);                 // Duplicate descriptor
dup2(fd, STDOUT_FILENO);           // Redirect stdout to fd
```

**Why it matters**: Enables redirection and nonblocking I/O

---

## 6. Processes & Process Management

### Process Structure
**What it is**: The abstraction of a running program
- **PID**: Process identifier (unique, integer)
- **PPID**: Parent process ID
- **Address space**: Virtual memory allocated to process
- **File descriptor table**: Open files
- **Signal handlers**: How to respond to signals

**Why it matters**: Understanding process abstraction crucial for systems programming

### Process States
**What it is**: What a process is currently doing
```
Running: Executing on CPU (only 1 per CPU core)
↓
Sleeping (Interruptible): Waiting for I/O, can be awakened by signal
        (Uninterruptible): Waiting for I/O, cannot be awakened (rarely used)
↓
Stopped: Suspended (SIGSTOP), can resume (SIGCONT)
↓
Zombie: Exited but parent hasn't reaped, occupies process table slot
↓
Terminated: Reaped, resources freed
```

**Why it matters**: Understanding states helps debug process behavior

### Process Hierarchy
**What it is**: Parent-child relationships
```
init (PID 1)
├── shell (bash)
│   ├── your_program
│   │   ├── child1
│   │   └── child2
│   └── another_program
└── ...
```

**Key concepts**:
- **Orphan process**: Parent dies before child, reparented to init
- **Zombie**: Child exits but parent doesn't wait(), shows as `<defunct>`

**Why it matters**: Prevents resource waste through proper reaping

### Environment
**What it is**: How process receives configuration and arguments
```c
int main(int argc, char *argv[]) {
    // argc: argument count
    // argv: argument vector (argv[0] is program name)
}

// Environment variables
char *path = getenv("PATH");
extern char **environ;  // Full environment array
```

**Why it matters**: How programs receive input and configuration

### Process Info
**What it is**: Querying process metadata
```c
pid_t pid = getpid();      // My process ID
pid_t ppid = getppid();    // Parent's PID
gid_t gid = getgid();      // Group ID
uid_t uid = getuid();      // User ID
```

**Why it matters**: Programs need to know their own identity

---

## 7. fork(), exec(), wait()

### fork() Semantics
**What it is**: Creating a new process by copying current one
```c
pid_t pid = fork();
if (pid == -1) {
    perror("fork");  // Error
} else if (pid == 0) {
    // Child process: gets 0
    // Child is exact copy of parent at fork() point
} else {
    // Parent process: gets child's PID
    // Both continue executing from fork() call
}
```

**Key insight**: Called once, returns twice (different values)

**Why it matters**: Foundation for multiprocessing in Unix

### fork() Memory Behavior
**What it is**: How memory is handled after fork()
- **Copy-on-write (COW)**: Parent and child share pages until one writes
  - Saves memory and time
  - When child writes to page, kernel creates copy
- **File descriptors**: Shared with child (same file offset!)
- **Signals**: Child inherits handlers

**Critical issue**: If parent and child both write to file, offsets interleave!

**Why it matters**: Understanding COW explains fork() efficiency

### exec() Family
**What it is**: Replacing current process with new program
```c
execl("/bin/ls", "ls", "-l", NULL);      // Never returns on success
execv("/bin/ls", argv);                  // argv[0] should be program name
execle("/bin/sh", "sh", "-c", cmd, NULL, env);  // With environment
execve("/bin/ls", argv, envp);           // Most flexible
```

**Key insight**: Never returns on success (process replaced!)

**Common pattern**: `fork()` then `exec()`
```c
pid_t pid = fork();
if (pid == 0) {
    execl("/bin/cat", "cat", "file.txt", NULL);  // Replace child
    perror("exec");  // Only reached if exec fails
    exit(1);
} else {
    wait(NULL);  // Wait for child
}
```

**Why it matters**: How programs launch other programs

### wait() Family
**What it is**: Parent waiting for child to exit
```c
int status;
pid_t pid = wait(&status);      // Wait for any child
pid_t pid = waitpid(child_pid, &status, WNOHANG);  // Wait for specific or nonblocking

// Check exit status
if (WIFEXITED(status)) {
    int code = WEXITSTATUS(status);  // Get exit code
}
```

**Critical**: Without waiting, child becomes zombie!

**Why it matters**: Proper resource cleanup

### Common Patterns
1. **fork-exec pattern**: Launch new program
2. **fork-and-forget**: Parent doesn't wait
3. **Daemon process**: Double fork to detach from terminal
4. **Process pool**: Fork N workers, distribute work

---

## 8. Signals & Signal Handling

### Signal Basics
**What it is**: Asynchronous notifications to processes
- **Hardware**: SIGSEGV (segmentation fault), SIGFPE (divide by zero)
- **Software**: SIGTERM (termination request), SIGINT (Ctrl+C)
- **IPC**: Custom signals between processes

**Key insight**: Interrupts normal execution flow

**Why it matters**: Graceful shutdown, interrupt handling

### Common Signals
| Signal | Number | Default | Meaning |
|--------|--------|---------|---------|
| SIGTERM | 15 | Terminate | Graceful termination request |
| SIGKILL | 9 | Terminate | Force kill (cannot be caught!) |
| SIGSEGV | 11 | Core dump | Segmentation fault |
| SIGINT | 2 | Terminate | Ctrl+C |
| SIGSTOP | 19 | Stop | Pause process (cannot be caught!) |
| SIGCONT | 18 | Continue | Resume process |
| SIGCHLD | 17 | Ignore | Child process change |
| SIGPIPE | 13 | Terminate | Write to closed pipe |

**Why it matters**: Knowing signals essential for robust code

### Signal Handling
**What it is**: Custom response to signals
```c
// Old way (not recommended, but may appear on exam)
void handler(int sig) {
    printf("Got signal %d\n", sig);  // WRONG! printf not signal-safe
}
signal(SIGTERM, handler);

// Better way
struct sigaction sa;
sa.sa_handler = handler;
sigemptyset(&sa.sa_mask);
sa.sa_flags = 0;
sigaction(SIGTERM, &sa, NULL);
```

**Default handlers**:
- `SIG_DFL`: Default action
- `SIG_IGN`: Ignore signal

**Why it matters**: Enables graceful shutdown and cleanup

### Signal-Safe Functions
**What it is**: Functions that can be safely called in signal handlers
**Signal-safe**:
- `write()`, `read()`
- `signal()`, `sigaction()`
- `exit()`, `_exit()`
- Simple arithmetic

**NOT signal-safe** (no malloc, printf, locks):
- `printf()`, `fprintf()`
- `malloc()`, `free()`
- `pthread_mutex_lock()`
- Any library function with internal locks

**Common bug**: Calling printf() in handler
```c
// ❌ WRONG
void handler(int sig) {
    printf("Signal received\n");  // Unsafe!
}

// ✅ Right
void handler(int sig) {
    write(STDOUT_FILENO, "Signal received\n", 16);  // Safe
}
```

**Why it matters**: Race conditions in signal handlers cause subtle bugs

### Signal Masking
**What it is**: Blocking/unblocking signals in critical sections
```c
sigset_t set;
sigemptyset(&set);
sigaddset(&set, SIGINT);
sigprocmask(SIG_BLOCK, &set, NULL);    // Block SIGINT
// ... critical section ...
sigprocmask(SIG_UNBLOCK, &set, NULL);  // Unblock SIGINT
```

**Why it matters**: Prevents interruption of critical sections

---

## 9. IPC (Inter-Process Communication)

### Pipes (Unnamed)
**What it is**: One-way communication channel
```c
int pipefd[2];
pipe(pipefd);  // pipefd[0] = read end, pipefd[1] = write end

// Parent writes, child reads
if (fork() == 0) {
    close(pipefd[1]);  // Child closes write end
    read(pipefd[0], buffer, 100);
} else {
    close(pipefd[0]);  // Parent closes read end
    write(pipefd[1], "hello", 5);
}
```

**Key properties**:
- Unidirectional (one-way)
- Limited size (~4KB buffer)
- EOF when all writers close
- Blocking I/O by default

**Why it matters**: Enables shell pipeline: `cmd1 | cmd2 | cmd3`

### Named Pipes (FIFOs)
**What it is**: Pipes with filesystem names
```c
mkfifo("/tmp/myfifo", 0666);

// Process A
int fd = open("/tmp/myfifo", O_WRONLY);
write(fd, "hello", 5);

// Process B (separate process)
int fd = open("/tmp/myfifo", O_RDONLY);
read(fd, buffer, 5);
```

**Advantages**:
- Can be used between unrelated processes
- Persists on filesystem
- Multiple readers/writers possible

**Why it matters**: More flexible than unnamed pipes

### Message Queues
**What it is**: Structured message passing
```c
int qid = msgget(1234, IPC_CREAT | 0666);
struct msgbuf { long type; char text[100]; } msg;

msgsnd(qid, &msg, sizeof(msg.text), 0);  // Send
msgrcv(qid, &msg, sizeof(msg.text), 0, 0);  // Receive
```

**Benefits**: Priority-based delivery, structured messages

### Shared Memory
**What it is**: Multiple processes accessing same memory region
```c
int shmid = shmget(1234, 1024, IPC_CREAT | 0666);
void *addr = shmat(shmid, NULL, 0);  // Attach
// Both processes can access *addr
shmdt(addr);  // Detach
```

**Fastest IPC** but requires synchronization (mutex)

### Semaphores (System V)
**What it is**: Counters for synchronizing processes
```c
int semid = semget(1234, 1, IPC_CREAT | 0666);
struct sembuf op;
op.sem_num = 0;
op.sem_op = -1;  // Wait (decrement)
op.sem_flg = 0;
semop(semid, &op, 1);
```

**Use cases**: Synchronize shared memory access, limit resource use

---

## 10. Concurrency & Threads

### Thread Basics
**What it is**: Lightweight processes sharing memory
```c
pthread_t tid;
pthread_create(&tid, NULL, thread_func, arg);
pthread_join(tid, NULL);  // Wait for thread
```

**Differences from processes**:
- Share memory (lighter weight)
- Separate stack per thread
- No fork() (can't copy)
- Much faster creation

**Why it matters**: Efficient concurrent programming

### Thread Creation
**What it is**: Starting new threads
```c
void *thread_func(void *arg) {
    int value = *(int*)arg;
    // Do work
    return NULL;  // or pthread_exit()
}

pthread_t tid;
int x = 42;
pthread_create(&tid, NULL, thread_func, &x);
```

**Detached vs Joinable**:
- **Joinable** (default): Parent must `pthread_join()` to clean up
- **Detached**: Automatically cleaned up on exit

**Why it matters**: Proper cleanup prevents resource leaks

### Thread Termination
**What it is**: How threads end
```c
// Option 1: Return from function
void *func(void *arg) {
    return NULL;  // Thread exits
}

// Option 2: Explicit exit
pthread_exit(NULL);

// Option 3: Parent terminates all threads
exit(0);  // All threads die
```

**Cleanup handlers**: Functions called on exit
```c
void cleanup(void *arg) { printf("Cleaning up\n"); }
pthread_cleanup_push(cleanup, NULL);
// ... work ...
pthread_cleanup_pop(1);  // 1 = execute handler
```

**Why it matters**: Proper cleanup of resources

### Thread Issues
**What it is**: Race conditions and synchronization problems
```c
int counter = 0;

// ❌ Race condition
void *increment(void *arg) {
    counter++;  // Read-modify-write, not atomic!
}
```

**Why it matters**: Same problem in different form

---

## 11. Synchronization Primitives

### Mutexes
**What it is**: Locks for exclusive access
```c
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

pthread_mutex_lock(&mutex);
// Critical section: only one thread at a time
counter++;
pthread_mutex_unlock(&mutex);
```

**Types**:
- **Normal**: Deadlock if same thread locks twice
- **Recursive**: Same thread can lock multiple times
- **Errorcheck**: Reports errors

**Gotchas**:
- Must always unlock (use cleanup handlers)
- Can deadlock if locks acquired in different order

**Why it matters**: Prevents race conditions

### Condition Variables
**What it is**: Synchronization for wait-notify patterns
```c
pthread_cond_t cond = PTHREAD_COND_INITIALIZER;
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

// Waiter thread
pthread_mutex_lock(&mutex);
while (!condition) {
    pthread_cond_wait(&cond, &mutex);  // Releases mutex while waiting
}
// Condition true, mutex locked
pthread_mutex_unlock(&mutex);

// Notifier thread
pthread_mutex_lock(&mutex);
// Change condition
pthread_cond_signal(&cond);  // Wake one waiter
// or pthread_cond_broadcast(&cond);  // Wake all waiters
pthread_mutex_unlock(&mutex);
```

**Key insight**: `cond_wait()` atomically unlocks mutex and waits

**Why it matters**: Efficient producer-consumer patterns

### POSIX Semaphores
**What it is**: Counters for resource control
```c
sem_t sem;
sem_init(&sem, 0, 1);      // Initialize to 1

sem_wait(&sem);  // Decrement (wait if 0)
// Critical section
sem_post(&sem);  // Increment
```

**Types**:
- **Binary**: Values 0 or 1 (like mutex)
- **Counting**: Any value (limit resources)

**Why it matters**: Resource pooling and rate limiting

### Deadlock Prevention
**What it is**: Avoiding circular wait conditions
```
Scenario: Thread A holds lock1, wants lock2
         Thread B holds lock2, wants lock1
         DEADLOCK!
```

**Prevention strategies**:
1. **Lock ordering**: Always acquire in same order
2. **Timeouts**: `pthread_mutex_timedlock()`
3. **Lock-free**: Use atomic operations instead
4. **Banker's algorithm**: Check before acquiring

**Why it matters**: Deadlock = hung program

---

## 12. Error Handling & Debugging

### errno & Error Codes
**What it is**: Thread-local variable indicating failure reason
```c
int fd = open("file.txt", O_RDONLY);
if (fd == -1) {
    perror("open");  // Prints: "open: No such file or directory"
    exit(1);
}
```

**Important notes**:
- errno is thread-local (each thread has own errno)
- Set only on error, never cleared automatically
- Different syscalls use different errno values

**Why it matters**: Proper error reporting

### Error Reporting
**What it is**: Telling user what went wrong
```c
// Use perror() for simple messages
if (fork() == -1) {
    perror("fork");
    exit(EXIT_FAILURE);
}

// Use strerror() for custom messages
if (open(...) == -1) {
    fprintf(stderr, "Cannot open: %s\n", strerror(errno));
}
```

**Why it matters**: Users need to understand failures

### Debugging Tools
**gdb** (GNU debugger):
```bash
gdb ./program
(gdb) break main          # Set breakpoint
(gdb) run arg1 arg2       # Run with arguments
(gdb) next                # Next line
(gdb) step                # Step into function
(gdb) continue            # Resume
(gdb) print variable      # Print value
(gdb) backtrace           # Show call stack
```

**valgrind** (memory checker):
```bash
valgrind --leak-check=full ./program
```

**strace** (syscall tracer):
```bash
strace ./program          # Show all syscalls
strace -e read,write ./program  # Filter syscalls
```

**Why it matters**: Essential tools for production debugging

### Testing Strategies
- **Unit tests**: Test individual functions
- **Integration tests**: Test component interactions
- **Edge cases**: Test boundaries (empty, NULL, max values)
- **Error injection**: Force error paths
- **Race condition detection**: Thread sanitizers

---

## Summary Map

```
C FUNDAMENTALS (prerequisite for everything)
    ↓
MEMORY MANAGEMENT (understand pointers, allocation)
    ↓
POINTERS & ARRAYS (foundation for data structures)
    ↓
FILE I/O (both library and syscalls)
    ↓
SYSTEM CALLS (understand OS interface)
    ↓
PROCESSES (fork, exec, wait)
    ↓
SIGNALS (asynchronous communication)
    ↓
IPC (between-process communication)
    ↓
THREADS (lightweight concurrency)
    ↓
SYNCHRONIZATION (thread-safe code)
```

---

**Last Updated**: February 1, 2026
**For Exam Prep**: Understand these concepts, don't just memorize APIs!
