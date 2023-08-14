"use client"

import { User } from "@prisma/client"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "User ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  // {
  //   accessorKey: "phone",
  //   header: "Phone",
  // },
  {
    accessorKey: "Role.name",
    header: "Role",
    cell: ({ row }) => (
      <span
        className={`inline-block rounded-sm px-2 py-1 text-xs ${
          row.original.Role.name === "RSSI"
            ? "text-white bg-purple-700"
            : row.original.Role.name === "ADMIN"
            ? "bg-yellow-500 text-white"
            : row.original.Role.name === "DIRECTOR_GENERAL"
            ? "bg-green-500 text-white"
            : row.original.Role.name === "CHEF_DEPARTMENT"
             ? "bg-pink-500 text-white"
            : row.original.Role.name === "TECHNICIAN"
            ? "bg-blue-500 text-white"
            :"text-white bg-gray-700"
        }`}
      >
        {row.original.Role.name}
      </span>
    ),
  },
  {
    accessorKey: "Department.name",
    header: "Department",
  },
  {
    accessorKey: "Position.name",
    header: "Position",
  },
  // {
  //   accessorKey: "emailVerified",
  //   header: "Email Verified",
  //   cell: ({ row }) => <span>{row.original.emailVerified ? "Yes" : "No"}</span>,
  // },
  // {
  //   accessorKey: "birthdate",
  //   header: "Birthdate",
  //   cell: ({ row }) => (
  //     <span>
  //       {row.original.birthdate
  //         ? new Date(row.original.birthdate).toLocaleDateString()
  //         : ""}
  //     </span>
  //   ),
  // },
  // {
  //   accessorKey: "gender",
  //   header: "Gender",
  // },
  // {
  //   accessorKey: "status",
  //   header: "Status",
  // },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
