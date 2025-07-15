import React, { useState } from 'react';
import loginIcons from '../assest/signin.gif';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import { IoIosArrowBack } from "react-icons/io";


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file);
    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(SummaryApi.signUP.url, {
        method: SummaryApi.signUP.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/users");
      }

      if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } else {
      toast.error("Please check password and confirm password");
    }
  };

  return (
    <>
    <Header />
    <section id="signup" className="flex pt-[60px] justify-center items-center min-h-screen p-4 bg-gray-50">
  <div className="w-full  max-w-4xl bg-white shadow-md rounded-md p-6 md:flex md:gap-6 ">
    <div className="flex flex-col items-center md:w-1/3">
      <img
        src={data.profilePic || loginIcons}
        alt="login icon"
        className="w-24 h-24 rounded-full object-cover mb-4 md:w-32 md:h-32"
      />
      <form>
        <label className="block text-center">
          <span className="text-sm text-gray-600">Hi, Welcome</span>
          {/* <input
            type="file"
            onChange={handleUploadPic}
            className="block mt-2 text-xs md:text-sm text-gray-500"
          /> */}
        </label>
      </form>
    </div>

    <form
      className="pt-6 flex flex-col gap-4 md:w-2/3"
      onSubmit={handleSubmit}
    >
      <div className="grid">
        <label className="text-gray-700 text-sm md:text-base">Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={data.name}
          onChange={handleOnChange}
          required
          className="mt-1 p-2 border rounded-md w-full text-sm md:text-base"
        />
      </div>

      <div className="grid">
        <label className="text-gray-700 text-sm md:text-base">Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={data.email}
          onChange={handleOnChange}
          required
          className="mt-1 p-2 border rounded-md w-full text-sm md:text-base"
        />
      </div>

      <div className="grid">
        <label className="text-gray-700 text-sm md:text-base">Password:</label>
        <div className="flex items-center border rounded-md">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            name="password"
            value={data.password}
            onChange={handleOnChange}
            required
            className="flex-1 p-2 outline-none text-sm md:text-base"
          />
          <button
            type="button"
            className="p-2"
            onClick={() => setShowPassword((preve) => !preve)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      <div className="grid">
        <label className="text-gray-700 text-sm md:text-base">Confirm Password:</label>
        <div className="flex items-center border rounded-md">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleOnChange}
            required
            className="flex-1 p-2 outline-none text-sm md:text-base"
          />
          <button
            type="button"
            className="p-2"
            onClick={() => setShowConfirmPassword((preve) => !preve)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md self-center mt-6 text-sm md:text-base"
      >
        Sign Up
      </button>
      <Link to="/users" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
  <IoIosArrowBack className="mr-2 text-lg" />
  <span>Back to User Page</span>
</Link>

      
    </form>
  </div>
  
</section>
    
    </>
   

  );
};

export default SignUp;
