import Image from 'next/image';

import heroImage from '@/assets/home-hero-image.png';
import { GetStarted } from '@/components/getStarted';

export function HeroSection() {
	return (
		<section className="w-full h-[100dvh] flex flex-col items-center justify-center relative">
			<div className="absolute w-full h-[100dvh] z-10 top-0 left-0">
				<Image
					src={heroImage}
					alt=" "
					className="h-full object-cover  bg-fnx-darkBlue"
				/>
			</div>

			<div className="z-20 flex flex-col gap-6 items-center justify-center text-white">
				<p className="font-bold text-center text-[#D5D5D5]">AIFMD and Management Company Services</p>
				<div className="flex flex-col gap-2 items-center justify-center">
					<h1 className="font-bold text-5xl text-center">Innovate. Transform. Thrive.</h1>
					<p className="font-medium text-2xl w-[65%] text-center">Empowering businesses with cutting-edge digital solutions to stay ahead in a fast-changing world</p>
				</div>
				<GetStarted />
			</div>
		</section>
	);
}
