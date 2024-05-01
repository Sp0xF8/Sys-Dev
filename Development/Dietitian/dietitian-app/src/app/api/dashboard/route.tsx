import { NextRequest, NextResponse } from "next/server";

import { getPythonScriptStdout } from "@/app/scripts/runpython";

import { readFile } from "fs/promises";
import { access } from "fs";




export async function POST(req: NextRequest) {


	console.log("Analyse Patients")

	const jsonData = await readFile('src/app/scripts/patients.json', 'utf-8');

	const json = JSON.parse(jsonData);

	//check if 'src/app/scripts/classifier.json' exists

	const pred_data = await readFile('src/app/scripts/classifier.json', 'utf-8');

	const pred_json = JSON.parse(pred_data);

	const means_data = await readFile('src/app/scripts/patients_means.json', 'utf-8');

	const means_json = JSON.parse(means_data);



	const number_of_patients = json.length;

	let number_of_referrals = 0;

	let number_of_no_referrals = 0;

	for (let i = 0; i < number_of_patients; i++) {
		if (pred_json[i] == 1) {
			number_of_referrals++;
		} else {
			number_of_no_referrals++;
		}
	}

	console.log("Number of patients: " + number_of_patients);
	console.log("Number of referrals: " + number_of_referrals);
	console.log("Number of no referrals: " + number_of_no_referrals);

	let data = [];

	data.push({ number_of_patients: number_of_patients, number_of_referrals: number_of_referrals, number_of_no_referrals: number_of_no_referrals });



	const data_response = JSON.stringify(data);

	const means_response = JSON.stringify(means_json);

	console.log(data_response);

	console.log(means_response);




	return NextResponse.json({ success: true, data_response, means_response });



}