// MenuItem.tsx

import React from 'react';
import { Card} from '@nextui-org/react';
import { MenuItemType } from '../data/menuData';
import { useCart } from '../contexts/CartContext';

interface MenuItemProps {
  item: MenuItemType;
  onAddToCart: (item: MenuItemType) => void;
  onAddToCartNotification: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart, onAddToCartNotification }) => {
  const { addItem , removeItem} = useCart();
  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
    });
    onAddToCartNotification(); // Notify NavBar
  };

  const handleRemoveFromCart = () => {
    removeItem(item.id);
  };

  return (
    <div className=" p-4 font-sans overflow-hidden">
    <Card
      className="flex-none w-80 mb-4 h-90 rounded overflow-hidden shadow-lg bg-gray-900 cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:shadow-outline"
    >
      {/* Image Section */}
      <div className="relative w-full">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>
  
      {/* Product Details */}
      <div className="p-4">
        <h1 className="text-2xl font-medium text-white mb-2">{item.name}</h1>
        <div className="text-lg font-bold text-violet-600 mb-2">${item.price}</div>
        <div className="text-sm text-slate-500 mb-4">{item.description}</div>
        <div className="text-sm font-medium text-slate-400 mb-4">In stock</div>
  
        {/* Action Buttons */}
        <div className="flex space-x-4 text-sm font-medium">
         <button
            className="h-10 px-6 font-semibold rounded-full hover:bg-red-700 bg-orange-600 text-white"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <button
            className="h-10 px-6 font-semibold rounded-full hover:bg-red-700 bg-red-600 text-white"
            onClick={handleRemoveFromCart}
          >
            Remove cart
          </button>
        </div>
      </div>
    </Card>
  </div>
  );
};

export default MenuItem;
