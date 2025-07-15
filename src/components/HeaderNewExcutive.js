import React, { useState } from 'react';
import {
    FaBars,
    FaUserCircle,
    FaChartBar,
    FaUsers,
    FaBox,
    FaSignOutAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assest/logo.png'
import { FaClipboardList } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoCreateOutline } from "react-icons/io5";
import { TbUsersPlus } from "react-icons/tb";








const HeaderNewExcutive = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`fixed top-[60px] pt-3 left-0 h-full w-60 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0`}
            >
                <div className="h-32 flex justify-center items-center flex-col border-b">
                    <img src={logo} className="h-[50px] w-[50px]" />
                    <p className="capitalize text-lg font-semibold mt-2">Krishan Ghloat</p>
                    <p className="text-sm text-gray-400">Administrator role Mr. Excutive</p>
                </div>
                <nav className="mt-4">
                    {/* <Link
                        to="/admin-panel/dashboard"
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
                    <Link
                        to="/surveypage"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
                    >
                        <IoCreateOutline className="inline mr-2" /> Manage Survey
                    </Link>
                    <Link
                        to="/users"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
                    >
                        <TbUsersPlus  className="inline mr-2" /> Manage Users
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
                    </Link> */}
                    <Link
                        to="/excutive"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
                    >
                        <IoCreateOutline className="inline mr-2" /> Excutive
                    </Link>
                    
                </nav>
            </aside>

            {/* Navbar */}
            <nav className="bg-white p-4 shadow-md flex justify-between items-center fixed w-full top-0 left-0 z-10">
                <button
                    onClick={toggleSidebar}
                    className="text-gray-600 p-1 mr-2 text-xl md:hidden focus:outline-none"
                >
                    <FaBars />
                </button>

                {/* Profile Icon on Desktop Right */}
                <div className="flex items-center gap-4 ml-auto">
                    <div className="flex items-center gap-2">
                        <span className="flag-icon flag-icon-in text-lg"></span>
                        <span className="flag-icon flag-icon-us text-lg"></span>
                    </div>
                    <div className="relative group">
                        <FaUserCircle className="text-3xl text-gray-500 cursor-pointer" />
                        {/* Dropdown (Optional) */}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
        </div>
    );
};

export default HeaderNewExcutive;
