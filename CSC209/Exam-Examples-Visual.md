# CSC209 Midterm - Visual Examples & Code Patterns

> **See patterns, understand deeply** - Visual learning for exam preparation

---

## 🎨 PART 1: POINTER MEMORY DIAGRAMS

### Example 1: Simple Pointer Assignment

```
CODE:
int x = 5;
int *p = &x;

MEMORY DIAGRAM:
┌─────────────────────────────┐
│ Stack                       │
├─────────────────────────────┤
│ x:    [5]    @ 0x1000       │
│ p:    [0x1000] @ 0x1008     │
└─────────────────────────────┘

EXPLANATION:
- x is at address 0x1000, contains value 5
- p is at address 0x1008, contains address 0x1000
- &x returns 0x1000
- *p dereferences to get value 5
```

### Example 2: Multiple Pointers

```
CODE:
int x = 10, y = 20;
int *p = &x;
int *q = &y;

MEMORY:
┌─────────────────────────────┐
│ Stack                       │
├─────────────────────────────┤
│ x:    [10]    @ 0x1000      │
│ y:    [20]    @ 0x1008      │
│ p:    [0x1000] @ 0x1010     │
│ q:    [0x1008] @ 0x1018     │
└─────────────────────────────┘

OPERATIONS:
*p = 15      → x = 15
*q = 25      → y = 25
p = q        → p now holds 0x1008 (points to y)
*p = 30      → y = 30 (not x!)
```

### Example 3: Array and Pointer Decay

```
CODE:
int arr[3] = {10, 20, 30};
int *p = arr;

MEMORY:
┌─────────────────────────────┐
│ Stack                       │
├─────────────────────────────┤
│ arr[0]:  [10]  @ 0x1000     │
│ arr[1]:  [20]  @ 0x1004     │
│ arr[2]:  [30]  @ 0x1008     │
│ p:      [0x1000] @ 0x100C   │
└─────────────────────────────┘

POINTER ARITHMETIC:
p       → points to arr[0]
p + 1   → points to arr[1] (advances by 4 bytes)
p + 2   → points to arr[2] (advances by 8 bytes)
*(p+1)  → value 20
p[2]    → same as *(p+2) = 30
```

---

## 💾 PART 2: STACK VS HEAP DIAGRAMS

### Example 1: Stack Allocation (Safe)

```
CODE:
int main() {
    int arr[100];        // Stack allocation
    arr[0] = 5;
    return 0;
}

MEMORY:
┌──────────────────────────────┐
│ CODE SEGMENT                 │
├──────────────────────────────┤
│ GLOBALS                      │
├──────────────────────────────┤
│ HEAP                         │
│ (empty - no malloc)          │
├──────────────────────────────┤
│ STACK                        │
│ ┌──────────────────────────┐ │
│ │ arr[0..99]   [5,?,?,...] │ │
│ │ return addr  [......]    │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘

KEY: Stack memory is freed when function returns
     So arr is valid ONLY inside main()
```

### Example 2: Heap Allocation (Dynamic)

```
CODE:
int main() {
    int *arr = malloc(100 * sizeof(int));
    arr[0] = 5;
    free(arr);
    return 0;
}

MEMORY DURING EXECUTION:
┌──────────────────────────────┐
│ CODE SEGMENT                 │
├──────────────────────────────┤
│ GLOBALS                      │
├──────────────────────────────┤
│ HEAP                         │
│ ┌──────────────────────────┐ │
│ │ [5, ?, ?, ..., ?]        │ │
│ │ @ 0x2000 (400 bytes)     │ │
│ └──────────────────────────┘ │
├──────────────────────────────┤
│ STACK                        │
│ ┌──────────────────────────┐ │
│ │ arr (pointer) = 0x2000   │ │
│ │ return addr  [......]    │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘

KEY: Pointer lives on stack
     Data lives on heap
     Data persists until free()
```

### Example 3: ❌ WRONG - Returning Stack Pointer

