# CSC209 Midterm Prep Guide

> **Exam Focus**: UNIX systems, C fundamentals, memory management, pointers, and data structures
> **Study Strategy**: Understand concepts deeply, not just memorize APIs. Practice tracing code execution.

---

## 📋 EXAM OVERVIEW

### Topics Covered
1. **UNIX Systems & Shell** (15-20%)
   - File system, permissions, shell commands
   - Redirection and piping

2. **C Fundamentals** (20-25%)
   - Compilation, pointers, arrays
   - Basic syntax and control flow

3. **Memory Management** (25-35%) ⭐ **HEAVILY TESTED**
   - Stack vs Heap
   - malloc/free, memory errors
   - Pointers and dereferencing

4. **Data Types & Structures** (20-25%)
   - Strings and buffer overflow
   - Struct definition and alignment
   - Arrays and pointer arithmetic

---

## 🔧 PART 1: UNIX SHELL & SYSTEM COMMANDS

### 1.1 Key Shell Commands You Need

| Command | Purpose            | Common Usage                                   |
| ------- | ------------------ | ---------------------------------------------- |
| `ls`    | List files         | `ls -l` (detailed), `ls -a` (hidden)           |
| `cd`    | Change directory   | `cd ..` (parent), `cd /` (root), `cd ~` (home) |
| `cp`    | Copy files         | `cp source dest`                               |
| `mv`    | Move/rename        | `mv old new`                                   |
| `rm`    | Remove files       | `rm file` or `rm -r dir` (recursive)           |
| `cat`   | Display file       | `cat file`                                     |
| `grep`  | Search text        | `grep pattern file`                            |
| `wc`    | Word/line count    | `wc -l file` (lines), `wc -c` (bytes)          |
| `cut`   | Extract columns    | `cut -d: -f1 file`                             |
| `diff`  | Compare files      | `diff file1 file2`                             |
| `chmod` | Change permissions | `chmod 755 file` or `chmod u+x file`           |

### 1.2 Compilation with gcc

```bash
# Standard compile command
gcc -Wall -std=gnu99 -o output_name source.c

# Flags explained:
-Wall           # Show all warnings
-std=gnu99      # Use C99 standard (sometimes gnu99 or c99)
-o output_name  # Name the executable
-g              # Include debug symbols (for gdb/valgrind)
```

**Exam Question Example:**
- Q: "Compile args.c with all warnings and C99 standard"
- A: `gcc -Wall -std=gnu99 -o args args.c`

### 1.3 File I/O Redirection & Piping

#### Redirection
```bash
# stdout redirect (>)
./program > output.txt       # Save output to file
./program >> output.txt      # Append to file

# stdin redirect (<)
./program < input.txt        # Read from file instead of keyboard

# stderr redirect (2>)
./program 2> errors.txt      # Redirect errors to file
```

#### Piping (|)
```bash
# Chain commands

# 1. Pipe output of my_prog into wc
./my_prog 3 | wc    
# 2. Find "pattern" in file         
cat file | grep "pattern"    
# 3. List C source files only
ls -l | grep ".c"            
```

**Key Insight**: Programs like `wc`, `grep`, `cut` read from **stdin** if no file is specified, making them ideal for pipes.

**Exam Questions:**
1. Q: "Write a command to run my_prog with argument 3 and pipe to wc"
   - A: `./my_prog 3 | wc`

2. Q: "Write a command to run guess with arguments 1 and 5, taking input from file1.txt"
   - A: `./guess 1 5 < file1.txt`

### 1.4 File Permissions

#### Permission Bits (Octal Notation)

```
read (r)    = 4
write (w)   = 2
execute (x) = 1
```

#### Three Categories
```
User (owner) | Group | Others
    7        |   5   |   5     (example: 755)
```

#### What Each Permission Means

| Permission | File | Directory |
|-----------|------|-----------|
| **read (r)** | View/cat file | List files (ls) |
| **write (w)** | Modify file | Add/delete files |
| **execute (x)** | Run as program | Traverse/cd into it |

#### Permission Table

```bash
# File permissions example: -rwxr-xr-x (755)
# Owner:     rwx (4+2+1 = 7)
# Group:     r-x (4+0+1 = 5)
# Others:    r-x (4+0+1 = 5)

chmod 755 file   # Owner: full access, Group/Others: read+execute
chmod 644 file   # Owner: rw-, Group/Others: r--
chmod 700 file   # Owner: rwx, Group/Others: ---
```

