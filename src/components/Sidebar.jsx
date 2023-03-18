import React, { useState } from "react";
import { FaHome, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ isHidden, setIsHidden }) => {
  // const [isHidden, setIsHidden] = useState(true);
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-screen  w-48 bg-gray-800 text-white flex flex-col justify-between  ${
        isHidden ? "hidden" : "block"
      }`}
    >
      <div className="">
        <div className="border border-lime-300 flex justify-around py-3">
          <h1 className="font-bold text-xl">Home</h1>
          <button
            className="btn-xs btn btn-primary btn-circle hover:bg-white"
            onClick={() => setIsHidden(!isHidden)}
          >
            X
          </button>
        </div>
        <a
          href="#"
          className="block  text-gray-400 hover:text-white hover:bg-black mt-2 active:scale-95 transition-transform ease-linear"
        >
          <div className="flex px-2  py-3">
            <FaHome size={20} />
            <p className="ml-4">Home</p>
          </div>
        </a>
        <a
          href="#"
          className="block  text-gray-400 hover:text-white hover:bg-black mt-2 active:scale-95 transition-transform ease-linear"
        >
          <div className="flex px-2  py-3">
            <FaCog size={20} />
            <p className="ml-4">settings</p>
          </div>
        </a>
      </div>
      <div className="mb-4">
        <a
          href="#"
          className="block  text-gray-400 hover:text-white hover:bg-black mt-2 active:scale-95 transition-transform ease-linear"
        >
          <div className="flex px-2  py-3 ">
            <FaSignOutAlt size={20} />
            <p className="ml-4">logout</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
