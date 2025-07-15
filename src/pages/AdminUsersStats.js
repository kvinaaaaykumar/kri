import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaUserCircle, FaClipboardList } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminUsersStats = () => {
  const [adminStats, setAdminStats] = useState({});
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [], backgroundColor: [] }],
  });

  const fetchAdminUsers = async () => {
    try {
      const response = await fetch(SummaryApi.allUser.url, {
        method: SummaryApi.allUser.method,
        credentials: "include",
      });
      const data = await response.json();

      if (data.success && Array.isArray(data.data)) {
        filterAdminStats(data.data);
      } else {
        setAdminStats({});
        toast.error("No admin users found.");
      }
    } catch (error) {
      toast.error("Error fetching admin users.");
    }
  };

  const filterAdminStats = (users) => {
    const today = moment().startOf("day");
    const stats = {};

    users
      .filter((user) => user.role === "admin") // Filter admin users
      .forEach((user) => {
        if (!stats["admin"]) stats["admin"] = { today: 0, total: 0 };

        stats["admin"].total++;
        if (moment(user.createdAt).isSame(today, "day")) {
          stats["admin"].today++;
        }
      });

    setAdminStats(stats);

    setChartData({
      labels: ["Admin Users"],
      datasets: [
        {
          data: [stats["admin"]?.total || 0],
          backgroundColor: ["#F44336"],
        },
      ],
    });
  };

  useEffect(() => {
    fetchAdminUsers();
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-lg font-bold mb-4 text-gray-700">Admin User Statistics</h2>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {Object.entries(adminStats).map(([role, stats]) => (
          <div key={role} className="bg-white p-6 rounded-md shadow-md flex items-center gap-4">
            <FaUserCircle className="text-4xl text-red-500" />
            <div>
              <p className="text-lg font-semibold">{stats.today}</p>
              <p className="text-sm text-gray-500">{role} (Today)</p>
              <p className="text-lg font-semibold">{stats.total}</p>
              <p className="text-sm text-gray-500">{role} (Total)</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-md font-bold mb-4">Admin User Distribution</h3>
        <Pie data={chartData} />
      </div>
    </section>
  );
};

export default AdminUsersStats;
