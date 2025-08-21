----
## Definition
Asume we have a real matrix $A∈R^{m×n}$
	The SVD:
	$$A=UΣVT$$

| **Component** | **Shape**                                                 | **Definition**                                                                               |
| ------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| $$U = S_L$$   | $m \times m$<br>$row \times row$<br>orthogonal            | Left singular vectors basis for column space of<br>$$AA^T$$                                  |
| $$\Sigma$$    | $m \times n$ <br>$row \times col$<br>rectangular diagonal | Singular values (non-negative real numbers, sorted $$\sigma_1 \ge \sigma_2 \ge \dots \ge 0$$ |
| $$V = S_R$$   | $n \times n$ <br>$col \times col$(orthogonal)             | Right singular vectors basis for row space of $$A^TA$$                                       |

$U$ will have m [[eigenvector]] --> $S_L$
$V$ will have n [[eigenvector]] --> $S_R$
- which both is [[Positive Semi-Definite - PSD Matrices]]
- If we order their [[eigenvalues]] from high to low
- $λ_1, \ \lambda_2, ... \ , λ_m$ ,  $λ_1, \ \lambda_2, ... \ , λ_n$ 
	- Then we can find $\Sigma$, where $\sigma_i = \sqrt{\lambda_i}$
		$$\sigma_1 \ge \sigma_2 \ge \dots \ge 0$$
	- $\Sigma = diag(\sigma_1 , \sigma_2 , \dots , 0)$, $\sigma_i$ is called Singular vector
  $S_L$ --> $u_1, \ u_2, ... \ , u_m$ 
  $S_R$ --> $v_1, \ v_2, ... \ , v_n$ --> v
	- The sing
- if m > n, their eigenvalues from $v_1, \ v_2, ... \ , v_n$  are the same
	- and the rest from $λ_{n+1}, ... \ , λ_m$ are 0
- To conclude, $S_L$ and $S_R$ have the same number of non-zero eigenvalues
	- and the rest of the larger matrix is just zero eigenvalues

For $\Sigma$, 
$$\sigma_1 \ge \sigma_2 \ge \dots \ge 0$$
