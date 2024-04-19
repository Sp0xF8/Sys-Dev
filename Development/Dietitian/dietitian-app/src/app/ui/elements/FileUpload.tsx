

import { writeFile } from "fs/promises";
import { join } from "path";

import Fileform from "./fileForm";

export default function FileUpload() {


	async function upload(data: FormData) {
		'use server'

		const file: File | null = data.get('file') as unknown as File;

		if(!file) {
			throw new Error('No file provided');
		}

		if(file.name == "undefined") {
			return {success: false}
		}

		if(file.name.split('.').pop() !== 'csv') {
			return {success: false}
		}

		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);

		const path = join('./public/', 'tmp', file.name);

		await writeFile(path, buffer);

		console.log('File written to', path);

		

		return {success: true}

	}



	return (
			<Fileform upload={upload}/>
		
	);
  
}
