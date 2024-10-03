// src/pages/Admin/Reports.jsx
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Reports = () => {
    return (
        <div>
            <Navbar />
            <div className="reports-page">
                <h1>Relatórios de Entregas</h1>
                {/* Aqui você pode adicionar a lógica para exibir relatórios */}
                <p>Relatórios serão exibidos aqui.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Reports;
