import Head from 'next/head';

import ContactPage from '@/features/contact-page';

export default function ValuesPage() {
	return (
		<>
			<Head>
				<title>Contact | West53 Capital</title>
				<meta
					name="description"
					content="Get in touch with us at West53 Capital. We are here to assist you with your inquiries and provide the support you need."
				/>
				<meta
					name="keywords"
					content="contact, west53 capital, inquiries, support"
				/>
			</Head>
			<main className="min-h-screen">
				<ContactPage />
			</main>
		</>
	);
}
