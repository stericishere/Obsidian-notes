----
![](https://www.youtube.com/watch?v=FgakZw6K1QQ)
## PCA Assumption:
**Linearity:**
	PCA assumes that the relationships in the data can be captured by **linear combinations** of features.
		PCA cannot handle **nonlinear manifolds**
**Large Variance = Important Structure:**
	PCA assumes the directions of **highest variance** are the most informative.
**Mean-centered data:**
	PCA assumes the data has been **centered** (subtract the mean) before decomposition.
**Orthogonality of Components:**
	The new feature axes (principal components) are **uncorrelated and orthogonal**.
	Which is eigendecomposition of covariance matrix

## Steps:
**Move the data to Center**
	Given data matrix $X \in \mathbb{R}^{n \times d}$ with $n$ samples and $d$ features
> 	1. <u>Compute the empirical mean:</u>
$$\hat{\mu} = \frac{1}{n}\sum_{i=1}^n x_i$$
> 	2. <u>Center the data:</u> 
$$X_{\text{centered}} = X - \hat{\mu}$$
> 	3. Computer [[Covariance Matrix]]:
$$\hat{\Sigma} =​\sum_{i=1}^N​(​(x^{(i)})^⊤x^{(i)}) = \frac{1}{n} X_{\text{centered}}^\top X_{\text{centered}}$$
> 	4. [[Eigendecomposition]]: Solve the eigenvalue of $\hat{\Sigma}$
$$\hat{\Sigma} v_k = \lambda_k v_k$$
- Where $v_k$ is an [[eigenvector]] (principal component) (direction)
- And $\lambda_k$ **corresponding** [[eigenvalue]] (variance explained along the direction) 
- Then we order [[eigenvalue]] from high to low --> $\lambda_1, \lambda_2, \dots, \lambda_k$
- Then we construct $V_k$ --> $v_1, v_2, \dots, v_k$
> 	5. Maximizing **the variance** of the projected data
> 	   - **Not really maxing we just choose the biggest eigenvalues**
$$arg \max_{∥u∥=1}​ \frac{1}{N}\sum_{i=1}^N​(u^⊤x^{(i)})^2 = \sum_{i=1}^N​(u^T​x^{(i)})((x^{(i)})^⊤u^⊤)$$
$$ = u^T\sum_{i=1}^N​(​x^{(i)} )((x^{(i)})^⊤)u^⊤ = u^T\hat{\Sigma}u$$
- Why maxing the variance of projection = minimizing **reconstruction error**?
- $A^2$ + $B^2$ = $C^2$, $\| (u^\top x) u \|^2 + \| x - (u^\top x) u \|^2 =\|x\|^2$ 
- where $A$ is the projection distance, and $B$ is this distance between projected point and $OG$ point, and $x$ is the OG vector
- By minizing $B^2$ = $C^2 - A^2$ , since $C^2$ is fix, it also means we maxing A which is the projection distance

>	6. Select Top-$K$ Components:
- Sort eigenvalues $\lambda_1 \geq \lambda_2 \geq \cdots \geq \lambda_d$, and take the top-$K$ eigenvectors form the [[Projection Matrix]],  ![[Projections]]

> 	6. Project the data into the $K$-dimensional subspace:                           ($K$ Orthogonal direction)
$$Z = X_{\text{centered}} V_K  $$
## Ideas
- PCA finds the **directions (principal components)** in feature space where the data **varies the most**. (it tells us more info about that data)
- PCA finds the **directions of** [[Principal Components]]
- Projecting onto those directions keeps most of the information, while dropping low-variance “noise” directions.



- [[01 Linear Dimensionality Reduction]]
- [[02 Objectives - Minimize Reconstruction Error]]
- [[03 Objectives - Maximize Variance]]
- [[04 Empirical Mean - Origin of subspace]]
- [[05 Principal Components - Top eigenvectors of covariance matrix]]
- [[06 Applications - Faces]]
- [[07 Applications - Digits]]