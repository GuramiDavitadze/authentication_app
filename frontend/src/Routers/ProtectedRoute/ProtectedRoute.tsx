import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "src/hooks/AuthHooks";
const AuthProtectedRoute = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export const NoAuthProtectedRoute = () => {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
export default AuthProtectedRoute;
