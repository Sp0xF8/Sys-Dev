'use client'

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"


const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	if (!mounted) return (

		<div className="flex items-center bg-white rounded-full py-0.5 px-0.5  mb-1">
			<button className="flex-1 px-3 rounded-l-3xl bg-blue-500 dark:bg-gray-900 text-white focus:outline-none"></button>
			<button className="flex-1 px-3 rounded-r-3xl bg-teal-600 dark:bg-gray-700 text-white focus:outline-none"></button>
		</div>
		)

	if (resolvedTheme === 'light') {
		return (
				<div className="flex items-center bg-black rounded-full py-0.5 px-0.5  mb-1">
					<button className="flex-1 px-3 rounded-l-3xl bg-blue-500 dark:bg-gray-900 text-white focus:outline-none h-7" onClick={() => setTheme('light')}>Light</button>
					<button className="flex-1 px-3 rounded-r-3xl bg-teal-600 dark:bg-gray-700 text-white focus:outline-none h-7" onClick={() => setTheme('dark')}>Dark</button>
				</div>
			)
	}

	if (resolvedTheme === 'dark') {
		
		return (
				<div className="flex items-center bg-white rounded-full py-0.5 px-0.5 mb-1">
					<button className="flex-1 px-3 rounded-l-3xl bg-teal-600 dark:bg-gray-700 text-white focus:outline-none h-7" onClick={() => setTheme('light')}>Light</button>
					<button className="flex-1 px-3 rounded-r-3xl bg-blue-500 dark:bg-gray-900 text-white focus:outline-none h-7" onClick={() => setTheme('dark')}>Dark</button>
				</div>
			)
	}


	


}

export default ThemeSwitch;