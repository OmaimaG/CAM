import { DashboardShell } from "@/components/shell"
import { DashboardHeader } from "@/components/header"

export const metadata = {
  title: "Technician Dashboard",
}

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Technician" text="Technician welcome " >  </DashboardHeader>
      <div className="grid gap-10">
      {/* HOT LI THEB LAHNE */}
      </div>
    </DashboardShell>
  )
}
