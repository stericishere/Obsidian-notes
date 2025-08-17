---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 19:54
aliases: Support Vector Machines
tag: 🧠
type: l4
---
# Support Vector Machines (SVM)

## L4 – Principles
> - <u>Goal</u>: Find a decision boundary (hyperplane) that maximizes the margin between classes.
> - <u>Margin</u>: Distance between the hyperplane and the closest data points (support vectors).
> - <u>Key idea</u>: Larger margins improve generalization.
> - <u>Hard-margin SVM</u> (linearly separable case):$$\min_{w, b} \frac{1}{2} \|w\|^2$$
>   subject to$$y_i (w^\top x_i + b) \ge 1, \quad \forall i$$
> - <u>Soft-margin SVM</u> (non-separable case): Introduces slack variables $\xi_i$ to allow margin violations.
---

## L3 – Models
> - <u>Primal form (soft margin)</u>:$$\min_{w, b, \xi} \ \frac{1}{2} \|w\|^2 + C \sum_{i=1}^N \xi_i$$
>   subject to$$y_i (w^\top x_i + b) \ge 1 - \xi_i, \quad \xi_i \ge 0$$
> - <u>Dual form</u>:$$\max_{\alpha} \sum_{i=1}^N \alpha_i - \frac{1}{2} \sum_{i=1}^N \sum_{j=1}^N \alpha_i \alpha_j y_i y_j K(x_i, x_j)$$
>   subject to$$0 \le \alpha_i \le C, \quad \sum_{i=1}^N \alpha_i y_i = 0$$
> - <u>Kernel trick</u>:
>   - Replace dot products with kernel functions $K(x_i, x_j)$ to handle nonlinear boundaries.
>   - Common kernels: linear, polynomial, RBF (Gaussian).
---
## L2 – Operations
> 1. <u>Select kernel</u> based on problem (linear vs nonlinear).
> 2. <u>Set regularization parameter</u> $C$:
>    - Large $C$: less tolerance for misclassification.
>    - Small $C$: more tolerance, larger margin.
> 3. <u>Train</u>:
>    - Solve quadratic optimization problem (dual form).
>    - Identify support vectors (nonzero $\alpha_i$).
> 4. <u>Prediction</u>:
>    - For a new point $x$: $$f(x) = \text{sign}\left( \sum_{i \in SV} \alpha_i y_i K(x_i, x) + b \right)$$
---
## L1 – Experience
> From tutorials:
> - <u>Example</u>: Classify two classes of points with RBF kernel.
>   - Train SVM with different $C$ values to observe margin changes.
>   - Plot support vectors.
> - <u>Observation</u>:
>   - The number of support vectors affects model complexity.
>   - Kernel choice significantly impacts performance on nonlinear data.
---



