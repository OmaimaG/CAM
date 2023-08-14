

import { DashboardShell } from "@/components/shell"
import { DashboardHeader } from "@/components/header"
import { Button } from "@/components"
import Link from "next/link"

export const metadata = {
  title: "Director general Dashboard",
}

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Director general" text="Director general desc" ></DashboardHeader>
      <div className="grid gap-10">
      {/* HOT LI THEB LAHNE */}
      </div>
    </DashboardShell>
  )
}
