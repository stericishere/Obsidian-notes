# TIER 0: Mathematical Foundations — Complete Deep Dive

## 🧠 Why This Matters

**Every question on your midterm requires at least one of these:**
- Proving Big-O complexity
- Setting up indicator random variables
- Computing expected values
- Understanding probability distributions

Weak foundations → mistakes cascade through all other topics.

**Exam Weight:** 35-40% of your points depend on solid TIER 0 understanding, even though it's not tested directly. It's the invisible foundation.

---

## 📊 Part 1: Asymptotic Notation (Big-O, Ω, Θ)

### The Core Idea

You have an algorithm that takes time T(n) to run on input size n.
- For small n, constant factors matter
- For large n, only the dominant term matters

**Asymptotic notation** lets you talk about how T(n) grows *in the limit* without worrying about constants.

### Definition 1: Big-O (Upper Bound)

**Formal:** f(n) ∈ O(g(n)) if ∃ constants c > 0, n₀ > 0 such that:
```
f(n) ≤ c·g(n) for all n ≥ n₀
```

**In English:** f(n) doesn't grow faster than g(n) (up to a constant factor and for large enough n).

**Example:** 5n² + 3n + 7 ∈ O(n²)

*Proof:*
- Choose c = 6, n₀ = 1
- For n ≥ 1: 5n² + 3n + 7 ≤ 6n² ✓ (always true for large n)

**Common Mistake:** Thinking O(n²) means "exactly n²" or "at most n²"
- NO. O(n²) means "grows like n² or slower"
- O(1) ⊂ O(n) ⊂ O(n²) (hierarchy)
- 5n is O(n) AND O(n²) AND O(n³) technically, but we pick the tightest bound

### Definition 2: Omega (Lower Bound)

**Formal:** f(n) ∈ Ω(g(n)) if ∃ constants c > 0, n₀ > 0 such that:
```
f(n) ≥ c·g(n) for all n ≥ n₀
```

**In English:** f(n) grows at least as fast as g(n).

**Example:** 5n² + 3n + 7 ∈ Ω(n²)

*Proof:*
- Choose c = 1, n₀ = 1
- For n ≥ 1: 5n² + 3n + 7 ≥ 5n² ≥ 1·n² ✓

### Definition 3: Theta (Tight Bound)

**Formal:** f(n) ∈ Θ(g(n)) if f(n) ∈ O(g(n)) AND f(n) ∈ Ω(g(n))

**In English:** f(n) grows *exactly* like g(n) (within constant factors).

**Example:** 5n² + 3n + 7 ∈ Θ(n²)

*Proof:* Show both O and Ω bounds above.

### Why Theta Is Better

- O(n²): "Slower than n²" (too loose, includes O(n) algorithms)
- Ω(n²): "Faster than n²" (too loose, includes O(n³) algorithms)
- Θ(n²): "Exactly like n²" (perfect characterization)

**Exam Rule:** When asked for "the complexity," give Θ if possible. Use O/Ω only when Θ isn't known.

---

## ⚡ Part 2: Proof Techniques

### Technique 1: Proof by Induction

**When to use:** Proving properties that depend on a parameter (n, height, etc.)

**Structure:**
```
1. BASE CASE: Prove P(base) is true
2. INDUCTIVE STEP: Assume P(k) for k < n. Show P(n) follows.
3. CONCLUSION: By induction, P(n) is true for all n ≥ base.
```

#### Example 1: Prove Big-O Claim by Induction

**Claim:** 5n² + 3n + 7 ≤ 6n² for all n ≥ 1

**Proof by induction:**

Base case (n=1):
```
5(1)² + 3(1) + 7 = 15
6(1)² = 6
15 ≤ 6? NO.
```

Oops. Let me fix the base case. Try n₀ = 10:

Base case (n=10):
```
5(100) + 30 + 7 = 537
6(100) = 600
537 ≤ 600 ✓
```

Inductive step:
- Assume 5k² + 3k + 7 ≤ 6k² for some k ≥ 10
- Need to show: 5(k+1)² + 3(k+1) + 7 ≤ 6(k+1)²

Expand LHS:
```
5(k+1)² + 3(k+1) + 7
= 5(k² + 2k + 1) + 3k + 3 + 7
= 5k² + 10k + 5 + 3k + 10
= 5k² + 13k + 15
```

