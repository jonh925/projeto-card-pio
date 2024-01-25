import React, { useState } from 'react';
import { AiFillStar, AiOutlineMenu, AiOutlineGift } from 'react-icons/ai';
import { FaHamburger, FaUtensils, FaLeaf, FaCocktail } from 'react-icons/fa';
import MenuList from '../List';
import { MenuItemType } from '../../data/menuData';

interface SidebarProps {
  menu: MenuItemType[];
  onAddToCart: (item: MenuItemType) => void;
  onCategoryClick: (category: string) => void;
}

const SidebarLateral: React.FC<SidebarProps> = ({ menu, onAddToCart, onCategoryClick }) => {
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-64 bg-gray-800 text-white p-4 h-screen flex flex-col">
      <div className="cursor-pointer mb-4 hover:bg-orange-500">
        <AiFillStar className="text-yellow-500 text-xl" /> <span className="text-lg">Destaque</span>
      </div>
      <div className="cursor-pointer mb-4 hover:bg-orange-500 relative" onClick={toggleSubmenu}>
        <AiOutlineMenu className="text-blue-500 text-xl" /> <span className="text-lg">Cardápio</span>
        {submenuVisible && (
          <div className="absolute left-20 top-full bg-gray-800 text-white p-2">
            <div
              className="cursor-pointer mb-2 hover:bg-orange-500 square"
              onClick={() => { onCategoryClick('hamburgers'); }}
            >
              <FaHamburger className="text-xl" /> <span className="text-lg">Hambúrguer</span>
            </div>
            <div
              className="cursor-pointer mb-2 hover:bg-orange-500 square"
              onClick={() => { onCategoryClick('main_dishes'); }}
            >
              <FaUtensils className="text-xl" /> <span className="text-lg">Prato</span>
            </div>
            <div
              className="cursor-pointer mb-2 hover:bg-orange-500 square"
              onClick={() => { onCategoryClick('salads'); }}
            >
              <FaLeaf className="text-xl" /> <span className="text-lg">Saladas</span>
            </div>
            <div
              className="cursor-pointer mb-2 hover:bg-orange-500 square"
              onClick={() => { onCategoryClick('appetizers'); }}
            >
              <FaCocktail className="text-xl" /> <span className="text-lg">Aperitivos</span>
            </div>
          </div>
        )}
      </div>
      <div className="cursor-pointer hover:bg-orange-500">
        <AiOutlineGift className="text-red-500 text-xl" /> <span className="text-lg">Ofertas</span>
      </div>
    </div>
  );
};

export default SidebarLateral;
