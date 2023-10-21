import { word } from "@/helpers"
import Form from "../../../_components/form"
import prisma from "@/lib/db"
import { DashboardShell } from "@/components/shell"
import { DashboardHeader } from "@/components/header"

export default async function Users() {
  const directions = await prisma.direction.findMany()
  const departments = await prisma.department.findMany()
  const positions = await prisma.position.findMany()
  const roles = await prisma.role.findMany()

  if (!directions || !departments) {
    return <div>No data</div>
  }

  const fields = [
    {
      name: "name",
      label: "Direction name",
      placeholder: "IT",
    },
    { name: "description", label: "Description", placeholder: "Describe direction" },
    
    
  ]

  const defaultValues = {
    role_id: "64ca1113c03be8a709c309d5",
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Add Direction"
        text=" "
      />
      <div className="grid gap-10">
        <Form
          as="form"
          endpoint="/direction"
          redirect="/admin/dashboard/users"
          fields={fields}
          // schema={createUserSchema}
          defaultValues={defaultValues}
          // onAction={onAction}
          actions={[
            {
              name: "submit",
              text: "create direction",
            },
          ]}
        />
      </div>
    </DashboardShell>
  )
}
