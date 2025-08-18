---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 19:32
aliases:
  - k-Means Clustering
tags:
  - 🧠
type: l4
---
# k-Means Clustering
## L4 – Principles:
> - <u>Goal</u>: Partition data into k clusters such that each point belongs to the cluster with the nearest mean.
> - <u>Objective function</u> (minimize within-cluster sum of squares): $$J = \sum_{i=1}^N \sum_{k=1}^K r_{ik} \| x_i - \mu_k \|^2$$
>   where $r_{ik} = 1$ if point $i$ is assigned to cluster $k$, else 0.
> - <u>Assumptions</u>:
>   - Clusters are spherical and roughly equal in size.
>   - Works best when variance in each dimension is similar.
---
## L3 – Models
> - <u>Cluster assignment step</u>:
>   - Assign each point to the nearest centroid: $$r_{ik} = \begin{cases}1 & \text{if } k = \arg\min_j \| x_i - \mu_j \|^2 \\ 0 & \text{otherwise}\end{cases}$$
> - <u>Centroid update step</u>:
>   - Update each centroid to the mean of assigned points: $$\mu_k = \frac{\sum_{i=1}^N r_{ik} x_i}{\sum_{i=1}^N r_{ik}}$$
---
## L2 – Operations
> 1. <u>Initialize centroids</u> (randomly or with k-means++).
> 2. <u>Repeat until convergence</u>:
>    - Assignment step: Assign points to nearest centroid.
>    - Update step: Recalculate centroids.
> 3. <u>Check convergence</u>:
>    - Centroids do not change.
>    - Or maximum iterations reached.
> 4. <u>Output</u>:
>    - Final cluster assignments.
>    - Final centroid positions.
---
## L1 – Experience
> From tutorials:
> - <u>Example</u>: Segment customers into groups based on purchasing behavior.
>   - Initialize with k-means++.
>   - Plot clusters to visualize separations.
> - <u>Observation</u>:
>   - Sensitive to initialization; k-means++ often gives better results.
>   - May converge to a local optimum — multiple runs recommended.
>   - Not robust to outliers, which can shift centroids significantly.
---




