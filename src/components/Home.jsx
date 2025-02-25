import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-[92.8vh] flex items-center justify-center">
      <Link 
      to={'/01_refokus/work'}
      className="lg:text-[12rem] text-6xl delay-1000 font-medium leading-none">Refokus</Link>
      <span className="text-green-500 leading-none text-6xl lg:text-[10rem]">.</span>
    </div>
  );
};

export default Home;
