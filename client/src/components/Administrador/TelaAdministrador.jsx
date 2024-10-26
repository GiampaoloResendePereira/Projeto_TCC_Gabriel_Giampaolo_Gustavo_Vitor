import  { useState } from 'react'; // Importando useState
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/logo.png'; 
import '../../styles/global.css';
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'; // Adicione NavDropdown aqui
import GerenciamentoEntrega from './GerenciamentoEntregas';
import EditarParametro from './EditarParametro'; 
import EditarCadastroMotoboy from './EditarCadastroMotoboy';
import EditarCadastroCliente from './EditarCadastroCliente';
import Relatorios from './Relatorios';
import NotificacoesAdmin from './NotificacoesAdmin';

const TelaAdministrador = () => {
  // Estado para controlar a tela visível
  const [telaAtiva, setTelaAtiva] = useState('gerenciamento-entregas'); // Inicialmente "Gerenciamento de Entregas"

  // Função para renderizar a tela ativa
  const renderTelaAtiva = () => {
    switch (telaAtiva) {
      case 'gerenciamento-entregas':
        return <GerenciamentoEntrega />;
      case 'editar-parametro':
        return <EditarParametro />;
      case 'relatorios':
        return <Relatorios />;
      case 'notificacoes-admin':
        return <NotificacoesAdmin />;
      case 'editar-cadastro-cliente':
        return <EditarCadastroCliente />;
      case 'editar-cadastro-motoboy':
        return <EditarCadastroMotoboy />;
      default:
        return <GerenciamentoEntrega />; // Padrão é Gerenciamento de Entregas
    }
  };

  return (
    <div>
      <div>
        <Navbar bg="danger" data-bs-theme="danger"></Navbar>
      </div>
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" height="50" />
            </Link>
            <Nav className="me-auto">
              {/* Links de navegação com onClick para alterar o estado */}
              <Nav.Link onClick={() => setTelaAtiva('gerenciamento-entregas')}>
                Gerenciamento de Entregas
              </Nav.Link>
              <Nav.Link onClick={() => setTelaAtiva('editar-parametro')}>
                Editar Parâmetro de Cálculo de Frete
              </Nav.Link>
              <Nav.Link onClick={() => setTelaAtiva('relatorios')}>Relatórios</Nav.Link>
              <Nav.Link onClick={() => setTelaAtiva('notificacoes-admin')}>
                Notificações
              </Nav.Link>

              {/* Dropdown para Editar Cadastro */}
              <li className="nav-item dropdown">
                
                
              </li>
              <NavDropdown title="Editar Perfis" id="nav-dropdown-dark-example" menuVariant="dark">
              <NavDropdown.Item href="/editar-cadastro-cliente">Editar Cadastrar Cliente</NavDropdown.Item>
              <NavDropdown.Item href="/editar-cadastro-motoboy">Editar Cadastrar Motoboy</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        {/* Renderiza a tela ativa com base no estado */}
        {renderTelaAtiva()}
      </div>
    </div>
  );
};

export default TelaAdministrador;