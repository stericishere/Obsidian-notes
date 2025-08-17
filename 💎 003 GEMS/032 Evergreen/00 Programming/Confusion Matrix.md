---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-02 05:44
aliases: Confusion Matrix
tag: 🧠
type: ml
---
# Confusion Matrix
### <u>Purpose</u>:
> Confusion Matrix is used to messure the performance of a classification model
> It provides a summary of the prediction results on a classification problem, showing the counts of predictions including
> 	1. True positive, 
> 	2. True negative, 
> 	3. False positive (type 1 error)
> 	4. False negative (type 2 error)
>
> Interpreting the confusion matrix helps us understand not just how many predictions were correct
> - but also the types of errors the model is making, which can help us to improve the model further."

### Metric we get:
> 1. **Accuracy:** 
> 	(TP + TN) / (TP + TN + FP + FN) 
> 	- the overall correctness of the model.
> 2. **Precision:** 
> 	TP / (TP + FP) 
> 	- the accuracy of positive predictions.
> 3. **Recall (Sensitivity):** 
> 	TP / (TP + FN) 
> 	- the ability of the model to find all relevant cases.
> 4. **F1 Score:** 
> 	2 * (Precision * Recall) / (Precision + Recall) 
> 	- the harmonic mean of precision and recall, useful for imbalanced classes.
