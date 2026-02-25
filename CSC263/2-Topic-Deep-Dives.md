# CSC263H1 Deep Dive Explanations: Core Concepts

## 🧠 AVL Tree Rotations: Complete Mental Model

### The Core Problem

A Binary Search Tree works great when **balanced** (O(log n) for all operations). But if you insert 1,2,3,4,5 in order, you get a *linked list*—all operations become O(n). AVL trees **automatically rebalance** after every insertion/deletion to maintain balance.

### The Balance Factor (BF) Definition

For any node in an AVL tree:
```
BF(node) = height(right_subtree) - height(left_subtree)
```

AVL Invariant: **-1 ≤ BF ≤ 1** for all nodes.

⚠️ **Critical:** Some textbooks use `BF = height(left) - height(right)` (signs flipped). The exam will specify. The logic is symmetric—just flip signs.

**Height Definition (key ambiguity):**
- Some define height of a single node as 0
- Some define it as 1
- Be consistent. Example: a leaf node has either height 0 or 1 depending on convention.

---

### When Do We Rotate?

After inserting or deleting a node, you propagate up the tree, checking each ancestor's BF.

**First ancestor with BF = ±2 → perform rotation at that node.**

Why ±2? If insertion/deletion affects the subtree, the deepest imbalanced node will have BF of exactly ±2 (not ±3 or higher, because the tree was balanced before).

---

### The Four Rotation Cases

#### **Case 1: Left-Left (LL) – Single Right Rotation**

**Trigger Condition:**
- Node A has BF = -2 (left-heavy)
- Left child B has BF = -1 or 0 (also left-heavy or balanced)

**Why it happens:**
```
        A (BF=-2)
       /
      B (BF=-1 or 0)
     /
    C
```
The weight shifted to the left. A single right rotation lifts B and moves A to the right.

**Rotation Mechanics:**
```
Before:                 After:
    A                      B
   /                      / \
  B           →          C   A
 / \
C   D
```

