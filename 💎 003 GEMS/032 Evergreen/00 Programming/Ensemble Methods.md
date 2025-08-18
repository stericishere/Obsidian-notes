---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 19:59
aliases:
  - Ensemble Methods
tags:
  - 🧠
type:
---
# Ensemble Methods
## L4 – Principles
> - <u>Goal</u>: Combine multiple models to improve predictive performance compared to a single model.
> - <u>Key idea</u>: Aggregating diverse models reduces variance, bias, or both.
> - <u>Types</u>:
>   - Bagging: Reduces variance by averaging predictions over multiple models trained on bootstrap samples.
>   - Boosting: Reduces bias by sequentially training models, each focusing on previous errors.
>   - Stacking: Combines predictions of base models via a meta-model.
---
## L3 – Models
> - <u>Bagging</u>:
>   - Train $M$ models on different bootstrap samples.
>   - Aggregate predictions (mean for regression, majority vote for classification).
>   - Example: Random Forest = bagged decision trees with feature subsampling.
> - <u>Boosting</u>:
>   - Train models sequentially.
>   - Each new model focuses on correcting errors from the previous model.
>   - Examples: AdaBoost, Gradient Boosting Machines (GBM), XGBoost.
> - <u>Stacking</u>:
>   - Train multiple diverse base learners.
>   - Use their outputs as features for a meta-learner.
---
## L2 – Operations
> 1. <u>Bagging</u>:
>    - Draw $B$ bootstrap samples from training set.
>    - Train base model on each sample.
>    - Aggregate outputs.
> 2. <u>Random Forest specifics</u>:
>    - In addition to bagging, randomly select a subset of features at each split.
> 3. <u>Boosting</u>:
>    - Initialize all weights equally.
>    - At each step, increase weight of misclassified examples (AdaBoost) or fit residuals (GBM).
>    - Combine models with weighted voting or additive models.
> 4. <u>Stacking</u>:
>    - Split training set into folds.
>    - Train base models on folds, collect out-of-fold predictions.
>    - Train meta-model on these predictions.
---
## L1 – Experience
> From tutorials:
> - <u>Example</u>: Compare decision tree, bagging, and boosting on a noisy dataset.
>   - Bagging reduces variance, smoother decision boundaries.
>   - Boosting improves accuracy but may overfit if too many rounds.
> - <u>Observation</u>:
>   - Random Forest often performs well out-of-the-box.
>   - Boosting methods require careful tuning of learning rate and tree depth.
---
