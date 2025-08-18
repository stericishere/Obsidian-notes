---
banner: "[[Notes-2.jpg]]"
creation date: 2025-07-22 22:06
aliases:
  - Overfitting and Underfitting
tags:
  - 🧠
type: ch
---
# Overfitting and Underfitting
### <u>Overfitting </u> <span style="background:#fff88f">(high variance)</span>
> - happens when a model learns the training data _too_ well
> - It also capture the noise and outlier of the training data
> - Therefore, it performs great on the data it was trained on but fails to generalize to new, unseen data. (validation set)😵
> <u>Solution:</u>
> 	1. **Cross-Validation:** 
> 		1. cross-validation helps ensure the model's perform consistently across different subsets of the data.
> 	2. **Regularization:**
> 		1. Adding a penalty for larger parameters in the model (like L1 or L2 regularization)
> 	3. **Early Stopping:** 
> 		1. Monitoring the model's performance on a validation set and stopping training when performance starts to decrease            can also help prevent overfitting.

### <u>Underfitting</u> <span style="background:#fff88f">(high bias)</span>
> - occurs when a model have a hard time to capture the underlying patterns in the data. 
> - It performs poorly on both the training data and new data.




## Extended explanation:
> - ![[Bias–Variance Tradeoff#Bias-Variance Trade-off]]