**What changes:**
- B becomes the new root
- A becomes B's right child
- D (B's right subtree) becomes A's left subtree

**Code Pattern:**
```python
def right_rotate(A):
    B = A.left
    A.left = B.right  # D goes to A's left
    B.right = A
    update_height(A)
    update_height(B)
    return B  # B is new root
```

---

#### **Case 2: Right-Right (RR) – Single Left Rotation**

**Trigger Condition:**
- Node A has BF = +2 (right-heavy)
- Right child B has BF = +1 or 0 (also right-heavy or balanced)

**Rotation Mechanics:** (Mirror of LL)
```
Before:                 After:
    A                      B
     \                    / \
      B         →        A   D
     / \
    C   D
```

---

#### **Case 3: Left-Right (LR) – Double Rotation (Left then Right)**

**Trigger Condition (THE TRICKY ONE):**
- Node A has BF = -2 (left-heavy)
- Left child B has BF = +1 (right-heavy) ← **OPPOSITE sign from A**

**Why single rotation fails:**
If you do a right rotation, you'd lift B up, but B is right-heavy, so it would just shift the problem.

**The Fix: Two steps**
1. **Left rotate on B** (to convert to LL case)
2. **Right rotate on A** (to fix the LL case)

**Visualization:**
```
Step 0: Original (A is unbalanced)        Step 1: Left rotate on B
    A (BF=-2)                                 A (BF=-2)
   /                                        /
  B (BF=+1) ← opposite sign                C (BF=-1) ← now same sign
   \
    C

Step 2: Right rotate on A
    C
   / \
  B   A
```

---

#### **Case 4: Right-Left (RL) – Double Rotation (Right then Left)**

**Trigger Condition:**
- Node A has BF = +2 (right-heavy)
- Right child B has BF = -1 (left-heavy) ← **OPPOSITE sign**

**The Fix: Two steps**
1. Right rotate on B
2. Left rotate on A

---

### ⚠️ Subtle Edge Case: The "Zero BF" Case

**In Insertion:** If BF(A) = ±2, then BF(B) is never 0. Single rotations always decrease the subtree height.

**In Deletion:** BF(A) = +2 and BF(B) = 0 is *possible*.
- You still perform a single rotation (as if BF(B) = +1)
- But: **The subtree height doesn't decrease**
- This means rebalancing may need to continue upward

**Why this matters for exams:** Deletion is more complex because rebalancing can propagate all the way to the root.

---

### Rotation Decision Tree (Memorize This)

```
Node A has BF = ±2?
├─ YES, BF = -2 (left-heavy)
│  ├─ Left child B: BF ≤ 0? (same or left-heavy)
│  │  └─ YES → LL Case: Right Rotate A
│  └─ Left child B: BF > 0? (right-heavy)
│     └─ YES → LR Case: Left Rotate B, then Right Rotate A
│
└─ YES, BF = +2 (right-heavy)
   ├─ Right child B: BF ≥ 0? (same or right-heavy)
   │  └─ YES → RR Case: Left Rotate A
   └─ Right child B: BF < 0? (left-heavy)
      └─ YES → RL Case: Right Rotate B, then Left Rotate A
```

---

### Exam Trap: The Height Proof

Exams often ask: "Prove that in an AVL tree with n nodes, height h < 1.44 * log₂(n+2)."

**Key insight:** Define N(h) = minimum number of nodes in an AVL tree of height h.

**Recurrence:**
```
N(0) = 1         (single node)
N(1) = 2         (node + 1 child)
N(h) = N(h-1) + N(h-2) + 1
```

Why? An AVL tree of height h with minimum nodes has:
- One subtree of height h-1 (minimum nodes for that height)
- One subtree of height h-2 (minimum nodes, but one less to stay balanced)

This recurrence relates to **Fibonacci numbers**, which grow exponentially. Therefore, h grows logarithmically with n.

---

## 📊 Expected Value Calculations: From First Principles

### The Big Idea

Exams ask: "What is the expected number of [operations/nodes visited/swaps]?"

To answer, you need to:
1. Define what varies (the random variable)
2. Break it into simple events
3. Sum up probabilities

---

### Step 1: Define the Random Variable

Let **X** = total cost (swaps, comparisons, etc.)

You can't easily calculate E[X] directly, so you **decompose** it:

```
X = X₁ + X₂ + ... + Xₙ

where each Xᵢ is an indicator variable (0 or 1)
```

### Step 2: Use Indicator Random Variables

**Definition:**
```
Xᵢ = 1 if event i occurs
     0 otherwise
```

**Example:** For average search depth in BST:
- Let Xᵢ = 1 if node i is visited during a search
- E[total depth] = E[X₁ + X₂ + ... + Xₙ]

### Step 3: Apply Linearity of Expectation

```
E[X₁ + X₂ + ... + Xₙ] = E[X₁] + E[X₂] + ... + E[Xₙ]
                       = P(X₁=1) + P(X₂=1) + ... + P(Xₙ=1)
```

Since E[indicator] = P(event occurs).

---

### Example from Midterm-2024 Q3: Expected Swaps

**Problem:** An algorithm swaps pairs in an array. What's the expected number of swaps?

**Setup:**
- Array has specific values and positions
- Different input permutations are equally likely
- For each pair (i,j), there's a probability it gets swapped

**Solution:**
```
For each pair (i,j) in the array:
  Let Xᵢⱼ = 1 if pair (i,j) is swapped, 0 otherwise

E[total swaps] = Σ P(pair (i,j) is swapped)
```

To find P(pair swapped), you consider:
- How many permutations have (i,j) in a swap-triggering position?
- Divide by total permutations

---

### Common Pitfall: Indicator Variable Mistakes

❌ **Wrong:** Defining Xᵢ = "number of times node i is visited" (this is not an indicator; it's already a count)

✅ **Right:** Xᵢ = 1 if node i is visited, 0 otherwise. Then sum over all nodes to get total visits.

on situation for output in indivual data point
- instead of the total count

---

## 🎯 Heap BuildHeap: Why It's O(n), Not O(n log n)

### The Algorithm

```python
def BuildMaxHeap(A):
    n = len(A)
    for i in range(n//2, 0, -1):  # Start from last non-leaf, go down to root
        MaxHeapify(A, i)           # Sift-down from position i
```

**Why start at n//2?**
- Nodes from position n//2 + 1 to n are all leaf nodes
- Leaf nodes are already valid max-heaps
- So we only fix internal nodes

---

### Why O(n), Not O(n log n)?

Naive Analysis: "n/2 nodes, each sifts down in O(log n) time → O(n log n)"

**Correct Analysis:** Most nodes sift down very little.
- Last level: n/4 nodes sift 1 step
- Second-last: n/8 nodes sift 2 steps
- ... and so on

```
Total work = n/4 · 1 + n/8 · 2 + n/16 · 3 + ...
           = n · (1/4 + 2/8 + 3/16 + ...)
           = n · Σ(h/2^(h+1))
           = n · 2  (this series sums to 2)
           = O(n)
```

**Exam Question Type:** "Prove BuildHeap is O(n)." Expect to show this summation.

---

### Tracing BuildHeap (Exam Favorite)

**Input array:** [1, 9, 28, 5, 7, 32, 15]

Array as tree (index 0 ignored or adapted):
```
        1(i=1)
       / \
     9    28
    / \   / \
   5  7  32 15
```

**Trace:**
1. Start at i = 3 (node 5). No children, valid.
2. i = 2 (node 28). Max(28, 32, 15) = 32. Swap 28 ↔ 32. Array: [1, 9, 32, 5, 7, 28, 15]
3. i = 1 (node 9). 9 > 5 and 9 > 7. No swap. Valid.
4. i = 0 (node 1). Check heap... MaxHeapify would sift 1 down.

**Final result:** Array where parent ≥ children everywhere.

---

## 🔑 Data Structure Augmentation: The Principle

### What is Augmentation?

You have an existing data structure (e.g., AVL tree). You want to support a *new operation* that the original structure can't do efficiently. Solution: **Augment** nodes with extra data.

**Example:**
- Original AVL: Can search, insert, delete in O(log n)
- Problem: "Find all keys in range [a,b]" requires traversing the whole tree O(n)
- Solution: Augment each node with the count of descendants in its subtree
- Result: Can answer range queries in O(log n + output size)

### Design Principle

When augmenting, ask:

1. **What new information do I need at each node?**
   - For range query: count of descendants

2. **Can I compute it from my node's data + children's data?**
   - Count = 1 + left_count + right_count (O(1) computation)

3. **Does it survive rotations?**
   - After rotation, recompute counts bottom-up (O(1) per rotation, O(log n) total per insertion)

4. **Does it still maintain O(log n) insertion/deletion?**
   - If new data is O(1) per operation, yes

### Exam Examples

**Midterm Q4:** Augment AVL with `.min` field
- `.min` = minimum key in subtree
- Updated during rotations: `node.min = min(node.key, left.min, right.min)`
- Allows FindMin in O(1) from root

**Term Test 2 Q3:** Augment AVL to track max value in range
- Similar principle: `node.max_range = max(node.value, left.max_range, right.max_range)`

---

## ⚠️ Common Student Misconceptions Exposed

### Misconception 1: "Every BST operation is O(log n)"
**Reality:** Only if the tree is *balanced*. Unbalanced BSTs are O(n).
**Exam Trap:** "What's the worst-case search in a BST?" → O(n), not O(log n).

### Misconception 2: "AVL trees have no duplicates"
**Reality:** AVL trees can store anything. Duplicates are handled by the implementation (e.g., left or right child).
**Exam Trap:** Problem says "insert duplicate keys." Does the tree store them? How?

### Misconception 3: "Rotation changes the BST property"
**Reality:** Rotations are carefully designed to *preserve* the BST property while fixing balance.
**Exam Trap:** "After this rotation, is it still a valid BST?" → Yes, always.

### Misconception 4: "Heap is sorted"
**Reality:** Heap is *partially sorted* (parent ≥ children). Not fully sorted.
**Exam Trap:** "Is the median at the middle of a max-heap?" → No! Could be anywhere. Heap doesn't sort.

### Misconception 5: "Average-case means random input"
**Reality:** Average-case means averaged over all inputs. But the distribution matters!
**Exam Trap:** "Is hashing average-case O(1)?" → Only if we assume *Simple Uniform Hashing* (SUHA). If adversary picks keys to maximize collisions, it's O(n).

---

## 🎓 Summary: What Each Topic Tests

| Topic | Tests | Mental Model |
|-------|-------|--------------|
| **AVL Rotations** | Mechanical precision + understanding WHY | Rotations are "local surgeries" that fix imbalance without breaking BST property |
| **Expected Values** | Probabilistic reasoning + indicator variable setup | Decompose complex randomness into simple 0/1 events, then sum |
| **BuildHeap** | Algorithm design + non-obvious complexity analysis | Most work happens at tree's base, where most nodes are |
| **Augmentation** | Deep understanding of data structure invariants | Extra data must be locally computable and survive all operations |

