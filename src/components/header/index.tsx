import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.png';

import { HeaderNavClient } from './nav-client';

export function Header() {
	return (
		<header className="flex justify-between items-center bg-transparent absolute top-0 inset-x-0 w-[90%] md:w-[80%] mx-auto pt-6 z-50">
			<Link
				data-aos="fade-right"
				href="/"
				className="w-16 md:w-24">
				<Image
					src={logo}
					alt="Logo"
					className=""
				/>
			</Link>

			<HeaderNavClient>
				<Image
					src={logo}
					alt="Logo"
					className="w-16 md:w-24"
				/>
			</HeaderNavClient>
		</header>
	);
}
