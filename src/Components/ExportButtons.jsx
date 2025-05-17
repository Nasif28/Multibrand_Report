import React from 'react';
import { exportToExcel, exportToPDF } from '../utils/exportUtils';

export default function ExportButtons({ data }) {
  return (
    <div className="flex gap-4 mb-4 justify-end">
      <button onClick={() => window.print()} className="bg-blue-600 text-white px-4 py-2 rounded">Print</button>
      <button onClick={() => exportToExcel(data, 'DDR_Report')} className="bg-green-600 text-white px-4 py-2 rounded">Excel</button>
      <button onClick={() => exportToPDF("report-table")} className="bg-red-600 text-white px-4 py-2 rounded">PDF</button>
    </div>
  );
}
