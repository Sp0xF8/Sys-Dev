import Image from "next/image";

import { oswald } from "@/app/ui/fonts";

import ThemeSwitch from "@/app/ui/elements/ThemeSwitch";

import DashboardOverview from "@/app/ui/elements/dashboard_overview";

export default function Dashboard() {

	return (
		<main >

			<DashboardOverview />
			
		</main>
	);
}
