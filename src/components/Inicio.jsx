import React from "react";
import Email from "./ui/Email";
import Telefono from "./ui/Telefono";
import Form from "./Form";

const inicio = () => {
  return (
    <section className="w-full bg-gray-700 min-h-screen flex items-center" id="inicio">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div>
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
        </div>
        <div className="flex justify-center items-center bg-amber-400 p-10 rounded-2xl h-fit">
          <Form></Form>
        </div>
      </div>
    </section>
  );
};

export default inicio;
