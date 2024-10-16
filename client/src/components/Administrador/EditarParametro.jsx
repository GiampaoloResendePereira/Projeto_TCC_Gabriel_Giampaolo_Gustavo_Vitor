// src/components/Administrador/EditarParametro.jsx

import React, { useState, useEffect } from 'react';

const EditarParametro = () => {
  const [parametros, setParametros] = useState({ valorPorPeso: [3, 5, 9, 12], valorPorKm: 0.5, valorPorMinuto: 0.3 });

  useEffect(() => {
    fetch('/parametros.json')
      .then((response) => response.json())
      .then((data) => setParametros(data))
      .catch((error) => console.error("Erro ao carregar parâmetros:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Novos parâmetros salvos:", parametros);
    alert("Parâmetros atualizados. Recarregue a página para aplicar as mudanças.");
    // Aqui, você pode adicionar uma chamada ao backend para salvar as mudanças.
  };

  return (
    <div className="container mt-5">
      <h2>Editar Parâmetros de Cálculo de Frete</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Valor por Peso (Kg):</label>
          <input
            type="text"
            className="form-control"
            value={parametros.valorPorPeso.join(', ')}
            onChange={(e) => setParametros({ ...parametros, valorPorPeso: e.target.value.split(',').map(Number) })}
          />
          <small className="form-text text-muted">
            Insira os valores separados por vírgulas.
          </small>
        </div>

        <div className="mb-3">
          <label>Valor por Km rodado:</label>
          <input
            type="number"
            className="form-control"
            value={parametros.valorPorKm}
            onChange={(e) => setParametros({ ...parametros, valorPorKm: parseFloat(e.target.value) })}
          />
        </div>

        <div className="mb-3">
          <label>Valor por Minuto de Deslocamento:</label>
          <input
            type="number"
            className="form-control"
            value={parametros.valorPorMinuto}
            onChange={(e) => setParametros({ ...parametros, valorPorMinuto: parseFloat(e.target.value) })}
          />
        </div>

        <button type="submit" className="btn btn-primary">Salvar Parâmetros</button>
      </form>
    </div>
  );
};

export default EditarParametro;
