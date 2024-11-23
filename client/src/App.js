import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TelaAdministrador from "./components/Administrador/TelaAdministrador";
import GerenciamentoEntrega from "./components/Administrador/GerenciamentoEntregas";
import EditarParametro from "./components/Administrador/EditarParametro";
import EditarCadastroCliente from "./components/Administrador/EditarCadastroCliente";
import SimuladorFrete from "./components/Inicio/SimuladorFrete";

import CadastroCliente from "./components/Inicio/CadastroCliente";
import TelaCliente from './components/Frete/TelaCliente'

import FormEdit from "./components/pages/FormEditar/FormEdit";
import Gerenciamento from "./components/pages/Gerenciamento";
import Home from "./components/pages/Home";
import LoginInicio from "./components/pages/LoginInicio";
import FormCadastroClient from "./components/FormCadastro/FormCadastroClient";
import GestaoClient from "./components/pages/GestaoClient";
import GerenciamentoClient from "./components/pages/Gerenciamento/GerenciarClient";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar-cliente" element={<CadastroCliente />} />
        <Route path="/tela_cliente" element={<TelaCliente />} />
        <Route path="/administrador" element={<TelaAdministrador />} />
        <Route path="/gerenciamento-entregas" element={<GerenciamentoEntrega />} />
        <Route path="/editar-" element={<EditarParametro />} />
        <Route path="/editparametroar-cadastro-cliente" element={<EditarCadastroCliente />} />
        <Route path="/form_entregas" element={<FormEdit />} />
        <Route path="/cadastro_client" element={<FormCadastroClient />} />
        <Route path="/login_inicio" element={<LoginInicio />} />
        <Route path="/simulador-frete" element={<SimuladorFrete />} />
        <Route path="/gerenciamento_client" element={<GerenciamentoClient />} />
        <Route path="/gestao_client" element={<GestaoClient />} />
        <Route path="/gestao_client/:id" element={<GestaoClient />} />
        <Route path="/gerenciamento_entregas" element={<Gerenciamento />} />
      </Routes>

    </Router>
  );
};

export default App;
