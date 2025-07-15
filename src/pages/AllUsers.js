import React, { useEffect, useState } from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from "../components/ChangeUserRole";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaBox, FaChartBar, FaUserCircle, FaUsers } from "react-icons/fa";
import { FaCalendarDay, FaCalendarWeek, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

const AllUsers = () => {
  const [allUser, setAllUsers] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    _id: "",
  });

  // Chart data states
  const [roleChartData, setRoleChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [totalUserChartData, setTotalUserChartData] = useState({
    labels: ["Total Users"],
    datasets: [],
  });

  // User count states
  const [todayUserCount, setTodayUserCount] = useState(0);
  const [weekUserCount, setWeekUserCount] = useState(0);
  const [monthUserCount, setMonthUserCount] = useState(0);
  const [totalUserCount, setTotalUserCount] = useState(0);

  const fetchAllUsers = async () => {
    try {
      const fetchData = await fetch(SummaryApi.allUser.url, {
        method: SummaryApi.allUser.method,
        credentials: "include",
      });

      const dataResponse = await fetchData.json();

      if (dataResponse.success) {
        const users = dataResponse.data;
        setAllUsers(users);
        prepareRoleChartData(users);
        prepareTotalUserChartData(users);
        calculateUserCounts(users);
      } else if (dataResponse.error) {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      toast.error("Failed to fetch users. Please try again later.");
    }
  };

  const prepareRoleChartData = (users) => {
    const roleCounts = users.reduce((acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(roleCounts);
    const data = Object.values(roleCounts);

    setRoleChartData({
      labels,
      datasets: [
        {
          label: "User Roles",
          data,
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  const prepareTotalUserChartData = (users) => {
    setTotalUserChartData({
      labels: ["Total Users"],
      datasets: [
        {
          label: "Total Users",
          data: [users.length],
          backgroundColor: ["rgba(153, 102, 255, 0.6)"],
          borderColor: ["rgba(153, 102, 255, 1)"],
          borderWidth: 1,
        },
      ],
    });
  };

  const calculateUserCounts = (users) => {
    const today = moment().startOf("day");
    const weekStart = moment().startOf("isoWeek");
    const monthStart = moment().startOf("month");

    let todayCount = 0;
    let weekCount = 0;
    let monthCount = 0;

    users.forEach((user) => {
      const userDate = moment(user.createdAt);

      if (userDate.isSameOrAfter(today)) {
        todayCount++;
      }

      if (userDate.isSameOrAfter(weekStart)) {
        weekCount++;
      }

      if (userDate.isSameOrAfter(monthStart)) {
        monthCount++;
      }
    });

    setTodayUserCount(todayCount);
    setWeekUserCount(weekCount);
    setMonthUserCount(monthCount);
    setTotalUserCount(users.length);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Manage Users</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
  <div className="bg-white p-6 shadow-md rounded-md flex items-center gap-4">
    <FaCalendarDay className="text-4xl text-blue-500" />
   

    
    <div>
      <p className="text-lg font-semibold">{todayUserCount}</p>
      <p className="text-sm text-gray-700">Today</p>
    </div>
    
  </div>
  <div className="bg-white p-6 shadow-md rounded-md flex items-center gap-4">
    <FaCalendarWeek className="text-4xl text-green-500" />
    
    <div>
      <p className="text-lg font-semibold">{weekUserCount}</p>
      <p className="text-sm text-gray-700">This Week</p>
    </div>
    
  </div>
  <div className="bg-white p-6 shadow-md rounded-md flex items-center gap-4">
    <FaCalendarAlt className="text-4xl text-purple-500" />

    
    <div>
      <p className="text-lg font-semibold">{monthUserCount}</p>
      <p className="text-sm text-gray-700">This Month</p>
    </div>
  </div>
  <div className="bg-white p-6 shadow-md rounded-md flex items-center gap-4">
    <FaClipboardList  className="text-4xl text-red-500" />

    
    <div>
      <p className="text-lg font-semibold">{totalUserCount}</p>
      <p className="text-sm text-gray-700">Total Users</p>
    </div>
  </div>
</div>
      <h2 className="text-lg font-bold text-gray-700 mb-4">
        User Roles Overview
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <Pie
            data={roleChartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
        <div>
          <Doughnut
            data={totalUserChartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>

      

      

      

      
    </section>
  );
};

export default AllUsers;
