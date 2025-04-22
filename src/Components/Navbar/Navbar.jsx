import React, { useState } from "react";
import MyPhoto from "../../assets/MyPhoto.jpg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo + Title */}
          <div className="flex items-center space-x-3">
            <img
              src={MyPhoto}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="text-lg font-semibold text-gray-800">Adarsh Malik</h1>
              <p className="text-sm text-gray-500 -mt-1 font-medium">Developer</p>
            </div>
          </div>

          {/* Right - Nav links */}
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-green-600 transition font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleNav}>
              {navOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {navOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {["Home", "About", "Portfolio", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-700 hover:text-green-600 transition"
              onClick={() => setNavOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
