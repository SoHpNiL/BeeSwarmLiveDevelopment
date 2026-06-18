import NavigationBar from '@/app/components/navigationBar';

export default function Page() {

    return (

        <main className="bg-amber-500 flex flex-col h-screen">

            {/*side panel*/}
            <div className="h-1/3 w-screen bg-amber-700 border-b-4 border-b-amber-600 flex flex-col">
                <NavigationBar />

                {/* Player stat metrics here*/}


            </div>

            {/* Buttons - wrap on tiny screens */}
            <div className="flex flex-wrap gap-4 justify-center mt-8 px-4">
                <button className="btn btn-ghost bg-amber-700 text-base sm:text-xl font-bold tracking-tight btn-lg rounded-full px-6 sm:px-8 text-yellow-50 hover:scale-110 hover:bg-amber-700 transition-transform duration-400 active:scale-95">
                    Planter Calander
                </button>
                <button className="btn btn-ghost bg-amber-700 text-base sm:text-xl font-bold tracking-tight btn-lg rounded-full px-6 sm:px-8 text-yellow-50 hover:scale-110 hover:bg-amber-700 transition-transform duration-400 active:scale-95">
                    Update Gears
                </button>
                <button className="btn btn-ghost bg-amber-700 text-base sm:text-xl font-bold tracking-tight btn-lg rounded-full px-6 sm:px-8 text-yellow-50 hover:scale-110 hover:bg-amber-700 transition-transform duration-400 active:scale-95">
                    Amulets
                </button>

            </div>

        </main>

    );
}