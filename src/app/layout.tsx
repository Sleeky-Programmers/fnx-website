import './globals.css';

import localFont from 'next/font/local';
import Head from 'next/head';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const raleway = localFont({
	src: './fonts/Raleway-VariableFont_wght.ttf',
	variable: '--font-raleway',
	weight: '100 900',
	preload: true,
});

const title = 'West53 Capital';
const longTitle = `${title} | EU-Regulated Fund Management Company | ManCo & AIFM Services`;
const description =
	'West53 is a global innovation company delivering software development, product design, and strategies to help businesses thrive in a fast-changing world.';
const keywords =
	'Global innovation company, Software development, Product design, Innovation strategy, Digital solutions, Business growth tools, Cutting-edge expertise, Thriving in a fast-changing world, High-quality digital solutions, Business innovation experts';
const url = process.env.BASE_URL as string;

function HeadMeta() {
	return (
		<Head>
			<title>{longTitle}</title>
			<meta
				name="description"
				content={description}
			/>
			<meta
				name="keywords"
				content={keywords}
			/>
			<meta
				name="robots"
				content="index, follow"
			/>

			{/* Open Graph */}
			<meta
				property="og:type"
				content="website"
			/>
			<meta
				property="og:url"
				content={url}
			/>
			<meta
				property="og:title"
				content={longTitle}
			/>
			<meta
				property="og:description"
				content={description}
			/>
			<meta
				property="og:site_name"
				content={title}
			/>
			<meta
				property="og:image"
				content={`${url}/favicon.png`}
			/>

			{/* Twitter */}
			<meta
				name="twitter:card"
				content="summary_large_image"
			/>
			<meta
				name="twitter:title"
				content={longTitle}
			/>
			<meta
				name="twitter:description"
				content={description}
			/>
			<meta
				name="twitter:site"
				content="@west53capital"
			/>
			<meta
				name="twitter:image"
				content={`${url}/favicon.png`}
			/>

			{/* Apple Web App */}
			<meta
				name="apple-mobile-web-app-title"
				content={longTitle}
			/>
			<meta
				name="apple-mobile-web-app-capable"
				content="yes"
			/>
			<link
				rel="apple-touch-startup-image"
				href={`${url}/favicon.png`}
			/>

			{/* Icons */}
			<link
				rel="icon"
				href={`${url}/favicon.png`}
			/>
			<link
				rel="shortcut icon"
				href={`${url}/favicon.png`}
			/>
			<link
				rel="apple-touch-icon"
				href={`${url}/favicon.png`}
			/>

			{/* Canonical */}
			<link
				rel="canonical"
				href={url}
			/>
		</Head>
	);
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${raleway.variable} font-raleway antialiased text-base overflow-x-hidden`}>
				<HeadMeta />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
