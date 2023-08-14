"use client"
import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { format } from "date-fns" // Import the date formatting function

export type Inventory = {
  id: string;
  name: string;
  type: string;
  category: string;
  item: string;
  responsible: string;
  status: string;
  installation_date?: string; // Make it optional
  // ... other fields ...
  created_at: string;
  updated_at: string;
};

export const columns: ColumnDef<Inventory>[] = [
  {
    accessorKey: "id",
    header: "Inventory ID",
    cell: ({ row }) => (
      <span style={{maxWidth : "100px"}}>
        {row.original.id.substring(0 ,10)}...
      </span>
    ),
  },
  {
    accessorKey: "name",
    header:"Item Name" ,

  },
  {
    accessorKey: "type",
    header:"Type" ,

  },
  {
    accessorKey: "category",
    header:"Category" ,
  },
  {
    accessorKey: "item",
    header:"Item" ,
  },
  // {
  //   accessorKey: "status",
  //   header:"Status" ,
  // },
  {
    accessorKey: "installation_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Installation Date" />
    ),
    cell: ({ row }) => (
      <span>
        {row.original.installation_date
          ? format(new Date(row.original.installation_date), "yyyy-MM-dd")
          : ""}
      </span>
    ),
  },
  // ... other columns ...
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
