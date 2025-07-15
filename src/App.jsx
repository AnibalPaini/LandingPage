import { useState } from 'react'
import Header from "./components/Header"
import Inicio from './components/inicio'
import Servicios from './components/Servicios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Inicio></Inicio>
      <Servicios></Servicios>
    </>
  )
}

export default App
