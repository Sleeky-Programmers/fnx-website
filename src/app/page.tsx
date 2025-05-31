

import { GetStartedSection } from '@/components/buttons/cta-section';
import { HeroSection } from '@/features/home-page/hero-section';
import { LogoAnimationSection } from '@/features/home-page/logo-animation';
import { WhoWeAreSection } from '@/features/home-page/who-we-are';
import { WhyChooseSection } from '@/features/home-page/why-choose';


export default function Home() {
	return (
		<main className="w-full flex flex-col gap-6">
			<HeroSection />
			<WhoWeAreSection />
			<WhyChooseSection />
			<LogoAnimationSection />
			< GetStartedSection />
		</main>
	);
}
