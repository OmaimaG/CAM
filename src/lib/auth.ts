import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/db"
import GoogleProvider from "next-auth/providers/google"

  
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma as any),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  theme: {
    colorScheme: "auto", // "auto" | "dark" | "light"
    brandColor: "", // Hex color value
    logo: "", // Absolute URL to logo image
  },
  // debug: env?.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials : any) {
        return credentials;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const { id, name, email, username, avatar, Role } =
      (await prisma.user.findUnique({
        where: {
            email: (token as JWT)?.email || "",
          },
          include: { Role : true },
        })) || {}

      if (!id) {
        if (user) {
          token.id = user?.id
        }
        return token
      }

      return {
        id,
        name,
        email,
        username,
        image: avatar || "",
        role: Role?.name || "USER",
      }
    },
    async session({ token, session }) {
      if (token) {
        const sessionUser = token as SessionUser // Explicitly cast the token to SessionUser
        session.user.id = sessionUser.id
        session.user.name = sessionUser.name
        session.user.username = sessionUser.username
        session.user.email = sessionUser.email
        session.user.image = sessionUser.image
        session.user.role = sessionUser.role
      }

      return session
    },
  },
}

export default authOptions
