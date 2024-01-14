import React from 'react';
import { useCart } from '../../app/contexts/CartContext';
import { Badge } from '@nextui-org/react';

const Cart: React.FC = () => {
  const { cart } = useCart();
  //const [isInvisible, setIsInvisible] = React.useState(false);

  if (!cart) {
    return <p>Loading...</p>; // or any other fallback UI while the cart is being fetched
  }

  return (
    <Badge >
      <h2>
        Shopping Cart{' '}
      </h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.items.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </Badge>
  );
};

export default Cart;
