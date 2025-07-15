import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';
import Dashboard from './Dashboard';

const SignUp2 = () => {
    

  return (
    <>
    <Dashboard />
    </>
  )
}

export default SignUp2