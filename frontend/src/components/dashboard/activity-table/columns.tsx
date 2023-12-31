"use client"

import { ColumnDef } from "@tanstack/react-table"
import RemoveButton from "./remove-button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Activity = {
  id: string
  description: string
  date: Date
  value: number
  type: "expense" | "revenue"
}

export const columns: ColumnDef<Activity>[] = [
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row }) => {
      const aDate = new Date(row.getValue("date"));
      const formatedDate = `${aDate.getDate()}/${aDate.getMonth()}/${aDate.getFullYear()}`;
      return <p>{formatedDate}</p>
    }
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "value",
    header: "Valor",
    cell: ({ row }) => {
      const aValue = row.getValue("value") as number;
      const type = row.getValue("type");

      const formatedValue = aValue.toLocaleString("pt-Br",
      {minimumFractionDigits: 2, maximumFractionDigits: 2 });

      const valueClass = (type === "revenue") ? "text-emerald-500" : "text-red-500";

      return <p className={valueClass}>R$ {formatedValue}</p>

    }
  },
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const id = row.original.id;

      return <RemoveButton id={id}/>
    }
  }
]
