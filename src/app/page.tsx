'use client'
import React, { useState } from 'react';
import SidebarLateral from './components/header/sidebar-lateral';
import menuData, { MenuItemType } from './data/menuData';
import MenuList from './components/List';
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
    <div className="flex">
      <div className="">
        {/* Sidebar */}
        <SidebarLateral onCategoryClick={handleCategoryClick} menu={[]} onAddToCart={handleAddToCart} />
      </div>
      <main className="w-3/4 p-4 bg-gray-500">
        {/* Main Content */}
        <h2>Menu</h2>
        {filteredMenu.length > 0 ? (
          <MenuList
            menu={filteredMenu}
            onAddToCart={handleAddToCart}
            onAddToCartNotification={handleAddToCartNotification}
          />
        ) : (
          <p>Nenhum item encontrado para a categoria selecionada.</p>
        )}
      </main>
      {/* Componente de Notificação */}
      {/* Componente de Notificação */}
      {showNotification && <Notification message="Item adicionado ao carrinho!" onClose={() => setShowNotification(false)} />}
    </div>
  );
};

export default App;
