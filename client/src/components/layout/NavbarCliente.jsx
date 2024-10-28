import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../global.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const TelaClienteNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">
          Minha Empresa
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={PedidosCadastrados} to="/pedidos_cadastrados" className="text-white">
            Pedidos
          </Nav.Link>
          <Nav.Link as={TelaSuporte} to="/tela_suporte" className="text-white">
            Suporte
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/sair" className="text-white">
            Sair
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TelaClienteNavbar;
