'use client';

import { writeFile } from "fs/promises";
import { join } from "path";

import { ImArrowRight2, ImArrowLeft2, ImConnection } from "react-icons/im";

import { useState, useEffect } from "react";


export default function patient() {

	const [patient, setPatient] = useState([]);
	const [patient_id, setPatientId] = useState(0);

	const [pred, setPred] = useState(0);

	const [mean, setMean] = useState(0);


	const getPatientID = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {

			//clear use state patients

			const res = await fetch('/api/get-patient', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ getpatient: true, patient: patient_id })
			});

			if (!res.ok) {
				throw new Error('Failed to Analyse Patients');
			}


			const data = await res.json();

			const patient_json = JSON.parse(data.patient);
			const pred_json = JSON.parse(data.pred);
			// const mean_json = JSON.parse(data.mean);


			console.log("patient: " + patient_json);
			console.log("pred: " + pred_json);
			// console.log("mean: " + mean_json);

			setPatient(patient_json);
			setPred(pred_json);

			// setMean(mean_json);


		} catch (error) {
			console.error(error);
		}

	}
	const searchEncounter = async (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		const searchid = e.target.value;
		try {

			//clear use state patients

			const res = await fetch('/api/get-patient', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ getEncounter: true, patient: searchid })
			});

			if (!res.ok) {
				throw new Error('Failed to Analyse Patients');
			}


			const data = await res.json();

			const patient_json = JSON.parse(data.patient);
			const pred_json = JSON.parse(data.pred);
			// const mean_json = JSON.parse(data.mean);


			console.log("patient: " + patient_json);
			console.log("pred: " + pred_json);
			// console.log("mean: " + mean_json);

			setPatient(patient_json);
			setPred(pred_json);

			// setMean(mean_json);


		} catch (error) {
			console.error(error);
		}


	}



	const nextPatient = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {

			setPatientId(patient_id + 1);



			await getPatientID(e);
		} catch (error) {
			console.error(error);
		}
	}

	const prevPatient = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {

			setPatientId(patient_id - 1);

			await getPatientID(e);

		} catch (error) {
			console.error(error);
		}

	}

	let info = [];

	let reccomendations = [];

	if (patient.length !== 0) {

		for (let key in patient){

			if (key === 'encounterId') {
				continue;
			}

			//remove the _ from the key

			let tital = key.replace(/_/g, ' ');

			//capitalize the first letter of the key

			tital = tital.toUpperCase();

			info.push(
				<div className="w-full p-2">
					<div className="dark:bg-slate-500 bg-gray-300  min-h-40 rounded-l">
						<div className="dark:bg-slate-700 bg-slate-400 min-h-16">
							<span className="text-2xl text-center">{tital}</span>
						</div>
					
						<span className="text-2xl text-center ">{patient[`${key}`]}</span>
					</div>
					
				</div>

			)
		}



		if (pred) {

			reccomendations.push(
				<div className="dark:bg-slate-600 bg-slate-400 w-3/12 min-h-48 m-auto rounded-xl shadow-xl">
					<div className="dark:bg-slate-700 min-h-16 rounded-t-xl">
						<span className="text-2xl text-center">Encounter : {patient["encounterId"]}</span>
					</div>
					<div className="dark:bg-red-500 bg-red-300 min-h-32 rounded-b-xl">
						<span className="text-2xl text-center">This patient is reccomended for referral!</span>
					</div>
				</div>
			
			)

		} else {
		
			reccomendations.push(
				<div className="dark:bg-slate-600 bg-slate-400 w-3/12 min-h-48 m-auto rounded-xl shadow-xl">
					<div className="dark:bg-slate-700 min-h-16 rounded-t-xl">
						<span className="text-2xl text-center">Encounter : {patient["encounterId"]}</span>
					</div>
					<div className="dark:bg-slate-400 bg-gray-300 min-h-32 rounded-b-xl">
						<span className="text-2xl text-center">This patient is not reccomended for referral!</span>
					</div>
				</div>
			
			)
		}

		


	}



	return (

		<div className="flex flex-col items-center justify-center p-8 dark:bg-slate-800 rounded-md ">

			<div className="inline-flex justify-center ">
				<div className="flex flex-col items-center justify-center dark:bg-slate-800 ">
					<form onSubmit={prevPatient}>
						<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Previous Patient</button>
					</form>
				</div>
				<div className="flex flex-col items-center justify-cente dark:bg-slate-800 ">
					<label className="text-2xl text-center" htmlFor="search_encounter">Enter Encounter ID</label>
					<input type="text" id="search_encounter" className="border border-gray-300 dark:border-gray-600 rounded-md p-2 m-2" onChange={searchEncounter} />
				</div>
				<div className="flex flex-col items-center justify-center dark:bg-slate-800 ">
					<form onSubmit={nextPatient}>
						<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next Patient</button>
					</form>
				</div>
			</div>

			<div className="w-100 flex">

				<div className="grid grid-cols-8 dark:bg-slate-800 overflow-x-hidden w-8/12">
					{info}
				</div>

				{reccomendations}

			</div>

			

		</div>
	);



}