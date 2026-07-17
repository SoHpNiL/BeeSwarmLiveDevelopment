"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

// Wrap passed in prop in a SessionProvider to allow useSession() hooks on a client-side component if a user is logged in or not
export default function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}