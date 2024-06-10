import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa'; // Importing FontAwesome user icon
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  };

  return (
    <div className='relative w-full bg-gray-950'>
      <div className='flex justify-between items-center w-full max-w-screen-lg mx-auto rounded-3xl p-4 shadow-md'>
        
        {/* Title */}
        <h1 className='text-white font-bold text-2xl'>Experiences</h1>

        {/* Desktop Menu */}
        <div className='hidden md:flex flex-1 justify-center items-center'>
          <ul className='flex flex-row justify-between space-x-8'>
            <li className='font-bold text-xl'>
              <Link to="/hero" className="text-white hover:text-gray-300 no-underline">Home</Link>
            </li>
            <li className='font-bold text-xl'>
              <Link to="/ImageSlider" className="text-white hover:text-gray-300 no-underline">Food</Link>
            </li>
            <li className='font-bold text-xl'>
              <Link to="/Plan" className="text-white hover:text-gray-300 no-underline">Plan</Link>
            </li>
            <li className='font-bold text-xl'>
              <Link to="/Footer" className="text-white hover:text-gray-300 no-underline">Footer</Link>
            </li>
            <li className='font-bold text-xl'>
              <Link to="/Rooms" className="text-white hover:text-gray-300 no-underline">Rooms</Link>
            </li>
          </ul>
        </div>

        {/* Username and Icon */}
        <div className='hidden md:flex items-center space-x-4'>
          <a className='text-white font-bold text-2xl' href="/">Username</a>
          <FaUserCircle className='text-white' size={32} /> {/* FontAwesome User Icon */}
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
            <Link to="/" className="text-blue-900 hover:text-red-600 no-underline">Registration</Link>
          </li>
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