#### Symbolic Notation

```bash
chmod u+x file        # Add execute for user
chmod g+r file        # Add read for group
chmod o-x file        # Remove execute for others
chmod a+r file        # Add read for all
chmod u+rwx,go-rwx    # Owner gets all, others get none
```

**Exam Questions:**

1. Q: "Convert rwxr-xrw- to octal"
   - A: `756` (User: 7, Group: 5, Other: 6)

2. Q: "Write chmod command to set rwxr-xrw-"
   - A: `chmod 756 file`

3. Q: "Add read permission for group to card.pdf"
   - A: `chmod g+r card.pdf`

4. Q: "Which directories can be modified (write) by owner only?"
   - A: Look for `rwx------` or similar (write bit only for user)

### 1.5 Paths: Absolute vs Relative

```bash
# Absolute path (starts with /)
/u/najess/test      # From root directory
/home/user/file.c

# Relative path (from current location)
test                # File in current directory
../test             # One level up, then test
./test              # Current directory, then test
```

**Key Concept**: To access a file, you need **execute (x)** permission on **every parent directory** in the path!

---

## 💾 PART 2: C FUNDAMENTALS & POINTERS

### 2.1 Pointers Explained

#### Concept: Address vs Value

```c
int x = 5;           // x holds the VALUE 5
int *p = &x;         // p holds the ADDRESS of x

// Operators:
&x                   // "address of" operator (get address)
*p                   // "dereference" operator (get value at address)

printf("%d", x);     // Prints: 5
printf("%d", *p);    // Prints: 5 (same thing!)
printf("%p", p);     // Prints: 0x7fff... (memory address)
```

#### Pointer Arithmetic

```c
int arr[] = {10, 20, 30, 40};
int *p = arr;        // p points to arr[0]

p + 1                // Points to arr[1] (advances by sizeof(int) = 4 bytes)
p + 2                // Points to arr[2]

*(p + 1)             // Value at arr[1] = 20
p[2]                 // Same as *(p+2) = 30 (array indexing syntax)

p - arr              // Returns 0 (pointer difference)
(p + 1) - p          // Returns 1
```

```c
*p      = p[0]      // First row
p[0]    = *(p+0)    // Row 0
p[1]    = *(p+1)    // Row 1

*(*p)   = p[0][0]   // First element of row 0
*(*p+1) = p[0][1]   // Second element of row 0
**(p+1) = p[1][0]   // First element of row 1
```
**Critical Insight**: `a[i]` is syntactic sugar for `*(a + i)`

### 2.2 Arrays and Decay

```c
int arr[3] = {10, 20, 30};

// arr "decays" to a pointer to its first element
int *p = arr;        // Valid! arr becomes &arr[0]

// But:
arr = other_arr;     // ERROR! Cannot reassign array name
```

### 2.3 Null Pointer

```c
int *p = NULL;       // Special value meaning "no address"

if (p == NULL) {
    printf("Pointer is uninitialized\n");
}

// Always check pointers from malloc()!
```

---

## 🧠 PART 3: MEMORY MANAGEMENT (⭐ EXAM FOCUS)

### 3.1 Memory Layout Diagram

```
┌─────────────────────────────────────────┐
│ Code Segment (Read-only)                │
│ - Your executable instructions          │
├─────────────────────────────────────────┤
│ Global/Static Data                      │
│ - Global variables                      │
├─────────────────────────────────────────┤
│ HEAP (grows upward)                     │
│ - malloc() allocations                  │
│ - Dynamic data structures               │
│                                         │
├─────────────────────────────────────────┤
│ (Free space)                            │
│                                         │
├─────────────────────────────────────────┤
│ STACK (grows downward)                  │
│ - Local variables                       │
│ - Function arguments                    │
│ - Return addresses                      │
└─────────────────────────────────────────┘
```

### 3.2 Stack vs Heap

| Feature        | Stack                                | Heap                           |
| -------------- | ------------------------------------ | ------------------------------ |
| **Speed**      | Very fast (simple pointer increment) | Slower (manager tracks blocks) |
| **Size**       | Limited (~1-8 MB)                    | Large (~GBs available)         |
| **Management** | Automatic (function scope)           | Manual (malloc/free)           |
| **Lifetime**   | Until function returns               | Until you free()               |
| **Errors**     | Stack overflow (infinite recursion)  | Memory leak, fragmentation     |

