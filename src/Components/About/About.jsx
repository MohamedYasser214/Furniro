import React from "react";
import style from "./About.module.css";
import logo from "../../assets/Rectangle1.png";
import logo1 from "../../assets/Rectangle68.png";
import logo2 from "../../assets/Rectangle69.png";
import logo3 from "../../assets/Rectangle70.png";

export default function About() {
  return (
    <div>
      {/* البانر */}
      <div className={`${style.about} relative`}>
        <img src={logo} alt="About Banner" className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Blog</h1>
          <p className="text-sm sm:text-base mt-2 text-black">
            <span className="font-semibold">Home</span>{" "}
            <i className="fa-solid fa-angle-right mx-1" ></i> Blog
          </p>
        </div>
      </div>

      {/* المقالات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-5 sm:mx-10 lg:mx-20 my-10">
        {[logo1, logo2, logo3].map((item, index) => (
          <div key={index} className="py-6">
            <img src={item} alt={`Blog ${index + 1}`} className="w-full rounded-md" />
            <div className="flex flex-wrap text-gray-500 text-sm mt-3">
              <p className="flex items-center gap-2 pr-5">
                <i className="fa-solid fa-user"></i> <span>Admin</span>
              </p>
              <p className="flex items-center gap-2 pr-5">
                <i className="fa-solid fa-calendar"></i> <span>22 Oct 2025</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-tag"></i> <span>Wood</span>
              </p>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold py-3">
              Going all-in with millennial design
            </h1>
            <p className={style.spec}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies
              leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. 
              Morbi blandit cursus risus at ultrices mi tempus imperdiet. 
              Pellentesque elit ullamcorper dignissim cras tincidunt.
            </p>
          </div>
        ))}
      </div>

      {/* البحث */}
      <div className="max-w-md mx-auto w-full mt-10 px-4">
        <form className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
              focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
          </div>
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </form>
        <h1 className="text-center mt-10 text-2xl sm:text-3xl font-bold">Categories</h1>
      </div>
    </div>
  );
}
