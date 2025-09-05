// src/context/ProductsContext.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const ProductsContext = createContext();

const FURNITURE_API = "https://furniture-api.fly.dev/v1/products?limit=50&offset=0";

function normalizeProduct(p) {
  // هذه الدالة توحّد الحقول المتباينة
  const id = String(p.id ?? p._id ?? p.uuid ?? p.product_id ?? Math.random());
  const name = p.name ?? p.title ?? p.productName ?? "Untitled Product";
  // **هنا نأخذ حقل image_path إن وجد (حسب اللي اديته)**
  const img =
    p.image_path ??
    p.image ??
    p.imageUrl ??
    (Array.isArray(p.images) && p.images.length ? p.images[0].url ?? p.images[0] : null) ??
    null;
  const priceRaw = p.price?.value ?? p.price ?? p.currentPrice ?? p.salePrice ?? 0;
  const price = Number(priceRaw) || 0;
  const description = p.description ?? p.summary ?? p.details ?? "";
  const category = p.category ?? p.collection ?? "General";
  return { id, name, image: img, price, description, category, raw: p };
}

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(FURNITURE_API);
        const json = await res.json();
        // جرب نلقى الـ array في حقول مختلفة (data, products, items)
        const list = Array.isArray(json)
          ? json
          : Array.isArray(json.data)
          ? json.data
          : Array.isArray(json.products)
          ? json.products
          : Array.isArray(json.items)
          ? json.items
          : [];
        const normalized = list.map(normalizeProduct);
        if (alive) {
          setProducts(normalized);
          setLoading(false);
        }
      } catch (e) {
        console.error("Products fetch error:", e);
        if (alive) {
          setError("Failed to fetch products");
          setLoading(false);
        }
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const getById = useMemo(() => (id) => products.find((p) => String(p.id) === String(id)), [products]);

  return (
    <ProductsContext.Provider value={{ products, getById, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