### 3.3 Common Memory Errors

#### ❌ ERROR 1: Return Stack Pointer

```c
// ❌ WRONG
int *get_array() {
    int arr[10];     // Local array on STACK
    return arr;      // Returns pointer to stack memory
}

int main() {
    int *p = get_array();
    printf("%d", p[0]);  // UNDEFINED BEHAVIOR!
    // Stack frame was deallocated, memory may be overwritten
}
```

**Fix**: Allocate on heap
```c
// ✅ RIGHT
int *get_array() {
    int *arr = malloc(10 * sizeof(int));  // On HEAP
    return arr;      // Safe!
}

int main() {
    int *p = get_array();
    printf("%d", p[0]);  // Works!
    free(p);             // Don't forget!
}
```

#### ❌ ERROR 2: Memory Leak

```c
// ❌ WRONG
int *p = malloc(100);
p = malloc(200);     // Lost first allocation! Leak!
free(p);             // Only frees second block
```

**Fix**: Free before reallocating
```c
// ✅ RIGHT
int *p = malloc(100);
free(p);
p = malloc(200);
free(p);
```

#### ❌ ERROR 3: Double Free

```c
// ❌ WRONG
int *p = malloc(100);
free(p);
free(p);  // ERROR! Freeing same memory twice
```

**Fix**: Set to NULL after freeing
```c
// ✅ RIGHT
int *p = malloc(100);
free(p);
p = NULL;  // Mark as invalid
// if (p) { free(p); }  // Safe check
```

#### ❌ ERROR 4: Use-After-Free

```c
// ❌ WRONG
int *p = malloc(100);
free(p);
printf("%d", *p);  // ERROR! Accessing freed memory
```

**Fix**: Don't use after freeing
```c
// ✅ RIGHT
int *p = malloc(100);
p[0] = 42;
free(p);
p = NULL;
// Don't use p anymore!
```

### 3.4 Malloc & Free

```c
// Allocate
int *p = malloc(10 * sizeof(int));  // 10 ints
if (p == NULL) {
    printf("Allocation failed\n");
    return;
}

// Use
p[0] = 42;
p[1] = 99;

// Deallocate
free(p);
p = NULL;  // Good practice
```

**Always check malloc() return value!**

---

## 🔤 PART 4: STRINGS & BUFFERS

### 4.1 String Basics

```c
// String = null-terminated array of chars
char str[] = "hello";   // {'h','e','l','l','o','\0'} = 6 bytes!

strlen("hello");        // Returns 5 (NOT including null terminator!)
sizeof("hello");        // Returns 6 (includes null terminator)
```

### 4.2 String Functions (Dangerous!)

#### strcpy - DANGEROUS! (No bounds checking)

```c
// ❌ WRONG
char name[12];
strcpy(name, "Hello");  // Works (only 6 bytes)
strcpy(name, "This is a very long string");  // BUFFER OVERFLOW!
```

#### strncpy - Safer

```c
// ✅ RIGHT
char name[12];
strncpy(name, "Hello", 11);  // Copy max 11 chars (leave 1 for null)
name[11] = '\0';              // Manually add null terminator!
```

**⚠️ Important**: `strncpy()` does NOT automatically add null terminator!

### 4.3 Buffer Overflow Vulnerability

```c
// ❌ VULNERABLE CODE
void get_password(char *password) {
    char buffer[8];
    strcpy(buffer, password);   // User can overflow!
}

// If user passes 20 characters, they overflow buffer
// and can overwrite function return address = RCE!
```

**Safe version:**
```c
// ✅ SAFE CODE
void get_password(char *password) {
    char buffer[8];
    strncpy(buffer, password, 7);
    buffer[7] = '\0';
}
```

### 4.4 String Memory Issues

```c
// ❌ WRONG: Uninitialized string
char *str;
strcpy(str, "hello");  // Where does it copy to? Unknown address!

// ✅ RIGHT: Allocate first
char *str = malloc(100);
strcpy(str, "hello");
free(str);

// ✅ RIGHT: Stack allocation
char str[100];
strcpy(str, "hello");  // Safe (within bounds)
```

