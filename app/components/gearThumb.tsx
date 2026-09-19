"use client";

import Image from 'next/image';
import { useState } from 'react';
import { HEX } from '@/app/components/honeycomb';

/* Gear image inside a hexagon. If the gear has no image (or the file 404s),
   it falls back to the gear's first letter instead of a broken-image icon. */
export default function GearThumb({ image, name, size = 44 }: { image?: string; name: string; size?: number }) {
    const [failedSrc, setFailedSrc] = useState<string | null>(null);
    const src = image && failedSrc !== image ? image : null;

    return (
        <span
            className={`grid shrink-0 place-items-center bg-white/10 text-amber-400 ${HEX}`}
            style={{ width: size, height: size }}
        >
            {src ? (
                <Image
                    src={src}
                    alt=""
                    width={size}
                    height={size}
                    onError={() => setFailedSrc(src)}
                    className="h-[70%] w-[70%] object-contain"
                />
            ) : (
                <span className="font-bold" style={{ fontSize: size * 0.4 }}>
                    {name === "None" ? "–" : name.charAt(0)}
                </span>
            )}
        </span>
    );
}