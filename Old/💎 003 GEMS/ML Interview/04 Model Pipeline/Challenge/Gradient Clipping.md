-> if gradient norm > threshold (say 5), rescale:
$$ g_{\text{clipped}} = g \cdot \frac{\tau}{\|g\|}, \quad \|g\| > \tau $$
- where  $\tau$  is the threshold
- Effect: keeps updates bounded, prevents divergence
- Common in [[RNNs (Recurrent Neural Networks)]] and [[GAN]] where exploding gradients are frequent