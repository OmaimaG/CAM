import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import  Searchd  from "./_component/Searchd"
export const metadata = {
  title: "vulnerabilities",
  description: "Manage vulnerabilities",
}

export default async function RolePage() {

  return (
    <div>
  <Searchd />
  </div>
  )
}
