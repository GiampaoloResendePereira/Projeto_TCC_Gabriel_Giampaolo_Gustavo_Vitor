import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CadastroMotoboy.css';

const CadastroMotoboy = ({ motoboyId }) => {
  const [motoboyData, setMotoboyData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    modeloMoto: '',
    placaMoto: '',
    anoMoto: '',
  });

  const fetchMotoboyData = async (id) => {
    try {
      const response = await fetch('/motoboys'); // Endpoint para buscar motoboys
      const data = await response.json();
      const motoboy = data.find((m) => m.id === id);

      if (motoboy) {
        setMotoboyData(motoboy);
      }
    } catch (error) {
      console.error("Erro ao buscar dados do motoboy:", error);
    }
  };

  useEffect(() => {
    if (motoboyId) {
      fetchMotoboyData(motoboyId);
    }
  }, [motoboyId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMotoboyData({
      ...motoboyData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Dados do motoboy:", motoboyData);

    try {
      const response = await fetch('/saveMotoboy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(motoboyData),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
      } else {
        alert("Erro ao salvar os dados do motoboy.");
      }
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar os dados do motoboy.");
    }

    setMotoboyData({
      nome: '',
      email: '',
      telefone: '',
      cpf: '',
      modeloMoto: '',
      placaMoto: '',
      anoMoto: '',
    });
  };

  return (
    <div className="container mt-5">
      <h2>{motoboyId ? 'Editar Motoboy' : 'Cadastro de Motoboy'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={motoboyData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={motoboyData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="telefone" className="form-label">Telefone</label>
          <input
            type="text"
            className="form-control"
            id="telefone"
            name="telefone"
            value={motoboyData.telefone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cpf" className="form-label">CPF</label>
          <input
            type="text"
            className="form-control"
            id="cpf"
            name="cpf"
            value={motoboyData.cpf}
            onChange={handleChange}
            required
          />
        </div>

        <h4>Informações da Moto</h4>

        <div className="mb-3">
          <label htmlFor="modeloMoto" className="form-label">Modelo da Moto</label>
          <input
            type="text"
            className="form-control"
            id="modeloMoto"
            name="modeloMoto"
            value={motoboyData.modeloMoto}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="placaMoto" className="form-label">Placa da Moto</label>
          <input
            type="text"
            className="form-control"
            id="placaMoto"
            name="placaMoto"
            value={motoboyData.placaMoto}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="anoMoto" className="form-label">Ano da Moto</label>
          <input
            type="number"
            className="form-control"
            id="anoMoto"
            name="anoMoto"
            value={motoboyData.anoMoto}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">{motoboyId ? 'Atualizar' : 'Cadastrar'}</button>
      </form>
    </div>
  );
};

export default CadastroMotoboy;
