import React, {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditarCadastroMotoboy.css';
import motoboyData from '../../data/motoboy.json'; // Importando o JSON

const EditarCadastroMotoboy = () => {
  const [motoboy, setMotoboy] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    modeloMoto: '',
    placaMoto: '',
    anoMoto: '',
  });

  const [searchTerm, setSearchTerm] = useState('');

  // Função para buscar os dados do motoboy pelo nome ou CPF
  const fetchMotoboyData = () => {
    const motoboyFound = motoboyData.find(m => 
      m.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
      m.cpf === searchTerm
    );

    if (motoboyFound) {
      setMotoboy(motoboyFound);
    } else {
      console.error("Motoboy não encontrado");
      setMotoboy({
        nome: '',
        email: '',
        telefone: '',
        cpf: '',
        modeloMoto: '',
        placaMoto: '',
        anoMoto: '',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMotoboy({
      ...motoboy,
      [name]: value,
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchMotoboyData();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lógica para enviar os dados para o backend
    console.log("Dados do motoboy:", motoboy);

    try {
      const response = await fetch(`updateMotoboy/${motoboy.cpf}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(motoboy),
      });

      if (response.ok) {
        alert("Dados do motoboy atualizados com sucesso!");
      } else {
        const errorData = await response.json();
        console.error("Erro ao atualizar os dados do motoboy:", errorData);
        alert("Erro ao atualizar os dados do motoboy.");
      }
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
      alert("Erro ao atualizar os dados do motoboy.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Editar Motoboy</h2>
      <form onSubmit={handleSearchSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="search" className="form-label">Pesquisar por Nome ou CPF</label>
          <input
            type="text"
            className="form-control"
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Buscar</button>
      </form>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={motoboy.nome}
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
            value={motoboy.email}
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
            value={motoboy.telefone}
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
            value={motoboy.cpf}
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
            value={motoboy.modeloMoto}
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
            value={motoboy.placaMoto}
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
            value={motoboy.anoMoto}
            onChange={handleChange}
            required
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>

        <button type="submit" className="btn btn-primary">Atualizar</button>
      </form>
    </div>
  );
};

export default EditarCadastroMotoboy;
