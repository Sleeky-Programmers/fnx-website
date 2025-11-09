import { getTeamData } from "@/lib/api";
import type { TeamMember } from "../team-member-card";
import TeamMembersClient from './TeamMembersClient';

export async function TeamMembers() {
  const teamData = await getTeamData();
  const teamMembers: TeamMember[] = teamData.members;

  return <TeamMembersClient teamData={teamData} />; 
}