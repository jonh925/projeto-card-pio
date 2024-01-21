"use client"
import React, { useState } from 'react';
//import CartPage from '../app/pages/cart';
import Menu from '../app/pages/menu';
import SidebarLateral from './components/header/sidebar-lateral';
import menuData, { MenuItemType } from './data/menuData';
import MenuList from './components/List';
const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryClick = (category: string): void => {
    // Atualiza o estado com a categoria selecionada
    setSelectedCategory(category);
  };

  // Filtra os itens do menu com base na categoria selecionada
  const filteredMenu = menuData.filter((item) => item.category === selectedCategory);
  return (
    <div className="flex ">
    <div className=""> {/* Sidebar */}
      <div className="">
        <SidebarLateral onCategoryClick={handleCategoryClick} menu={[]} onAddToCart={function (item: MenuItemType): void {
            throw new Error('Function not implemented.');
          } } />
      </div>
    </div>
    <main className="w-3/4 p-4 bg-gray-500"> {/* Main Content */}
    <h2>Menu</h2>
        {/* Renderiza os itens filtrados com base na categoria selecionada */}
        {filteredMenu.length > 0 ? (
          <MenuList menu={filteredMenu} onAddToCart={function (item: MenuItemType): void {
            throw new Error('Function not implemented.');
          } } />
        ) : (
          <p>Nenhum item encontrado para a categoria selecionada.</p>
        )}
    </main>
  </div>
    );
  }

export default App;


