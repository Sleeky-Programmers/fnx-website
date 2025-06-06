import Head from 'next/head';

import { ValuesCards } from '@/features/values-page/values-card';
import { ValuesHero } from '@/features/values-page/values-hero';

export default function ValuesPage() {
	return (
		<>
			<Head>
				<title>Our Values | West53 Capital</title>
				<meta
					name="description"
					content="our values are simple but they are crucial and core to our undertakings. We believe in simplicity, integrity, efficiency, and respect"
				/>
				<meta
					name="keywords"
					content="values, simplicity, integrity, efficiency, respect, west53 capital"
				/>
			</Head>
			<main className="min-h-screen">
				<ValuesHero />
				<ValuesCards />
			</main>
		</>
	);
}
