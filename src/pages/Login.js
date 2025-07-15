import React, { useContext, useState } from 'react';
import loginIcons from '../assest/signin.gif';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => {
            return {
                ...prev,
                [name]: value
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataResponse = await fetch(SummaryApi.signIn.url, {
            method: SummaryApi.signIn.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const dataApi = await dataResponse.json();

        if (dataApi.success) {
            toast.success(dataApi.message);
            navigate('/excutive');
            fetchUserDetails();
            fetchUserAddToCart();
        }

        if (dataApi.error) {
            toast.error(dataApi.message);
        }

    };

    console.log("data login", data);

    return (
<section id='login' className='flex items-center justify-center min-h-screen '>
            <div className='bg-white p-8 w-full max-w-md shadow-lg rounded-lg'>
                <div className='w-20 h-20 mx-auto mb-6'>
                    <img src={loginIcons} alt='login icons' className='rounded-full' />
                </div>

                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div className='grid'>
                        <label className='font-semibold text-gray-700'>Email:</label>
                        <div className='bg-slate-100 p-2 rounded-md'>
                            <input
                                type='email'
                                placeholder='Enter email'
                                name='email'
                                value={data.email}
                                onChange={handleOnChange}
                                className='w-full h-full outline-none bg-transparent'
                            />
                        </div>
                    </div>

                    <div>
                        <label className='font-semibold text-gray-700'>Password:</label>
                        <div className='bg-slate-100 p-2 rounded-md flex items-center'>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder='Enter password'
                                value={data.password}
                                name='password'
                                onChange={handleOnChange}
                                className='w-full h-full outline-none bg-transparent'
                            />
                            <div className='cursor-pointer text-xl ml-2' onClick={() => setShowPassword((prev) => !prev)}>
                                <span>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                    </div>

                    <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full rounded-full hover:scale-105 transition-all mt-4'>
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Login;
