// src/pages/AceitarCorridas.jsx
import React, { useState } from 'react';
import { Table, Button, Container, Modal } from 'react-bootstrap';

function AceitarCorridas() {
  // Estado para armazenar as corridas disponíveis e a corrida selecionada
  const [corridas, setCorridas] = useState([
    { id: 1, cliente: 'Cliente A', destino: 'Rua A, 123', horario: '15:30', status: 'Disponível' },
    { id: 2, cliente: 'Cliente B', destino: 'Av. B, 456', horario: '16:00', status: 'Disponível' },
    { id: 3, cliente: 'Cliente C', destino: 'Rua C, 789', horario: '16:30', status: 'Disponível' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [corridaSelecionada, setCorridaSelecionada] = useState(null);

  // Função para abrir o modal de confirmação
  const handleAccept = (id) => {
    const corrida = corridas.find(corrida => corrida.id === id);
    setCorridaSelecionada(corrida);
    setShowModal(true);
  };

  // Função para confirmar a corrida
  const confirmarCorrida = () => {
    setCorridas(corridas.map(corrida => 
      corrida.id === corridaSelecionada.id ? { ...corrida, status: 'Aceita' } : corrida
    ));
    setShowModal(false);
  };

  return (
    <Container className="mt-5">
      <h4 className="text-white">Aceitar Corridas</h4>

      {/* Tabela de corridas disponíveis */}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Destino</th>
            <th>Horário</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {corridas.map(corrida => (
            <tr key={corrida.id}>
              <td>{corrida.id}</td>
              <td>{corrida.cliente}</td>
              <td>{corrida.destino}</td>
              <td>{corrida.horario}</td>
              <td>{corrida.status}</td>
              <td>
                {corrida.status === 'Disponível' && (
                  <Button variant="success" onClick={() => handleAccept(corrida.id)}>
                    Aceitar
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de confirmação */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Corrida</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza de que deseja aceitar a corrida para o destino: <strong>{corridaSelecionada?.destino}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="success" onClick={confirmarCorrida}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default AceitarCorridas;
