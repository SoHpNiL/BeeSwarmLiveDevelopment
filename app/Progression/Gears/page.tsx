"use client";

import NavigationBar from '@/app/components/navigationBar';
import Image from 'next/image';
import HomeButton from '@/app/components/homeButton';
import { tools } from '@/lib/gear/tools';
import { bags } from '@/lib/gear/bags';
import { belts } from '@/lib/gear/belts';
import { boots } from '@/lib/gear/boots';
import { guards } from '@/lib/gear/guards';
import { masks } from '@/lib/gear/masks';
import { EquippedGear } from '@/lib/equippedGear';
import { useState } from 'react';
import { GearType } from '@/lib/gear/gearType';
import { findGear } from '@/lib/gear/gearType';


export default function Page() {

    // Utilize ID numbers to set gears states
    const [gear, setGear] = useState<EquippedGear>({
        tool: 1,
        bag: 1,
        belt: 0,
        boot: 0,
        guard: 0,
        mask: 0
    });

    // The variables of each Gear Object
    const chosenTool = findGear(gear.tool, tools);
    const chosenBag = findGear(gear.bag, bags);
    const chosenBoot = findGear(gear.boot, boots);
    const chosenBelt = findGear(gear.belt, belts);
    const chosenGuard = findGear(gear.guard, guards);
    const chosenMasks = findGear(gear.mask, masks);


    // chooseTool sets the ID for tool useState.
    const chooseGear = (x: number, gear: string) => {
        console.log("User is choosing a Gear...")
        setGear(prev => ({ ...prev, [gear]: x }));
    }



    return (
        <main className="min-h-screen bg-[#30302E] flex flex-col items-center px-4 py-10">
            <NavigationBar />
            <HomeButton />

            <div className="mt-16 flex flex-col items-center gap-4">
                <h1 className="text-2xl sm:text-4xl font-bold text-white">
                    Current Tool: <span className="text-amber-400">{chosenTool.name}</span>
                </h1>

                <select className="select">
                    <option disabled selected>Pick a Tool</option>
                    {tools.map((item) => 
                        <option className="text-black" onClick={() => chooseGear(item.id, "tool")}>
                            {item.name}
                        </option>
                    )}
                </select>
                </div>
        </main>
    );
}