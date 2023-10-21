import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Some Settings desc"
      ></DashboardHeader>
      <section>
       
      </section>
    </DashboardShell>
  )
}
