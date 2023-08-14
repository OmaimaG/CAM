"use client"

import { ColumnDef } from "@tanstack/react-table"
import { useRouter } from "next/navigation"
import { toast } from "@/hooks/use-toast"
import { DataTableColumnHeader } from "./data-table-column-header"
export type Role = {
  id: string // Unique identifier for each role
  name: string // Descriptive name for the role, like "Admin," "Moderator," "User," etc.
  description: string // Brief description or explanation of the role's purpose and permissions
  permissions: string // Comma-separated list of permissions associated with the role
  created_at: string // Timestamp when the role was created in the system
  updated_at: string // Timestamp of the last update made to the role's information
  created_by: string // User or administrator who created the role
}

import { DataTableRowActions } from "./data-table-row-actions"


export const columns: ColumnDef<Role>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role ID" />
    ),
  },
  {
    accessorKey: "name",
    header: "Role Name",
    cell: ({ row }) => (
      <span
        className={`inline-block rounded-sm px-2 py-1 text-xs ${
          row.original.name === "RSSI"
            ? "text-white bg-purple-700"
            : row.original.name === "ADMIN"
            ? "bg-yellow-500 text-white"
            : row.original.name === "DIRECTOR_GENERAL"
            ? "bg-green-500 text-white"
            : row.original.name === "CHEF_DEPARTMENT"
             ? "bg-pink-500 text-white"
            : row.original.name === "TECHNICIAN"
            ? "bg-blue-500 text-white"
            :"text-white bg-gray-700"
        }`}
      >
        {row.original.name}
      </span>
    ),
  },
  {
    accessorKey: "description",
    header:"Description" ,
    enableHiding: true, // Enable hiding for this column
    cell: ({ row }) => {
      const desc = row.getValue("description")
      return (
          <span className="max-w-[100px] truncate font-medium">
            {desc?.length > 40 ? desc.substring(0 , 40) + "..." :desc}
          </span>
      )
    },
  },
  {
    accessorKey: "created_at",
    header: "Created Date",
    cell: ({ row }) => new Date(row.original.created_at).toLocaleDateString(),
  },
  {
    accessorKey: "updated_at",
    header: "Last Updated",
    cell: ({ row }) => new Date(row.original.updated_at).toLocaleDateString(),
  },
  // {
  //   accessorKey: "created_by_id",
  //   header: "Created By ID",
  // },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
