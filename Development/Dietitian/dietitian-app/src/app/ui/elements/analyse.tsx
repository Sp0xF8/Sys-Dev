'use client';

import { writeFile } from "fs/promises";
import { join } from "path";

import { ImRocket } from "react-icons/im";


export default function Analyse() {


	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {

			const res = await fetch('/api/analyse', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ analyse: true })
			});

			if (!res.ok) {
				throw new Error('Failed to Analyse Patients');
			}


			res.json().then((data) => {
				console.log(data);
			})

		} catch (error) {
			console.error(error);
		}

	}


	return (
			<form onSubmit={onSubmit}>
				<button type="submit" className='w-3/4 h-20 bg-blue-600 dark:bg-slate-800 dark:text-green-600 text-black font-bold rounded-md text-center text-2xl mt-2' >
				Analyse
				<ImRocket className="text-center m-auto" />
				</button>
			</form>

	
	);

}




  

