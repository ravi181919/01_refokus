import React from "react";
import Button from "./Button";

const Product = ({ data, windowPositionChange, productsIndex }) => {
  return (
    <div
    onMouseEnter={() => windowPositionChange(productsIndex)}
     className="max-w-screen-lg mx-auto h-[15rem]  p-8 flex items-center justify-between">
      <h1 className="text-3xl leading-none tracking-wide font-medium capitalize">
        {data.title}
      </h1>
      <div className="w-1/3 px-10">
        <p className="text-xs tracking-wide leading-4">{data.des}</p>
        <div className="flex gap-2 mt-5">
          {data.live && <Button title="Live Website" />}
          {data.case && <Button title="Case Study" />}
        </div>
      </div>
    </div>
  );
};

export default Product;
