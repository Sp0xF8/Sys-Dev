
import Patient from '@/app/ui/elements/patient';

export default function aPatients() {




	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 dark:bg-slate-800 ">

			<div className="rounded overflow-hidden shadow-2xl dark:shadow-s dark:shadow-gray-600 bg-slate-200 dark:bg-gray-500 w-10/12">
				<div className="font-bold text-4xl shadow-md w-full flex-col text-center py-3">
					Individual Patient Analysis
				</div>
				<div className="px-2 py-4 w-full m-auto justify-center  text-center">


					<Patient />

		
				</div>
			</div>


		</main>
	);
}
