import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <>
      <Navbar />
      <div className="mt-24 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">My Favorites</h1>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-500">No favorites yet ❤️</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {favorites.map((p) => (
              <div key={p.id} className="bg-white p-2 rounded shadow relative">
                <button
                  onClick={() => toggleFavorite(p)}
                  className="absolute top-2 right-2 text-xl"
                >
                  ❤️
                </button>
                <Link to={`/product/${p.id}`}>
                  <div className="h-40 flex items-center justify-center bg-gray-100 rounded">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-2 text-center font-semibold text-sm">
                    {p.name}
                  </h3>
                  <p className="text-center text-gray-600">${p.price}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
