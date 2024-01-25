 'use client'
import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// Define types
interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartState {
  items: CartItem[];
}

interface CartContextProps {
  cart: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
}

// Create context with initial types
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Define action types
type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'CLEAR_CART' };

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { items: state.items.filter(item => item.id !== action.payload) };
    case 'CLEAR_CART':
      return { items: [] };
    // Add other action types as needed
    default:
      return state;
  }
};

// CartProvider component
const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] } as CartState);

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (itemId: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// useCart hook
const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider. Wrap your components with CartProvider to access the shopping cart.');
  }
  return context;
};

export { CartContext, useCart, CartProvider };  
export type { CartItem };
