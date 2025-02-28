"use client";

import { ColumnDef } from "@tanstack/react-table";
import { StoreSchema } from "../schemas/StoreSchema";

export const getColumns = (): ColumnDef<StoreSchema>[] => [
  {
    accessorKey: "id",
    header: "Store Num",
  },
  {
    accessorKey: "description",
    header: "Description",
    meta: {
      type: "text",
    },
  },
  {
    accessorKey: "isTemporarilyClosed",
    header: "Temporarily Closed",
    meta: {
      type: "checkbox",
    },
    cell: ({ row }) => {
      return row.original.isTemporarilyClosed ? "Yes" : "No";
    },
  },
  {
    accessorKey: "isOnlineOrder",
    header: "Online Order",
    meta: {
      type: "checkbox",
    },
  },
];
