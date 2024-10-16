// src/pages/GerenciamentoEntrega.jsx
import React, { useState, useEffect } from 'react';
import './GerenciamentoEntregas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import entregasData from '../../data/entregas.json'; // Importando o JSON

const GerenciamentoEntregas = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEntrega, setSelectedEntrega] = useState(null);
  const [entregas, setEntregas] = useState([]); // Estado para as entregas
  const [filtroCliente, setFiltroCliente] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('');
  const [filtroMotoboy, setFiltroMotoboy] = useState('');

  useEffect(() => {
    // Carrega os dados do JSON para o estado
    setEntregas(entregasData);
  }, []);

  const handleShowModal = (entrega) => {
    setSelectedEntrega(entrega);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEntrega(null);
  };

  const handleFilter = () => {
    const filtered = entregasData.filter(entrega => {
      return (
        (filtroCliente ? entrega.cliente.toLowerCase().includes(filtroCliente.toLowerCase()) : true) &&
        (filtroStatus ? entrega.status.toLowerCase() === filtroStatus.toLowerCase() : true) &&
        (filtroMotoboy ? entrega.motoboy === filtroMotoboy : true)
      );
    });
    setEntregas(filtered);
  };

  return (
    <div className="gerenciamento-entrega-container">
      <h1 className='fundo-container'>Gerenciamento de Entregas</h1>

      {/* Filtros de Pesquisa */}
      <div className="filtros mb-3">
        <input 
          type="text" 
          placeholder="Filtrar por cliente" 
          value={filtroCliente}
          onChange={(e) => setFiltroCliente(e.target.value)} 
        />
        <input type="date" />
        <input type="date" />
        <select onChange={(e) => setFiltroStatus(e.target.value)}>
          <option value="">Selecione o status</option>
          <option value="Em Andamento">Em Andamento</option>
          <option value="Concluída">Concluída</option>
          <option value="Cancelada">Cancelada</option>
        </select>
        <select onChange={(e) => setFiltroMotoboy(e.target.value)}>
          <option value="">Selecione o motoboy</option>
          <option value="Carlos Oliveira">Carlos Oliveira</option>
          <option value="Fernando Santos">Fernando Santos</option>
          <option value="Gustavo Ferreira">Gustavo Ferreira</option>
          <option value="Maria Fernandes">Maria Fernandes</option>
        </select>
        <Button variant="primary" onClick={handleFilter}>Buscar</Button>
      </div>

      {/* Tabela de Entregas */}
      <table className="table table-striped mt-3">
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
          {entregas.map((entrega) => (
            <tr key={entrega.id}>
              <td>{entrega.id}</td>
              <td>{entrega.cliente}</td>
              <td>{entrega.motoboy}</td>
              <td>{entrega.status}</td>
              <td>{entrega.dataAgendamento}</td>
              <td>{entrega.dataEntrega || 'Pendente'}</td>
              <td>
                <Button 
                  variant="info" 
                  onClick={() => handleShowModal(entrega)}>
                  Detalhes
                </Button>
                <Button variant="warning" className="ms-2">
                  Editar
                </Button>
                <Button variant="danger" className="ms-2">
                  Cancelar
                </Button>
                <Button variant="success" className="ms-2">
                  Concluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para Exibir Detalhes da Entrega */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes da Entrega</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEntrega && (
            <div className='status-vermelho'>
              <p><strong>ID:</strong> {selectedEntrega.id}</p>
              <p><strong>Cliente:</strong> {selectedEntrega.cliente}</p>
              <p><strong>Motoboy:</strong> {selectedEntrega.motoboy}</p>
              <p><strong>Status:</strong> {selectedEntrega.status}</p>
              <p><strong>Data de Agendamento:</strong> {selectedEntrega.dataAgendamento}</p>
              <p><strong>Data de Entrega:</strong> {selectedEntrega.dataEntrega || 'Pendente'}</p>
              <p><strong>Peso:</strong> {selectedEntrega.peso}</p>
              <p><strong>Distância:</strong> {selectedEntrega.distancia}</p>
              <p><strong>Custo:</strong> {selectedEntrega.custo}</p>
              <h6>Histórico de Status:</h6>
              <ul>
                {selectedEntrega.historicoStatus.map((status, index) => (
                  <li key={index}>{status.status} - {status.data}</li>
                ))}
              </ul>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GerenciamentoEntregas;