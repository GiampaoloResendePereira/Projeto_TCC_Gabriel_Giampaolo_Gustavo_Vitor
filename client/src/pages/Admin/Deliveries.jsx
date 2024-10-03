// src/pages/Admin/Deliveries.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import deliveryService from '../../services/deliveryService'; // serviço para gerenciar entregas

const Deliveries = () => {
    const [deliveries, setDeliveries] = useState([]);
    const [selectedDelivery, setSelectedDelivery] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Carregar entregas do servidor
        const fetchDeliveries = async () => {
            const data = await deliveryService.getDeliveries(); // função para obter entregas
            setDeliveries(data);
        };
        fetchDeliveries();
    }, []);

    const handleModalOpen = (delivery) => {
        setSelectedDelivery(delivery);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedDelivery(null);
    };

    return (
        <div>
            <Navbar />
            <div className="deliveries-page">
                <h1>Gerenciamento de Entregas</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Motoboy</th>
                            <th>Status</th>
                            <th>Data de Agendamento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deliveries.map((delivery) => (
                            <tr key={delivery.id}>
                                <td>{delivery.id}</td>
                                <td>{delivery.clientName}</td>
                                <td>{delivery.motoboyName}</td>
                                <td>{delivery.status}</td>
                                <td>{new Date(delivery.scheduledDate).toLocaleDateString()}</td>
                                <td>
                                    <button onClick={() => handleModalOpen(delivery)}>Detalhes</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showModal && (
                <Modal onClose={handleModalClose}>
                    {/* Passar detalhes da entrega selecionada para o modal */}
                    {selectedDelivery && (
                        <div>
                            <h2>Detalhes da Entrega</h2>
                            <p>Cliente: {selectedDelivery.clientName}</p>
                            <p>Motoboy: {selectedDelivery.motoboyName}</p>
                            <p>Peso: {selectedDelivery.weight} kg</p>
                            <p>Distância: {selectedDelivery.distance} km</p>
                            <p>Custo: R$ {selectedDelivery.cost}</p>
                            <p>Status Atual: {selectedDelivery.status}</p>
                            <p>Histórico de Status: {selectedDelivery.statusHistory.join(', ')}</p>
                            {/* Adicione botões para editar, cancelar ou concluir entrega */}
                        </div>
                    )}
                </Modal>
            )}
            <Footer />
        </div>
    );
};

export default Deliveries;
