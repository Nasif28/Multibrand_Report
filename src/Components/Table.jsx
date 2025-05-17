import React, { useState, useEffect } from 'react';
import ExportButtons from './ExportButtons';
import Filters from './Filters';

export default function Table() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ customer: '', type: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    fetch('/src/ddr_data.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  const filtered = data.filter(item => {
    return (
      item.customerName.toLowerCase().includes(filters.customer.toLowerCase()) &&
      (filters.type === '' || item.customerType === filters.type)
    );
  });

  const paginated = filtered.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <>
      <Filters filters={filters} setFilters={setFilters} />
      <ExportButtons data={filtered} />
      <div className="overflow-x-auto" id="report-table">
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">SL</th>
              <th className="p-2 border">Due Days</th>
              <th className="p-2 border">Customer</th>
              <th className="p-2 border">Model</th>
              <th className="p-2 border">Bill</th>
              <th className="p-2 border">Balance Due</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-2 border">{item.slNo}</td>
                <td className="p-2 border">{item.dueDays}</td>
                <td className="p-2 border">{item.customerName}</td>
                <td className="p-2 border">{item.vehicleModel}</td>
                <td className="p-2 border">{item.billWithVAT}</td>
                <td className="p-2 border">{item.balanceDue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p>Page {currentPage}</p>
        <div className="flex gap-2">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Prev</button>
          <button disabled={currentPage * rowsPerPage >= filtered.length} onClick={() => setCurrentPage(p => p + 1)}>Next</button>
        </div>
      </div>
    </>
  );
}
