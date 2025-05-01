import Link from 'next/link';

export function ContactUsButton() {
	return (
		<Link
			href={'/contact-page'}
			className={
				'bg-white text-[#9F836D] rounded-2xl md:w-[200px] w-1/2 h-14 flex items-center justify-center font-bold text-xl hover:scale-105 transition-all duration-500 ease-in-out'
			}>
			Contact Us
		</Link>
	);
}
