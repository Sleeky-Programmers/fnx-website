import Link from 'next/link';

export function ContactUsButton() {
  return (
    <Link
      href="/contact"
      className="bg-white text-[#9F836D] rounded-2xl w-40 md:w-52 h-12 md:h-14 flex items-center justify-center font-semibold text-base md:text-xl hover:scale-105 transition-all duration-500 ease-in-out"
    >
      Contact Us
    </Link>
  );
}
