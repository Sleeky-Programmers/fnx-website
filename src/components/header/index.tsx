import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/log.svg';

export function Header() {
	return (
		<header className="flex justify-between items-center p-8 py-6 lg:py-10 lg:p-16 bg-transparent absolute top-0 w-full z-[100]">
			<Link
				data-aos="fade-right"
				href="/"
				className="w-16">
				<Image
					src={logo}
					alt="Logo"
					className=""
				/>
			</Link>
		</header>
	);
}
