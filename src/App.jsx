import { useState } from 'react'
import Header from "./components/Header"
import Inicio from './components/inicio'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Inicio></Inicio>
    </>
  )
}

export default App
