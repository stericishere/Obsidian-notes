# CSC263H1 Knowledge Map: Data Structures & Algorithms

## 🧩 Conceptual Dependency Graph

### **TIER 0: Foundations (Prerequisites for Everything)**
```
┌─────────────────────────────────────────┐
│ Mathematical Foundations (Week 1)       │
├─────────────────────────────────────────┤
│ • Big-O, Ω, Θ notation (asymptotic)    │
│ • Proof by induction                    │
│ • Proof by contradiction                │
│ • Indicator random variables            │
│ • Linearity of expectation              │
│ • Basic probability (uniform, discrete) │
└─────────────────────────────────────────┘
         ↓
    Applied in EVERY other topic
```

**Why Tested Heavily:** Nearly every exam question requires proving complexity or calculating expected values. Weak foundation = cascading errors across all topics.

**Exam Yield:** ⭐⭐⭐⭐⭐ (35-40% of points depend on solid proofs)

---

### **TIER 1: Core ADT Concepts (Week 1-2)**
```
┌──────────────────────────────────────────┐
│ Abstract Data Types (ADT)                │
│ vs. Data Structure (Implementation)      │
└──────────────────────────────────────────┘
         ↓
    ┌────────────────────────┐
    │ Priority Queue ADT     │
    │ (Insert, FindMax,      │
    │  ExtractMax)           │
    └────────────────────────┘
         ↓
    ┌────────────────────────┐
    │ Dictionary ADT         │
    │ (Insert, Delete,       │
    │  Search, Update)       │
    └────────────────────────┘
```

**Key Insight:** Always distinguish between *what* an ADT does (interface) vs. *how* a data structure implements it. Different implementations of same ADT have different complexity tradeoffs.

**Exam Yield:** ⭐⭐ (Appears in design questions; usually 5-10% of points)

---

### **TIER 2: Heap-Based Structures (Week 2)**
```
┌─────────────────────────────────────────────┐
│ HEAPS (Implement Priority Queue)            │
├─────────────────────────────────────────────┤
│ • Binary Max-Heap / Min-Heap                │
│ • Operations: Insert, ExtractMax, BuildHeap │
│ • Complexity: All O(log n) or O(n)          │
└─────────────────────────────────────────────┘
         ↓ (Apply as tool)
    ┌──────────────────────────────────┐
    │ Heap Applications                │
    │ • Heap Sort                      │
    │ • Merge k sorted lists (Q: O(n)) │
    │ • Maintain Median (2-heap trick) │
    └──────────────────────────────────┘
         ↓ (Related: augmentation)
    ┌──────────────────────────────────┐
    │ Augmented Heaps                  │
    │ • Add .min, .max, .size fields   │
    │ • Update during Insert/Delete    │
    └──────────────────────────────────┘
```

**Most Tested Pattern:**
- Tracing BuildHeap (code tracing exam question)
- Augmenting heaps to solve novel problems
- Expected values of heap operations

**Exam Yield:** ⭐⭐⭐ (Heaps alone: 10-15% of points; Augmentation: 5-10%)

---

### **TIER 3: Search Trees (Weeks 3-4) ← HEAVIEST EXAM FOCUS**
```
┌────────────────────────────────────────────────┐
│ BINARY SEARCH TREES (BST)                      │
│ Implement Dictionary ADT                       │
├────────────────────────────────────────────────┤
│ • Standard Operations (Insert, Delete, Search) │
│ • Height depends on insertion order            │
│ • Worst-case: Unbalanced = O(n) height        │
│ • Average-case: Random insertions = O(log n)  │
│ • Common misconception traps:                  │
│   - Confusing BST with heap structure          │
│   - Assuming all BST operations are O(log n)   │
└────────────────────────────────────────────────┘
         ↓ (Key dependency!)
┌────────────────────────────────────────────────┐
│ AVL TREES (Self-Balancing BST)                 │
│ HIGHEST-LEVERAGE TOPIC FOR EXAMS               │
├────────────────────────────────────────────────┤
│ • Balance Factor (BF) Invariant: -1 ≤ BF ≤ 1  │
│ • Single Rotations (LL, RR cases)             │
│ • Double Rotations (LR, RL cases) ⚠️ TRICKY   │
│ • Insertion: Insert → Rebalance up tree        │
│ • Deletion: Delete → Rebalance up tree         │
│ • All operations guaranteed O(log n)           │
│ • Height theorem: h < 1.44 * log2(n+2)        │
└────────────────────────────────────────────────┘
         ↓ (Generalization)
┌────────────────────────────────────────────────┐
│ RED-BLACK TREES & OTHER BALANCED TREES         │
│ (Secondary focus; same principles)             │
└────────────────────────────────────────────────┘
```

