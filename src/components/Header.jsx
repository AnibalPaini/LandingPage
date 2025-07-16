import React from "react";
import Scale from "./ui/Scale.jsx"; 

const Header = () => {
  return (
    <header className="bg-gray-800 w-full py-6 fixed">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-x-4">
          <Scale/>
          <h1 className="text-gray-100 text-2xl font-bold">Estudio Jurídico</h1>
        </div>
        <nav className="hidden md:flex gap-x-6">
          <a href="#inicio" className="text-gray-300 hover:text-amber-400 transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="text-gray-300 hover:text-amber-400 transition-colors">
            Servicio
          </a>
          <a href="#contacto" className="text-gray-300 hover:text-amber-400 transition-colors">
            Contacto
          </a>
        </nav>

        {/* Botón */}
        <div>
          <button className="bg-amber-400 text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-amber-300 transition-colors">
            Consulta Gratis
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
