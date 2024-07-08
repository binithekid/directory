import React, { useState, useEffect, useRef } from "react";
import { IoFilter } from "react-icons/io5";
import { FaSort } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
import { dataList } from "@/data/dataList";
import Card from "./Card";
import Pagination from "./Pagination";
import { motion, AnimatePresence } from "framer-motion";

const Tools = () => {
  const [openSort, setOpenSort] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openItems, setOpenItems] = useState(false);

  const dropdownRefSort = useRef(null);
  const dropdownRefFilter = useRef(null);
  const dropdownRefItems = useRef(null);

  const handleClickOutsideSort = (event) => {
    if (
      dropdownRefSort.current &&
      !dropdownRefSort.current.contains(event.target)
    ) {
      setOpenSort(false);
    }
  };

  const handleClickOutsideFilter = (event) => {
    if (
      dropdownRefFilter.current &&
      !dropdownRefFilter.current.contains(event.target)
    ) {
      setOpenFilter(false);
    }
  };

  const handleClickOutsideItems = (event) => {
    if (
      dropdownRefItems.current &&
      !dropdownRefItems.current.contains(event.target)
    ) {
      setOpenItems(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideSort);
    document.addEventListener("mousedown", handleClickOutsideFilter);
    document.addEventListener("mousedown", handleClickOutsideItems);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSort);
      document.removeEventListener("mousedown", handleClickOutsideFilter);
      document.removeEventListener("mousedown", handleClickOutsideItems);
    };
  }, []);

  return (
    <div className="w-full py-8 flex flex-col md:px-40 px-4">
      <div className="w-full flex flex-row gap-2">
        <div className="flex flex-col" ref={dropdownRefSort}>
          <button
            onClick={() => setOpenSort(!openSort)}
            className="text-xs transition-all hover:bg-gray-100 flex flex-row bg-white items-center gap-2 text-gray-600 border rounded px-3 py-2"
          >
            <FaSort /> Sort By
          </button>
          <AnimatePresence>
            {openSort && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeInOut" }} // Adjust transition properties here
                className="absolute mt-10 w-40 bg-white border border-gray-200 rounded shadow-lg z-10"
              >
                <a
                  href="#action1"
                  className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Latest
                </a>
                <a
                  href="#action2"
                  className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Oldest
                </a>
                <a
                  href="#action3"
                  className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Highest Rated
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col" ref={dropdownRefFilter}>
          <button
            onClick={() => setOpenFilter(!openFilter)}
            className="text-xs transition-all hover:bg-gray-100 flex flex-row bg-white items-center gap-2 text-gray-600 border rounded px-3 py-2"
          >
            <IoFilter /> Show Filters
          </button>
          <AnimatePresence>
            {openFilter && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeInOut" }} // Adjust transition properties here
                className="absolute mt-10 w-40 bg-white border border-gray-200 rounded shadow-lg z-10"
              >
                <a
                  href="#action1"
                  className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Categories
                </a>
                <a
                  href="#action2"
                  className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Languages
                </a>
                <a
                  href="#action3"
                  className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Topics
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col" ref={dropdownRefItems}>
          <button
            onClick={() => setOpenItems(!openItems)}
            className="text-xs transition-all hover:bg-gray-100 flex flex-row bg-white items-center gap-2 text-gray-600 border rounded px-3 py-2"
          >
            Items per page <RiArrowDownSLine className="mt-1" />
          </button>
          <AnimatePresence>
            {openItems && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeInOut" }} // Adjust transition properties here
                className="absolute mt-10 w-40 bg-white border border-gray-200 rounded shadow-lg z-10"
              >
                <a
                  href="#action1"
                  className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  9 per page
                </a>
                <a
                  href="#action2"
                  className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  12 per page
                </a>
                <a
                  href="#action3"
                  className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  15 per page
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-2 bg-white border rounded px-3 py-1 flex-grow ">
          <CiSearch className="text-gray-600" />
          <input
            type="text"
            placeholder="Type to search..."
            className="text-xs flex-grow px-1 bg-white text-gray-600 border-none outline-none"
          />
        </div>
        <button className="text-xs border py-2 bg-white px-3 rounded transition-all hover:bg-gray-100 text-gray-600">
          Search
        </button>
      </div>
      <div className="py-10 rounded grid w-full gap-6 grid-cols-1 md:grid-cols-3">
        {dataList.map((item, key) => (
          <Card item={item} index={key} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Tools;
