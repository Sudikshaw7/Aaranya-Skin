import { createContext, useContext, useReducer, useEffect, useState } from "react";

const CartContext = createContext(null);

const FREE_GIFT_THRESHOLD = 1999;

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.find((i) => i.id === action.product.id);
      if (exists) {
        return state.map((i) =>
          i.id === action.product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...state, { ...action.product, qty: 1 }];
    }
    case "REMOVE_ITEM":
      return state.filter((i) => i.id !== action.id);
    case "UPDATE_QTY":
      if (action.qty <= 0) return state.filter((i) => i.id !== action.id);
      return state.map((i) => (i.id === action.id ? { ...i, qty: action.qty } : i));
    case "CLEAR_CART":
      return [];
    case "SET_ITEMS":
      return action.items;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const [isOpen, setIsOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("aaranya-cart");
      if (saved) dispatch({ type: "SET_ITEMS", items: JSON.parse(saved) });
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("aaranya-cart", JSON.stringify(items));
  }, [items]);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const itemCount = items.reduce((s, i) => s + i.qty, 0);
  const freeGiftProgress = Math.min((total / FREE_GIFT_THRESHOLD) * 100, 100);
  const freeGiftUnlocked = total >= FREE_GIFT_THRESHOLD;
  const amountToFreeGift = Math.max(FREE_GIFT_THRESHOLD - total, 0);

  function addItem(product) {
    dispatch({ type: "ADD_ITEM", product });
    setJustAdded(product.id);
    setIsOpen(true);
    setTimeout(() => setJustAdded(null), 2000);
  }

  function removeItem(id) { dispatch({ type: "REMOVE_ITEM", id }); }
  function updateQty(id, qty) { dispatch({ type: "UPDATE_QTY", id, qty }); }
  function clearCart() { dispatch({ type: "CLEAR_CART" }); }

  return (
    <CartContext.Provider
      value={{
        items, total, itemCount, freeGiftProgress,
        freeGiftUnlocked, amountToFreeGift,
        isOpen, setIsOpen, justAdded,
        addItem, removeItem, updateQty, clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
