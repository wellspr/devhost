import "./app.scss";

import type { Metadata } from "next";

import { Inter, Roboto, Quicksand } from "next/font/google";

const inter = Inter({
	subsets: ['latin'],
	variable: '--inter',
	display: 'swap',
	preload: true
});

const roboto = Roboto({
	subsets: ['latin'],
	weight: ["400"],
	variable: "--roboto",
	display: "swap",
	preload: true
});

const quicksand = Quicksand({
	subsets: ['latin'],
	weight: ["400", "600"],
	variable: '--quicksand',
	display: 'swap',
})

import { Footer } from "./layout/Footer";

export const metadata: Metadata = {
	title: "Dev Host",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${roboto.variable} ${quicksand.variable}`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
