import { HeroSection } from '@/features/home-page/components/sections/hero-section';

export default function Home() {
	return (
		<main className="w-full flex flex-col gap-6">
			<HeroSection />

			<section className="w-full h-[300px] mt-10 flex flex-col items-center">
				<h2 className="font-bold text-5xl flex flex-col gap-2 items-center justify-center">
					<span className="text-[#161C2D]">About Us</span>
					<span className="w-2/4 h-2 rounded-xl mx-auto bg-[#A88873]" />
				</h2>
			</section>
		</main>
	);
}
