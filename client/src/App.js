import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GerenciamentoEntregas from "./components/pages/Gerenciamento/GereciamentoEntregas";
import EditarParametro from "./components/Administrador/EditarParametro";
import EditarCadastroCliente from "./components/Administrador/EditarCadastroCliente";
import CadastroCliente from "./components/Inicio/CadastroCliente";
import TelaCliente from './components/Frete/TelaCliente'
import FormEdit from "./components/pages/FormEditar/FormEdit";
import Home from "./components/pages/Home";
import FormCadastroClient from "./components/FormCadastro/FormCadastroClient";

import GerenciamentoClient from "./components/pages/Gerenciamento/GerenciarClient";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frete" element={<TelaCliente />} />
        <Route path="/cadastrar-cliente" element={<CadastroCliente />} />
        <Route path="/tela_cliente" element={<TelaCliente />} />
        <Route path="/gerenciamento-entregas" element={<GerenciamentoEntregas />} />

        <Route path="/editar-parametro" element={<EditarParametro />} />
        <Route path="/editar-cadastro-cliente" element={<EditarCadastroCliente />} />
        <Route path="/form_entregas" element={<FormEdit />} />
        <Route path="/cadastro_client" element={<FormCadastroClient />} />
        <Route path="/gerenciamento_client" element={<GerenciamentoClient />} />
        
      </Routes>

    </Router>
  );
};

export default App;
