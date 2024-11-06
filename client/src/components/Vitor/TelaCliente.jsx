import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/logo.png'; 
import React from 'react';
import '../../styles/TelaCliente.css';
import { Navbar, Container, Nav } from 'react-bootstrap'; // Adicione NavDropdown aqui
import { useNavigate } from "react-router-dom"; // Importa o hook para navegação
import SolicitacaoFrete from './SolicitacaoTransporte';


const TelaCliente = () => {

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
           
            
            <div className="align-right">
          <button className="sair-button" onClick={handleAdminLogin}>
            Sair
          </button>
        </div>
          </Nav>
        </Container>
      </Navbar>

      <SolicitacaoFrete/>

      
    </div>
  );
};

export default TelaCliente;