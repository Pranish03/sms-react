import { Navigate, Outlet } from "react-router-dom";

const RequireRole = ({ allowedRoles, userRole }) => {
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RequireRole;
