"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import api from "@/lib/axios"
import toast from "react-hot-toast"
import  { useRouter } from "next/router"
import { UserPlus } from "lucide-react"

// import { taskSchema } from "../data/schema"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  //   const task = taskSchema.parse(row.original)

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
        {/* Role Management Actions */}
        <Link href={`/admin/dashboard/roles/${row.original.id}`}>
          <DropdownMenuItem>View Role Details</DropdownMenuItem>
        </Link>
        <Link href={`/admin/dashboard/users/${row.original.created_by_id}`}>
          <DropdownMenuItem>View Role Creator</DropdownMenuItem>
        </Link>
        <Link href={`/admin/dashboard/roles/edit/${row.original.id}`}>
          <DropdownMenuItem>Edit Role</DropdownMenuItem>
        </Link>
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Assign role to</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {row.original.users.map((user :{ email : string  , id: string}) => {
                  return <DropdownMenuItem key={user.id} onClick={
                    async () => {
                      try {
                        const resourceId = row.original.id;
                        await api.put(`/role/assign` , {
                          role_id : resourceId ,
                          user_id : user.id
                        });
                        toast.success("role was successfully add it")
                        window.location.reload();
                      } catch (error) {
                        toast.error("Error when assign role")
                      }
                    }
                  }>
                            <span>{user.email}</span>
                        </DropdownMenuItem>
                })}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        {/* <DropdownMenuItem>Assign Permissions</DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={(async () => {
          const confirm = window.confirm("Are you sure you want to delete this role")
          if(confirm) {
            try {
              const resourceId = row.original.id;
              await api.delete(`/role/${resourceId}`);
              toast.success("role was successfully deleted")
              window.location.reload();
            } catch (error) {
              toast.error("Error deleting role")
            }
          }else{
            return toast("Cancel")
          }

        })}>Delete Role</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
