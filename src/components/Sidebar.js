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

const Sidebar = () => {
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
                    <FaUserCircle className="text-6xl text-gray-500" />
                    <p className="capitalize text-lg font-semibold mt-2">Admin Name</p>
                    <p className="text-sm text-gray-400">Administrator</p>
                </div>
                <nav className="mt-4">
                    <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
                    >
                        <FaChartBar className="inline mr-2" /> Dashboard
                    </Link>
                    <Link
                        to="/users"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
                    >
                        <FaUsers className="inline mr-2" /> Manage Users 
                    </Link>
                    <Link
                        to="/products"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
                    >
                        <FaBox className="inline mr-2" /> Manage Products
                    </Link>
                    <Link
                        to="/logout"
                        className="block px-4 py-2 text-red-600 hover:bg-red-100 rounded-md"
                    >
                        <FaSignOutAlt className="inline mr-2" /> Logout
                    </Link>
                </nav>
            </aside>

           

        </div>
    );
};

export default Sidebar;
