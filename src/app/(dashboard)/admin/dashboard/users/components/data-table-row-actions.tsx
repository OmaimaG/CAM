"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import toast from "react-hot-toast"
import api from "@/lib/axios"
import { useRouter } from "next/navigation"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  // Assuming User data has an 'id' field to uniquely identify each user
  const userId = row.original.id
  const router  = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {/* User Management Actions */}
        <Link href={`/admin/dashboard/users/${userId}`}>
          <DropdownMenuItem>View User Details</DropdownMenuItem>
        </Link>
        <Link href={`/admin/dashboard/users/edit/${userId}`}>
          <DropdownMenuItem>Edit User</DropdownMenuItem>
        </Link>
        {/* Uncomment these when implementing Assign Roles and other user management actions */}
        {/* <DropdownMenuItem>Assign Roles</DropdownMenuItem>
        <DropdownMenuItem>Other User Management Action</DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={(async () => {
          const confirm = window.confirm("Are you sure you want to delete this user")
          if(confirm) {
            try {
              const resourceId = row.original.id;
              await api.delete(`/users/${resourceId}`);
              toast.success("user was successfully deleted")
              window.location.reload();
            } catch (error) {
              toast.error("Error deleting user")
            }
          }else{
            return toast("Cancel")
          }

        })}>Delete User</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
