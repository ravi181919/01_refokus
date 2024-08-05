import React from "react";

const Card = ({ cardValues }) => {
  return (
    <div
      className={`w-full ${cardValues.width} p-3 hover:${cardValues.hover} hover:duration-150 bg-zinc-700 rounded-md flex flex-col justify-between min-h-72`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-[0.8vw] font-thin tracking-wide opacity-95">
            {cardValues.h3}
          </h3>
          {cardValues.icon}
        </div>
        <h2 className="font-medium text-md w-1/2 mt-4">
          {cardValues.h2.head1}
        </h2>
        <h2 className="font-medium text-md w-1/2">{cardValues.h2.span}</h2>
      </div>
      <div className="">
        {cardValues.isMainHeading && (
          <>
            <h1 className="text-6xl font-medium">{cardValues.h1}</h1>
            <button className="rounded-full mt-3 border-white border-[1px] px-2 py-1 text-xs font-medium">
              Contact us
            </button>
          </>
        )}
        {cardValues.isParagragh && (
          <p className="tracking-tight text-xs text-zinc-500">
            {cardValues.para}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
