import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "vulnerabilities",
  description: "Manage vulnerabilities",
}

export default async function RolePage() {

  return (
    <DashboardShell>
      <DashboardHeader heading="vulnerabilities table" text="vulnerabilities desc"></DashboardHeader>
      <div className="grid gap-10">
      </div>
    </DashboardShell>
  )
}
