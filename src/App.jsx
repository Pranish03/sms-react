import { Route, Routes } from "react-router-dom";

import RequireRole from "./components/RequireRole";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import ManageTeacher from "./pages/admin/ManageTeacher";
import ManageUser from "./pages/admin/ManageUser";
import Assignments from "./pages/student/Assignments";
import Courses from "./pages/student/Courses";
import ManageAttendance from "./pages/teacher/ManageAttendance";
import { adminRoutes, studentRoutes, teacherRoutes } from "./utils/routes";

function App() {
  const userRole = "admin";

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
      <Route path="signup" element={<Signup />} />

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
