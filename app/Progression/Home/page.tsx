import NavigationBar from '@/app/components/navigationBar';
import StatCard from '@/app/components/statCard';

export default function Page() {

    return (

        <main className="bg-[#30302E] flex flex-col h-screen">

            <span className="absolute hidden sm:block top-4 right-4 font-(family-name:--font-nabla) px-4 text-2xl">
                BeeSwarm.LIVE
            </span>
            {/*Top panel*/}
            <div className="h-1/3 bg-[#474746] w-screen justify-center flex flex-col">
                <NavigationBar />

                {/* Player stats Make more interactive */}
                <div className="grid grid-cols-3 gap-3 pt-5 w-full px-4 sm:max-w-md ">
                    <StatCard label="Stage" value="Early-Game" />
                    <StatCard label="Next Gear" value="Shovel" />
                    <StatCard label="Pollen Per Click" value="318" />
                </div>
                <div className="p-3">
                    <StatCard label="Ranking" value="99/100 in Early-Game" />
                </div>

            </div>

            {/* Buttons - wrap on tiny screens */}
            <div className="flex flex-wrap gap-4 justify-center mt-8 px-4">
                <button className="btn btn-ghost bg-amber-600 text-base sm:text-xl font-bold tracking-tight btn-lg rounded-full px-6 sm:px-8 text-yellow-50 hover:scale-110 hover:bg-amber-700 transition-transform duration-400 active:scale-95">
                    Planter Calander
                </button>
                <button className="btn btn-ghost bg-amber-600 text-base sm:text-xl font-bold tracking-tight btn-lg rounded-full px-6 sm:px-8 text-yellow-50 hover:scale-110 hover:bg-amber-700 transition-transform duration-400 active:scale-95">
                    Update Gears
                </button>
                <button className="btn btn-ghost bg-amber-600 text-base sm:text-xl font-bold tracking-tight btn-lg rounded-full px-6 sm:px-8 text-yellow-50 hover:scale-110 hover:bg-amber-700 transition-transform duration-400 active:scale-95">
                    Amulets
                </button>

            </div>

        </main>

    );
}