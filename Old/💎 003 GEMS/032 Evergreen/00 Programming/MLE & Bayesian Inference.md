---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 19:28
aliases:
  - MLE & Bayesian Inference
tags:
  - 🧠
type: l4
---
# MLE & Bayesian Inference

## L4 – Principles
> - <u>Goal</u>: Estimate parameters of a probabilistic model from data.
> - <u>Maximum Likelihood Estimation (MLE)</u>: Choose parameters that maximize the likelihood of the observed data.
>   $$
>   \hat{\theta}_{\text{MLE}} = \arg\max_{\theta} \prod_{i=1}^N p(x_i | \theta)
>   $$
> - <u>Log-likelihood</u>: Easier to work with due to sums instead of products.
>   $$
>   \ell(\theta) = \sum_{i=1}^N \log p(x_i | \theta)
>   $$
> - <u>Bayesian Inference</u>: Combines prior beliefs with data evidence.
>   $$
>   p(\theta|D) = \frac{p(D|\theta) p(\theta)}{p(D)}
>   $$
> - <u>MAP estimation</u>: Choose the mode of the posterior distribution.
>   $$
>   \hat{\theta}_{\text{MAP}} = \arg\max_{\theta} \ p(D|\theta) p(\theta)
>   $$
---

## L3 – Models
> - <u>MLE Examples</u>:
>   - Bernoulli parameter: $$\hat{p} = \frac{\sum_{i=1}^N x_i}{N}$$
>   - Poisson rate: $$\hat{\lambda} = \frac{\sum_{i=1}^N x_i}{N}$$
> - <u>Bayesian Example</u>:
>   - Beta-Bernoulli conjugacy: If $$p \sim \text{Beta}(\alpha, \beta)$$ prior and $$k$$ successes in $$n$$ trials:
>     $$
>     p|D \sim \text{Beta}(\alpha + k, \beta + n - k)
>     $$
---

## L2 – Operations
> 1. <u>For MLE</u>:
>    - Write the likelihood function for the model.
>    - Take the log-likelihood.
>    - Differentiate w.r.t parameters and set derivatives to zero.
>    - Solve for parameter estimates.
> 2. <u>For Bayesian inference</u>:
>    - Specify prior distribution.
>    - Compute posterior via Bayes’ rule.
>    - If conjugate prior exists, update parameters analytically.
>    - Otherwise, use approximation (e.g., MCMC).
---

## L1 – Experience
> From tutorials:
> - <u>Example</u>: Coin toss experiment.
>   - MLE: Proportion of heads in observed data.
>   - Bayesian: Update Beta prior to posterior after observing results.
> - <u>Observation</u>:
>   - MLE ignores prior beliefs.
>   - Bayesian approach incorporates prior and is less sensitive to small data.
---



