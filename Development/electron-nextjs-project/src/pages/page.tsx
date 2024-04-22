
import Link from "next/link";

import NavBar from "@/ui/elements/NavBar";
import ThemeSwitch from "@/ui/elements/ThemeSwitch";

export default function Dashboard() {

	return (
		<>
			<nav className="w-full py-2 px-1 inline-block h-auto  bg-slate-100 dark:bg-slate-900 rounded-b drop-shadow-2xl">
						
				<div className="flex justify-between">

					<div className="flex">
						<div className="flex items-center justify-center text-xl font-bold px-1">
							<Link href="/operator/dashboard" prefetch={false} className="flex justify-center items-center text-center bg-blue-500 text-white border-gray-900 dark:hover:border-gray-200 hover:bg-blue-800 hover:text-orange-400 hover:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-orange-400 dark:bg-gray-800 dark:text-white border-2 h-14 min-w-40 rounded">
								Dashboard
							</Link>
						</div>
						<div className="flex items-center justify-center text-xl font-bold px-1">
							<Link href="/operator/upload-patients" className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
								Upload Patient Data
							</Link>
						</div>
						<div className="flex items-center justify-center text-xl font-bold px-1">
							<Link href="/operator/analyse-patients" className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
								Analyse Patient Data
							</Link>
						</div>
						<div className="flex items-center justify-center text-xl font-bold px-1">
							<Link href="/operator/view-patients" className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
								View All Patients
							</Link>
						</div>
						<div className="flex items-center justify-center text-xl font-bold px-1">
							<Link href="/operator/view-patient" className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
								View Invividual Patient
							</Link>
						</div>
					</div>

					<div className="flex">
						<div className="flex items-center justify-center text-xl font-bold px-1">
							<Link href="/operator/security" className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
								Security
							</Link>
						</div>
					</div>
					
				</div>
				
			</nav>

			<main className="h-screen max-h-fit justify-center p-5  dark:bg-slate-800 ">

				

				<div className="flex justify-between h-4/6 shadow-2xl dark:shadow-s dark:shadow-gray-600">
					<div className="rounded overflow-hidden shadow-lg bg-blue-600 dark:bg-gray-500 w-full ">
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

							<div className="flex h-full justify-center items-center w-4/12 pl-5 ">
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


				<div className="rounded overflow-hidden w-full flex justify-between  h-48  mt-5">

					<div className="rounded overflow-hidden bg-slate-500 w-full mr-2 shadow-xl dark:shadow-md dark:shadow-gray-600">
						<div className="font-bold text-xl shadow-md w-full flex-col text-center h-7 justify-center items-center">
							Missing Values in Patient Data
						</div>
						<div className="">


						</div>
					</div>

					<div className="rounded overflow-hidden bg-slate-500 w-full ml-2 shadow-xl dark:shadow-md dark:shadow-gray-600">
						<div className="font-bold text-xl shadow-md w-full flex-col text-center h-7 justify-center items-center">
							Ranges of Data in the Patient List
						</div>
					</div>
				</div>

			</main>
		</>
	);
}
