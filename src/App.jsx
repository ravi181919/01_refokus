import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Routing from "./router/Routing";
import LocomotiveScroll from "locomotive-scroll";


export default function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className='w-full bg-black text-white font-["Satoshi"]'>
      <Navbar />
      <Routing />
    </div>
  );
}
