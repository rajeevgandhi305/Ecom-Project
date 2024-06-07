// import React from 'react';
// import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-blue-600 text-white py-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="text-2xl font-bold">Logo</div>
//           <nav>
//             <ul className="flex space-x-4">
//               <li><Link to="" className="hover:text-gray-300">Home</Link></li>
//               <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
//               <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
//             </ul>
//           </nav>
//           <div className="text-lg flex items-center">
//           <Link to="/"><i className="fas fa-user mr-2"></i>Username 
//           </Link>
//           </div>
//         </div>
//       </header>
//       <main className="container mx-auto py-8 text-center">
//         <h1 className="text-4xl font-bold mb-4">Home Page</h1>
//         <p>This is the home page content.</p>
//       </main>
//     </div>
//   );
// };
//  export default HomePage;





import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <h1 className='text-black font-bold text-2xl z-20'>Experiences</h1>
      <HiMenuAlt3 onClick={handleNav} className='z-20 text-black cursor-pointer' size={25} />
      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold text-3xl p-8'>Home</li>
          <li className='font-bold text-3xl p-8'>Food</li>
          <li className='font-bold text-3xl p-8'>Plan</li>
          <li className='font-bold text-3xl p-8'>Amenities</li>
          <li className='font-bold text-3xl p-8'>Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;


