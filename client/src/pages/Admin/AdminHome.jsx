// src/pages/Admin/AdminHome.jsx
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const AdminHome = () => {
    return (
        <div>
            <Navbar />
            <div className="admin-home">
                <h1>Painel de Controle do Administrador</h1>
                <div className="admin-links">
                    <Link to="/admin/deliveries">Gerenciamento de Entregas</Link>
                    <Link to="/admin/reports">Relatórios de Entregas</Link>
                    <Link to="/admin/settings">Configurações</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AdminHome;
