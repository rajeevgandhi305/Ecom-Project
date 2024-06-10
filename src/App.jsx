// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Registration from "./components/Register/Registration ";
// import Login from "./components/Login/Login";
// import Hero from "./components/Hero";
// import Offers from "./components/Offers";
// import Plan from "./components/Plan";
// import Rooms from "./components/Rooms";
// import ImageSlider from "./components/ImageSlider";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer/Footer";
// import Update from "./components/Update/Update";



// const App = () => (

// <div>

  
//   <BrowserRouter>
//   < Navbar/>
//     <Routes>  
//     <Route path="/" element={<Registration />} /> 
//       <Route path="/login" element={<Login />} />
//       <Route path="/update" element={<Update />} />
//       <Route path="/update" element={<Hero />} />
//     </Routes>
  

//     {/* <Hero/> */}
//     <Rooms/>
//    < Plan/>
//    <Offers/>
//    <ImageSlider/>
//     <Footer />
//     </BrowserRouter>
//     </div>
 
// );

// export default App;



import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Hero from "./components/Hero/Hero";
import Offers from "./components/Offer/Offers";
import Plan from "./components/Plan/Plan";
import Rooms from "./components/Rooms/Rooms";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Update from "./components/Update/Update";
import Registration from "./components/Register/Registration";
import Logout from "./components/Logout/Logout";
import Delete from "./components/Delete/Delete";
import User from "./components/User/User";
import UserList from "./components/UserList/UserList";

const MainLayout = ({ children }) => (
  <>
    <Navbar />

    {children}
   
    <Rooms />
    <Plan />
    <Offers />
    <ImageSlider />
    <Footer />
  </>
);

const AuthLayout = ({ children }) => (
 <div className='bg-[url()]'>
    {children}
   </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<AuthLayout><Login /></AuthLayout>} />
      <Route path="/register" element={<AuthLayout><Registration /></AuthLayout>} />
      <Route path="/update" element={<AuthLayout><Update /></AuthLayout>} />
      <Route path="/user" element={<AuthLayout><User /></AuthLayout>} />
      <Route path="/userlist" element={<AuthLayout><UserList /></AuthLayout>} />
      <Route path="/delete" element={<AuthLayout><Delete /></AuthLayout>} />
      <Route path="/hero" element={<MainLayout><Hero /></MainLayout>} />
      <Route path="/logout" element={<Logout />} />
      
    </Routes>
  </BrowserRouter>
);

export default App;
