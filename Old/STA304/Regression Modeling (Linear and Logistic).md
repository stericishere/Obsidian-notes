**Linear Regression** 
- `lm()` or `svyglm()`
- variable (Y) must be **numerical**
$$y=β_0​+β_1​x+ϵ$$
**Logistic Regression**
- `glm()` or `svyglm()`
- family="binomial"
- **binary response variable** (0/1)
$$log(\frac{1−p}{p​})=β_0​+β_1​x$$
**Bayesian**
- `brm`
- This assume:
	- **Prior distribution** of the **beta** parameters
- then we use the **Prior distribution** and the data to estimate
	- **Posterior distribution** and estimate the coefficients
**Model Selection Criteria (for Nested Models)**
- Likelihood Ratio test
