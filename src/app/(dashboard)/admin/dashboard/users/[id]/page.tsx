import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import db from "@/lib/prisma"
import { notFound } from "next/navigation"
import Link from "next/link"
import {Button} from "@/components"

type Props = {
  params: {
    id: string
  }
}

export default async function user({ params }: Props) {
  const user = await db.user.findUnique({
    where: {
      id: params.id,
    },
    include : {
      Role : true,
      Department : true,
      Position : true,
      Direction : true
    }
  })

  if (!user) {
    return notFound()
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="User details" text={`User`} > <Link href={`/admin/dashboard/users`}>
        <Button variant="outline">View users table</Button>
        </Link> </DashboardHeader>
      <div className="grid gap-4">
        <ul>
          <li>
            <strong>ID: {user.id}</strong>
          </li>
          <li>
            <strong>Name: {user.name}</strong>
          </li>
          <li>
            <strong>Username: {user.username}</strong>
          </li>
          <li>
            <strong>Email: {user.email}</strong>
          </li>
          <li>
            <strong>Phone: {user.phone}</strong>
          </li>
          <li>
            <strong>emailVerified: {user.emailVerified ? "No" :  "Yes"}</strong>
          </li>
          <li>
            <strong>Image: {user.image}</strong>
          </li>
           <li>
            <strong>Direction: {user.Direction?.name}</strong>
          </li>
           <li>
            <strong>Department: {user.Department?.name}</strong>
          </li>
          <li>
            <strong>Service: {user.service}</strong>
          </li>
          <li>
            <strong>Position: {user.Position?.name}</strong>
          </li>
          <li>
            <strong>
              Created at: {new Date(user.created_at).toLocaleDateString()}
            </strong>
          </li>
          <li>
            <strong>
            Updated at: {new Date(user.updated_at).toLocaleDateString()}
            </strong>
          </li>
          
        </ul>
      </div>
    </DashboardShell>
  )
}
