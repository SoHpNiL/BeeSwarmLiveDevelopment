'use client';
import { useState, useRef, useEffect } from 'react';
import GearThumb from '@/app/components/gearThumb';
import { tools, bags, belts, boots, guards, masks } from '@/lib/gear/';
import type { GearCategory, GearFields } from '@/lib/gear/';

// Pass in props from outside the file
interface ImportProp {
    gear: GearCategory;
    selectedId: number; // currently equipped gear ID for this slot
    chooseGear: (x: number, gear: GearCategory) => void;
}

const gearData: Record<GearCategory, GearFields[]> = {
    tool: tools,
    bag: bags,
    belt: belts,
    boot: boots,
    guard: guards,
    mask: masks,
};

const LABELS: Record<GearCategory, string> = {
    tool: "Tool",
    bag: "Bag",
    belt: "Belt",
    boot: "Boot",
    guard: "Guard",
    mask: "Mask",
};

export default function DropDown({ gear, selectedId, chooseGear }: ImportProp) {
    const [active, setActive] = useState<boolean>(false); // controls when drop down menu opens/closes
    const clickWatch = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const options = gearData[gear];
    const selected = options.find((item) => item.id === selectedId) ?? options[0];

    // While open: close on a click anywhere outside this menu, or on Escape
    useEffect(() => {
        if (!active) return;

        const closeOnOutsideClick = (e: MouseEvent) => {
            if (clickWatch.current && !clickWatch.current.contains(e.target as Node)) {
                setActive(false);
            }
        };
        const closeOnEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActive(false);
        };

        document.addEventListener('mousedown', closeOnOutsideClick);
        document.addEventListener('keydown', closeOnEscape);
        return () => {
            document.removeEventListener('mousedown', closeOnOutsideClick);
            document.removeEventListener('keydown', closeOnEscape);
        };
    }, [active]);

    // On open, scroll the list so the equipped gear sits in the middle
    useEffect(() => {
        const list = listRef.current;
        if (!active || !list) return;
        const current = list.querySelector<HTMLElement>('[aria-selected="true"]');
        if (current) {
            list.scrollTop = current.offsetTop - list.clientHeight / 2 + current.clientHeight / 2;
        }
    }, [active]);

    return (
        <div className="relative" ref={clickWatch}>
            <button
                type="button"
                onClick={() => setActive(!active)}
                aria-haspopup="listbox"
                aria-expanded={active}
                className="flex w-full items-center gap-4 rounded-2xl px-3 py-3 text-left transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
                <GearThumb image={selected.image} name={selected.name} size={44} />
                <span className="min-w-0 flex-1">
                    <span className="block text-sm text-gray-400">{LABELS[gear]}</span>
                    <span className="block truncate text-xl font-bold text-gray-100">{selected.name}</span>
                </span>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-amber-500 transition-transform motion-reduce:transition-none ${active ? "rotate-180" : ""}`}
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>

            {active && (
                <ul
                    ref={listRef}
                    role="listbox"
                    aria-label={`${LABELS[gear]} options`}
                    className="absolute inset-x-2 top-full z-30 mt-1 max-h-72 overflow-y-auto rounded-2xl bg-[#262624] p-1.5 shadow-2xl shadow-black/50 ring-1 ring-white/10"
                >
                    {options.map((item) => {
                        const isSelected = item.id === selectedId;
                        return (
                            <li key={item.id} role="presentation">
                                <button
                                    type="button"
                                    role="option"
                                    aria-selected={isSelected}
                                    onClick={() => { chooseGear(item.id, gear); setActive(false); }}
                                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors ${isSelected
                                            ? "bg-amber-600/20 text-amber-400"
                                            : "text-gray-100 hover:bg-white/8"
                                        }`}
                                >
                                    <GearThumb image={item.image} name={item.name} size={32} />
                                    <span className="flex-1 truncate font-medium">{item.name}</span>
                                    {isSelected && (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4 shrink-0">
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                    )}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}