import React from 'react';
import Cart from '../components/Cart';
import { CartItem } from '../contexts/CartContext';

const CartPage = () => {
  const handleAddToCart = (item: CartItem): void => {
    // Your logic to add item to cart
    console.log('Adding to cart:', item);
  };

  const handleAddToCartNotification = (): void => {
    // Your logic for showing notification
    console.log('Showing notification');
  };

  return (
    <div>
      <Cart onAddToCart={handleAddToCart} onAddToCartNotification={handleAddToCartNotification} />
    </div>
  );
};

export default CartPage;
