import React from "react";
import Card from "./Card";
import { VscArrowSmallRight } from "react-icons/vsc";
const Cards = () => {
  const value = [
    {
      width: "basis-1/3",
      h3:'Up Next: News',
      h2: {
        head1:"Insights and behind the scenes"
      },
      icon: <VscArrowSmallRight />,
      para:'Explore what drives our teams',
      isParagragh: true,
      isMainHeading: false
    },
    {
      width: "basis-2/3",
      h3:'Get In Touch',
      h2: {
        head1:"Let's get to it,",
        span:'together.'
      },
      h1: "Start the project",
      icon: <VscArrowSmallRight />,
      isParagragh: false,
      isMainHeading: true,
      hover:true    },
  ];
  return (
   <div className="w-full ">
     <div className="max-w-screen-lg mx-auto my-10 px-10 flex gap-[2px] rounded-md overflow-hidden">
      {value.map((ele, index) => (
        <Card key={index} cardValues={ele} hover={ele.hover}/>
      ))}
    </div>
   </div>
  );
};

export default Cards;
