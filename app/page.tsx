
import { getHomepageStats } from "./components/homepageStats"
import DiscordButton from './components/discordButton';
import GoogleButton from './components/googleButton';
import NavigationBar from '@/app/components/navigationBar';



export default async function Home() {
  const stats = await getHomepageStats()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      {/* Title */}
      <h1 className="text-2xl font-medium text tracking-tight mb-1">
        BeeSwarm<span className="text-amber-600">.Live</span>
      </h1>
      <NavigationBar></NavigationBar>
      <span className="text-5xl text-amber-900 font-bold mb-0 leading-0.8">
        Bee Swarm Simulator's
      </span>  <span className="text-5xl bg-linear-to-r from-amber-600 to-yellow-300 bg-clip-text text-transparent font-bold italic mb-15 leading-0.9">
        Ultimate Tool {" "}
      </span>

      <div className="flex gap-4 justify-center">
        <DiscordButton/>
        <button className="btn btn-ghost bg-amber-700 text-xl font-bold tracking-tight btn-lg rounded-full px-8 text-yellow-50 hover:scale-110 hover:bg-amber-700 transition-transform duration-400">
          Progression
        </button>
      </div>

      {/* Stats Grid from homepageStats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
        {stats.map((stat, i) => (
          <div key={i} className="stats shadow border-2 border-amber-600/20 bg-white/60 backdrop-blur-md rounded-2xl">
            <div className="stat">
              <div className="stat-figure text-amber-600 text-2xl">{stat.icon}</div>
              <div className="stat-title text-amber-900/60 font-bold">{stat.label}</div>
              <div className="stat-value text-amber-700">{stat.value}</div>
            </div>
          </div>
        ))}
        <div className="absolute top-5 right-10 z-50">
        <GoogleButton/>
        </div>
      </div>
    </main>
  );
}