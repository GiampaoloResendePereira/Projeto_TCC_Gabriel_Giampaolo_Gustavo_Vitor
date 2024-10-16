import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InfoAdicional.css";
import NavbarInfoAdd from "../../layout/NavbarInfoAdd";

function InfoAdicional() {
  const [formData, setFormData] = useState({
    logradouro: "",
    bairro: "",
    numero: "",
    complemento: "",
    nomeRemetente: "",
    celular: "",
    cpfCnpj: "",
    email: "",
    logradouroDestinatario: "",
    bairroDestinatario: "",
    numeroDestinatario: "",
    complementoDestinatario: "",
    nomeDestinatario: "",
    celularDestinatario: "",
    cpfCnpjDestinatario: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pedidosExistentes = JSON.parse(localStorage.getItem("pedidos")) || [];

    const novosPedidos = [...pedidosExistentes, formData];

    localStorage.setItem("pedidos", JSON.stringify(novosPedidos));

    navigate("/pedidos_cadastrados");
  };

  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar-title">Informações Adicionais</h1>
      </nav>
      <div className="container">
        <h2>CEP</h2>
        <form className="form-correio" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <label htmlFor="logradouro">Logradouro</label>
              <input
                type="text"
                id="logradouro"
                name="logradouro"
                value={formData.logradouro}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="bairro">Bairro</label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="numero">Número</label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="complemento">Complemento</label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                value={formData.complemento}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="nomeRemetente">Nome do Remetente</label>
              <input
                type="text"
                id="nomeRemetente"
                name="nomeRemetente"
                value={formData.nomeRemetente}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="celular">Celular</label>
              <input
                type="tel"
                id="celular"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="cpfCnpj">CPF ou CNPJ</label>
              <input
                type="text"
                id="cpfCnpj"
                name="cpfCnpj"
                value={formData.cpfCnpj}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-submit">
            Pedir
          </button>
        </form>
      </div>
    </div>
  );
}

export default InfoAdicional;
