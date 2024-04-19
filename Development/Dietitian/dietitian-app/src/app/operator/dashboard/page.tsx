import Image from "next/image";

import { oswald } from "@/app/ui/fonts";

import ThemeSwitch from "@/app/ui/elements/ThemeSwitch";
import Link from "next/link";

export default function Dashboard() {

	return (
		<main className="h-screen max-h-fit justify-center p-5 bg-slate-200 dark:bg-slate-800 ">

			<div className="flex justify-between h-4/6">
				<div className="rounded overflow-hidden shadow-lg bg-blue-600 dark:bg-gray-500 w-full mb-3">
					<div className="font-bold text-4xl shadow-md w-full flex-col text-center py-3 px-2">
						Overview of CCU Ward
					</div>

					<div className="flex px-4 py-4 h-5/6 w-full">

						<div className="flex h-full justify-center items-center w-8/12 ">
							<div className="rounded overflow-hidden shadow-lg bg-gray-600 dark:bg-gray-600 w-4/6 mr-2 h-3/4 text-white justify-between">
								<div className="font-bold text-l shadow-md w-full flex-col text-center h-7 ">
									Number of Patients
								</div>
								<div className="px-3">
									<br/>
									<div className="text-center">
										<p className="">Total number of patients currently in the system.</p>
										<br/>
										<p className="text-4xl">7</p>
									</div>
									<br/>
									
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
									<br/>
									<div className="text-center">
										<p className="">Number of Patients Reccomended for a consultation.</p>
										<p className="text-4xl">7</p>
									</div>
								</div>
								
							</div>

							<div className="rounded overflow-hidden shadow-lg bg-green-700 dark:bg-gray-600 text-white w-4/6 ml-2 mr-2 h-2/4">
								<div className="font-bold text-l  shadow-md w-full flex-col text-center h-7 justify-center items-center">
									Not Reccomended
								</div>
								<div className="px-3">
									<br/>
									<div className="text-center">
										<p className="">Number of Patients Not Reccomended for consultation.</p>
										<p className="text-4xl">5</p>
									</div>
								</div>
								
							</div>

							<div className="rounded overflow-hidden shadow-lg bg-gray-500 dark:bg-gray-600 text-white w-4/6 ml-2 h-2/4">
								<div className="font-bold text-l  shadow-md w-full flex-col text-center h-7 justify-center items-center">
									Already Referred
								</div>
								<div className="px-3">
									<br/>
									<div className="text-center">
										<p className="">Number of Patients already referred.</p>
										<br/>
										<p className="text-4xl">3</p>
									</div>
								</div>
								
							</div>
						</div>

						<div className="flex h-full justify-center items-center w-4/12 pl-5">
							<div className="rounded overflow-hidden shadow-lg bg-slate-800 text-white dark:bg-gray-600 w-full h-5/6">
								<div className="font-bold text-xl shadow-md w-full flex-col text-center h-7 justify-center items-center">
									Demographics within the Ward
								</div>

								<div className="px-3">
									<br/>
									<div className="text-center">
										<p className="">graph of data.</p>
										<br/>
										<p className="text-4xl">3</p>
									</div>
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>


			<div className="rounded overflow-hidden w-full flex justify-between h-40 pb-5">

				<div className="rounded overflow-hidden shadow-lg bg-slate-500 w-full mr-2">
					<div className="font-bold text-xl shadow-md w-full flex-col text-center h-7 justify-center items-center">
						Missing Values in Patient Data
					</div>
					<div className="">


					</div>
				</div>

				<div className="rounded overflow-hidden shadow-lg bg-slate-500 w-full ml-2">
					<div className="font-bold text-xl shadow-md w-full flex-col text-center h-7 justify-center items-center">
						Ranges of Data in the Patient List
					</div>
					<div className="">


					</div>
				</div>
			</div>

		</main>
	);
}
