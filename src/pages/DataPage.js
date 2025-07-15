import React, { useState } from 'react';
import {
    FaBars,
    FaUserCircle,
    FaChartBar,
    FaUsers,
    FaBox,
    FaSignOutAlt,
    FaFileExcel,
    FaSearch,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AllUsers from './AllUsers';
import Button from './Button';
import Excel from './Excel';
import Enter from './Enter';
import TotalAdmin from './TotalAdmin';
import Chart from './Chart';
import HeaderNew from '../components/HeaderNew';
import Header from '../components/Header';
import MainTable from './MainTable';
import SurveyTable from './SurveyTable';
import DataMain from './DataMain';
import DataSurvey from './DataSurvey';
import DataUser from './DataUser';
import MainEditButton from '../components/MainEditButton';
import MainUploadButton from './MainUploadButton';

const DataPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const downloadExcel = () => {
        alert('Excel download triggered!');
    };

    const searchTable = () => {
        console.log('Search triggered');
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
                </section>
                
                <MainUploadButton />
                

                
                <DataMain />
                
               {/* 3 */}

                <Link to='/sign-up'>
                <section className="pl-6 pt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    
                    <div className="rounded-md flex items-center gap-4">
                        <Button />
                    </div>
                    
                </section>
                
                </Link>
                

                {/* Content Sections */}
                <DataUser />
                
            </main>
        </div>
    );
};

export default DataPage;
