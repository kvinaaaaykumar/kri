import React, { useContext, useState } from 'react';
import Logo from './Logo';
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';
import { RiMenu3Line } from "react-icons/ri";

const Header2 = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(true);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include',
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className='flex items-center gap-3'>
          <p className=' text-lg font-semibold'>
            Hi, Welcome Back{user?.name ? `, ${user?.name}!` : "!"}
          </p>
        </div>

        <div className='flex items-center gap-7'>
          <div className='relative flex justify-center'>
            {user?._id && (
              <div
                className='text-3xl cursor-pointer relative flex justify-center'
                onClick={() => setMenuDisplay((prev) => !prev)}
              >
                {user?.profilePic ? (
                  <img
                    src={user?.profilePic}
                    className='w-10 h-10 rounded-full'
                    alt={user?.name}
                  />
                ) : (
                  <FaRegCircleUser className='text-black' />
                )}
              </div>
            )}

            {menuDisplay && (
              <div className='absolute bg-white top-0 right-10 w-40 shadow-lg rounded-md'>
                <nav>
                  {user?.role === ROLE.ADMIN && (
                    <Link
                      to={"/admin-panel/all-products"}
                      className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                      onClick={() => setMenuDisplay(false)}
                    >
                      Admin Panel
                    </Link>
                  )}
                  
                </nav>
              </div>
            )}
          </div>

          <div>
            {user?._id ? (
              <button
                onClick={handleLogout}
                className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'
              >
                Logout
              </button>
            ) : (
              <Link
                to={'/login'}
                className='px-3 py-1 rounded-full text-white bg-green-500 hover:bg-green-600'
              >
                Login
              </Link>
            )}
          </div>

          <Link to={'/closenavbar2'} className='text-2xl text-black lg:hidden'>
            <RiMenu3Line />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header2;
