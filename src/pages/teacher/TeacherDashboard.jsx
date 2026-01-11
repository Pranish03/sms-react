import DashboardLayout from "../../layouts/DashboardLayout";

const TeacherDashboard = () => {
  const sidebarItems = [{ path: "/dashboard/attendence", label: "Attendence" }];

  return (
    <DashboardLayout sidebarItems={sidebarItems}>
      Teacher dashboard
    </DashboardLayout>
  );
};

export default TeacherDashboard;
