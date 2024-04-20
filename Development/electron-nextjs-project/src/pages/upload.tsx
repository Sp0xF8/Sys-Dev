
import Link from "next/link";

import NavBar from "@/ui/elements/NavBar";
import ThemeSwitch from "@/ui/elements/ThemeSwitch";

export default function Uploadd() {

	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-center p-24 dark:bg-slate-800 ">

				<div  className="rounded overflow-hidden shadow-2xl dark:shadow-s dark:shadow-gray-600 bg-slate-200 dark:bg-gray-500 w-10/12 mx-auto">
					<div className="font-bold text-4xl shadow-md flex justify-center items-center py-3">
						Upload Patients
					</div>
					<div className="px-6 py-4 flex flex-col items-center">

						<p className="text-center text-2xl">Here you can upload new patient files!</p>

						<p className="text-center text-2xl">Click the button below to browse your computer.</p>
						<br />

						<FileUpload />

						<br/>
						<p className="text-center text-2xl">After Uploading, it is now possible to analyse patients.</p>


					</div>
				</div>


			</main>
		</>
	);
}
