import React from "react";
import Email from "./ui/Email";
import Telefono from "./ui/Telefono";

const inicio = () => {
  return (
    <main className="w-full bg-gray-700 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <section>
          <h1 className="text-gray-50 text-4xl md:text-6xl font-bold leading-tight">
            Defendemos Tus <span className="text-amber-400">Derechos</span> con
            Experiencia
          </h1>
          <p className="text-gray-300 mt-6 text-lg font-medium max-w-xl">
            Más de 20 años brindando asesoría legal integral en derecho civil,
            penal, laboral y comercial.
          </p>
          <div className="flex mt-10 gap-x-5">
            <button className="bg-amber-400 text-gray-900 text-sm font-semibold border border-amber-400 px-8 py-2 flex items-center gap-x-1"> <Telefono/> LLamar Ahora</button>
            <button className=" text-gray-50 text-sm font-semibold border border-gray-300 px-8 py-2 flex items-center gap-x-1"> <Email/> Enviar Consulta</button>
          </div>
        </section>
        <section className="flex justify-center items-center bg-amber-400 p-10 rounded-2xl h-fit">
          <form className="bg-gray-50 w-full h-full p-6 rounded-2xl shadow-lg space-y-4">
            <p className="font-bold text-xl text-gray-800">Consulta Gratuita</p>
            <div>
              <input type="text" placeholder="Nombre" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"/>
            </div>
            <div>
              <input type="text" placeholder="Apellido"className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" />
            </div>
            <div>
              <input type="number" placeholder="Telefono" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"/>
            </div>
            <div>
              <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"></textarea>
            </div>
            <button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded-lg transition-colors duration-200">Consultar</button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default inicio;
