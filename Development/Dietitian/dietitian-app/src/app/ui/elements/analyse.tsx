'use client';

import { writeFile } from "fs/promises";
import { join } from "path";

import { ImRocket, ImSpinner2, ImCheckmark } from "react-icons/im";


import { useState, useEffect } from "react";


export default function Analyse() {

	const [sent, setSent] = useState(false);

	const [recieved, setRecieved] = useState(false);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {

			setSent(true);
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


			const data = await res.json();


			setRecieved(true);
			const json = JSON.parse(data.response);
			

			console.log("analyse: "+ json);
		

		} catch (error) {
			console.error(error);
		}

	}


	if (recieved) {
		return (
			<button className='w-3/4 h-20 bg-blue-600 dark:bg-slate-800 dark:text-green-600 text-black font-bold rounded-md text-center text-2xl mt-2' >
				Analysed
				<ImCheckmark className="text-center m-auto" />
			</button>
		);
	} else if (sent) {
		return (
			<button className='w-3/4 h-20 bg-blue-600 dark:bg-slate-800 dark:text-green-600 text-black font-bold rounded-md text-center text-2xl mt-2' >
				Analysing 
				<ImSpinner2 className="animate-spin text-center m-auto" />
			</button>
		);

	}   else {

		return (
			<form onSubmit={onSubmit}>
				<button type="submit" className='w-3/4 h-20 bg-blue-600 dark:bg-slate-800 dark:text-green-600 text-black font-bold rounded-md text-center text-2xl mt-2' >
				Analyse
				<ImRocket className="text-center m-auto" />
				</button>
			</form>
		);
	}

	

}




  

