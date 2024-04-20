import { NextRequest, NextResponse } from "next/server";

import { getPythonScriptStdout } from "@/app/scripts/runpython";


export async function POST(req: NextRequest) {
	
	const reqBody = await req.json();

	if (!reqBody.analyse) {
		return NextResponse.json({ success: false });
	}

	const pyOutput = await getPythonScriptStdout('src/app/scripts/analyse.py');
	const response = JSON.stringify(pyOutput);

	return NextResponse.json({ success: true, response});
	
}