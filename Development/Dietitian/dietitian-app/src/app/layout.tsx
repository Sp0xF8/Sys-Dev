import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "./globals.css";


import { Providers } from "@/app/providers";


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
				{children}
			</Providers>
		</body>
    </html>
  );
}
