---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 19:26
aliases: Expectation–Maximization (EM) Algorithm
tag: 🧠
type: l4
---
# Expectation–Maximization (EM) Algorithm
## L4 – Principles
> - <u>Goal</u>: Find maximum likelihood (or MAP) estimates when data has missing or latent variables.
> - <u>Key idea</u>: Iteratively refine parameter estimates by alternating between estimating hidden variables (E-step) and optimizing parameters (M-step).
> - <u>Likelihood with latent variables</u>:
>   $$
>   p(X | \theta) = \sum_Z p(X, Z | \theta)
>   $$
>   where $Z$ are latent variables.
> - Direct maximization is often intractable; EM maximizes a lower bound on the log-likelihood.
---

## L3 – Models
> - <u>General EM Procedure</u>:
>   1. **E-step**: Compute the expected complete-data log-likelihood:
>      $$
>      Q(\theta | \theta^{(t)}) = \mathbb{E}_{Z|X, \theta^{(t)}}[\log p(X, Z | \theta)]
>      $$
>   2. **M-step**: Maximize $Q$ w.r.t $\theta$ to obtain $\theta^{(t+1)}$.
> - <u>Gaussian Mixture Model (GMM) Example</u>:
>   - Latent variables: Component assignments $z_i$.
>   - Parameters: Means $\mu_k$, covariances $\Sigma_k$, mixing coefficients $\pi_k$.
---

## L2 – Operations
> 1. <u>Initialize parameters</u> $\theta^{(0)}$.
> 2. <u>E-step</u>:
>    - Compute responsibilities (posterior probabilities of latent variables):
>      $$
>      \gamma_{ik} = \frac{\pi_k \mathcal{N}(x_i | \mu_k, \Sigma_k)}{\sum_{j=1}^K \pi_j \mathcal{N}(x_i | \mu_j, \Sigma_j)}
>      $$
> 3. <u>M-step</u>:
>    - Update parameters using $\gamma_{ik}$.
>      $$
>      \pi_k^{\text{new}} = \frac{1}{N} \sum_{i=1}^N \gamma_{ik}
>      $$
>      $$
>      \mu_k^{\text{new}} = \frac{\sum_{i=1}^N \gamma_{ik} x_i}{\sum_{i=1}^N \gamma_{ik}}
>      $$
>      $$
>      \Sigma_k^{\text{new}} = \frac{\sum_{i=1}^N \gamma_{ik} (x_i - \mu_k)(x_i - \mu_k)^\top}{\sum_{i=1}^N \gamma_{ik}}
>      $$
> 4. <u>Check convergence</u> (log-likelihood change < threshold or max iterations reached).
---

## L1 – Experience
> From tutorials:
> - <u>Example</u>: Fit a GMM to 2D data points.
>   - Initialize parameters with k-means.
>   - Run EM until convergence.
>   - Visualize Gaussian components.
> - <u>Observation</u>:
>   - EM guarantees non-decreasing likelihood but may converge to a local optimum.
>   - Good initialization is important for avoiding poor solutions.
---



