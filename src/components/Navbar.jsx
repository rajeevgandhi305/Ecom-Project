import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Navigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    Navigate('/hero')
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
      <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-blue-900 left-0 top-0 w-full h-screen bg-yellow-200 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
        <a href="/"><li className='font-bold text-3xl p-8'> Registration</li></a>
        <a href="/hero"><li className='font-bold text-3xl p-8'> Home</li></a>
        <a href="/ImageSlider"><li className='font-bold text-3xl p-8'>Food</li></a>
        <a href="/Plan"><li className='font-bold text-3xl p-8'>Plan</li></a>
        <a href="/Footer"><li className='font-bold text-3xl p-8'>Footer</li> </a>
        <a href="/Rooms"><li className='font-bold text-3xl p-8'>Rooms</li></a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;