import React from "react";
import { motion } from "framer-motion";
import { FaProductHunt } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.3, ease: "easeInOut" }}
      className="w-full py-8 min-h-screen gap-3 flex flex-col md:px-40 px-4"
    >
      <div className="pb-3 flex flex-col gap-3">
        <h1 className="text-4xl md:w-4/5 w-full font-bold tracking-tight bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="md:md:w-4/5 text-lg tracking-tight text-gray-600 w-full">
          If you have any inquiries or need assistance navigating our
          comprehensive SaaS directory, please don't hesitate to reach out to
          us. We're here to help you find the best solutions for your business
          needs.
        </p>
      </div>
      <div className="py-3">
        <p className="text-[0.72rem] uppercase font-semibold text-gray-500">
          Where to find us
        </p>
        <div className="flex flex-row gap-4 py-1">
          <div className="flex flex-row items-center gap-1">
            <FaProductHunt className="text-xl text-orange-600" />
            <p className="text-gray-700">Product Hunt</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <AiFillTwitterCircle className="text-2xl text-blue-400" />
            <p className="text-gray-700">Twitter</p>
          </div>
        </div>
      </div>
      <div className="flex pt-6 flex-col gap-3">
        <h1 className="text-3xl py-1 md:w-4/5 w-full font-bold tracking-tight bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent">
          Send us a message
        </h1>
      </div>

      <div className="pb-3 w-full gap-14 flex flex-col md:flex-row">
        <form className="w-2/3 flex flex-col gap-6">
          <div className="flex flex-row gap-3">
            <div className="flex flex-col w-1/2 text-sm text-gray-600">
              <p id="nameLabel">
                Name <span className="text-red-400">*</span>
              </p>
              <input
                placeholder="Google"
                className="border px-3 py-2 bg-white rounded-lg mt-1"
                aria-labelledby="nameLabel"
              />
            </div>
            <div className="flex flex-col w-1/2 text-sm text-gray-600">
              <p id="websiteLabel">
                Location <span className="text-red-400">*</span>
              </p>
              <input
                placeholder="London"
                className="border px-3 py-2 bg-white rounded-lg mt-1"
                aria-labelledby="nameLabel"
              />
            </div>
          </div>
          <div className="flex flex-col w-full text-sm text-gray-600">
            <p id="websiteLabel">
              Email <span className="text-red-400">*</span>
            </p>
            <input
              placeholder="Google@gmail.com"
              className="border px-3 py-2 bg-white rounded-lg mt-1"
              aria-labelledby="nameLabel"
            />
          </div>
          <div className="flex flex-col w-full text-sm text-gray-600">
            <p id="websiteLabel">
              Message <span className="text-red-400">*</span>
            </p>
            <textarea
              rows={5}
              placeholder="Enter your message here"
              className="border px-3 py-2 bg-white rounded-lg mt-1"
              aria-labelledby="nameLabel"
            />
          </div>
          <button className="w-max text-sm py-2 transition-all text-white flex flex-row items-center gap-2 hover:opacity-80 bg-black px-6 rounded-lg">
            Submit
          </button>
        </form>
        <div className="flex flex-col flex-end w-1/3 h-max">
          <p className="text-sm text-gray-600">
            Please make sure the software you’re sub is meets the following
            criteria:
          </p>
          <ul className="flex flex-col text-sm pl-6 text-gray-600 gap-2 py-3 list-disc">
            <li>It's open source</li>
            <li>It’s free to use or can be self-hosted</li>
            <li>It’s actively maintained</li>
            <li>It’s a good alternative to a proprietary software</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
