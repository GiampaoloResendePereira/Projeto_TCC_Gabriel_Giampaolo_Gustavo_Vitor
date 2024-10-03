// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './pages/Admin/AdminHome';
import Deliveries from './pages/Admin/Deliveries';
import Reports from './pages/Admin/Reports';
import Settings from './pages/Admin/Settings';
import Login from './pages/Login/Login'; // Exemplo de importação para a página de login
import RegisterClient from './pages/Login/RegisterClient'; // Exemplo de importação
import RegisterMotoboy from './pages/Login/RegisterMotoboy'; // Exemplo de importação
import ClientHome from './pages/Client/ClientHome'; // Exemplo de importação
import RequestDelivery from './pages/Client/RequestDelivery'; // Exemplo de importação
import TrackDelivery from './pages/Client/TrackDelivery'; // Exemplo de importação
import MotoboyHome from './pages/Motoboy/MotoboyHome'; // Exemplo de importação
import AvailableRuns from './pages/Motoboy/AvailableRuns'; // Exemplo de importação
import Notifications from './pages/Motoboy/Notifications'; // Exemplo de importação

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Rotas do Admin */}
                <Route path="/admin" element={<AdminHome />} />
                <Route path="/admin/deliveries" element={<Deliveries />} />
                <Route path="/admin/reports" element={<Reports />} />
                <Route path="/admin/settings" element={<Settings />} />

                {/* Rotas de Login */}
                <Route path="/login" element={<Login />} />
                <Route path="/register-client" element={<RegisterClient />} />
                <Route path="/register-motoboy" element={<RegisterMotoboy />} />

                {/* Rotas do Cliente */}
                <Route path="/client" element={<ClientHome />} />
                <Route path="/client/request-delivery" element={<RequestDelivery />} />
                <Route path="/client/track-delivery" element={<TrackDelivery />} />

                {/* Rotas do Motoboy */}
                <Route path="/motoboy" element={<MotoboyHome />} />
                <Route path="/motoboy/available-runs" element={<AvailableRuns />} />
                <Route path="/motoboy/notifications" element={<Notifications />} />

                {/* Rotas padrão ou 404 */}
                <Route path="/" element={<Login />} /> {/* Redireciona para a página de login */}
                <Route path="*" element={<h1>Página Não Encontrada</h1>} />
            </Routes>
        </Router>
    );
};

export default App;
