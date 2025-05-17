import React, { useState } from "react";
import DueReportTable from "./MUI/DueReportTable";
import DataGridDemo from "./MUI/MUIDataGrid";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          collapsed={collapsed}
          toggle={() => setCollapsed(!collapsed)}
        />
        <div className="flex-1 flex flex-col overflow-y-auto">
          <Topbar />
          <main className="p-4">
            <Dashboard />
          </main>
        </div>
      </div>
      {/* <DueReportTable /> */}
      {/* <DataGridDemo /> */}
      App
    </div>
  );
};

export default App;
