import { getTeamData } from "@/lib/api";
import TeamMembersClient from './TeamMembersClient';

export async function TeamMembers() {
  const teamData = await getTeamData();

  return <TeamMembersClient teamData={teamData} />; 
}