import React from "react";
import Navbar from "./components/Navbar";
import Routing from "./router/Routing";
import LocomotiveScroll from "locomotive-scroll";


export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full bg-black text-white font-["Satoshi"]'>
      <Navbar />
      <Routing />
      
    </div>
  );
}
