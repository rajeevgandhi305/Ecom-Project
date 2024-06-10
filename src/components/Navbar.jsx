// 

import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaUserCircle, FaUmbrellaBeach } from 'react-icons/fa'; // Importing FontAwesome user and beach icons
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className='relative w-full bg-gray-950'>
      <div className='flex justify-between mx-auto rounded-3xl p-4 shadow-md'>
        
        {/* Beaches Icon */}
        <div className='flex items-center'>
          <FaUmbrellaBeach className='text-white mr-2' size={32} /> {/* FontAwesome Beach Icon */}
          <h1 className='text-white font-bold text-2xl'>Beaches</h1>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex flex-1 justify-center items-center'>
          <ul className='flex justify-between space-x-20'>
            <li className='font-bold text-xl'>
              <Link to="/hero" className="text-white hover:text-gray-300 no-underline">Home</Link>
            </li>
            <li className='font-bold text-xl'>
              <Link to="/hero" className="text-white hover:text-gray-300 no-underline">Food</Link>
            </li>
            <li className='font-bold text-xl'>
              <Link to="/hero" className="text-white hover:text-gray-300 no-underline">Plan</Link>
            </li>
            <li className='font-bold text-xl'>
              <Link to="/hero" className="text-white hover:text-gray-300 no-underline">Footer</Link>
            </li>
            <li className='font-bold text-xl'>
              <Link to="/hero" className="text-white hover:text-gray-300 no-underline">Rooms</Link>
            </li>
          </ul>
        </div>

        {/* User Icon and Dropdown */}
        <div className='relative hidden md:flex items-center space-x-4'>
        <h1 className='text-white font-bold text-2xl'>Username</h1>
          <FaUserCircle className='text-white cursor-pointer' size={32} onClick={handleDropdown} />
        
          {dropdown && (
            <div className='absolute top-12 right-0 w-48 bg-white rounded-lg shadow-md p-2 z-10'>
   
              <Link to="/register" className='block px-4 py-2 text-gray-800 hover:bg-gray-200' onClick={() => setDropdown(false)}>Register</Link>
              <Link to="/logout" className='block px-4 py-2 text-gray-800 hover:bg-gray-200' onClick={() => setDropdown(false)}>Logout</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer md:hidden' size={25} />
      </div>
      
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-blue-900 right-0 top-0 w-full h-screen bg-yellow-100 px-4 py-7 z-10 rounded-lg'
            : 'absolute top-0 h-screen right-[-100%] ease-in duration-500 z-10 rounded-lg'
        }
      >
        <ul className='flex flex-col w-full h-full items-start justify-start mt-20 px-8'>
          <li className='font-bold text-3xl py-4' onClick={handleNav}>
            <Link to="/hero" className="text-blue-900 hover:text-red-600 no-underline">Home</Link>
          </li>
          <li className='font-bold text-3xl py-4' onClick={handleNav}>
            <Link to="/ImageSlider" className="text-blue-900 hover:text-red-600 no-underline">Food</Link>
          </li>
          <li className='font-bold text-3xl py-4' onClick={handleNav}>
            <Link to="/Plan" className="text-blue-900 hover:text-red-600 no-underline">Plan</Link>
          </li>
          <li className='font-bold text-3xl py-4' onClick={handleNav}>
            <Link to="/Footer" className="text-blue-900 hover:text-red-600 no-underline">Footer</Link>
          </li>
          <li className='font-bold text-3xl py-4' onClick={handleNav}>
            <Link to="/Rooms" className="text-blue-900 hover:text-red-600 no-underline">Rooms</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
