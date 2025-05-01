
import { TeamMembers } from "@/features/teams-page/team-members";
import { TeamsHero } from "@/features/teams-page/teams-hero";

export default function TeamsPage() {
  return (
    <main className="min-h-screen">
      <TeamsHero />
      <TeamMembers />
    </main>
  );
}
