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

const TodayGeneralEnter = () => {
    const [allUser, setAllUsers] = useState([]);
    const [todayGeneralChartData, setTodayGeneralChartData] = useState({
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
                prepareTodayGeneralChartData(users); // Focus on Today's General user count
            } else if (dataResponse.error) {
                toast.error(dataResponse.message);
            }
        } catch (error) {
            toast.error('Failed to fetch users. Please try again later.');
        }
    };

    // Prepare chart data for today's general user count
    const prepareTodayGeneralChartData = (users) => {
        // Get today's date in YYYY-MM-DD format
        const todayDate = moment().format('YYYY-MM-DD');

        // Filter general users created/updated today
        const todayGeneralCount = users.filter(user => {
            const userDate = user.createdAt || user.updatedAt; // Use 'createdAt' or 'updatedAt'
            
            // Ensure date comparison ignores time
            const formattedUserDate = moment(userDate).format('YYYY-MM-DD');
            
            return user.role && user.role.toLowerCase() === 'general' && formattedUserDate === todayDate;
        }).length;

        // Log for debugging
        console.log("Today's General User Count:", todayGeneralCount); // Check if the count is correct

        // Set the chart data
        setTodayGeneralChartData({
            labels: ["Today's General Users"],
            datasets: [
                {
                    label: "Today's General Users",
                    data: [todayGeneralCount],
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
            <h2 className="text-lg font-bold text-gray-700 mb-4">Today's General User Overview</h2>

            {/* Chart showing today's general user count */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
                <div>
                    {/* Display the Pie chart */}
                    <Pie data={todayGeneralChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </div>
        </section>
    );
};

export default TodayGeneralEnter;
