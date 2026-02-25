if the model processes frames independently, 
	there'll be small differences in textures or details can show up
	so the frame is not consistent enough
To the human eye, that looks like **Flickering or Jittering artifacts**

### Solution
- Add [[Temporal losses]] that penalize inconsistency across frames
- Use **optical flow** or recurrent modules to align information between frames
- Post-process with smoothing to reduce jitter
