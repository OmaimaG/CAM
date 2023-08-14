import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export default function DashboardBillingLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Inventory page loading" />
      <div className="grid gap-10">
      </div>
    </DashboardShell>
  )
}
