# CSC209 Quick Reference Card

## System Calls Cheat Sheet

### Process Management
| Function | Signature | Returns | Use |
|----------|-----------|---------|-----|
| `fork()` | `pid_t fork(void)` | PID (child) / 0 (parent) / -1 (error) | Create new process |
| `exec*()` | `int exec*(const char *path, ...)` | -1 on error (never returns on success) | Replace process image |
| `wait()` | `pid_t wait(int *status)` | PID of child / -1 on error | Wait for child termination |
| `exit()` | `void exit(int status)` | N/A | Terminate process |
| `getpid()` | `pid_t getpid(void)` | Current process ID | Get own PID |
| `getppid()` | `pid_t getppid(void)` | Parent process ID | Get parent PID |

### File I/O (System Level)
| Function | Signature | Returns | Use |
|----------|-----------|---------|-----|
| `open()` | `int open(const char *path, int flags, ...)` | File descriptor / -1 | Open file |
| `close()` | `int close(int fd)` | 0 / -1 | Close file |
| `read()` | `ssize_t read(int fd, void *buf, size_t count)` | Bytes read / -1 | Read from file |
| `write()` | `ssize_t write(int fd, const void *buf, size_t count)` | Bytes written / -1 | Write to file |
| `lseek()` | `off_t lseek(int fd, off_t offset, int whence)` | New offset / -1 | Seek in file |
| `dup()` / `dup2()` | `int dup(int oldfd)` | New FD / -1 | Duplicate file descriptor |

### Signals
| Function | Signature | Use |
|----------|-----------|-----|
| `signal()` | `void (*signal(int signum, void (*handler)(int)))(int)` | Set signal handler |
| `sigaction()` | `int sigaction(int signum, const struct sigaction *act, ...)` | Better signal handling |
| `kill()` | `int kill(pid_t pid, int sig)` | Send signal to process |
| `pause()` | `int pause(void)` | Wait for signal |
| `sigprocmask()` | `int sigprocmask(int how, const sigset_t *set, ...)` | Change signal mask |

### Pipes & IPC
| Function | Signature | Returns | Use |
|----------|-----------|---------|-----|
| `pipe()` | `int pipe(int pipefd[2])` | 0 / -1 | Create pipe |
| `mkfifo()` | `int mkfifo(const char *pathname, mode_t mode)` | 0 / -1 | Create named pipe |
| `socket()` | `int socket(int domain, int type, int protocol)` | Socket FD / -1 | Create socket |

### Threads
| Function | Signature | Returns | Use |
|----------|-----------|---------|-----|
| `pthread_create()` | `int pthread_create(pthread_t *thread, ...)` | 0 / errno | Create thread |
| `pthread_join()` | `int pthread_join(pthread_t thread, void **retval)` | 0 / errno | Wait for thread |
| `pthread_mutex_lock()` | `int pthread_mutex_lock(pthread_mutex_t *mutex)` | 0 / errno | Acquire mutex |
| `pthread_mutex_unlock()` | `int pthread_mutex_unlock(pthread_mutex_t *mutex)` | 0 / errno | Release mutex |
| `pthread_cond_wait()` | `int pthread_cond_wait(...)` | 0 / errno | Wait on condition |
| `pthread_cond_signal()` | `int pthread_cond_signal(...)` | 0 / errno | Signal condition |

---

## Error Handling

### Standard Pattern
```c
if (syscall() == -1) {
    perror("syscall_name");  // Prints: syscall_name: Error message
    // OR
    fprintf(stderr, "Error: %s\n", strerror(errno));
    exit(EXIT_FAILURE);
}
```

### Common Return Values
- **0**: Success
- **Positive**: Success (specific value may have meaning)
- **-1**: Error (check `errno`)
- **NULL**: Error for pointer-returning functions

---

## Memory Management

