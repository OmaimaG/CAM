import { DashboardShell } from "@/components/shell"
import { DashboardHeader } from "@/components/header"

export const metadata = {
  title: "Technician Reports",
}

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Technician Reports" text="Technician Reports" >  </DashboardHeader>
      <div className="grid gap-10">
      {/* HOT LI THEB LAHNE */}
      </div>
    </DashboardShell>
  )
}
