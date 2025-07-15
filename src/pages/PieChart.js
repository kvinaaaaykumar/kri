import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [allUser, setAllUsers] = useState([]);
  const [roleStats, setRoleStats] = useState({ general: { today: 0, total: 0 }, admin: { today: 0, total: 0 } });

  const fetchAllUsers = async () => {
    try {
      const fetchData = await fetch(SummaryApi.allUser.url, {
        method: SummaryApi.allUser.method,
        credentials: "include",
      });

      const dataResponse = await fetchData.json();

      if (dataResponse.success) {
        setAllUsers(dataResponse.data);

        // Calculate role-based stats
        calculateRoleStats(dataResponse.data);
      } else if (dataResponse.error) {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      toast.error("Failed to fetch users. Please try again later.");
    }
  };

  const calculateRoleStats = (users) => {
    const todayDate = moment().startOf("day");
    const stats = { general: { today: 0, total: 0 }, admin: { today: 0, total: 0 } };

    users.forEach((user) => {
      if (user.role === "general") {
        stats.general.total++;
        if (moment(user.createdAt).isSame(todayDate, "day")) {
          stats.general.today++;
        }
      } else if (user.role === "admin") {
        stats.admin.total++;
        if (moment(user.createdAt).isSame(todayDate, "day")) {
          stats.admin.today++;
        }
      }
    });

    setRoleStats(stats);
  };

  // Prepare data for General Pie Chart
  const generalPieChartData = {
    labels: ["Today", "Total"],
    datasets: [
      {
        label: "General User Stats",
        data: [roleStats.general.today, roleStats.general.total],
        backgroundColor: ["#1f77b4", "#ff7f0e"],
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for Admin Pie Chart
  const adminPieChartData = {
    labels: ["Today", "Total"],
    datasets: [
      {
        label: "Admin Stats",
        data: [roleStats.admin.today, roleStats.admin.total],
        backgroundColor: ["#2ca02c", "#d62728"],
        borderWidth: 1,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-lg font-bold text-gray-700 mb-4">User Statistics</h2>

      {/* General User Pie Chart */}
      <div className="mb-8">
        <h3       className="bg-white p-6 shadow-md rounded-md flex items-center gap-4 hover:shadow-xl transition-shadow duration-300"
        >
          General User Distribution (Pie Chart)
        </h3>
        <div className="bg-white p-4 shadow-md rounded-md">
          <Pie data={generalPieChartData} options={pieChartOptions} />
        </div>
      </div>

      {/* Admin User Pie Chart */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Admin Distribution (Pie Chart)
        </h3>
        <div className="bg-white p-4 shadow-md rounded-md">
          <Pie data={adminPieChartData} options={pieChartOptions} />
        </div>
      </div>
    </section>
  );
};

export default PieChart;
