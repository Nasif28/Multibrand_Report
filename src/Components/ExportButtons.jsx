import React from "react";
import { exportToExcel, exportToPDF } from "../utils/exportUtils";

export default function ExportButtons({ data }) {
  return (
    <div className="flex gap-4 my-4 justify-end">
      <button
        onClick={() => window.print()}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Print
      </button>
      <button
        onClick={() => exportToExcel(data, "DDR_Report")}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Export Excel
      </button>
      <button
        onClick={() => exportToPDF("table-container")}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Export PDF
      </button>
    </div>
  );
}
