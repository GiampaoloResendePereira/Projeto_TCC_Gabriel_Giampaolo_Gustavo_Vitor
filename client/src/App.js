import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaAdministrador from './components/Administrador/TelaAdministrador';
import GerenciamentoEntrega from './components/Administrador/GerenciamentoEntregas';
import EditarParametro from './components/Administrador/EditarParametro';
import EditarCadastroMotoboy from './components/Administrador/EditarCadastroMotoboy';
import Relatorios from './components/Administrador/Relatorios';
import TelaInicio from './components/Inicio/TelaInicio';
import SimuladorFrete from './components/Inicio/SimuladorFrete';
import CadastroMotoboy from './components/Inicio/CadastroMotoboy';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas */}
        <Route path="/" element={<TelaInicio />} />
        <Route path="/simulador-frete" element={<SimuladorFrete />} />
        <Route path="/cadastrar-motoboy" element={<CadastroMotoboy />} />
        <Route path="/administrador" element={<TelaAdministrador />} />
        <Route path="/gerenciamento-entregas" element={<GerenciamentoEntrega />} />
        <Route path="/editar-parametro" element={<EditarParametro />} />
        <Route path="/editar-cadastro-motoboy" element={<EditarCadastroMotoboy />} />
        <Route path="/relatorios" element={<Relatorios />} />
      </Routes>
    </Router>
  );
};

export default App;
