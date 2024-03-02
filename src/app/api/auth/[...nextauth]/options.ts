import prisma from "@/lib/prisma";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, profile, email }) {
      try {
        const userExists = await prisma.user.findFirst({
          where: { email: email as string },
        });

        if (userExists) {
          return true;
        }

        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/users`, {
          method: "POST",
          body: JSON.stringify({ user, profile }),
        });

        if (!response.ok) throw Error("Status code: " + response.status);

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
  pages: {
    signIn: "/",
  },
};
