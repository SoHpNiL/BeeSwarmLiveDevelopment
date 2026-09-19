"use client";

import NavigationBar from '@/app/components/navigationBar';
import HomeButton from '@/app/components/homeButton';
import DropDown from '@/app/components/dropDown';
import Icon from '@/app/components/icon';
import SaveGearButton from '@/app/components/saveGearButton';
import Sticker from '@/app/components/sticker';
import { getGearIds } from '@/lib/getGearIds';
import { useState, useEffect } from 'react';
import { tools, bags, belts, boots, guards, masks, findGear, EquippedGear, GearCategory } from '@/lib/gear/';
import { pollenPerSecond } from '@/lib/pollenPerSecond';
import { roundNumbers } from '@/lib/roundNumbers';

/* 
Function: This page allows users to select and save gears to the database and replans what
          gear they aim to achieve 
*/

const gearSlots: { label: string; key: GearCategory }[] = [
    { label: "Tool", key: "tool" },
    { label: "Bag", key: "bag" },
    { label: "Belt", key: "belt" },
    { label: "Boot", key: "boot" },
    { label: "Mask", key: "mask" },
    { label: "Guard", key: "guard" },
];

export default function Page() {
    // Utilize ID numbers to set gears states

    // Stops page from displaying default gears and waits til players gears are fetched (or not).
    const [loading, setLoading] = useState<boolean>(true);

    const [gear, setGear] = useState<EquippedGear>({
        tool: 1,
        bag: 1,
        belt: 0,
        boot: 0,
        guard: 0,
        mask: 0
    });

    // Effect is only executed once due to empty [] dependency, hence only retrieves data once upon rendering page.
    // Afterwards, the loading is set to false so users can view their data.
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getGearIds();
                setGear(data);
                setLoading(false);
            } catch (e) {
                console.error("Data couldn't be fetched", e);
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const chosenGear = {
        tool: findGear(gear.tool, tools),
        bag: findGear(gear.bag, bags),
        boot: findGear(gear.boot, boots),
        belt: findGear(gear.belt, belts),
        guard: findGear(gear.guard, guards),
        mask: findGear(gear.mask, masks),
    };

    // chooseTool sets the ID for tool useState.
    const chooseGear = (x: number, gear: GearCategory) => {
        console.log("User chose a Gear...")
        setGear(prev => ({ ...prev, [gear]: x }));
    }

    const floatingStickers = (
        <>
            <Sticker image="/gears/bags/Canister.webp" properties="hidden lg:block top-24 left-[4%] -rotate-6 opacity-60 animate-[beeMovement_5s_ease-in-out_infinite]" />
            <Sticker image="/gears/tools/bubble_wand.webp" properties="hidden lg:block bottom-32 left-[8%] rotate-3 opacity-60 animate-[beeMovement2_6s_ease-in-out_infinite]" />
            <Sticker image="/gears/bags/Mega-Jug.webp" properties="hidden lg:block top-1/2 right-[5%] -translate-y-1/2 rotate-6 opacity-60 animate-[beeMovement_4s_ease-in-out_infinite]" />
            <Sticker image="/gears/tools/gummyballer.webp" properties="hidden lg:block bottom-20 right-[10%] -rotate-3 opacity-50 animate-[beeMovement2_7s_ease-in-out_infinite]" />
            <Sticker image="/gears/tools/pulsar.webp" properties="hidden xl:block top-16 right-[18%] rotate-12 opacity-40 animate-[beeMovement_6s_ease-in-out_infinite]" />
        </>
    );

    // Data loaded
    if (!loading) {
        return (
            <main className="relative min-h-screen bg-[#30302E] flex flex-col px-4 py-10 pb-32 overflow-x-hidden">
                <NavigationBar />
                <HomeButton />

                {floatingStickers}

                <div className="relative z-10 w-full max-w-5xl mx-auto mt-8 flex flex-col lg:flex-row gap-6">

                    {/* Gear slots */}
                    <div className="bg-gray-400/20 backdrop-blur-md rounded-2xl shadow p-6 flex-1">
                        <h2 className="text-white text-xl sm:text-2xl font-bold mb-5">Your Gear</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {gearSlots.map(({ label, key }) => (
                                <div key={key} className="flex items-center justify-between gap-3 bg-black/20 rounded-xl px-4 py-3">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <Icon image={chosenGear[key].image} x={48} y={48} properties="w-10 h-10 shrink-0" />
                                        <div className="min-w-0">
                                            <div className="text-gray-300 text-xs sm:text-sm">{label}</div>
                                            <div className="text-white font-bold text-sm sm:text-base truncate">{chosenGear[key].name}</div>
                                        </div>
                                    </div>
                                    <DropDown gear={key} chooseGear={chooseGear} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats  Area */}
                    <div className="bg-gray-400/20 backdrop-blur-md rounded-2xl shadow p-6 w-full lg:w-80 flex flex-col gap-6">
                        <div>
                            <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">Pollen per Minute</h2>
                            <div className="flex flex-col gap-1">
                                <span className="text-amber-400 text-sm sm:text-base">White Fields: {roundNumbers((pollenPerSecond(gear).whitePollen) * 60)}</span>
                                <span className="text-amber-400 text-sm sm:text-base">Red Fields: {roundNumbers((pollenPerSecond(gear).redPollen) * 60)}</span>
                                <span className="text-amber-400 text-sm sm:text-base">Blue Fields: {roundNumbers((pollenPerSecond(gear).bluePollen) * 60)}</span>
                            </div>
                            <p className="text-gray-300 text-xs sm:text-sm mt-4">
                                This is the minimum honey you should achieve with gear alone, you should exceed this.
                            </p>
                        </div>

                        <SaveGearButton gears={gear} />
                    </div>
                </div>

            </main>
        );
    }

    // Data not loaded
    if (loading) {
        return (
            <main className="relative min-h-screen bg-[#30302E] flex flex-col px-4 py-10 overflow-x-hidden">
                <NavigationBar />
                <HomeButton />

                {floatingStickers}

                <div className="relative z-10 w-full max-w-5xl mx-auto mt-8 flex flex-col lg:flex-row gap-6">

                    <div className="bg-gray-400/20 backdrop-blur-md rounded-2xl shadow p-6 flex-1 flex flex-col items-center justify-center gap-4 min-h-64">
                        <h1 className="text-white text-lg sm:text-2xl font-bold">Loading Your Gears..</h1>
                        <span className="loading loading-spinner loading-xl" />
                    </div>

                    <div className="bg-gray-400/20 backdrop-blur-md rounded-2xl shadow p-6 w-full lg:w-80 flex flex-col items-center justify-center gap-4 min-h-64">
                        <span className="loading loading-spinner loading-xl" />
                        <SaveGearButton gears={gear} />
                    </div>
                </div>

            </main>
        );
    }
};