import { Badge } from "../ui/badge";


export const columns = [
  {
    accessorKey: "slNo",
    header: "SL",
  },
  {
    accessorKey: "dueDays",
    header: "Due Days",
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "vehicleModel",
    header: "Vehicle Model",
  },
  {
    accessorKey: "billWithVAT",
    header: "Bill With VAT",
  },
  {
    accessorKey: "balanceDue",
    header: "Balance Due",
  },
  {
    accessorKey: "customerStatus",
    header: "Status",
    cell: ({ cell }) => <Badge variant="outline">{cell.getValue()}</Badge>,
  },
];
