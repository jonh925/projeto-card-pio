import React from 'react';
import MenuItem from './MenuItem';
import { MenuItemType } from '../data/menuData';

interface MenuListProps {
  menu: MenuItemType[];
  onAddToCart: (item: MenuItemType) => void;
  onAddToCartNotification: () => void;
  categoryToSearch?: string;
}

const MenuList: React.FC<MenuListProps> = ({ menu, onAddToCart, onAddToCartNotification, categoryToSearch }) => {
  const filteredMenuItems = categoryToSearch
    ? menu.filter(item => item.category === categoryToSearch)
    : menu;

  return (
    <div className="flex flex-wrap h-90 overflow-hidden">
      {filteredMenuItems.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          onAddToCart={onAddToCart}
          onAddToCartNotification={onAddToCartNotification}
        />
      ))}
    </div>
  );
};

export default MenuList;
