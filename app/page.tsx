import { getHomepageStats } from "./components/homepageStats"
import DiscordButton from './components/discordButton';
import GoogleButton from './components/googleButton';
import NavigationBar from '@/app/components/navigationBar';
import Footer from '@/app/components/footer';
import Link from 'next/link';

export default async function Home() {
  const stats = await getHomepageStats()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      
      <NavigationBar/>

      {/* Title - scales from mobile → 4K */}
      <span className="
        text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] 2xl:text-[13rem]
        absolute top-16 sm:top-18 md:top-20
        hover:scale-95 transition-transform duration-700
        font-(family-name:--font-nabla)
        text-center w-full px-4
      ">
        BeeSwarm.LIVE
      </span>

      {/* Spacer - grows with title size */}
      <div className="h-32 sm:h-44 md:h-52 lg:h-60" />

      {/* Subtitle */}
      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-900 font-bold leading-tight text-center px-4">
        Bee Swarm Simulator's
      </span>
      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-amber-600 to-yellow-300 bg-clip-text text-transparent font-bold italic mt-1 mb-8 leading-tight text-center px-4">
        Ultimate Tool
      </span>

      {/* Buttons - wrap on tiny screens */}
      <div className="flex flex-wrap gap-4 justify-center mb-8 px-4">
        <DiscordButton/>
        <Link href="/Pages/progression/">
        <button className="btn btn-ghost bg-amber-700 text-base sm:text-xl font-bold tracking-tight btn-lg rounded-full px-6 sm:px-8 text-yellow-50 hover:scale-110 hover:bg-amber-700 transition-transform duration-400 active:scale-95">
          Progression
        </button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-xs sm:max-w-2xl md:max-w-4xl 2xl:max-w-6xl px-4">
        {stats.map((stat, i) => (
          <div key={i} className="stats shadow border-2 border-amber-600/20 bg-white/60 backdrop-blur-md rounded-2xl">
            <div className="stat">
              <div className="stat-figure text-amber-600 text-2xl">{stat.icon}</div>
              <div className="stat-title text-amber-900/60 font-bold">{stat.label}</div>
              <div className="stat-value text-amber-700 text-2xl sm:text-3xl">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Google Button - tucked into corner safely */}
      <div className="absolute top-4 right-4 sm:top-5 sm:right-10 z-2">
        <GoogleButton/>
      </div>

      <Footer/>
    </main>
  );
}