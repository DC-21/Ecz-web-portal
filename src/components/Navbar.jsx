import React from "react";

const Navbar = () => {
  return (
    <div className="px-4 py-3 w-full sticky top-0">
      <div className="items-center w-full rounded flex py-6 px-8 bg-[#00a536] text-white justify-between shadow shadow-black">
        <div className="flex">
          <a>ECZ</a>
        </div>
        <div className="flex gap-8 items-center cursor-pointer">
          <a className="hover:px-1 py-2 hover:bg-[#77aa77] text-white rounded inline-block w-14">
            Home
          </a>
          <a className="inline-block">
            <select
              id="school-select"
              className="block w-24 h-10 px-4 py-2 bg-[#00a536] appearance-none cursor-pointer hover:bg-[#77aa77] text-white rounded"
            >
              <option value="">Schools</option>
              <option value="school2">Primary</option>
              <option value="school3">Secondary</option>
              <option value="school4">College</option>
              <option value="school5">University</option>
            </select>
          </a>

          <a>News</a>
          <a>About</a>
        </div>
        <div className="px-3 py-2 bg-[#77aa77] text-white rounded">Log In</div>
      </div>
    </div>
  );
};

export default Navbar;
