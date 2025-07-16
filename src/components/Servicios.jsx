import React from "react";
import Hammer from "./ui/Hammer";

const servicios = [
  {
    titulo: "Derecho Civil",
    descripcion:
      "Contratos, responsabilidad civil, daños y perjuicios, derecho de familia.",
  },
  {
    titulo: "Derecho Penal",
    descripcion:
      "Defensa en procesos penales, asesoramiento en causas judiciales, representación legal.",
  },
  {
    titulo: "Derecho Laboral",
    descripcion:
      "Asesoramiento en conflictos laborales, despidos, indemnizaciones y reclamos.",
  },
  {
    titulo: "Derecho Comercial",
    descripcion:
      "Contratos comerciales, sociedades, quiebras y concursos.",
  },
  {
    titulo: "Derecho Administrativo",
    descripcion:
      "Relaciones con la administración pública, licitaciones, sanciones administrativas.",
  },
  {
    titulo: "Derecho Tributario",
    descripcion:
      "Defensa ante inspecciones, recursos administrativos, planificación fiscal.",
  },
];

const Servicios = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4 py-16" id="servicios">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios Legales
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos asesoría legal integral en múltiples áreas del derecho,
            adaptándonos a las necesidades específicas de cada cliente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 transition hover:shadow-lg"
            >
              <div className="mb-4">
                <Hammer />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {servicio.titulo}
              </h3>
              <p className="text-gray-600">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
