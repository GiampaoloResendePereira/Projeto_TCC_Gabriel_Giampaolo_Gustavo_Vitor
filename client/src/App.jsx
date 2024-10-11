// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaAdministrador from './pages/Administrador/TelaAdministrador';
import GerenciamentoEntrega from './pages/GerenciamentoEntrega';
import EditarParametro from './pages/EditarParametro';
import EditarPerfis from './pages/EditarPerfis';
import Relatorios from './pages/Relatorios';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaAdministrador />} />
        <Route path="/gerenciamento-entregas" element={<GerenciamentoEntrega />} />
        <Route path="/editar-parametro" element={<EditarParametro />} />
        <Route path="/editar-perfis" element={<EditarPerfis />} />
        <Route path="/relatorios" element={<Relatorios />} />
      </Routes>
    </Router>
  );
};

export default App;
