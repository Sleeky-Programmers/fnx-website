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

const title = 'West53 Capital';
const longTitle = `${title} | EU-Regulated Fund Management Company | ManCo & AIFM Services`
const description =
	'West53 is a global innovation company delivering software development, product design, and strategies to help businesses thrive in a fast-changing world.';
const keywords =
	'Global innovation company, Software development, Product design, Innovation strategy, Digital solutions, Business growth tools, Cutting-edge expertise, Thriving in a fast-changing world, High-quality digital solutions, Business innovation experts';
const url = `${process.env.BASE_URL}`;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: longTitle,
  description,
  keywords,
  robots: 'index, follow',
  openGraph: {
	type: 'website',
	url,
	title: {
	  default: longTitle, 
	  template: `%s | West53 Capital`,
	},
	description,
	siteName: 'West53 Capital',
	images: ['/favicon.png'],
  },
  twitter: {
	card: 'summary_large_image',
	title: longTitle,
	description,
	site: '@west53capital',
	images: ['/favicon.png'],
  },
  appleWebApp: {
	title: longTitle,
	capable: true,
	startupImage: '/favicon.png',
  },
  alternates: {
	canonical: url,
  },
  icons: {
	icon: '/favicon.png',
	shortcut: '/favicon.png',
	apple: '/favicon.png',
  },
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
  <body className={`${raleway.variable} font-raleway antialiased text-base overflow-x-hidden`}>
    <Header />
    {children}
    <Footer />
  </body>
</html>

	);
}
