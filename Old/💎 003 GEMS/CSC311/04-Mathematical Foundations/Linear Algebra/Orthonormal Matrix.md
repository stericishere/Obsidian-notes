----
## Definition
1. <u><span style="background:#d2cbff">A Square Matrix</span></u>
2. <u><span style="background:#d2cbff">All the Column vectors are unit vectors</span></u>
3. <span style="background:#d2cbff">All the Column vectors are</span> [[Orthogonal]]

## Transformation:
- Perform rotation in some angle

An example of an orthonormal matrix:
![[Screenshot 2025-08-20 at 20.30.49.png|296x203]]
Its column vectors are:
$$
q_1 = \begin{bmatrix}
\frac{1}{{2}} \\[6pt] -\frac{\sqrt{3}}{{2}}
\end{bmatrix}, 
\quad
q_2 = \begin{bmatrix}
-\frac{\sqrt{3}}{{2}} \\[6pt] \frac{1}{{2}}
\end{bmatrix}
$$

Now, compute their dot product:
$$
q_1 \cdot q_2 
= \begin{bmatrix}
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}}
\end{bmatrix}
\begin{bmatrix}
\frac{1}{\sqrt{2}} \\[6pt] -\frac{1}{\sqrt{2}}
\end{bmatrix}
= \frac{1}{2} - \frac{1}{2} = 0
$$

Thus, the two column vectors are [[Orthogonal]], as expected for an orthonormal matrix.
