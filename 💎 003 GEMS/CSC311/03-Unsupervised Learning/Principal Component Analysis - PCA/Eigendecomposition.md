----

$$\hat{\Sigma} = \frac{1}{n} X_{\text{centered}}^\top X_{\text{centered}}$$
Eigendecompose:
$$Σ^=QΛQ^⊤, with\ Q=[v_1,\dots,v_d]\ and \ Λ=diag(λ_1,…,λ_d)$$
and $λ_1$ = PC1 variance 

## How to Compute
1. Find the Eigenvalues by solving the **characteristic equation**:
$$det(\hat{Σ}−λI)=0$$
2. Find the **homogeneous equation** (set to 0) for each row:
$$(\hat{Σ}−λ_k​I)v_k=0$$
- where k is the column number
- then we can solve the whole system from the equation
1. **Interpretation:**
	$v_1$ - is the **first principal component direction** (max-variance axis).
	$λ_1$ - is the variance explained by PC1
	$v_2$ - is the **PC2** the second largest variance axis.
	$λ_2$ - is the variance explained by PC2