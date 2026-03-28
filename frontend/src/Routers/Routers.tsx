import { Route, Routes } from "react-router-dom";
import MainLayout from "src/layouts/MainLayout/MainLayout";
import AuthLayout from "src/pages/authentication/Layouts/AuthLayout";
import Login from "src/pages/authentication/Login/Login";
import Signup from "src/pages/authentication/Signup/Signup";
import Home from "src/pages/Home/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default Routers;
