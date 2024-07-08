import React from "react";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full py-8 flex flex-row md:px-40 px-4 justify-between">
      <Link href="/">
        <div className="flex flex-row items-center gap-2 transition-all hover:opacity-70">
          <AiTwotoneFolderOpen className="text-xl" />{" "}
          <p className="font-medium tracking-tighter text-black">
            DirectorySource
          </p>
        </div>
      </Link>
      <div className="flex flex-row gap-4 text-gray-700">
        <div className="flex flex-row gap-3 items-center">
          <Link href="/about">
            <p className="text-sm transition-all hover:opacity-70">About</p>
          </Link>
          {/* <Link href="/sponser">
            <p className="text-sm transition-all hover:opacity-70">Sponser</p>
          </Link> */}
          <Link href="/contact">
            <p className="text-sm transition-all hover:opacity-70">Contact</p>
          </Link>
        </div>
        <div className="flex flex-row gap-2">
          {/* <button className="border py-[0.2rem] bg-white px-2 transition-all hover:bg-gray-100 border-gray-300 rounded items-center">
            <BsMoon className="text-sm" />
          </button> */}
          <Link href="/submit">
            <button className="flex gap-1 transition-all bg-white hover:bg-gray-100 flex-row border border-gray-300 py-[0.2rem] px-2 rounded items-center">
              <GoPlus className="text-sm" />
              <p className="text-sm">Submit</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
