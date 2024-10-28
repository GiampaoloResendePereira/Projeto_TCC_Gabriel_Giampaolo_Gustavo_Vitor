import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import '../../styles/global.css';

const CadastroCliente = () => {
  // Estados para armazenar os valores dos campos de entrada
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Função para tratar o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validações simples
    if (!nome || !cpf || !email || !telefone || !dataNascimento || !senha || !confirmarSenha) {
      alert("Por favor, preencha todos os campos.");
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
    setEmail("");
    setTelefone("");
    setDataNascimento("");
    setSenha("");
    setConfirmarSenha("");
  };

  return (
    <div className="container">
      <h4 className="estilo" style={{ color: 'white' }}>Cadastro de Cliente</h4>
      
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

        <Form.Group controlId="email">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o e-mail"
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

        <Button variant="danger" type="submit" className="mt-4">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export default CadastroCliente;
