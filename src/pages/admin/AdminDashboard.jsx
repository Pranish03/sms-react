import DashboardLayout from "../../layouts/DashboardLayout";

const AdminDashboard = () => {
  const sidebarItems = [
    { path: "/dashboard/users", label: "Users" },
    { path: "/dashboard/teachers", label: "Teachers" },
  ];

  return (
    <DashboardLayout sidebarItems={sidebarItems}>
      <div>Admin dashboard</div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
