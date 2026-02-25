# CSC263H1 Quick Reference: Formulas, Patterns, & Pitfalls

## ⚡ One-Minute Lookups

### Complexity Classes (Memorize Order)
```
O(1) < O(log n) < O(√n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2^n) < O(n!)
constant  logarithm square-root linear  linearithmic quadratic cubic exponential factorial
```

### AVL Tree Reference Table

| Case   | Trigger               | Action                                 |
| ------ | --------------------- | -------------------------------------- |
| **LL** | BF(A)=-2, BF(left)≤0  | Right-rotate A                         |
| **LR** | BF(A)=-2, BF(left)>0  | Left-rotate left, then Right-rotate A  |
| **RR** | BF(A)=+2, BF(right)≥0 | Left-rotate A                          |
| **RL** | BF(A)=+2, BF(right)<0 | Right-rotate right, then Left-rotate A |

**Decision Rule:**
- Same sign → Single rotation (in opposite direction)
- Opposite sign → Double rotation (fix child first, then parent)

### Heap Array Indexing (1-based)
```
Left child of i:   2i
Right child of i:  2i + 1
Parent of i:       ⌊i/2⌋
```

### Heap Array Indexing (0-based, common in practice)
```
Left child of i:   2i + 1
Right child of i:  2i + 2
Parent of i:       ⌊(i-1)/2⌋
```

---

## 📚 Data Structure Complexity Cheat Sheet

| Operation | BST (Best) | BST (Worst) | AVL | Heap | Hash (Avg) | Hash (Worst) |
|-----------|-----------|-----------|-----|------|-----------|-------------|
| **Search** | O(log n) | O(n) | O(log n) | O(n) | O(1) | O(n) |
| **Insert** | O(log n) | O(n) | O(log n) | O(log n) | O(1) | O(n) |
| **Delete** | O(log n) | O(n) | O(log n) | O(log n) | O(1) | O(n) |
| **FindMax** | O(log n) | O(n) | O(log n) | O(1) | O(n) | O(n) |
| **FindMin** | O(log n) | O(n) | O(log n) | O(n) | O(n) | O(n) |
| **BuildFrom array** | O(n log n) | O(n log n) | O(n log n) | O(n) ⭐ | O(n) | O(n) |

---

## 🚨 Common Pitfalls & Traps

### Pitfall 1: Height Definition Ambiguity
❌ **Mistake:** Using different height definitions mid-problem.

✅ **Fix:** At start of exam, clarify:
- Single node: height = 0 or 1?
- Empty tree: height = -1 or 0?
- Use consistently.

**Check exam rubric:** Past papers usually specify.

---

### Pitfall 2: Confusing Rotation Direction
❌ **Mistake:** Left rotation goes left (WRONG).

✅ **Truth:** Left rotation lifts the RIGHT child.
```
Before Left Rotation:      After:
    A                      B
     \                    / \
      B          →        A   D
     / \
    C   D

Mnemonic: rotation direction = where the parent goes.
```

---

### Pitfall 3: Mixing Up Balance Factor Signs
❌ **Mistake:** Using different sign conventions mid-solution.

✅ **Standard (check your course):**
```
BF = height(right) - height(left)
Positive = right-heavy
Negative = left-heavy
```

**Alternative convention (some textbooks):**
```
BF = height(left) - height(right)
(signs flipped)
```

**Solution:** Write your convention at top of exam.

---

### Pitfall 4: Indicator Variable Errors
❌ **Mistake:** X_i = "number of times event i occurs" (not an indicator; already a sum).

✅ **Correct:** X_i = 1 if event i occurs, 0 otherwise.

Then: E[total] = E[X₁ + ... + X_n] = Σ E[X_i] = Σ P(event i).

---

### Pitfall 5: BuildHeap vs. Heapsort Complexity
❌ **Mistake:** "BuildHeap is O(n log n)" (wrong).

✅ **Truth:**
- BuildHeap: O(n) ⭐
- Heapsort: O(n log n) (BuildHeap O(n) + n extract-max operations at O(log n) each)

---

### Pitfall 6: Assuming Rotations Decrease Height
❌ **Mistake:** "Every rotation reduces tree height by 1."

✅ **Truth:**
- **In insertion:** YES, rotation always decreases height.
- **In deletion:** NO, sometimes height stays same (when BF(child) = 0).

---

### Pitfall 7: Heap Property Misconceptions
❌ **Mistakes:**
- "Heap is fully sorted" (NO, only partial order)
- "Median is in middle" (NO, could be anywhere)
- "Min-heap stores only positive numbers" (NO, any values)

✅ **Truth:** Only property: parent ≥ children (max-heap) or parent ≤ children (min-heap).

---

### Pitfall 8: Hashing Assumptions
❌ **Mistake:** "Hashing is always O(1)."

