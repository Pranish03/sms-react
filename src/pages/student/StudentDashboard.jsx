import DashboardLayout from "../../layouts/DashboardLayout";

const StudentDashboard = () => {
  const sidebarItems = [
    { path: "/student/courses", label: "Courses" },
    { path: "/student/assignments", label: "Assignments" },
  ];

  return (
    <DashboardLayout sidebarItems={sidebarItems}>
      Student dashboard
    </DashboardLayout>
  );
};

export default StudentDashboard;
