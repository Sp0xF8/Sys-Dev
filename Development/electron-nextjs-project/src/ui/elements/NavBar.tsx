'use client'

import Image from "next/image"
import { useTheme } from "next-themes"

import ThemeSwitch from "@/ui/elements/ThemeSwitch";


import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function NavBar() {

	const page = usePathname()
	

	console.log(page)

	

	switch (page) {

		case "/page":
			return (
				<>
					<nav className="rounded-b drop-shadow-2xl">
						
						<div className="w-100 px-2 py-2">

							<div className="w-100 bg-slate-100 dark:bg-white">
								<div className="w-2/5 text-blue-500">
									<Link href="page" prefetch={false} className="text-blue-500">
										Dashboard
									</Link>
								</div>
								<div className="">
									<Link href="/operator/dashboard" className="">
										asdsadsadasdasdsadasdsad asd asdsada da
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