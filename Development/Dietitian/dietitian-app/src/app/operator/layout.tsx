import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "@/app/globals.css";


import { Providers } from "@/app/providers";
import NavBar from "@/app/ui/elements/NavBar";


export const metadata: Metadata = {
  title: "Sign in | Dietitian Referral App",
  description: "Sign into the Dietitian Referral App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
		<body className={inter.className}>
			<Providers>
				<NavBar/>
					{children}
			</Providers>
		</body>
    </html>
  );
}
