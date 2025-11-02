import type { TeamMember } from '../features/teams-page/team-member-card';

export type HomePageContent = {
  whoWeAreTitle: string;
  whoWeAreSubheading: string;
  whoWeAreText: string;
  whyChooseTitle: string;
  whyChooseSubtitle: string;
  whyChooseFeatures: {
    icon: string;
    title: string;
    description: string;
  }[];
};

export interface Value {
  title: string;
  description: string;
  variant: 'light' | 'dark';
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/g, '') ?? '';
  const res = await fetch(`${apiBase}/api/team`);
  if (!res.ok) throw new Error('Failed to fetch team members');

  const data = await res.json();

  return data.map((m: any) => {
    const photo = m.photo ?? '';
    if (photo && !/^https?:\/\//i.test(photo) && !photo.startsWith('/')) {
      m.photo = `${apiBase}/uploads/team/${photo}`;
    } else if (photo && photo.startsWith('/')) {
      m.photo = `${apiBase}${photo}`;
    }
    return m as TeamMember;
  });
}

export async function getHomeContent(): Promise<HomePageContent> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/g, '') ?? '';
  const res = await fetch(`${apiBase}/home`);
  if (!res.ok) throw new Error('Failed to fetch home content');

  return res.json();
}

export async function getValues(): Promise<Value[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/g, '') ?? '';
  const res = await fetch(`${apiBase}/api/values`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch values');
  return res.json();
}