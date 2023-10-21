import { dashboardConfig } from "@/config/dashboard"
import { getCurrentUser, getSession } from "@/lib/session"
import { redirect } from "next/navigation"
import Layout from "@/app/_components/cus-layout"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await getSession()

  if (!session?.user?.role) {
    redirect("/login")
  }

  return (
    <Layout
      sidebar={dashboardConfig.sidebarNav}
      navbar={dashboardConfig.mainNav}
    >
      {children}
    </Layout>
  )
}
