# CSC263H1 Study Guide with Recall Checkpoints

## How to Use This Guide

Each topic has:
- **MUST Know:** Essential facts/skills. If you don't nail this, you'll lose points.
- **Should Know:** Important but slightly less critical.
- **Nice to Know:** Edge cases, history, deeper theory.

For each, there are **recall prompts** to test yourself. Don't read the answer—try first.

---

## 🔴 TIER 1: Foundations (Master These First)

### Topic: Big-O Notation & Asymptotic Analysis

#### MUST Know
- [ ] Can define O(f(n)), Ω(f(n)), Θ(f(n)) from first principles
- [ ] Can determine the dominant term: O(n² + n log n + 100) = ?
- [ ] Can compare growth rates: Is 2^n faster or slower than n^10?
- [ ] Know: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n)

#### Recall Prompt 1
**Q:** Prove that 2n² + 3n + 5 = Θ(n²).
<details>
<summary>Check your answer</summary>

**Expected answer:**
By definition, Θ(n²) means ∃ constants c₁, c₂, n₀ such that c₁·n² ≤ 2n² + 3n + 5 ≤ c₂·n² for all n ≥ n₀.

Choose: c₁ = 1, c₂ = 3, n₀ = 5.
- Lower bound: 1·n² ≤ 2n² + 3n + 5 ✓ (always true for large n)
- Upper bound: 2n² + 3n + 5 ≤ 3·n² ✓ (true for n ≥ 5)

</details>

#### Recall Prompt 2
**Q:** An algorithm has T(n) = 3T(n/2) + n. What is the complexity?
<details>
<summary>Check your answer</summary>

**Expected answer:** Use Master Theorem: a=3, b=2, f(n)=n.
- log_b(a) = log₂(3) ≈ 1.585
- n^1.585 > n¹ = f(n)
- By Case 1: T(n) = Θ(n^1.585) = Θ(n^log₂3)

Or solve by recursion tree: each level has 3 times more work, depth is log₂(n).

</details>

