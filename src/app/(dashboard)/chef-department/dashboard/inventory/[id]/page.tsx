import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import db from "@/lib/prisma"
import { notFound } from "next/navigation"
import Link from "next/link"
import {Button} from "@/components"
import { format } from "date-fns" 

type Props = {
  params: {
    id: string
  }
}

export default async function Inventory({ params }: Props) {
  const inventory = await db.inventory.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!inventory) {
    return notFound()
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Inventory details" text={`Inventory`}>
        <Link href={`/chef-department/dashboard/inventory`}>
          <Button variant="outline">View inventory table</Button>
        </Link>
      </DashboardHeader>
      <div className="grid gap-4">
        <ul>
          <li>
            <strong>ID: {inventory.id}</strong>
          </li>
          <li>
            <strong>Item Name: {inventory.name}</strong>
          </li>
          <li>
            <strong>Type: {inventory.type}</strong>
          </li>
          <li>
            <strong>Category: {inventory.category}</strong>
          </li>
          <li>
            <strong>Item: {inventory.item}</strong>
          </li>
          {/* Add more fields as needed */}
          <li>
            <strong>
              Created at: {format(new Date(inventory.created_at), "yyyy-MM-dd")}
            </strong>
          </li>
          <li>
            <strong>
              Updated at: {format(new Date(inventory.updated_at), "yyyy-MM-dd")}
            </strong>
          </li>
          
        </ul>
      </div>
    </DashboardShell>
  )
}



