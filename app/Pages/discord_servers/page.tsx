import NavigationBar from '@/app/components/navigationBar';
import Image from 'next/image';


export default function Page() {
  //TODO: add servers page functions + UI
  return (
    <main className='h-screen bg-[#36393e]'>
      <NavigationBar />
      {/*Header*/}
      <div className='bg-[#5865f2c8] p-13'>
      </div>
      {/*Title*/}
      <div className='tracking-tight flex items-center p-4 font-bold text-3xl absolute left-30 top-4 text-[#ffffff] bg-[#5865F2] rounded-full shadow-md shadow-[#3d4045] justify-center'>
        <div className="mr-3 relative w-7.5 h-7.5 shrink-0 transition transform-gpu duration-300">
          <Image
            src="/discord-icon-svgrepo-com.svg"
            alt="Discord logo"
            fill
            priority
            className="object-contain invert brightness-0"
          />
        </div> Discord Servers </div>

        {/*List*/}
        <div className='bg-[#424549] h-210 w-350 rounded-tl-4xl absolute right-0 bottom-0'>
        </div>

        {/*Search*/}
         <div className='bg-[#424549] h-210 w-65 rounded-t-4xl absolute left-5 bottom-0'>
        </div>



    </main>
  );
} 