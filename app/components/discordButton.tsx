import Image from 'next/image';
import Link from 'next/link';


export default function discordButton() {
  return (
    <Link href="/Servers/">
      <button className="cursor-pointer flex items-center gap-3 px-5 py-3 bg-[#5865F2] duration-500 transition-transform hover:bg-[#4752C4] text-white rounded-full">
        {/* Discord Logo */}
        <div className="antialiased relative w-7 h-7 shrink-0 transition transform-gpu duration-500 overflow-visible">
          <Image
            src="/Hivesticker_gamer_chat_icon.webp"
            alt="Discord logo"
            fill
            priority
            className="scale-150"
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