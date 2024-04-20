import pandas as pd
import numpy as np
import json

def dump_patients():
	df = pd.read_csv('./public/tmp/patients.csv')

	#drop referral column
 
	df = df.drop(columns=['referral'])
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

	



	return df.to_dict(orient='records')


## write to file json


with open('src/app/scripts/patients.json', 'w') as f:
	json.dump(dump_patients(), f, indent=4)
