import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-4 py-3 w-full sticky top-0">
      <div className="items-center w-full rounded flex py-6 px-8 bg-[#00a536] text-white justify-between shadow shadow-black">
        <div className="flex">
          <Link to="/">ECZ</Link>
        </div>
        <div className="flex gap-8 items-center cursor-pointer">
          <Link
            to="/home"
            className="hover:py-2 text-center hover:bg-[#77aa77] text-white rounded inline-block w-14"
          >
            Home
          </Link>
          <a className="inline-block">
            <select
              id="school-select"
              className="text-center block w-24 h-10 px-4 py-2 bg-[#00a536] appearance-none cursor-pointer hover:bg-[#77aa77] text-white rounded"
            >
              <option value="">Schools</option>
              <option value="school2">Primary</option>
              <option value="school3">Secondary</option>
              <option value="school4">College</option>
              <option value="school5">University</option>
            </select>
          </a>
          <Link
            to="/news"
            className="hover:py-2 text-center hover:bg-[#77aa77] text-white rounded inline-block w-14"
          >
            News
          </Link>
          <Link
            to="/about"
            className="hover:py-2 text-center hover:bg-[#77aa77] text-white rounded inline-block w-14"
          >
            About
          </Link>
        </div>
        <div className="px-3 py-2 bg-[#77aa77] text-white rounded">Log In</div>
      </div>
    </div>
  );
};

export default Navbar;
