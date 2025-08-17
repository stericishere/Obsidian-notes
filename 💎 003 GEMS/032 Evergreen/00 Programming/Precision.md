---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 19:42
aliases: Precision
tag: 🧠
type:
---
# Precision
![[image-3.png|435x433]]
## For only Ture/False:
![[image-5.png]]
> A metric that measure the percentage of the correctness over TP(True positive) and FP (False Positive):
$$\frac{\text{TP}}{\text{TP + FP}}$$
---
## For multi-class:
> A metric that **measure** the percentage of the correctness over a certain class:
$$\frac{\text{True Predition on a certain class}}{\text{True Predition + False Prediction}}$$
---
## Pros:

## Cons:
- Precision does not consider **false negatives.** 
	- Meaning: it does not account for the cases when we miss our target event!
