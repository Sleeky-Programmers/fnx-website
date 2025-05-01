import Link from 'next/link';

export function GetStarted() {
	return (
		<Link
			href={'/get-started'}
			className={
				'text-white bg-[#9F836D] md:w-[200px] w-1/3 h-10 flex items-center justify-center font-bold text-2xl hover:scale-105 transition-all duration-500 rounded-lg'
			}>
			Get in Touch
		</Link>
	);
}
