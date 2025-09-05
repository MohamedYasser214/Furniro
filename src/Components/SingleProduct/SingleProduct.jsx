// src/Components/SingleProduct/SingleProduct.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import logo1 from "../../assets/Mask.png";
import logo2 from "../../assets/Cloud.png";
import { useCart } from "../../context/CartContext";
import { useProducts } from "../../context/ProductsContext";

export default function SingleProduct() {
  const { id } = useParams();
  const { getById, loading } = useProducts();
  const product = getById(id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);

  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => q + 1);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({ id: product.id, name: product.name, image: product.image, price: Number(product.price) || 0, quantity });
  };

  return (
    <>
      <Navbar />
      <div className="my-10 max-w-5xl mx-auto p-6">
        {loading && <p className="text-center mt-20">Loading product...</p>}
        {!loading && !product && <p className="text-center mt-20">Product not found.</p>}

        {!loading && product && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white flex items-center justify-center">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-96 object-contain rounded" />
                ) : (
                  <div className="w-full h-96 flex items-center justify-center bg-gray-100">No Image</div>
                )}
              </div>

              <div className="mt-12">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-gray-700 mt-4">{product.description || "No description available."}</p>
                <p className="text-lg font-semibold">${Number(product.price).toFixed(2)}</p>

                <div className="flex items-center space-x-2 mt-4">
                  <button onClick={decrement} className="bg-gray-200 px-3 py-1 rounded">-</button>
                  <span className="px-4">{quantity}</span>
                  <button onClick={increment} className="bg-gray-200 px-3 py-1 rounded">+</button>
                </div>

                <div className="mt-4">
                  <button onClick={handleAddToCart} className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
                    Add to Cart
                  </button>
                </div>

                <hr className="my-5" />

                <div style={{ color: "#9F9F9F" }}>
                  <p>SKU : SS001</p>
                  <p>Category : {product.category}</p>
                  <p>Tags : Sofa, Chair, Home, Shop</p>
                </div>
              </div>
            </div>

            <div className="description mt-10">
              <h2 className="text-center text-xl font-bold mb-4">Description</h2>
              <p style={{ color: "#9F9F9F", margin: "30px 0px" }}>{product.description || "Premium furniture piece crafted from top materials."}</p>

              <div className="grid grid-cols-2 gap-5">
                <div><img src={logo1} alt="" style={{ backgroundColor: "#F9F1E7" }} /></div>
                <div><img src={logo2} alt="" style={{ backgroundColor: "#F9F1E7" }} /></div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
