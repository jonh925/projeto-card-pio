// Menu.tsx

import React, { useState } from 'react';
import MenuList from '../components/List';
import { MenuItemType } from '../data/menuData';
import Link from 'next/link';
import SidebarLateral from '../components/header/sidebar-lateral'; // Certifique-se de importar o componente SidebarLateral
import menuData from '../data/menuData';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleAddToCart = (item: MenuItemType): void => {
    console.log(`Adicionado ao carrinho: ${item.name}`);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredMenu = menuData.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <h2>Menu</h2>

      {/* Renderizar apenas a categoria selecionada */}
      {filteredMenu.length > 0 ? (
        <MenuList menu={filteredMenu} onAddToCart={handleAddToCart} categoryToSearch={selectedCategory} />
      ) : (
        <p>Nenhum item encontrado para a categoria selecionada.</p>
      )}

      <Link href="/cart">Ver Carrinho</Link>

    </div>
  );
}
