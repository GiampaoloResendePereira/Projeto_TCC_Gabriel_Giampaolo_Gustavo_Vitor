// src/pages/Admin/Notifications.jsx
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Notifications = () => {
    return (
        <div>
            <Navbar />
            <div className="notifications-page">
                <h1>Gerenciamento de Notificações</h1>
                {/* Aqui você pode adicionar a lógica para gerenciar notificações */}
                <p>Configurações de notificações serão exibidas aqui.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Notifications;
