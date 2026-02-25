# CSC209 Midterm - Quick Reference Cheat Sheet

> **Use this during study sessions** - Print it out or keep it open while reviewing

---

## 🔴 CRITICAL CONCEPTS (Most Heavily Tested)

### Memory Errors - Know These Cold!

```c
// ❌ WRONG: Returning stack pointer
int *func() {
    int arr[10];
    return arr;  // WRONG!
}

// ❌ WRONG: Uninitialized pointer
char *str;
strcpy(str, "hello");  // WRONG! Where does it write?

// ❌ WRONG: Double free
free(p);
free(p);  // CRASH!

// ❌ WRONG: Memory leak
char *s = malloc(100);
s = "hello";  // Lost pointer! Leak!

// ❌ WRONG: No bounds checking
strcpy(name, input);  // If input > name, overflow!
```

### Pointer Operators

```c
int x = 5;
int *p = &x;      // p holds ADDRESS of x
*p = 10;           // Dereference: change x to 10
printf("%p", p);   // Print address: 0x7fff...
printf("%d", *p);  // Print value: 10
```

### Malloc Pattern

```c
// ALWAYS do this:
int *arr = malloc(n * sizeof(int));
if (arr == NULL) {
    printf("Out of memory\n");
    return;
}
// Use arr...
free(arr);
arr = NULL;  // Good practice
```

---

## 📚 QUICK LOOKUPS

### String Functions (stdlib)

| Function | Safe? | Usage |
|----------|-------|-------|
| `strlen(s)` | ✅ | Get length (NOT including \0) |
| `strcpy(d,s)` | ❌ | NO! Use strncpy |
| `strncpy(d,s,n)` | ✅ | Copy max n chars, add \0 manually |
| `strcat(d,s)` | ❌ | NO! Use strncat |
| `strncat(d,s,n)` | ✅ | Append max n chars |
| `strcmp(s1,s2)` | ✅ | Compare strings |
| `strchr(s,c)` | ✅ | Find character |

### Memory Functions (stdlib)

```c
void *malloc(size_t size);              // Allocate (check for NULL!)
void *calloc(size_t n, size_t size);    // Allocate + zero-initialize
void *realloc(void *ptr, size_t size);  // Resize allocation
void free(void *ptr);                   // Deallocate
```

### File Permissions (Binary)

```
r w x  |  r w x  |  r w x
4 2 1  |  4 2 1  |  4 2 1
User   |  Group  |  Other
─────────────────────────
rwx = 7
rw- = 6
r-x = 5
r-- = 4
-wx = 3
-w- = 2
--x = 1
--- = 0

755 = rwxr-xr-x (common for executables)
644 = rw-r--r-- (common for files)
700 = rwx------ (private)
```

### Shell Commands Quick Ref

```bash
# Navigation & Files
ls -l                   # List with permissions
cd path                 # Change directory
cd ..                   # Go up one level
cd /                    # Go to root
pwd                     # Print working directory

# Permissions
chmod 755 file         # Set to rwxr-xr-x
chmod u+x file         # Add execute for owner
chmod g+r file         # Add read for group
chmod u-w file         # Remove write for owner

# Text processing
grep "pattern" file    # Find lines with pattern
wc -l file            # Count lines
cut -d: -f1 file      # Extract column 1 (delimiter :)
cat file1 | grep x    # Pipe output through grep

# I/O redirection
prog > file           # Redirect stdout to file
prog < file           # Redirect stdin from file
prog 2> errors.txt    # Redirect stderr
prog | grep x         # Pipe stdout to grep

# Compilation
gcc -Wall -std=gnu99 -o prog prog.c   # Compile with warnings
gcc -g -o prog prog.c                  # Compile for debugging
```

---

## 🧠 MEMORY LAYOUT (Draw This!)

```
┌──────────────────────────────────────┐
│ CODE SEGMENT (executable)            │
├──────────────────────────────────────┤
│ GLOBAL DATA (initialized & BSS)      │
│ - Global variables                   │
│ - Static variables                   │
├──────────────────────────────────────┤
│                                      │
│ HEAP (malloc allocations)            │
│ ↑ Grows upward                       │
├──────────────────────────────────────┤
│ (Free space)                         │
├──────────────────────────────────────┤
│ ↓ Grows downward                     │
│ STACK (local variables, args)        │
│ - Function parameters                │
│ - Local variables                    │
│ - Return addresses                   │
└──────────────────────────────────────┘
```

---

## 🔍 SPOTTING BUGS (Exam Trick Questions)

### Type 1: Memory Not Allocated

```c
// ❌ ALWAYS catches students
char *str;
strcpy(str, "hello");  // Uninitialized! Random address!
```

**Fix:** Allocate or use array
```c
char *str = malloc(10);  // NOW it points to valid memory
// OR
char str[10];            // Stack array
```

### Type 2: Buffer Overflow

```c
// ❌ String "Hello World!" is 13 chars + null = 14 bytes
char name[12];
strcpy(name, "Hello World!");  // Writes 14 bytes into 12 bytes!
```

**Fix:** Use strncpy with bounds
```c
strncpy(name, "Hello World!", 11);
name[11] = '\0';
```

### Type 3: Using Freed Memory

