import React from 'react';
import loginimg from '../assets/login1.jpg';

const Login = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="w-1/2 bg-cover bg-center hidden md:block" style={{ backgroundImage: `url(${loginimg})` }}>      </div>
      <div className="w-full md:w-1/2 bg-white p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/DashboardPage">
  Forgot Password?
</a>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
