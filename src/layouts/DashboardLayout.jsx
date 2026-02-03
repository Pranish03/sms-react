import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ navItems }) => {
  return (
    <div className="flex">
      <Sidebar items={navItems} />

      <Outlet />
    </div>
  );
};

export default DashboardLayout;
