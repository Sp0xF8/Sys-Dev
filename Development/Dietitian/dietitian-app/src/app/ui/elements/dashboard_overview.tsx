'use client';

import { ImArrowRight2, ImArrowLeft2, ImConnection } from "react-icons/im";

import { useState, useEffect } from "react";


import Link from 'next/link';


import PieChart from "./piechart";
import BarChart from "./barchart";


export default function Analyse() {

	const [overview_data, setOverview_Data] = useState([]);
	const [datafound, setDataFound] = useState(false);

	const [means, setMeans] = useState({});


	useEffect(() => {
		const fetchData = async () => {
			try {
				//clear use state patients

				const res = await fetch('/api/dashboard', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ getpatients: true })
				});

				if (!res.ok) {
					throw new Error('Failed to Analyse Patients');
				}

				const data = await res.json();
				const data_json = JSON.parse(data.data_response);
				const means_json = JSON.parse(data.means_response);

				console.log("analyse: " + data_json);
				console.log("means: " + means_json);

				setOverview_Data(data_json);
				setMeans(means_json);
				setDataFound(true);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData(); // Call the fetchData function when the component mounts

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); // Empty dependency array to ensure it only runs once when component mounts



	let mainhtml = [];

	let secondaryhtml = [];


	if (datafound) {

		const data1 = [overview_data[0].number_of_referrals];
		const data2 = [overview_data[0].number_of_no_referrals];
		const label1 = 'Referral Needed';
		const label2 = 'Referral Not Needed';



		const data = {
			labels: ['end_tidal_co2', 'feed_vol', 'feed_vol_adm', 'fio2', 'fio2_ratio', 'insp_time', 'oxygen_flow_rate', 'peep', 'pip', 'resp_rate', 'sip', 'tidal_vol', 'tidal_vol_actual', 'tidal_vol_kg', 'tidal_vol_spon', 'bmi'],
			minValues: [],
			percentile25: [],
			medianValues: [],
			percentile75: [],
			maxValues: [],
		};

		for (let item in means){
			console.log("Item: " + item);

			for (let key in means[item]){

				if (key === 'encounterId') { continue; }
				
				if (item == 'min') {
					data.minValues.push(means[item][key]);
				} else if (item == '25%') {
					data.percentile25.push(means[item][key]);
				} else if (item == '50%') {
					data.medianValues.push(means[item][key]);
				} else if (item == '75%') {
					data.percentile75.push(means[item][key]);
				} else if (item == 'max') {
					data.maxValues.push(means[item][key]);
				}
			}
		}

		console.log(data);




		mainhtml.push(
			<div className="flex px-4 py-4 h-5/6 w-full">
				<div className="flex h-full justify-center items-center w-8/12 ">
					<div className="rounded overflow-hidden shadow-lg bg-gray-600 dark:bg-gray-600 w-4/6 mr-2 h-3/4 text-white justify-between">
						<div className="font-bold text-l shadow-md w-full flex-col text-center h-7 ">
							Number of Patients
						</div>
						<div className="px-3">
							<br />
							<div className="text-center">
								<p className="">Total number of patients currently in the system.</p>
								<br />
								<p className="text-4xl">{overview_data[0].number_of_patients}</p>
							</div>
							<br />
							<Link href="/operator/upload-patients" className="">
								<div className="border-green-500 text-green-500 border-2 rounded-md w-3/4 m-auto text-center">
									Add Patients
								</div>
							</Link>
						</div>
					</div>
					<div className="rounded overflow-hidden shadow-lg bg-red-900 dark:bg-gray-600 text-white w-4/6 ml-2 mr-2 h-2/4 ">
						<div className="font-bold text-l  shadow-md w-full flex-col text-center h-7 justify-center items-center">
							Referral Needed
						</div>
						<div className="px-3">
							<br />
							<div className="text-center">
								<p className="">Number of Patients Reccomended for a consultation.</p>
								<p className="text-4xl">{overview_data[0].number_of_referrals}</p>
							</div>
						</div>
					</div>
					<div className="rounded overflow-hidden shadow-lg bg-green-700 dark:bg-gray-600 text-white w-4/6 ml-2 mr-2 h-2/4">
						<div className="font-bold text-l  shadow-md w-full flex-col text-center h-7 justify-center items-center">
							Not Reccomended
						</div>
						<div className="px-3">
							<br />
							<div className="text-center">
								<p className="">Number of Patients Not Reccomended for consultation.</p>
								<p className="text-4xl">{overview_data[0].number_of_no_referrals}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex h-full justify-center items-center w-4/12 pl-5 ">
					<div className="rounded overflow-hidden shadow-lg bg-slate-800 text-white dark:bg-gray-600 w-full h-5/6">
						<div className="font-bold text-xl shadow-md w-full flex-col text-center h-7 justify-center items-center">
							Demographics within the Ward
						</div>

						<div className="px-3">
							<div className="text-center ">

								<PieChart data1={data1} data2={data2} label1={label1} label2={label2} height={250} width={250} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);

		secondaryhtml.push(
			<BarChart data={data} />
		)


	} else {


		mainhtml.push(

			<div className="flex px-4 py-4 h-5/6 w-full">

				<div className="flex h-full justify-center items-center w-8/12 ">
					<div className="rounded overflow-hidden shadow-lg bg-gray-600 dark:bg-gray-600 w-4/6 mr-2 h-3/4 text-white justify-between">
						<div className="font-bold text-l shadow-md w-full flex-col text-center h-7 ">
							Number of Patients
						</div>
						<div className="px-3">
							<br />
							<div className="text-center">
								<p className="">Total number of patients currently in the system.</p>
								<br />
								<p className="text-4xl">0</p>
							</div>
							<br />

							<Link href="/operator/upload-patients" className="">
								<div className="border-green-500 text-green-500 border-2 rounded-md w-3/4 m-auto text-center">
									Add Patients
								</div>
							</Link>

						</div>

					</div>

					<div className="rounded overflow-hidden shadow-lg bg-red-900 dark:bg-gray-600 text-white w-4/6 ml-2 mr-2 h-2/4 ">
						<div className="font-bold text-l  shadow-md w-full flex-col text-center h-7 justify-center items-center">
							Referral Needed
						</div>
						<div className="px-3">
							<br />
							<div className="text-center">
								<p className="">Number of Patients Reccomended for a consultation.</p>
								<p className="text-4xl">0</p>
							</div>
						</div>

					</div>

					<div className="rounded overflow-hidden shadow-lg bg-green-700 dark:bg-gray-600 text-white w-4/6 ml-2 mr-2 h-2/4">
						<div className="font-bold text-l  shadow-md w-full flex-col text-center h-7 justify-center items-center">
							Not Reccomended
						</div>
						<div className="px-3">
							<br />
							<div className="text-center">
								<p className="">Number of Patients Not Reccomended for consultation.</p>
								<p className="text-4xl">0</p>
							</div>
						</div>

					</div>

					<div className="rounded overflow-hidden shadow-lg bg-gray-500 dark:bg-gray-600 text-white w-4/6 ml-2 h-2/4">
						<div className="font-bold text-l  shadow-md w-full flex-col text-center h-7 justify-center items-center">
							Already Referred
						</div>
						<div className="px-3">
							<br />
							<div className="text-center">
								<p className="">Number of Patients already referred.</p>
								<br />
								<p className="text-4xl">0</p>
							</div>
						</div>

					</div>
				</div>

				<div className="flex h-full justify-center items-center w-4/12 pl-5 ">
					<div className="rounded overflow-hidden shadow-lg bg-slate-800 text-white dark:bg-gray-600 w-full h-5/6">
						<div className="font-bold text-xl shadow-md w-full flex-col text-center h-7 justify-center items-center">
							Demographics within the Ward
						</div>

						<div className="px-3">
							<br />
							<div className="text-center">
								<p className="">graph of data.</p>
								<br />
								<p className="text-4xl">3</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}



	return (
		<div className="h-screen flex flex-col justify-center p-5  dark:bg-slate-800 ">
			<div className="flex justify-between h-4/6 shadow-2xl dark:shadow-s dark:shadow-gray-600">
				<div className="rounded overflow-hidden shadow-lg bg-blue-600 dark:bg-gray-500 w-full ">
					<div className="font-bold text-4xl shadow-md w-full flex-col text-center py-3 px-2">
						Overview of CCU Ward
					</div>

					{mainhtml}
				</div>
			</div>
			<div className="rounded overflow-hidden w-full flex justify-between  h-fit  mt-5">
				<div className="rounded overflow-hidden bg-slate-300 dark:bg-gray-400 dark:text-slate-800 w-full mr-2 shadow-xl dark:shadow-md dark:shadow-gray-600">
					<div className="font-bold text-xl shadow-md w-full flex-col text-center h-7 justify-center items-center">
						Missing Values in Patient Data
					</div>
					<div className="flex">
						<img src="/data_distribution.png" alt="Patients have not yet been analysed." className="w-full py-2 px-4" width={800} height={600} />
					</div>
				</div>
				<div className="rounded overflow-hidden bg-slate-300 dark:bg-gray-400 dark:text-slate-800 w-full ml-2 shadow-xl dark:shadow-md dark:shadow-gray-600">
					<div className="font-bold text-xl shadow-md w-full flex-col text-center h-7 justify-center items-center">
						Ranges of Data in the Patient List
					</div>
					<div className="h-5/6 w-full m-auto justify-center flex">
						{secondaryhtml}
					</div>
				</div>
			</div>
		</div>

	);

}