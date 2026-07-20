import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form className="flex flex-col w-full max-w-sm  p-8 rounded-2xl shadow-lg">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Login Here 🔐
        </h2>

        <label className="mb-1 font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter Your Email"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-purple-400"
        />

        <label className="mb-1 font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter Your Password"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-6 outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="submit"
          className="bg-gray-500 text-white py-2 rounded-lg font-semibold hover:bg-gray-600 transition duration-300 cursor-pointer"
        >
          Login
        </button>

      </form>
    </div>
  );
};

export default Login;