### Allocation & Deallocation
```c
// Allocate
void *ptr = malloc(size);      // Uninitialized
void *ptr = calloc(n, size);   // Zero-initialized
void *ptr = realloc(ptr, new_size);

// Free
free(ptr);
ptr = NULL;  // Good practice
```

### Pointer Arithmetic
```c
int *p = ...;
int arr[10] = ...;

p + 1;      // Next element
*(p + 1);   // Value at next element
p[i];       // Same as *(p + i)
&arr[i];    // Address of element i
```

---

## File Descriptors

### Standard FDs
| FD | Name | Purpose |
|----|------|---------|
| 0 | stdin | Standard input |
| 1 | stdout | Standard output |
| 2 | stderr | Standard error |

### open() Flags
- `O_RDONLY` - Read only
- `O_WRONLY` - Write only
- `O_RDWR` - Read and write
- `O_CREAT` - Create if doesn't exist
- `O_EXCL` - Fail if exists
- `O_APPEND` - Append to end
- `O_TRUNC` - Truncate file

---

## Process States

```
Created → Running → Sleeping → Zombie → Terminated
         ↓         ↑
      Stopped
```

- **Running**: Executing on CPU
- **Sleeping**: Waiting for I/O or event
- **Stopped**: Suspended (SIGSTOP)
- **Zombie**: Terminated but parent hasn't reaped

---

## Signal Numbers (Common)

| Signal | Number | Default | Use |
|--------|--------|---------|-----|
| `SIGTERM` | 15 | Terminate | Graceful shutdown |
| `SIGKILL` | 9 | Terminate | Force kill (can't catch) |
| `SIGSEGV` | 11 | Core dump | Segmentation fault |
| `SIGINT` | 2 | Terminate | Ctrl+C |
| `SIGSTOP` | 19 | Stop | Pause process |
| `SIGCONT` | 18 | Continue | Resume process |
| `SIGCHLD` | 17 | Ignore | Child process event |
| `SIGPIPE` | 13 | Terminate | Write to closed pipe |

---

## Mutex/Synchronization

### Deadlock Prevention
1. **Lock Ordering**: Always acquire locks in same order
2. **Timeouts**: Use `pthread_mutex_timedlock()`
3. **Lock-Free**: Consider atomic operations
4. **Banker's Algorithm**: For multiple resources

### Race Condition Signs
- Non-deterministic behavior
- Different results on repeated runs
- Timing-dependent failures
- intermittent crashes

---

## Common Pitfalls ⚠️

### 1. Forgetting to check return values
```c
// ❌ Bad
write(fd, buf, len);

// ✅ Good
if (write(fd, buf, len) == -1) {
    perror("write");
}
```

### 2. Memory leaks
```c
// ❌ Bad
for (int i = 0; i < 100; i++) {
    char *s = malloc(50);
    // Missing free
}

// ✅ Good
char *s = malloc(50);
// ... use s ...
free(s);
s = NULL;
```

### 3. Off-by-one in loops/arrays
```c
// ❌ Bad
for (int i = 0; i <= len; i++) arr[i];

// ✅ Good
for (int i = 0; i < len; i++) arr[i];
```

### 4. Forgetting to reap children
```c
// ❌ Bad - creates zombies
fork();
// missing wait()

// ✅ Good
pid_t pid = fork();
if (pid == 0) {
    exit(0);
} else {
    wait(NULL);
}
```

### 5. Signal handler issues
```c
// ❌ Bad - not signal-safe
void handler(int sig) {
    printf("Got signal\n");  // malloc inside!
}

// ✅ Good - only signal-safe functions
void handler(int sig) {
    write(STDOUT_FILENO, "Got signal\n", 11);
}
```

---

## Study Tips

1. **Practice writing code** from scratch
2. **Trace execution** - follow programs step-by-step
3. **Understand return values** - they contain important info
4. **Know error cases** - most questions test error handling
5. **Review man pages** - exact specifications matter
6. **Write test cases** - especially edge cases

---

**Last Updated**: February 1, 2026
