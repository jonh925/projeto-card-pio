import React from 'react';
import MenuItem from './MenuItem';
import { MenuItemType } from '../data/menuData';

interface MenuListProps {
  menu: MenuItemType[];
  onAddToCart: (item: MenuItemType) => void;
  categoryToSearch?: string; // Torna a propriedade de categoria opcional
}

const MenuList: React.FC<MenuListProps> = ({ menu, onAddToCart, categoryToSearch }) => {
  const filterMenuItemsByCategory = (items: MenuItemType[], category?: string): MenuItemType[] => {
    if (category) {
      return items.filter(item => item.category === category);
    }
    return items;
  };

  const filteredMenuItems = filterMenuItemsByCategory(menu, categoryToSearch);

  return (
    <div>
      {/* Mapeia todos os itens filtrados (pode incluir todos os itens se categoryToSearch não estiver definida) */}
      {filteredMenuItems.map((item) => (
        <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default MenuList;
