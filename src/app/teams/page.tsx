
import { TeamMembers } from "@/features/teams-page/team-members";
import { TeamsHero } from "@/features/teams-page/teams-hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Team | West53 Capital',
  description: 'Our people make our company. Meet the talented individuals who drive our success at West53 Capital.',
};

export default function TeamsPage() {
  return (
    <main className="min-h-screen">
      <TeamsHero />
      <TeamMembers />
    </main>
  );
}
