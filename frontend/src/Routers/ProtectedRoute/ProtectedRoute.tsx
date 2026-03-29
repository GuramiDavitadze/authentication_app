import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "src/hooks/AuthHooks";
const ProtectedRoute = () => {
  const { isAuth, isLoading } = useAuthContext();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
