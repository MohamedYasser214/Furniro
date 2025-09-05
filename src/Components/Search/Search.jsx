import React, { useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // دالة جلب المنتجات من الـ API
  const fetchProducts = async (e) => {
    e.preventDefault(); // تمنع الريلود
    if (!keyword.trim()) return;

    setLoading(true);
    setError("");
    try {
      // بنبعت الكلمة كـ query parameter للـ API
      const res = await fetch(
        `https://furniture-api.fly.dev/v1/products?limit=20&name=${keyword}`
      );
      if (!res.ok) throw new Error("Error fetching data");
      const data = await res.json();
      setProducts(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mt-32">
      {/* فورم البحث */}
      <form onSubmit={fetchProducts}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg 
                       bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                       dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for furniture..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 
                       bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                       focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 
                       dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      {/* Loading/Error */}
      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* عرض النتائج */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {!loading && products.length === 0 && keyword && (
          <p className="text-gray-500 dark:text-gray-400 col-span-full">
            No products found for "{keyword}"
          </p>
        )}
        {products.map((p) => (
          <div
            key={p.id}
            className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm flex flex-col items-center"
          >
            {/* صورة المنتج */}
            <img
              src={p.image_path}
              alt={p.name}
              className="w-full h-48 object-contain rounded-md mb-3 bg-gray-100"
            />

            {/* اسم المنتج */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
              {p.name}
            </h3>

            {/* السعر */}
            <p className="text-gray-600 dark:text-gray-300">${p.price}</p>

            {/* الكاتيجوري */}
            <p className="text-sm text-gray-500">{p.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
