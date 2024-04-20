import { NextRequest, NextResponse } from "next/server";


const {spawn} = require('child_process');

const getPythonScriptStdout = (pythonScriptPath: string) => {
	const python = spawn('python', [pythonScriptPath]);
	return new Promise((resolve, reject) => {
		let result = ""
		python.stdout.on('data', (data: string) => { // Explicitly type 'data' as string
			result += data
		});
		python.on('close', () => {
			resolve(result)
		});
		python.on('error', (err: Error) => { // Explicitly type 'err' as Error
			reject(err)
		});
	})
}

export async function POST(req: NextRequest) {
	
	const reqBody = await req.json();

	if (!reqBody.analyse) {
		return NextResponse.json({ success: false });
	}

	console.log("Analyse Patients");

	const py = spawn('python', ['src/app/api/analyse/analyse.py']);

	getPythonScriptStdout('src/app/api/analyse/analyse.py').then((output) => {
		console.log("Python Output: __" + output);

		return NextResponse.json({ success: true, output: output });
	});


	
	
}