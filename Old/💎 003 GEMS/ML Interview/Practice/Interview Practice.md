[[Prompt - Interview Practice]]

1. **Problem Understanding**
	Let's say we are now in an ML engineer interview. I'll ask you a question about ML system design.
	The question is: {}
	After you receive the question, do not start to answer, I'll prompt you step by step.
	For each step, give me as many details and explanations as possible.
	Before jumping into any solution, start by asking some questions to understand the problem (Keep this clean, not too many questions) and understand the scale and size of the problem. And also the system requirements
2. **Goals Identification**
	*Answer/feedback from previous question*
	Then, define the Business and ML Objectives (make an assumption about the ML problem—regression, classification, or another type) and the metrics, explaining why you chose them
3. **Data Pipeline**
	*Answer/feedback from previous question*
	Then next step would be Data Engineering: Identify and collect data sources. How can we build the ETL pipeline (In details)
	This step should involve ensuring data quality, addressing balanced or imbalanced data (If applicable to the problem), maintaining consistency, and preparing it for analysis and modeling Storage needs
	Give some approaches to cleanse the data
	After that, describe the data we have in the end (it can be a table, images or text, just choose if applicable)
4. **Feature Engineering**
	*Answer/feedback from previous question*
	Then next step would be Feature Engineering: Develop features.
	Feature selection is critical to building an effective model
	List out the potential features and how you want to engineer and you can talk a little about where to store the features
5. **Model Pipeline**
	*Answer/feedback from previous question*
	Model Development and Evaluation. 
	What kinds of model we use to {Question}
	List some potential models and describe them.
	Compare potential models, choose an appropriate machine learning model. Always go with a simple model first for benchmarking.
	Then choose another primary model (Based on the current information you have)
	- Explain the model you choose
	- Explain in details on how you wanna train the model and what metrics for model performance evaluation
	(No code, just explain is ok)
6. **Deployment and Monitoring**
	Prompt 1:
	Deployment and Monitoring. Ask questions to clarify the resources we have on deployment
	Prompt 2:
	*Answer/feedback from previous question*
	Once the model shows satisfactory performance, deploy it in a production environment where it can start recommending replacements to users. Monitor the model’s performance over time to catch any degradation or shifts in data distribution.
7. **Wrap up with a flowchart**
	Can you use a markdown to connect the system design components we discussed. Make the graph as detailed as possible
	like the format below
	DB
		\
		UI <--> User