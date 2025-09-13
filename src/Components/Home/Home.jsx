import React from "react";
import { useProducts } from "../../context/ProductsContext";
import { useFavorites } from "../../context/FavoritesContext";
import logo4 from "../../assets/image1.png";
import logo5 from "../../assets/Image-livingroom.png";
import logo6 from "../../assets/MaskGroup.png";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  const { products = [], loading } = useProducts();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [visibleCount, setVisibleCount] = React.useState(4);

  return (
    <div className="text-black">

      {/* Hero Section */}
      <div className={styles.logo}>
        <div className={`${styles.box} max-w-[90%] md:max-w-[70%]`}>
          <span className="text-yellow-600 font-semibold block mb-2">
            New Arrival
          </span>
          <h1 className="text-2xl md:text-4xl font-bold">Discover Our</h1>
          <h1 className="text-2xl md:text-4xl font-bold">New Collection</h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-6 px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition">
            BUY NOW
          </button>
        </div>
      </div>

      {/* Browse Section */}
      <div className="text-center my-10 px-4">
        <h1 className="text-xl md:text-2xl font-bold">Browse The Range</h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[{ img: logo4, title: "Dining" }, { img: logo5, title: "Living" }, { img: logo6, title: "Bedroom" }].map((item, idx) => (
            <div key={idx} className="text-center">
              <img className="h-48 md:h-56 w-full object-cover rounded-lg" src={item.img} alt={item.title} />
              <h4 className="my-4 text-base md:text-lg font-semibold">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="p-4 md:p-6">
        <h1 className="text-center text-xl md:text-2xl font-bold my-4">Our Product</h1>

        {loading && <p className="text-center">Loading products...</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg p-2 shadow hover:shadow-lg transition"
            >
              <Link to={`/product/${product.id}`}>
                <div className="bg-gray-100 flex items-center justify-center rounded h-40 md:h-48">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <div className="text-gray-400">No Image</div>
                  )}
                </div>
              </Link>

              {/* title + favorite */}
              <div className="flex justify-between items-center mt-2 px-2">
                <h4 className="font-semibold text-sm truncate">
                  {product.name.length > 25 ? product.name.slice(0, 25) + "..." : product.name}
                </h4>
                <i
                  onClick={() => toggleFavorite(product)}
                  className={`${
                    isFavorite(product.id)
                      ? "fa-solid fa-heart text-red-500"
                      : "fa-regular fa-heart text-gray-500"
                  } text-lg cursor-pointer transition`}
                  title="Add to favorites"
                ></i>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < products.length && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      {/* Inspiration Section */}
      <div
        style={{ backgroundColor: "#FCF8F3" }}
        className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-10"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">50+ Beautiful rooms inspiration</h1>
          <p className="my-5 text-gray-600 text-sm md:text-base">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you
          </p>
          <Link
            to="/shop"
            className="text-white px-6 py-2 rounded inline-block"
            style={{ backgroundColor: "#B88E2F" }}
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}
