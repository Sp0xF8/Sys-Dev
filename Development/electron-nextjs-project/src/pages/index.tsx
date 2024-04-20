import Image from "next/image";


import Link from "next/link";




export default function Home() {
  return (
    <main className="w-full h-screen flex bg-slate-200">
		<div className="rounded overflow-hidden shadow-lg bg-slate-200 dark:bg-slate-500 max-w-md justify-center m-auto">
			<div className="font-bold text-4xl shadow-md w-full flex-col text-center py-3">
					Please Enter Assigned Passkey
			</div>
			<div className="px-6 py-4">
				
				<form className="w-full">
					<label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2 text-center" htmlFor="passkey">
						Passkey
					</label>
					<div className="flex justify-center">
						<input className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center" id="passkey" type="text" placeholder="Passkey" />
					</div>
				

					<div className="flex items-center justify-between  mt-4">
						<Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto w-1/2 text-center" type="button" href={"page"}>
							Sign In
						</Link>
					</div>

				</form>
			</div>
		</div>
    </main>
  );
}
