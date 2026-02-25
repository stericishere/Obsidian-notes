# Steps to Building Machine Learning (ML) Systems

## 🧠 L4: Principles
- ML systems transform **data → models → predictions**.
- Success requires balancing **bias-variance**, **data quality**, and **optimization**.
- Iterative process: design → train → evaluate → deploy → monitor.

---

## 🧩 L3: Models
- Step 1: Understand the Problem (classification vs regression, prediction vs representation)  
- Step 2: Mathematical Formulation (vectorized inputs X, notation for labels y)  
- Step 3: Objective Function (MSE, Cross-Entropy Loss)  
- Step 4: Optimization Strategy (closed-form, gradient descent, SGD)  
- Step 5: Code Implementation (NumPy/PyTorch translation, edge cases)  
- Step 6: Evaluation & Iteration (error analysis, hyperparameter tuning, validation/test performance)  
- Step 7: Deployment & Monitoring (integration, drift monitoring, retraining)  

---

## ⚙️ L2: Operations
1. **Define the task**: regression, classification, clustering.  
2. **Prepare data**: cleaning, feature engineering, train/test split.  
3. **Choose a model**: linear, tree-based, neural network.  
4. **Specify objective function**: MSE, cross-entropy, likelihood.  
5. **Optimize**: gradient descent or closed-form solutions.  
6. **Evaluate**: cross-validation, accuracy, AUC, RMSE.  
7. **Deploy**: wrap model in API, monitor for drift.  
8. **Iterate**: retrain with new data, adjust hyperparameters.  

---

## 🌍 L1: Experience
- **Case Study: Spam Detection**  
  - Step 1: Define → classify email (spam/not spam).  
  - Step 2: Data → labeled emails.  
  - Step 3: Model → logistic regression / neural net.  
  - Step 4: Train with cross-entropy loss.  
  - Step 5: Evaluate → precision/recall.  
  - Step 6: Deploy → mail server integration.  
  - Step 7: Monitor → update as spammers evolve.  

> [!question]  
> Why is **monitoring after deployment** just as important as training?

---

## 📊 Table View: ML System Lifecycle

| Step         | Key Question                 | Tools/Methods               |
| ------------ | ---------------------------- | --------------------------- |
| Problem      | What are we predicting?      | Business framing            |
| Data         | Do we have good data?        | Pandas, SQL, ETL            |
| Model        | Which hypothesis class?      | Linear models, Trees, NN    |
| Objective    | What defines success?        | Loss functions, likelihood  |
| Optimization | How to minimize error?       | GD, SGD, Adam, Closed-form  |
| Evaluation   | How well does it generalize? | CV, metrics, error analysis |
| Deployment   | How to use in practice?      | APIs, containers, cloud     |
| Monitoring   | Does it stay accurate?       | Drift detection, retraining |

---

