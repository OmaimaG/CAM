import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Rapports",
  description: "Manage Rapports",
}

export default async function RolePage() {

  return (
    <DashboardShell>
      <DashboardHeader heading="Rapports table" text="Rapports desc"></DashboardHeader>
      <div className="grid gap-10">
      </div>
    </DashboardShell>
  )
}
