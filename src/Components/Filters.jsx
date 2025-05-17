import React from 'react';

export default function Filters({ filters, setFilters }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <input
        placeholder="Search Customer Name"
        className="p-2 border rounded"
        onChange={(e) => setFilters({ ...filters, customer: e.target.value })}
      />
      <select className="p-2 border rounded" onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
        <option value="">All Types</option>
        <option value="Corporate">Corporate</option>
        <option value="Personal">Personal</option>
      </select>
    </div>
  );
}
