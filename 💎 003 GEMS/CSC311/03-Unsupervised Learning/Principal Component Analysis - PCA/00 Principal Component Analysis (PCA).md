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
> 	3. [[Covariance Matrix]]:
$$\hat{\Sigma} = \frac{1}{n} X_{\text{centered}}^\top X_{\text{centered}}$$
> 	4. [[Eigendecomposition]]: Solve the eigenvalue problem $\hat{\Sigma}$
$$\hat{\Sigma} v_k = \lambda_k v_k$$
- Where $v_k$ is an [[eigenvector]] (principal component) (direction)
- And $\lambda_k$ **corresponding** [[eigenvalue]] (variance explained along the direction) 

>	5. Select Top-$K$ Components:
- Sort eigenvalues $\lambda_1 \geq \lambda_2 \geq \cdots \geq \lambda_d$, and take the top-$K$ eigenvectors to form the projection matrix:

> 	6. Project the data into the $K$-dimensional subspace:

$$Z = X_{\text{centered}} V_K$$

## Ideas
- PCA finds the **directions (principal components)** in feature space where the data **varies the most**.
- PCA finds the **directions of** [[Principal Components]]
- Projecting onto those directions keeps most of the information, while dropping low-variance “noise” directions.



- [[01 Linear Dimensionality Reduction]]
- [[02 Objectives - Minimize Reconstruction Error]]
- [[03 Objectives - Maximize Variance]]
- [[04 Empirical Mean - Origin of subspace]]
- [[05 Principal Components - Top eigenvectors of covariance matrix]]
- [[06 Applications - Faces]]
- [[07 Applications - Digits]]