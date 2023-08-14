import Form from "../../../../_components/form"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import db from "@/lib/db"
import { notFound } from "next/navigation"
import Link from "next/link"
import {Button} from "@/components"

const fields = [
  {
    name: "name",
    label: "Role name ",
    placeholder: "(ADMIN)",
    required : true,
    minlength  : 3,
    maxlength: 30,
    type : "text"
  },
  {
    name: "description",
    label: "Role description",
    placeholder: "Describe role",
    type: "textarea",
    minlength  : 10,
    maxlength: 200,
  },
]

export const metadata = {
  title: "Edit role",
  description: "Edit role desc...",
}

type Props = {
  params: {
    id: string
  }
}

export default async function Script({ params }: Props) {
  const role = await db.role.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!role) {
    return notFound()
  }

  const defaultValues = role


  return (
    <DashboardShell>
      <DashboardHeader heading="Edit Role" text="Edit Roles desc" > <Link href={`/admin/dashboard/roles`}>  <Button variant="outline">View roles table</Button>
        </Link> </DashboardHeader>
      <div className="grid gap-10">
        <Form
          as="modal"
          endpoint="/role"
          method="PATCH"
          redirect="/admin/dashboard/roles"
          fields={fields}
          defaultValues={defaultValues}
          actions={[
            {name : "submit" , text  : "Edit and save"}
          ]}
          // schema={validations}
        />
      </div>
    </DashboardShell>
  )
}
