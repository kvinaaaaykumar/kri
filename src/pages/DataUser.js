import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from "../components/ChangeUserRole";
import { FaUsers, FaBox, FaChartBar, FaUserCircle, FaClipboardList } from "react-icons/fa";

const DataUser = () => {
  const [allUser, setAllUsers] = useState([]);
  const [roleStats, setRoleStats] = useState({});
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    _id: "",
  });

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

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Manage User</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
  {Object.entries(roleStats).map(([role, stats]) => (
    <div
      key={role}
      className="bg-white p-6 shadow-md rounded-md flex items-center gap-4 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Conditional Icons for Different Roles */}
      {role === "users" && <FaUsers className="text-4xl text-blue-500" />}
      {role === "products" && <FaBox className="text-4xl text-green-500" />}
      {role === "reports" && <FaChartBar className="text-4xl text-purple-500" />}
      {role === "admins" && <FaUserCircle className="text-4xl text-red-500" />}
      {!["users", "products", "reports", "admins"].includes(role) && (
        <FaClipboardList className="text-4xl text-purple-500" />
      )}

      {/* Data Display */}
      <div>
        <p className="text-lg font-semibold text-gray-800">{stats.today}</p>
        <p className="text-sm text-gray-500 capitalize">{role} (Today)</p>
        <p className="text-lg font-semibold text-gray-800">{stats.total}</p>
        <p className="text-sm text-gray-500 capitalize">{role} (Total)</p>
      </div>
    </div>
  ))}
</section>


      <h2 className="text-lg font-bold text-gray-700 mb-4">
        Recent Activities
      </h2>
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="py-3 px-4">Sr.</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Created Date</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((el, index) => (
              <tr key={el._id}>
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{el?.name}</td>
                <td className="py-3 px-4">{el?.email}</td>
                <td className="py-3 px-4">{el?.role}</td>
                <td className="py-3 px-4">
                  {moment(el?.createdAt).format("LL")}
                </td>
                <td className="py-3 px-4">
                  <button
                    className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white"
                    onClick={() => {
                      setUpdateUserDetails(el);
                      setOpenUpdateRole(true);
                    }}
                  >
                    <MdModeEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openUpdateRole && (
        <ChangeUserRole
          onClose={() => setOpenUpdateRole(false)}
          name={updateUserDetails.name}
          email={updateUserDetails.email}
          role={updateUserDetails.role}
          userId={updateUserDetails._id}
          callFunc={fetchAllUsers}
        />
      )}
    </section>
  );
};

export default DataUser;
