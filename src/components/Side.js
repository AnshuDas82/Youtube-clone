import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { LiaYoutubeSquare } from "react-icons/lia";
import { GoHistory } from "react-icons/go";
const Side = ({ isExpanded }) => {
  return (
    <div
      className={`${
        isExpanded ? "w-20" : "w-60"
      } h-[calc(100vh-80px)] fixed space-y-2`}
    >
      <div
        className={`flex items-center hover:bg-white/5 rounded-xl p-4 gap-2 transition-all ${
          isExpanded ? "text-xs flex-col" : "flex-row"
        }`}
      >
        <a href="#">
          <IoMdHome className=" h-6 w-6" />
        </a>
        <div className="">Home</div>
      </div>
      <div
        className={`flex items-center hover:bg-white/5 rounded-xl p-4 gap-2 transition-all ${
          isExpanded ? "text-xs flex-col" : "flex-row"
        }`}
      >
        <a href="#">
          <SiYoutubeshorts className="h-6 w-6" />
        </a>
        <div className="">Shorts</div>
      </div>
      <div
        className={`flex items-center hover:bg-white/5 rounded-xl p-4 gap-2 transition-all ${
          isExpanded ? "text-xs flex-col" : "flex-row"
        }`}
      >
        <a href="#">
          <MdSubscriptions className="h-6 w-6" />
        </a>
        <div className="">Subs</div>
      </div>
      <div
        className={`flex items-center hover:bg-white/5 rounded-xl p-4 gap-2 transition-all ${
          isExpanded ? "text-xs flex-col" : "flex-row"
        }`}
      >
        <a href="#">
          <LiaYoutubeSquare className="h-6 w-6" />
        </a>
        <div className="">vids</div>
      </div>
      <div
        className={`flex items-center hover:bg-white/5 rounded-xl p-4 gap-2 transition-all ${
          isExpanded ? "text-xs flex-col" : "flex-row"
        }`}
      >
        <a href="#">
          <GoHistory className="h-6 w-6" />
        </a>
        <div className="">History</div>
      </div>
    </div>
  );
};

export default Side;
