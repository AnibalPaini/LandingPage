import React from "react";

const Form = () => {
  return (
    <form className="bg-gray-50 w-full h-full p-6 rounded-2xl shadow-lg space-y-4">
      <p className="font-bold text-xl text-gray-800">Consulta Gratuita</p>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Apellido"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Telefono"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>
      <div>
        <textarea
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
      >
        Consultar
      </button>
    </form>
  );
};

export default Form;
