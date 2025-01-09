import { CiMedal } from 'react-icons/ci';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { PiHandshakeLight } from 'react-icons/pi';

import VideoImage from '@/assets/video-image.png';
import { HomePageCard } from '@/features/home-page/components/cards';

export function WhyChooseUsSection() {
	const whyChooseUs = [
		{
			title: 'A Legacy of Excellence:',
			icon: CiMedal,
			description:
				'With over thirty years of experience working with hundreds of investment managers, we’ve refined our approach to deliver meaningful, client-focused solutions.',
		},
		{
			title: 'Comprehensive Insight:',
			icon: HiOutlineLightBulb,
			description: 'Our experience spans both the buy side and the sell side, giving us a unique perspective to understand and address the diverse needs of our clients.',
		},
		{
			title: 'Strong Relationships:',
			icon: PiHandshakeLight,
			description: 'We prioritize trust and mutual respect in every partnership, creating lasting relationships that drive long-term success.',
		},
	];
	return (
		<section className="w-full py-10 md:py-20 bg-gray-200 flex items-center justify-center">
			<section className="w-[90%] md:w-[70%] flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<h2 className="font-bold text-3xl md:text-5xl flex flex-col gap-1 md:gap-2 items-center justify-center">
						<span className="text-[#161C2D]">Why Choose Us?</span>
						<span className="w-[10%] h-1 md:h-2 rounded-xl mx-auto bg-[#A88873]" />
					</h2>

					<p className="font-bold text-xl text-center">Decades of Expertise Backed by Trust and Innovation</p>
				</div>

				<HomePageCard
					reverse
					imageSrc={VideoImage}
					imageTitle="Video Image"
					gridSpacing={'gap-6'}
					imageStyles="h-full"
					sectionPadding="px-1 lg:px-11">
					<ul className="w-full h-full flex flex-col items-center justify-center gap-5 md:gap-3">
						{whyChooseUs.map((item) => (
							<li
								key={item.title}
								className="grid grid-cols-12 gap-2">
								<div className="col-span-1 flex justify-center">
									<span className="flex items-center justify-center size-7 rounded-full text-xl bg-fnx-icons-brown/15 text-[#A88873]">{<item.icon />}</span>
								</div>

								<div className="col-span-11 flex flex-col gap-2 text-[#161C2D]">
									<h4 className="font-bold text-xl md:text-lg">{item.title}</h4>
									<p className="font-normal text-lg md:text-base text-justify md:text-left">{item.description}</p>
								</div>
							</li>
						))}
					</ul>
				</HomePageCard>
			</section>
		</section>
	);
}
