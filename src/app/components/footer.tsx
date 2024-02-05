import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4">
        <div className="flex justify-center items-center">
          {/* WhatsApp Icon for Contact */}
          <a
            href="https://wa.me/seu-numero-de-telefone"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white rounded-full p-2 mr-4 hover:bg-green-300"
            title="Entre em Contato no WhatsApp"
          >
            <FaWhatsapp className="text-2xl"  />
          </a>
  
          {/* Instagram Icon for About */}
          <a
            href="https://www.instagram.com/seu-usuario/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white rounded-full p-2 hover:bg-pink-300"
            title="Siga-nos no Instagram"
          >
            <FaInstagram className="text-2xl"  />
          </a>
        </div>
      </footer>
    );
  };
  
export default Footer;
