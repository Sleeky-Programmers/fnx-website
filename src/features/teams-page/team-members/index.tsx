import type { TeamMember } from "../team-member-card";
import { getTeamMembers } from '@/lib/api';
import TeamMembersClient from './TeamMembersClient';

export async function TeamMembers() {
  const teamMembers: TeamMember[] = await getTeamMembers();

  return <TeamMembersClient teamMembers={teamMembers} />;
}
