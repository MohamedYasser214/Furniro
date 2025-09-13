import React from "react";
import logo3 from "../../assets/Capture.PNG";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-10 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={logo3} className="h-8 me-3" alt="Furniro Logo" />
              <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
                Furniro.
              </span>
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                <li>
                  <Link to="/search" className="hover:underline">
                    Search Page
                  </Link>
                </li>
                <li>
                  <Link to="/checkout" className="hover:underline">
                    Payment Options
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="hover:underline">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Newsletter
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 Furniro™. All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-5">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-facebook-f"></i>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-twitter"></i>
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-github"></i>
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-dribbble"></i>
              <span className="sr-only">Dribbble</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
    