## Ideas
So basically we have two model:
	a generator model and a discriminator model which is both train on Neural Network
Our goal is to make our generated sample indistinguishable from data sample, such that the generator distribution aligned with our target distribution
	However, we dont directly learn from the data distributions
The idea is that we use our discriminator model to do a binary classification on the image from generator and our real world dataset. 
	so the generated image has a tag of 0 is the real image is 1
SO How do we actually improve the model?
	discriminator:
		improve by minimizing its brinary cross-entropy
	Generator:
		doesnt improve directly
		it improve by making the discriminator worse at classifying
		which in other word the generated image is more aligned to real world image such that it can fool the discriminator
		---
		we can KL divergence to measure the difference of the real distribution and our generator distribution but not symmetric. 
		so it punishes more heavy on missing real data than adding junk sample, so the model become bias
		---
		From the entropy perspective, KL tells us how many Information did we waste if we use the assume the distribution are the same
		---
		Therefore the JSD come in,
		a advantage of JSD is that it's symmetric so that it punishes both missing the real data and adding junk sample
		To improve the Generator, we are actually minimizing a **statistical divergence (JSD)**
		when JSD is 0, meaning the 2 distribution is indistinguishable
		--- 
		But in practice we actually train by minizing the corss-entropy
		what we do is we train the discriminator on one batch of real data first and generate a batch of fake image from the generator 
			then computer loss using **both real and fake** samples in the same batch and update once
		then we sample from the same distribution again and generate new fake samples from it and pass it thro D and compute generator loss, then we update the distribution
			so both fake sample is from the same distribution for a single training step

	So we can  using the sum of binary cross entropy over both the real and generated image

