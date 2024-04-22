import { NextRequest, NextResponse } from "next/server";

import { writeFile } from "fs/promises";
import { join } from "path";


import { getPythonScriptStdout } from "@/app/scripts/runpython";

export async  function POST(req: NextRequest) {

	const data = await req.formData();

	const file: File | null = data.get('file') as unknown as File;

	if (!file) {
		return NextResponse.json({ error: 'No file provided' }, { status: 400 });

	}


	const bytes = await file.arrayBuffer();
	const buffer = Buffer.from(bytes);


	const filePath = join("./", 'public/tmp', "patients.csv");

	await writeFile(filePath, buffer);


	getPythonScriptStdout('src/app/scripts/dumppatients.py');

	return NextResponse.json({ success: true });
}

