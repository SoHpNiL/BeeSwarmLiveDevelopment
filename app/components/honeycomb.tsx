/* Hexagon clip-path: the shape the progression pages are built around */
export const HEX = "[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]";

/* Faint honeycomb that fades out toward the left. Put it inside a `relative overflow-hidden` header. */
export function Honeycomb() {
    return (
        <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 h-full w-full text-amber-500/25 sm:w-3/4 [mask-image:linear-gradient(to_left,black,transparent)]"
        >
            <defs>
                <pattern id="honeycomb-pattern" width="34.64" height="60" patternUnits="userSpaceOnUse" patternTransform="scale(1.6)">
                    <polygon points="17.32,0 34.64,10 34.64,30 17.32,40 0,30 0,10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M17.32 40V60" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#honeycomb-pattern)" />
        </svg>
    );
}