import React from "react";

const Navbar = () => {
  return (
    <div className="px-4 py-3 w-full sticky top-0">
      <div className="w-full rounded flex py-6 px-8 bg-[#c4dfc4] justify-between shadow shadow-black">
        <div className="flex">
          <a>ECZ</a>
        </div>
        <div className="flex gap-8">
          <a>Home</a>
          <a>Schools</a>
          <a>News</a>
          <a>About</a>
        </div>
        <div>Log In</div>
      </div>
    </div>
  );
};

export default Navbar;
