import { createContext, useContext, useMemo, useState } from "react";
const CartContext = createContext(null);
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  function addToCart(product) {
    setItems(current => {
      const found = current.find(item => item._id === product._id);
      return found
        ? current.map(item => item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...product, quantity: 1 }];
    });
  }
  function removeFromCart(id) { setItems(current => current.filter(item => item._id !== id)); }
  function updateQuantity(id, quantity) {
    if (quantity < 1) return removeFromCart(id);
    setItems(current => current.map(item => item._id === id ? { ...item, quantity } : item));
  }
  const value = useMemo(() => ({
    items, addToCart, removeFromCart, updateQuantity,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    total: items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used inside CartProvider");
  return value;
}