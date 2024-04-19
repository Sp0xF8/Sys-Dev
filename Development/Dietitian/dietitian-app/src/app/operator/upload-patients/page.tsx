import Image from "next/image";

import { oswald } from "@/app/ui/fonts";

import ThemeSwitch from "@/app/ui/elements/ThemeSwitch";

export default function uPatients() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 ">

		<div className="rounded overflow-hidden shadow-lg bg-slate-200 max-w-md">
			<div className="font-bold text-4xl shadow-md w-full flex-col text-center py-3">
					Upload Patients
			</div>
			<div className="px-6 py-4">
				
				<form className="w-full">
					<label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="passkey">
						Passkey
					</label>
					<div className="flex justify-center">
						<input className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center" id="passkey" type="text" placeholder="Passkey" />
					</div>
				

					<div className="flex items-center justify-between  mt-4">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto w-1/2" type="button">
							Sign In
						</button>
					</div>

				</form>
				<div className="flex justify-center">
						
				</div>
			</div>
		</div>

      
    </main>
  );
}
