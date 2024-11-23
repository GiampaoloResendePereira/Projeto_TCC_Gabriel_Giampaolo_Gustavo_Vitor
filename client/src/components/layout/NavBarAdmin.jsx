import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/logo.png'; 
import '../../styles/global.css';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'; // Adicione NavDropdown aqui
import { useNavigate } from "react-router-dom"; // Importa o hook para navegação


const NavBarNavigation = () => {

  const navigate = useNavigate(); // Hook para navegação entre as rotas

  // Funções de navegação para cada tela
  const handleAdminLogin = () => {
    navigate("/"); // Redireciona para a tela do Administrador
  };
  
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
          <Nav.Link href="/gerenciamento-entregas">Gerenciamento Entregas</Nav.Link>
            <Nav.Link href="/editar-parametro">Editar Parametro de Frete</Nav.Link>
            <Nav.Link href="/cadastrar-motoboy">Cadastrar Motoboy</Nav.Link>
            <Nav.Link href="/gerenciamento_client">Gerenciamento Clientes</Nav.Link>

            <div className="align-right">
          <button className="sair-button" onClick={handleAdminLogin}>
            Sair
          </button>
        </div>
          </Nav>
        </Container>
      </Navbar>

    </div>
  );
};

export default NavBarNavigation;
