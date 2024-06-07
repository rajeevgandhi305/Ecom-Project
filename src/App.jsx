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
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Update from "./components/Update/Update";
import Registration from "./components/Register/Registration";

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
      <Route path="/" element={<AuthLayout><Registration /></AuthLayout>} />
      <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
      <Route path="/update" element={<AuthLayout><Update /></AuthLayout>} />
      <Route path="/hero" element={<MainLayout><Hero /></MainLayout>} />
      
    </Routes>
  </BrowserRouter>
);

export default App;
