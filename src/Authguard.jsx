import { Navigate } from "react-router-dom";

const AuthGuard = ({ children, requireAuth }) => {
  const token = localStorage.getItem("auth_token");

  if (requireAuth && !token) return <Navigate to="/login" replace />;
  if (!requireAuth && token) return <Navigate to="/dashboard" replace />;

  return children;
};

export default AuthGuard;
