import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export function HomePageCard({ children, reverse, imageSrc, imageTitle }: { children: ReactNode; imageSrc: StaticImageData; imageTitle: string; reverse?: true }) {
	return (
		<section className="w-full flex items-center justify-center py-8 px-5 lg:px-11">
			<section className="w-[95%] h-fit grid lg:grid-cols-10 gap-8 relative">
				<div className="col-span-6">{children}</div>
				<div className="col-span-4">
					<Image
						src={imageSrc}
						alt={imageTitle}
						className="rounded-xl"
					/>
				</div>
			</section>
		</section>
	);
}
