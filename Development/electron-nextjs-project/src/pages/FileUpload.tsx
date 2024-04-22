

import { writeFile } from "fs/promises";
import { join } from "path";


import { useState } from "react";

export default function FileUpload() {


	const [file, setFile] = useState<File>();

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if(!file) {
			alert('No file selected');
			return;
		}

		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);

		const path = join('./public/', 'tmp', file.name);

		await writeFile(path, buffer);

		console.log('File written to', path);
	}

	return (
			<main>
				<form>
					<input type="file" onChange={(e) => {
						const file = e.target.files?.[0];
						if(file) {
							setFile(file);
						}
					}}/>
					<button onClick={async () => {
						if(!file) {
							alert('No file selected');
							return;
						}

						const bytes = await file.arrayBuffer();
						const buffer = Buffer.from(bytes);

						const path = join('./public/', 'tmp', file.name);

						await writeFile(path, buffer);

						console.log('File written to', path);
					}}>Upload</button>
				</form>
			</main>
		
	);
  
}
