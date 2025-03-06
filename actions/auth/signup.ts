"use server";

import { signIn } from "@/auth"; // Your auth helper (could be NextAuth, etc.)

export const handleSignIn = async () => {
  await signIn("google");
};
