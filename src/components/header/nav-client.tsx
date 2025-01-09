'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { FiMenu } from 'react-icons/fi';

import { NavLinks } from '@/lib/utils';

import { Aside } from '../aside';

interface HeaderNavClientProps {
	children: React.ReactNode;
}

export function HeaderNavClient({ children }: HeaderNavClientProps) {
	const currentPath = usePathname();
	const btnRef = useRef<HTMLButtonElement | null>(null);

	const linkClass = (path: string) => `transition-all duration-500 ease-in-out ${currentPath === path ? 'font-black border-b-2 border-white' : 'font-semibold'}`;

	const triggerButton = (
		<button
			type="button"
			name="mobile navigation menu button"
			ref={btnRef}
			className="h-8 lg:hidden flex items-center justify-center px-2 hover: bg-white hover: text-fnx-navy stext-white rounded-[10px] transition-all duration-500 ease-in-out">
			<FiMenu className="text-xl" />
		</button>
	);

	return (
		<>
			<nav className="hidden lg:flex items-center justify-center gap-10 text-white">
				{NavLinks.map(({ title, url }) => (
					<Link
						key={title}
						href={url}
						className={linkClass(url)}>
						{title}
					</Link>
				))}
			</nav>
			<Aside
				position="right"
				title="Navigation Side Bar"
				triggerButton={triggerButton}>
				<nav className="w-full flex flex-col items-center justify-between gap-6 text-base">
					{children}
					{NavLinks.map(({ title, url }) => (
						<Link
							key={title}
							href={url}
							className={linkClass(url)}>
							{title}
						</Link>
					))}
				</nav>
			</Aside>
		</>
	);
}
