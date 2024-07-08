import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col border-t md:mx-40 mx-4 py-10">
      <div className="flex gap-1 flex-col">
        <h1 className="text-xl text-gray-800 font-medium tracking-tight">
          Newsletter
        </h1>
        <p className="text-gray-500 text-sm">
          Get updates on new tools, alternatives and other cool stuff.
        </p>
        <form className="flex flex-row gap-2 py-2">
          <input
            type="email"
            className="w-1/3 py-1 text-sm border border-gray-200 px-3 rounded"
            placeholder="Enter your email..."
          />
          <button className="w-max text-sm py-2 transition-all text-white flex flex-row items-center gap-2 hover:opacity-80 bg-gray-800 px-3 rounded">
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex flex-row pt-10 justify-between">
        <div className="flex flex-row gap-3 items-center text-gray-600">
          <p className="text-gray-900 font-medium text-sm">Explore:</p>
          <Link href="/about">
            <p className="text-sm transition-all hover:opacity-80">About</p>
          </Link>
          <p className="text-sm">Sponsor</p>
          <p className="text-sm">Contact</p>
        </div>
        <div className="flex flex-row gap-3 items-center text-gray-600">
          <FiTwitter className="text-lg" />
          <FiGithub className="text-lg" />
          <MdOutlineMail className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
