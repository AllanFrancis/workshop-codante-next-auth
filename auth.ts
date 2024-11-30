import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import db from "@/lib/db";
import { compareSync } from "bcrypt-ts";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: { type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);
        const email = credentials.email as string;
        const password = credentials.password as string;

        if (!credentials.email || !credentials.password) {
          return Promise.resolve(null);
        }

        const user = await db.user.findUnique({
          where: { email: email },
        });

        if (!user) {
          return Promise.resolve(null);
        }

        const matches = compareSync(password, user.password ?? "");

        if (!matches) {
          return Promise.resolve(null);
        }

        return Promise.resolve({
          id: user.id,
          email: user.email,
          name: user.name,
        });
      },
    }),
  ],
});
