import React from "react";
import { motion } from "framer-motion";

const Submit = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.3, ease: "easeInOut" }}
      className="w-full py-8 gap-3 pb-40 flex flex-col md:px-40 px-4"
    >
      <div className="pb-3 flex flex-col gap-3">
        <h1 className="text-4xl md:w-4/5 w-full pb-1 font-bold tracking-tight bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent">
          Submit your Open Source Software
        </h1>
        <p className="md:md:w-4/5 text-lg tracking-tight text-gray-600 w-full">
          Help us grow the list of open source alternatives to proprietary
          software. Contribute to OpenAlternative by submitting a new open
          source alternative.
        </p>
      </div>
      <div className="py-3 w-full gap-14 flex flex-col md:flex-row">
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
                Website <span className="text-red-400">*</span>
              </p>
              <input
                placeholder="https://google.com"
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
              Description <span className="text-red-400">*</span>
            </p>
            <textarea
              rows={5}
              placeholder="Enter the description of yoru product here"
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
            <li>It&apos;s open source</li>
            <li>It&apos;s free to use or can be self-hosted</li>
            <li>It&apos;s actively maintained</li>
            <li>It&apos;s a good alternative to a proprietary software</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Submit;