✅ **Truth:** Only average-case O(1) under **Simple Uniform Hashing Assumption (SUHA)**.
- Worst-case: O(n) if adversary picks collision-heavy keys.
- Load factor matters: α = n/m (# items / # slots).

---

## 📐 Proofs You Might Need

### Proof Template: By Induction

**Claim:** Property P(n) is true for all n ≥ base.

**Proof:**
1. **Base case:** Show P(base) is true.
2. **Inductive step:** Assume P(k) is true for all k < n. Show P(n) follows.
3. **Conclusion:** By induction, P(n) is true for all n ≥ base.

**Example (AVL height):**
- Base: N(1) = 1, N(2) = 2 (minimum nodes for height 1, 2).
- Inductive: Assume N(k) ≥ φ^(k-1) for k < h. Then N(h) = N(h-1) + N(h-2) + 1 ≥ φ^(h-2) + φ^(h-3) + ... (use golden ratio property).

---

### Proof Template: By Contradiction

**Claim:** P is true.

**Proof:**
1. Assume NOT P.
2. Derive a contradiction.
3. Conclude P must be true.

**Example (AVL double rotation necessity):**
- Assume a double rotation is triggered but the inner subtree has height h-2 (not h-1).
- Then the imbalance wouldn't propagate to trigger the parent... contradiction.

---

## 🔧 Code Pattern Reference

### Right Rotation (pseudocode)
```python
def right_rotate(A):
    B = A.left
    A.left = B.right      # Move B's right subtree to A's left
    B.right = A           # A becomes B's right child
    update_height(A)      # Update heights bottom-up
    update_height(B)
    return B              # B is new root
```

### Left Rotation (mirror)
```python
def left_rotate(A):
    B = A.right
    A.right = B.left      # Move B's left subtree to A's right
    B.left = A            # A becomes B's left child
    update_height(A)
    update_height(B)
    return B
```

### MaxHeapify (Sift-Down) for BuildHeap
```python
def max_heapify(A, i, heap_size):
    left = 2 * i
    right = 2 * i + 1
    largest = i

    if left <= heap_size and A[left] > A[largest]:
        largest = left
    if right <= heap_size and A[right] > A[largest]:
        largest = right

    if largest != i:
        swap(A[i], A[largest])
        max_heapify(A, largest, heap_size)
```

### BuildMaxHeap (Build Heap from Array)
```python
def build_max_heap(A):
    n = len(A)
    for i in range(n // 2, 0, -1):  # Start from last non-leaf
        max_heapify(A, i, n)
```

---

## 📊 Indicator Random Variable Patterns

### Pattern 1: Counting Events
```
Q: Expected number of [events]?

Let X_i = 1 if event i occurs, 0 otherwise
E[X] = E[X_1 + ... + X_n] = Σ P(event i)
```

### Pattern 2: Linearity Over All Pairs
```
Q: Expected number of [pairs]?

Let X_{ij} = 1 if pair (i,j) has property P, 0 otherwise
E[X] = Σ_all_pairs P(pair (i,j) has property P)
```

### Pattern 3: Conditional Probability
```
Q: Expected value given condition C?

E[X | C] = Σ P(X=k | C) · k
or use indicator method with conditional probabilities
```

---

## ⏱️ Exam Time Strategy Reference

**Total time:** 110 minutes (Midterm format)

| Section | Est. Time | Strategy |
|---------|-----------|----------|
| **Q1 (Short answers)** | 35 min | Answer all briefly first; expand if time. |
| **Q2 (Tracing/mechanics)** | 20 min | Draw carefully. Redraw if unsure. |
| **Q3 (Probability analysis)** | 15 min | Set up indicator variables clearly. |
| **Q4 (Augmentation)** | 15 min | Explain invariant + update rule. |
| **Q5 (Design problem)** | 20 min | Pseudocode + complexity proof. |
| **Buffer** | 5 min | Check work; add any missing answers. |

---

## 🎓 Things to Check Before Submitting

- [ ] Height definition used consistently?
- [ ] Rotation directions correct (not reversed)?
- [ ] Balance factors calculated correctly?
- [ ] Indicator variables clearly defined?
- [ ] Probability calculations shown?
- [ ] Asymptotic notation consistent (O vs. Θ)?
- [ ] All rotations include height updates?
- [ ] Pseudocode is executable (not vague)?

---

## 🚀 Last-Minute Review (5 Minutes Before Exam)

**Drill these in order:**
1. AVL rotation decision tree (30 seconds)
2. Complexity table (1 minute)
3. Indicator variable pattern (1 minute)
4. BuildHeap complexity reason (1 minute)
5. One tricky rotation example (1.5 minutes)

If you can execute these smoothly, you're ready.

