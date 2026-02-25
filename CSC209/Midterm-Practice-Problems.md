# CSC209 Midterm Practice Problems with Solutions

> **Study Method**: Try solving each problem BEFORE looking at the solution. Time yourself!

---

## 🎯 PROBLEM SET 1: POINTERS & ARRAYS

### Problem 1.1: Trace Pointer Execution

```c
int main() {
    int x = 10;
    int y = 20;
    int *p = &x;
    int *q = &y;

    *p = 5;           // Line A
    p = q;            // Line B
    *p = 15;          // Line C

    printf("%d %d\n", x, y);  // What prints?
    return 0;
}
```

**Question:** What are the final values of x and y, and what gets printed?

<details>
<summary>✅ Solution</summary>

**Line-by-line execution:**
1. `x = 10, y = 20`
2. `p = &x` (p points to x)
3. `q = &y` (q points to y)
4. `*p = 5` → x = 5 (we dereference p, which points to x)
5. `p = q` → p now points to y (p gets the address that q holds)
6. `*p = 15` → y = 15 (we dereference p, which now points to y)

**Output:** `5 15`

**Key Lesson:** `p = q` makes p point to the same address as q (copies the ADDRESS, not the value).

</details>

---

### Problem 1.2: Pointer Arithmetic with Arrays

```c
int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *p = arr;

    printf("%d\n", *p);        // What prints? Line A
    printf("%d\n", *(p + 2));  // What prints? Line B
    printf("%d\n", p[3]);      // What prints? Line C
    printf("%d\n", *(arr + 1)); // What prints? Line D

    return 0;
}
```

**Question:** What are the four outputs?

<details>
<summary>✅ Solution</summary>

Line A: `*p` → Dereference p (which points to arr[0]) → **Output: 10**

Line B: `*(p + 2)` → Pointer arithmetic: p points to arr[0], p+2 points to arr[2] → **Output: 30**

Line C: `p[3]` → Equivalent to *(p + 3) → Points to arr[3] → **Output: 40**

Line D: `*(arr + 1)` → arr is a pointer to arr[0], arr+1 points to arr[1] → **Output: 20**

**Key Lesson:** For pointer arithmetic, addition scales by the type size. For `int *p`, `p+1` advances by 4 bytes.

</details>

---

### Problem 1.3: Identify the Bug

```c
int *get_last_element(int arr[], int size) {
    int *p = &arr[size - 1];
    return p;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int *p = get_last_element(arr, 5);
    printf("%d\n", *p);  // What happens?
    return 0;
}
```

**Question:** Is this code safe? If not, why?

<details>
<summary>✅ Solution</summary>

**This code is SAFE!** ✅

Why? Because `arr` is passed as a parameter. When you pass an array to a function, it decays to a pointer to the array in the **caller's** scope. The pointer `p` points to memory in the caller's frame, which still exists.

However, there's a subtle issue: `arr` in the function is a pointer to data in the caller's stack, so it works... but barely. The safe way is to use `malloc()` if you need to return data.

**Modified for clarity:**
```c
int *get_array() {
    int *arr = malloc(5 * sizeof(int));
    arr[4] = 5;
    return arr;  // Safe! Points to heap memory
}
```

</details>

---

## 🧠 PROBLEM SET 2: MEMORY MANAGEMENT

### Problem 2.1: Identify Memory Errors

```c
int main() {
    int *p = malloc(100);
    int *q = p;

    p[0] = 42;
    q[0] = 99;

    free(p);
    printf("%d\n", q[0]);  // What happens?

    free(q);  // What happens?
    return 0;
}
```

**Question:** Identify all memory errors and what they cause.

<details>
<summary>✅ Solution</summary>

**Errors identified:**

1. **Use-after-free (Line: printf)**: After `free(p)`, the memory is deallocated. Even though `q` points to the same memory, accessing `q[0]` is undefined behavior (reads freed memory).

