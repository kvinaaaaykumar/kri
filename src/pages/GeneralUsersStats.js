import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaUsers, FaClipboardList } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend);

const GeneralUsersStats = () => {
  const [generalStats, setGeneralStats] = useState({});
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [], backgroundColor: [] }],
  });

  const fetchGeneralUsers = async () => {
    try {
      const response = await fetch(SummaryApi.allUser.url, {
        method: SummaryApi.allUser.method,
        credentials: "include",
      });
      const data = await response.json();

      if (data.success && Array.isArray(data.data)) {
        filterGeneralStats(data.data);
      } else {
        setGeneralStats({});
        toast.error("No general users found.");
      }
    } catch (error) {
      toast.error("Error fetching general users.");
    }
  };

  const filterGeneralStats = (users) => {
    const today = moment().startOf("day");
    const stats = {};

    users
      .filter((user) => user.role === "user") // Filter general users
      .forEach((user) => {
        if (!stats["general"]) stats["general"] = { today: 0, total: 0 };

        stats["general"].total++;
        if (moment(user.createdAt).isSame(today, "day")) {
          stats["general"].today++;
        }
      });

    setGeneralStats(stats);

    setChartData({
      labels: ["General Users"],
      datasets: [
        {
          data: [stats["general"]?.total || 0],
          backgroundColor: ["#4CAF50"],
        },
      ],
    });
  };

  useEffect(() => {
    fetchGeneralUsers();
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-lg font-bold mb-4 text-gray-700">General User Statistics</h2>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {Object.entries(generalStats).map(([role, stats]) => (
          <div key={role} className="bg-white p-6 rounded-md shadow-md flex items-center gap-4">
            <FaUsers className="text-4xl text-blue-500" />
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
        <h3 className="text-md font-bold mb-4">General User Distribution</h3>
        <Pie data={chartData} />
      </div>
    </section>
  );
};

export default GeneralUsersStats;
