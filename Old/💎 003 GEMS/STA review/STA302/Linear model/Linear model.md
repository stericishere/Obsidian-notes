**Notice**
- Linear regression doesnt represent linear relationship between the data
- we can fit our linear model with y/$x^2$,
- and the linear relationship between them is y / $x^2$
- Linear regression
$$y_i = ax_i + b$$
- estimate the population mean 𝜇
  $$\overline{𝑦} = \sum_{i=1}^n y_i/n $$

- estimate the sample variance $s^2$
  $$s^2 =  \sum_{i=1}^n (y_i - \overline{𝑦})^2 / n-1$$

**A population trend:**  $Y = 𝛽_0 + 𝛽_1𝑋 + 𝜀$
- Y is the random response variable
- X is the fixed predictor variable
- 𝜀 is the random error, given by $𝜀 = Y - 𝛽_0 - 𝛽_1𝑋$
	- Funcational part:
		- $𝐸[𝑌 | 𝑋] = 𝛽_0 + 𝛽_1𝑋$
	- Estimate $𝛽_0$ , $𝛽_1$
	- by Sample data: pairs $(x_1, y_1), ..., (x_n, y_n)$

**Total Error in Population** 
- by error: $𝜀 = Y - 𝛽_0 - 𝛽_1𝑋$
- total error: $\sum_{i=1}^n 𝜀^2 = (Y_i - 𝛽_0 - 𝛽_1𝑋_i)^2 = (Y - E[X_i | Y_i])^2$

**Estimate Trend**
- $\hat{y_i} = \hat{𝛽_0} + \hat{𝛽_1}x_i + \hat{e_i}$
	- Sample error: **residuals** = $\hat{e_i} = y_i - (\hat{𝛽_0} + \hat{𝛽_1}x_i) = y_i - \hat{y_i}$
	- therefore, **total error for sample**:
		- RSS = $\sum_{i=1}^n \hat{e_i}^2 = \sum_{i=1}^n (y_i - (\hat{𝛽_0} + \hat{𝛽_1}x_i))^2$
		- we try to minimise RSS
	- **Why we square RSS?**
		- Prevent negative
		- Easier to work with algebraically
		- Penalizes distant points more than closer point

**Step by Step**
1. estimating equation for given model with parameters present
2. Take partial derivatives of the equation w.r.s to each unknown parameters
3. Set each derivative == 0 to obtain score equation
4. Rearrange equations to isolate and solve for each unknown parameters

**Example**
1. $$\hat{𝛽_0} = \overline{y} - \hat{𝛽_1}\overline{x}$$
- Require the slope $\hat{𝛽_1}$ 
- "no relationship" == horizontal at $\hat{𝛽_0}$ = y
- **Interpretation**
	- Intercept
	- mean/average response when predictor is zero
		- should always consider wether it's meaningful / realistic

2. $$\hat{𝛽_1} = \frac{\sum_{i=1}^n x_iy_i - n\overline{x} \ \overline{𝑦}}{\sum_{i=1}^n x_i^2 - n \overline{x}^2} = \frac{\sum_{i=1}^n (x_i - \overline{x}) (y_i - \overline{𝑦})}{\sum_{i=1}^n (x_i - \overline{x})^2}$$
- Numerator(Sample covariance): 
	- Deviations away from the mean of x and mean of y
- Denominator (Total Variance in predictor): 
	- Sample variance of X ($s^2$)
- **Interpretation**
	- Intercept
	- the change in mean/average for one-unit of increase of predictor
**IMPORTANT**
- if a predictor is in different form (e.g. $x^2$)
	- then we need appropriate values or to rederive the formula