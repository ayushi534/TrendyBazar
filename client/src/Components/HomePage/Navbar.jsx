import React from "react";
import { Search, ShoppingCart, MapIcon, Heart, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-Beige text-Brown shadow-lg py-4 px-8 flex justify-between items-center font-sans">
      {/* Left Section - Logo */}

      <div className="flex items-center gap-3">
        <img
          src="/assets/logo.png" // your logo path
          alt="ArtAmour Logo"
          className="h-10 w-10 rounded-full border-2 border-Brown"
        />
        <h1 className="text-2xl font-bold tracking-wider text-Brown">
          ArtAmour
        </h1>
      </div>

      {/* Center Section - Menu */}
      <div className="hidden md:flex gap-8 text-lg">
        <a href="#" className="hover:text-Redwood transition">Home</a>
        <a href="#" className="hover:text-Redwood transition">Dashboard</a>
        <a href="#" className="hover:text-Redwood transition">Contact</a>
       
      </div>

      {/* Right Section - Search + Icons */}
      <div className="flex items-center gap-5">
        {/* Search Bar */}
        <div className="flex items-center bg-yellow-50 text-Brown rounded-full px-3 py-1">
          <Search className="h-5 w-5 text-Brown  " />
          <input
            type="text" 
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm w-28 md:w-40 focus:border-Brown"
          />
        </div>

        {/* Icons */}
        <a href="#" className="hover:text-Redwood transition">
          <User className="h-6 w-6" />
        </a>
        <a href="#" className="hover:text-Redwood  transition">
          <ShoppingCart className="h-6 w-6" />
        </a>
        <a href="#" className="hover:text-Redwood transition">
          <Heart className="h-6 w-6" />
        </a>
        <a href="#" className="hover:text-Redwood transition"><MapIcon className='h-6 w-6'/>
        </a>
      </div>
    </nav>
    
  );
};

export default Navbar;

