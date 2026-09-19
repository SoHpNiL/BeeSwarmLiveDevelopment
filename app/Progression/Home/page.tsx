"use client";

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import NavigationBar from '@/app/components/navigationBar';
import HomeButton from '@/app/components/homeButton';
import { getCurrentGoal } from '@/lib/progressionSystem/goalSystem';
import type { Goal } from '@/lib/progressionSystem';

/* -------------------------------------------------------------------------- */
/*  Placeholder data (same values the old page showed, now in one place)      */
/* -------------------------------------------------------------------------- */
const STAGES = ["Early-Game", "Mid-Game", "Late-Game"];
const CURRENT_STAGE = 0; // index into STAGES
const POLLEN_PER_CLICK = "318";
const RANKING = { rank: 99, total: 100 };

const GOAL_LABELS: Record<Goal["type"], string> = {
    gear: "Gear upgrade",
    bee: "Bee goal",
    milestone: "Milestone",
    multichoice: "Your choice",
};

type LoadState = "loading" | "ready" | "error";

/* Hexagon clip-path: the one shape the whole page is built around */
const HEX = "[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]";

const HEX_TONES = {
    solid: "bg-amber-600 text-yellow-50",
    light: "bg-yellow-50 text-amber-700",
    soft: "bg-amber-600/20 text-amber-400",
} as const;

/* -------------------------------------------------------------------------- */
/*  Small building blocks                                                     */
/* -------------------------------------------------------------------------- */
function Glyph({ children, className = "h-5 w-5" }: { children: ReactNode; className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
            {children}
        </svg>
    );
}

function HexBadge({ tone, children }: { tone: keyof typeof HEX_TONES; children: ReactNode }) {
    return (
        <span className={`grid h-11 w-11 shrink-0 place-items-center ${HEX} ${HEX_TONES[tone]}`}>
            {children}
        </span>
    );
}

/* Faint honeycomb that fades out toward the left of the hero */
function Honeycomb() {
    return (
        <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 h-full w-full text-amber-500/25 sm:w-3/4 [mask-image:linear-gradient(to_left,black,transparent)]"
        >
            <defs>
                <pattern id="hero-honeycomb" width="34.64" height="60" patternUnits="userSpaceOnUse" patternTransform="scale(1.6)">
                    <polygon points="17.32,0 34.64,10 34.64,30 17.32,40 0,30 0,10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M17.32 40V60" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-honeycomb)" />
        </svg>
    );
}

/* Where the player is in the game: hexes + connectors */
function StageTrack() {
    return (
        <ol className="mt-10 flex items-center gap-2 sm:gap-3" aria-label="Progression stages">
            {STAGES.map((stage, i) => {
                const current = i === CURRENT_STAGE;
                const done = i < CURRENT_STAGE;
                return (
                    <li key={stage} className="flex items-center gap-2 sm:gap-3" aria-current={current ? "step" : undefined}>
                        <span
                            className={`h-5 w-5 shrink-0 ${HEX} ${current ? "bg-amber-400" : done ? "bg-amber-700" : "bg-white/15"}`}
                        />
                        <span
                            className={
                                current
                                    ? "font-bold text-amber-400"
                                    : "sr-only text-gray-400 sm:not-sr-only"
                            }
                        >
                            {stage}
                        </span>
                        {i < STAGES.length - 1 && <span className="h-px w-5 bg-white/20 sm:w-12" aria-hidden="true" />}
                    </li>
                );
            })}
        </ol>
    );
}

interface ActionProps {
    title: string;
    icon: ReactNode;
    href?: string;   // no href = feature not built yet
    primary?: boolean;
}

