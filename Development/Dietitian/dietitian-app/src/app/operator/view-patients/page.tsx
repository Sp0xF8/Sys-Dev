import Image from "next/image";

import { oswald } from "@/app/ui/fonts";

import ThemeSwitch from "@/app/ui/elements/ThemeSwitch";
import Link from "next/link";

import BuildPatients from "@/app/ui/elements/buildpatients";

export default function Dashboard() {

	return (
		<main className=" flex min-h-screen justify-center p-5  dark:bg-slate-800 ">

			<div className="flex h-fit justify-between shadow-2xl dark:shadow-s dark:shadow-gray-600 m-auto">
				<div className="rounded overflow-hidden shadow-lg bg-blue-600 dark:bg-gray-500 w-full ">
					<div className="font-bold text-4xl shadow-md w-full flex-col text-center py-3 px-2">
						View All Patients
					</div>

					<div className="flex px-4 py-4 h-5/6 w-full justify-center">

						<BuildPatients />


					</div>

				</div>
			</div>


		</main>
	);
}
