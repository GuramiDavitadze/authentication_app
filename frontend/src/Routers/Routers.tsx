import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "src/hooks/AuthHooks";
import MainLayout from "src/layouts/MainLayout/MainLayout";
import Login from "src/pages/authentication/Login/Login";
import Signup from "src/pages/authentication/Signup/Signup";
import Home from "src/pages/Home/Home";
import Profile from "src/pages/Profile/Profile";

const Routers = () => {
  const { isAuth } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={isAuth ? <Profile /> : <Navigate to="/login" />}
        />
      </Route>
    </Routes>
  );
};

export default Routers;
