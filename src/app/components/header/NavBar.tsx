'use client'
import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as NextUILink } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
const NavBar: React.FC = () => {
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
            <FaShoppingCart/>
        </NavbarItem>
        </ul>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
