import "../App.css";
import { Link } from "react-router-dom";
import Login from "./Login";

function Sign() {
  return (
    <div className="bg-white max-w-md mx-auto shadow-2xl p-9 mb-10 rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Login Account
      </h1>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border-2 border-blue-600 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full border-2 border-blue-600 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 p-2 rounded-2xl text-white font-medium hover:bg-blue-600 transition-colors hover:cursor-pointer"
        >
          Login
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Create Account?
          <Link to="/sign" className="text-blue-600 hover:underline">
            create
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Sign;
