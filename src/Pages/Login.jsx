import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
        <div>
        div className="text-center pb-6 border border-slate-400">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="block w-64 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Username"
        />
      </div>
      <div className="text-center pt-4">
        <label htmlFor="username">Password</label>
        <input
          type="text"
          id="username"
          className="block w-64 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Password"
        />
      </div>
        </div>
    </div>
  );
};

export default Login;
