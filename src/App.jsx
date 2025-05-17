import React from "react";
import Layout from "./Components/layout/Layout";
import { DDRTable } from "./features/DDRTable";
// import DDRTable from "./Components/table/DDRTable";

const App = () => {
  return (
    <Layout>
      <DDRTable />
    </Layout>
  );
};

export default App;
