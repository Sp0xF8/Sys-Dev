'use client'

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { FiSun, FiMoon } from "react-icons/fi"

import Image from "next/image"

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	if (!mounted) return (

		<div className="flex items-center bg-gray-200 rounded-full py-1 px-2">
			<button className="flex-1 px-3 py-1 rounded-l-3xl bg-blue-500 text-white focus:outline-none">Button 1</button>
			<button className="flex-1 px-3 py-1   bg-teal-600 text-white focus:outline-none">Button 2</button>
			<button className="flex-1 px-3 py-1 rounded-r-3xl bg-teal-600 text-white focus:outline-none">Button 3</button>
		</div>
		)

	if (resolvedTheme === 'dark') {
		return <FiSun onClick={() => setTheme('light')} />
	}

	if (resolvedTheme === 'light') {
		return <FiMoon onClick={() => setTheme('dark')} />
	}

	


}