import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import data from "../ddr_data.json";
import { useState } from "react";

const columns = [
  { field: "slNo", headerName: "SL", width: 40 },
  { field: "dueDays", headerName: "Due Days", width: 80 },
  { field: "concernPerson", headerName: "Concern Person", width: 80 },
  { field: "accountHolder", headerName: "Account Holder", width: 100 },
  { field: "customerStatus", headerName: "Status", width: 80 },
  { field: "date", headerName: "Date", width: 100 },
  { field: "idNo", headerName: "ID No", width: 80 },
  { field: "billNo", headerName: "Bill No", width: 100 },
  { field: "regNo", headerName: "Reg No", width: 100 },
  { field: "vehicleModel", headerName: "Model", width: 100 },
  { field: "customerName", headerName: "Customer", width: 100 },
  { field: "customerType", headerName: "Type", width: 80 },
  { field: "address", headerName: "Address", width: 100 },
  { field: "billWithVAT", headerName: "Bill (VAT)", width: 80 },
  { field: "billAfterDiscount", headerName: "Bill (Discounted)", width: 80 },
  { field: "allReceived", headerName: "All Received", width: 80 },
  { field: "balanceDue", headerName: "Due", width: 80 },
  { field: "receivedCheque", headerName: "Cheque", width: 50 },
  { field: "ownerMobile", headerName: "Owner Mobile", width: 100 },
  { field: "driverMobile", headerName: "Driver Mobile", width: 100 },
];

export default function DataGridDemo() {
  //   const [loading, setLoading] = useState(true);
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <DataGrid
        {...data}
        // loading={loading}
        // loading
        // slotProps={{
        //   loadingOverlay: {
        //     variant: "skeleton",
        //     noRowsVariant: "skeleton",
        //   },
        // }}
        showToolbar
        rows={data}
        columns={columns}
        getRowId={(data) => data.slNo}
        initialState={{
          density: "compact", // standard, compact, comfortable
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 25, 50, { value: -1, label: "All" }]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
