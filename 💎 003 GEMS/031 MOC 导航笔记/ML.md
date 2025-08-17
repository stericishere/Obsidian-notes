Machine learning (ML) is a subfield of computer science focused on creating algorithms that use examples of phenomena to become useful [1]. It can be defined as the process of solving a practical problem by collecting a dataset and algorithmically training a statistical model based on that data [1]. The resulting statistical model is then used to solve the problem [2].

**Core Concepts and Types of Machine Learning**

*   **Learning vs. Machines Learning**: While "machine learning" is the common term, machines don't truly "learn" in the human sense [3]. Instead, they find a mathematical formula that produces desired outputs from training data and generalizes to similar inputs [3, 4]. Arthur Samuel coined the term in 1959 for marketing purposes [3].
*   **Two "Machine Learnings"**: There are two distinct disciplines within machine learning, similar to innovating food recipes versus inventing kitchen appliances [5]. Cassie Kozyrkov, Chief Decision Scientist at Google, highlights that one focuses on innovating recipes (applied ML), while the other focuses on inventing new kitchen appliances [5, 6]. This book emphasizes the applied space, focusing on making food at scale, covering aspects like objective definition, domain expertise, data engineering, prototyping, quality checks, production, and reliability [6, 7].
*   **Types of Learning**: Learning can be classified into:
    *   **Supervised Learning**: Works with a collection of labeled examples (input-output pairs) to produce a model that predicts labels for new inputs [2, 8, 9]. Examples include spam detection (classifying emails as "spam" or "not_spam") [10, 11]. Most explanations in the book are limited to supervised learning, though the material applies to other types [12].
        *   **Classification**: Predicting a class from a finite set of categories (e.g., "spam" or "not_spam") [10, 13, 14]. This includes binary classification (two classes) and multiclass classification (three or more classes) [14, 15].
        *   **Regression**: Predicting a real number (e.g., an employee's salary) [10, 16].
    *   **Semi-supervised Learning**: Uses both labeled and unlabeled examples, with typically more unlabeled data, aiming to find a better model [17, 18].
    *   **Unsupervised Learning**: Deals with datasets without labels, making it challenging to judge model quality without a reference point [19]. It includes problems like density estimation and clustering [20, 21].
    *   **Reinforcement Learning**: An agent "lives" in an environment, perceives its state, executes actions for rewards, and learns an optimal policy to maximize expected long-term rewards [22, 23]. This is suitable for sequential decision-making problems like game playing or robotics [12, 24, 25].
*   **Model-Based vs. Instance-Based Learning**:
    *   **Model-Based**: Uses training data to create a model with learned parameters (e.g., Support Vector Machines) [16, 26, 27].
    *   **Instance-Based**: Uses the entire training dataset as the model (e.g., k-Nearest Neighbors) [26, 28].
*   **Shallow vs. Deep Learning**:
    *   **Shallow Learning**: The model makes predictions directly from input features [29, 30].
    *   **Deep Learning**: The model is layered, with each layer generating outputs by taking inputs from the preceding layer [29-31].

**Machine Learning Engineering (MLE)**

MLE is the application of scientific principles, tools, and techniques from machine learning and traditional software engineering to design and build complex computing systems [32]. It covers all stages from data collection to model deployment and maintenance [32].

**Machine Learning Project Lifecycle**

A typical ML project follows these stages [33, 34]:
1.  **Goal Definition**: Understanding the business objective and defining a clear goal for ML (input, output, and acceptable behavior criteria) [33, 35].
2.  **Data Collection and Preparation**: Gathering, cleaning, and preparing data [33, 36-38].
3.  **Feature Engineering**: Transforming raw data into informative features [33, 37, 39, 40].
4.  **Model Training**: Building the statistical model using training data [33].
5.  **Model Evaluation**: Assessing the model's performance [33].
6.  **Model Deployment**: Making the model available for use [33, 41].
7.  **Model Serving**: Running the model to generate predictions [33, 42].
8.  **Model Monitoring**: Continuously checking the model's performance in production [33, 42].
9.  **Model Maintenance**: Updating and improving the model over time [33, 42].

**Data in ML Projects**

*   **Tidy Data**: Data structured like a spreadsheet where each row is an example and columns are attributes [43-45]. While raw data can sometimes be tidy, feature engineering is often needed to transform raw data into tidy data [43].
*   **Data Types**:
    *   **Directly Used Data**: Data used to form feature vectors [46].
    *   **Indirectly Used Data**: Auxiliary data like dictionaries or lookup tables [45, 46].
    *   **Raw Data**: Data elements whose type is not formally defined, such as photos, text, or social media posts [47, 48].
    *   **Semi-structured Data**: Data with a structure that helps derive types, like log files or JSON [47].
*   **Data Quality Questions**: Before collecting data, consider if it is accessible, sizeable (sufficiently large), usable, understandable, and reliable [34, 49-54].
*   **Properties of Good Data**:
    *   **Informative**: Contains enough information for modeling [34, 55, 56].
    *   **Good Coverage**: Reflects what the model is intended to do in production (e.g., covers all topics, times of day) [34, 56-58].
    *   **Unbiased**: As free from bias as possible, reflecting real-world inputs [34, 56, 59]. Biases can include selection bias (e.g., self-selection bias) [60], experimenter bias (survey question phrasing) [61, 62], and labeling bias [63, 64]. Avoiding bias is challenging but crucial [65, 66].
    *   **Not a Result of a Feedback Loop**: The data should not be directly generated or influenced by the model's own output [34, 56, 67, 68].
    *   **Consistent Labels**: Labels should be assigned consistently, avoiding inconsistencies from different labelers or evolving definitions [56, 69].
    *   **Big Enough**: Sufficiently large to allow for generalization [56, 70].
*   **Common Data Problems**:
    *   **Missing Values**: Can be handled by imputation techniques like replacing with average, a value outside the normal range, or using a regression model to predict missing values [51, 71-74].
    *   **Duplicates**: Usually removed unless added purposefully to balance imbalanced problems [51].
    *   **Incomplete or Unrepresentative Data**: Dataset may not fully represent the phenomenon (e.g., photos only from summer) [52].
    *   **Data Leakage**: Occurs when information from the target variable is inadvertently included in features, leading to artificially high performance during testing but poor performance in production [34, 75-78]. Common causes: target is a function of a feature, a feature hides the target, or a feature comes from the future [75-77].
    *   **Imbalanced Datasets**: When one class is significantly underrepresented [79, 80]. Techniques to handle include oversampling, undersampling, and generating synthetic data [80-82].
*   **Data Manipulation Best Practices**:
    *   **Reproducibility**: Implement data collection and transformation as software scripts to track changes and rerun the pipeline from scratch if errors occur [83-85]. Avoid manual interventions [86].
    *   **"Data First, Algorithm Second"**: Prioritize gathering more diverse and high-quality data over squeezing maximum performance from a learning algorithm [34, 86].
    *   **Data Lifecycle**: For sensitive data, a document should describe the asset, access, storage duration, and destruction requirements [87, 88].

**Feature Engineering**

Features are values extracted from data entities that represent a specific property [89]. They are organized into feature vectors, on which models perform mathematical operations [89].

*   **Why Engineer Features**: Raw data is often not directly usable by ML algorithms, which typically require numerical feature vectors [43, 90]. Feature engineering transforms data into a machine-readable format and creates informative features that allow algorithms to learn [37, 40, 43, 90].
*   **Techniques**:
    *   **One-Hot Encoding**: Transforms categorical attributes into several binary ones (e.g., "red," "yellow," "green" colors become [91], [91], [91]) [92-95].
    *   **Bag-of-Words**: Represents text documents as binary vectors where a '1' indicates the presence of a vocabulary token [93, 94, 96-98]. Variations include token counts, frequencies, or TF-IDF values [99]. Bag-of-n-grams extends this to sequences of words [100].
    *   **Log-Odds Ratio**: Quantifies categorical features by calculating the log-odds ratio between a categorical value and a positive label (e.g., "infected" in emails and "spam") [101, 102].
    *   **Sine-Cosine Transformation**: Converts cyclical categorical features (e.g., days of the week) into two synthetic numerical features to maintain cyclical relationships [94, 103, 104].
    *   **Hashing Trick**: Converts categorical values or tokens into numerical indices within a desired dimensionality using a hash function, balancing speed and quality [105, 106].
    *   **Topic Modeling**: Techniques like Latent Semantic Analysis (LSA) and Latent Dirichlet Allocation (LDA) represent documents as vectors of topics from unlabeled text [107-109].
    *   **Time-Series Features**: For time-series data, chunking into segments and calculating statistics (average, spread, outliers, growth, visual patterns) can create features [110, 111].
    *   **Feature-Crossing**: Combining existing numerical features using arithmetic operators (e.g., division) to create new features [112].
    *   **Embeddings**: Vector representations of words, documents, or any object, capturing semantic relationships [98, 113-119]. Word embeddings (like word2vec or fastText) predict context words based on a central word, or vice-versa, learning that words with similar meanings share similar contexts [114, 120-122]. Document embeddings (like doc2vec) similarly represent entire documents [116]. General embeddings can be learned from neural network layers [117].
    *   **Normalization/Standardization**: Scaling numerical feature values to a predefined range (normalization, e.g., [91] or [-1,1]) or to have a mean of 0 and standard deviation of 1 (standardization) [123-126].
*   **Properties of Good Features**:
    *   **High Predictive Power**: Allow the learning algorithm to build a good predictive model [40, 127].
    *   **Fast Computability**: Can be computed quickly, especially for real-time systems [128, 129].
    *   **Reliability**: Consistently available and complete [130].
    *   **Distribution Similarity**: Values in training set should be similar to those in production [131].
    *   **Unitary**: Represents a simple, easy-to-understand and explain quantity [131].
*   **Feature Selection**: Removing less important features to reduce training time and data size [132]. Techniques include identifying and removing "long tail" elements [133], permutation importance [134, 135], and task-specific removal (e.g., stop words) [136].
*   **Storing and Documenting Features**: Features should be described in machine-readable, versioned schema files [137, 138] or managed in a feature store, a central vault for curated features [139-141].

**Model Training**

*   **Preparation**: Before training, validate schema conformity, define an achievable performance level (often human-level performance) [142, 143], choose a performance metric (single number is preferred) [144, 145], and establish a baseline for comparison [146, 147]. Split data into training, validation, and test sets, ensuring validation and test sets come from the same statistical distribution and resemble production data [148-150].
*   **Algorithm Selection**: Consider factors like dataset size (in-memory vs. out-of-memory), number of features/examples, data linearity, training speed, and explainability requirements [151-155]. Spot-checking several algorithms is recommended [156].
*   **Machine Learning Pipeline**: A sequence of stages (e.g., tokenization, feature extraction, model training) that transform raw data into a model [157]. Pipelines can be saved and deployed like models [158].
*   **Bias-Variance Tradeoff**: A fundamental tradeoff in model development [159-161].
    *   **Underfitting (High Bias)**: Model performs poorly on training data, indicating it's too simple or features are not informative enough [95, 159].
    *   **Overfitting (High Variance)**: Model performs well on training data but poorly on holdout data, meaning it's too complex and memorizes training examples [162-165].
    *   **The Tradeoff**: Reducing variance (simplifying model) increases bias, and vice versa [160]. The goal is to reach the "zone of solutions" where both bias and variance are low [166, 167].
*   **Regularization**: Methods that force a learning algorithm to train a less complex model, increasing bias but significantly reducing variance [165, 168, 169]. L1 and L2 regularization modify the objective function by adding a penalty for model complexity [168, 169].
*   **Hyperparameter Tuning**: Finding optimal values for hyperparameters (e.g., learning rate, number of layers), which are not learned from data but set by the analyst [156, 170-172].
    *   **Grid Search**: Evaluates every combination of discrete hyperparameter values [173-175].
    *   **Random Search**: Samples values randomly from statistical distributions for hyperparameters [176, 177].
    *   **Coarse-to-Fine Search**: Combines random search (for broad regions) and grid search (for fine-tuning within high-potential regions) [178].
    *   **Bayesian Optimization**: Uses past evaluation results to inform the selection of next values, often more efficient [178].
    *   **Cross-Validation**: Used when validation data is scarce; splits training data into "folds" to simulate multiple training/validation sets for hyperparameter tuning [171, 179-182].
*   **Optimization Algorithms**: For differentiable cost functions, gradient descent and its stochastic variants (SGD, Adagrad, Adam) are frequently used [183-186].
*   **Deep Model Training Specifics**: Involves choosing parameter initialization strategies (e.g., random normal, Xavier) [187-189], iterating to increase model size until it fits training data, then regularizing if it overfits validation data [190-193].
*   **Handling Multiple Inputs/Outputs**: For multimodal data, neural networks can use subnetworks for each input type, concatenating their embeddings before a final classification layer [194-198]. For multiple outputs, a combined cost function with a tunable hyperparameter can be used [199, 200].
*   **Transfer Learning**: Using a pre-trained model (often trained on large datasets) and adapting it to a new, different dataset [199-203]. This can speed up learning and reduce the need for extensive new labeled data [201, 204].

**Model Evaluation**

*   **Offline Evaluation**: Assessing the model during training using historical data and metrics like confusion matrix, precision, recall, and AUC [205].
*   **Online Evaluation**: Testing and comparing models in production with live user data (e.g., A/B testing) [206]. Offline evaluation reflects engineering quality, while online evaluation assesses real-world performance [207].
*   **Performance Metrics for Regression**:
    *   **Mean Squared Error (MSE)**: Measures the average of the squared differences between predicted and actual values [208-210].
    *   **Average C-Percent Error Rate (ACPER)**: Calculates the percentage of predictions within a defined acceptable error range (e.g., 2%) of the true value [211].
*   **Performance Metrics for Classification**:
    *   **Confusion Matrix**: A table summarizing correct and incorrect predictions for each class, showing True Positives (TP), False Positives (FP), True Negatives (TN), and False Negatives (FN) [212-217].
    *   **Precision**: Ratio of true positive predictions to the total positive predictions (TP / (TP + FP)) [218, 219]. Important for minimizing false positives (e.g., not flagging legitimate emails as spam) [220, 221].
    *   **Recall (True Positive Rate - TPR)**: Ratio of true positive predictions to the total actual positive examples (TP / (TP + FN)) [218, 219, 222]. Important for minimizing false negatives (e.g., finding all relevant documents) [220].
    *   **Precision-Recall Tradeoff**: It's usually impossible to achieve both high precision and high recall simultaneously; often a balance must be chosen [159, 220, 221].
    *   **F-measure (F1-score)**: Harmonic mean of precision and recall, combining them into a single number [223]. F-beta allows weighting recall more or less than precision [223].
    *   **Accuracy**: Number of correctly classified examples divided by total examples (TP + TN) / (TP + TN + FP + FN) [224, 225]. Useful when errors across all classes are equally important [225, 226].
    *   **Cost-Sensitive Accuracy**: Assigns different costs to false positives and false negatives, then incorporates these costs into the accuracy calculation [222].
    *   **Cohen's Kappa**: Measures inter-rater agreement for categorical items. Values between 0.61 and 0.80 are considered good, 0.81 or higher are very good [227].
    *   **Area Under the ROC Curve (AUC)**: Summarizes classification performance by plotting True Positive Rate (TPR) against False Positive Rate (FPR) across various prediction thresholds [222, 228-232]. A higher AUC (closer to 1) indicates a better classifier; AUC > 0.5 is better than random [230].
*   **Performance Metrics for Ranking (Recommender Systems)**:
    *   **Cumulative Gain (CG)**: Sum of graded relevance values of all results in a list, independent of position [233].
    *   **Discounted Cumulative Gain (DCG)**: Rewards highly relevant documents appearing earlier in the list and gives higher utility to highly relevant documents over marginally relevant ones [234].
    *   **Normalized Discounted Cumulative Gain (nDCG)**: DCG divided by the ideal DCG, allowing comparison across different query lengths [235, 236].
    *   **Top-N Qualities**: Assesses recommendations in a list of N items [237].
        *   **Hit Rate**: Recognizes items in the Top-N list that the user has rated in the past [237].
        *   **Average Reciprocal Hit Rate (ARHR)**: Weights items based on their prominence in the Top-N list [237].
        *   **Diversity**: Measures variety among recommended items [237].
*   **Statistical Bounds**: Provide an interval within which the true model performance likely lies (e.g., 95% statistical interval) [238].
    *   **Bootstrapping**: A statistical procedure that creates B samples from a dataset with replacement to compute a metric and establish a statistical interval [239-241]. Can also be used for prediction intervals in regression [242, 243].
*   **Evaluation for Mission-Critical Systems**:
    *   **Neuron Coverage**: Ratio of activated units in a neural network by the test set to the total units; a good test set has near 100% coverage [244, 245].
    *   **Mutation Testing**: Generates "mutants" of the software under test and applies tests to see if any break, aiming for 100% killed mutants [246].
    *   **Robustness**: Measures how much a model's prediction changes when its input is slightly perturbed [247-249].
    *   **Fairness**: Ensuring that predictions are not biased against protected attributes (e.g., race, gender) [250]. Concepts include demographic parity (equal positive prediction rates across groups) and equal opportunity [251, 252]. Fairness is often domain-specific [251].

**Model Serving, Monitoring, and Maintenance**

*   **Serving Modes**:
    *   **Batch Mode**: Model applied to large quantities of input data (e.g., all users) when some latency is tolerable; resource-efficient [253, 254].
    *   **On-Demand Mode**: Model applied per request, either to a human client (often via REST API) or a machine (often via streaming) [254-256]. In real-world, message brokers can manage demand spikes [257].
*   **Challenges in Real World**: ML systems must be ready for errors, change, and human nature [254, 258].
    *   **Errors**: Inevitable in ML systems; strategies include saying "I don't know," using a "safeguard" model, optimizing for specific error types (precision vs. recall), offering multiple prediction options, dosing user exposure, and allowing user error reporting [258-263]. Fallback strategies (less sophisticated models/heuristics) are essential for critical systems [264].
    *   **Change**: Systems must adapt to evolving data and user needs [265].
    *   **Human Nature**: Users are unpredictable, irrational, and have unclear expectations [266]. Systems should avoid confusion, gain user confidence early (pass simple tests) [266, 267], and manage user fatigue (avoid excessive interruptions or over-automation) [268].
*   **Monitoring**: Critical for tracking model performance, detecting erratic behavior, distribution shift, numerical instability, and decreasing computational performance [269]. Automated alerts are crucial [269].
*   **Logging**: Important to log sufficient information (user context, model input/output, time taken, user reaction) to reproduce erratic behavior and improve models [269, 270].
*   **Maintenance**: Models need periodic updates with new data, ideally collected automatically [271].
*   **Reproducibility**: Set random seeds during training to ensure consistent models if data doesn't change [85]. Models delivered should include documentation on hyperparameters, evaluation methods, computing infrastructure, and training costs [272-274].

**Other Forms of Learning and Best Practices**

*   **Algorithmic Efficiency**: Analyzing and optimizing algorithms for speed and resource consumption, classified using big O notation (e.g., O(N), O(N^2)) [275-279]. Prefer matrix/vector operations over loops and use efficient data structures like sets and dictionaries [280, 281]. Leverage scientific libraries that are often implemented in compiled languages [282].
*   **Model Representation Standards**: Use standards like PMML (Predictive Model Markup Language) or PFA (Portable Format for Analytics) to save and share models across different applications and programming languages [283, 284].
*   **Ensemble Learning**: Combines multiple "weak" models to create a "stronger" predictive model (e.g., Random Forest, Gradient Boosting) [285, 286].
*   **Sequence Learning**: Models like Recurrent Neural Networks (RNNs) and Conditional Random Fields (CRFs) are used for labeling, classifying, or generating sequences (e.g., words in a sentence) [287, 288].
*   **Sequence-to-Sequence Learning (seq2seq)**: A generalization of sequence labeling where input and output sequences can have different lengths, used in machine translation or conversational interfaces [289-291].
*   **Active Learning**: Applied when obtaining labeled examples is costly; involves strategically selecting unlabeled examples to be labeled by an expert that would most contribute to model quality [292-294].
*   **One-Shot Learning**: Aims to recognize objects of a specific class from a single example, often used in face recognition [295, 296].
*   **Zero-Shot Learning**: Aims to classify objects into categories not seen during training, by leveraging embeddings of inputs and outputs [118, 119].
*   **Metric Learning**: Learning a distance function from data to better quantify similarity between feature vectors, optimizing for specific similarity/dissimilarity goals [297, 298].
*   **Recommender Systems**: Algorithms that predict what a user likes and suggest related items [299].
    *   **Utility Matrix**: Organizes user preferences for items, often sparse due to unknown values [300-302].
    *   **Collaborative Filtering**: Recommends items based on the preferences of similar users or items [302-304]. Can use techniques like Singular Value Decomposition (SVD) for sparse datasets [304-306].
    *   **Content-Based Filtering**: Recommends items based on the item's characteristics and the user's past preferences for similar item attributes [303, 307].
    *   **Cold-Start Problem**: Insufficient upfront data for new users or items in collaborative filtering [303].
    *   **Indirect Feedback (Latent Variables)**: Inferences about user preferences drawn from historical purchase data, video completion, or time spent on page, without direct user input [301, 308].
    *   **Evaluation for Recommender Systems**: Beyond traditional split validation (training/test data) and metrics like RMSE or MAE, industry often uses online methods like A/B testing, click-through-rates (CTR), ROI, and qualitative research [309, 310].

**General Philosophy**

*   **"All models are wrong, but some are useful."** — George Box [4, 36, 182, 311, 312].
*   **Practicality over Perfection**: In practice, a "good enough" model deployed quickly is often preferred to an ideal model that takes too long [171].
*   **Nonlinear Progress**: ML project progress is often nonlinear, with rapid initial error reduction followed by a slowdown [313, 314]. Clients should understand these constraints and risks [79, 314].
*   **Embrace Tiny Progress**: Many small improvements can lead to desired results faster than waiting for one revolutionary idea [85].
