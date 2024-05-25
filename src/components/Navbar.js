import React from "react";
import logo from "./assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = ({ setIsExpanded }) => {
  return (
    <div className="sticky top-0 z-10 bg-black h-20 w-full overflow-hidden flex items-center justify-between transition-colors px-6 ">
      {/* Logo */}
      <div className="flex items-center">
        <IoMdMenu
          className="w-6 h-6"
          onClick={() => {
            setIsExpanded((prev) => !prev);
          }}
        />
        <div className="flex items-center">
          <img src={logo} className="w-[60px] h-auto" />
          <h1 className="font-bold -translate-x-2">YOUTUBE</h1>
        </div>
      </div>
      {/* Searchbar */}
      <div className="flex items-center ">
        <input
          type="text"
          placeholder="Search"
          className=" outline-none p-2 h-[41px] rounded-l-2xl bg-white/5 pl-6 w-[40rem]"
        />
        <button
          type="button"
          className=" p-2 h-[41px]  rounded-r-2xl bg-white/25"
        >
          <CiSearch className="w-6 h-6" />
        </button>
      </div>
      <div className="bg-white/10 h-10 w-10 flex justify-center items-center rounded-full mr-20 ">
        <IoMdMic className="h-10 w-5" />
      </div>
      {/* Signin */}
      <div className="bg-white/10 h-10 w-10 flex justify-center items-center rounded-full mr-20 ">
        <PiDotsThreeOutlineVerticalFill />
      </div>
      <div className="flex justify-center items-center border rounded-full w-15">
        <div className="">
          <FaRegUserCircle />
        </div>
        <div className="">SIGN IN</div>
      </div>
    </div>
  );
};

export default Navbar;
