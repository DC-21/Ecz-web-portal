import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      if (email === "" || password === "") {
        return setLoginMessage("Please fill in the form");
      }
      await axios
        .post("http://localhost:3000/login", { email, password })
        .then(() => {
          setLoading(false);
          setLoginMessage("Successful login!");
          // Redirect to home page
          navigation("/");
        });
    } catch (error) {
      console.error(error);
      setLoginMessage(error.response.data.message);
      setLoading(false)
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-xl text-center pb-4">Login Please</h1>
      <div className="border border-green-400 py-14 px-10 rounded">
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
        {loginMessage && (
          <div className="text-center pt-4 text-red-500">
            <p>{loginMessage}</p>
          </div>
        )}
        <div className="text-center pt-6">
          {loading ? (
            <p> loading...</p>
          ) : (
            <button
              className="px-10 py-3 bg-[#00a536] rounded mt-8"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
