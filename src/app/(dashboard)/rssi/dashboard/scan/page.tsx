import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Scan",
  description: "Manage Scan",
}

export default async function RolePage() {

  return (
    <DashboardShell>
      <DashboardHeader heading="Scan table" text="Scan desc"></DashboardHeader>
      <div className="grid gap-10">
      </div>
    </DashboardShell>
  )
}
