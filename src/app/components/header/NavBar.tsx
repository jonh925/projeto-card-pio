'use client'
import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import CartModal from '../../components/CartModal'; // Importe o CartModal
import {Navbar, Badge} from '@nextui-org/react';
import { useCart, CartItem } from '../../contexts/CartContext';
import "./styles/nav-bar.css"
const NavBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { cart } = useCart();
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isCartModalOpen, setCartModalOpen] = useState(false); // Adicione estado para controle do modal
  const [showSearchMessage, setShowSearchMessage] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSearchMessage(true);
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
    <div className="navbar shadow-md bg-gray-800">
      <div className="brand">YourBrand</div>
      <div className="search-form">
        <FaSearch className="search-icon" onClick={handleSearchSubmit} />
      <form onSubmit={handleSearchSubmit} className="h-full">
        <input
         type="search"
         placeholder=" to search..."
         value={searchTerm}
         onChange={handleSearchChange}
        className="w-full h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 p-2 transition duration-300 ease-in-out focus:outline-none focus:border-orange-500 focus:ring focus:ring-orange-500 hover:border-orange-500"
       />
     </form>
          
      {/* Mensagem de pesquisa */}
      {showSearchMessage && (
        <div className="search-message">
          <p>A pesquisa está em implementação.</p>
          <button onClick={() => setShowSearchMessage(false)}>Fechar</button>
        </div>
      )}
       </div>
      <div className="cart-icon" onClick={handleOpenCartModal}>
        <Badge>
        <FaShoppingCart className='text-x2' />
        {cartItemCount> 0 && <div className='badge'>{cartItemCount}</div>}
        </Badge>
      </div>

      <CartModal open={isCartModalOpen} onClose={handleCloseCartModal} />
    </div>
  );
};

export default NavBar;