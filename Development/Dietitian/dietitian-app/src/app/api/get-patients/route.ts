import { NextRequest, NextResponse } from "next/server";

import { getPythonScriptStdout } from "@/app/scripts/runpython";

import { readFile } from "fs/promises";


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

	if(start_table + 17 > json.length) {
		return NextResponse.json({ success: false });
	}
	
	let data = [];
	
	for (let i = start_table; i < start_table + 17; i++) {
		data.push(json[i]);
	}
	
	const response = JSON.stringify(data);

	console.log(response);

	console.log("start_table: " + start_table);

	

	return NextResponse.json({ success: true, response});
	
}