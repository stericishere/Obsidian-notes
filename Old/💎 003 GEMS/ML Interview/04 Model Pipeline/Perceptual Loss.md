- Traditional losses (like [[MSE]] or [[L1 Regularization]]) compare pixels directly:
$$ L_{MSE} = \frac{1}{N} \sum_i (y_i - \hat{y_i})^2$$
→ This penalizes every pixel difference equally.  
→ Problem: models trained with pixel loss tend to produce **blurry outputs**, since averaging is rewarded.

- Instead, **Perceptual loss** compares **high-level feature representations** of the image, extracted by a pretrained network
$$ L_{perc}​(y,\hat{y​})=\frac{1}{C_j​H_j​W_j}​​||ϕ_j​(y)−ϕ_j​(\hat{y​})||^2$$
where:
- y = ground truth image
- $\hat{y}$​ = generated image
- $ϕ_j(⋅)$ = feature map from layer j of a fixed pretrained CNN
- $C_j,\ H_j,\ W_j$​ = dimensions of that feature map

The idea: if two images look the same to a human, their **feature representations** at intermediate CNN layers should be similar