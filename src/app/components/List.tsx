// MenuList.tsx
import React from 'react';
import MenuItem, { MenuItemType } from './MenuItem';

interface MenuListProps {
  menu: MenuItemType[];
  onAddToCart: (item: MenuItemType) => void;
}

const MenuList: React.FC<MenuListProps> = ({ menu, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {menu.map((item) => (
        <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default MenuList;
