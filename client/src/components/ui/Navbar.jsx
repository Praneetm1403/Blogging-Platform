import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition duration-300">
          MyBlog
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/write" className="hover:text-gray-300 transition duration-300">Write</Link>
          <Link to="/profile" className="hover:text-gray-300 transition duration-300">Profile</Link>
          <Link to="/settings" className="hover:text-gray-300 transition duration-300">Settings</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
