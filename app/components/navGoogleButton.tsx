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
                        width={40}
                        height={40}
                        className="rounded-full"
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
                width={50}
                height={50}
                className="rounded-full"
            />

        </button>
    );
}