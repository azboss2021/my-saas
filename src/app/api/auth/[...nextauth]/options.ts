import { createUser, getUser } from "@/lib/action";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        const userExist = await getUser({ email: user?.email! });
        if (userExist) return true;

        const response = await createUser({
          email: user?.email!,
          image: user?.image!,
          name: user?.name!,
        });

        if (!response.ok) {
          throw Error("Status code: " + response.status);
        }

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
      // Allows relative callback URLs
      // if (url.startsWith("/")) return `${baseUrl}${url}`
      // // Allows callback URLs on the same origin
      // else if (new URL(url).origin === baseUrl) return url
      // return baseUrl
    },
  },
  pages: {
    signIn: "/",
  },
};
