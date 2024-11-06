import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TelaAdministrador from "./components/Administrador/TelaAdministrador";
import GerenciamentoEntrega from "./components/Administrador/GerenciamentoEntregas";
import EditarParametro from "./components/Administrador/EditarParametro";
import EditarCadastroCliente from "./components/Administrador/EditarCadastroCliente";
import TelaInicio from "./components/Inicio/TelaInicio";
import SimuladorFrete from "./components/Inicio/SimuladorFrete";
import LoginUsuario from "./components/Inicio/LoginUsuario";
import CadastroMotoboy from "./components/Administrador/CadastroMotoboy";
import CadastroCliente from "./components/Inicio/CadastroCliente";
import TelaCliente from "./components/Vitor/TelaCliente";
import AceitaCorridas from "./components/Motoboy/AceitaCorridas";
import TelaMotoboy from "./components/Motoboy/TelaMotoboy";

// import Acompanhamento from './components/Cliente/Acompanhamento';
// import HistoricoCliente from './components/Cliente/HistoricoCliente';

import FormEdit from "./components/pages/FormEditar/FormEdit";
import Gerenciamento from "./components/pages/Gerenciamento";
import Home from "./components/pages/Home";
import LoginInicio from "./components/pages/LoginInicio";
import FormCadastroClient from "./components/FormCadastro/FormCadastroClient";
import GestaoClient from "./components/pages/GestaoClient";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-usuario" element={<LoginUsuario />} />

        <Route path="/cadastrar-cliente" element={<CadastroCliente />} />
        <Route path="/tela_inicio" element={<TelaInicio />} />

        <Route path="/cadastrar-motoboy" element={<CadastroMotoboy />} />
        <Route path="/motoboy" element={<TelaMotoboy />} />
        <Route path="/aceita-corridas" element={<AceitaCorridas />} />

        <Route path="/administrador" element={<TelaAdministrador />} />
        <Route
          path="/gerenciamento-entregas"
          element={<GerenciamentoEntrega />}
        />
        <Route path="/editar-parametro" element={<EditarParametro />} />
        <Route
          path="/editar-cadastro-cliente"
          element={<EditarCadastroCliente />}
        />

        <Route path="/form_entregas" element={<FormEdit />} />
        <Route path="/cadastro_client" element={<FormCadastroClient />} />

        <Route path="/login_inicio" element={<LoginInicio />} />

        <Route path="/simulador-frete" element={<SimuladorFrete />} />
        <Route path="/cliente" element={<TelaCliente />} />
        <Route path="/gestao_client" element={<GestaoClient />} />
        <Route path="/gestao_client/:id" element={<GestaoClient />} />
        {/* <Route path='/gestao_client/:tipo' element={<GestaoClient />} /> */}

        <Route path="/gerenciamento_entregas" element={<Gerenciamento />} />
        {/* <Route path="/notificacoes-admin" element={<NotificacoesAdmin />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
