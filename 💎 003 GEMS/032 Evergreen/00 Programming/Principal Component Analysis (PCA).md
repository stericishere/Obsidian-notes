---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 19:30
aliases:
  - Principal Component Analysis (PCA)
tags:
  - 🧠
type: l4
---
# Principal Component Analysis (PCA)
## L4 – Principles:
> - <u>Goal</u>: Reduce dimensionality while preserving as much variance in the data as possible.
> - <u>Key idea</u>: Find orthogonal directions (principal components) that maximize variance.
> - <u>Variance maximization formulation</u>:$$\max_{\|w\|=1} \ \text{Var}(w^\top x)$$
> - <u>Equivalence</u>: Maximizing variance is equivalent to finding eigenvectors of the covariance matrix with the largest eigenvalues.
---
## L3 – Models:
> - <u>Covariance matrix</u>:$$\Sigma = \frac{1}{N} \sum_{i=1}^N (x_i - \mu)(x_i - \mu)^\top$$
> - <u>Eigen-decomposition</u>:
>   - Principal components are eigenvectors of $\Sigma$.
>   - Variance explained by each component = corresponding eigenvalue.
> - <u>SVD connection</u>:
>   - If $X$ is mean-centered, PCA can be computed via:$$X = U \Sigma V^\top$$
>     - Columns of $V$ are principal components.
>     - Singular values relate to variance.
---
## L2 – Operations:
> 1. <u>Standardize data</u> if features have different scales.
> 2. <u>Center data</u> by subtracting the mean.
> 3. <u>Compute covariance matrix</u> $\Sigma$.
> 4. <u>Find eigenvalues and eigenvectors</u> of $\Sigma$.
> 5. <u>Select top k components</u> based on largest eigenvalues.
> 6. <u>Project data</u> onto these components: $$Z = X W_k$$
---
## L1 – Experience:
> From tutorials:
> - <u>Example</u>: Reduce 100-dimensional image features to 2D for visualization.
>   - Apply PCA and plot projected points.
>   - Compare variance retained with different k values.
> - <u>Observation</u>:
>   - The first few components usually capture most of the variance.
>   - PCA is sensitive to feature scaling.
---


