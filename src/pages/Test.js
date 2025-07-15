import React from 'react';
import {
    FaUserCircle,
    FaChartBar,
    FaUsers,
    FaBox,
    FaSignOutAlt,
    FaFileExcel,
    FaSearch,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Test = () => {
    const downloadExcel = () => {
        // Add Excel download logic here
        alert('Excel download triggered!');
    };

    const searchTable = () => {
        // Add table search logic here
        console.log('Search triggered');
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="bg-white fixed top-0 left-0 h-screen w-60 shadow-lg">
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

            {/* Main Content */}
            <main className="ml-60 w-full">
                {/* Navbar */}
                <nav className="bg-white p-4 shadow-md flex justify-between items-center">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by name"
                            className="border rounded-md py-2 px-3 w-80"
                            onKeyUp={searchTable}
                        />
                        <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={downloadExcel} className="text-green-500 text-xl">
                            <FaFileExcel />
                        </button>
                        <div className="flex items-center gap-2">
                            <span className="flag-icon flag-icon-in text-lg"></span>
                            <span className="flag-icon flag-icon-us text-lg"></span>
                        </div>
                        <div className="relative group">
                            <FaUserCircle className="text-3xl text-gray-500 cursor-pointer" />
                            <div className="absolute right-0 bg-white shadow-lg rounded-md mt-2 hidden group-hover:block">
                                <div className="p-4 border-b">
                                    <img
                                        src="assets/img/profile.jpg"
                                        alt="Profile"
                                        className="w-16 h-16 rounded-full mx-auto"
                                    />
                                    <p className="text-center font-semibold mt-2">Sunny</p>
                                    <p className="text-center text-sm text-gray-500">sunny8393@gmail.com</p>
                                </div>
                                <ul>
                                    <li className="p-2 hover:bg-gray-100 cursor-pointer">My Profile</li>
                                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Dashboard Widgets */}
                <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 shadow-md rounded-md flex items-center gap-4">
                        <FaUsers className="text-4xl text-blue-500" />
                        <div>
                            <p className="text-lg font-semibold">120</p>
                            <p className="text-sm text-gray-500">Users</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-md flex items-center gap-4">
                        <FaBox className="text-4xl text-green-500" />
                        <div>
                            <p className="text-lg font-semibold">80</p>
                            <p className="text-sm text-gray-500">Products</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-md flex items-center gap-4">
                        <FaChartBar className="text-4xl text-purple-500" />
                        <div>
                            <p className="text-lg font-semibold">15</p>
                            <p className="text-sm text-gray-500">Reports</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-md flex items-center gap-4">
                        <FaUserCircle className="text-4xl text-red-500" />
                        <div>
                            <p className="text-lg font-semibold">5</p>
                            <p className="text-sm text-gray-500">Admins</p>
                        </div>
                    </div>
                </section>
                
                

                {/* Table */}
                <section className="p-6">
                    <h2 className="text-lg font-bold text-gray-700 mb-4">Recent Activities</h2>
                    <div className="bg-white shadow-md rounded-md overflow-hidden">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600">
                                    <th className="py-3 px-4">Name</th>
                                    <th className="py-3 px-4">Action</th>
                                    <th className="py-3 px-4">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-3 px-4">John Doe</td>
                                    <td className="py-3 px-4">Added a new product</td>
                                    <td className="py-3 px-4">12 Dec 2024</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4">Jane Smith</td>
                                    <td className="py-3 px-4">Updated user details</td>
                                    <td className="py-3 px-4">11 Dec 2024</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4">Alice Brown</td>
                                    <td className="py-3 px-4">Deleted a report</td>
                                    <td className="py-3 px-4">10 Dec 2024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Test;
