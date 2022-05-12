import { useRouter } from "next/router";
import React from "react";
import FETCH from "../utils/req";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="relative">
      <div
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide"
        style={{ height: "2.5em" }}
      >
        {Object.entries(FETCH).map(([key, { title, url }]) => (
          <h2
            className="last:pr-20 hover:scale-125 cursor-pointer transition-all hover:text-white active:text-blue-600"
            key={key}
            onClick={() => router.push(`?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"></div>
      <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12"></div>
    </nav>
  );
};

export default Navbar;