---

## 🏗️ PART 5: STRUCTS & ALIGNMENT

### 5.1 Struct Basics

```c
struct Course {
    char *code;      // Pointer to string (8 bytes on 64-bit)
    int capacity;    // Integer (4 bytes)
    int num_enrolled; // Integer (4 bytes)
};
// Total: 8 + 4 + 4 = 16 bytes (on 64-bit system)
```

### 5.2 Accessing Struct Members

```c
// Stack allocation
struct Course c;
c.code = "CSC209";      // Dot notation
c.capacity = 100;

// Heap allocation
struct Course *p = malloc(sizeof(struct Course));
p->code = "CSC209";     // Arrow notation for pointers
p->capacity = 100;

// Alternative (less common)
(*p).code = "CSC209";   // Equivalent
```

### 5.3 Deep Copy Problem

```c
// ❌ WRONG: Shallow copy
struct Course c1;
c1.code = malloc(20);
strcpy(c1.code, "CSC209");

struct Course c2 = c1;    // Shallow copy!
// c1.code and c2.code point to SAME memory!

free(c1.code);
// Now c2.code points to freed memory!
```

**Fix: Deep copy**
```c
// ✅ RIGHT: Deep copy
struct Course copy_course(struct Course original) {
    struct Course copy;
    copy.capacity = original.capacity;
    copy.num_enrolled = original.num_enrolled;

    // Deep copy the string
    copy.code = malloc(strlen(original.code) + 1);
    strcpy(copy.code, original.code);

    return copy;
}
```

### 5.4 Memory Alignment (Advanced)

```c
struct Bad {
    char c;           // 1 byte
                      // 3 bytes padding (to align next int)
    int i;            // 4 bytes
    char c2;          // 1 byte
                      // 3 bytes padding
    int i2;           // 4 bytes
};
// Total: 1 + 3 + 4 + 1 + 3 + 4 = 16 bytes (NOT 10!)

struct Good {
    int i;            // 4 bytes
    int i2;           // 4 bytes
    char c;           // 1 byte
    char c2;          // 1 byte
                      // 2 bytes padding
};
// Total: 4 + 4 + 1 + 1 + 2 = 12 bytes (better!)
```

**Key Insight**: The compiler adds padding to align data on boundaries. Larger members determine alignment.

---

## 🧪 PRACTICE EXAM QUESTIONS

### Question 1: Pointer Arithmetic

```c
int main() {
    int i = 2;
    int j = 30;
    int a[3];
    int *p;

    p = &i;          // Line A
    j = *p;          // Line B
    *p = 1;          // Line C

    a[0] = 10;
    a[1] = 12;
    a[i] = 11;       // Line D
    return 0;
}
// j = 2
i = 1
a = {10, 11}
```

**What are the final values?**

**Answer:**
Actually, let me trace this carefully:
1. `p = &i;` → p points to i (value 2)
2. `j = *p;` → j = 2
3. `*p = 1;` → i = 1 (changed!)
4. `a[0] = 10;`
5. `a[1] = 12;`
6. `a[i] = 11;` → Since i is now 1, this is a[1] = 11 (overwrites the 12)

**Final: j=2, a[0]=10, a[1]=11, a[2]=uninitialized**

---

### Question 2: Stack vs Heap Error

```c
int *make_array() {
    int arr[10];
    arr[0] = 5;
    return arr;  // ERROR: Returning pointer to local variable!
}

int main() {
    int *p = make_array();
    printf("%d\n", p[0]);  // Undefined behavior!
}
```

**How to fix:**

```c
int *make_array() {
    int *arr = malloc(10 * sizeof(int));
    arr[0] = 5;
    return arr;
}

int main() {
    int *p = make_array();
    printf("%d\n", p[0]);  // Safe!
    free(p);
}
```

---

### Question 3: String Buffer Overflow

**Which are safe? Which are unsafe?**

```c
// A: Unsafe
char name[12];
strcpy(name, "Hello");  // strcpy doesn't check bounds!

// B: Safe
char line[30];
strncat(line, argv[4], 29 - strlen(line));  // Bounds-checked

// C: Unsafe
char name[12];
strncpy(name, "Hello World!", 11);  // Missing null terminator!
printf("%s", name);

// D: Safe
char name[12];
strncpy(name, "Hello", 11);
name[11] = '\0';
printf("%s", name);
```