#### Should Know
- [ ] Can distinguish tight bounds (Θ) from loose bounds (O)
- [ ] Understand why we care about asymptotic analysis (constant factors don't matter for large n)

#### Nice to Know
- [ ] Know the formal definitions with ε-δ rigor
- [ ] Little-o notation (o, ω)

---

### Topic: Indicator Random Variables & Expected Value

#### MUST Know
- [ ] Indicator variable Xᵢ is always 0 or 1
- [ ] E[Xᵢ] = P(Xᵢ = 1)
- [ ] Linearity: E[X₁ + X₂ + ...] = E[X₁] + E[X₂] + ...
- [ ] Can set up an indicator variable for a given problem

#### Recall Prompt 1
**Q:** You flip a fair coin 10 times. What's the expected number of heads?
<details>
<summary>Check your answer</summary>

**Expected answer:**
- Define Xᵢ = 1 if flip i is heads, 0 otherwise
- E[Xᵢ] = P(heads) = 1/2 for each flip
- Total heads = X₁ + X₂ + ... + X₁₀
- E[total] = E[X₁] + ... + E[X₁₀] = 10 · (1/2) = 5

</details>

#### Recall Prompt 2
**Q:** In a random permutation of [1,2,3,4,5], what's the expected number of elements in their "original" position (inversions)?

<details>
<summary>Check your answer</summary>

**Expected answer:**
- Define Xᵢ = 1 if element i is in position i, 0 otherwise
- P(element i in position i) = 1/n (by symmetry, each position equally likely)
- E[elements in place] = Σ P(Xᵢ=1) = Σ 1/n = n · (1/n) = 1

(This is a classic result: expected # of fixed points in a random permutation = 1)

</details>

#### Should Know
- [ ] Understand why linearity of expectation works even when events aren't independent
- [ ] Can compute conditional probabilities if needed

---

## 🟠 TIER 2: Core Data Structures

### Topic: Binary Search Trees (BST)

#### MUST Know
- [ ] BST property: left < node < right
- [ ] Operations: Search, Insert, Delete (and their code)
- [ ] Worst-case height: O(n) if unbalanced
- [ ] Average-case height: O(log n) if insertions are random
- [ ] Worst-case search time: O(n)
- [ ] Average-case search time: O(log n)

#### Recall Prompt 1
**Q:** I insert [5, 3, 7, 1, 9] into a BST in that order. Draw the tree and give its height.

<details>
<summary>Check your answer</summary>

**Expected answer:**
```
       5
      / \
     3   7
    /     \
   1       9
```
Height: 2 (if height = # edges) or 3 (if height = # nodes). Clarify with your exam rubric.

</details>

#### Recall Prompt 2
**Q:** What's the worst-case input sequence for BST insertion (to maximize height)?

<details>
<summary>Check your answer</summary>

**Expected answer:** Any sorted sequence, e.g., [1,2,3,4,5]. This creates a linked list structure, giving height O(n).

</details>

#### Should Know
- [ ] Balanced vs. unbalanced tree performance
- [ ] Why insertion order matters

---

### Topic: Heaps (Max-Heap & Min-Heap)

#### MUST Know
- [ ] Max-heap property: Parent ≥ children
- [ ] Min-heap property: Parent ≤ children
- [ ] Operations: Insert, ExtractMax, BuildHeap
- [ ] Insert: O(log n) [bubble up]
- [ ] ExtractMax: O(log n) [remove root, move last to root, sift down]
- [ ] BuildHeap: O(n) [NOT O(n log n)!]
- [ ] Array representation: left child of i = 2i, right = 2i+1, parent = ⌊i/2⌋

#### Recall Prompt 1
**Q:** Why is BuildHeap O(n) and not O(n log n)?

<details>
<summary>Check your answer</summary>

**Expected answer:**
Work done = Σ(height of node i) but most nodes are at the bottom with small height.
- n/4 nodes at height 1: work = n/4 · 1
- n/8 nodes at height 2: work = n/8 · 2
- ...
Total = n · (1/4 + 2/8 + 3/16 + ...) = n · 2 = O(n).

The series Σ(k/2^k) converges to 2, so total is O(n).

</details>

#### Recall Prompt 2
**Q:** Trace BuildMaxHeap on [2, 1, 3, 4, 5].

<details>
<summary>Check your answer</summary>

**Expected answer:**
Start at i = 2 (node 3), work down to i = 1.
- i = 2 (node 3): children 4,5. Max(3,4,5)=5. Swap. Array: [2,1,5,4,3].
- i = 1 (node 2): children 1,5. Max(2,1,5)=5. Swap. Array: [5,1,2,4,3].
  - Recursively heapify position 1: children 1,2. Max(1,1,2)=2. Swap. Array: [5,2,1,4,3].
  - Continue sift-down...

Final: [5, 4, 2, 1, 3] or similar (valid max-heap).

</details>

#### Should Know
- [ ] Min-heap [mirror of max-heap]
- [ ] Heap sort using heaps
- [ ] Applications: priority queues, heap-merge

---

## 🔴 TIER 3: AVL Trees (Highest ROI)

### Topic: AVL Tree Rotations

#### MUST Know (Non-Negotiable)
- [ ] Balance factor: BF = height(right) - height(left)
- [ ] AVL invariant: -1 ≤ BF ≤ 1 for all nodes
- [ ] When to rotate: First ancestor with BF = ±2
- [ ] Single rotation (LL, RR): When BF(parent) and BF(child) have same sign
- [ ] Double rotation (LR, RL): When BF(parent) and BF(child) have opposite signs
- [ ] All four rotation types: code and when to use

#### Recall Prompt 1: CRITICAL
**Q:** Node A has BF = -2, left child B has BF = -1. Which rotation?

<details>
<summary>Check your answer</summary>

**Expected answer:** LL case (Left-Left). Same signs (-2 and -1). Perform **right rotation on A**.

After: B becomes root, A is B's right child.

</details>

#### Recall Prompt 2: CRITICAL
**Q:** Node A has BF = -2, left child B has BF = +1. Which rotation?

<details>
<summary>Check your answer</summary>

**Expected answer:** LR case (Left-Right). Opposite signs (-2 and +1). Perform:
1. **Left rotation on B**
2. **Right rotation on A**

This converts LR → LL case.

</details>

#### Recall Prompt 3: CRITICAL
**Q:** After inserting a node, draw the tree and identify ALL unbalanced nodes. Which rotation fixes it?

(Use example from past midterm if available)

<details>
<summary>Check your answer</summary>

Work from the inserted node up. Mark each node's BF. First one with |BF| > 1 needs rotation.

</details>

#### Recall Prompt 4: RR and RL Cases
**Q:** Complete the rotation table:

| Case | Parent BF | Child BF | Rotation |
|------|-----------|----------|----------|
| LL | -2 | -1 | ? |
| LR | -2 | +1 | ? |
| RR | +2 | +1 | ? |
| RL | +2 | -1 | ? |

<details>
<summary>Check your answer</summary>

| Case | Parent BF | Child BF | Rotation |
|------|-----------|----------|----------|
| LL | -2 | -1 or 0 | Right rotate parent |
| LR | -2 | +1 | Left rotate child, then right rotate parent |
| RR | +2 | +1 or 0 | Left rotate parent |
| RL | +2 | -1 | Right rotate child, then left rotate parent |

</details>

#### Should Know
- [ ] Why rotations preserve BST property
- [ ] Height changes after rotation (usually decreases by 1)

#### Edge Case: Zero BF in Deletion
- [ ] In deletion, BF(parent) = +2, BF(child) = 0 is possible
- [ ] Still perform single rotation as if BF(child) = +1
- [ ] But: subtree height doesn't decrease (rebalancing may propagate further)

---

### Topic: AVL Height Theorem

#### MUST Know
- [ ] Theorem: Height of AVL tree with n nodes is h < 1.44 · log₂(n+2)
- [ ] Proof idea: Define N(h) = minimum # nodes in AVL tree of height h
- [ ] Recurrence: N(h) = N(h-1) + N(h-2) + 1
- [ ] This is related to Fibonacci: N(h) ≈ φ^h / √5
- [ ] Therefore: n ≥ φ^h ⇒ h ≤ log_φ(n) ⇒ h ∈ O(log n)

#### Recall Prompt 1
**Q:** Write the recurrence for N(h) and explain why it has that form.

<details>
<summary>Check your answer</summary>

**Expected answer:**
```
N(h) = N(h-1) + N(h-2) + 1
```

Why? An AVL tree of height h with minimum nodes has:
- Left subtree of height h-1 (contributes N(h-1) nodes)
- Right subtree of height h-2 (contributes N(h-2) nodes, one less to maintain balance)
- The root node itself (contributes 1)

This is **tight**: if both subtrees had height h-1, the tree wouldn't be of height h.

</details>

#### Recall Prompt 2
**Q:** Prove by induction that N(h) ≥ φ^(h-1) - 1, where φ = (1+√5)/2 ≈ 1.618.

<details>
<summary>Check your answer</summary>

**Expected answer (sketch):**
- Base: N(1) = 1 ≥ φ^0 - 1 = 0 ✓
- Inductive step: Assume N(k) ≥ φ^(k-1) - 1 for k ≤ h-1.
- Then: N(h) = N(h-1) + N(h-2) + 1 ≥ (φ^(h-2) - 1) + (φ^(h-3) - 1) + 1
- Note: φ² = φ + 1 (golden ratio property)
- So: φ^(h-2) + φ^(h-3) = φ^(h-3) · (φ + 1) = φ^(h-3) · φ² = φ^(h-1) ✓

</details>

---

## 🟡 TIER 4: Advanced Topics

### Topic: Augmented Data Structures

#### MUST Know
- [ ] Augmentation = adding extra data to nodes for new operations
- [ ] Key constraint: New data must be computable from node's own data + children's data in O(1)
- [ ] Example: .min field in AVL tree stores minimum key in subtree
- [ ] Must update augmented fields during rotations (doesn't increase complexity)

#### Recall Prompt 1
**Q:** I want to augment an AVL tree with a `.count` field = # of nodes in subtree. How do I update it during a right rotation?

<details>
<summary>Check your answer</summary>

**Expected answer:**

Before rotation (A is left child of B):
```
      B
     / \
    A   C
   / \
  T1  T2
```

After rotation (B is right child of A):
```
      A
     / \
    T1  B
       / \
      T2  C
```

Update counts:
```
A.count = 1 + T1.count + T2.count  (same as before rotation)
B.count = 1 + T2.count + C.count  (changed! now has T2 and C)
```

Both are O(1) updates.

</details>

#### Should Know
- [ ] When augmentation *breaks* the O(log n) property (if new field can't be updated in O(1))
- [ ] Real-world examples: interval trees, segment trees

---

### Topic: Expected Value Analysis & Hashing

#### MUST Know
- [ ] Average-case complexity requires **Simple Uniform Hashing Assumption (SUHA)**
- [ ] SUHA: Each key is equally likely to hash to any slot (independent of other keys)
- [ ] Chaining: Insert O(1), Search O(1 + α) where α = load factor
- [ ] Open addressing: Similar avg-case analysis, but constants differ
- [ ] Worst-case (no matter what): O(n) if all keys hash to same slot

#### Recall Prompt 1
**Q:** Why doesn't hashing guarantee O(1) for all sequences? What's a counterexample?

<details>
<summary>Check your answer</summary>

**Expected answer:**
If you have an adversarial hash function (or an attacker chooses keys), all keys can hash to the same slot. Then searching for any key requires checking the entire list: O(n).

Example: If hash function is h(x) = x mod m, and all inputs are multiples of m, then all hash to slot 0.

</details>

---

## 📋 Exam-Ready Checklist

### Before Midterm, Verify:

- [ ] **Rotations:** Can execute all 4 cases from memory, rotating your own example
- [ ] **Expected value:** Can set up indicator variables and compute probabilities
- [ ] **BuildHeap:** Can trace and explain why O(n)
- [ ] **Height proofs:** Can prove AVL height is O(log n)
- [ ] **Augmentation:** Can design an augmented structure and analyze its complexity
- [ ] **BST vs. AVL:** Explain trade-offs
- [ ] **Hashing vs. BST:** Explain when to use each

### Time-Pressure Strategy:

- **If 1 hour left:** Skip advanced proofs, focus on tracing and rotations
- **If 30 min left:** Do all short-answer, skip longest proof question
- **If 10 min left:** Attempt all, write partial solutions (partial credit)

---

## 🎯 Recall & Diagnosis

After each study session, ask yourself:

1. Can you draw and rotate an AVL tree without notes? (MUST)
2. Can you prove BF trigger for all 4 cases? (MUST)
3. Can you set up indicator variables correctly? (MUST)
4. Can you explain why BuildHeap is O(n) and Heapsort is O(n log n)? (SHOULD)
5. Can you design an augmented structure? (SHOULD)

If ❌ on any MUST, drill it before moving on.

