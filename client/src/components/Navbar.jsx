import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, Search, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "Theatres", path: "/theatres" },
    { name: "Releases", path: "/releases" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 bg-transparent">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center">
        <img src={assets.logo} alt="QuickShow" className="w-36 h-auto" />
      </Link>

      {/* Floating Pill Center Navigation (Desktop) */}
      <div className="hidden md:flex items-center gap-8 px-8 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-inner">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-white/90 hover:text-white font-normal text-sm transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right Actions: Search & Login */}
      <div className="flex items-center gap-6">
        <Search className="max-md:hidden w-5 h-5 text-white/90 hover:text-white cursor-pointer transition-colors" />

       <button className="px-6 py-2 bg-[#F84565] hover:bg-[#D63854] text-white rounded-full text-sm font-medium transition-colors shadow-md shadow-[#F84565]/20 cursor-pointer">
  Log In
</button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white cursor-pointer ml-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#09090b]/95 backdrop-blur-lg border-b border-white/10 px-8 py-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white text-base font-medium py-1 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center gap-3 text-white/70">
            <Search className="w-5 h-5" />
            <span className="text-sm">Search</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;