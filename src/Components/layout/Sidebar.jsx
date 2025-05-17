import React from 'react';

export default function Sidebar({ collapsed, toggle }) {
  return (
    <div className={`bg-gray-800 text-white h-screen transition-all ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 flex justify-between items-center">
        {!collapsed && <h1 className="text-lg">DDR Report</h1>}
        <button onClick={toggle}>☰</button>
      </div>
    </div>
  );
}
