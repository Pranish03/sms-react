import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import { adminRoutes, studentRoutes, teacherRoutes } from "./utils/routes";
import RequireRole from "./components/RequireRole";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import ManageTeacher from "./pages/admin/ManageTeacher";
import ManageStudent from "./pages/admin/ManageStudent";
import Assignments from "./pages/student/Assignments";
import Courses from "./pages/student/Courses";
import ManageAttendance from "./pages/teacher/ManageAttendance";
import AdminDashboard from "./pages/admin";
import TeacherDashboard from "./pages/teacher";
import StudentDashboard from "./pages/student";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";
import RequireGuest from "./components/RequireGuest";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/me", {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch (err) {
        console.log(err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg font-medium">Checking authentication…</p>
      </div>
    );
  }

  const userRole = user?.role;

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

      <Route element={<RequireGuest user={user} />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route element={<RequireAuth user={user} />}>
        <Route path="dashboard" element={<DashboardLayout navItems={routes} />}>
          {/* Admin */}
          <Route
            path="admin"
            element={
              <RequireRole allowedRoles={["admin"]} userRole={userRole} />
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="students" element={<ManageStudent />} />
            <Route path="teachers" element={<ManageTeacher />} />
          </Route>

          {/* Teacher */}
          <Route
            path="teacher"
            element={
              <RequireRole allowedRoles={["teacher"]} userRole={userRole} />
            }
          >
            <Route index element={<TeacherDashboard />} />
            <Route path="attendance" element={<ManageAttendance />} />
          </Route>

          {/* Student */}
          <Route
            path="student"
            element={
              <RequireRole allowedRoles={["student"]} userRole={userRole} />
            }
          >
            <Route index element={<StudentDashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="assignments" element={<Assignments />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