By inductive hypothesis:
```
5k² + 13k + 15 ≤ 6k² + 13k + 15
```

Need to show: 6k² + 13k + 15 ≤ 6(k+1)² = 6k² + 12k + 6

This requires: 13k + 15 ≤ 12k + 6, which is FALSE.

So this approach fails. **Induction isn't always the best way for Big-O.**

Instead, use direct algebra:
```
5n² + 3n + 7 ≤ 6n² for large n
⟺ 3n + 7 ≤ n²
⟺ n² - 3n - 7 ≥ 0 (true for n ≥ some threshold)
```

**Lesson:** Induction works great for recurrences and tree properties, but not always for Big-O. Use algebra when possible.

#### Example 2: Prove AVL Height Bound by Induction

**Claim:** In an AVL tree of height h, the minimum number of nodes N(h) satisfies N(h) ≥ φ^(h-1) - 1, where φ ≈ 1.618 (golden ratio).

**Base cases:**
```
N(0) = 1 (single node)
N(1) = 2 (node + 1 child)

φ^(-1) - 1 = 1/φ - 1 ≈ 0.618 - 1 < 0, so base case holds.
```

**Inductive step:**
- Assume N(k) ≥ φ^(k-1) - 1 for all k < h
- Recurrence: N(h) = N(h-1) + N(h-2) + 1 (AVL property)
- So: N(h) ≥ (φ^(h-2) - 1) + (φ^(h-3) - 1) + 1
- = φ^(h-2) + φ^(h-3) - 1
- = φ^(h-3)(φ + 1) - 1
- = φ^(h-3) · φ² - 1 (golden ratio property: φ² = φ + 1)
- = φ^(h-1) - 1 ✓

---

### Technique 2: Proof by Contradiction

**When to use:** Proving uniqueness, impossibilities, or properties that would violate invariants.

**Structure:**
```
1. Assume NOT P (the negation)
2. Derive a logical contradiction
3. Conclude P must be true
```

#### Example: Prove Single Rotation Decreases Subtree Height

**Claim:** After inserting into a perfectly balanced AVL tree, a single rotation always decreases the total subtree height by 1.

**Proof by contradiction:**

Assume a single rotation does NOT decrease height.

Before rotation, the unbalanced node A had height h and BF(A) = 2.
- After single rotation, A is a child of its former child B
- If height stays h, then A's subtree still has same height
- But rotation moved A down, reducing its height rank
- This contradicts the heap property... wait, wrong data structure.

Let me redo this more carefully.

**Better example:** Prove heap property is preserved after left rotation.

**Claim:** After a left rotation on a BST node, the BST property is maintained.

**Proof by contradiction:**

Assume left rotation breaks the BST property.

Before rotation:
```
    A
     \
      B
```

After left rotation:
```
    B
   /
  A
```

For BST property to break, we'd need:
- Some node X with key less than its left child Y's key, OR
- Some node X with key greater than its right child Y's key

But rotation only changes the parent-child relationships locally. All left descendants of A stay left of A, all right descendants stay right, etc.

So BST property is preserved. ✓

---

### Technique 3: Master Theorem (Shortcut for Recurrences)

**When to use:** Solving recurrences of the form T(n) = aT(n/b) + f(n)

**The Theorem:**
```
Given: T(n) = aT(n/b) + f(n), where a ≥ 1, b > 1

Let: n_log = log_b(a)

Case 1: If f(n) ∈ O(n^(log_b(a) - ε)) for some ε > 0
        Then T(n) ∈ Θ(n^log_b(a))

Case 2: If f(n) ∈ Θ(n^log_b(a))
        Then T(n) ∈ Θ(n^log_b(a) · log(n))

Case 3: If f(n) ∈ Ω(n^(log_b(a) + ε)) for some ε > 0
        Then T(n) ∈ Θ(f(n))
```

**Example:** T(n) = 3T(n/2) + n

- a = 3, b = 2, f(n) = n
- log_b(a) = log₂(3) ≈ 1.585
- f(n) = n¹ < n^1.585
- Case 1 applies: T(n) ∈ Θ(n^1.585)

---

## 🎲 Part 3: Probability & Indicator Random Variables

### Concept 1: Probability Spaces

**Definition:** A probability space (Ω, P) has:
- **Ω:** Sample space (all possible outcomes)
- **P:** Probability function (assigns probability to each outcome)

