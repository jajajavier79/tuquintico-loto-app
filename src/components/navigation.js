import React from 'react';
import TuQuintico from '../resources/head/Group-1.png';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-md navbar-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={TuQuintico} alt="TuQuintico" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" arial-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Ticket">Ticket Personalizado</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/FormPay">Formas de Pago</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contáctanos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/TicketConsulta">Consulta de Ticket</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
  );
}