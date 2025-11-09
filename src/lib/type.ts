import { TeamMember } from "@/features/teams-page/team-member-card";

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

export interface ServiceSection {
  section: string;
  title?: string;
  description?: string;
  image?: string;
  cards?: { title: string; description: string }[];
  providers?: { label: string }[];
  services?: { label: string }[];
}

export interface FundSubTab {
  value: string;
  label: string;
  shortLabel?: string;
  description: string;
  image?: string;
}

export interface Value {
  title: string;
  description: string;
  variant: 'light' | 'dark';
}

export interface WhatWeDoContentType {
  title: string;
  description: string;
  image?: string;
}

export interface ContactPageData {
  heading: string;
  subheading?: string;
  phone?: string;
  email?: string;
  website?: string;
  backgroundImage?: string;
}

export interface TeamData {
  content: {
    title: string;
    subtitle: string;
  };
  members: TeamMember[];
}