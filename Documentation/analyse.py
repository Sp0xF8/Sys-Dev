import sys
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import json 

import seaborn as sns

from sklearn.metrics import accuracy_score, f1_score, confusion_matrix
from sklearn.model_selection import train_test_split, GridSearchCV

from sklearn.impute import KNNImputer

from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import AdaBoostClassifier


def visualised_missing_data(data):

	present_data = data.count()
	missing_data = len(data) - present_data

	# Plotting both present and missing data
	plt.figure(figsize=(10, 6))
	plt.bar(data.columns, present_data, color='green', label='Present')
	plt.bar(data.columns, missing_data, bottom=present_data, color='red', label='Missing')

	# Customizing plot
	plt.title('Data in Feature Columns')
	plt.xlabel('Feature Columns')
	plt.ylabel('Data Count')
	plt.xticks(rotation=55)
	plt.legend()
	plt.tight_layout()

	# Save the graph to a file
	# plt.savefig('src/app/scripts/data_distribution.png')  # Save as PNG
	plt.savefig('data_distribution.png')  # Save as PNG

	# Optional: Close the plot to free up memory
	plt.close()


def fill_missing_data(data_to_impute):
	imputer = KNNImputer(n_neighbors=2)

	data_filled = imputer.fit_transform(data_to_impute)

	return pd.DataFrame(data_filled, columns=data_to_impute.columns)

data = pd.read_csv('patients.csv')

visualised_missing_data(data)



X = fill_missing_data(data.drop("referral", axis=1))
y = data["referral"]



X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


randomForest = GridSearchCV(
	RandomForestClassifier(), 
	{
	'n_estimators': [10, 50, 100],
	'max_depth': [5, 10, 20, 30, 40, 50]
	}, 
	cv=5,
	n_jobs=-1,
	scoring='roc_auc_ovo_weighted'
)


randomForest.fit(X_train, y_train)

best_randomForest = randomForest.best_estimator_

adaboost = AdaBoostClassifier(estimator=best_randomForest, random_state=42)

classifier = GridSearchCV(
	adaboost,
	{
	'n_estimators': [10, 50, 100],
	'learning_rate': [0.1, 0.5, 1.0]
	},
	cv=5,
	n_jobs=-1,
	scoring='roc_auc_ovo_weighted'
)

classifier.fit(X_train, y_train)

best_classifier = classifier.best_estimator_

y_pred = best_classifier.predict(X_test)

# with open('src/app/scripts/classifier.json', 'w') as f:
with open('classifier.json', 'w') as f:
	json.dump(y_pred, f)


# visualised_missing_data(X) # Uncomment to visualize missing data in X after imputation

test = {
	1: {1: 1, 2: 2},
	2: {3: 1, 4: 2},
	3: {5: 1, 6: 2},
}

sys.argv.append(json.dumps(test))  # Serialize test dictionary to JSON


sys.stdout.write(json.dumps(test))  # Serialize test dictionary to JSON