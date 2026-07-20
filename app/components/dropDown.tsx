
'use client';
import { useState } from 'react';
import Icon from '@/app/components/icon';
import { tools, bags, belts, boots, guards, masks, GearType, findGear, EquippedGear, GearCategory } from '@/lib/gear/';

// Pass in props from outside the file
interface ImportProp {
    gear: GearCategory;
    chooseGear: (x: number, gear: GearCategory) => void;
}

export default function dropDown({ gear, chooseGear }: ImportProp) {
    const [active, setActive] = useState<boolean>(false);
    const gearData = { tool: tools, bag: bags, boot: boots, guard: guards, mask: masks, belt: belts };
    console.log("dropDown rendering");
    return (
        <div className="relative inline-block">
            <button className="bg-amber-600 btn btn-lg rounded-2xl" onClick={() => setActive(!active)}>
                v
            </button>

            {active && (
                <ul className={`absolute left-0 mt-2 w-56 max-h-64 overflow-y-auto bg-neutral-900 text-white rounded-xl shadow-lg py-2 z-10 origin-top transition-all duration-200 ease-out
    ${active ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
                    {gearData[gear].map((item) =>
                        <li key={item.id}>
                            <a onClick={() => { chooseGear(item.id, gear); setActive(false); }} className="flex items-center gap-3 px-4 py-2 hover:bg-neutral-800 cursor-pointer">
                                {item.name} {item.image && <Icon image={item.image} properties="w-7 h-7" />}
                            </a>
                        </li>
                    )}
                </ul>
            )}
        </div>

    );
}