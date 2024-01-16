import React, { useState } from 'react';
import { AiFillStar, AiOutlineMenu, AiOutlineGift } from 'react-icons/ai';
import { FaHamburger, FaUtensils, FaLeaf, FaCocktail } from 'react-icons/fa';
import MenuList from '../List';  // Importe o componente MenuList
import { MenuItemType } from '../../data/menuData';

interface SidebarProps {
  menu: MenuItemType[];  // Adicione as propriedades necessárias
  onAddToCart: (item: MenuItemType) => void;  // Adicione as propriedades necessárias
}

const SidebarLateral: React.FC<SidebarProps> = ({ menu, onAddToCart }) => {
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

      {/* Renderiza o MenuList com a categoria selecionada */}
      <MenuList menu={menu} onAddToCart={onAddToCart} categoryToSearch={selectedCategory} />
    </div>
  );
};

export default SidebarLateral;
