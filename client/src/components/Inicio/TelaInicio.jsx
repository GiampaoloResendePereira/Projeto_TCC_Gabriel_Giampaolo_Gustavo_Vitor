// src/components/TelaInicio.jsx

import logo from '../../assets/img/logo.png';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/global.css';
import CarrosselPromocoes from './CarrosselPromocoes';
import SimuladorFrete from './SimuladorFrete';


const TelaInicio = () => {
  return (
    <div>
      {/* Barra superior de navegação */}
      <Navbar bg="danger" variant="dark"></Navbar>

      {/* Barra de navegação principal */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" height="50" />
          </Link>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cadastrar-cliente">Cadastrar</Nav.Link>

            
          </Nav>
        </Container>
      </Navbar>

      <SimuladorFrete/>
      <CarrosselPromocoes />
    </div>
  );
};

export default TelaInicio;
