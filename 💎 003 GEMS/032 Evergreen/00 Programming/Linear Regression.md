---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 18:47
aliases:
  - Linear Regression
tags:
  - 🧠
type: l4
---
# Linear Regression:
## Extended explanation:
## L4 – Principles:
> - <u>Goal</u>: Model the relationship between input features and a continuous target variable.
> - <u>Model assumption</u>: The target variable is a linear combination of features plus Gaussian noise.
> - <u>Mathematical form</u>:$$y = w^\top x + b + \epsilon, \quad \epsilon \sim \mathcal{N}(0, \sigma^2)$$
> - <u>Loss function</u>: Mean Squared Error (MSE)$$L(w, b) = \frac{1}{N} \sum_{i=1}^N (y_i - \hat{y}_i)^2$$
> - <u>Key principle</u>: Minimizing MSE under the Gaussian noise assumption is equivalent to performing Maximum Likelihood Estimation (MLE).
---
## L3 – Models:
> - <u>Hypothesis space</u>: All linear functions of the form:$$h_w(x) = w^\top x + b$$
> - <u>Normal Equation solution</u>:$$\hat{w} = (X^\top X)^{-1} X^\top y$$
>   where $X$ is the design matrix.
> - <u>Gradient Descent update</u>:$$w \leftarrow w - \eta \nabla_w L(w)$$
>   with gradient:$$\nabla_w L(w) = -\frac{2}{N} X^\top (y - Xw)$$
---
## L2 – Operations:
> 1. <u>Prepare Data</u>: Construct the design matrix $X$ with a column of ones for the bias term.
> 2. <u>Choose loss function</u>: MSE for regression tasks.
> 3. <u>Solve for parameters</u>:
>    - **Analytical**: Use the normal equation if $X^\top X$ is invertible.
>    - **Numerical**: Use Gradient Descent (GD) or Stochastic Gradient Descent (SGD).
> 4. <u>Evaluate model</u>:
>    - RMSE, MAE, $R^2$ score.

---
## L1 – Experience:
> From tutorials:
> - <u>Example</u>: Predict house prices from features such as size, location, and number of bedrooms.
>   - Fit the model using both the normal equation and GD.
>   - Compare results and convergence speed.
> - <u>Bias–Variance connection</u>:
>   - Adding more features can reduce bias but may increase variance.
>   - Regularization methods (Ridge, Lasso) can reduce variance.

---


