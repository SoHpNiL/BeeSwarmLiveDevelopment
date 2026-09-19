"use client";

import { useEffect, useState } from 'react';
import NavigationBar from '@/app/components/navigationBar';
import HomeButton from '@/app/components/homeButton';
import Link from 'next/link';
import Icon from '@/app/components/icon';
import Sticker from '@/app/components/sticker';
import { getCurrentGoal } from '@/lib/progressionSystem/goalSystem';
import type { Goal } from '@/lib/progressionSystem';


const stats = (currentGoal: Goal | null) => [
    { label: "Stage", value: "Early-Game", icon: "🐝" },
    { label: "Next Goal", value: currentGoal?.description ?? "Loading...", icon: "🎒" },
    { label: "Pollen Per Click", value: "318", icon: "🍯" },
];

export default function Page() {
    const [currentGoal, setCurrentGoal] = useState<Goal | null>(null);

    useEffect(() => {
        getCurrentGoal(1).then(setCurrentGoal).catch(() => setCurrentGoal(null));
    }, []);

    return (
        <main className="bg-[#30302E] flex flex-col min-h-screen">

            {/* Top panel */}
            <div className="relative bg-gradient-to-b from-[#474746] to-[#30302E] w-screen flex flex-col pb-6">
                <Sticker image="/gears/tools/honey_dipper.webp" properties="top-24 left-6 sm:top-28 sm:left-10 -rotate-6 opacity-70" x={70} y={70} />
                <Sticker image="/gears/tools/golden_rake.webp" properties="top-24 right-6 sm:top-28 sm:right-10 rotate-6 opacity-70" x={70} y={70} />

                <NavigationBar />

            <HomeButton />
               

                <span className="
                    text-xl sm:text-9xl
                    font-(family-name:--font-nabla)
                    text-center mt-6
                   
                ">
                    Progression
                </span>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-2xl md:max-w-4xl 2xl:max-w-6xl mx-auto px-4 pt-8">
                    {stats(currentGoal).map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col gap-2 min-w-[160px] sm:min-w-[220px] flex-1 bg-gray-400/20 backdrop-blur-md rounded-2xl shadow p-4 sm:p-6"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-gray-100 font-bold text-sm sm:text-base">{stat.label}</span>
                                <span className="text-xl sm:text-2xl">{stat.icon}</span>
                            </div>
                            <span className="text-gray-200 text-lg sm:text-2xl font-bold">{stat.value}</span>
                        </div>
                    ))}
                </div>

                
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 justify-center mt-8 px-4">
                <button className="btn btn-ghost bg-amber-600 text-base sm:text-xl font-bold tracking-tight btn-lg rounded-full px-6 sm:px-8 text-yellow-50 hover:scale-110 hover:bg-amber-700 transition-transform duration-400 active:scale-95">
                    Planter Calander
                </button>
                <Link href="/Progression/Gears">
                    <button className="btn btn-ghost bg-amber-600 text-base sm:text-xl font-bold tracking-tight btn-lg rounded-full px-6 sm:px-8 text-yellow-50 hover:scale-110 hover:bg-amber-700 transition-transform duration-400 active:scale-95">
                        Update Gears <Icon image="/gears/tools/scooper.webp" properties="h-9 w-9" />
                    </button>
                </Link>
                <button className="btn btn-ghost bg-amber-600 text-base sm:text-xl font-bold tracking-tight btn-lg rounded-full px-6 sm:px-8 text-yellow-50 hover:scale-110 hover:bg-amber-700 transition-transform duration-400 active:scale-95">
                    Amulets
                </button>
            </div>

            {/* Bottom space */}
            <div className="relative flex-1">
                <Sticker image="/gears/tools/vacuum.webp" properties="bottom-10 left-10 sm:bottom-16 sm:left-24 rotate-3 opacity-60" x={90} y={90} />
                <Sticker image="/gears/tools/dark_scythe.webp" properties="bottom-10 right-10 sm:bottom-16 sm:right-24 -rotate-3 opacity-60" x={90} y={90} />
            </div>
        </main>
    );
}