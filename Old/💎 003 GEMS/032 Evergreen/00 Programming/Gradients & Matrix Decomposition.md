---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 19:25
aliases:
  - Gradients & Matrix Decomposition
tags:
  - 🧠
type: l4
---
# Gradients & Matrix Decomposition

## L4 – Principles
> - <u>Goal</u>: Understand how to compute and use derivatives in optimization, and how to decompose matrices for analysis and computation.
> - <u>Gradient</u>: Vector of partial derivatives indicating the direction of steepest ascent.$$\nabla_\theta f(\theta) = \left[ \frac{\partial f}{\partial \theta_1}, \dots, \frac{\partial f}{\partial \theta_d} \right]$$
> - <u>Jacobian</u>: Matrix of first-order partial derivatives for vector-valued functions.
> - <u>Hessian</u>: Matrix of second-order partial derivatives, describing curvature.
> - <u>Matrix decomposition</u>: Factorizing a matrix into components to simplify operations and reveal structure.
---
## L3 – Models
> - <u>Eigen-decomposition</u>:
>   $$A v = \lambda v$$
>   where $\lambda$ is an eigenvalue and $v$ an eigenvector.
> - <u>Singular Value Decomposition (SVD)</u>:$$A = U \Sigma V^\top$$
>   where:
>   - $U$: left singular vectors
>   - $\Sigma$: singular values (diagonal matrix)
>   - $V$: right singular vectors
> - <u>Applications</u>:
>   - PCA uses SVD to find principal components.
>   - Low-rank approximation for compression.
---
## L2 – Operations
> 1. <u>Gradients</u>:
>    - For scalar functions: Differentiate w.r.t each parameter.
>    - For vector functions: Compute Jacobian.
>    - For optimization: Use gradient in update rules.
> 2. <u>Eigen-decomposition</u>:
>    - Solve $\det(A - \lambda I) = 0$ for eigenvalues.
>    - Find corresponding eigenvectors.
> 3. <u>SVD</u>:
>    - Compute eigen-decomposition of $A^\top A$ and $A A^\top$.
>    - Arrange singular values in $\Sigma$ in descending order.
---
## L1 – Experience
> From tutorials:
> - <u>Example</u>: Perform PCA on a dataset.
>   - Standardize features.
>   - Compute covariance matrix.
>   - Perform eigen-decomposition or SVD to extract principal components.
> - <u>Observation</u>:
>   - The first few principal components capture most of the variance.
>   - SVD is numerically more stable than direct eigen-decomposition for PCA.
---




