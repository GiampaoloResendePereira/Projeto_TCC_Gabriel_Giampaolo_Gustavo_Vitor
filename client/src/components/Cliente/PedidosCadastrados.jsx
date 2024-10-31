import React, { useState } from 'react';
import './PedidosCadastrados.css'; 
import { useNavigate, useLocation } from 'react-router-dom';

const PedidosCadastrados = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [pedidos, setPedidos] = useState(location.state ? [{ ...location.state.pedido, id: location.state.pedidoId }] : []);

    const handleEdit = (id) => {
        const pedido = pedidos.find(p => p.id === id);
        navigate('/', { state: pedido });
    };

    const handleDelete = (id) => {
        setPedidos(pedidos.filter(p => p.id !== id));
    };

    return (
        <div>
            <nav className="navbar">
                <h1>Pedidos</h1>
            </nav>
            <div className="pedidos-container">
                {pedidos.map((pedido, index) => (
                    <div key={pedido.id} className="pedido-box">
                        <h2>Pedido {pedido.id}</h2>
                        <button className='buttonPedidos' onClick={() => handleEdit(pedido.id)}>Editar</button>
                        <button className='buttonPedidos' onClick={() => handleDelete(pedido.id)}>Cancelar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PedidosCadastrados;