```
CODE:
int *make_array() {
    int arr[10];
    return arr;  // ❌ WRONG!
}

int main() {
    int *p = make_array();
    printf("%d", p[0]);  // Undefined behavior!
}

WHAT HAPPENS:

DURING make_array():
┌──────────────┐
│ Stack        │
├──────────────┤
│ arr[0..9]    │
│ return addr  │
└──────────────┘

AFTER make_array() returns:
┌──────────────┐
│ Stack        │
├──────────────┤
│ (arr freed!) │ ← This memory may be overwritten!
│ return addr  │
└──────────────┘

p now points to deallocated memory!
Reading p[0] = GARBAGE OR CRASH
```

### Example 4: ✅ RIGHT - Using Heap

```
CODE:
int *make_array() {
    int *arr = malloc(10 * sizeof(int));
    return arr;  // ✅ Safe!
}

int main() {
    int *p = make_array();
    printf("%d", p[0]);  // Safe to access
    free(p);
}

WHAT HAPPENS:

DURING make_array():
┌──────────────┐     ┌─────────────────────┐
│ Stack        │     │ Heap                │
├──────────────┤     ├─────────────────────┤
│ arr pointer  │────→│ [?, ?, ..., ?]      │
│ return addr  │     └─────────────────────┘
└──────────────┘

AFTER make_array() returns:
┌──────────────┐     ┌─────────────────────┐
│ Stack        │     │ Heap                │
├──────────────┤     ├─────────────────────┤
│ p pointer    │────→│ [?, ?, ..., ?]      │
│ return addr  │     │ (still valid!)      │
└──────────────┘     └─────────────────────┘

Heap data persists until free(p)
```

---

## 🔗 PART 3: MEMORY ALLOCATION PATTERNS

### Pattern 1: Simple Allocation

```c
// ✅ CORRECT pattern
int *arr = malloc(n * sizeof(int));

// Error check
if (arr == NULL) {
    fprintf(stderr, "malloc failed\n");
    return 1;
}

// Use
arr[0] = 42;
arr[n-1] = 99;

// Clean up
free(arr);
arr = NULL;  // Good practice
```

### Pattern 2: String Allocation

```c
// ✅ CORRECT pattern
char *str = malloc(len + 1);  // +1 for null terminator

if (str == NULL) {
    fprintf(stderr, "malloc failed\n");
    return 1;
}

strncpy(str, input, len);
str[len] = '\0';  // Manual null terminator!

// Use
printf("%s\n", str);

// Clean up
free(str);
str = NULL;
```

### Pattern 3: Struct with Pointers

```c
// ✅ CORRECT pattern
struct Person {
    char *name;
    int age;
};

struct Person *p = malloc(sizeof(struct Person));
if (p == NULL) return;

p->name = malloc(50);
if (p->name == NULL) {
    free(p);  // Free outer if inner fails!
    return;
}

strcpy(p->name, "Alice");
p->age = 25;

// Use
printf("%s is %d\n", p->name, p->age);

// Clean up (inner first!)
free(p->name);
free(p);
p = NULL;
```

### Pattern 4: Array of Pointers (Strings)

```c
// ✅ CORRECT pattern
char **strings = malloc(n * sizeof(char*));
if (strings == NULL) return;

for (int i = 0; i < n; i++) {
    strings[i] = malloc(100);
    if (strings[i] == NULL) {
        // Clean up what we allocated so far
        for (int j = 0; j < i; j++) {
            free(strings[j]);
        }
        free(strings);
        return;
    }
    strcpy(strings[i], "hello");
}

// Use
for (int i = 0; i < n; i++) {
    printf("%s\n", strings[i]);
}

// Clean up (in reverse!)
for (int i = 0; i < n; i++) {
    free(strings[i]);  // Free each string
}
free(strings);         // Free the array
```

---

## 🚨 PART 4: COMMON ERROR PATTERNS

### Error Pattern 1: Uninitialized Pointer

```
❌ WRONG:
char *str;              // Random address!
strcpy(str, "hello");   // Write to random location = CRASH

✅ CORRECT:
char *str = malloc(100);  // Now points to valid memory
strcpy(str, "hello");
free(str);

OR:
char str[100];            // Stack array, valid memory
strcpy(str, "hello");
```

### Error Pattern 2: Buffer Overflow

