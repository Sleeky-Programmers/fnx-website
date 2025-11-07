import type { TeamMember } from '../features/teams-page/team-member-card';
import { HomePageContent, Value, ServiceSection, FundSubTab, WhatWeDoContentType, ContactPageData, TeamData } from './type';


export async function getTeamData(): Promise<TeamData> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/g, '') ?? '';
  const res = await fetch(`${apiBase}/api/team`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch team data');

  const data = await res.json();

  data.members = data.members.map((m: any) => {
    const photo = m.photo ?? '';
    if (photo && !/^https?:\/\//i.test(photo) && !photo.startsWith('/')) {
      m.photo = `${apiBase}/uploads/team/${photo}`;
    } else if (photo && photo.startsWith('/')) {
      m.photo = `${apiBase}${photo}`;
    }
    return m;
  });

  return data;
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

export async function getServiceSection(section: string): Promise<ServiceSection | null> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/g, '') ?? '';
  const res = await fetch(`${apiBase}/api/services?section=${section}`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error(`Failed to fetch service section: ${section}`);

  const data = await res.json();

  if (Array.isArray(data)) {
    return data.find((s) => s.section === section) ?? null;
  }

  return data ?? null;
}

export async function getFundStructure(section = 'typical-fund-structure'): Promise<FundSubTab[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/g, '') || '';
  const res = await fetch(`${apiBase}/api/fund-structure?section=${section}`, {
    cache: 'no-store',
  });

  console.log("Fetching fund structure from:", `${apiBase}/api/fund-structure`);

  if (!res.ok) {
    console.error("Fund structure fetch failed:", res.status);
    return [];
  }

  const data = await res.json();

  return data.map((item: any) => {
    const image = item.image ?? '';
    if (image && !/^https?:\/\//i.test(image) && !image.startsWith('/')) {
      // ✅ Construct correct absolute URL
      item.image = `${apiBase}/uploads/fund-structure/${image}`;
    } else if (image && image.startsWith('/')) {
      item.image = `${apiBase}${image}`;
    }
    return item as FundSubTab;
  });
}

export async function getWhatWeDo(): Promise<WhatWeDoContentType | null> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/g, '') ?? '';
  const res = await fetch(`${apiBase}/api/what-we-do`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Failed to fetch What We Do content:', res.status);
    return null;
  }

  const data = await res.json();

  if (data?.image && !/^https?:\/\//i.test(data.image) && !data.image.startsWith('/')) {
    data.image = `${apiBase}/uploads/what-we-do/${data.image}`;
  } else if (data?.image && data.image.startsWith('/')) {
    data.image = `${apiBase}${data.image}`;
  }

  return data;
}

export async function getContactPage(): Promise<ContactPageData | null> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/g, '') ?? '';
  const res = await fetch(`${apiBase}/api/contact`, { cache: 'no-store' });

  if (!res.ok) return null;

  const data = await res.json();

  if (data?.backgroundImage && !/^https?:\/\//i.test(data.backgroundImage)) {
    data.backgroundImage = `${apiBase}/uploads/contact-page/${data.backgroundImage}`;
  }

  return data;
}

export async function getDisclaimerSections(): Promise<{ title: string; body: string }[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/g, '') ?? '';
  const res = await fetch(`${apiBase}/api/legal/disclaimer`);
  if (!res.ok) throw new Error('Failed to fetch disclaimer content');
  return res.json();
}

export async function getPrivacySections(): Promise<{ title: string; body: string }[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/g, '') ?? '';
  const res = await fetch(`${apiBase}/api/legal/privacy-policy`);
  if (!res.ok) throw new Error('Failed to fetch privacy policy content');
  return res.json();
}

export async function getSfdrDisclosures(): Promise<{ title: string; body: string }[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/g, '') ?? '';
  const res = await fetch(`${apiBase}/api/legal/sfdr`);
  if (!res.ok) throw new Error('Failed to fetch SFDR content');
  return res.json();
}
