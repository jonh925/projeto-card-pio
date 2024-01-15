// MenuList.tsx
import React from 'react';
import MenuItem, { MenuItemType } from './MenuItem';

interface MenuListProps {
  menu: MenuItemType[];
  onAddToCart: (item: MenuItemType) => void;
}

const MenuList: React.FC<MenuListProps> = ({ menu, onAddToCart }) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      {menu.map((item) => (
        <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default MenuList;