```
❌ WRONG:
char name[12];
strcpy(name, "Hello World!");  // 13 bytes into 12! OVERFLOW!

MEMORY:
Before: [H][e][l][l][o][ ][W][o][r][l][d][!][?][?]
        [0][1][2][3][4][5][6][7][8][9][10][11][12][13]
                                        OVERFLOW! ↑

✅ CORRECT:
char name[12];
strncpy(name, "Hello World!", 11);  // Only copy 11
name[11] = '\0';                      // Add terminator

MEMORY:
After:  [H][e][l][l][o][ ][W][o][r][l][d]\0
        [0][1][2][3][4][5][6][7][8][9][10][11]
```

### Error Pattern 3: Double Free

```
❌ WRONG:
int *p = malloc(100);
// ... use p ...
free(p);
free(p);  // ❌ CRASH! Already freed!

✅ CORRECT:
int *p = malloc(100);
// ... use p ...
free(p);
p = NULL;  // Mark as invalid
// if (p) free(p);  // Safe check

OR:
int *p = malloc(100);
// ... use p ...
free(p);
p = NULL;
if (p) {
    free(p);  // Won't execute (p is NULL)
}
```

### Error Pattern 4: Use-After-Free

```
❌ WRONG:
int *p = malloc(100);
p[0] = 42;
free(p);
printf("%d", p[0]);  // ❌ Reading freed memory!

✅ CORRECT:
int *p = malloc(100);
p[0] = 42;
printf("%d", p[0]);  // Read BEFORE free
free(p);
p = NULL;
// Don't use p anymore
```

### Error Pattern 5: Memory Leak

```
❌ WRONG:
void process() {
    char *str = malloc(100);
    if (error) {
        return;  // ❌ str leaked!
    }
    strcpy(str, "data");
    free(str);
}

✅ CORRECT:
void process() {
    char *str = malloc(100);
    if (error) {
        free(str);  // Free BEFORE returning
        return;
    }
    strcpy(str, "data");
    free(str);
}

OR (cleaner):
void process() {
    char *str = malloc(100);
    if (!error) {
        strcpy(str, "data");
        // use str
    }
    free(str);  // Always freed at end
}
```

---

## 🔤 PART 5: STRING PATTERNS

### Pattern 1: Safe String Copy

```c
// ❌ NEVER DO THIS
strcpy(dest, src);  // No bounds checking!

// ✅ DO THIS
char dest[50];
char src[] = "Hello World";

strncpy(dest, src, 49);  // Max 49 chars
dest[49] = '\0';         // Ensure null terminator

// ✅ OR: Calculate size
strncpy(dest, src, sizeof(dest) - 1);
dest[sizeof(dest) - 1] = '\0';
```

### Pattern 2: Safe String Concatenation

```c
// ❌ NEVER DO THIS
strcat(dest, src);  // Can overflow!

// ✅ DO THIS
char dest[100] = "Hello";
char src[] = " World";

strncat(dest, src, sizeof(dest) - strlen(dest) - 1);

// ✅ OR: Calculate remaining space
int remaining = sizeof(dest) - strlen(dest);
strncat(dest, src, remaining - 1);
```

### Pattern 3: Safe Input Reading

```c
// ❌ NEVER DO THIS
char name[20];
scanf("%s", name);  // User can overflow!

// ✅ DO THIS
char name[20];
scanf("%19s", name);  // Max 19 chars (leave 1 for \0)

// ✅ OR: Use fgets (better)
char name[20];
fgets(name, sizeof(name), stdin);
// Automatically handles null terminator
```

---

## 🏗️ PART 6: STRUCT MEMORY PATTERNS

### Example 1: Struct with Dynamic Content

```
CODE:
struct Course {
    char *code;
    int capacity;
};

struct Course c;
c.code = malloc(10);
strcpy(c.code, "CSC209");
c.capacity = 100;

MEMORY DIAGRAM:
┌─────────────────────────────┐
│ Stack                       │
├─────────────────────────────┤
│ c.code pointer    [0x2000]  │
│ c.capacity        [100]     │
└─────────────────────────────┘
              ↓
        ┌──────────────────────┐
        │ Heap                 │
        ├──────────────────────┤
        │ 'C','S','C','2','0'  │
        │ '9','\0'             │
        └──────────────────────┘

CLEANUP:
free(c.code);  // Free heap data
// c itself is on stack, freed automatically
```

### Example 2: Shallow vs Deep Copy

