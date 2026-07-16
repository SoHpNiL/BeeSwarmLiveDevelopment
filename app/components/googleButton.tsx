"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function GoogleButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button className="btn rounded-xl bg-white text-black border-2 border-amber-600 scale-80 sm:scale-100 md:scale-120 opacity-60">
        <span className="loading loading-spinner loading-xs" />
      </button>
    );
  }

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="btn rounded-xl bg-white text-black border-2 border-amber-600 scale-80 sm:scale-100 md:scale-120 md:hover:scale-125 sm:hover:scale-105 hover:scale-85 transition-transform duration-200"
      >
        {session.user?.image && (
          <Image
            src={session.user.image}
            alt={session.user.name ?? "Profile"}
            width={20}
            height={20}
            className="rounded-full"
          />
        )}
        Sign out
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="btn rounded-xl bg-white text-black border-2 border-amber-600 scale-80 sm:scale-100 md:scale-120 md:hover:scale-125 sm:hover:scale-105 hover:scale-85 transition-transform duration-200"
    >
      <svg aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512">
        <g>
          <path d="m0 0H512V512H0" fill="#fff"></path>
          <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
          <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
          <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
          <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
        </g>
      </svg>
      Sign in with Google
    </button>
  );
}
