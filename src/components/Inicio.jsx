import React from "react";
import nasa from '../assets/nasa.png'

export default function Inicio() {
  return (
    <div className="container">
      <img src={nasa} alt="Nasa" className="img-fluid h-100"/>
    </div>
  );
}
