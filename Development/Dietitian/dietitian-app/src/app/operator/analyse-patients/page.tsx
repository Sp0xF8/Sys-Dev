import Image from "next/image";

import { oswald } from "@/app/ui/fonts";

import ThemeSwitch from "@/app/ui/elements/ThemeSwitch";




export default function aPatients() {




	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 dark:bg-slate-800 ">

			<div className="rounded overflow-hidden shadow-2xl dark:shadow-s dark:shadow-gray-600 bg-slate-200 dark:bg-gray-500 w-10/12">
				<div className="font-bold text-4xl shadow-md w-full flex-col text-center py-3">
					Analyse Patients
				</div>
				<div className="px-6 py-4 w-5/6 m-auto justify-center  text-center">

					<p className="text-center text-2xl">Here you can analyse patient files with a machine learning algorithm!</p>

					<p className="text-center text-2xl">Click the button below to begin analysis!</p>
					<br />

					<button type='submit' className='w-3/4 h-20 bg-blue-600 dark:bg-slate-800 dark:text-green-600 text-black font-bold rounded-md text-center text-2xl mt-2' >Analyse</button>

					<br/>
					<p className="text-center text-2xl dark:text-orange-400">Warning: This process can be time consuming, while it shouldnt take longer than a few minues- Be mindful of execution!</p>


				</div>
			</div>


		</main>
	);
}
