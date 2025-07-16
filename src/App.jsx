import { useState } from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio.jsx";
import Servicios from "./components/Servicios";
import "./App.css";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main>
        <Inicio></Inicio>
        <Servicios></Servicios>
        <Contacto></Contacto>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
