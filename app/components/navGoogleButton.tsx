"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function navGoogleButton() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <button className="btn rounded-b-full bg-white scale-80 sm:scale-100 md:scale-120 opacity-60">
                <span className="loading loading-spinner loading-xs" />
            </button>
        );
    }

    if (session) {
        return (
            <button
                onClick={() => signOut()}
                className=" scale-80 sm:scale-100 md:scale-120 md:hover:scale-125 sm:hover:scale-105 hover:scale-85 transition-transform duration-200"
            >
                {session.user?.image && (
                    <Image
                        src={session.user.image}
                        alt={session.user.name ?? "Profile"}
                        width={90}
                        height={90}
                        className="rounded-full sm:w-12 sm:h-12"
                    />
                )}
            </button>
        );
    }

    return (
        <button
            onClick={() => signIn("google")}
            className="scale-80 sm:scale-100 md:scale-120 md:hover:scale-125 sm:hover:scale-105 hover:scale-85 transition-transform duration-200"
        >
            <Image
                src="/default-profile.svg"
                alt="Sign In"
                width={90}
                height={90}
                className="rounded-full object-contain invert brightness-0"
            />

        </button>
    );
}