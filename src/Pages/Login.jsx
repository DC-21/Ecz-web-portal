import React from "react";

const Login = () => {
  return (
    <div className="h-screen w-full">
      <div>
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
      </div>
      <div>
        <label>Username</label>
        <input />
      </div>
    </div>
  );
};

export default Login;
