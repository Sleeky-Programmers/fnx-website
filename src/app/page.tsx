import aboutUsImage from '@/assets/home-about-us-image.png';
import { HomePageCard } from '@/features/home-page/components/cards';
import { HeroSection } from '@/features/home-page/components/sections/hero-section';

export default function Home() {
	return (
		<main className="w-full flex flex-col gap-6">
			<HeroSection />

			<section className="w-full mt-10 flex flex-col items-center">
				<h2 className="font-bold text-5xl flex flex-col gap-2 items-center justify-center">
					<span className="text-[#161C2D]">About Us</span>
					<span className="w-2/4 h-2 rounded-xl mx-auto bg-[#A88873]" />
				</h2>
			</section>

			<HomePageCard
				imageSrc={aboutUsImage}
				imageTitle="About Us Image">
				<div className="w-full h-full flex flex-col items-center justify-center gap-10 px-5">
					<h3 className="font-bold text-3xl">Driving Growth Through Innovation and Expertise</h3>
					<p className="font-medium text-xl">
						Fnx is a global leader in software development, product design, and innovation strategy. Our passionate team delivers tailored solutions that drive business
						growth and success.
					</p>
				</div>
			</HomePageCard>

			<section className=""></section>
		</main>
	);
}
