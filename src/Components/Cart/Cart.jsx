import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Cart() {
  const { cartItems, removeFromCart, updateQty, clearCart, cartTotal } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="p-6 text-center mt-28 sm:mt-24 md:mt-20">
          <h2 className="text-2xl font-bold">Your Cart is Empty 🛒</h2>
          <Link
            to="/shop"
            className="inline-block mt-4 px-4 py-2 bg-yellow-500 text-white rounded"
          >
            Go to Shop
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-6 mt-28 sm:mt-24 md:mt-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          <i className="fa-solid fa-cart-arrow-down"></i> Your Cart
        </h2>

        <ul className="space-y-4">
          {cartItems.map((item) => {
            const lineTotal = (Number(item.price) || 0) * (item.quantity || 1);
            return (
              <li
                key={item.id}
                className="flex items-center justify-between border p-4 rounded-lg shadow-sm bg-white"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded bg-gray-100"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600">
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      updateQty(item.id, (item.quantity || 1) - 1)
                    }
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="min-w-6 text-center">
                    {item.quantity || 1}
                  </span>
                  <button
                    onClick={() =>
                      updateQty(item.id, (item.quantity || 1) + 1)
                    }
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <div className="font-semibold">
                    ${lineTotal.toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 mt-1"
                    title="Remove"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex items-center justify-between border-t pt-4">
          <button
            onClick={clearCart}
            className="text-sm text-red-600 hover:underline"
          >
            Clear Cart
          </button>
          <h3 className="text-xl font-bold">
            Total: ${cartTotal.toFixed(2)}
          </h3>
        </div>

        <div className="mt-6 text-right">
          <Link to="/checkout">
            <button className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
