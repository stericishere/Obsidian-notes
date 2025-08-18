---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 20:10
aliases:
  - Recall (Evaluation Metric)
tags:
  - 🧠
type:
---
# Recall:
## L4 – Principles
> - <u>Goal</u>: Measure how well a model identifies all relevant (positive) instances.
> - <u>Definition</u>: Proportion of actual positives that are correctly identified as positives.
> - <u>Formula</u>:
>   $$
>   \text{Recall} = \frac{\text{TP}}{\text{TP} + \text{FN}}
>   $$
> - <u>Interpretation</u>:
>   - High recall = few false negatives.
>   - Low recall = many false negatives (missed positives).
> - <u>When to prioritize</u>:
>   - When missing a positive case is more costly than a false alarm (e.g., disease detection).
---

## L3 – Models
> - <u>Confusion matrix link</u>:
>   - TP: Correctly predicted positive.
>   - FN: Positive cases predicted as negative.
> - Works alongside <u>precision</u>:
>   - Precision = "Of predicted positives, how many were correct?"
>   - Recall = "Of actual positives, how many did we find?"
> - Often combined in F1-score to balance recall and precision.
---

## L2 – Operations
> 1. Compute TP (true positives) and FN (false negatives) from model predictions.
> 2. Plug into recall formula:
>    $$
>    \text{Recall} = \frac{\text{TP}}{\text{TP} + \text{FN}}
>    $$
> 3. Interpret:
>    - Recall close to 1: Model is capturing nearly all positives.
>    - Recall close to 0: Model is missing most positives.
> 4. Adjust decision threshold to trade off recall vs precision as needed.
---

## L1 – Experience
> From tutorials:
> - <u>Example</u>: Cancer screening test.
>   - High recall ensures most cancer cases are detected, even if it means more false positives.
> - <u>Observation</u>:
>   - Increasing recall often decreases precision, requiring a trade-off depending on application.
---