```
SHALLOW COPY (❌ WRONG):
┌───────┐     ┌─────────────────┐
│ orig  │────→│ Heap memory     │
├───────┤     └─────────────────┘
│ copy  │     (same pointer!)
└───────┘         ↓
         When original freed, copy crashes!

DEEP COPY (✅ RIGHT):
┌───────┐     ┌─────────────────┐
│ orig  │────→│ Heap memory 1   │
├───────┤     └─────────────────┘
│ copy  │────→┌─────────────────┐
└───────┘     │ Heap memory 2   │
              └─────────────────┘
         (separate copies - safe!)
```

---

## 📊 PART 7: PERMISSION DIAGRAMS

### File Permission Example

```
FILENAME:  -rw-r--r--  1 alice group  1234 Feb 2 10:00 file.txt

┌─────────┬─────────┬────────┐
│  User   │  Group  │ Others │
├─────────┼─────────┼────────┤
│ r w -   │ r - -   │ r - -  │
│ 4 2 0   │ 4 0 0   │ 4 0 0  │
├─────────┼─────────┼────────┤
│   6     │   4     │   4    │
└─────────┴─────────┴────────┘
  OCTAL: 644

MEANING:
- Owner (alice): Can read & write, not execute
- Group: Can only read
- Others: Can only read
```

### Directory Permission Example

```
drwxr-xr-x  2 alice group  4096 Feb 2 10:02 project

┌─────────┬─────────┬────────┐
│  User   │  Group  │ Others │
├─────────┼─────────┼────────┤
│ r w x   │ r - x   │ r - x  │
│ 4 2 1   │ 4 0 1   │ 4 0 1  │
├─────────┼─────────┼────────┤
│   7     │   5     │   5    │
└─────────┴─────────┴────────┘
  OCTAL: 755

MEANING:
- Owner: Full access (rwx)
- Group: Can read & enter (r-x)
- Others: Can read & enter (r-x)
- To access files inside, need x permission
```

---

## 🎯 PART 8: TRACE EXECUTION EXAMPLES

### Example 1: Complex Pointer Trace

```
CODE:
int main() {
    int x = 10, y = 20;
    int *p = &x;
    int *q = &y;

    *p = *q;           // Line A
    p = q;             // Line B
    *p = x + 5;        // Line C

    printf("%d %d\n", x, y);
}

STEP-BY-STEP EXECUTION:

Initial state:
x = 10
y = 20
p = &x (points to x)
q = &y (points to y)

Line A: *p = *q
- *p = 10 (current value at p)
- *q = 20 (value at q, which is y)
- So: *p = 20, meaning x = 20
- After: x = 20, y = 20

Line B: p = q
- p now points to y (same address as q)
- After: p points to y

Line C: *p = x + 5
- x = 20 (from line A)
- x + 5 = 25
- *p = 25 (p points to y, so y = 25)
- After: x = 20, y = 25

OUTPUT: 20 25
```

### Example 2: Array Access Trace

```
CODE:
int arr[5] = {1, 2, 3, 4, 5};
int *p = &arr[1];      // Points to arr[1]
*p = 10;               // arr[1] = 10
*(p + 1) = 20;         // arr[2] = 20
p[2] = 30;             // arr[3] = 30

After execution:
arr = [1, 10, 20, 30, 5]
```

---

## 📝 PART 9: PERMISSION CONVERSION PRACTICE

### Convert These to Octal

```
rw-r--r--  → 644
rwxr-xr-x  → 755
rwx------  → 700
r--r--r--  → 444
rw------   → 600
rwxrwx---  → 770
```

### Convert These to Symbolic

```
644  → rw-r--r--
755  → rwxr-xr-x
700  → rwx------
777  → rwxrwxrwx
640  → rw-r-----
```

---

## ✅ VERIFICATION CHECKLIST

After studying these visual examples, verify you can:

- [ ] Draw a stack/heap diagram from code
- [ ] Trace pointer arithmetic by hand
- [ ] Identify where memory is allocated
- [ ] Spot what gets freed when
- [ ] Identify shallow vs deep copy
- [ ] Convert permissions octal ↔ symbolic
- [ ] Explain why each error happens
- [ ] Fix each error pattern

---

**Keep practicing with these visual patterns!**
**The more you draw and trace, the faster exam questions become.**

