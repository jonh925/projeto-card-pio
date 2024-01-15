import React, { useState } from 'react';
import { AiFillStar, AiOutlineMenu, AiOutlineGift } from 'react-icons/ai';
import { FaHamburger, FaUtensils, FaLeaf, FaCocktail } from 'react-icons/fa';

interface SidebarProps {
  // Add any necessary props
}

const SidebarLateral: React.FC<SidebarProps> = () => {
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    // Additional logic to handle category selection (display item list, etc.)
  };

  return (
    <div className="w-64 bg-gray-800 text-white p-4 h-screen flex flex-col">
      <div className="cursor-pointer mb-4 hover:bg-orange-500" onClick={toggleSubmenu}>
        <AiFillStar /> Destaque
      </div>
      <div className="cursor-pointer mb-4 hover:bg-orange-500 relative" onClick={toggleSubmenu}>
        <AiOutlineMenu /> Cardápio
        {submenuVisible && (
          <div className="absolute left-20 top-full bg-gray-800 text-white p-2">
            <div
              className="cursor-pointer mb-2 hover:bg-orange-500"
              onClick={() => handleCategoryClick('hamburguer')}
            >
              <FaHamburger /> Hambúrguer
            </div>
            <div
              className="cursor-pointer mb-2 hover:bg-orange-500"
              onClick={() => handleCategoryClick('prato')}
            >
              <FaUtensils /> Prato
            </div>
            <div
              className="cursor-pointer mb-2 hover:bg-orange-500"
              onClick={() => handleCategoryClick('saladas')}
            >
              <FaLeaf /> Saladas
            </div>
            <div
              className="cursor-pointer mb-2 hover:bg-orange-500"
              onClick={() => handleCategoryClick('aperitivos')}
            >
              <FaCocktail /> Aperitivos
            </div>
          </div>
        )}
      </div>
      <div className="cursor-pointer hover:bg-orange-500">
        <AiOutlineGift /> Ofertas
      </div>
    </div>
  );
};

export default SidebarLateral;
