import { Route, Routes } from "react-router-dom";
import MainLayout from "src/layouts/MainLayout/MainLayout";
import Login from "src/pages/authentication/Login/Login";
import Signup from "src/pages/authentication/Signup/Signup";
import Home from "src/pages/Home/Home";
import Profile from "src/pages/Profile/Profile";
import AuthProtectedRoute, {
  NoAuthProtectedRoute,
} from "./ProtectedRoute/ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route element={<NoAuthProtectedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<AuthProtectedRoute />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routers;