**Example:** Fair coin flip
- Ω = {Heads, Tails}
- P(Heads) = 0.5, P(Tails) = 0.5

**Example:** Random permutation of [1,2,3]
- Ω = {all 6 permutations}
- P(each permutation) = 1/6 (uniform distribution)

### Concept 2: Random Variables

**Definition:** A random variable X is a function from outcomes to real numbers.

**Example:** X = "# of heads in 3 coin flips"
- Outcome HHT → X = 2
- Outcome TTT → X = 0
- X can take values 0, 1, 2, 3

### Concept 3: Indicator Random Variables

**Definition:** X is an indicator if X ∈ {0, 1}
- X = 1 if event E occurs
- X = 0 otherwise

**Key property:** E[X] = P(X = 1) = P(E occurs)

**Why this matters:** Indicator variables turn complex events into simple 0/1 sums.

#### Example: Expected Value with Indicators

**Problem:** You insert [1,2,3,4,5] into a BST in random order. What's the expected depth of node 3?

**Bad approach:** Enumerate all insertion orders, calculate depth for each, average.
(This works but is tedious for large inputs.)

**Better approach (using indicators):**

For each node i ∈ {1,2,3,4,5}, define:
```
X_i = 1 if we visit node i during search for node 3
     = 0 otherwise
```

