"use client";

import { useEffect, useState } from 'react';
import NavigationBar from '@/app/components/navigationBar';
import StatCard from '@/app/components/statCard';
import HomeButton from '@/app/components/homeButton';
import Link from 'next/link';
import Icon from '@/app/components/icon';
import { getCurrentGoal } from '@/lib/progressionSystem/goalSystem';
import type { Goal } from '@/lib/progressionSystem';

export default function Page() {
    const [currentGoal, setCurrentGoal] = useState<Goal | null>(null);

    useEffect(() => {
        getCurrentGoal(1).then(setCurrentGoal).catch(() => setCurrentGoal(null));
    }, []);

    return (
        <main className="bg-[#30302E] flex flex-col h-screen">
            <HomeButton/>
            <div className="h-1/3 bg-[#494941] w-screen justify-center flex flex-col">
                <NavigationBar />
                <div className="grid grid-cols-3 gap-3 pt-5 w-full px-4 sm:max-w-md ">
                    <StatCard label="Stage" value="Early-Game" />
                    <StatCard label="Next Gear" value={currentGoal?.description ?? "Loading..."} />
                    <StatCard label="Pollen Per Click" value="318" />
                </div>
                <div className="p-3">
                    <StatCard label="Ranking" value="99/100 in Early-Game" />
                </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-8 px-4">
                <button className="btn btn-ghost bg-amber-600 text-base sm:text-xl font-bold tracking-tight btn-lg rounded-full px-6 sm:px-8 text-yellow-50 hover:scale-110 hover:bg-amber-700 transition-transform duration-400 active:scale-95">
                    Planter Calander
                </button>
                <Link href="/Progression/Gears">
                <button className="btn btn-ghost bg-amber-600 text-base sm:text-xl font-bold tracking-tight btn-lg rounded-full px-6 sm:px-8 text-yellow-50 hover:scale-110 hover:bg-amber-700 transition-transform duration-400 active:scale-95">
                    Update Gears <Icon image="/gears/tools/scooper.webp" properties="h-9 w-9"/>
                </button>
                </Link>
                <button className="btn btn-ghost bg-amber-600 text-base sm:text-xl font-bold tracking-tight btn-lg rounded-full px-6 sm:px-8 text-yellow-50 hover:scale-110 hover:bg-amber-700 transition-transform duration-400 active:scale-95">
                    Amulets
                </button>
            </div>
        </main>
    );
}