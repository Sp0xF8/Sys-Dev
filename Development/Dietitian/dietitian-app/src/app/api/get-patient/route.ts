import { NextRequest, NextResponse } from "next/server";

import { getPythonScriptStdout } from "@/app/scripts/runpython";

import { readFile } from "fs/promises";
import { stat } from "fs";


export async function POST(req: NextRequest) {
	
	//load json file from

	const jsonData = await readFile('src/app/scripts/patients.json', 'utf-8');

	const json = JSON.parse(jsonData);

	const reqBody = await req.json();



	if(reqBody.getpatient) {

		const patient = reqBody.patient;

		if(patient < 0 || patient >= json.length) {
			return NextResponse.json({ success: false}, {status: 400});
		}

		const response = JSON.stringify(json[patient]);

		return NextResponse.json({ success: true, patient: response});

	
	}


	if (reqBody.getEncounter) {

		const patient = reqBody.patient;


		for (let i = 0; i < json.length; i++) {
			if(json[i].encounterId == `${patient}`) {

				const response = JSON.stringify(json[i]);
				return NextResponse.json({ success: true, patient: response});

			}
		}

		

		return NextResponse.json({ success: false}, {status: 400});

	}
	
	
	

	return NextResponse.json({ success: false}, {status: 400});
	
}