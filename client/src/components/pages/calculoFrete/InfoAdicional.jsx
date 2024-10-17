import React, { useState } from 'react';
import './InfoAdicional.css'; 
import { useNavigate } from 'react-router-dom';

const InfoAdicional = () => {
    const navigate = useNavigate();
    const [pedido, setPedido] = useState({
        remetente: {
            logradouro: '',
            bairro: '',
            numero: '',
            complemento: '',
            nome: '',
            celular: '',
            cpfCnpj: '',
            email: ''
        },
        destinatario: {
            logradouro: '',
            bairro: '',
            numero: '',
            complemento: '',
            instrucoes: '',
            nome: '',
            celular: '',
            cpfCnpj: ''
        },
    });

    const handleChange = (e, section, field) => {
        setPedido({
            ...pedido,
            [section]: {
                ...pedido[section],
                [field]: e.target.value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const pedidoId = Math.floor(Math.random() * 1000000);
        alert(`Pedido realizado com sucesso! Número do pedido: ${pedidoId}`);
        navigate('/pedidos_cadastrados', { state: { pedido, pedidoId } });
    };

    return (
        <div>
            <nav className="navbar">
                <h1>Informações Adicionais</h1>
            </nav>
            <form className="form-container" onSubmit={handleSubmit}>
                <h2>Informações do Remetente</h2>
                <div className="row">
                    <input type="text" placeholder="Logradouro" value={pedido.remetente.logradouro} onChange={(e) => handleChange(e, 'remetente', 'logradouro')} />
                    <input type="text" placeholder="Bairro" value={pedido.remetente.bairro} onChange={(e) => handleChange(e, 'remetente', 'bairro')} />
                </div>
                <div className="row">
                    <input type="text" placeholder="Número" value={pedido.remetente.numero} onChange={(e) => handleChange(e, 'remetente', 'numero')} />
                    <input type="text" placeholder="Complemento" value={pedido.remetente.complemento} onChange={(e) => handleChange(e, 'remetente', 'complemento')} />
                    <input type="text" placeholder="Nome do Remetente" value={pedido.remetente.nome} onChange={(e) => handleChange(e, 'remetente', 'nome')} />
                </div>
                <div className="row">
                    <input type="text" placeholder="Celular" value={pedido.remetente.celular} onChange={(e) => handleChange(e, 'remetente', 'celular')} />
                    <input type="text" placeholder="CPF ou CNPJ" value={pedido.remetente.cpfCnpj} onChange={(e) => handleChange(e, 'remetente', 'cpfCnpj')} />
                    <input type="email" placeholder="Email" value={pedido.remetente.email} onChange={(e) => handleChange(e, 'remetente', 'email')} />
                </div>

                <br />

                <h2>Informações do Destinatário</h2>
                <div className="row">
                    <input type="text" placeholder="Logradouro" value={pedido.destinatario.logradouro} onChange={(e) => handleChange(e, 'destinatario', 'logradouro')} />
                    <input type="text" placeholder="Bairro" value={pedido.destinatario.bairro} onChange={(e) => handleChange(e, 'destinatario', 'bairro')} />
                </div>
                <div className="row">
                    <input type="text" placeholder="Número" value={pedido.destinatario.numero} onChange={(e) => handleChange(e, 'destinatario', 'numero')} />
                    <input type="text" placeholder="Complemento" value={pedido.destinatario.complemento} onChange={(e) => handleChange(e, 'destinatario', 'complemento')} />
                    <input type="text" placeholder="Instruções" value={pedido.destinatario.instrucoes} onChange={(e) => handleChange(e, 'destinatario', 'instrucoes')} />
                </div>
                <div className="row">
                    <input type="text" placeholder="Nome do Destinatário" value={pedido.destinatario.nome} onChange={(e) => handleChange(e, 'destinatario', 'nome')} />
                    <input type="text" placeholder="Celular" value={pedido.destinatario.celular} onChange={(e) => handleChange(e, 'destinatario', 'celular')} />
                    <input type="text" placeholder="CPF ou CNPJ" value={pedido.destinatario.cpfCnpj} onChange={(e) => handleChange(e, 'destinatario', 'cpfCnpj')} />
                </div>
                <button type="submit">Pedir</button>
            </form>
        </div>
    );
};

export default InfoAdicional;
