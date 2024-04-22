
import sys
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import json 

import seaborn as sns

from sklearn.metrics import accuracy_score, f1_score, recall_score, precision_score, confusion_matrix

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




training_data = pd.read_csv('training.csv')
patient_data = pd.read_csv('patients.csv')


y_test = patient_data["referral"]



visualised_missing_data(patient_data)

X_train = fill_missing_data(training_data.drop("referral", axis=1))
y_train = training_data["referral"]

##if the patient data has referral column

if ('referral' in patient_data.columns):
	X_test = fill_missing_data(patient_data.drop("referral", axis=1))

else:
	X_test = fill_missing_data(patient_data)




## Random Forest Classifier
# {'bootstrap': True, 'ccp_alpha': 0.0, 'class_weight': None, 'criterion': 'gini', 'max_depth': 10, 'max_features': 'sqrt', 'max_leaf_nodes': None, 'max_samples': None, 'min_impurity_decrease': 0.0, 'min_samples_leaf': 1, 'min_samples_split': 2, 'min_weight_fraction_leaf': 0.0, 'n_estimators': 100, 'n_jobs': None, 'oob_score': False, 'random_state': None, 'verbose': 0, 'warm_start': False}

## AdaBoost Classifier
# {'algorithm': 'SAMME.R', 'base_estimator': 'deprecated', 'estimator__bootstrap': True, 'estimator__ccp_alpha': 0.0, 'estimator__class_weight': None, 'estimator__criterion': 'gini', 'estimator__max_depth': 10, 'estimator__max_features': 'sqrt', 'estimator__max_leaf_nodes': None, 'estimator__max_samples': None, 'estimator__min_impurity_decrease': 0.0, 'estimator__min_samples_leaf': 1, 'estimator__min_samples_split': 2, 'estimator__min_weight_fraction_leaf': 0.0, 'estimator__n_estimators': 100, 'estimator__n_jobs': None, 'estimator__oob_score': False, 'estimator__random_state': None, 'estimator__verbose': 0, 'estimator__warm_start': False, 'estimator': RandomForestClassifier(max_depth=10), 'learning_rate': 0.1, 'n_estimators': 50, 'random_state': 42}

estimator = RandomForestClassifier(bootstrap=True, ccp_alpha=0.0, class_weight=None, criterion='gini', max_depth=10, max_features='sqrt', max_leaf_nodes=None, max_samples=None, min_impurity_decrease=0.0, min_samples_leaf=1, min_samples_split=2, min_weight_fraction_leaf=0.0, n_estimators=100, n_jobs=None, oob_score=False, random_state=None, verbose=0, warm_start=False)
classifier = AdaBoostClassifier(estimator=estimator, algorithm='SAMME.R', learning_rate=0.1, n_estimators=50, random_state=42)


classifier.fit(X_train, y_train)

y_pred = classifier.predict(X_test)


recall_scores = recall_score(y_test, y_pred, average='weighted')
precision_scores = precision_score(y_test, y_pred, average='weighted')
print(recall_scores)
print(precision_scores)




#convert the y_pred to a dictionary

y_pred = y_pred.tolist()

print(y_pred)

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


