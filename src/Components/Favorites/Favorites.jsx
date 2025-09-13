import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <>
      <Navbar />
      <div className="mt-24 px-4 sm:px-6 md:px-10 lg:px-20">
        {/* العنوان */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
          My Favorites
        </h1>

        {/* لو مفيش منتجات */}
        {favorites.length === 0 ? (
          <p className="text-center text-gray-500 text-sm sm:text-base">
            No favorites yet ❤️
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {favorites.map((p) => (
              <div
                key={p.id}
                className="bg-white p-3 rounded-lg shadow relative hover:shadow-md transition"
              >
                {/* زرار القلب */}
                <button
                  onClick={() => toggleFavorite(p)}
                  className="absolute top-2 right-2 text-lg sm:text-xl"
                >
                  ❤️
                </button>

                {/* صورة + معلومات المنتج */}
                <Link to={`/product/${p.id}`}>
                  <div className="h-32 sm:h-40 md:h-48 flex items-center justify-center bg-gray-100 rounded">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-center font-semibold text-sm sm:text-base">
                    {p.name}
                  </h3>
                  <p className="text-center text-gray-600 text-xs sm:text-sm md:text-base">
                    ${p.price}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