---

### Question 4: Malloc/Free Sequence

```c
char **tokens = split("hello.world");
// tokens[0] = "hello"
// tokens[1] = "world"

// ❌ WRONG cleanup:
free(tokens);  // Frees array but NOT the strings!

// ✅ RIGHT cleanup:
free(tokens[0]);  // Free "hello"
free(tokens[1]);  // Free "world"
free(tokens);     // Free the array itself
```

**Key:** Free inner allocations before outer container!

---

### Question 5: Chmod Permissions

**Convert these to octal:**
- `rwxr-xr-x` → `755`
- `rw-r--r--` → `644`
- `rwx------` → `700`

**Write chmod commands:**
- Q: "Set rwxr-xrw-"
- A: `chmod 756 file`

- Q: "Add execute for owner to script.sh"
- A: `chmod u+x script.sh`

---

## 📚 STUDY TIPS

### Things to Memorize
- ✅ Pointer operators: `&` (address) and `*` (dereference)
- ✅ Permission bits: r=4, w=2, x=1
- ✅ Memory layout: Code, Global, Heap, Stack
- ✅ Key gcc flags: `-Wall`, `-std=gnu99`, `-g`, `-o`
- ✅ String functions: strcpy (bad), strncpy (good), strlen

### Things to Understand (NOT memorize)
- ✅ WHY stack pointers are dangerous
- ✅ WHY malloc() needs error checking
- ✅ WHY buffer overflow is a security issue
- ✅ HOW pointer arithmetic works
- ✅ HOW struct alignment affects size

### Practice Strategy
1. **Trace code execution** - Work through pointers step by step
2. **Draw memory diagrams** - Show where data lives (stack vs heap)
3. **Predict compilation errors** - Know what won't compile
4. **Fix broken code** - Change unsafe code to safe alternatives
5. **Write shell commands** - Practice piping and redirection

---

## ⚠️ COMMON EXAM MISTAKES

| Mistake                        | Why It's Wrong            | Fix                                       |
| ------------------------------ | ------------------------- | ----------------------------------------- |
| `char *str; strcpy(str, "x");` | Null pointer!             | Allocate first: `malloc()` or stack array |
| `strcpy(name, input);`         | No bounds checking!       | Use `strncpy()` with size limit           |
| `return arr;` from function    | Local array destroyed!    | Allocate with `malloc()` or make static   |
| `free(p); free(p);`            | Double free!              | Set to NULL after freeing                 |
| `free(arr); // lost pointers`  | Forgot to free contents!  | Free strings first, then array            |
| `p + 1` on char*               | Off by 1 byte             | Correct for actual type!                  |
| `chmod 666`                    | World-writable dangerous! | Use restrictive like `644` or `755`       |

---

## 🎯 LAST-MINUTE CHECKLIST

Before the exam, verify you can:

**UNIX/Shell:**
- [ ] List files with `ls -l` and interpret permissions
- [ ] Navigate with `cd` using absolute/relative paths
- [ ] Use `grep`, `wc`, `cut` on command line
- [ ] Pipe commands with `|` and redirect with `>`, `<`
- [ ] Compile C code with gcc (all flags)
- [ ] Convert chmod to octal and back

**C Pointers:**
- [ ] Trace pointer arithmetic (`p + 1`, `*(p + 2)`)
- [ ] Explain `&` and `*` operators
- [ ] Identify array decay
- [ ] Spot null pointer dereferences

**Memory:**
- [ ] Draw stack vs heap diagram
- [ ] Identify returning stack pointers
- [ ] Spot memory leaks (malloc without free)
- [ ] Find double-free errors
- [ ] Check malloc() return value

**Strings:**
- [ ] Know strlen() EXCLUDES null terminator
- [ ] Know strcpy() is unsafe
- [ ] Use strncpy() correctly (with manual null terminator)
- [ ] Identify buffer overflow

**Structs:**
- [ ] Allocate on heap with malloc
- [ ] Use dot (.) vs arrow (->) notation
- [ ] Deep copy strings in structs
- [ ] Understand alignment padding

---

**Good luck! 🚀 Focus on understanding the WHY, not just the HOW!**

Last updated: February 2, 2026
