/* eslint-disable no-unused-vars */

import React,{useState} from "react";
import PropTypes from "prop-types";

function Login ({ toggleComponent }) {

  const [formData, setFormData] = useState({ uniqueId: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // Add login logic here
  };

  return (
    <div className="w-full max-w-md px-6 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-zinc-800 mb-2">Welcome Back</h2>
        <p className="text-zinc-600">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
            Unique Id 
          </label>
          <input
            type="number"
            id="uniqueId"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-zinc-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-zinc-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-zinc-700">
              Remember me
            </label>
          </div>

          <a href="#" className="text-sm text-teal-600 hover:text-teal-700">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 cursor-pointer"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-zinc-600">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={toggleComponent}
            className="text-teal-600 hover:text-teal-700 font-medium cursor-pointer underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};
Login.propTypes = {
  toggleComponent: PropTypes.func.isRequired,
};

export default Login;
