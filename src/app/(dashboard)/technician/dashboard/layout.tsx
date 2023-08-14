import Sidebar from "../_components/sidebar"
import { MainNav } from "@/components/main-nav"
import { UserAccountNav } from "@/components/user-account-nav"
import { adminDashboardConfig } from "@/config/admin_dashboard"
import { PermissionDeniedError } from "@/lib/exceptions"
import getSession from "@/lib/session"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await getSession()
  const user = session?.user

  if(user?.role !== "TECHNICIAN") {
    throw new PermissionDeniedError("Only TECHNICIAN can access this page")
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={adminDashboardConfig.navbar} />
          <UserAccountNav user={user} />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <Sidebar />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden p-1">
          {children}
        </main>
      </div>
    </div>
  )
}
