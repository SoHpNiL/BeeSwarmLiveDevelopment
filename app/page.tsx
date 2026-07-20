import { getHomepageStats } from "../lib/homepageStats"
import DiscordButton from './components/discordButton';
import GoogleButton from './components/googleButton';
import NavigationBar from '@/app/components/navigationBar';
import Link from 'next/link';
import Image from "next/image";
import Sticker from './components/sticker';

export default async function Home() {
  const stats = await getHomepageStats()

    return (
    <main className="flex flex-col bg-primary">

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center p-4">

        <Sticker image="/basic_bee.webp" properties="top-35 left-5 sm:top-20 sm:left-8 rotate-[-8deg]" />
        <Sticker image="/bumble_bee.webp" properties="bottom-20 left-20 sm:bottom-15 sm:left-40 -rotate-1" />
        <Sticker image="/rascal_bee.webp" properties=" right-2 sm:bottom-70 sm:right-40 -rotate-1" />
        <Sticker image="/looker_bee.webp" properties=" hidden sm:block right-2 sm:top-15 sm:right-80" />

        <NavigationBar />

        {/* Title */}
        <span className="
          text-[3.3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] 2xl:text-[13rem]
          absolute top-16 sm:top-18 md:top-20
          hover:scale-95 transition-transform duration-700
          font-(family-name:--font-nabla)
          text-center w-full px-4
        ">
          BeeSwarm.LIVE
        </span>

        {/* Gap */}
        <div className="h-32 sm:h-44 md:h-52 lg:h-60" />

        {/* Subtitle */}
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-200 font-bold leading-tight text-center px-4">
          Track Your Progress with The
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-amber-600 to-yellow-300 bg-clip-text text-transparent font-bold italic mt-1 mb-8 leading-tight text-center px-4">
          Ultimate Tool
        </span>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8 px-4">
          <Link
            href="/Progression/Home"
            className="btn btn-ghost inline-flex items-center gap-3 text-xl font-bold tracking-tight bg-amber-600 sm:text-xl btn-lg rounded-full px-5 py-3 sm:px-8 text-yellow-50 hover:bg-amber-700 hover:outline-amber-700"
          >
            <div className="antialiased relative w-9 h-9 transition transform-gpu ">
              <Image
                src="/sprout.webp"
                alt=""
                fill
                sizes="42px"
                priority
                className=""
              />
            </div>
            <span>Progression</span>
          </Link>
          <DiscordButton />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-xs sm:max-w-2xl md:max-w-4xl 2xl:max-w-6xl px-4">
          {stats.map((stat, i) => (
            <div key={i} className="stats shadow  bg-gray-400/20 backdrop-blur-md rounded-2xl">
              <div className="stat">
                <div className="stat-figure text-2xl">{stat.icon}</div>
                <div className="stat-title text-gray-100 font-bold">{stat.label}</div>
                <div className="stat-value text-gray-200 text-2xl sm:text-3xl">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Login */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-10 z-2">
          <GoogleButton />
        </div>

      </section>

      {/* GUIDE — a normal sibling section, flows below the hero, no centering fight */}
      <section className="px-4 py-16 max-w-2xl mx-auto text-white">
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
        <p className="text-gray-300">
          Your startup guide content here...
        </p>
      </section>

    </main>
  );
}