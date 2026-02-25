## Clarity what resources we have:
> **What is the size of the data we can collect?**
- Quote
	1. **What is the size of the data we can collect?**
	2. **Do we have enough computational resources to train a complex model**
	3. **Can I assume that we have the data size is enough for complex computation**
	4. **Model Complexity vs. Efficiency? Interpretiabilty?**
	5. **Computational resource we have against the performance we wanna achieve**
- What's other resources we have besides data?
	- Computation resource (GPUs, hardwares)
	- How many time we have? 
	- human resources
- Key point
	- Model Selection & Training
		1. Select the model from pool of models (Comparsion between models)
		2. Implement the pipeline for training model
		3. Hyperparameter tuning, model validation and selection 
	- Experiment Tracking **(Evaluation)**
		- ML metrics --> measure performance 
			- ([[Recall]] vs [[Precision]])
			- Use tools to keep track of different model versions (Tensorboard)

### Dimension
- [[Consistency]]

### Loss function
[[MSE]]
[[Cross entropy]]
[[Perceptual Loss]]

### Problem during Training
[[Gradient vanishing]]
[[Gradient exploding]]
[[Overfitting and Underfitting]]
	----- **Regularization** -----
	----- Reducing [[Overfitting and Underfitting]] -----
		1. [[L1 Regularization]]
		2. [[L2 Regularization]]
		3. [[Dropout]]
		4. [[Early Stopping]]
		5. [[Data Augmentation]]
		6. [[Weight Constraints & Normalization]]
