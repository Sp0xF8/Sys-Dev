'use client';

import { writeFile } from "fs/promises";
import { join } from "path";

import { ImAttachment, ImCompass } from "react-icons/im";

import { useState } from "react";

export default function FileUpload() {

	const [filePath, setFilePath] = useState('');
	const [file, setFile] = useState<File>();

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!file) return;

		try {
			const data = new FormData();
			data.set('file', file);

			const res = await fetch('/api/upload', {
				method: 'POST',
				body: data
			});

			if (!res.ok) {
				throw new Error('Failed to upload file');
			}

		} catch (error) {
			console.error(error);
		}

	}

	function handleFileInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const fileInput = event.target;
		if (fileInput.files && fileInput.files.length > 0) {
			const fileName = fileInput.files[0].name;
	
	
			if (fileName == "undefined") {
				return { success: false }
			}
	
	
	
			if (fileName.split('.').pop() !== 'csv') {
				setFilePath("csv");
				return { success: false }
			}
	
			setFilePath(fileName);
			setFile(fileInput.files[0]);
	
		}
	}


	return (
		<main>
			<form onSubmit={onSubmit} className='w-100 text-center m-auto'>
				<input type="file" name="file" id="file" onChange={handleFileInputChange} className='hidden' />
	
				<button className=' h-20 bg-blue-600 dark:bg-slate-800 text-green-400 font-bold rounded-md text-center text-2xl mb-2 min-w-36 ' onClick={() => {
					document.getElementById('file')?.click();
				}}>
					Select File
					<ImAttachment className='m-auto text-4xl' />
				</button>
	
				{filePath && filePath === "csv" && (
					<div className=' h-20 w-fit text-black dark:text-red-400 font-bold border-black dark:border-red-400 border-2 rounded-md text-center text-2xl my-2 px-4 m-auto'>
						<div className='justify-center items-center '>
							<p className='m-auto'>Bad File Selected</p>
							<p className='m-auto'>Please Select a .CSV file!</p>
						</div>
					</div>
				)}
	
				{filePath && filePath !== "csv" && (
					<>
						<div className=' h-20 text-black dark:text-white font-bold border-black dark:border-white border-2 rounded-md text-center text-2xl my-2'>
							<div className='justify-center items-center '>
								<p className='m-auto'>File Selected</p>
								<p className='m-auto'>{filePath}</p>
							</div>
						</div>
						<p className="text-center text-2xl">Remember to upload before continuing!</p>
	
						<button type='submit' className='w-3/4 h-20 bg-green-600 text-blue-600 font-bold rounded-md text-center text-2xl mt-2' >Upload <ImCompass className='m-auto text-4xl' /></button>
					</>
				)}
	
			</form>
		</main>
	
	);

}




  