2. **Double-free (Line: free(q))**: Both `p` and `q` point to the same memory. Freeing once deallocates it. The second `free(q)` attempts to free already-freed memory → **CRASH**.

**Corrected code:**
```c
int *p = malloc(100);
int *q = p;

p[0] = 42;
q[0] = 99;  // Changes the same memory as p[0]

// Only free once!
free(p);
// Don't use p or q after this!
```

**Key Lesson:** Never free the same memory twice, and never access memory after freeing.

</details>

---

### Problem 2.2: Fix the Memory Leak

```c
void process_file(const char *filename) {
    FILE *f = fopen(filename, "r");
    char *buffer = malloc(1000);

    if (!f) {
        printf("File not found\n");
        return;  // BUG HERE!
    }

    fgets(buffer, 1000, f);
    printf("%s\n", buffer);

    free(buffer);
    fclose(f);
}
```

**Question:** Identify the memory leak and fix it.

<details>
<summary>✅ Solution</summary>

**The leak:** When `fopen()` fails and we return early, the `malloc()`'d buffer is never freed!

**Fixed code:**
```c
void process_file(const char *filename) {
    FILE *f = fopen(filename, "r");
    char *buffer = malloc(1000);

    if (!f) {
        printf("File not found\n");
        free(buffer);  // Free BEFORE returning!
        return;
    }

    fgets(buffer, 1000, f);
    printf("%s\n", buffer);

    free(buffer);
    fclose(f);
}
```

**Better approach (avoid early returns):**
```c
void process_file(const char *filename) {
    FILE *f = fopen(filename, "r");
    char *buffer = malloc(1000);

    if (f != NULL) {
        fgets(buffer, 1000, f);
        printf("%s\n", buffer);
        fclose(f);
    } else {
        printf("File not found\n");
    }

    free(buffer);  // Always freed at the end
}
```

**Key Lesson:** Use consistent cleanup patterns. Either free before every return, or refactor to ensure single exit point.

</details>

---

### Problem 2.3: Allocation Error Checking

```c
int main() {
    int *arr = malloc(1000 * sizeof(int));
    arr[0] = 42;
    arr[999] = 99;
    free(arr);
    return 0;
}
```

**Question:** What's missing? (Hint: Common exam mistake)

<details>
<summary>✅ Solution</summary>

**Missing: Error check for malloc()!**

`malloc()` can fail and return NULL! Dereferencing NULL → **CRASH**.

**Corrected code:**
```c
int main() {
    int *arr = malloc(1000 * sizeof(int));

    if (arr == NULL) {  // ALWAYS check!
        printf("Allocation failed\n");
        return 1;
    }

    arr[0] = 42;
    arr[999] = 99;
    free(arr);
    return 0;
}
```

**Key Lesson:** Always check malloc() return value before using it!

</details>

---

## 🔤 PROBLEM SET 3: STRINGS & BUFFERS

### Problem 3.1: String Safety

```c
int main() {
    char name[10];
    char input[50];

    strcpy(name, input);  // What's wrong?
    return 0;
}
```

**Question:** Why is this unsafe? (Even if input is shorter than 50)

<details>
<summary>✅ Solution</summary>

**The problem:** `strcpy()` has NO bounds checking. If `input` contains 15 characters, it will write 15 chars into `name`, which only has space for 10 → **BUFFER OVERFLOW**.

Even though `input` is declared as `char[50]`, user might pass a string that fills it completely.

**Fixed code:**
```c
char name[10];
char input[50];

strncpy(name, input, 9);  // Max 9 chars (leave 1 for null)
name[9] = '\0';           // Manually add null terminator!
```

**Key Lesson:** Never use `strcpy()`. Always use `strncpy()` with proper bounds.

</details>

---

### Problem 3.2: String Terminator Bug

```c
int main() {
    char name[12];
    strncpy(name, "Hello World!", 11);
    printf("%s\n", name);  // What happens?
    return 0;
}
```

