// src/pages/GerenciamentoEntrega.jsx
import React, { useState } from 'react';
import { Table, Modal, Button } from 'react-bootstrap'; // Certifique-se de que o react-bootstrap está instalado
import './GerenciamentoEntrega.css'; // Verifique se o caminho está correto

const GerenciamentoEntrega = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const deliveries = [
    // Exemplo de dados de entrega
    {
      id: 1,
      cliente: 'Cliente 1',
      motoboy: 'Motoboy 1',
      status: 'Em andamento',
      dataAgendamento: '2024-10-01',
      dataEntrega: '2024-10-02',
    },
    // Adicione mais entregas conforme necessário
  ];

  const handleShow = (delivery) => {
    setSelectedDelivery(delivery);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedDelivery(null);
  };

  return (
    <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Motoboy</th>
            <th>Status</th>
            <th>Data de Agendamento</th>
            <th>Data de Entrega</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery.id}>
              <td>{delivery.id}</td>
              <td>{delivery.cliente}</td>
              <td>{delivery.motoboy}</td>
              <td>{delivery.status}</td>
              <td>{delivery.dataAgendamento}</td>
              <td>{delivery.dataEntrega}</td>
              <td>
                <Button onClick={() => handleShow(delivery)}>Detalhes</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes da Entrega</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDelivery && (
            <div>
              <p><strong>Cliente:</strong> {selectedDelivery.cliente}</p>
              <p><strong>Motoboy:</strong> {selectedDelivery.motoboy}</p>
              <p><strong>Status:</strong> {selectedDelivery.status}</p>
              <p><strong>Data de Agendamento:</strong> {selectedDelivery.dataAgendamento}</p>
              <p><strong>Data de Entrega:</strong> {selectedDelivery.dataEntrega}</p>
              {/* Adicione mais detalhes conforme necessário */}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          {/* Adicione botões para editar, cancelar ou marcar como concluída a entrega */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GerenciamentoEntrega;
