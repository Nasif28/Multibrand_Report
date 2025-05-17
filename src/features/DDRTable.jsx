"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useDataTable } from "@/hooks/use-data-table";
import { DataTable } from "@/components/data-table";
import { DataTableToolbar } from "@/components/data-table-toolbar";
import { columns } from "./columns";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";

export function DDRTable() {
  const [rawData, setRawData] = useState([]);

  const [customerName] = useQueryState("customer", parseAsString.withDefault(""));
  const [status] = useQueryState(
    "status",
    parseAsArrayOf(parseAsString).withDefault([])
  );

  useEffect(() => {
    fetch("/src/ddr_data.json")
      .then((res) => res.json())
      .then(setRawData);
  }, []);

  const filteredData = useMemo(() => {
    return rawData.filter((row) => {
      const nameMatch =
        customerName === "" ||
        row.customerName.toLowerCase().includes(customerName.toLowerCase());
      const statusMatch =
        status.length === 0 || status.includes(row.customerStatus);
      return nameMatch && statusMatch;
    });
  }, [rawData, customerName, status]);

  const { table } = useDataTable({
    data: filteredData,
    columns,
    pageCount: 1,
    getRowId: (row) => row.slNo,
    initialState: {
      columnPinning: { right: ["actions"] },
    },
  });

  return (
    <div className="data-table-container">
      <DataTable table={table}>
        <DataTableToolbar table={table} />
      </DataTable>
    </div>
  );
}
