import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Calendar"
        text="Some desc"
      ></DashboardHeader>
      <section>
       
      </section>
    </DashboardShell>
  )
}
