---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-02 05:31
aliases: Supervised Learning
tag: 🧠
type: l4
---
# Supervised Learning:
## L4: 
> - <u>Goal</u>: Learn a mapping from ==labeled data==.$$ f: X \to Y $$- <u>Data</u>:
> 	  - <u>Features</u> $$ x \in \mathbb{R}^n$$
> 	  - <u>Target</u> $$ y $$ (numeric for regression, categorical for classification)
> - <u>Key Principle</u>: 
> 	- [[Generalization]] — performance on unseen data is more important than training error.
> - <u>Risk Minimization</u>: Minimize expected loss$$ R(f) = \mathbb{E}_{(x,y) \sim \text{data}}[L(f(x), y)]$$![[Bias–Variance Tradeoff#Bias-Variance Trade-off]
---
## L3 - Model:
> Two main categories:
> 1. <u>Regression Models</u> – predict continuous targets  
>    Example: [[Linear Regression]]  $$y = w^\top x + b$$
> 2. <u>Classification Models</u> – predict discrete targets  
>    Example: <u>Logistic Regression</u> for binary classes:  $$p(y=1|x) = \sigma(w^\top x + b) = \frac{1}{1+e^{-(w^\top x + b)}}$$
> <u>Hypothesis Space</u>: All possible functions the model can represent.
---
## L2 -Operation:
> General supervised learning workflow:
> 1. <u>Prepare Data</u>
>    - Split into <u>training</u>, <u>validation</u>, <u>test</u> sets.
> 2. <u>Choose Model</u> and <u>Loss Function</u>
>    - Regression: [[MSE (Mean Squared Error)]]  
>      $$L = \frac{1}{N} \sum_{i=1}^N (y_i - \hat{y}_i)^2$$
>    - Classification: [[Cross-entropy loss]]
> 3. <u>Train Model</u>
>    - Minimize loss using [[Optimization & Convexity]] (GD, SGD)
> 4. <u>Evaluate</u>
>    - Classification: [[Accuracy]], [[Precision]], [[Recall]], [[F1]], [[ROC-AUC]]
>    - Regression: [[RMSE (Root Mean Squared Error)]], [[MAE (Mean Absolute Error)]]
> 5. <u>Tune Hyperparameters</u>
>    - Grid search or randomized search with cross-validation.
---
## L1 – Experience
> From tutorials:
> - <u>Example</u>: Predict fruit type from size & color.
>   - <u>k-NN</u>: Predict label by majority vote among nearest k neighbors.
>   - <u>Decision Tree</u>: Split features to maximize information gain.
>   - <u>Linear Model</u>: Fit a separating line (or hyperplane) between classes.
> - <u>Observation</u>:
>   - Small k in k-NN → low bias, high variance.
>   - Large k → high bias, low variance.
---
## Extend:
[[Linear Regression]]