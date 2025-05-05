import type { Metadata } from 'next';
import './globals.css';

import localFont from 'next/font/local';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const raleway = localFont({
	src: './fonts/Raleway-VariableFont_wght.ttf',
	variable: '--font-raleway',
	weight: '100 900',
	preload: true,
});

const title_longName = 'Fnx';
const title = `${title_longName} | Global Innovation Experts in Software Development & Product Design`;
const description =
	'Fnx is a global innovation company delivering software development, product design, and strategies to help businesses thrive in a fast-changing world.';
const keywords =
	'Global innovation company, Software development, Product design, Innovation strategy, Digital solutions, Business growth tools, Cutting-edge expertise, Thriving in a fast-changing world, High-quality digital solutions, Business innovation experts';
const url = `${process.env.BASE_URL}`;

export const metadata: Metadata = {
	metadataBase: new URL(url),
	title: {
		default: title,
		template: `%s`,
	},
	description,
	keywords,
	robots: 'index, follow',
	openGraph: {
		title,
		description,
		siteName: 'Fnx',
		images: ['/logo.png'],
	},
	appleWebApp: { title, capable: true, startupImage: '/logo.png' },
	twitter: {
		card: 'summary',
		site: url,
		images: '/logo.png',
	},
	alternates: { canonical: url },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${raleway.variable} antialiased font-raleway relative text-base overflow-x-hidden overflow`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
