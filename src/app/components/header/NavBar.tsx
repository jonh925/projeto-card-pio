'use client'
import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as NextUILink, Badge } from "@nextui-org/react";
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import Cart from '../../components/Cart';
import CartModal from '../../components/CartModal'; // Importe o CartModal
import { useCart, CartItem } from '../../contexts/CartContext';

const NavBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { cart } = useCart();
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isCartModalOpen, setCartModalOpen] = useState(false); // Adicione estado para controle do modal

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for: ${searchTerm}`);
  };

  const handleOpenCartModal = () => {
    setCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setCartModalOpen(false);
  };

  useEffect(() => {
    // Calculate cart item count when the cart changes
    const itemCount = cart.items.length;
    setCartItemCount(itemCount);
  }, [cart]);

  return (
    <Navbar className="bg-gray-800 p-4">
      <NavbarBrand>
        <p className="font-bold text-white">YourBrand</p>
      </NavbarBrand>
      <NavbarContent>
        <ul className="flex space-x-6">
          {/* ... other NavbarItems */}
          <NavbarItem className="ml-auto">
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <FaSearch className="text-white mr-2" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="px-2 py-1 bg-gray-700 text-white border-none rounded-md focus:outline-none"
              />
            </form>
          </NavbarItem>
          <NavbarItem className="ml-auto">
            {/* Cart Icon with Count Indicator */}
            <div className="relative" onClick={handleOpenCartModal}>
              <FaShoppingCart className="text-white cursor-pointer" />
              {cartItemCount > 0 && <Badge color="danger" className="absolute -top-1 -right-1">{cartItemCount}</Badge>}
            </div>
          </NavbarItem>
        </ul>
      </NavbarContent>

      {/* Renderiza o CartModal */}
      <CartModal open={isCartModalOpen} onClose={handleCloseCartModal} />

      {/* Renderiza o componente Cart (pode ser removido se não for mais necessário) */}
      <Cart
        onAddToCart={() => {}}
        onAddToCartNotification={() => {}}
        onCartUpdate={() => {}} // Placeholder functions
      />
    </Navbar>
  );
};

export default NavBar;