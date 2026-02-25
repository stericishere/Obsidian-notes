### Main idea
Instead of having **hard one-hot target labels**

$$y=[\frac{C}{ϵ​}​,\frac{C}{ϵ​},1−ϵ+\frac{C}{ϵ​}​,\frac{C}{ϵ​}​,\frac{C}{ϵ​}]$$
- where $C$ is the number of class
- and ϵ​ is the smoothing factor
	where it's a hyperparameters that we set

Instead of “the cat image is 100% cat, 0% dog, 0% horse…”,
we say “the cat image is ~90% cat, but maybe ~2% chance dog, ~2% chance horse, etc.”

This prevents the model from being **overconfident**.
## Benefits
1. **Regularization**
    - Reducing overfitting by preventing the model to memorize the exact hot-key
2. **Better calibration**
    - Predictions reflect uncertainty more realistically 
	    (no extreme 0.999 probs)
3. **Stability in training**
    - Especially in Transformers and GANs, 
	    Avoids peaky distributions that cause [[Gradient vanishing]]