### Main idea
Cross entropy measure the difference between two probability distributions
- the true distribution (label, target)
- the predicted distribution

### Pros & Cons
**Pros**
	Perfect for classification
	Penalizes confident mistakes
	Better gradients than MSE in classification
	It Give You Probabilistic interpretation
**Cons**
	Sensitive to outliers / noisy labels (so clean data really important)
	**Overconfidence problem**
		Cross-entropy often make the model  **overconfident** 
		(predicting extreme probabilities like 0.999)
			Would need [[Label smoothing]] or [[Temperature scaling]]
	

### Situation 