**Question:** What's the bug? What will happen when printf runs?

<details>
<summary>✅ Solution</summary>

**The bug:** `strncpy()` does NOT automatically add a null terminator!

After `strncpy(name, "Hello World!", 11)`:
- `name` contains: `['H','e','l','l','o',' ','W','o','r','l','d',?]`
- No null terminator!

When `printf("%s", name)` runs, it reads characters until it FINDS a null byte in memory. This could print garbage or crash!

**Fixed code:**
```c
char name[12];
strncpy(name, "Hello World!", 11);
name[11] = '\0';  // Manually add null terminator!
printf("%s\n", name);
```

**Key Lesson:** After `strncpy()`, always explicitly add `\0` at the end!

</details>

---

### Problem 3.3: String Memory Allocation

```c
int main() {
    char *str;  // Uninitialized pointer!
    strcpy(str, "hello");
    printf("%s\n", str);
    return 0;
}
```

**Question:** What happens? How to fix?

<details>
<summary>✅ Solution</summary>

**The problem:** `str` is uninitialized. It points to a random address. `strcpy()` writes to that random address → **CRASH or UNDEFINED BEHAVIOR**.

**Fix Option 1: Stack allocation**
```c
char str[50];
strcpy(str, "hello");
printf("%s\n", str);
```

**Fix Option 2: Heap allocation**
```c
char *str = malloc(50);
if (str == NULL) {
    printf("Allocation failed\n");
    return 1;
}
strcpy(str, "hello");
printf("%s\n", str);
free(str);
```

**Key Lesson:** Pointers must point to valid memory before dereferencing!

</details>

---

## 🏗️ PROBLEM SET 4: STRUCTS

### Problem 4.1: Struct Allocation

```c
struct Student {
    char *name;
    int age;
    float gpa;
};

int main() {
    struct Student s;
    s.name = "Alice";    // BUG!
    s.age = 20;
    s.gpa = 3.8;
    printf("%s\n", s.name);
    return 0;
}
```

**Question:** Is this safe? Why or why not?

<details>
<summary>✅ Solution</summary>

**This is SAFE (but technically wrong).**

`"Alice"` is a string literal stored in read-only memory. Setting `s.name = "Alice"` makes the pointer point to that literal, which is valid and won't disappear.

**However**, this is NOT the intended pattern for user input. The problem is:

**Why it's not ideal:**
- You can't modify the string later
- It only works for compile-time string literals
- Best practice is to allocate a copy with `malloc()`

**Better approach:**
```c
struct Student s;
s.name = malloc(50);
strcpy(s.name, "Alice");  // OR strncpy with bounds
s.age = 20;
s.gpa = 3.8;
printf("%s\n", s.name);
free(s.name);  // Free the allocated memory
```

**Exam note:** This distinction is important! String literals are OK, but user input needs allocation.

</details>

---

### Problem 4.2: Shallow vs Deep Copy

```c
struct Person {
    char *name;
    int age;
};

void copy_person(struct Person original, struct Person *copy) {
    *copy = original;  // Shallow copy!
}

int main() {
    struct Person p1;
    p1.name = malloc(20);
    strcpy(p1.name, "Alice");

    struct Person p2;
    copy_person(p1, &p2);

    free(p1.name);
    printf("%s\n", p2.name);  // What happens?
    return 0;
}
```

**Question:** What happens? Why? How to fix?

<details>
<summary>✅ Solution</summary>

**What happens:** After `free(p1.name)`, we try to print `p2.name`. Since p1 and p2 point to the same memory, we're reading freed memory → **USE-AFTER-FREE** or garbage output.

**The problem:** Shallow copy copies the pointer value, not the data. Both p1.name and p2.name point to the same memory block.

