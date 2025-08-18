---
banner: "[[Notes-2.jpg]]"
creation date: 2025-07-22 22:15
aliases:
  - bias
  - variance tradeoff
tags:
  - 🧠
type: ch
---
# Bias-Variance Trade-off
## L4:
>   - <u>Bias</u>: Error from wrong model assumptions.
>   - <u>Variance</u>: Error from sensitivity to fluctuations between different training sets drawn from the same data distribution. 
> 	  - large difference in performance between different training set
>   - <u>Noise</u>: Irreducible error due to randomness in data.

## L3:

A model with high **bias** is often underfitting
> - meaning the model is too simple to capture the underlying patterns

A model with high **variance** is overly complex and overfitting
> - meaning the model failing to generalize to new, unseen data (overfitting)
![[image-2.png]]

<u>What's special about it?</u>
> - therefore finding the right balance is important to build a model

<u>How?</u>
1. Cross-Validation
2. Regularization
3. Ensemble Methods
	1. Bagging
	2. Boosting

