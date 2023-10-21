

import { DashboardShell } from "@/components/shell"
import { DashboardHeader } from "@/components/header"
import { Button } from "@/components"
import Cards from "../_components/cards"
import Link from "next/link"
import EnvBarChart from  "../_components/env-bar-chart"
export const metadata = {
  title: "Admin Dashboard",
}

export default async function DashboardPage() {
  return (
    <DashboardShell>
      
      <div className="grid gap-10">
      <Cards/>
      
      </div>
    </DashboardShell>
  )
}
