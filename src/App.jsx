import React from "react";
import Layout from "./Components/layout/Layout";
// import { DDRTable } from "./features/DDRTable";
import DDRTable from "./Components/table/DDRTable";
import DueReportTable from "./MUI/DueReportTable";
import DataGridReport from "./MUI/MUIDataGrid";

const App = () => {
  return (
    <Layout>
      {/* <DDRTable /> */}
      <DataGridReport />
    </Layout>
  );
};

export default App;
