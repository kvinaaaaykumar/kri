import React, { useState } from "react";
import {
  FaBars,
  FaUserCircle,
  FaChartBar,
  FaUsers,
  FaBox,
  FaSignOutAlt,
  FaFileExcel,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import AllUsers from "./AllUsers";
import Button from "./Button";
import Excel from "./Excel";
import Enter from "./Enter";
import TotalAdmin from "./TotalAdmin";
import Chart from "./Chart";
import HeaderNew from "../components/HeaderNew";
import Header from "../components/Header";
import MainTable from "./MainTable";
import SurveyTable from "./SurveyTable";
import DataMain from "./DataMain";
import DataSurvey from "./DataSurvey";
import DataUser from "./DataUser";
import MainUploadButton from "./MainUploadButton";
import Fastible from "./Fastible";

const CreatePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const downloadExcel = () => {
    alert("Excel download triggered!");
  };

  const searchTable = () => {
    console.log("Search triggered");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Header />
      <HeaderNew />
      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-60 w-full">
        {/* Navbar */}

        {/* 1 */}
        <section className="pl-6 pt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="rounded-md flex items-center gap-4"></div>
        </section>
        <MainUploadButton />

        <section className="pl-6 pt-6">
          <h2 className="text-lg font-bold text-gray-700 mb-4">
            Create Administrator
          </h2>
        </section>

        {/* 3 */}

        <Link to="/sign-up">
          <div className="flex bg-gray-100 pt-4">
            <div className=" ml-6">
              <h2 className="font-bold text-lg"></h2>
              <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 transition-all ">
                <MdAdd className="mr-2 text-xl" />
                Create Entry
              </button>
            </div>
          </div>
        </Link>

        {/* Content Sections */}
        <section className="pl-6 pt-6">
          <h2 className="text-lg font-bold text-gray-700 mb-4">Create Users</h2>
        </section>
        <Fastible />
      </main>
    </div>
  );
};

export default CreatePage;