**Most Tested Patterns:**
1. **Rotation Mechanics** (MUST know cold):
   - When exactly a rotation is triggered
   - Single vs. double rotation decision logic
   - Height changes after rotation

2. **Invariant Violations** (Adversarial exam questions):
   - "After this insertion, which nodes are unbalanced?"
   - "Trace the rebalancing steps"
   - "Prove the height after deletion"

3. **Edge Cases:**
   - Deletion with BF(A)=+2, BF(B)=0 (height doesn't decrease)
   - Height ambiguity (edges vs. nodes)
   - Leaf height definitions

**Exam Yield:** ⭐⭐⭐⭐⭐ (20-30% of points directly; 15-20% more in combined questions)

---

### **TIER 4: Hash-Based Structures (Week 2 → Referenced in Midterm)**
```
┌──────────────────────────────────────┐
│ HASHING (Alternative Dictionary)     │
├──────────────────────────────────────┤
│ • Hash Function                      │
│ • Hash Table                         │
│ • Collision Resolution:              │
│   - Chaining (linked lists)          │
│   - Open Addressing                  │
│ • Load Factor & Rehashing            │
│ • Average-case: O(1) w/ SUHA*        │
│ • Worst-case: O(n) (all collisions)  │
└──────────────────────────────────────┘
*Simple Uniform Hashing Assumption
```

**Most Tested Pattern:**
- Distinguishing avg vs. worst case
- Effect of load factor on collision probability
- Why SUHA is required for O(1) avg-case claims

**Exam Yield:** ⭐⭐ (5-8% of points; usually short-answer)

---

### **TIER 5: Augmented Data Structures (Week 5) ← FINAL EXAM FRONTIER**
```
┌─────────────────────────────────────────┐
│ AUGMENTED DATA STRUCTURES               │
│ (Extend existing DS with new queries)   │
├─────────────────────────────────────────┤
│ • How to add new attributes to nodes    │
│ • Maintain invariants during rotations  │
│ • Ensure O(log n) complexity still      │
│ • Design custom ADTs                    │
│ • Real-world example: Interval trees    │
└─────────────────────────────────────────┘
```

**Why This Is on Exams:**
Tests whether you understand the *structure* of a data structure deeply enough to modify it without breaking properties.

**Exam Yield:** ⭐⭐⭐⭐ (10-15% of points; often the hardest question)

---

## 🎯 Dependency Structure for Study Optimization

```
Must Master FIRST              Then Apply To                Then Extend With
─────────────────────────────────────────────────────────────────────────
Big-O, Proof by Induction  →   AVL Rotations            →   Augmented AVL
                           →   Heap Analysis            →   2-Heap Median
                           →   Expected Values          →   Avg-case proofs

Indicator Random Variables →   Average-case analysis   →   Custom ADT design

ADT vs. Data Structure      →   Dictionary = BST        →   AVL vs. RedBlack
                           →   Priority Q = Heap        →   Hashing as alt
```

---

## ⚠️ Exam Pattern Recognition

### High-Frequency Question Structures

| Pattern                                                  | Appears in    | Why It's Tested                                                             |
| -------------------------------------------------------- | ------------- | --------------------------------------------------------------------------- |
| **"Trace this insertion/deletion"**                      | ~30% of exams | Tests mechanical understanding + proves you know rotation triggers          |
| **"Prove height is O(log n)"**                           | ~25% of exams | Tests rigor + whether you understand the Fibonacci connection in AVL bounds |
| **"What is the expected value of..."**                   | ~20% of exams | Tests probabilistic reasoning; foundational skill                           |
| **"Design a data structure to solve..."**                | ~20% of exams | Tests synthesis + augmentation principles                                   |
| **"Compare complexity: worst vs. average vs. expected"** | ~25% of exams | Tests whether you distinguish failure modes                                 |
| **"This operation doesn't work; why?"**                  | ~15% of exams | Tests whether you understand invariants                                     |

---

## 🚀 Optimal Study Path (Ranked by ROI)

| Priority | Topic | Est. Study Time | Exam Yield | Pre-requisites |
|----------|-------|-----------------|------------|-----------------|
| 🔴 **CRITICAL** | AVL Rotations (All 4 cases) | 4 hours | 20-25% | Big-O, Proof basics |
| 🔴 **CRITICAL** | Expected Value Calculations | 3 hours | 15-20% | Probability, Indicator vars |
| 🔴 **CRITICAL** | Heap BuildHeap + Tracing | 2 hours | 10-15% | Big-O, Array indexing |
| 🟠 **HIGH** | AVL Height Theorem Proof | 2 hours | 8-10% | Fibonacci, Induction |
| 🟠 **HIGH** | BST Height Analysis | 2 hours | 8-12% | Worst vs. Avg case |
| 🟠 **HIGH** | Augmented Data Structure Design | 3 hours | 10-15% | AVL mastery |
| 🟡 **MEDIUM** | Hashing (avg vs. worst case) | 1.5 hours | 5-8% | SUHA assumption |
| 🟡 **MEDIUM** | Heap Applications (merge, median) | 1.5 hours | 5-8% | Heap fundamentals |
| 🟢 **LOWER** | Red-Black Trees (if time) | 1 hour | 2-3% | AVL rotation principles |

**Total Recommended:** 20-25 hours of focused study

---

## 💡 Mental Models to Develop

### 1. **AVL Tree Mental Model**
Think of AVL trees as "self-healing" BSTs. After every insertion/deletion, the tree checks if any node has become "imbalanced" (BF out of [-1,1]). If so, it performs a local rotation to restore balance. The rotation type depends on the *shape* of the imbalance (outer vs. inner).

### 2. **Heap Mental Model**
Heaps are "loosely sorted" trees stored in arrays. The only guarantee: parent ≥ children (max-heap). This weak property enables fast insertion/deletion but loses full sorting. Use heaps when you only need partial order (like top k) not full sort.

### 3. **Augmentation Mental Model**
Augmentation = "Add extra data to each node to answer new queries fast." The key constraint: the new data must be *locally computable* (from node's own data + children's data) and must survive all rotations without breaking O(log n).

### 4. **Complexity Analysis Mental Model**
Always ask three questions:
- **Worst-case:** What is the *worst* input for this operation? (e.g., deletion of root from completely unbalanced tree)
- **Average-case:** Across all "reasonable" inputs, what's typical? (e.g., random insertion sequence)
- **Probabilistic:** If we make randomized choices, what's the expected cost? (e.g., expected collisions in hashing)

Different structures excel at different scenarios.

---

## 🎓 What Each Topic Tests (Exam Cognitive Levels)

| Topic | Tests | Level |
|-------|-------|-------|
| **Big-O notation** | Can you model runtime rigorously? | Foundational |
| **BST operations** | Do you understand how tree structure affects complexity? | Foundational |
| **AVL rotations** | Can you execute precise mechanical steps AND understand WHY? | Applied |
| **Expected values** | Can you set up random variables and reason probabilistically? | Applied |
| **Augmentation** | Can you *design* new structures under constraints? | Synthesis |
| **Height proofs** | Can you prove properties rigorously (induction, contradiction)? | Rigor |

---

## ✅ Self-Check: Are You Ready?

After studying each tier, ask yourself:

**Tier 0:** Can you prove Big-O and set up indicator random variables *from scratch* in 5 minutes?

**Tier 1:** Can you explain the difference between an ADT and a data structure in your own words?

**Tier 2:** Can you trace BuildHeap on a random 8-element array correctly?

**Tier 3:** Can you draw all 4 AVL rotation cases from memory AND explain when each is triggered?

**Tier 4:** Can you explain why hashing is O(1) avg-case but requires SUHA?

**Tier 5:** Can you design an augmented AVL tree to answer a novel query in O(log n)?

If you answer "no" to any of these, drill that tier before moving on.
