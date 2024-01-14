'use client'
import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// Define types
interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface CartState {
  items: CartItem[];
}

interface CartContextProps {
  cart: CartState;
  addItem: (item: CartItem) => void;
}

// Create context with initial types
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Define action types
type CartAction = { type: 'ADD_ITEM'; payload: CartItem };

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    // Add other action types as needed
    default:
      return state;
  }
};

// CartProvider component
interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <CartContext.Provider value={{ cart, addItem }}>
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