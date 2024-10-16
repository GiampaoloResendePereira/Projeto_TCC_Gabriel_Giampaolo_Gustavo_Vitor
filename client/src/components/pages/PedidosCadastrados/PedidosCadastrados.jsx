import React, { useState, useEffect } from 'react';

function PedidosCadastrados() {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        // Recuperar pedidos do localStorage
        const pedidosArmazenados = JSON.parse(localStorage.getItem('pedidos')) || [];
        setPedidos(pedidosArmazenados);
    }, []);

    const handleDelete = (index) => {
        const novosPedidos = pedidos.filter((_, i) => i !== index);
        setPedidos(novosPedidos);
        localStorage.setItem('pedidos', JSON.stringify(novosPedidos));
    };

    const handleEdit = (index) => {
        const novoNome = prompt("Digite o novo nome do remetente:", pedidos[index].nomeRemetente);
        if (novoNome) {
            const novosPedidos = [...pedidos];
            novosPedidos[index].nomeRemetente = novoNome;
            setPedidos(novosPedidos);
            localStorage.setItem('pedidos', JSON.stringify(novosPedidos));
        }
    };

    return (
        <div>
            <h1>Pedidos Cadastrados</h1>
            <ul>
                {pedidos.map((pedido, index) => (
                    <li key={index}>
                        {pedido.nomeRemetente} - {pedido.logradouro}, {pedido.numero}
                        <button onClick={() => handleEdit(index)}>Editar</button>
                        <button onClick={() => handleDelete(index)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PedidosCadastrados;
