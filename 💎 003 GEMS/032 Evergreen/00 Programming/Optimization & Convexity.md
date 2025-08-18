---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 18:07
aliases:
  - Optimization
tags:
  - 🧠
type: l4
---
# 4. Optimization & Convexity

## L4 – Principles:
> - <u>Goal</u>: Find parameter values that minimize (or maximize) an objective function.
> - <u>Optimization problem</u>:$$\min_{\theta} f(\theta)$$
> - <u>Convex function</u>: A function $f$ is convex if for any $\theta_1, \theta_2$ and $\lambda \in [0, 1]$:
> $$f(\lambda \theta_1 + (1 - \lambda)\theta_2) \leq \lambda f(\theta_1) + (1 - \lambda) f(\theta_2)$$
> 	- Convex function indicate that function $f$ only have one local minimum which is global minimum
> - <u>Key property</u>: In convex optimization, any local minimum is also a global minimum.
> - <u>Gradient</u>:$$\nabla_\theta f(\theta) = \left[ \frac{\partial f}{\partial \theta_1}, \dots, \frac{\partial f}{\partial \theta_d} \right]$$
---
## L3 – Models:
> - <u>Gradient Descent (GD)</u>:$$\theta \leftarrow \theta - \eta \nabla_\theta f(\theta)$$
>   where $\eta$ is the learning rate.
> - <u>Stochastic Gradient Descent (SGD)</u>:
>   - Uses a single data point (or mini-batch) to approximate the gradient for each update.
> - <u>Momentum</u>:
>   - Adds a velocity term to accelerate convergence:$$v_t = \beta v_{t-1} + \nabla_\theta f(\theta_{t-1}), \quad \theta_t = \theta_{t-1} - \eta v_t$$
> - <u>Convergence criteria</u>:
>   - Gradient norm $\|\nabla_\theta f\|$ below a threshold.
>   - Change in loss is very small.
>   - Maximum iterations reached.
---
## L2 – Operations:
> 1. <u>Initialize parameters</u> (often randomly or with heuristics).
> 2. <u>Compute gradient</u>:
>    - Analytical derivation if possible.
>    - Numerical approximation (finite differences) if needed.
> 3. <u>Update parameters</u>:
>    - GD for exact gradients.
>    - SGD for efficiency with large datasets.
> 4. <u>Check convergence</u>.
> 5. <u>Adjust learning rate</u> if convergence is slow or unstable.
---
## L1 – Experience:
> From tutorials:
> - <u>Example</u>: Minimize$$f(x) = \frac{1}{2}x^\top A x - b^\top x$$with $A$ positive definite.
>   - Start from an initial $x_0$ and perform GD updates.
>   - Observe that convergence speed depends on $\eta$.
> - <u>Observation</u>:
>   - Too large $\eta$ → divergence.
>   - Too small $\eta$ → very slow convergence.
> 
## <u>Main points:</u>

(GD, SGD)