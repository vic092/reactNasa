import { useState } from "react";
import DayList from "./components/DayList";
import SolList from "./components/SolList";
import Inicio from './components/Inicio'
import Navigation from "./components/Navigation";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/Fotos_Marte" element={<SolList></SolList>}></Route>
        <Route path="/Imagenes_dia" element={<DayList></DayList>}></Route>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function Error404() {
  return (
    <div className="container ">
      <h1 className="text-light mt-5">404 Pagina no encontrada</h1>
    </div>
  );
}

export default App;
