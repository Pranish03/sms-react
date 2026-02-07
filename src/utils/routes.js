export const adminRoutes = [
  { path: "/dashboard/admin", label: "Dashboard" },
  { path: "/dashboard/admin/students", label: "Students" },
  { path: "/dashboard/admin/teachers", label: "Teachers" },
];

export const teacherRoutes = [
  { path: "/dashboard/teacher", label: "Dashboard" },
  {
    path: "/dashboard/teacher/attendance",
    label: "Manage Attendance",
  },
  {
    path: "/dashboard/teacher/attendance",
    label: "Publish Assignments",
  },
  {
    path: "/dashboard/teacher/attendance",
    label: "Publish Materials",
  },
];

export const studentRoutes = [
  { path: "/dashboard/student", label: "Dashboard" },
  { path: "/dashboard/student/courses", label: "Courses" },
  { path: "/dashboard/student/assignments", label: "Assignments" },
];
