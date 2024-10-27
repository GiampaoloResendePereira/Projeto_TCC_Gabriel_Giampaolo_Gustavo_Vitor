import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import '../../styles/global.css';

const CadastroMotoboy = () => {
  // Estados para armazenar os valores dos campos de entrada
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [placa, setPlaca] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [foto, setFoto] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null); // Pré-visualização da foto
  const [showSuccess, setShowSuccess] = useState(false);

  // Função para tratar o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validações simples
    if (!nome || !cpf || !placa || !telefone || !dataNascimento || !senha || !confirmarSenha || !foto) {
      alert("Por favor, preencha todos os campos e adicione uma foto.");
      return;
    }

    // Verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    // Exibe uma mensagem de sucesso e limpa os campos
    setShowSuccess(true);
    setNome("");
    setCpf("");
    setPlaca("");
    setTelefone("");
    setDataNascimento("");
    setSenha("");
    setConfirmarSenha("");
    setFoto(null);
    setFotoPreview(null);
  };

  // Função para lidar com o upload da foto e pré-visualização
  const handleFotoChange = (event) => {
    const file = event.target.files[0];
    setFoto(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <h4 className="estilo" style={{ color: 'white' }}>Cadastro do Motoboy</h4>
      
      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          Cadastro realizado com sucesso!
        </Alert>
      )}
      
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome completo"
          />
        </Form.Group>

        <Form.Group controlId="cpf">
          <Form.Label>CPF:</Form.Label>
          <Form.Control
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite o CPF"
            maxLength="11"
          />
        </Form.Group>

        <Form.Group controlId="placa">
          <Form.Label>Placa da Moto:</Form.Label>
          <Form.Control
            type="text"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            placeholder="Digite a placa da moto"
            maxLength="7"
          />
        </Form.Group>

        <Form.Group controlId="telefone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite o telefone"
          />
        </Form.Group>

        <Form.Group controlId="dataNascimento">
          <Form.Label>Data de Nascimento:</Form.Label>
          <Form.Control
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="senha">
          <Form.Label>Senha:</Form.Label>
          <Form.Control
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a senha"
          />
        </Form.Group>

        <Form.Group controlId="confirmarSenha">
          <Form.Label>Confirmar Senha:</Form.Label>
          <Form.Control
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirme a senha"
          />
        </Form.Group>

        <Form.Group controlId="foto">
          <Form.Label>Foto 3x4:</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleFotoChange}
          />
          {fotoPreview && (
            <div className="mt-3">
              <p>Pré-visualização da Foto:</p>
              <img src={fotoPreview} alt="Pré-visualização" style={{ width: '100px', height: '133px' }} />
            </div>
          )}
        </Form.Group>

        <Button variant="danger" type="submit" className="mt-4">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export default CadastroMotoboy;
