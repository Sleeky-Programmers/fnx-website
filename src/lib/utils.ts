import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const NavLinks = [
	{
		title: 'Home',
		url: '/',
	},
	{
		title: 'What we do',
		url: '/what-we-do',
	},
	{
		title: 'Values',
		url: '/values',
	},
	{
		title: 'Team',
		url: '/team',
	},
	{
		title: 'Contact',
		url: '/contact',
	},
];
