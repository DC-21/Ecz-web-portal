import React from "react";

const Navbar = () => {
  return (
    <div className="px-4 py-3 w-full sticky top-0">
      <div className="items-center w-full rounded flex py-6 px-8 bg-[#00a536] text-white justify-between shadow shadow-black">
        <div className="flex">
          <a>ECZ</a>
        </div>
        <div className="flex gap-8 items-center cursor-pointer">
          <a>Home</a>
          <a>
            <select
              id="school-select"
              className="block w-full px-4 py-2 bg-[#00a536] appearance-none cursor-pointer"
            >
              <option value="">Schools</option>
              <option value="school2">Primary</option>
              <option value="school3">Secondary</option>
              <option value="school4">College</option>
              <option value="school4">University</option>
            </select>
          </a>
          <a>News</a>
          <a>About</a>
        </div>
        <div>Log In</div>
      </div>
    </div>
  );
};

export default Navbar;
