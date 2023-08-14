import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import getSession, { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import db from "@/lib/prisma"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { Button } from "@/components"
import Link from "next/link"

export const metadata = {
  title: "Users",
  description: "Manage Users",
}

export default async function RolePage() {
  const session  = await getSession()
  const users = await db.user.findMany({
    where : {
      NOT: {
        id: session?.user?.id,
      },
    },
    orderBy: [
      {
        created_at: 'desc',
      },
    ],
    include : {
      Role : true,
      Department : true,
      Position : true,
      Direction : true
  }})

  return (
    <DashboardShell>
      <DashboardHeader heading="Users table" text="Users desc" >
      <Link href="/admin/dashboard/users/create">
          <Button>Add new user</Button>
        </Link>
     </DashboardHeader>
      <div className="grid gap-10">
        <DataTable columns={columns} data={users} />
      </div>
    </DashboardShell>
  )
}
