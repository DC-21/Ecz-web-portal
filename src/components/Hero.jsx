import React from "react";
import { Link } from "react-router-dom";
import hero from "../images/hero.png";

const Hero = () => {
  return (
    <div className="px-4 w-full">
      <div className="w-full px-8 mt-1 mb-4 rounded h-screen flex bg-[#c4dfc4] justify-center items-center">
        <div className="text-center">
          <h1 className="text-xl">Welcome to the Examinations Council Of Zambia.</h1>
          <div style={{ display: "flex", justifyContent: "center"}}>
            <img
              src={hero}
              alt="ecz"
              className="pt-8 pb-8"
              style={{ width: "50%", height: "auto", borderRadius: "10%" }}
            />
          </div>

          <h1 className="text-xl">
            Log in with your school credentials in order to check out the results
          </h1>
          <div className="pt-5">
            <Link
            to="/login"
            className="px-3 py-2 bg-[#00a758] text-white rounded hover:bg-[#00a536]">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
