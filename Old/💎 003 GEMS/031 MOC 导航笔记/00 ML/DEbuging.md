Great question. Here’s a compact, battle-tested workflow you can use to debug almost any ML model (classic ML or deep learning).

# 0) Quick triage (15–30 min)

1. **Re-run with fixed seeds** (data split + model init).
    
2. **Overfit a tiny slice** (e.g., 32 examples) until ~0 train error.
    
    - If it can’t: bug in data, loss, targets, or model wiring.
        
3. **Learning curves** (train/val loss vs. steps).
    
    - Train↓ & Val↑ → overfitting; Train flat & high → underfitting or optimization issue.
        
4. **Sanity-check metrics** on a hand-labeled micro-set (10–50 items).
    
    - Does the metric reflect what you actually care about?
        

# 1) Data & labels (most failures live here)

- **Splits**: Ensure no leakage (duplicates, near-duplicates, time leakage).
    
- **Targets**: Check class balance, label noise/outliers; plot label histograms.
    
- **Preprocessing parity**: Exactly the same transforms in train and eval; watch normalization stats.
    
- **Feature drift**: Compare train vs. val distributions (KS-test, histograms).
    
- **Text/vision/audio**: Verify tokenization/image resizing/sampling rates align with model expectations.
    

# 2) Metrics & objective

- **Loss ↔ Metric alignment**: If you care about F1/AUC, monitor them during training, not just cross-entropy/MSE.
    
- **Thresholding**: Tune decision thresholds on a validation set; report per-class and per-slice metrics.
    
- **Calibration**: Check reliability curves / ECE; miscalibration can masquerade as “bad model”.
    

# 3) Optimization & training dynamics

- **Learning rate**: Use an LR finder or sweep; too high → NaNs/divergence; too low → no learning.
    
- **Batch size / optimizer**: Try {AdamW/SGD}, batch sizes (e.g., 32 vs 256).
    
- **Regularization**: Temporarily disable weight decay, dropout, heavy augmentations to isolate issues.
    
- **Initialization**: Start from a known-good baseline; for DL, try a pretrained backbone.
    
- **Modes**: Ensure `model.train()` during train and `model.eval()` during eval (dropout/BatchNorm matter!).
    
- **Gradient checks**: Log grad norms; watch for vanishing/exploding; clip if needed.
    
- **NaNs**: If loss=NaN, binary-search the step that first produces NaN; print min/max/mean of tensors after each layer.
    

# 4) Architecture & features

- **Ablations**: Start with the smallest sensible model; add complexity incrementally.
    
- **Feature importance**: For tabular, check permutation importance/SHAP to catch dead or leaking features.
    
- **Input-output contract**: Unit-test shapes, dtypes, ranges; e.g., targets in {0,1} for BCE, logits vs. probs mismatch.
    

# 5) Error analysis (the highest ROI)

- **Slice the failures**: By class, length, brightness, language, geography, time, etc.
    
- **Confusion matrix**: Identify systematic confusions; collect a “fix-it” dataset for weak spots.
    
- **Qualitative review**: Manually inspect ~50 false positives/negatives; you’ll usually spot a pattern quickly.
    

# 6) Experiment hygiene

- **Reproducibility**: Log code version, data hash, hyperparams, seeds.
    
- **One change at a time**: Use small, controlled experiments; A/B with confidence intervals.
    
- **Tracking**: Use TensorBoard or Weights & Biases for losses, metrics, grads, and examples.
    

# 7) Common gotchas (checklist)

- Targets off-by-one (e.g., classes labeled {1..K} instead of {0..K-1}).
    
- Not shuffling training data.
    
- Mixing logits and probabilities in the loss.
    
- Train-time augmentations accidentally applied at eval.
    
- Wrong masking/padding handling in sequence models.
    
- BatchNorm stats stale (didn’t run enough steps, or eval with dropout on).
    
- Time-series split done randomly (leakage).
    
- Class imbalance without proper weighting or sampling.
    
- Pretrained model mean/std mismatch for images.
    

# 8) Minimal “debug recipe” (pseudocode)

```python
set_all_seeds(42)
log_all_versions()

train, val = clean_split(data, method="time_aware_or_group_kfold")
assert_no_leakage(train, val)

# Tiny-slice overfit
tiny = sample(train, 32)
train_model(tiny, max_epochs=200, heavy_reg=False)
assert train_loss ~ 0, "If not, inspect data/targets/loss/model wiring"

# Full run with sweeps
for lr in [1e-4, 3e-4, 1e-3]:
  for wd in [0.0, 1e-4]:
    metrics = train_and_eval(train, val, lr=lr, weight_decay=wd, track_grads=True)
    save_run(metrics)

plot_learning_curves()
error_slices = slice_metrics(val_preds, val_labels, slices=["class","length","source"])
show_confusion_matrix()
```

# 9) If you’re still stuck, try these probes

- **Label flip test**: Randomize labels; model should NOT learn (if it does, leakage/bug).
    
- **Feature randomization**: Shuffle a feature across rows; if metric barely moves, feature may be irrelevant/broken.
    
- **Synthetic data**: Train on a toy dataset where the true rule is known; confirm the pipeline can learn it.
    
- **Cross-framework check**: Re-implement a minimal baseline in scikit-learn/Keras to compare.
    

---

If you share details (task, data type, framework, loss, a couple of plots), I can walk through a pinpointed debug plan and suggest concrete fixes.