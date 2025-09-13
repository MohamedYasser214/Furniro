import React, { useState } from "react";
import style from "./Shop.module.css";
import Navbar from "../Navbar/Navbar";
import logo1 from "../../assets/Rectangle1.png";
import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductsContext";
import { useFavorites } from "../../context/FavoritesContext";

export default function Shop() {
  const { products, loading, error } = useProducts();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const totalPages = Math.max(1, Math.ceil(products.length / itemsPerPage));
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <Navbar />
      <div className="shop w-full">
        {/* Banner */}
<div className="w-full relative">
  <img
    src={logo1}
    className="w-full h-48 sm:h-56 md:h-72 lg:h-80 object-cover object-center mt-12 sm:mt-0"
    alt="Shop Banner"
  />
  <div
    className={`${style.text_shop} absolute inset-0 flex flex-col items-center justify-center text-center`}
  >
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
      Shop
    </h1>
    <p className="text-sm sm:text-base md:text-lg">
      Home <i className="fa-solid fa-chevron-right"></i>{" "}
      <span className="font-medium">Shop</span>
    </p>
  </div>
</div>



        {/* Filter Bar */}
        <div
          style={{ backgroundColor: "#F9F1E7" }}
          className="py-4 w-full px-4 sm:px-8 md:px-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <i className="fa-solid fa-filter"></i> Filter
            </p>
            <p className="flex gap-3 text-base sm:text-lg">
              <i className="fa-solid fa-cubes"></i>
              <i className="fa-solid fa-list"></i>
              <i className="fa-solid fa-grip-lines-vertical"></i>
            </p>
            <p className="text-sm sm:text-base">
              {loading
                ? "Loading..."
                : error
                ? "Failed to load."
                : `Showing ${Math.min(
                    indexOfFirst + 1,
                    products.length
                  )}–${Math.min(indexOfLast, products.length)} of ${
                    products.length
                  } results`}
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="px-3 sm:px-6 md:px-12 lg:px-20 mt-10">
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            Furniture Shop
          </h1>

          {loading && <p className="text-center">Loading products...</p>}
          {error && (
            <p className="text-center text-red-500">
              Something went wrong. Try again.
            </p>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-lg shadow hover:shadow-md transition p-3 flex flex-col"
                >
                  <Link
                    to={`/product/${p.id}`}
                    className="w-full h-40 sm:h-48 md:h-56 bg-gray-50 flex items-center justify-center rounded"
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="max-w-full max-h-full object-contain rounded-md"
                      />
                    ) : (
                      <div className="text-xs text-gray-400">No Image</div>
                    )}
                  </Link>

                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base line-clamp-2">
                        {p.name}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        ${Number(p.price).toFixed(2)}
                      </p>
                    </div>

                    <i
                      onClick={() => toggleFavorite(p)}
                      className={`${
                        isFavorite(p.id)
                          ? "fa-solid fa-heart text-red-500"
                          : "fa-regular fa-heart text-gray-500"
                      } text-lg transition cursor-pointer`}
                      title="Add to favorites"
                    ></i>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && !error && products.length > itemsPerPage && (
            <div className="flex justify-center mt-8 flex-wrap gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  style={{
                    backgroundColor: currentPage === i + 1 ? "#B88E2F" : "",
                  }}
                  className={`px-3 sm:px-4 py-2 rounded text-sm sm:text-base ${
                    currentPage === i + 1
                      ? "text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
