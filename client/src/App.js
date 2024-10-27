import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaAdministrador from './components/Administrador/TelaAdministrador'
import GerenciamentoEntrega from './components/Administrador/GerenciamentoEntregas'; 
import EditarParametro from './components/Administrador/EditarParametro';
import EditarCadastroCliente from './components/Administrador/EditarCadastroCliente';
import EditarCadastroMotoboy from './components/Administrador/EditarCadastroMotoboy';
import Relatorios from './components/Administrador/Relatorios';
import NotificacoesAdmin from './components/Administrador/NotificacoesAdmin';
import TelaInicio from './components/Inicio/TelaInicio';
import SimuladorFrete from './components/Inicio/SimuladorFrete';
import Login from './components/Inicio/Login';
import LoginUsuario from './components/Inicio/LoginUsuario';
import CadastroMotoboy from './components/Administrador/CadastroMotoboy';
import CadastroCliente from './components/Inicio/CadastroCliente';
import Acompanhamento from './components/Cliente/Acompanhamento';
import HistoricoCliente from './components/Cliente/HistoricoCliente';
import SolicitacaoTransporte from './components/Cliente/SolicitacaoTransporte';
import TelaCliente from './components/Cliente/TelaCliente';
import AceitaCorridas from './components/Motoboy/AceitaCorridas';
import HistoricoMotoboy from './components/Motoboy/HistoricoMotoboy';
import NotificacoesMotoboy from './components/Motoboy/NotificacoesMotoboy';
import TelaMotoboy from './components/Motoboy/TelaMotoboy';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';




function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas */}
        <Route path="/" element={<TelaInicio />} />
        <Route path="/simulador-frete" element={<SimuladorFrete />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar-cliente" element={<CadastroCliente />} />
        <Route path="/login-usuario" element={<LoginUsuario />} />
        <Route path="/cadastrar-motoboy" element={<CadastroMotoboy />} />       
        <Route path="/Acompanhamento" element={<Acompanhamento />} />
        <Route path="/historico-cliente" element={<HistoricoCliente />} />
        <Route path="/solicitacao-transporte" element={<SolicitacaoTransporte />} />
        <Route path="/cliente" element={<TelaCliente />} />
        <Route path="/administrador" element={<TelaAdministrador />} />
        <Route path="/gerenciamento-entregas" element={<GerenciamentoEntrega />} />
        <Route path="/editar-parametro" element={<EditarParametro />} />       
        <Route path="/editar-cadastro-motoboy" element={<EditarCadastroMotoboy />} />
        <Route path="/editar-cadastro-cliente" element={<EditarCadastroCliente />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/notificacoes-admin" element={<NotificacoesAdmin />} />
        <Route path="/aceita-corridas" element={<AceitaCorridas />} />
        <Route path="/historico-motoboy" element={<HistoricoMotoboy />} />
        <Route path="/notificacoes-motoboy" element={<NotificacoesMotoboy />} />
        <Route path="/motoboy" element={<TelaMotoboy />} />
      </Routes>
    </Router>
  );
}

export default App;