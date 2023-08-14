
import { DashboardShell } from "@/components/shell"
import { DashboardHeader } from "@/components/header"
import { Button } from "@/components"
import Link from "next/link"

export const metadata = {
  title: "Chef department Dashboard",
}

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Chef department" text="Chef department desc" >  </DashboardHeader>
      <div className="grid gap-10">
      {/* HOT LI THEB LAHNE */}
      </div>
    </DashboardShell>
  )
}
