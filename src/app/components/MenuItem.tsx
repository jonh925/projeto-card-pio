// MenuItem.tsx
import React from 'react';
import { Card } from '@nextui-org/react';
import { MenuItemType } from '../data/menuData';

interface MenuItemProps {
  item: MenuItemType;
  onAddToCart: (item: MenuItemType) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart }) => {
  const handlePress = () => {
    onAddToCart(item);
  };

  return (
    <div className="container mx-auto p-4">
      <Card
        className="max-w-full rounded overflow-hidden shadow-lg bg-gray-900 cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:shadow-outline flex flex-row"
        onClick={handlePress}
      >
        {/* Image */}
        <img src={item.image} alt={item.name} className="w-48 h-48 object-cover" />

        {/* Details */}
        <div className="flex flex-col justify-between px-4 py-2 flex-grow">
          {/* Name, Price, and Category */}
          <div className="flex justify-between mb-2 text-white w-full">
            <div className="font-bold text-lg">{item.name}</div>
            <div className="text-lg mt-auto">${item.price}</div>
          </div>
          <div className="text-white text-sm flex items-center">{item.description}</div>
          <div className="text-white text-sm">{item.category.toUpperCase()}</div>
        </div>

        {/* Add to Cart Button */}
        <div className="px-4 py-2 mt-auto flex-shrink-0">
          <button className="bg-red-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none active:bg-blue-800">
            ADICIONAR AO PEDIDO
          </button>
        </div>
      </Card>
    </div>
  );
};

export default MenuItem;