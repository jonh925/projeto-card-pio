"use client"
import React from 'react';
//import CartPage from '../app/pages/cart';
import Menu from '../app/pages/menu';
import SidebarLateral from './components/header/sidebar-lateral';
import { MenuItemType } from './data/menuData';
const App: React.FC = () => {
  return (
    <div className="flex ">
    <div className="w-1/4 bg-gray-800"> {/* Sidebar */}
      <div className="p-4">
        <SidebarLateral menu={[]} onAddToCart={function (item: MenuItemType): void {
            throw new Error('Function not implemented.');
          } } />
      </div>
    </div>
    <main className="w-3/4 p-4 bg-white"> {/* Main Content */}
    <Menu/>
    </main>
  </div>
    );
  }

export default App;


