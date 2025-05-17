import React from "react";
import MUIDataTable from "mui-datatables";
import data from "./ddr_data.json";

const DueReportTable = () => {
  const columns = [
    {
      name: "slNo",
      label: "SL",
      options: {
        setCellProps: () => ({ style: { width: "40px" } }),
        setCellHeaderProps: () => ({ style: { width: "40px" } }),
      },
    },
    { name: "dueDays", label: "Due Days" },
    { name: "concernPerson", label: "Concern Person" },
    { name: "accountHolder", label: "Account Holder" },
    { name: "customerStatus", label: "Status" },
    { name: "date", label: "Date" },
    { name: "idNo", label: "ID No" },
    { name: "billNo", label: "Bill No" },
    { name: "regNo", label: "Reg No" },
    { name: "vehicleModel", label: "Model" },
    { name: "customerName", label: "Customer" },
    { name: "customerType", label: "Type" },
    { name: "address", label: "Address" },
    { name: "billWithVAT", label: "Bill (VAT)" },
    { name: "billAfterDiscount", label: "Bill (Discounted)" },
    { name: "allReceived", label: "All Received" },
    { name: "balanceDue", label: "Due" },
    { name: "receivedCheque", label: "Cheque" },
    { name: "ownerMobile", label: "Owner Mobile" },
    { name: "driverMobile", label: "Driver Mobile" },
  ];

  const options = {
    filterType: "dropdown",
    responsive: "standard",
    selectableRows: "none",
    download: true,
    print: true,
    search: true,
    rowsPerPage: 5,
    rowsPerPageOptions: [10, 100, 500],

    tableBodyMaxHeight: "70vh",

    customTableBodyCellProps: () => ({
      style: {
        fontSize: "11px",
        padding: "4px",
        whiteSpace: "nowrap",
      },
    }),
    customHeadCellProps: () => ({
      style: {
        fontSize: "11px",
        padding: "4px",
        whiteSpace: "nowrap",
      },
    }),
  };

  return (
    <>
      <MUIDataTable
        title={"ERP Due Report"}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default DueReportTable;




