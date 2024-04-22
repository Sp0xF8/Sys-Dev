import { NextRequest, NextResponse } from "next/server";

import { getPythonScriptStdout } from "@/app/scripts/runpython";

import { readFile } from "fs/promises";
import { access } from "fs";




export async function POST(req: NextRequest) {
	
	//load json file from


	const reqBody = await req.json();

	if (!reqBody.getpatients) {
		return NextResponse.json({ success: false });
	}

	const start_table = reqBody.start_table;

	if(start_table < 0) {
		return NextResponse.json({ success: false });
	}


	const jsonData = await readFile('src/app/scripts/patients.json', 'utf-8');

	const json = JSON.parse(jsonData);

	//check if 'src/app/scripts/classifier.json' exists

	const pred_data = await readFile('src/app/scripts/classifier.json', 'utf-8');

	const pred_json = JSON.parse(pred_data);


	if(start_table + 17 > json.length) {
		return NextResponse.json({ success: false });
	}
	
	let data = [];

	let pred = [];
	
	for (let i = start_table; i < start_table + 17; i++) {
		data.push(json[i]);
		pred.push(pred_json[i]);
	}
	
	const data_response = JSON.stringify(data);

	const pred_response = JSON.stringify(pred);

	console.log(data_response);

	console.log(pred_response);

	console.log("start_table: " + start_table);

	console.log("pred: " + pred_response)

	

	return NextResponse.json({ success: true, data_response: data_response, pred_response: pred_response});
	
}