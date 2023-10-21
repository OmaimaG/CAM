import { getServerSession } from "next-auth/next"
import prisma from "@/lib/prisma"
import { User } from "@prisma/client" // Import du modèle User
import { authOptions } from "@/lib/auth"

export async function getSession() {
  const session = await getServerSession(authOptions)
  return session
}

export async function getCurrentUser(options?: object) {
  const session = await getSession()
  if (!session?.user?.id) return null
  try {
    // Utilisation du modèle User pour interagir avec la base de données
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      ...options,
    })
    return user
  } catch (error) {
    return null
  }
}

export default getSession
