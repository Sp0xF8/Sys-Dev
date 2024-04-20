import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from 'next-themes'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
		<body className={inter.className}>

			<ThemeProvider attribute='class' defaultTheme='system' enableSystem themes={['cont', 'light', 'dark']}>
				{children}
			</ThemeProvider>

		</body>
    </html>
  );
}
