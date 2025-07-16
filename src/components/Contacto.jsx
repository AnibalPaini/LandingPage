import React from "react";
import Form from "./Form";

const infoContacto = [
  { nombre: "Dirección", descripcion: "Av. San Martin 50" },
  { nombre: "Teléfono", descripcion: "+54 2954-123456" },
  {
    nombre: "Horarios",
    descripcion: "Lunes a Viernes: 9:00 - 18:00 - Sábados: 9:00 - 13:00",
  },
  { nombre: "Whatsapp", descripcion: "+54 2954-123456" },
];

const Contacto = () => {
  return (
    <section className="w-full bg-gray-600 min-h-screen flex items-center justify-center py-16 px-4" id="contacto">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactanos hoy
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Contactanos hoy mismo a través de nuestras redes sociales o llenando
            el formulario de contacto. ¡Responderemos a la brevedad!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {infoContacto.map((contacto, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-2xl shadow-md">
                <p className="text-white text-xl font-semibold">{contacto.nombre}</p>
                <p className="text-gray-300 mt-1">{contacto.descripcion}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-700 p-8 rounded-2xl shadow-md">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
