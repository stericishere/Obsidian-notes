---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 19:09
aliases: Classification
tag: 🧠
type: l4
---
# Classification

## L4 – Principles
> - <u>Goal</u>: Predict a discrete class label for each input sample.
> - <u>Decision boundary</u>: Surface in feature space separating different predicted classes.
> - <u>Probabilistic approach</u>: Model the probability of each class given the input.
> $$p(y|x) = \frac{\text{likelihood} \times \text{prior}}{\text{evidence}}$$
> - <u>Loss function</u>: Cross-entropy for probabilistic classifiers: $$L = - \sum_{i=1}^N \sum_{c=1}^C y_{ic} \log p_{ic}$$
---

## L3 – Models
> - <u>Logistic Regression</u> (binary classification): $$p(y=1|x) = \sigma(w^\top x + b) = \frac{1}{1 + e^{-(w^\top x +b)}}$$
> - <u>Softmax Regression</u> (multi-class):  $$p(y=c|x) = \frac{\exp(w_c^\top x + b_c)}{\sum_{j=1}^C\exp(w_j^\top x + b_j)}$$
> - <u>k-Nearest Neighbors (k-NN)</u>:
>   - Assigns class based on the majority among the k closest points in feature space.
> - <u>Decision Trees</u>:
>   - Classify based on feature splits maximizing information gain.
---
## L2 – Operations
> 1. <u>Preprocess data</u>: Normalize or standardize features if needed.
> 2. <u>Choose classifier</u>:
>    - Logistic regression for linear decision boundaries.
>    - k-NN or decision tree for nonlinear boundaries.
> 3. <u>Train model</u>:
>    - Logistic/Softmax: Optimize cross-entropy loss via GD or SGD.
>    - k-NN: Store training data (lazy learning).
> 4. <u>Evaluate performance</u>:
>    - Accuracy, precision, recall, F1-score, ROC-AUC.
> 5. <u>Tune hyperparameters</u>:
>    - k in k-NN.
>    - Tree depth in decision trees.
>    - Regularization strength in logistic regression.
---
## L1 – Experience
> From tutorials:
> - <u>Example</u>: Classify handwritten digits using softmax regression.
>   - Normalize pixel intensities.
>   - Train with cross-entropy loss.
>   - Evaluate using accuracy and confusion matrix.
> - <u>Observation</u>:
>   - Imbalanced datasets may require precision/recall over accuracy.
>   - Logistic regression outputs probabilities, allowing for threshold adjustment.
---