Then: Depth of node 3 = Σ X_i (# of nodes visited = depth)

Expected depth = E[Σ X_i] = Σ E[X_i] = Σ P(visit node i)

By symmetry: P(visit i) = P(i is an ancestor of 3 in random BST) or P(i = 3)

This requires deeper analysis of random BSTs, but the point is:
- We reduced a complex sum to simple indicator probabilities
- We used linearity of expectation (see next section)

---

### Concept 4: Linearity of Expectation

**Theorem:** E[X₁ + X₂ + ... + Xₙ] = E[X₁] + E[X₂] + ... + E[Xₙ]

**Critical:** This works EVEN IF X₁, X₂, ..., Xₙ are dependent!

**Why this works:**
```
E[X + Y] = Σ P(outcome) · (X(outcome) + Y(outcome))
         = Σ P(outcome) · X(outcome) + Σ P(outcome) · Y(outcome)
         = E[X] + E[Y]
```

The sum distributes, regardless of dependence.

#### Example: Fixed Points in Random Permutation

**Problem:** You have a random permutation of [1,2,3,4,5]. Expected # of elements in their original position?

**Solution:**

Define X_i = 1 if element i is in position i, 0 otherwise

E[total fixed points] = E[X₁ + X₂ + X₃ + X₄ + X₅]
                      = E[X₁] + E[X₂] + ... + E[X₅]
                      = P(1 in pos 1) + P(2 in pos 2) + ... + P(5 in pos 5)
                      = 1/5 + 1/5 + 1/5 + 1/5 + 1/5
                      = 1

**Surprising result:** For ANY n, expected fixed points = 1!

This only works because of linearity of expectation + symmetry.

---

### Concept 5: Conditional Probability

**Definition:** P(A | B) = P(A AND B) / P(B)

**In words:** Probability of A given that B happened.

#### Example: Indicator Variable with Condition

**Problem:** You shuffle a deck and look at the first card. What's the expected number of cards that stay in place?

**Different question from before!** Now we know the first card is in position 1.

Let X_i = 1 if card i stays in place

E[X₁ | first card is card 1] = P(card 1 in position 1 | first card is card 1) = 1

For i ≠ 1:
E[X_i | first card is card 1] = P(card i in position i | first card is card 1) = 1/51 (among remaining 51 positions)

Total expected fixed points = 1 + 51 · (1/51) = 1 + 1 = 2

So conditioning changes the answer!

---

## 🔧 Part 4: Common Exam Patterns

### Pattern 1: "Prove this algorithm is O(f(n))"

**Structure of answer:**
```
1. Define T(n) = [runtime on input of size n]
2. Set up the recurrence: T(n) = ... (in terms of subproblems)
3. Solve using: Master Theorem, or unroll recurrence, or induction
4. State: T(n) ∈ Θ(f(n))
5. Show witness constants c₁, c₂, n₀
```

**Example:**
```
Claim: BuildHeap is O(n)

1. T(n) = time to sift-down all nodes
2. Work at level i = (n/2^i) nodes × O(i) time = O(n · i/2^i)
3. Total = Σ O(n · i/2^i) = O(n · Σ i/2^i) = O(n · 2) = O(n)
4. T(n) ∈ Θ(n)
```

---

### Pattern 2: "Calculate the expected value"

**Structure of answer:**
```
1. Define random variable X
2. Break into indicator variables: X = X₁ + X₂ + ...
3. E[X] = Σ E[X_i] = Σ P(event i)
4. Calculate each P(event i)
5. Sum and simplify
```

**Example:**
```
Claim: E[# fixed points in random permutation] = 1

1. X = total fixed points
2. X = X₁ + X₂ + X₃ + X₄ + X₅ where X_i = [element i in position i]
3. E[X] = Σ E[X_i] = Σ P(X_i = 1)
4. P(X_i = 1) = 1/5 for all i (by symmetry)
5. E[X] = 5 · (1/5) = 1
```

---

### Pattern 3: "Prove this invariant holds"

**Structure of answer:**
```
1. State the invariant I(n)
2. Prove BASE CASE: I(1) is true
3. Prove INDUCTIVE STEP: Assume I(k) for k < n, show I(n)
4. Conclude: I(n) holds for all n ≥ 1
```

---

## ⚠️ Common Mistakes & Fixes

### Mistake 1: Confusing O, Ω, Θ

❌ **Wrong:** "This algorithm is O(n), so it must be Θ(n)"
✅ **Right:** "O(n)" means ≤ n (upper bound). Could be O(1) too. Use Θ(n) if you want tight bound.

### Mistake 2: Forgetting Constants in Big-O

❌ **Wrong:** "5n ∈ O(n)" and "0.001n ∈ O(n)" are different
✅ **Right:** Both are true. Big-O ignores constant factors.

### Mistake 3: Assuming Independence Breaks Linearity

❌ **Wrong:** "E[X + Y] = E[X] + E[Y] only if X and Y are independent"
✅ **Right:** Linearity ALWAYS holds, dependent or not.

### Mistake 4: Indicator Variable Mistakes

❌ **Wrong:** X_i = "number of times event i occurs" (this is a count, not an indicator)
✅ **Right:** X_i = 1 if event occurs, 0 otherwise. Then E[X_i] = P(event).

### Mistake 5: Wrong Base Case in Induction

❌ **Wrong:** Starting induction at n=0 when you need n=10
✅ **Right:** Pick base case large enough that inductive step works. Adjust n₀.

---

## 🎓 Mastery Checklist

After studying TIER 0, you should be able to:

- [ ] Define O(f), Ω(f), Θ(f) rigorously from first principles
- [ ] Prove 3n² + 5n + 10 = Θ(n²) with explicit constants
- [ ] Identify which complexity class an algorithm belongs to (using Master Theorem or algebra)
- [ ] Set up an indicator random variable for a given problem
- [ ] Calculate E[X] using linearity of expectation
- [ ] Prove a statement by induction with correct base case + inductive step
- [ ] Identify common pitfalls and avoid them

---

## 🔥 Final Tips for Exams

### Tip 1: State Your Assumptions
"I'm using 0-based indexing" or "Height of a node is the # of edges below it"

### Tip 2: Show Your Work
Don't just write the answer. Show:
- How you set up the problem
- Each step of the calculation
- Why you chose that approach

### Tip 3: Label Constants
"Let c = 6, n₀ = 10" when proving Big-O bounds.

### Tip 4: Use Linearity Explicitly
"By linearity of expectation: E[X₁ + X₂ + ...] = E[X₁] + E[X₂] + ..."

### Tip 5: Sanity Check
"Is this answer reasonable? For n=10, does this make sense?"

---

## 📚 Practice Prompts

**1. Prove T(n) = 2T(n/2) + n ∈ Θ(n log n)**

Use Master Theorem or unroll the recurrence tree.

**2. Expected value in hashing:**
An array of size m holds n keys. Expected # of empty slots = ?

(Hint: Use indicator variables, one per slot.)

**3. Prove by induction:** The sum 1 + 2 + 4 + 8 + ... + 2^(n-1) = 2^n - 1

**4. Prove by contradiction:** In an AVL tree, a left-right rotation must be double, not single.

---

Try these before looking at Deep-Dives or Practice-Questions. They'll expose gaps in TIER 0 understanding!

