import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="General"
        text="Welcome to the User Dashboard Your central control panel for managing and monitoring your account and activities."
      ></DashboardHeader>
      <section>
        <h2>Hello {user.name} welcome to your dashboard</h2>
      </section>
    </DashboardShell>
  )
}
