---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 20:04
aliases: Evaluation Metrics & Model Selection
tag: 🧠
type:
---
# Evaluation Metrics & Model Selection

## L4 – Principles
> - <u>Goal</u>: Assess model performance and choose the best model configuration.
> - <u>Key idea</u>: Metrics should align with the task (classification, regression) and account for data characteristics (class imbalance, noise).
> - <u>Model selection</u>: Compare models via validation performance, not training performance, to estimate generalization ability.
---
## L3 – Models
> - <u>Classification metrics</u>:
>   - [[Accuracy]]: $$\frac{\text{TP + TN}}{\text{Total}}$$
>   - [[Precision]]: $$\frac{\text{TP}}{\text{TP + FP}}$$
>   - [[Recall]]: $$\frac{\text{TP}}{\text{TP + FN}}$$
>   - F1-score: Harmonic mean of precision & recall.
>   - ROC curve & AUC: Trade-off between TPR and FPR.
> - <u>Regression metrics</u>:
>   - MSE: $$\frac{1}{N} \sum_{i=1}^N (y_i - \hat{y}_i)^2$$
>   - RMSE: $$\sqrt{\text{MSE}}$$
>   - MAE: $$\frac{1}{N} \sum_{i=1}^N |y_i - \hat{y}_i|$$
>   - $R^2$: Proportion of variance explained by the model.
> - <u>Model selection techniques</u>:
>   - Hold-out validation.
>   - k-fold cross-validation.
>   - Leave-one-out cross-validation.
---
## L2 – Operations
> 1. <u>Choose metric</u>:
>    - Classification: Accuracy for balanced classes, precision/recall for imbalanced.
>    - Regression: RMSE or MAE depending on sensitivity to outliers.
> 2. <u>Split data</u> into training/validation/test sets.
> 3. <u>Perform model selection</u>:
>    - Grid search or random search for hyperparameters.
>    - Use validation performance to compare models.
> 4. <u>Final evaluation</u>:
>    - Train selected model on full training+validation set.
>    - Evaluate once on held-out test set.
---
## L1 – Experience
> From tutorials:
> - <u>Example</u>: Compare logistic regression and random forest on an imbalanced dataset.
>   - Use stratified k-fold cross-validation.
>   - Evaluate with ROC-AUC instead of accuracy.
> - <u>Observation</u>:
>   - Cross-validation provides a more reliable estimate than a single train/test split.
>   - Metric choice can change which model appears "best".
---
