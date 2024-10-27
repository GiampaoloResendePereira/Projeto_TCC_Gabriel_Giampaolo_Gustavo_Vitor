import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/logo.png'; 
import '../../styles/global.css';
import React from 'react';
import GerenciamentoEntrega from './GerenciamentoEntregas';
import { Navbar, Container, Nav } from 'react-bootstrap'; // Adicione NavDropdown aqui

const TelaAdministrador = () => {
  
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
            <Nav.Link href="/editar-parametro">Editar Parametro de Frete</Nav.Link>

            
          </Nav>
        </Container>
      </Navbar>

      <GerenciamentoEntrega />
    </div>
  );
};

export default TelaAdministrador;