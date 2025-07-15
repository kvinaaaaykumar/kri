import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import moment from 'moment';
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';
import * as XLSX from 'xlsx'; // Import XLSX library

const DownloadUsers = () => {
    const [allUser, setAllUsers] = useState([]);
    const [openUpdateRole, setOpenUpdateRole] = useState(false);
    const [updateUserDetails, setUpdateUserDetails] = useState({
        email: "",
        name: "",
        role: "",
        _id: ""
    });

    const fetchAllUsers = async () => {
        try {
            const fetchData = await fetch(SummaryApi.allUser.url, {
                method: SummaryApi.allUser.method,
                credentials: 'include'
            });

            const dataResponse = await fetchData.json();

            if (dataResponse.success) {
                setAllUsers(dataResponse.data);
            } else if (dataResponse.error) {
                toast.error(dataResponse.message);
            }
        } catch (error) {
            toast.error('Failed to fetch users. Please try again later.');
        }
    };

    const handleDownloadExcel = () => {
        // Prepare data for Excel
        const excelData = allUser.map((user, index) => ({
            Sr: index + 1,
            Name: user.name,
            Email: user.email,
            Role: user.role,
            "Created Date": moment(user.createdAt).format('LL'),
        }));

        // Create a worksheet and workbook
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Users');

        // Generate and download Excel file
        XLSX.writeFile(wb, 'AllUsers.xlsx');
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <section className="p-6">
            <h2 className="text-lg font-bold text-gray-700 mb-4">Download Users</h2>
            <div className="mb-4">
                <button
                    className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 mb-4"
                    onClick={handleDownloadExcel}
                >
                    Download Data as Excel
                </button>
            </div>
            
            

            
        </section>
    );
};

export default DownloadUsers;
