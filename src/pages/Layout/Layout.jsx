import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";

const Layout = () => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="dark:text-white dark:bg-slate-800 bg-gray-300 text-black min-h-screen">
      <NavBar isHidden={isHidden} setIsHidden={setIsHidden} />
      <Sidebar isHidden={isHidden} setIsHidden={setIsHidden} />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
