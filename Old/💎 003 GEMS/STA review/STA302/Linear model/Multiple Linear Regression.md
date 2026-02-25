**Single Linear Regression(SLR)**
$\beta_0$ = interception
$\beta_1$ = predictor

**In MLR:**
$\hat{\beta_0}$ = interception (mean response when <u>ALL</u> predictors are zero)
$\hat{\beta_1}$ = predictor 1
$\hat{\beta_2}$ = predictor 2
$\hat{\beta_{...}}$ = predictor ...
$\hat{\beta_p}$ = predictor p
- **where** $\hat{\beta_j}$ are the average change in the $Y$ for one-unit increase of $X_j$  when all other predictor stayed the same 
- <u>So we have p+1 of predictor including interception</u>
**Algebraic Form:**
$$yi = \hat{\beta0} + \hat{\beta1}(x1) + \hat{\beta2}(x2) + \hat{\beta{...}}(x{...}) + \hat{\beta{p}}(xp)$$
**Matrix Form:** (usually how we compute)
$$\boldsymbol{Y}=\boldsymbol{X}\boldsymbol{\beta}+\boldsymbol{\varepsilon}$$
where:
$$
\begin{array}{cccc}
\begin{array}{c}
\mathbf{Y}=
\begin{pmatrix}
y_1\\
\vdots\\
y_n
\end{pmatrix}\\[2pt]
\scriptstyle n\times 1
\end{array}
\quad
\begin{array}{c}
\boldsymbol{\beta}=
\begin{pmatrix}
\beta_0\\
\beta_1\\
\vdots\\
\beta_p
\end{pmatrix}\\[2pt]
\scriptstyle (p+1)\times 1
\end{array}
\quad
\begin{array}{c}
\mathbf{X}=
\begin{pmatrix}
1 & x_{11} & \cdots & x_{1p}\\
\vdots & \vdots & \ddots & \vdots\\
1 & x_{n1} & \cdots & x_{np}
\end{pmatrix}\\[2pt]
\scriptstyle n\times(p+1)
\end{array}
\quad
\begin{array}{c}
\boldsymbol{\varepsilon}=
\begin{pmatrix}
\varepsilon_1\\
\vdots\\
\varepsilon_n
\end{pmatrix}\\[2pt]
\scriptstyle n\times 1
\end{array}
\end{array}
$$

**For X:**
- Each column == one predictor
- First column always == 1 (for $\beta_0$ interception)
- discrete will works too

**What are we minimizing?**
$$RSS = \hat{e}^T\hat{e} = \sum_{i=1}^n{\hat{e}^2} = \sum_{i=1}^n{(y_i-(\hat{\beta_0}+\hat{\beta_{1}}x_{i1} ... + \hat{\beta_p}x_{ip}))^2}$$
$$\hat{e}=\boldsymbol{Y}-\boldsymbol{X}\boldsymbol{\beta}$$
**Conditional Nature of multiple predictor model:**
![[Screenshot 2025-10-22 at 02.04.48.png]]
**Why it turns into negative $\hat{\beta}_1$  when there're two?**
- When we have multiple predictor, **it conditions on all other predictors**
- so it consider only one fixed values of all other predictors
	- that's what **conditions on all other predictors** means 

**How do we handle discrete? (Interaction)**
- For example, if we have 3 spices (human, monkey, bird) and we want Y as weight, where $x_1$ = height, $x_2$ = age
- we can do 4 predictor (human = $x_3$, monkey= $x_4$)
- if ($x_3$ = 0, $x_4$ = 0) then that's mean it's a bird
- it will give us different slope of $Y$ (like graph below)
![[Screenshot 2025-10-22 at 07.13.50.png|457x315]]
```r
lm(weight ~ height + age + age:spices, data=data)
```
$$ \hat{y_i} = \hat{\beta_0} + \hat{\beta_1} \ height +  \hat{\beta_2}\ (x_2) + \hat{\beta_3}\ (x_2) \times (x_3) + \hat{\beta_4}\ (x_2) \times (x_4)$$
Predictor $x_2$ is being reuse with different $\beta_j$







