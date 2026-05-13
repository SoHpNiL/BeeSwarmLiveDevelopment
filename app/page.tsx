
import { getHomepageStats } from "./components/homepageStats"

export default async function Home() {
  const stats = await getHomepageStats()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      {/* Title */}
      <h1 className="text-2xl font-medium text tracking-tight mb-1">
        BeeSwarm<span className="text-amber-600">.Live</span>
      </h1>

      <span className="text-5xl text-amber-900 font-bold mb-0 leading-0.8">
        Bee Swarm Simulator's
      </span>  <span className="text-5xl bg-linear-to-r from-amber-600 to-yellow-300 bg-clip-text text-transparent font-bold italic mb-15 leading-0.9">
        Ultimate Tool {" "}
      </span>

      <div className="flex gap-4 justify-center">
        <button className="btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:scale-110 transition-transform leading-tight">
          Find a Server
        </button>
        <button className="btn btn-ghost btn-lg rounded-full px-8 text-amber-900 hover:scale-110 hover:bg-amber-200 transition-transform">
          Documentation
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

        {/*Google Authentication Button TODO*/}
        <div className="absolute top-5 right-10 z-50">
          <button className="btn rounded-xl bg-white text-black border-2 border-amber-600 hover:scale-110 transition-transform">
            <svg aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </main>
  );
}