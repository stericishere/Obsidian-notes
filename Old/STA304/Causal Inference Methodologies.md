- **Propensity Score Matching (PSM)**
	- reduce selection bias
	- limitation: we have important variable that affect the treatment but you dont have the measures of them
	- Step 1: Estimate Propensity Score
		- **Propensity score** is defined as a **probability assigned to each observation**
			- Base on **independent variables**
	- Step 2: Match
		- **Nearest neighbour matching**
			- only accept matches within a specific score difference
		- **Caliper matching**
			- 
		- **Radius matching**
			- 
	- Step 3: Evaluate Quality of Matching
		- The goal is to achieve **balance between the treatment and comparison groups on observable traits**
		- Compare by
			- Comparing means (e.g., using a _t_-test)
			- **Percent Bias Reduction (PBR)**
	- Step 4: Evaluate Outcomes
- **Ratio Estimation**
	- $\hat{R}=\bar{y}​/\bar{x}$
- **Regression Estimation**
	- $\hat{μ}_{​yL}​=\bar{y}+b(μ_x​−\bar{x})$
- **Regression Discontinuity Design (RDD)**
	- having a cut-off and we assume that the data point that just above and below the cut-off
	- Comparing observations lying closely on either side of a predetermined cutoff threshold in a continuous assignment variable
- **Difference in Differences**

**Post-stratification**
- used weights cell estimates by known population census counts ($N_i$​) to correct for non-representativeness

**Finite Population Correction**
