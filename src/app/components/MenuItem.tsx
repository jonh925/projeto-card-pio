// MenuItem.tsx
import React from 'react';

export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface MenuItemProps {
  item: MenuItemType;
  onAddToCart: (item: MenuItemType) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart }) => {
  const handlePress = () => {
    onAddToCart(item);
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200  mb-4 ml-4 cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:shadow-outline"
      onClick={handlePress}
    >
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2 text-black">
          <div className="font-bold text-xl">{item.name}</div>
          <div className="text-xl">${item.price}</div>
        </div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none active:bg-blue-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