function ActionPill({ title, icon, href, primary }: ActionProps) {
    const shared =
        "inline-flex items-center gap-3 rounded-full py-2.5 pl-2.5 text-lg font-bold transition-transform motion-safe:active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400";

    const look = primary
        ? "bg-amber-600 pr-7 text-yellow-50 shadow-lg shadow-black/30 hover:bg-amber-700 motion-safe:hover:scale-105"
        : "border border-amber-600/70 pr-6 text-amber-400 hover:bg-amber-600/15";

    const inner = (
        <>
            <HexBadge tone={primary ? "light" : "soft"}>{icon}</HexBadge>
            <span>{title}</span>
            {!href && <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-gray-300">Soon</span>}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={`${shared} ${look}`}>
                {inner}
            </Link>
        );
    }

    return (
        <button type="button" className={`${shared} ${look}`}>
            {inner}
        </button>
    );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */
export default function Page() {
    const [currentGoal, setCurrentGoal] = useState<Goal | null>(null);
    const [status, setStatus] = useState<LoadState>("loading");

    useEffect(() => {
        let cancelled = false;

        getCurrentGoal(1)
            .then((goal) => {
                if (cancelled) return;
                setCurrentGoal(goal ?? null); // undefined when every goal is completed
                setStatus("ready");
            })
            .catch(() => {
                if (cancelled) return;
                setCurrentGoal(null);
                setStatus("error");
            });

        return () => { cancelled = true; };
    }, []);

    let headline: string | null = null;
    if (status === "ready") headline = currentGoal?.description ?? "You're all caught up";
    if (status === "error") headline = "Couldn't load your next gear";

    // Multichoice goals have sentence-long descriptions, so they get a smaller size
    const isLong = (headline?.length ?? 0) > 28;
    const rankPct = ((RANKING.rank - 1) / (RANKING.total - 1)) * 100;

    return (
        <main className="relative min-h-screen bg-[#30302E] text-gray-100">
            <NavigationBar />

            {/* ---------------------------- Hero: next gear ---------------------------- */}
            <header className="relative overflow-hidden bg-[#494941]">
                <Honeycomb />

                <div className="relative mx-auto max-w-5xl px-4 pb-24 pt-24 sm:pb-28">
                    <h1 className="sr-only">Your progression</h1>
                    <p className="text-base text-gray-300">Next gear</p>

                    <div aria-live="polite" aria-busy={status === "loading"}>
                        {headline === null ? (
                            <div className="mt-3 h-16 w-72 max-w-full animate-pulse rounded-2xl bg-white/10 motion-reduce:animate-none" />
                        ) : (
                            <p
                                className={`mt-2 max-w-3xl font-extrabold leading-[1.05] tracking-tight text-balance ${status === "error" ? "text-gray-200" : "text-amber-400"
                                    } ${isLong ? "text-3xl sm:text-5xl" : "text-5xl sm:text-7xl"}`}
                            >
                                {headline}
                            </p>
                        )}
                    </div>

                    {status === "error" && (
                        <p className="mt-3 text-gray-300">Check your connection and refresh the page.</p>
                    )}

                    {currentGoal && (
                        <div className="mt-5 flex flex-wrap gap-2">
                            <span className="rounded-full bg-black/25 px-3 py-1 text-sm font-medium text-yellow-50">
                                {GOAL_LABELS[currentGoal.type]}
                            </span>
                            {currentGoal.gearCategory && (
                                <span className="rounded-full bg-black/25 px-3 py-1 text-sm font-medium capitalize text-yellow-50">
                                    {currentGoal.gearCategory}
                                </span>
                            )}
                        </div>
                    )}

                    <StageTrack />
                </div>
            </header>

            {/* ------------------------------ Stats panel ------------------------------ */}
            <section className="relative mx-auto -mt-12 max-w-5xl px-4">
                <div className="grid rounded-3xl bg-[#3d3d3d] shadow-xl shadow-black/30 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
                    <div className="p-6 sm:p-8">
                        <p className="flex items-center gap-2 text-sm text-gray-300">
                            <Glyph className="h-4 w-4 text-amber-500">
                                <path d="M12 2.5s6 6.2 6 10.5a6 6 0 0 1-12 0c0-4.3 6-10.5 6-10.5Z" />
                            </Glyph>
                            Pollen per click
                        </p>
                        <p className="mt-2 text-6xl font-extrabold tabular-nums text-amber-500">{POLLEN_PER_CLICK}</p>
                    </div>

                    <div className="border-t border-white/10 p-6 sm:p-8 md:border-l md:border-t-0">
                        <p className="flex items-center gap-2 text-sm text-gray-300">
                            <Glyph className="h-4 w-4 text-amber-500">
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                            </Glyph>
                            Ranking
                        </p>
                        <p className="mt-2 text-4xl font-extrabold text-amber-500 sm:text-5xl">
                            {RANKING.rank}/{RANKING.total}{" "}
                            <span className="text-lg font-semibold text-gray-300">in {STAGES[CURRENT_STAGE]}</span>
                        </p>

                        <div className="mt-5" role="img" aria-label={`Ranked ${RANKING.rank} of ${RANKING.total}`}>
                            <div className="relative h-2 rounded-full bg-white/10">
                                <span
                                    className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500 ring-4 ring-[#3d3d3d]"
                                    style={{ left: `${rankPct}%` }}
                                />
                            </div>
                            <div className="mt-2 flex justify-between text-xs text-gray-400">
                                <span>#1</span>
                                <span>#{RANKING.total}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* -------------------------------- Actions -------------------------------- */}
            <section className="mx-auto max-w-5xl px-4 pb-16 pt-10">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <ActionPill
                        primary
                        href="/Progression/Gears"
                        title="Update gears"
                        icon={
                            <Glyph>
                                <path d="M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3M14 2v4M8 10v4M16 18v4" />
                            </Glyph>
                        }
                    />
                    <ActionPill
                        title="Planter calendar"
                        icon={
                            <Glyph>
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <path d="M16 2v4M8 2v4M3 10h18" />
                            </Glyph>
                        }
                    />
                    <ActionPill
                        title="Amulets"
                        icon={
                            <Glyph>
                                <path d="M6 3h12l4 6-10 13L2 9Z" />
                                <path d="M11 3 8 9l4 13 4-13-3-6M2 9h20" />
                            </Glyph>
                        }
                    />
                </div>
            </section>

            {/* Rendered last so the hero's stacking context never covers it */}
            <HomeButton />
        </main>
    );
}