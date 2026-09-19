"use client";

import { useState, useEffect } from 'react';
import NavigationBar from '@/app/components/navigationBar';
import HomeButton from '@/app/components/homeButton';
import DropDown from '@/app/components/dropDown';
import SaveGearButton from '@/app/components/saveGearButton';
import { Honeycomb, HEX } from '@/app/components/honeycomb';
import { getGearIds } from '@/lib/getGearIds';
import type { EquippedGear, GearCategory } from '@/lib/gear/';
import { pollenPerSecond } from '@/lib/pollenPerSecond';
import { roundNumbers } from '@/lib/roundNumbers';

/* 
Function: This page allows users to select and save gears to the database and replans what
          gear they aim to achieve 
*/

// Order the slots appear in
const SLOTS: GearCategory[] = ["tool", "bag", "belt", "boot", "mask", "guard"];

// Placeholder row shown while the player's gear is being fetched
function SlotSkeleton() {
    return (
        <div className="flex items-center gap-4 px-3 py-3" aria-hidden="true">
            <span className={`h-11 w-11 shrink-0 animate-pulse bg-white/10 motion-reduce:animate-none ${HEX}`} />
            <span className="flex-1 space-y-2">
                <span className="block h-3 w-12 animate-pulse rounded bg-white/10 motion-reduce:animate-none" />
                <span className="block h-5 w-40 max-w-full animate-pulse rounded bg-white/10 motion-reduce:animate-none" />
            </span>
        </div>
    );
}

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
        let cancelled = false;

        const loadData = async () => {
            try {
                const data = await getGearIds();
                if (!cancelled) setGear(data);
            } catch (e) {
                console.error("Data couldn't be fetched", e);
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        loadData();
        return () => { cancelled = true; };
    }, []);

    // chooseGear sets the ID for the chosen slot's useState.
    const chooseGear = (x: number, category: GearCategory) => {
        setGear(prev => ({ ...prev, [category]: x }));
    };

    // Pollen per minute for each field colour
    const pollen = pollenPerSecond(gear);
    const fields = [
        { name: "White fields", dot: "bg-gray-100", perMinute: pollen.whitePollen * 60 },
        { name: "Red fields", dot: "bg-red-500", perMinute: pollen.redPollen * 60 },
        { name: "Blue fields", dot: "bg-blue-500", perMinute: pollen.bluePollen * 60 },
    ];
    const best = Math.max(...fields.map((f) => f.perMinute));

    return (
        <main className="relative min-h-screen bg-[#30302E] text-gray-100">
            <NavigationBar />

            {/* --------------------------------- Hero --------------------------------- */}
            <header className="relative overflow-hidden bg-[#494941]">
                <Honeycomb />
                <div className="relative mx-auto max-w-5xl px-4 pb-24 pt-24">
                    <h1 className="text-5xl font-extrabold tracking-tight text-amber-400 sm:text-7xl">Update gears</h1>
                    <p className="mt-3 max-w-md text-lg text-gray-300">
                        Pick what you have equipped. Your pollen per minute updates as you go.
                    </p>
                </div>
            </header>

            {/* ------------------------- Loadout + pollen panel ------------------------- */}
            <div className="relative mx-auto -mt-12 grid max-w-5xl gap-6 px-4 pb-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">

                {/* Gear slots */}
                <section aria-label="Equipped gear" aria-busy={loading} className="rounded-3xl bg-[#3d3d3d] shadow-xl shadow-black/30">
                    <ul className="divide-y divide-white/10 p-2">
                        {SLOTS.map((slot) => (
                            <li key={slot} className="py-1 first:pt-0 last:pb-0">
                                {loading ? (
                                    <SlotSkeleton />
                                ) : (
                                    <DropDown gear={slot} selectedId={gear[slot]} chooseGear={chooseGear} />
                                )}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Stats  Area */}
                <aside className="rounded-3xl bg-[#3d3d3d] p-6 shadow-xl shadow-black/30 sm:p-8 lg:sticky lg:top-6 lg:self-start">
                    <h2 className="text-xl font-bold">Pollen per minute</h2>

                    <ul className="mt-6 space-y-5">
                        {fields.map((field) => (
                            <li key={field.name}>
                                <div className="flex items-baseline justify-between gap-4">
                                    <span className="flex items-center gap-2 text-gray-200">
                                        <span className={`h-3 w-3 rounded-full ring-1 ring-white/30 ${field.dot}`} />
                                        {field.name}
                                    </span>
                                    <span className="text-3xl font-extrabold tabular-nums text-amber-500">
                                        {loading ? "–" : roundNumbers(field.perMinute)}
                                    </span>
                                </div>
                                <div className="mt-2 h-1.5 rounded-full bg-white/10">
                                    <div
                                        className="h-full rounded-full bg-amber-600 transition-[width] duration-300 motion-reduce:transition-none"
                                        style={{ width: loading ? "0%" : `${(field.perMinute / best) * 100}%` }}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-6 text-sm text-gray-400">
                        Note: this is the minimum honey you should reach with gear alone. You should beat it.
                    </p>

                    <div className="mt-6">
                        <SaveGearButton
                            disabled={loading}
                            gears={{
                                tool: gear.tool,
                                bag: gear.bag,
                                belt: gear.belt,
                                boot: gear.boot,
                                guard: gear.guard,
                                mask: gear.mask
                            }}
                        />
                    </div>
                </aside>
            </div>

            {/* Rendered last so the hero's stacking context never covers it */}
            <HomeButton />
        </main>
    );
}