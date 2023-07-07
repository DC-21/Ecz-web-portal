import React from "react";
import eczhero from "../images/hero.png";

const Hero = () => {
  return (
    <div className="px-4 w-full">
      <div className="w-full px-8 mt-1 rounded h-screen flex bg-[#c4dfc4] justify-center items-center">
        <div className="text-center">
          <h1>Welcome to the Examinations Council Of Zambia.</h1>
          <div style={{ display: "flex", justifyContent: "center"}}>
            <img
              src={eczhero}
              alt="ecz"
              className="pt-8 pb-8"
              style={{ width: "50%", height: "auto", borderRadius: "10%" }}
            />
          </div>

          <h1>
            Log in with your shool credentials in order to check out the results
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
