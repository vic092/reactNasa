import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg navbar-secondary bg-primary">
      <div className="container">
        <Link to="/" class="navbar-brand font-weight-bold text-light">
          Nasa API
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav m-auto">
            <li class="me-3">
              <Link
                to="/Imagenes_dia"
                style={{ textDecoration: "none", color: "#FFF" }}
              >
                Fotos del dia
              </Link>
            </li>
            <li class="">
              <Link
                to="/Fotos_Marte"
                className="nav-item text-light"
                style={{ textDecoration: "none", color: "#FFF" }}
              >
                Fotos de marte
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
