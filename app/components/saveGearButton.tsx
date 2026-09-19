"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { postGearIds } from '@/lib/postGearIds';
import type { EquippedGear } from '@/lib/gear';

type SaveState = "idle" | "saving" | "saved" | "failed";

const BASE =
    "flex w-full items-center justify-center gap-3 rounded-full px-6 py-3.5 text-lg font-bold transition-transform focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400";
const PRIMARY =
    "bg-amber-600 text-yellow-50 shadow-lg shadow-black/30 hover:bg-amber-700 motion-safe:hover:scale-[1.02] motion-safe:active:scale-95";
const MUTED = "cursor-default bg-white/10 text-gray-300";

function Glyph({ children }: { children: ReactNode }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
            {children}
        </svg>
    );
}

// `disabled` lets the page block saving until the player's real gear has loaded,
// so the defaults can never overwrite what's stored in the database.
export default function SaveGearButton({ gears, disabled = false }: { gears: EquippedGear; disabled?: boolean }) {
    // Keep button seperate so different states of the button appears for when needed
    const { data: session, status } = useSession();
    const [state, setState] = useState<SaveState>("idle");
    const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => () => clearTimeout(timer.current), []);

    // Sends data, shows the result for 2 seconds, then goes back to normal
    const handleClick = async () => {
        setState("saving");
        try {
            await postGearIds(gears);
            setState("saved");
        } catch (e) {
            console.error("Data failed to send", e);
            setState("failed");
        }
        timer.current = setTimeout(() => setState("idle"), 2000);
    };

    let button;

    if (status === "loading") {
        button = (
            <button type="button" disabled className={`${BASE} ${MUTED}`}>
                Loading <span className="loading loading-spinner loading-sm" />
            </button>
        );
    } else if (!session) {
        button = (
            <button type="button" onClick={() => signIn("google")} className={`${BASE} ${PRIMARY}`}>
                Sign in to save gears
            </button>
        );
    } else if (state === "saving") {
        button = (
            <button type="button" disabled className={`${BASE} ${MUTED}`}>
                Saving <span className="loading loading-spinner loading-sm" />
            </button>
        );
    } else if (state === "saved") {
        button = (
            <button type="button" disabled className={`${BASE} cursor-default bg-amber-600/20 text-amber-400`}>
                Saved
                <Glyph><path d="M20 6 9 17l-5-5" /></Glyph>
            </button>
        );
    } else if (state === "failed") {
        button = (
            <button type="button" disabled className={`${BASE} cursor-default bg-red-500/20 text-red-300`}>
                Couldn&apos;t save. Try again
                <Glyph><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></Glyph>
            </button>
        );
    } else {
        button = (
            <button
                type="button"
                onClick={handleClick}
                disabled={disabled}
                className={`${BASE} ${disabled ? MUTED : PRIMARY}`}
            >
                Save gears
            </button>
        );
    }

    return <div aria-live="polite">{button}</div>;
}