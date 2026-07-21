'use client';
import Icon from '@/app/components/icon';
import { useState, useRef, useEffect } from 'react';
import { tools, bags, belts, boots, guards, masks, GearType, findGear, EquippedGear, GearCategory } from '@/lib/gear/';

// Pass in props from outside the file
interface ImportProp {
    gear: GearCategory;
    chooseGear: (x: number, gear: GearCategory) => void;
}

export default function dropDown({ gear, chooseGear }: ImportProp) {
    const [active, setActive] = useState<boolean>(false); // controls when drop down menu opens/closes
    const gearData = { tool: tools, bag: bags, boot: boots, guard: guards, mask: masks, belt: belts };
    console.log("dropDown rendering");

    const clickWatch = useRef<HTMLDivElement>(null);

    // Closes the drop down menus if a click happens anywhere outside current menus while one is open
    useEffect(() => {
        const closeMenus = (e: MouseEvent) => {
            if (active && clickWatch.current && !clickWatch.current.contains(e.target as Node)) {
                setActive(false);
            }
        };

        // Activates the closeMenus function if a click occurs any time
        document.addEventListener('mousedown', closeMenus);
        return () => document.removeEventListener('mousedown', closeMenus);
    }, [active]);

    return (
        <div className="relative inline-block" ref={clickWatch}>
            <button className="bg-amber-600 btn btn-lg rounded-2xl" onClick={() => setActive(!active)}>
                v
            </button>

            {active && (
                <ul className={`absolute left-0 mt-2 w-56 max-h-64 overflow-y-auto bg-neutral-900 text-white rounded-xl shadow-lg py-2 z-10 origin-top transition-all duration-200 ease-out
    ${active ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
                    {gearData[gear].map((item) =>
                        <li key={item.id}>
                            <a onClick={() => { chooseGear(item.id, gear); setActive(false); }} className="flex items-center gap-3 px-4 py-2 hover:bg-neutral-800 cursor-pointer">
                                {item.name} {item.image && <Icon image={item.image} properties="w-12 h-12" />}
                            </a>
                        </li>
                    )}
                </ul>
            )}
        </div>

    );
}