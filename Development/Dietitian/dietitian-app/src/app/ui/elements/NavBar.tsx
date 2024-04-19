'use client'

import Image from "next/image"
import { useTheme } from "next-themes"

import ThemeSwitch from "@/app/ui/elements/ThemeSwitch";


import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function NavBar() {

	const page = usePathname()
	

	console.log(page)

	

	switch (page) {

		case "/operator/dashboard":
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
							<div className="w-36 h-full bg-blue-800 rounded-lg">

								<div className="text-center text-white font-bold">
									Color Scheme
								</div>

								<div className="flex items-center justify-center">
									<ThemeSwitch />
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
				</>
			)
			break;
		
		case "/operator/upload-patients":
			return (

				<>
					<nav className="w-full py-2 px-1 inline-block cont:text-orange-200 h-auto bg-slate-100 dark:bg-slate-900">
						
						<div className="flex justify-between">

							<div className="flex">
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/dashboard"  className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
										Dashboard
									</Link>
								</div>
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/upload-patients" prefetch={false} className="flex justify-center items-center text-center bg-blue-500 text-white border-gray-900 dark:hover:border-gray-200 hover:bg-blue-800 hover:text-orange-400 hover:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-orange-400 dark:bg-gray-800 dark:text-white border-2 h-14 min-w-40 rounded">
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
							<div className="w-36 h-full bg-blue-800 rounded-lg">

								<div className="text-center text-white font-bold">
									Color Scheme
								</div>

								<div className="flex items-center justify-center">
									<ThemeSwitch />
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
				</>
			)
			break;

		case "/operator/analyse-patients":
			return (

				<>
					<nav className="w-full py-2 px-1 inline-block cont:text-orange-200 h-auto bg-slate-100 dark:bg-slate-900">
						
						<div className="flex justify-between">

							<div className="flex">
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/dashboard"  className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
										Dashboard
									</Link>
								</div>
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/upload-patients" className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
										Upload Patient Data
									</Link>
								</div>
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/analyse-patients" prefetch={false} className="flex justify-center items-center text-center bg-blue-500 text-white border-gray-900 dark:hover:border-gray-200 hover:bg-blue-800 hover:text-orange-400 hover:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-orange-400 dark:bg-gray-800 dark:text-white border-2 h-14 min-w-40 rounded">
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
							<div className="w-36 h-full bg-blue-800 rounded-lg">

								<div className="text-center text-white font-bold">
									Color Scheme
								</div>

								<div className="flex items-center justify-center">
									<ThemeSwitch />
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
				</>
			)
			break;

		case "/operator/view-patients":
			return (

				<>
					<nav className="w-full py-2 px-1 inline-block cont:text-orange-200 h-auto bg-slate-100 dark:bg-slate-900">
						
						<div className="flex justify-between">

							<div className="flex">
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/dashboard"  className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
										Dashboard
									</Link>
								</div>
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/upload-patients" className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
										Upload Patient Data
									</Link>
								</div>
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/analyse-patients"  className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded" >
										Analyse Patient Data
									</Link>
								</div>
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/view-patients"prefetch={false} className="flex justify-center items-center text-center bg-blue-500 text-white border-gray-900 dark:hover:border-gray-200 hover:bg-blue-800 hover:text-orange-400 hover:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-orange-400 dark:bg-gray-800 dark:text-white border-2 h-14 min-w-40 rounded">
										View All Patients
									</Link>
								</div>
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/view-patient" className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
										View Invividual Patient
									</Link>
								</div>
							</div>
							<div className="w-36 h-full bg-blue-800 rounded-lg">

								<div className="text-center text-white font-bold">
									Color Scheme
								</div>

								<div className="flex items-center justify-center">
									<ThemeSwitch />
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
				</>
			)
			break;

		case "/operator/view-patient":
			return (

				<>
					<nav className="w-full py-2 px-1 inline-block cont:text-orange-200 h-auto bg-slate-100 dark:bg-slate-900">
						
						<div className="flex justify-between">

							<div className="flex">
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/dashboard"  className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
										Dashboard
									</Link>
								</div>
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/upload-patients" className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
										Upload Patient Data
									</Link>
								</div>
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/analyse-patients"  className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded" >
										Analyse Patient Data
									</Link>
								</div>
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/view-patients"  className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
										View All Patients
									</Link>
								</div>
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/view-patient"prefetch={false} className="flex justify-center items-center text-center bg-blue-500 text-white border-gray-900 dark:hover:border-gray-200 hover:bg-blue-800 hover:text-orange-400 hover:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-orange-400 dark:bg-gray-800 dark:text-white border-2 h-14 min-w-40 rounded">
										View Invividual Patient
									</Link>
								</div>
							</div>
							<div className="w-36 h-full bg-blue-800 rounded-lg">

								<div className="text-center text-white font-bold">
									Color Scheme
								</div>

								<div className="flex items-center justify-center">
									<ThemeSwitch />
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
				</>
			)
			break;

		default:

			return (

				<>
					<nav className="w-full py-2 px-1 inline-block cont:text-orange-200 h-auto bg-green-800 dark:bg-slate-900">
						
						<div className="flex justify-between">

							<div className="flex">
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/dashboard"  className="flex justify-center items-center text-center bg-blue-800 text-white dark:bg-gray-600 dark:hover:border-gray-200 hover:bg-blue-500 hover:text-orange-400 hover:border-gray-800 hover:border-2  h-14 min-w-40 rounded">
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
							<div className="w-36 h-full bg-blue-800 rounded-lg">

								<div className="text-center text-white font-bold">
									Color Scheme
								</div>

								<div className="flex items-center justify-center">
									<ThemeSwitch />
								</div>
							</div>

							<div className="flex">
								<div className="flex items-center justify-center text-xl font-bold px-1">
									<Link href="/operator/security" className="flex justify-center items-center text-center bg-blue-500 text-white border-gray-800 dark:hover:border-gray-200 hover:bg-blue-800 hover:text-orange-400 hover:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-orange-400 dark:bg-gray-800 dark:text-white border-2 h-14 w-40 rounded">
										Security
									</Link>
								</div>
							</div>
							
						</div>
						
					</nav>
				</>
			)
			break;
		}

}