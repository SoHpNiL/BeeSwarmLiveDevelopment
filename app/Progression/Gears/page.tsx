"use client";

import NavigationBar from '@/app/components/navigationBar';
import Image from 'next/image';
import HomeButton from '@/app/components/homeButton';
import DropDown from '@/app/components/dropDown';
import Icon from '@/app/components/icon';
import SaveGearButton from '@/app/components/saveGearButton';
import { useState } from 'react';
import { tools, bags, belts, boots, guards, masks, GearType, findGear, EquippedGear, GearCategory } from '@/lib/gear/';



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
    const chosenMask = findGear(gear.mask, masks);


    // chooseTool sets the ID for tool useState.
    const chooseGear = (x: number, gear: GearCategory) => {
        console.log("User chose a Gear...")
        setGear(prev => ({ ...prev, [gear]: x }));
    }


    return (
        <main className="min-h-screen bg-[#30302E] flex flex-col px-4 py-10">
            <NavigationBar />
            <HomeButton />
            {/* DropDown  Area */}
            <div className="flex flex-row justify-between">

                <div className="bg-[#3d3d3d] w-1/3 sm:w-1/4 h-screen mt-0 rounded-2xl">
                    <div className="mt-16 flex flex-col items-center gap-4">
                        <h1 className="text-sm sm:text-3xl font-bold text-white relative inline-block">
                            Current Tool: <Icon image={chosenTool.image} x={48} y={48} properties="w-8 sm:w-14 height:auto inline-block align-middle" />
                        </h1>
                        <DropDown gear={"tool"} chooseGear={chooseGear} />

                        <h1 className="text-sm sm:text-3xl font-bold text-white relative inline-block">
                            Current Bag: <Icon image={chosenBag.image} x={48} y={48} properties="w-8 sm:w-14 h-auto inline-block align-middle" />
                        </h1>
                        <DropDown gear={"bag"} chooseGear={chooseGear} />

                        <h1 className="text-sm sm:text-3xl font-bold text-white relative inline-block">
                            Current Belt:<Icon image={chosenBelt.image} x={48} y={48} properties="w-8 sm:w-14 h-auto inline-block align-middle" />
                        </h1>
                        <DropDown gear={"belt"} chooseGear={chooseGear} />

                        <h1 className="text-sm sm:text-3xl font-bold text-white relative inline-block">
                            Current Boot:<Icon image={chosenBoot.image} x={48} y={48} properties="w-8 sm:w-14 h-auto inline-block align-middle" />
                        </h1>
                        <DropDown gear={"boot"} chooseGear={chooseGear} />
                        <h1 className="text-sm sm:text-3xl font-bold text-white relative inline-block">
                            Current Mask: <Icon image={chosenMask.image} x={48} y={48} properties="w-8 sm:w-14 h-auto inline-block align-middle" />
                        </h1>
                        <DropDown gear={"mask"} chooseGear={chooseGear} />
                        <h1 className="text-sm sm:text-3xl font-bold text-white relative inline-block">
                            Current Guard: <Icon image={chosenGuard.image} x={48} y={48} properties="w-8 sm:w-14 h-auto inline-block align-middle" />
                        </h1>
                        <DropDown gear={"guard"} chooseGear={chooseGear} />
                    </div>
                </div>


                {/* Stats  Area */}
                <div className="bg-[#3d3d3d] w-1/3 sm:w-1/4 h-96 mt-10 rounded-2xl flex flex-col items-center gap-4">
                    <div>
                        <h1 className="text-sm sm:text-3xl font-bold text-white mt-8 inline-block"> Honey per Minute: </h1> <span className="text-sm sm:text-3xl text-amber-400"> yoo</span>
                    </div>

                    <SaveGearButton/>
                </div>
            </div>

        </main>
    );
}