```c
// ❌ USE-AFTER-FREE
int *p = malloc(100);
free(p);
printf("%d", p[0]);  // Reading freed memory!
```

**Fix:** Don't access after free
```c
int *p = malloc(100);
printf("%d", p[0]);  // Use it
free(p);
p = NULL;
// Don't touch p anymore!
```

### Type 4: Freeing Wrong Number of Times

```c
// ❌ DOUBLE FREE
char **tokens = split("a:b:c");  // tokens[0]="a", tokens[1]="b", tokens[2]="c"
free(tokens);      // Frees array, but NOT the strings!
// Now tokens[0], tokens[1], tokens[2] are dangling pointers!
```

**Fix:** Free contents first
```c
// Assuming tokens[3] = NULL (sentinel)
for (int i = 0; tokens[i] != NULL; i++) {
    free(tokens[i]);  // Free each string
}
free(tokens);         // Then free array
```

### Type 5: Returning Stack Variable Pointer

```c
// ❌ DANGEROUS
int *make_array() {
    int arr[10];     // Stack variable!
    return arr;      // Pointer becomes invalid when function returns
}

int main() {
    int *p = make_array();
    printf("%d", p[0]);  // Undefined behavior!
}
```

**Fix:** Allocate on heap
```c
int *make_array() {
    int *arr = malloc(10 * sizeof(int));  // Heap - persists!
    return arr;
}

int main() {
    int *p = make_array();
    printf("%d", p[0]);  // Safe!
    free(p);             // Don't forget!
}
```

---

## ⚡ POINTER ARITHMETIC RULES

```c
int arr[5] = {10, 20, 30, 40, 50};
int *p = arr;  // p = &arr[0]

// ADDITION SCALES BY TYPE SIZE
p + 1       → Points 4 bytes forward (for int*), lands on arr[1]
p + 2       → Points 8 bytes forward, lands on arr[2]
p[i]        → Same as *(p + i)
*(p + 3)    → arr[3] = 40

// SUBTRACTION
(p + 2) - p → Returns 2 (distance in array elements, not bytes!)

// CHAR POINTER (1 byte per type)
char *cp = (char *)arr;
cp + 1      → Points 1 byte forward
cp + 4      → Points 4 bytes forward (to next int boundary)
```

---

## 🏗️ STRUCT PATTERNS

### Allocating a Struct

```c
struct Person {
    char *name;
    int age;
};

// ✅ CORRECT: Allocate struct
struct Person *p = malloc(sizeof(struct Person));
if (p == NULL) return;

// ✅ CORRECT: Allocate string inside struct
p->name = malloc(50);
strcpy(p->name, "Alice");

p->age = 25;

// ✅ CORRECT: Cleanup (inner first!)
free(p->name);
free(p);
```

### Deep Copy

```c
// ❌ WRONG: Shallow copy (both point to same memory)
struct Person copy = original;  // Just copies pointers!

// ✅ RIGHT: Deep copy (allocate new memory)
struct Person copy;
copy.age = original.age;
copy.name = malloc(strlen(original.name) + 1);
strcpy(copy.name, original.name);  // New memory!
```

### Struct Alignment (Memory Padding)

```c
struct Bad {
    char c;      // 1 byte + 3 padding
    int i;       // 4 bytes
    char c2;     // 1 byte + 3 padding
};
// Total: 12 bytes (not 6!)

struct Good {
    int i;       // 4 bytes
    char c;      // 1 byte
    char c2;     // 1 byte
    // 2 padding
};
// Total: 8 bytes (better!)
```

**Rule:** Larger types first to minimize padding.

---

## 📝 EXAM FORMAT EXPECTATIONS

### Short Answer
- "What's printed?" → Trace execution step-by-step
- "Identify the error" → Name the error type (buffer overflow, use-after-free, etc.)
- "Fix this code" → Rewrite with safe functions

### Code Trace
```c
int main() {
    int x = 5, y = 10;
    int *p = &x, *q = &y;
    *p = *q;
    *q = 20;
    printf("%d %d\n", x, y);
}
// Trace: x=10, y=20
// Output: 10 20
```

### Pointer Arithmetic
- Know that `p + 1` scales by sizeof(type)
- `a[i]` is `*(a + i)`
- Difference `p - q` is in elements, not bytes

### Memory Errors
- Stack pointer → Use malloc
- Uninitialized pointer → Allocate or initialize
- No bounds check → Use size-limited function
- Free twice → Don't!
- Free, then use → Don't!

---

## ✅ PRE-EXAM CHECKLIST

- [ ] Can you trace pointer code by hand?
- [ ] Can you identify malloc/free mistakes?
- [ ] Can you convert chmod between octal/symbolic?
- [ ] Can you write safe string functions (strncpy)?
- [ ] Can you allocate/deallocate structs with pointers?
- [ ] Can you use pipes and redirection?
- [ ] Can you spot buffer overflows?
- [ ] Do you check malloc() return value?

---

## 🎓 FINAL WORDS

> **The exam tests understanding, not memorization.**

Focus on:
1. **Why** something is wrong (not just that it is)
2. **How to fix** it (not just spotting it)
3. **Drawing diagrams** (stack/heap, pointers, memory)
4. **Tracing execution** (step by step, carefully)

You've got this! 🚀

---

**Last Updated:** February 2, 2026
**Keep this handy during study!**
