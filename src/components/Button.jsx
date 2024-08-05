import React from "react";
import { PiArrowBendDownRight } from "react-icons/pi";
export default function Button({title='Get Started'}) {
  return (
    <div className="w-28 py-1 px-4 whitespace-nowrap rounded-full bg-zinc-100 flex justify-between items-center">
      <h3 className="text-[10px] font-medium text-black leading-none">
        {title}
      </h3>
      <span className="text-black text-xs">
        <PiArrowBendDownRight />
      </span>
    </div>
  );
}
