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

const ThisWeekGeneralEnter = () => {
    const [allUser, setAllUsers] = useState([]);
    const [thisWeekGeneralChartData, setThisWeekGeneralChartData] = useState({
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
                prepareThisWeekGeneralChartData(users); // Focus on this week's General count
            } else if (dataResponse.error) {
                toast.error(dataResponse.message);
            }
        } catch (error) {
            toast.error('Failed to fetch users. Please try again later.');
        }
    };

    // Prepare chart data for this week's general user count
    const prepareThisWeekGeneralChartData = (users) => {
        // Get the start and end of the current week
        const startOfWeek = moment().startOf('week'); // Start of the week (Monday)
        const endOfWeek = moment().endOf('week');     // End of the week (Sunday)

        // Filter general users created/updated this week
        const thisWeekGeneralCount = users.filter(user => {
            const userDate = user.createdAt || user.updatedAt; // Use 'createdAt' or 'updatedAt'

            // Check if the date is within the current week
            return (
                user.role && 
                user.role.toLowerCase() === 'general' && 
                moment(userDate).isBetween(startOfWeek, endOfWeek, 'day', '[]') // Inclusive of start and end
            );
        }).length;

        // Log for debugging
        console.log("This Week's General User Count:", thisWeekGeneralCount); // Check if the count is correct

        // Set the chart data
        setThisWeekGeneralChartData({
            labels: ["This Week's General Users"],
            datasets: [
                {
                    label: "This Week's General Users",
                    data: [thisWeekGeneralCount],
                    backgroundColor: ['rgba(153, 102, 255, 0.6)'],
                    borderColor: ['rgba(153, 102, 255, 1)'],
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
            <h2 className="text-lg font-bold text-gray-700 mb-4">This Week's General User Overview</h2>

            {/* Chart showing the this week's general user count */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
                <div>
                    {/* Display the Pie chart */}
                    <Pie data={thisWeekGeneralChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </div>
        </section>
    );
};

export default ThisWeekGeneralEnter;
