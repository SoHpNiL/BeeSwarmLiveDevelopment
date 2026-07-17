import Image from 'next/image';
import Link from 'next/link';


export default function discordButton() {
  return (
    <Link href="/Servers/">
    <button className="cursor-pointer flex items-center gap-3 px-5 py-3 bg-[#5865F2] duration-500 transition-transform hover:bg-[#4752C4] text-white rounded-full">
      {/* Discord Logo */}
      <div className="antialiased relative w-7 h-7 shrink-0 transition transform-gpu duration-500">
        <Image
          src="/discord-icon-svgrepo-com.svg"
          alt="Discord logo"
          fill
          priority
          className="object-contain invert brightness-0" // makes the logo white
        />
      </div>

      {/* Button Text */}
      <span className="text-xl font-bold tracking-tight">
        Find a server
      </span>
    </button>
    </Link>
  );
}