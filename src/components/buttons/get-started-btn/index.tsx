import Link from 'next/link';

export function GetStarted() {
	return (
		<Link
			href="/contact"
			className="bg-[#9F836D] text-white font-semibold rounded-xl px-6 py-2
				text-base sm:text-lg md:text-xl lg:text-2xl 
				w-fit md:w-[200px] 
				flex items-center justify-center 
				hover:scale-105 transition-all duration-500">
			Get in Touch
		</Link>
	);
}
