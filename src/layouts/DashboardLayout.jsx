import { Helmet } from "react-helmet";

import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ sidebarItems, children }) => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <div className="flex">
        <Sidebar items={sidebarItems} />

        <main>{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
