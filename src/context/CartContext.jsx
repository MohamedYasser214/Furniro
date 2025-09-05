// src/context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState, useMemo } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // قراءة الكارت من localStorage أول ما الصفحة تفتح
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  // أي تعديل يتخزن في localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // إضافة للـ Cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => String(p.id) === String(product.id));
      if (existing) {
        return prev.map((p) =>
          String(p.id) === String(product.id)
            ? { ...p, quantity: (p.quantity || 1) + (product.quantity || 1) }
            : p
        );
      } else {
        return [...prev, { ...product, quantity: product.quantity ?? 1 }];
      }
    });
  };

  // حذف من الكارت
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => String(p.id) !== String(id)));
  };

  // تحديث الكمية
  const updateQty = (id, qty) => {
    setCartItems((prev) =>
      prev.map((p) =>
        String(p.id) === String(id) ? { ...p, quantity: Math.max(1, qty) } : p
      )
    );
  };

  // مسح الكارت كله
  const clearCart = () => setCartItems([]);

  // إجمالي عدد القطع
  const cartCount = useMemo(
    () => cartItems.reduce((acc, p) => acc + (p.quantity || 1), 0),
    [cartItems]
  );

  // إجمالي السعر
  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (acc, p) => acc + (Number(p.price) || 0) * (p.quantity || 1),
        0
      ),
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
