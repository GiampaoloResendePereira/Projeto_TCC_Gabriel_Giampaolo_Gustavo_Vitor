// src/pages/Admin/Settings.jsx
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Settings = () => {
    const [params, setParams] = useState({
        weightCost: 10, // Exemplo de valor por peso
        distanceCost: 2, // Exemplo de valor por distância
        timeCost: 1 // Exemplo de valor por tempo
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setParams({ ...params, [name]: value });
    };

    const handleSave = () => {
        // Função para salvar os parâmetros atualizados
        console.log('Parâmetros salvos:', params);
    };

    return (
        <div>
            <Navbar />
            <div className="settings-page">
                <h1>Atualização de Parâmetros de Cálculo</h1>
                <label>
                    Valor por Peso:
                    <input
                        type="number"
                        name="weightCost"
                        value={params.weightCost}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Valor por Distância:
                    <input
                        type="number"
                        name="distanceCost"
                        value={params.distanceCost}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Valor por Tempo:
                    <input
                        type="number"
                        name="timeCost"
                        value={params.timeCost}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleSave}>Salvar Parâmetros</button>
            </div>
            <Footer />
        </div>
    );
};

export default Settings;
