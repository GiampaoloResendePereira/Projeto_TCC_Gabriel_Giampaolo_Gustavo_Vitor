import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaAdministrador from './components/Administrador/TelaAdministrador'
import GerenciamentoEntrega from './components/Administrador/GerenciamentoEntregas';
import EditarParametro from './components/Administrador/EditarParametro';
import EditarCadastroCliente from './components/Administrador/EditarCadastroCliente';
import Relatorios from './components/Administrador/Relatorios';
import NotificacoesAdmin from './components/Administrador/NotificacoesAdmin';
import TelaInicio from './components/Inicio/TelaInicio';
import SimuladorFrete from './components/Inicio/SimuladorFrete';
import Login from './components/Inicio/Login';
import LoginUsuario from './components/Inicio/LoginUsuario';
import CadastroMotoboy from './components/Administrador/CadastroMotoboy';
import CadastroCliente from './components/Inicio/CadastroCliente';
<<<<<<< HEAD
=======
import Acompanhamento from './components/Cliente/Acompanhamento';
import HistoricoCliente from './components/Cliente/HistoricoCliente';
import SolicitacaoTransporte from './components/Vitor/SolicitacaoTransporte';
>>>>>>> 39a98b4a3d6b2b163d093dc6cca32ef36bfa0258
import TelaCliente from './components/Cliente/TelaCliente';
import AceitaCorridas from './components/Motoboy/AceitaCorridas';
import TelaMotoboy from './components/Motoboy/TelaMotoboy';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';


//
import CalculoFrete from './components/pages/CalculoFrete';
import FormEdit from './components/pages/FormEditar/FormEdit';
import GerenciamentoEntregas from './components/pages/GerenciamentoEntregas';
import Home from './components/pages/Home'
import LoginInicio from './components/pages/LoginInicio';
import FormCadastroClient from './components/FormCadastro/FormCadastroClient';
import GestaoClient from './components/pages/GestaoClient';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* LOGIN */}
        <Route path='/' element={<Home />} />
        <Route path="/login-usuario" element={<LoginUsuario />} />
        {/* CLIENT */}
        <Route path="/cadastrar-cliente" element={<CadastroCliente />} />

        <Route path="/tela_inicio" element={<TelaInicio />} />
        <Route path="/cadastrar-cliente" element={<CadastroCliente />} />
        {/* MOTOBOY */}
        <Route path="/cadastrar-motoboy" element={<CadastroMotoboy />} />
        <Route path="/motoboy" element={<TelaMotoboy />} />
        <Route path="/aceita-corridas" element={<AceitaCorridas />} />

        {/* ADM */}
        <Route path="/administrador" element={<TelaAdministrador />} />
        <Route path="/gerenciamento-entregas" element={<GerenciamentoEntrega />} />
        <Route path="/editar-parametro" element={<EditarParametro />} />
        <Route path="/editar-cadastro-cliente" element={<EditarCadastroCliente />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/notificacoes-admin" element={<NotificacoesAdmin />} />


        <Route path='/form_entregas' element={<FormEdit />} />
        <Route path='/login_inicio' element={<LoginInicio />} />
        <Route path='/cadastro_client' element={<FormCadastroClient />} />


        {/* NAO SERA USADO */}
        {/* CLIENT */}
        <Route path="/simulador-frete" element={<SimuladorFrete />} />
        <Route path="/cliente" element={<TelaCliente />} />
        <Route path='/gestao_client' element={<GestaoClient />} />
        <Route path='/gestao_client/:id' element={<GestaoClient />} />
        <Route path='/gestao_client/:tipo' element={<GestaoClient />} />

        <Route path='/gerenciamento_entregas' element={<GerenciamentoEntregas />} />
        
      </Routes>
    </Router>
  );
}

export default App;