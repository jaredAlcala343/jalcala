import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 flex items-center">
          <span className="text-orange-500 mr-2">{`</>`}</span> 
          <Link href="/">
            <p>Jared Alcalá</p>
          </Link>
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex space-x-8 text-gray-600">
          <li>
            <Link href="/">
              <p className="hover:text-orange-500 transition duration-300">Inicio</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="hover:text-orange-500 transition duration-300">Sobre mi</p>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <p className="hover:text-orange-500 transition duration-300">Projectos</p>
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <p className="hover:text-orange-500 transition duration-300">Habilidades</p>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <p className="hover:text-orange-500 transition duration-300">Contactame</p>
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link href="#contact">
            <p className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
              Hire Me
            </p>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            {/* Add Mobile Menu Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
