import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
                <h1 className="text-xl text-center pb-4">Login</h1>
      <div className="border border-green-400 py-14 px-10 rounded">
        <div className="text-center pb-10 pt-4">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="block w-64 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Username"
          />
        </div>
        <div className="text-center pt-0">
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
