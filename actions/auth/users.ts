"use server";

import { signIn } from "@/auth";
import { prisma } from "@/lib/db";



export const handleSignIn = async(provider: string) => {
  await signIn(provider)
}


export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};
