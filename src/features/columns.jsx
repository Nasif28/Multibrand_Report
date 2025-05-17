import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(val) => table.toggleAllPageRowsSelected(!!val)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(val) => row.toggleSelected(!!val)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "slNo",
    header: "SL No",
    meta: {
      label: "SL No",
      placeholder: "Search SL...",
      variant: "text",
    },
  },
  {
    accessorKey: "dueDays",
    header: "Due Days",
    meta: {
      label: "Due Days",
      placeholder: "Search days...",
      variant: "text",
    },
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
    meta: {
      label: "Customer Name",
      placeholder: "Search customer...",
      variant: "text",
    },
  },
  {
    accessorKey: "vehicleModel",
    header: "Model",
    meta: {
      label: "Model",
      placeholder: "Search model...",
      variant: "text",
    },
  },
  {
    accessorKey: "billWithVAT",
    header: "Bill",
    meta: {
      label: "Bill",
      placeholder: "Search bill...",
      variant: "text",
    },
  },
  {
    accessorKey: "balanceDue",
    header: "Balance Due",
    meta: {
      label: "Balance Due",
      placeholder: "Search balance...",
      variant: "text",
    },
  },
  {
    accessorKey: "customerStatus",
    header: "Status",
    cell: ({ cell }) => (
      <Badge
        variant="outline"
        className={
          cell.getValue() === "Green" ? "text-green-600" : "text-red-600"
        }
      >
        {cell.getValue()}
      </Badge>
    ),
    meta: {
      label: "Status",
      variant: "multiSelect",
      options: [
        { label: "Green", value: "Green" },
        { label: "Red", value: "Red" },
      ],
    },
  },
  {
    id: "actions",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
