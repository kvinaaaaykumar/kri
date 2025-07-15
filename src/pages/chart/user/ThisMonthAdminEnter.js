import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import SummaryApi from '../../../common';
import { toast } from 'react-toastify';
import moment from 'moment';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ThisMonthAdminEnter = () => {
    const [allUser, setAllUsers] = useState([]);
    const [thisMonthAdminChartData, setThisMonthAdminChartData] = useState({
        labels: [],
        datasets: []
    });

    // Fetch all users and process the data
    const fetchAllUsers = async () => {
        try {
            const fetchData = await fetch(SummaryApi.allUser.url, {
                method: SummaryApi.allUser.method,
                credentials: 'include'
            });

            const dataResponse = await fetchData.json();

            if (dataResponse.success) {
                const users = dataResponse.data;
                setAllUsers(users);
                prepareThisMonthAdminChartData(users); // Focus on this month's Admin count
            } else if (dataResponse.error) {
                toast.error(dataResponse.message);
            }
        } catch (error) {
            toast.error('Failed to fetch users. Please try again later.');
        }
    };

    // Prepare chart data for this month's admin count
    const prepareThisMonthAdminChartData = (users) => {
        // Get the start and end of the current month
        const startOfMonth = moment().startOf('month');
        const endOfMonth = moment().endOf('month');

        // Filter admins created/updated this month
        const thisMonthAdminCount = users.filter(user => {
            const userDate = user.createdAt || user.updatedAt; // Use 'createdAt' or 'updatedAt'

            // Check if the date is within the current month
            return (
                user.role && 
                user.role.toLowerCase() === 'admin' && 
                moment(userDate).isBetween(startOfMonth, endOfMonth, 'day', '[]') // Inclusive of start and end
            );
        }).length;

        // Log for debugging
        console.log("This Month's Admin Count:", thisMonthAdminCount); // Check if the count is correct

        // Set the chart data
        setThisMonthAdminChartData({
            labels: ["This Month's Admins"],
            datasets: [
                {
                    label: "This Month's Admins",
                    data: [thisMonthAdminCount],
                    backgroundColor: ['rgba(54, 162, 235, 0.6)'],
                    borderColor: ['rgba(54, 162, 235, 1)'],
                    borderWidth: 1
                }
            ]
        });
    };

    // Fetch users on component mount
    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <section className="p-6">
            <h2 className="text-lg font-bold text-gray-700 mb-4">This Month's Admin Overview</h2>

            {/* Chart showing the this month's admin count */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
                <div>
                    {/* Display the Pie chart */}
                    <Pie data={thisMonthAdminChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </div>
        </section>
    );
};

export default ThisMonthAdminEnter;
