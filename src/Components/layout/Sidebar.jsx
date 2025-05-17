import React from "react";

export default function Sidebar({ collapsed, toggle }) {
  return (
    <aside
      className={`bg-gray-800 text-white transition-all ${
        collapsed ? "w-16" : "w-64"
      } h-screen`}
    >
      <div className="p-4 flex justify-between">
        {!collapsed && <h1 className="text-lg font-bold">DDR</h1>}
        <button onClick={toggle}>☰</button>
      </div>
    </aside>
  );
}
