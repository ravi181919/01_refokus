import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex justify-between items-center border-b border-zinc-500  py-4">
      <div className="flex items-center">
        <img
          src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
          className="w-16"
        />
        <nav className="flex gap-10 items-center ml-16 text-xs max-sm:hidden">
          {["Home", "Work", "About", "", "News"].map((itemName, itemIndex) =>
            itemName.length === 0 ? (
              <span
                key={itemIndex}
                className="inline-block h-4 w-[0.1vw]  bg-zinc-600"
              ></span>
            ) : (
              <NavLink
                key={itemIndex}
                className={(e) =>
                  [
                    e.isActive
                      ? "font-medium text-sm relative flex items-center  after:absolute after:shadow after:shadow-green-500 after:-left-[6px] after:content-[' '] after:h-1 after:w-1 after:rounded-full after:bg-green-400 "
                      : "",
                  ].join("")
                }
                to={`/${itemName.toLocaleLowerCase()}`}
              >
                {itemName}
              </NavLink>
            )
          )}
        </nav>
        <div className="flex items-center sm:hidden mt-1 ml-5">
          <IoMenu />
        </div>
      </div>
      <div className="">
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
