import pandas as pd
import numpy as np
import json

def dump_patients():
	df = pd.read_csv('./public/tmp/patients.csv')

	#drop referral column
 
	df = df.drop(columns=['referral'])


	description = df.describe(include='all').T

	## turn description into a dictionary
	description_dict = description.to_dict()


	df.replace(np.nan, "NaN", inplace=True)


	#convert to np array
	
	array = df.to_numpy()

	#round every float present in the array to 2 decimal places
	for i in range(len(array)):
		for j in range(len(array[i])):
			if isinstance(array[i][j], float):
				array[i][j] = round(array[i][j], 2)

	#convert back to dataframe
	df = pd.DataFrame(array, columns=df.columns)

	## build description of dataframe and save in new variable
	

	dataframe_dict = df.to_dict(orient='records')

	return  { "description": description_dict, "data": dataframe_dict }


## write to file json


output = dump_patients()

with open('src/app/scripts/patients.json', 'w') as f:

	json.dump(output['data'], f)

with open('src/app/scripts/patients_means.json', 'w') as f:
	
	json.dump(output['description'], f)
	
