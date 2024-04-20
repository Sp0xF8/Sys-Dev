import { NextRequest, NextResponse } from "next/server";

import { writeFile } from "fs/promises";
import { join } from "path";


export async  function POST(req: NextRequest) {

	const data = await req.formData();

	const file: File | null = data.get('file') as unknown as File;

	if (!file) {
		return NextResponse.json({ error: 'No file provided' }, { status: 400 });

	}


	const bytes = await file.arrayBuffer();
	const buffer = Buffer.from(bytes);


	const filePath = join("./", 'public/tmp', file.name);

	await writeFile(filePath, buffer);

	return NextResponse.json({ success: true });
}