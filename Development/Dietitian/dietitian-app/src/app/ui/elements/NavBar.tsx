'use client'

import Image from "next/image"
import { useTheme } from "next-themes"


import { usePathname } from 'next/navigation';

export default function NavBar() {

	const page = usePathname()
	

	console.log(page)

	

	switch (page) {

		case "/operator/dashboard":
			return (

				<>
					<nav className="w-full p-4 h-4 dark:bg-medium">
						<div className="flex justify-between">
							
						</div>
					</nav>
				</>
			)
			
			break;

		default:

			return (
				<>
				</>
			)
			break;
		}

}