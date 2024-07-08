import React from "react";
import { PiStarFill } from "react-icons/pi";
import Link from "next/link";

const Card = ({ item }) => {
  return (
    <Link href={`/${item.name}`}>
      <div className="px-5 py-7  w-full flex flex-col gap-2 rounded-lg transition-all cursor-pointer bg-white to-white hover:opacity-70 border border-gray-200">
        <div className="flex flex-row items-center gap-2">
          <div className="logo-container bg-white border p-2 rounded shadow-sm flex">
            <div
              className="logo-image"
              style={{
                backgroundImage: `url(${item.logo})`,
              }}
            ></div>
          </div>
          <p className="text-2xl text-gray-700 font-semibold tracking-tight">
            {item.name}
          </p>
        </div>
        <p className="text-sm line-clamp pr-2 text-gray-600 tracking-tight">
          {item.description}
        </p>
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex flex-row items-center">
            <p className="text-sm text-gray-600 tracking-tight">Category</p>
            <hr className="flex-grow mx-3 border-gray-100" />
            <p className="text-sm text-gray-600 tracking-tight">
              {item.category}
            </p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-sm text-gray-600 w-max tracking-tight">Added</p>
            <hr className="flex-grow mx-3 border-gray-100" />
            <p className="text-sm text-gray-600 w-max tracking-tight">
              {item.date}
            </p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-sm text-gray-600 tracking-tight">Rating</p>
            <hr className="flex-grow mx-3 border-gray-100" />

            <div className="flex flex-row gap-1 items-center">
              <p className="text-sm text-gray-600 tracking-tight">
                {item.rating}
              </p>
              <PiStarFill className="text-gray-600 text-xs" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
