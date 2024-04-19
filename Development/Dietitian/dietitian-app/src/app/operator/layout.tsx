import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "@/app/globals.css";


import { Providers } from "@/app/providers";
import NavBar from "@/app/ui/elements/NavBar";


export const metadata: Metadata = {
  title: "Healthcare Operator | Dietitian Referral App",
  description: "Sign into the Dietitian Referral App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
		<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
		<body className={inter.className}>
			<Providers>
				<div className=" drop-shadow-xl dark:shadow-white">
					<NavBar/>
					{children}
				</div>
			</Providers>
		</body>
    </html>
  );
}
