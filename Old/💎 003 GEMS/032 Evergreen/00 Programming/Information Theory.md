---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 18:12
aliases:
  - Information Theory
tags:
  - 🧠
type: l4
---
# Information Theory:
## L4 – Principles:
> - <u>Entropy</u>: Measures the average uncertainty of a random variable.  $$H(X) = - \sum_{x \in \mathcal{X}} p(x) \log_2 p(x)$$
> - <u>Joint Entropy</u>: Measures the uncertainty of two variables together.  
>   $$H(X, Y) = - \sum_{x, y} p(x, y) \log_2 p(x, y)$$
> - <u>Conditional Entropy</u>: Measures the remaining uncertainty of one variable given knowledge of another.  $$H(Y|X) = - \sum_{x, y} p(x, y) \log_2 p(y|x)$$
> - <u>Information Gain (IG)</u>: Reduction in entropy when a variable is known.  $$IG(Y|X) = H(Y) - H(Y|X)$$
> - <u>Key Principle</u>: In decision trees, choose the split that maximizes Information Gain.
---
## L3 – Models:
> - <u>Decision Trees</u>:
>   1. At each node, calculate the entropy before and after a split.
>   2. Compute Information Gain for each candidate feature.
>   3. Choose the feature with the highest IG for the split.
> - <u>Stopping Criteria</u>:
>   - All samples in a node belong to the same class.
>   - No remaining features.
>   - Maximum tree depth reached.
---
## L2 – Operations:
> 1. <u>Calculate entropy of the target</u> before the split.
> 2. <u>For each feature</u>:
>    - Partition the dataset based on feature values.
>    - Calculate the weighted average entropy after the split.
>    - Compute Information Gain.
> 3. <u>Select the feature with maximum IG</u>.
> 4. Repeat for each child node until stopping criteria are met.
---

## L1 – Experience:
> From tutorials:
> - <u>Example</u>: Suppose we classify fruits into {apple, orange}.
>   - Before split:  $$ H(Y) = - \left( \frac{5}{9} \log_2 \frac{5}{9} + \frac{4}{9} \log_2 \frac{4}{9} \right) $$
>   - After splitting on "color", compute $H(Y|X)$ and find:  $$ IG(Y|X) = H(Y) - H(Y|X) $$
> - <u>Observation</u>:
>   - High IG means the feature gives more certainty about the label.
>   - If IG = 0, the feature provides no useful information.
---
