import NavigationBar from '@/app/components/navigationBar';
import Image from 'next/image';

export default function Page() {
  return (
    <main className='h-screen bg-[#36393e] flex flex-col overflow-hidden'>
      <NavigationBar />

      {/* Header */}
      <div className='bg-[#5865f2c8] px-4 py-7 sm:py-8 md:py-10 flex items-center'>
{/*Title*/}
<div className='tracking-tight scale-60 flex items-center p-4 sm:scale-80 lg:scale-80 font-bold text-xl sm:text-2xl md:text-3xl absolute left-16 sm:left-20 md:left-24 top-3 sm:top-4 text-[#ffffff] bg-[#5865F2] rounded-full shadow-md shadow-[#3d4045] justify-center'>  <div className="mr-2 sm:mr-3 relative w-6 h-6 sm:w-7 sm:h-7 shrink-0">
            <Image
              src="/discord-icon-svgrepo-com.svg"
              alt="Discord logo"
              fill
              priority
              className="object-contain invert brightness-0"
            />
          </div>
          Discord Servers
        </div>
      </div>

      {/* Body - Search + List side by side, fills remaining height */}
      <div className='flex flex-1 gap-0 sm:gap-4 p-2 sm:p-4 overflow-hidden'>

        {/* Search sidebar */}
        <div className='bg-[#424549] rounded-t-3xl w-40 sm:w-1 md:w-64 lg:w-72 shrink-0'>
        </div>

        {/* Main list */}
        <div className='bg-[#424549] rounded-tl-3xl flex-1'>
        </div>

      </div>
    </main>
  );
}