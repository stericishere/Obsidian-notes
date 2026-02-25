**NOTE: Assumption are related to the population, not the sample**
1. **Linearity** of Relationship
	- implies two thing to the **Population relationship**
		- The true relationship is **linear in the coefficients**
		- The true relationship is exactly $Y=X\beta+\e$ 
			- no predictor **omitted from $X$** 
				- Didnt missed any predictor from the population trend
			- no **predictor include in $X$** that shouldn't be present
				- No predictor that are not included in the model is 
			- no predictor in $X$ that are in **wrong functional form**
2. **Uncorrected Error** 
	- refer to **Population Error** as well as **Population Responses ($Y$)**
	- not the **Predictor**
	- meaning EACH data point are independents
		- it must not be related or connected to any other data point
		- it doesnt give us info about any other data point
		- 
3. **Constant Error Variance**
	- When we conditions on any predictor, we always get the same variance (for Error and Responses)
	- Each **Conditional Distribution of the predictors** have the SAME **spread** (same variance)
	- We assume that the only difference between each predictor conditional distribution is **only the mean**
4. **Normality Errors** Assumption
	- Each **Conditional Distribution** must have the same shape
	- Harder to verify in small sample

### Importance of Assumption
- Linearity ensure we estimated coefficients unbiasedly 
- Uncorrected Error ensure correct precision of estimates
- Constant variance ensures we obtain reasonable estimates of variability for all conditional means
- Normality allows us to utilize properties of Normality random variables for inferential purpose

### Identifying using graph
![[Screenshot 2025-10-22 at 12.12.36.png|522x386]]

**For constant variance: (predictor v.s. fitted)**
Fanning pattern:
![[IMG_88E9D2A768C2-1.jpeg|328x298]]

**For linearity: (predictor v.s. residual)**
![[Screenshot 2025-10-22 at 12.40.14.png|291x299]]

**Both: (predictor v.s. fitted)**
![[Screenshot 2025-10-22 at 12.40.37.png|294x247]]

**Uncorrelated Error (residual v.s. fitted)**
![[Screenshot 2025-10-22 at 12.42.53.png|332x205]]
![[Screenshot 2025-10-22 at 12.43.29.png|331x227]]

### In MLR
**Can only using residual graph to conclude only if satisfy this 2 condition**
1. The **Conditional Mean of Y** (expectation) is a linear combination
2. The **Conditional Mean of a predictor** that conditions on other predictors, it can only be at most linear combination

**Identifying from Graph**
1. **Conditional Mean of Y** by <u>Response v.s. Fitted values</u>
	- Look for identifiable non-linear trend
	- Does it make a diagonal trend line?
- If failed we cant use <u>Residual v.s. predictor</u>
2. **Conditional Mean of predictors** by <u>All pairwise predictor correlation</u>
	- look for curve or any non-linear pattern

 ![[Screenshot 2025-10-23 at 08.19.43.png]]
 
 - For correcting non-constant variance

**Box-Cox Transformation**
![[Screenshot 2025-10-23 at 08.24.01.png]]





1. Find variance
$$ s^2 = \frac{RSS}{n-p-1}$$
$$Var(\hat{\beta_0})= s^2(\boldsymbol{X^T}\boldsymbol{X})^{-1}_{(1,1)}$$
$$Var(\hat{\beta_1})= s^2(\boldsymbol{X^T}\boldsymbol{X})^{-1}_{(2,2)}$$
2. Find T by 
3. then do CI or H testing
	- if H testing
	1. set H: $\beta$ = 0,  $H_a$: $\beta$ !=  0, 
	2. if T > t* then reject $H_a$
	3. meaning linear relationship exists
	   
	   
![[Screenshot 2025-10-23 at 11.00.48.png]]