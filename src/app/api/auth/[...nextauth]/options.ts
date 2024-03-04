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
  pages: {
    signIn: process.env.NEXTAUTH_URL,
  },
  callbacks: {
    async signIn({ user }) {
      try {
        const userExists = await prisma.user.findUnique({
          where: { email: user.email as string },
        });

        if (userExists) return true;

        await prisma.user.create({
          data: {
            email: user.email as string,
            name: user.name as string,
            image: user.image as string,
          },
        });

        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
