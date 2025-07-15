import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import { MdModeEdit } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import ChangeUserRole2 from "../components/ChangeUserRole2";
import { FaUsers, FaBox, FaChartBar, FaUserCircle, FaClipboardList } from "react-icons/fa";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";

const DownloadMain = () => {
  const [allUser, setAllUsers] = useState([]);
  const [roleStats, setRoleStats] = useState({});
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    brandName: "",
    category: "",
  });

  const fetchAllUsers = async () => {
    try {
      const fetchData = await fetch(SummaryApi.allProduct.url, {
        method: SummaryApi.allProduct.method,
        credentials: "include",
      });

      const dataResponse = await fetchData.json();

      if (dataResponse.success) {
        setAllUsers(dataResponse.data);
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
    const stats = {};

    users.forEach((user) => {
      const role = user.role;
      if (!stats[role]) {
        stats[role] = { today: 0, total: 0 };
      }
      stats[role].total++;
      if (moment(user.createdAt).isSame(todayDate, "day")) {
        stats[role].today++;
      }
    });
    setRoleStats(stats);
  };

  const downloadExcel = () => {
    const dataForExcel = allUser.map((user, index) => ({
      Sr: index + 1,
      Name: user.productName,
      Gender: user.brandName,
      MobileNo: user.price,
      Address: user.brandName2,
      Purpose: user.category,
      BookingDate: moment(user.date).format("DD/MM/YYYY"),
      Other: user.sellingPrice,
      CreatedBy: user.description,
      CreatedDate: moment(user.createdAt).format("DD/MM/YYYY hh:mm A"),
    }));

    const ws = XLSX.utils.json_to_sheet(dataForExcel);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    XLSX.writeFile(wb, "UsersData.xlsx");
  };

  useEffect(() => {
    fetchAllUsers(); // Fetch on initial render

    const interval = setInterval(() => {
      fetchAllUsers(); // Auto-refresh every 5 seconds
    }, 500);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Download Administrator</h2>
      {/* <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {Object.entries(roleStats).map(([role, stats]) => (
          <div key={role} className="bg-white p-6 shadow-md rounded-md flex items-center gap-4 hover:shadow-xl transition-shadow duration-300">
            {role === "users" && <FaUsers className="text-4xl text-blue-500" />}
            {role === "products" && <FaBox className="text-4xl text-green-500" />}
            {role === "reports" && <FaChartBar className="text-4xl text-purple-500" />}
            {role === "admins" && <FaUserCircle className="text-4xl text-red-500" />}
            {!["users", "products", "reports", "admins"].includes(role) && <FaClipboardList className="text-4xl text-purple-500" />}
            <div>
              <p className="text-lg font-semibold text-gray-800">{stats.today}</p>
              <p className="text-sm text-gray-500 capitalize"> (Today)</p>
              <p className="text-lg font-semibold text-gray-800">{stats.total}</p>
              <p className="text-sm text-gray-500 capitalize"> (Total)</p>
            </div>
          </div>
        ))}
      </section>

      <h2 className="text-lg font-bold text-gray-700 mb-4">Recent Activities</h2>
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="py-3 px-4">Sr.</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Purpose</th>
              <th className="py-3 px-4">Booking Date</th>
              <th className="py-3 px-4">Created By</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((el, index) => (
              <tr key={el._id}>
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{el?.productName}</td>
                <td className="py-3 px-4">{el?.category}</td>
                <td className="py-3 px-4">{moment(el?.date).format("DD/MM/YYYY")}</td>
                <td className="py-3 px-4">{el?.description} created on {moment(el?.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                <td className="py-3 px-4">
                  <Link to={'/productview'}>
                  <button className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white">
                    <MdModeEdit />
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {openUpdateRole && (
        <ChangeUserRole2
          onClose={() => setOpenUpdateRole(false)}
          name={updateUserDetails.name}
          email={updateUserDetails.email}
          role={updateUserDetails.role}
          userId={updateUserDetails._id}
          callFunc={fetchAllUsers}
        />
      )}
      <div className="pt-6">
        <button onClick={downloadExcel} className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 mb-4">
          Download Data as Excel
        </button>
      </div>
    </section>
  );
};

export default DownloadMain;
