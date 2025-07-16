import React from 'react';
import Instagram from './ui/Instagram';
import Whatsapp from './ui/Whatsapp';
import Facebook from './ui/Facebook';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold">Estudio Jurídico</h3>
        </div>

        <div className="flex space-x-6">
          <a
            href="#"
            aria-label="Instagram"
            className="bg-white text-gray-800 p-3 rounded-full hover:text-white transition duration-300"
          >
            <Instagram />
          </a>
          <a
            href="#"
            aria-label="Whatsapp"
            className="bg-white text-gray-800 p-3 rounded-full hover:text-white transition duration-300"
          >
            <Whatsapp />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="bg-white text-gray-800 p-3 rounded-full hover:text-white transition duration-300"
          >
            <Facebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
