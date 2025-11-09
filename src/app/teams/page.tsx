import Head from 'next/head';
import { TeamMembers } from '@/features/teams-page/team-members';
import { TeamsHero } from '@/features/teams-page/teams-hero';

export default function TeamsPage() {
	return (
		<>
			<Head>
				<title>Team | West53 Capital</title>
				<meta
					name="description"
					content="Our people make our company. Meet the talented individuals who drive our success at West53 Capital."
				/>
			</Head>
			<main className="min-h-screen">
				<TeamsHero />
				<TeamMembers />
			</main>
		</>
	);
}
