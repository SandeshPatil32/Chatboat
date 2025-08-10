import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white tracking-tight md:text-3xl">
            ChatBoat
          </span>
        </div>
      </Link>

      {/* Navigation Links - Centered */}
      <div className="flex items-center justify-center space-x-6 text-white font-medium flex-grow">
        <Link
          to="/contact"
          className="hover:text-blue-200 transition-colors duration-200 ease-in-out"
          aria-label="About ChatBoat"
        >
          Contact US
        </Link>
        <Link
          to="/login"
          className="hover:text-blue-200 transition-colors duration-200 ease-in-out"
          aria-label="Login to ChatBoat"
        >
          Login
        </Link>
        <Link
          to="/sign"
          className="bg-white text-blue-700 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-200 ease-in-out"
          aria-label="Sign up for ChatBoat"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
