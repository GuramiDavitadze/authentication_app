import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import Navbar from "src/components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="content-body">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
