'use client'
import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as NextUILink } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { FaShoppingCart ,FaSearch} from 'react-icons/fa';
const NavBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your search logic here, e.g., navigate to a search results page
    console.log(`Searching for: ${searchTerm}`);
  };
  return (
    <Navbar className="bg-gray-800 p-4">
      <NavbarBrand>
        <p className="font-bold text-white">YourBrand</p>
      </NavbarBrand>
      <NavbarContent>
        <ul className="flex space-x-6">
          <NavbarItem>
            <NextUILink color="foreground" href="/" className="text-white hover:text-blue-500">Home</NextUILink>
          </NavbarItem>
          <NavbarItem>
            <NextUILink color="foreground" href="/menu" className="text-white hover:text-blue-500">Menu</NextUILink>
          </NavbarItem>
          <NavbarItem>
            <NextUILink color="foreground" href="/about" className="text-white hover:text-blue-500">About</NextUILink>
          </NavbarItem>
          <NavbarItem>
            <NextUILink color="foreground" href="/contact" className="text-white hover:text-blue-500">Contact</NextUILink>
          </NavbarItem>
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
            <FaShoppingCart/>
        </NavbarItem>
        </ul>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
