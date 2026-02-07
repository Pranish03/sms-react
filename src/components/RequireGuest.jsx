import { Navigate, Outlet } from "react-router-dom";

const RequireGuest = ({ user }) => {
  if (user) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default RequireGuest;
