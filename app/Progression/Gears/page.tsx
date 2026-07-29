"use client";

import NavigationBar from '@/app/components/navigationBar';
import HomeButton from '@/app/components/homeButton';
import DropDown from '@/app/components/dropDown';
import Icon from '@/app/components/icon';
import SaveGearButton from '@/app/components/saveGearButton';
import { getGearIds } from '@/lib/getGearIds';
import { useState, useEffect } from 'react';
import { tools, bags, belts, boots, guards, masks, findGear, EquippedGear, GearCategory } from '@/lib/gear/';
import { pollenPerSecond } from '@/lib/pollenPerSecond';
import { roundNumbers } from '@/lib/roundNumbers';

/* 
Function: This page allows users to select and save gears to the database and replans what
          gear they aim to achieve 
*/


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



    // Data loaded
    if (!loading) {
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
                            <h1 className="text-sm sm:text-xl font-bold text-white mt-8"> Pollen per Minute </h1>
                            <h1 className="text-sm sm:text-xl text-amber-400"> White Fields: {roundNumbers((pollenPerSecond(gear).whitePollen) * 60)} </h1>
                            <h1 className="text-sm sm:text-xl text-amber-400"> Red Fields: {roundNumbers((pollenPerSecond(gear).redPollen) * 60)} </h1>
                            <h1 className="text-sm sm:text-xl text-amber-400"> Blue Fields: {roundNumbers((pollenPerSecond(gear).bluePollen) * 60)} </h1>
                            <h1 className="text-sm sm:text-lg text-white"> Note: This is the minimum honey you should achieve with gear alone, you should exceed this. </h1>



                        </div>

                        <SaveGearButton gears={{
                            tool: gear.tool,
                            bag: gear.bag,
                            belt: gear.belt,
                            boot: gear.boot,
                            guard: gear.guard,
                            mask: gear.mask
                        }} />
                    </div>
                </div>

            </main>
        );
    }

    // Data not loaded
    if (loading) {
        return (
            <main className="min-h-screen bg-[#30302E] flex flex-col px-4 py-10">
                <NavigationBar />
                <HomeButton />
                {/* DropDown  Area */}
                <div className="flex flex-row justify-between">

                    <div className="bg-[#3d3d3d] w-1/3 sm:w-1/4 h-screen mt-0 rounded-2xl">
                        <div className="mt-16 flex flex-col items-center gap-4">
                            <h1 className="text-sm sm:text-3xl font-bold text-white relative inline-block">
                                Loading Your Gears..
                            </h1>

                            <span className="mt-10 loading loading-spinner loading-xl   " />

                        </div>
                    </div>


                    {/* Stats  Area */}
                    <div className="bg-[#3d3d3d] w-1/3 sm:w-1/4 h-96 mt-10 rounded-2xl flex flex-col items-center gap-4">
                        <div>
                            <span className="mt-10 loading loading-spinner loading-xl   " />
                        </div>

                        <SaveGearButton gears={{
                            tool: gear.tool,
                            bag: gear.bag,
                            belt: gear.belt,
                            boot: gear.boot,
                            guard: gear.guard,
                            mask: gear.mask
                        }} />
                    </div>
                </div>

            </main>
        );
    }
};