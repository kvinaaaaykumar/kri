import React, { useState } from "react";
import {
  FaBars,
  FaUserCircle,
  FaChartBar,
  FaUsers,
  FaBox,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import HeaderClose from "./HeaderClose";
import logo from "../assest/logo.png";
import { FaClipboardList } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoCreateOutline } from "react-icons/io5";
import { TbUsersPlus } from "react-icons/tb";

const CloseNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed top-[60px] w-full pt-3 left-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out  translate-x-0 md:translate-x-0">
        <div className="h-32 flex justify-center items-center flex-col border-b">
          <img src={logo} className="h-[50px] w-[50px]" />
          <p className="capitalize text-lg font-semibold mt-2">
            Krishan Ghloat
          </p>
          <p className="text-sm text-gray-400">Administrator role Mr. Admin</p>        </div>
        <nav className="mt-4">
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <FaChartBar className="inline mr-2" /> Dashboard
          </Link>
          <Link
            to="/home"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <FaUsers className="inline mr-2" /> Manage Administrator
          </Link>
          {/* <Link
                                to="/surveypage"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
                            >
                                <IoCreateOutline className="inline mr-2" /> Manage Survey
                            </Link> */}
          <Link
            to="/users"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <TbUsersPlus className="inline mr-2" /> Manage Users
          </Link>
          <Link
            to="/table"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <FaClipboardList className="inline mr-2" /> Table
          </Link>
          <Link
            to="/data"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <FaDatabase className="inline mr-2" /> Data
          </Link>
          <Link
            to="/createpage"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <MdCreateNewFolder className="inline mr-2" /> Create
          </Link>
          <Link
            to="/chartpage"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <FaChartPie className="inline mr-2" /> Chart
          </Link>
          <Link
            to="/downloadpage"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <FaDownload className="inline mr-2" /> Download Excel
          </Link>
          <Link
            to="/excutive"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <IoCreateOutline className="inline mr-2" /> Excutive
          </Link>
        </nav>
      </aside>

      <HeaderClose />

      {/* Main Content */}
    </div>
  );
};

export default CloseNavbar;
