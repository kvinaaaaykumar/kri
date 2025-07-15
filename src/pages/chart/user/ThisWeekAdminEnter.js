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

const ThisWeekAdminEnter = () => {
    const [allUser, setAllUsers] = useState([]);
    const [thisWeekAdminChartData, setThisWeekAdminChartData] = useState({
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
                prepareThisWeekAdminChartData(users); // Focus on this week's Admin count
            } else if (dataResponse.error) {
                toast.error(dataResponse.message);
            }
        } catch (error) {
            toast.error('Failed to fetch users. Please try again later.');
        }
    };

    // Prepare chart data for this week's admin count
    const prepareThisWeekAdminChartData = (users) => {
        // Get the start and end of the current week
        const startOfWeek = moment().startOf('week'); // Start of the week (Monday)
        const endOfWeek = moment().endOf('week');     // End of the week (Sunday)

        // Filter admins created/updated this week
        const thisWeekAdminCount = users.filter(user => {
            const userDate = user.createdAt || user.updatedAt; // Use 'createdAt' or 'updatedAt'

            // Check if the date is within the current week
            return (
                user.role && 
                user.role.toLowerCase() === 'admin' && 
                moment(userDate).isBetween(startOfWeek, endOfWeek, 'day', '[]') // Inclusive of start and end
            );
        }).length;

        // Log for debugging
        console.log("This Week's Admin Count:", thisWeekAdminCount); // Check if the count is correct

        // Set the chart data
        setThisWeekAdminChartData({
            labels: ["This Week's Admins"],
            datasets: [
                {
                    label: "This Week's Admins",
                    data: [thisWeekAdminCount],
                    backgroundColor: ['rgba(75, 192, 192, 0.6)'],
                    borderColor: ['rgba(75, 192, 192, 1)'],
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
            <h2 className="text-lg font-bold text-gray-700 mb-4">This Week's Admin Overview</h2>

            {/* Chart showing the this week's admin count */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
                <div>
                    {/* Display the Pie chart */}
                    <Pie data={thisWeekAdminChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </div>
        </section>
    );
};

export default ThisWeekAdminEnter;
