'use client'
import React, { useState } from 'react';
import SidebarLateral from './components/header/sidebar-lateral';
import menuData, { MenuItemType } from './data/menuData';
import MenuList from './components/menuList';
import Notification from './components/Notification'; // Importe o componente de notificação
const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showNotification, setShowNotification] = useState(false);
  const [cartItems, setCartItems] = useState<MenuItemType[]>([]);
  const handleCategoryClick = (category: string): void => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (item: MenuItemType): void => {
    // Your actual implementation to add item to cart
    console.log('Adding to cart:', item);
  };

  const handleAddToCartNotification = (): void => {
    setShowNotification(true);

    // Limpa a notificação após alguns segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
  const filteredMenu = menuData.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex ">
        {/* Sidebar */}
        <SidebarLateral onCategoryClick={handleCategoryClick} menu={[]} onAddToCart={handleAddToCart} />
      <main className=" p-4 w-full bg-gray-500">
        {/* Main Content */}
        {filteredMenu.length > 0 ? (
          <MenuList
            menu={filteredMenu}
            onAddToCart={handleAddToCart}
            onAddToCartNotification={handleAddToCartNotification}
          />
        ) : (
          <span className=" w-full">Nenhum item encontrado para a categoria selecionada.</span>
        )}
      </main>
      {/* Componente de Notificação */}
      {showNotification && <Notification message="Item adicionado ao carrinho!" onClose={() => setShowNotification(false)} />}
    </div>
  );
};

export default App;
