import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";

const Pagination = () => {
  const pageNumbers = [1, 2, 3, 4, 5];

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="w-full flex py-8 flex-row justify-between">
      <button
        onClick={() => setPageNumber(pageNumber - 1)}
        disabled={pageNumber === 1}
        className={`flex transition-all text-gray-500 flex-row gap-2 items-center ${
          pageNumber === 1 ? "disabled" : "hover:text-black"
        }`}
      >
        <FaArrowLeftLong className="text-sm mt-[2px] arrow-left" />
        <p
          className={`text-sm ${
            pageNumber === 1 ? "text-gray-500" : "hover:text-black"
          }`}
        >
          back
        </p>
      </button>

      <div className="flex text-sm text-gray-500 flex-row gap-1">
        <div className="flex flex-row gap-2 items-center">
          <p>Page:</p>
          {pageNumbers.map((page) => (
            <button
              className={`${
                page === pageNumber
                  ? "py-1 font-semibold px-2 rounded text-black bg-gray-200"
                  : ""
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={() => setPageNumber(pageNumber + 1)}
        className="flex transition-all text-gray-500 hover:text-black flex-row gap-2 items-center"
      >
        <p className="text-sm hover:text-black">next</p>{" "}
        <FaArrowRightLong className=" text-sm mt-[2px] arrow-right" />
      </button>
    </div>
  );
};

export default Pagination;