**Fixed code (Deep copy):**
```c
void copy_person(struct Person original, struct Person *copy) {
    copy->age = original.age;

    // Deep copy the name
    copy->name = malloc(strlen(original.name) + 1);
    strcpy(copy->name, original.name);
}

int main() {
    struct Person p1;
    p1.name = malloc(20);
    strcpy(p1.name, "Alice");

    struct Person p2;
    copy_person(p1, &p2);

    free(p1.name);  // Only frees p1's data
    printf("%s\n", p2.name);  // Still valid! (p2 has its own copy)

    free(p2.name);  // Free p2's data too
    return 0;
}
```

**Key Lesson:** When copying structs with pointers, allocate new memory and copy the data (deep copy), not just the pointers (shallow copy).

</details>

---

### Problem 4.3: Struct Alignment

```c
struct A {
    char c;    // 1 byte
    int i;     // 4 bytes
    char c2;   // 1 byte
};

struct B {
    int i;     // 4 bytes
    char c;    // 1 byte
    char c2;   // 1 byte
};

int main() {
    printf("sizeof(A) = %zu\n", sizeof(struct A));
    printf("sizeof(B) = %zu\n", sizeof(struct B));
    return 0;
}
```

**Question:** What are the sizes? Why are they different?

<details>
<summary>✅ Solution</summary>

**Output:**
```
sizeof(A) = 12
sizeof(B) = 8
```

**Why:**

Struct A:
```
[char(1)][padding(3)][int(4)][char(1)][padding(3)]
= 1 + 3 + 4 + 1 + 3 = 12 bytes
```

The compiler pads after each member to align `int` on a 4-byte boundary.

Struct B:
```
[int(4)][char(1)][char(1)][padding(2)]
= 4 + 1 + 1 + 2 = 8 bytes
```

Padding is minimized because smaller members are grouped.

**Key Lesson:** Struct member ORDER affects size! Arrange larger types first to minimize padding.

```c
// Optimized struct
struct C {
    int i;
    double d;
    char c;
};  // Smaller than if arranged differently
```

</details>

---

## 🐚 PROBLEM SET 5: UNIX SHELL

### Problem 5.1: File Permissions

```bash
ls -l
-rw-r--r--  1 alice group  1234 Feb  2 10:00 file.txt
-rwxr-xr-x  1 alice group  5678 Feb  2 10:01 script.sh
drwx------  2 alice group  4096 Feb  2 10:02 private_dir
```

**Questions:**
1. Which files can alice modify?
2. Which files can group members execute?
3. What's the octal notation for each?

<details>
<summary>✅ Solution</summary>

**1. Which files can alice modify?** (write permission for owner)
- `file.txt` ✅ (rw-)
- `script.sh` ✅ (rwx)
- `private_dir` ✅ (rwx)

**2. Which files can group members execute?**
- `file.txt` ❌ (r--)
- `script.sh` ✅ (r-x)
- `private_dir` ❌ (---)

**3. Octal notation:**
- `file.txt`: `644` (rw- r-- r--)
- `script.sh`: `755` (rwx r-x r-x)
- `private_dir`: `700` (rwx --- ---)

</details>

---

### Problem 5.2: Piping and Redirection

```bash
# Given a file data.txt with:
# apple 5
# banana 10
# cherry 15
```

**Write commands for:**
1. Count lines in data.txt
2. Print only the fruit names (first column)
3. Save the second column to output.txt
4. Find lines containing "an"

<details>
<summary>✅ Solution</summary>

**1. Count lines:**
```bash
wc -l data.txt
# or
cat data.txt | wc -l
```

**2. Print fruit names (first column):**
```bash
cut -d' ' -f1 data.txt
# or
cat data.txt | cut -d' ' -f1
```

**3. Save second column to output.txt:**
```bash
cut -d' ' -f2 data.txt > output.txt
# or
cat data.txt | cut -d' ' -f2 > output.txt
```

**4. Find lines containing "an":**
```bash
grep "an" data.txt
# or
cat data.txt | grep "an"
```

