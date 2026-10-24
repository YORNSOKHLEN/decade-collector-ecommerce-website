import { Navigate, Outlet } from "react-router-dom";
// Starter placeholder: replace with a server-verified authentication check.
export default function ProtectedRoute() {
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" replace />;
}