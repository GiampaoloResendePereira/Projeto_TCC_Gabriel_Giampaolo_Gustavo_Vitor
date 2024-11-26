// src/pages/GerenciamentoEntrega.jsx
import React, { useEffect, useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import '../../../styles/global.css'
import styles from './GerenciamentoClient.module.css'
import TabelaEntregas from './TabelaEntregas';
import NavBarAdmin from '../../layout/NavBarAdmin';



function GerenciamentoEntregasClient() {
    // Estado para armazenar os filtros
    const [filters, setFilters] = useState({
        codigo: '',
        cliente: '',
        motoboy: '',
        status: '',
    });

    // Função para atualizar os filtros
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    // Função para aplicar o filtro (aqui pode adicionar lógica para buscar os dados filtrados)
    const handleFilterSubmit = (e) => {
        e.preventDefault();
        // Lógica para filtrar os dados vai aqui (você pode fazer uma requisição com os filtros ou filtrar localmente)
        console.log('Filtros aplicados:', filters);
    };

    return (
        <>
            <NavBarAdmin />

            <div className="container mt-5">
                <h4 className={`${styles.estilo} container`}>Gerenciamento de Entregas</h4>

                {/* Filtros de Pesquisa */}
                <Form onSubmit={handleFilterSubmit} className="mb-4">
                    <div className="d-flex gap-2">
                        <Form.Control
                            type="text"
                            placeholder="Pesquisar Código"
                            name="codigo"
                            value={filters.codigo}
                            onChange={handleFilterChange}
                        />
                        <Form.Control
                            type="text"
                            placeholder="Pesquisar Cliente"
                            name="cliente"
                            value={filters.cliente}
                            onChange={handleFilterChange}
                        />
                        <Form.Control
                            type="text"
                            placeholder="Pesquisar Motoboy"
                            name="motoboy"
                            value={filters.motoboy}
                            onChange={handleFilterChange}
                        />
                        <Form.Control
                            as="select"
                            name="status"
                            value={filters.status}
                            onChange={handleFilterChange}
                        >
                            <option value="">Status</option>
                            <option value="pendente">Pendente</option>
                            <option value="em_andamento">Em andamento</option>
                            <option value="concluido">Concluído</option>
                            <option value="cancelado">Cancelado</option>
                        </Form.Control>
                        <Button variant="danger" type="submit">Pesquisar</Button>
                    </div>
                </Form>

                {/* Passando os filtros para o componente TabelaCliente */}
                 <TabelaEntregas filters={filters} /> 
            </div>
        </>
    );
}

export default GerenciamentoEntregasClient;
