import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dark from "./DarkBtn";
import Sidebar from "./Sidebar";

const NavItem = () => {
  return (
    <>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/blog">blog</Link>
      </li>
    </>
  );
};
const NavBar = ({ isHidden, setIsHidden }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-black text-white p-4  ">
      {/* <Sidebar /> */}
      <div className="container mx-auto flex relative">
        <div>
          <button
            className="px-2  rounded-md bg-slate-500 block md:hidden  active:scale-90 "
            onClick={() => setIsHidden(!isHidden)}
          >
            =
          </button>
        </div>
        <Link to="/" className="ml-auto md:ml-0">
          Home
        </Link>
        <ul className="md:flex ml-auto gap-8 hidden">{<NavItem />}</ul>
        <div className="ml-auto ">
          <Dark />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
