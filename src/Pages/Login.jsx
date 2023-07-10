import React, { useState, useEffect } from "react";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      // Handle successful login
      console.log(response.data);
      setLoginMessage('Successful login!');
    } catch (error) {
      console.error(error);
      setLoginMessage('Login failed. Please try again.');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    let timeoutId;

    if (loginMessage) {
      timeoutId = setTimeout(() => {
        setLoginMessage('');
      }, 5000);
    }

    return () => clearTimeout(timeoutId);
  }, [loginMessage]);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-xl text-center pb-4">Login Please</h1>
      <div className="border border-green-400 py-14 px-10 rounded">
        {loginMessage && (
          <div className="text-center pt-4">
            <p>{loginMessage}</p>
          </div>
        )}
        <div className="text-center pb-10 pt-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="block w-64 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="text-center pt-0">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="block w-64 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="text-center pt-6">
          <button className="px-10 py-3 bg-[#00a536] rounded mt-8" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
