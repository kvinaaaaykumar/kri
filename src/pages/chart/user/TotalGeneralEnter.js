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

const TotalGeneralEnter = () => {
    const [allUser, setAllUsers] = useState([]);
    const [roleChartData, setRoleChartData] = useState({
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
                prepareTotalGeneralChartData(users);  // Focus on Total General count
            } else if (dataResponse.error) {
                toast.error(dataResponse.message);
            }
        } catch (error) {
            toast.error('Failed to fetch users. Please try again later.');
        }
    };

    // Prepare chart data for total general count
    const prepareTotalGeneralChartData = (users) => {
        // Filter users where the role is 'general'
        const generalCount = users.filter(user => user.role && user.role.toLowerCase() === 'general').length;

        // Log for debugging
        console.log("Filtered General Count:", generalCount);  // Check if the count is correct

        // Set the chart data
        setRoleChartData({
            labels: ["Total General Users"],
            datasets: [
                {
                    label: 'Total General Users',
                    data: [generalCount],
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
            <h2 className="text-lg font-bold text-gray-700 mb-4">Total General User Overview</h2>

            {/* Chart showing the total general count */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
                <div>
                    {/* Display the Pie chart */}
                    <Pie data={roleChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </div>
        </section>
    );
};

export default TotalGeneralEnter;
