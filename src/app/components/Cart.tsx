import React, { useState, useEffect } from 'react';
import { useCart, CartItem } from '../../app/contexts/CartContext';
import { Badge } from '@nextui-org/react';

interface CartProps {
  onAddToCart: (item: CartItem) => void;
  onAddToCartNotification: () => void;
  onCartUpdate?: () => void; // Adicionado para permitir atualizações no Navbar
}

const Cart: React.FC<CartProps> = ({ onAddToCart, onAddToCartNotification, onCartUpdate }) => {
  const { cart, addItem } = useCart();
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationTimeout, setNotificationTimeout] = useState<number | null>(null);

  const showNotification = () => {
    setIsNotificationVisible(true);

    const timeoutId = window.setTimeout(() => {
      setIsNotificationVisible(false);
    }, 3000);

    setNotificationTimeout(timeoutId);
  };

  const handleAddToCart = (item: CartItem) => {
    addItem(item);
    showNotification();
    onAddToCart(item);
    onAddToCartNotification();
    if (onCartUpdate) {
      onCartUpdate(); // Chama a função de atualização do Navbar, se fornecida
    }
  };

  useEffect(() => {
    return () => {
      if (notificationTimeout) {
        clearTimeout(notificationTimeout);
      }
    };
  }, [notificationTimeout]);

  if (!cart) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {isNotificationVisible && <p>Item adicionado ao carrinho!</p>}
      <Badge content={cart.items.length} size="sm">
        <div>
          {cart.items.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </Badge>
    </div>
  );
};

export default Cart;