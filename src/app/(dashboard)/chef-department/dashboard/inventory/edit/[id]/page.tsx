import {Form} from "@/components"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import db from "@/lib/db"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components"
import Hardware from "../../components/hardware"
import Software from "../../components/software"

export const metadata = {
  title: "Edit Inventory",
  description: "Edit inventory item description...",
}

type Props = {
  params: {
    id: string
  }
}

export default async function EditInventory({ params }: Props) {
  const inventory = await db.inventory.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!inventory) {
    return notFound()
  }

  const defaultValues = inventory

  return (
    <DashboardShell>
      <DashboardHeader heading="Edit Inventory" text="Edit Inventory Description">
        <Link href={`/chef-department/dashboard/inventory`}>
          <Button variant="outline">View inventory table</Button>
        </Link>
      </DashboardHeader>
      <div className="grid gap-10">
        {inventory.type === "software" ? <Software
          method="PATCH"
          defaultValues={defaultValues}
        /> : <Hardware
          method="PATCH"
          defaultValues={defaultValues}
        />}
        
        
      </div>
    </DashboardShell>
  )
}
