import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/useTheme";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="w-full border-b shadow-sm">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-8">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          Logo
        </h1>

        {/* Links */}
        <div className="flex items-center gap-8 text-lg font-medium">
          <Link
            to="/about"
            className="transition-transform duration-200 hover:scale-105"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="transition-transform duration-200 hover:scale-105"
          >
            Contact
          </Link>

          <Link
            to="/feature"
            className="transition-transform duration-200 hover:scale-105"
          >
            Courses
          </Link>

          <Link
            to="/dashboard"
            className="transition-transform duration-200 hover:scale-105"
          >
            Dashboard
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg border transition-transform duration-200 hover:scale-105"
          >
            {theme}
          </button>

          <Link
            to="/login"
            className="px-4 py-2 rounded-lg border transition-transform duration-200 hover:scale-105"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg border transition-transform duration-200 hover:scale-105"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;