import React, { useState } from "react";
import logo from "../../assets/Capture.PNG";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const { favorites } = useFavorites();

  return (
    <nav className="bg-white fixed w-full z-30 top-0 start-0 border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-8 sm:h-10" alt="Logo" />
          <span className="self-center font-bold text-xl sm:text-2xl">
            Furniro
          </span>
        </Link>

        {/* Icons + Toggle */}
        <div className="flex items-center space-x-4 md:order-2">
          <ul className="flex items-center gap-4 sm:gap-6">
            {/* User */}
            <li>
              <Link to="/register">
                <i className="text-black fa-solid fa-user cursor-pointer"></i>
              </Link>
            </li>

            {/* Search */}
            <li>
              <Link to="/search">
                <i className="text-black fa-solid fa-magnifying-glass cursor-pointer"></i>
              </Link>
            </li>

            {/* Favorites */}
            <li className="relative">
              <Link to="/favorites">
                <i className="text-black fa-regular fa-heart cursor-pointer"></i>
                {favorites.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {favorites.length}
                  </span>
                )}
              </Link>
            </li>

            {/* Cart */}
            <li className="relative">
              <Link to="/cart">
                <i className="text-black fa-solid fa-cart-shopping cursor-pointer"></i>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
          >
            {isOpen ? (
              <i className="fa-solid fa-xmark text-lg"></i>
            ) : (
              <i className="fa-solid fa-bars text-lg"></i>
            )}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-gray-50 md:bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 font-medium">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 rounded-md transition hover:text-[#CFAB8D]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block py-2 px-3 rounded-md transition hover:text-[#CFAB8D]"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 rounded-md transition hover:text-[#CFAB8D]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 rounded-md transition hover:text-[#CFAB8D]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
