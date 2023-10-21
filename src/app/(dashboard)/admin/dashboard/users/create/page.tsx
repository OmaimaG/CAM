import { word } from "@/helpers"
import {Form} from "@/components"
import prisma from "@/lib/db"
import { DashboardShell } from "@/components/shell"
import { DashboardHeader } from "@/components/header"

export default async function Users() {
  const directions = await prisma.direction.findMany()
  const departments = await prisma.department.findMany()
  const positions = await prisma.position.findMany()
  const roles = await prisma.role.findMany()
  const admin_role_id = roles.find((role) => role.name === "ADMIN")?.id

  if (!directions || !departments) {
    return <div>No data</div>
  }

  const fields = [
    {
      name: "name",
      label: "Full Name",
      placeholder: "Full Name ",
    },
    { name: "email", label: "Email", placeholder: "example@domain.com" },
    {
      name: "phone",
      label: "Phone number",
      placeholder: "+216 ",
    },
    { name: "password", label: "Password", placeholder: "Enter a strong user password (12-Aa1)" ,  },
    {
      name: "direction_id",
      label: "Direction",
      placeholder: "--Select Direction--",
      type: "select",
      options: directions.map((d) => ({ label: word(d.name), value: d.id })),
    },
    {
      name: "department_id",
      label: "Department",
      placeholder: "--Select Department--",
      type: "select",
      options: departments.map((d) => ({ label: word(d.name), value: d.id })),
    },
    {
      name: "service",
      label: "Service",
      type: "text",
    },
    {
      name: "position_id",
      label: "Job position",
      placeholder: "--Job position--",
      type: "select",
      options: positions.map((d) => ({ label: word(d.name), value: d.id })),
    },
   
    {
      name: "role_id",
      label: "Role",
      type: "radio",
      options: roles.map((r) => ({ label: word(r.name), value: r.id })),
    },
  ]

  const defaultValues = {
    role_id: admin_role_id,
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Add User"
        text="Easily add new users to your organization with this user management dashboard."
      />
      <div className="grid gap-10">
        <Form
          as="form"
          endpoint="/users"
          redirect="/admin/dashboard/users"
          fields={fields}
          split={2}
          // schema={createUserSchema}
          defaultValues={defaultValues}
          // onAction={onAction}
          actions={[
            {
              name: "submit",
              text: "create account",
            },
          ]}
        />
      </div>
    </DashboardShell>
  )
}
