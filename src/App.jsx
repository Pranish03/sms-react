import { Route, Routes } from "react-router-dom";

import RequireRole from "./components/RequireRole";
import { adminRoutes, studentRoutes, teacherRoutes } from "./utils/routes";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import ManageUser from "./pages/admin/ManageUser";
import ManageTeacher from "./pages/admin/ManageTeacher";
import ManageAttendance from "./pages/teacher/ManageAttendance";
import Courses from "./pages/student/Courses";
import Assignments from "./pages/student/Assignments";

function App() {
  const userRole = "student";

  const routes =
    userRole === "admin"
      ? adminRoutes
      : userRole === "teacher"
        ? teacherRoutes
        : studentRoutes;

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="signin" element={<SignIn />} />

      <Route path="dashboard" element={<DashboardLayout navItems={routes} />}>
        <Route index element={<Dashboard />} />

        {
          // Admin Routes
        }
        <Route
          path="admin"
          element={<RequireRole allowedRoles={["admin"]} userRole={userRole} />}
        >
          <Route path="users" element={<ManageUser />} />
          <Route path="teachers" element={<ManageTeacher />} />
        </Route>

        {
          // Teacher Routes
        }
        <Route
          path="teacher"
          element={
            <RequireRole allowedRoles={["teacher"]} userRole={userRole} />
          }
        >
          <Route path="attendance" element={<ManageAttendance />} />
        </Route>

        {
          // Student Routes
        }
        <Route
          path="student"
          element={
            <RequireRole allowedRoles={["student"]} userRole={userRole} />
          }
        >
          <Route path="courses" element={<Courses />} />
          <Route path="assignments" element={<Assignments />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
