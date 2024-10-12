// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaAdministrador from './pages/Administrador/TelaAdministrador';
import GerenciamentoEntrega from './pages/Administrador/GerenciamentoEntrega';
import EditarParametro from './pages/Administrador/EditarParametro';
import EditarPerfis from './pages/Administrador/EditarPerfis';
import Relatorios from './pages/Administrador/Relatorios';
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
