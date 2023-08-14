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
    label: "Full Name",
    placeholder: "Enter your full name",
    required : true,
    minlength  : 3,
    maxlength: 30,
    type : "text"
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Email",
    type : "email" , 
    minlength  : 10,
    maxlength: 200,
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "+215 23 456 789",
  },
]

export const metadata = {
  title: "Edit user",
  description: "Edit user desc...",
}

type Props = {
  params: {
    id: string
  }
}

export default async function Script({ params }: Props) {
  const user = await db.user.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!user) {
    return notFound()
  }

  const defaultValues = user


  return (
    <DashboardShell>
      <DashboardHeader heading="Edit user" text="Edit users desc" > <Link href={`/admin/dashboard/users`}>  <Button variant="outline">View users table</Button>
        </Link> </DashboardHeader>
      <div className="grid gap-10">
        <Form
          as="modal"
          endpoint="/users"
          method="PATCH"
          redirect="/admin/dashboard/users"
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