Output:
```
banana 10
```

</details>

---

### Problem 5.3: chmod Conversions

**Convert to octal:**
1. `-rw-r--r--` → ?
2. `-rwxr-x---` → ?
3. `-r-x------` → ?

**Convert to symbolic:**
1. `644` → ?
2. `755` → ?
3. `700` → ?

<details>
<summary>✅ Solution</summary>

**Octal conversion:**
1. `-rw-r--r--` → `644` (User: 4+2=6, Group: 4, Other: 4)
2. `-rwxr-x---` → `750` (User: 4+2+1=7, Group: 4+1=5, Other: 0)
3. `-r-x------` → `500` (User: 4+1=5, Group: 0, Other: 0)

**Symbolic conversion:**
1. `644` → `-rw-r--r--`
2. `755` → `-rwxr-xr-x`
3. `700` → `-rwx------`

</details>

---

## 🏁 FINAL CHALLENGE: COMPREHENSIVE PROBLEM

```c
struct Record {
    char *name;
    int *scores;  // Array of scores
    int count;
};

// Create a new record
struct Record *create_record(const char *name, int num_scores) {
    struct Record *r = malloc(sizeof(struct Record));
    if (r == NULL) {
        return NULL;
    }

    r->name = malloc(strlen(name) + 1);
    r->scores = malloc(num_scores * sizeof(int));

    if (r->name == NULL || r->scores == NULL) {
        // BUG: Incomplete error handling!
        return NULL;
    }

    strcpy(r->name, name);
    r->count = num_scores;
    return r;
}

int main() {
    struct Record *rec = create_record("Alice", 5);
    if (rec) {
        for (int i = 0; i < 5; i++) {
            rec->scores[i] = 85 + i;
        }
        // What cleanup is needed here?
    }
    return 0;
}
```

**Questions:**
1. What memory leak exists in the error handling?
2. What cleanup code is missing in main()?
3. Rewrite create_record() with proper error handling

<details>
<summary>✅ Solution</summary>

**1. Memory leak in error handling:**
If `r->scores` allocation fails, we return NULL without freeing `r->name` (which was successfully allocated). This leaks the name memory!

**2. Missing cleanup in main():**
```c
int main() {
    struct Record *rec = create_record("Alice", 5);
    if (rec) {
        for (int i = 0; i < 5; i++) {
            rec->scores[i] = 85 + i;
        }

        // MISSING CLEANUP:
        free(rec->name);
        free(rec->scores);
        free(rec);
    }
    return 0;
}
```

**3. Corrected create_record():**
```c
struct Record *create_record(const char *name, int num_scores) {
    struct Record *r = malloc(sizeof(struct Record));
    if (r == NULL) {
        return NULL;
    }

    r->name = malloc(strlen(name) + 1);
    if (r->name == NULL) {
        free(r);  // Free the struct too!
        return NULL;
    }

    r->scores = malloc(num_scores * sizeof(int));
    if (r->scores == NULL) {
        free(r->name);  // Free name
        free(r);        // Free struct
        return NULL;
    }

    strcpy(r->name, name);
    r->count = num_scores;
    return r;
}

// And a cleanup function
void free_record(struct Record *r) {
    if (r != NULL) {
        free(r->name);
        free(r->scores);
        free(r);
    }
}
```

**Key Lesson:** When allocating multiple things, handle failures carefully. Free what succeeded before returning NULL.

</details>

---

## 🎓 STUDY STRATEGY

**Time each problem:** 5-10 minutes
**After solving:** Compare with solution
**Key gaps:** Rework similar problems

**Focus areas by difficulty:**
- **Easy** (1.1, 3.1, 5.1): Memory basics
- **Medium** (2.2, 4.1, 5.2): Complex cleanup
- **Hard** (2.3, 4.2, Final): Multiple errors, deep understanding

Good luck! 🚀

