- bring values to company
	- reduce cost
ML pipeline
- subset of System Design 
- Distributed System Design 

Data flow, feature 
- quote: **80% of time is Data process**
	- transformation data process, transformating raw data into feature --> 
	- Mention Data flow -->  go first
- data --> model development --> training --> productionalization
- Why ML?
	- patient 
		- <u>observed problem -> Analysis -> solution</u>
		- 2 side <u><span style="background:#d2cbff">ML side / System side</span></u>
		- guess the interviewer want what 
		- turning general idea to specific sub-task
	- ML Pipeline, Data Handling -> Modelling -> Production
		- ex: Recommendation System
			- ML side: Data, Model, Evaluation
			- System side: Scalability, Latency
	- Data size?
- Youtube ML system design mock interview
	- Feel
	- communicate
## ML design steps:
### Major
1. Problem Understanding (MOST IMPORTANT)
	1. Clarify the Problem Statement
	2. Business or User Requirements 
	- ex: Youtuber (too many components, need to narrow down)
		- Search Function/Video Streaming/Optimize the recommendation
		- everyone can be done
			- Need to confirm w interviewer which component?
			- give suggestion to interviewer that to my comfy zone
			- How about this this this 
		- Who are the end-user
2. Goals Identification (Successful metric)
	1. Business Goal:
		- We can optimize for somthing --> reason, we can dive deeper to .... later
		- Matrics: User engagement -> Retention -> Revenue
	2. ML Goal:
		- Always under business goals 
			- -> how to use Ml to achieve 
		- Frame it into a simple ML solution (we can )
			- compare to complex 
			- ex:
				- Regression
				- Binary Classification (Probability)
3. Data Pipeline 
	- Everything start from data
	- Event / Decision to Tailor-made from data
	- 4 Step
		1. Data Collection
			- Database, APIs, streaming data 
			- Is there anyone that can provide data to us
		2. Data Storage
			- Choose appropriate storage solution (SQL, NoSQL, data lekes)
			- Base on data volume, latency and access needs
		3. Data Cleaning & Preprocessing
			- Standardize steps for handling missing data, outliers and normalization
		4. Feature Engineering
			- Design a feature store engineered feature are stored and can be resused for both train 

- Make Assumptions / Clarifications on collected dataset
- I think using --this-- is better, --> reason  (the one I familiar)
	- what do you think about it?

4. Model Pipeline
	- Quote:
		- **Computational resource we have against the performance we wanna achieve**
		- **Do we have enough computational resources to train a complex model**
		- **Can I assume that we have the data size is enough for complex computation**
		- **Model Complexity vs. Efficiency? Interpretiabilty?**
	- Clarity what resources we have
		- Quote: **What is the size of the data we can collect?**
		- GPUs, hardwares, time, human resources
		- Quote: **we might dont have the best solution but we can build a optimal solution based on current situation for now**
		- E.g. Smaller dataset + Perfomance + OK Resource
			- --> Tree based model (XGBoost, etc...)
		- E.g. Large Enough Dataset + Perfomance + Good Resource
			- --> Neural Network
	- Key point
		- Model Selection & Training
			1. Select the model from pool of models (Comparsion between models)
			2. Implement the pipeline for training model
			3. Hyperparameter tuning, model validation and selection 
		- Experiment Tracking
			- ML metrics --> measure performance 
				- (Recall vs Precision)
				- Use tools to keep track of different model versions
5. Model Deployment
	- Put the model into Production
		- comfirm inference (Always on? Downtime? Resources)
		- Data format
			- JSON format --> describe how the json looks base on the 
	- Deployment Strategies
		- Barch Processing
			- Suitable for less time-sensitive applications, where predications are generated periodically (daily recommendation updates)
		- Real-time inference
			- Low-latency setup for applications requiring instant responses (fraud detection, search recommendations)
6. Monitoring and Maintenance --> 3.
	- Model Performance Monitoring
		- Track metrics such as accuracy, latency and throughput in production thro a **dashboard**to ensure model performance remains optimal 
### Minor (FYI)
1. Scalability and Optimization
2. C


System design 
- API design 
- microservices
- database optimization 