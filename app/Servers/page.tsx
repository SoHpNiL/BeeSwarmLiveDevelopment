import NavigationBar from '@/app/components/navigationBar';
import Image from 'next/image';
import HomeButton from '@/app/components/homeButton';


export default function Page() {
  return (
    <main className='h-screen bg-[#36393e] flex flex-col overflow-hidden'>
      <HomeButton/>
      <NavigationBar />

      {/* Header */}
      <div className='bg-[#5865f2c8] px-4 py-5 sm:py-8 md:py-10 flex items-center justify-between'>
        {/*Title*/}
        <div className='pl-20 flex items-center font-bold text-xl md:text-3xl text-[#ffffff]'>
          <div className="mr-2 sm:mr-3 relative w-6 h-6 sm:w-7 sm:h-7 shrink-0">
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
      <div className='flex flex-2 gap-5 sm:gap-4   p-2 sm:p-4'>

        {/* Search sidebar */}
        <div className='bg-[#424549] rounded-2xl w-40 sm:w-1 md:w-64 lg:w-72 shrink-0'>
        </div>

        {/* Main list */}
        <div className='bg-[#424549] rounded-2xl flex-1'>
        </div>

      </div>
    </main>
  );
}