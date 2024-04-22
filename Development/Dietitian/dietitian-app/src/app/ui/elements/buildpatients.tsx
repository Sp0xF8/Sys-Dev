'use client';

import { writeFile } from "fs/promises";
import { join } from "path";

import { ImArrowRight2, ImArrowLeft2, ImConnection } from "react-icons/im";

import { useState, useEffect } from "react";
import { on } from "events";


export default function Analyse() {

	const [patients, setPatients] = useState([]);
	const [pred, setPred] = useState([]);

	
	let [start_table, setStartTable] = useState(0);


	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {

			//clear use state patients

			const res = await fetch('/api/get-patients', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ getpatients: true, start_table: start_table})
			});

			if (!res.ok) {
				throw new Error('Failed to Analyse Patients');
			}


			const data = await res.json();
			const data_json = JSON.parse(data.data_response);
			const pred_json = JSON.parse(data.pred_response);


			console.log("analyse: " + data_json);

			setPatients(data_json);
			setPred(pred_json);


		} catch (error) {
			console.error(error);
		}

	}


	const nextTable = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setStartTable(start_table + 17);
			await onSubmit(e);
		} catch (error) {
			console.error(error);
		}
	}

	const prevTable = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {

			setStartTable(start_table - 17);

			if(start_table < 0){
				setStartTable(0);
			}
			
			await onSubmit(e);

		} catch (error) {
			console.error(error);
		}

	}




	


	if (patients.length !== 0) {

		
		let dynamicTable = [];

		
		for (let i = 0; i < 17; i++) {

			let dynamicReferral = [];

			if(pred[i] === 0.0) {
				dynamicReferral.push(
					<div className="text-center text-green-600 bg-slate-300 dark:text-green-400 dark:bg-slate-800 rounded-md border-gray-400 dark:border-cyan-800 border ">No</div>
				);
			} else {
				dynamicReferral.push(
					<div className="text-center text-slate-200 bg-red-600 dark:text-red-200 dark:bg-red-900 rounded-md border-gray-400 dark:border-cyan-800 border ">Yes</div>
				);
			}
			

			if(i % 2 === 0){

				dynamicTable.push(
					<tr className="text-center bg-green-200 dark:bg-gray-600">
						<td className="border-r border-black px-4 py-2">{patients[i]?.encounterId}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.end_tidal_co2}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.feed_vol}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.feed_vol_adm}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.fio2}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.fio2_ratio}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.insp_time}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.oxygen_flow_rate}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.peep}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.pip}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.resp_rate}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.sip}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.tidal_vol}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.tidal_vol_actual}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.tidal_vol_kg}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.tidal_vol_spon}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.bmi}</td>
						<td className=" px-4 py-2">{dynamicReferral}</td>
					</tr>
				);
				
			} else {
				
				dynamicTable.push(
					<tr className="text-center bg-green-100 dark:bg-gray-400">
						<td className="border-r border-black px-4 py-2">{patients[i]?.encounterId}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.end_tidal_co2}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.feed_vol}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.feed_vol_adm}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.fio2}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.fio2_ratio}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.insp_time}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.oxygen_flow_rate}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.peep}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.pip}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.resp_rate}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.sip}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.tidal_vol}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.tidal_vol_actual}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.tidal_vol_kg}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.tidal_vol_spon}</td>
						<td className="border-r border-black px-4 py-2">{patients[i]?.bmi}</td>
						<td className=" px-4 py-2">{dynamicReferral}</td>
					</tr>
				);
			}

		}





		return (
			<>
				<div className="w-full">
					<div className="w-full mb-3">
						<div className="w-4/12 inline-block">
							<form onSubmit={prevTable} className="w-full flex justify-center">
								<button type="submit" className='w-3/4 h-10 bg-blue-600 dark:bg-slate-800 dark:text-green-600 text-black font-bold rounded-md text-center text-2xl mt-2 ' >
									<ImArrowLeft2 className="inline-block mx-2" />
									Previous
								</button>
							</form>
						</div>
						<div className="w-4/12 inline-block">
							<form onSubmit={onSubmit} className="w-full flex justify-center">
								<button type="submit" className='w-3/4 h-10 bg-blue-600 dark:bg-slate-800 dark:text-green-600 text-black font-bold rounded-md text-center text-2xl mt-2 ' >
									Reload
									<ImConnection className="inline-block mx-2" />
								</button>
							</form>
						</div>
						<div className="w-4/12 inline-block">
							<form onSubmit={nextTable} className="w-full  flex  justify-center" >
								<button type="submit" className='w-3/4 h-10 bg-blue-600 dark:bg-slate-800 dark:text-green-600 text-black font-bold rounded-md text-center text-2xl mt-2' >
									Next
									<ImArrowRight2 className="inline-block mx-2" />
								</button>
							</form>
						</div>
					</div>
					<div className="overflow-x-auto h-full">
						
						<table className=" overflow-x-hidden table-auto w-full border-collapse">
							<thead className="">
							<tr className="bg-green-600 dark:bg-slate-700 text-gray-200 shadow-inner ">
								<th className="px-4 py-2 rounded-tl-2xl">Encounter ID</th>
								<th className="px-4 py-2">End Tidal CO2</th>
								<th className="px-4 py-2">Feed Vol</th>
								<th className="px-4 py-2">Feed Vol Adm</th>
								<th className="px-4 py-2">FiO2</th>
								<th className="px-4 py-2">FiO2 Ratio</th>
								<th className="px-4 py-2">Insp Time</th>
								<th className="px-4 py-2">Oxygen Flow Rate</th>
								<th className="px-4 py-2">PEEP</th>
								<th className="px-4 py-2">PIP</th>
								<th className="px-4 py-2">Resp Rate</th>
								<th className="px-4 py-2">SIP</th>
								<th className="px-4 py-2">Tidal Vol</th>
								<th className="px-4 py-2">Tidal Vol Actual</th>
								<th className="px-4 py-2">Tidal Vol kg</th>
								<th className="px-4 py-2">Tidal Vol Spon</th>
								<th className="px-4 py-2">BMI</th>
								<th className="px-4 py-2 rounded-tr-2xl">Reccomended</th>
							</tr>
							</thead>
							<tbody>
							{dynamicTable}


							</tbody>
						</table>
					</div>
				</div>
			</>

		);
	} else {


		return (
			<div className="w-8/12 ">
				<form onSubmit={onSubmit} className="w-full ">
					<button type="submit" className='w-full h-10 bg-blue-600 dark:bg-slate-800 dark:text-green-600 text-black font-bold rounded-md text-center text-2xl mt-2' >
						Reload
						<ImConnection className="inline-block mx-2" />
					</button>
				</form>
			</div>


		);
	}

}