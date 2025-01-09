import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface HomePageCardProps {
	children: ReactNode;
	imageSrc: StaticImageData;
	imageTitle: string;
	imageStyles?: string;
	reverse?: true;
	gridSpacing?: string;
	sectionPadding?: string;
}

export function HomePageCard({ children, reverse, imageSrc, imageTitle, imageStyles, gridSpacing, sectionPadding }: HomePageCardProps) {
	return (
		<section className={`w-full flex items-center justify-center py-8 ${sectionPadding ? sectionPadding : 'px-5 lg:px-11'}`}>
			<section className={`w-[95%] h-fit grid grid-cols-1 md:grid-cols-10 ${gridSpacing ? gridSpacing : 'gap-8'} relative`}>
				<div className={`md:col-span-6 row-start-2 ${reverse ? 'md:col-start-5 md:row-start-1' : 'md:col-start-1 md:row-auto'}`}>{children}</div>
				<div className={`md:col-span-4 row-start-1 ${reverse ? 'md:col-start-1 md:row-start-1' : 'md:col-start-7 md:row-auto'}`}>
					<Image
						src={imageSrc}
						alt={imageTitle}
						className={`rounded-xl w-full object-cover ${imageStyles}`}
					/>
				</div>
			</section>
		</section>
	);
}
