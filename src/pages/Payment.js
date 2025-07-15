import React, { useState } from "react";
import {
  FaBars,
  FaUserCircle,
  FaChartBar,
  FaUsers,
  FaBox,
  FaSignOutAlt,
  FaFileExcel,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import AllUsers from "./AllUsers";
import Button from "./Button";
import Excel from "./Excel";
import Enter from "./Enter";
import TotalAdmin from "./TotalAdmin";
import Chart from "./Chart";
import HeaderNew from "../components/HeaderNew";
import Header from "../components/Header";
import MainTable from "./MainTable";
import SurveyTable from "./SurveyTable";
import DataMain from "./DataMain";
import DataSurvey from "./DataSurvey";
import DataUser from "./DataUser";
import MainUploadButton from "./MainUploadButton";
import HeaderNewExcutive from "../components/HeaderNewExcutive";
import HeaderExcutive from "../components/HeaderExcutive";
import HeaderNew2 from "../components/HeaderNew2";
import Header2 from "../components/Header2";
import Fastible from "./Fastible";
import Fastible2 from "./Fastible2";

const Payment = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [modal, setModal] = useState(null);
  const sendWhatsAppMessage = () => {
    if (!name.trim() || !mobile.trim()) {
      alert("Please fill in all details before sending.");
      return;
    }

    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, '0')}-${
      (today.getMonth() + 1).toString().padStart(2, '0')
    }-${today.getFullYear()}`;

    const whatsappNumber = "9311870970";
    const message = `Dear ${name},\n\nI hope you are doing well.\n\nThis is to inform you that I have successfully made a payment of ₹60,000 on ${formattedDate}. Please find the payment details below:\n\n*Customer Name:* ${name}\n*Mobile No.:* ${mobile}\n*Amount Paid:* ₹60,000\n*Payment Date:* ${formattedDate}\n\nThe payment has been processed successfully. If you need any further details, please let me know.\n\nBest regards,\n*Softwares Infotech Pvt. Ltd.*\ninfo@softwaresinfotech.com\n+91 9311870970`;
    
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  const downloadExcel = () => {
    alert("Excel download triggered!");
  };

  const searchTable = () => {
    console.log("Search triggered");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Header2 />
      <HeaderNew2 />
      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-60 w-full">
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-lg text-center animate-fadeIn">
        <h2 className="text-2xl font-bold text-gray-800">Secure Payment</h2>
        <p className="text-gray-600 mt-2">Scan the QR code below to complete your payment.</p>
        <p className="font-bold text-lg mt-2">₹5000 per month | ₹60,000 for 1 year</p>
        <img src="/qr2.png" alt="QR Code" className="w-48 h-48 mx-auto my-4 rounded-lg shadow-lg" />
        <a href="/qr2.png" download="payments.png" className="block w-full bg-blue-600 text-white py-2 rounded-lg mt-2 hover:bg-blue-700">Download QR Code</a>
        
        <h3 className="text-lg font-semibold text-gray-700 mt-6">Enter Your Details</h3>
        <div className="mt-3 text-left">
          <label className="block text-gray-700 font-medium">Full Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border-2 border-gray-300 rounded mt-1 focus:border-blue-500" placeholder="Enter your name" />
        </div>
        <div className="mt-3 text-left">
          <label className="block text-gray-700 font-medium">Mobile No.:</label>
          <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full p-2 border-2 border-gray-300 rounded mt-1 focus:border-blue-500" placeholder="Enter your mobile no." pattern="[0-9]{10}" />
        </div>
        <button onClick={sendWhatsAppMessage} className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700">Send Details via WhatsApp</button>
        
        <div className="mt-4 text-sm text-gray-600">
          <button onClick={() => setModal("privacy")} className="text-blue-600 hover:underline">Privacy Policy</button> | 
          <button onClick={() => setModal("refund")} className="text-blue-600 hover:underline ml-2">Refund & Cancellation Policy</button>
        </div>
      </div>
      
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">{modal === "privacy" ? "Privacy Policy" : "Refund & Cancellation Policy"}</h3>
            <p className="text-gray-600 mt-2">
              {modal === "privacy"
                ? "We collect user data only for processing payments. Your information is kept confidential."
                : "Orders can be canceled within 24 hours for a full refund. No refunds after 24 hours."}
            </p>
            <button onClick={() => setModal(null)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Close</button>
          </div>
        </div>
      )}
    </div>
       
      </main>
    </div>
  );
};

export default Payment;
