import Link from 'next/link';

export function GetStarted() {
	return (
		<Link
			href={'/get-started'}
			className={
				'text-white bg-[#9F836D] rounded-2xl md:w-[200px] w-1/2 h-14 flex items-center justify-center font-bold text-xl hover:scale-105 transition-all duration-500 ease-in-out'
			}>
			Get Started
		</Link>
	);
}
