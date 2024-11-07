import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './FormCadastroClient.module.css';

function FormCadastroClient({ titulo, id, handleSubmit, txtBtn, nome }) {

  const navigate = useNavigate();
  const [nameClient, setNameClient] = useState('');
  const [telefoneClient, setTelefone] = useState('');
  const [contatoClient, setContato] = useState('');
  const [cepClient, setCep] = useState('');
  const [ruaClient, setRua] = useState('');
  const [numeroResidenciaClient, setNumeroResidencia] = useState('');
  const [bairroClient, setBairro] = useState('');
  const [cidadeClient, setCidade] = useState('');
  const [estadoClient, setEstado] = useState('');

  // UseEffect para baixar os dados do cliente se o id for passado
  useEffect(() => {
    if (id) {
      baixarClient(id);
    }
  }, [id]); // Agora a dependência é o id, isso garante que sempre que id mudar, o useEffect será chamado.

  // Função para buscar os dados do cliente
  async function baixarClient(id) {
    try {
      const resposta = await fetch(`http://localhost:5000/client/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const respostaJSON = await resposta.json();

      if (!resposta.ok) {
        console.debug('Erro ao baixar dados de cliente', respostaJSON);
      } else {
        // Preenchendo os campos com os dados da resposta
        setNameClient(respostaJSON.nomeClient);
        setTelefone(respostaJSON.telefone);
        setContato(respostaJSON.contato);
        setCep(respostaJSON.cep);
        setRua(respostaJSON.rua);
        setNumeroResidencia(respostaJSON.numeroResidencia);
        setBairro(respostaJSON.bairro);
        setCidade(respostaJSON.cidade);
        setEstado(respostaJSON.estado);

        console.log(respostaJSON); // Mostra os dados retornados pela API
      }
    } catch (error) {
      console.debug("Erro ao baixar dados ", error);
    }
  }

  // Função para enviar os dados do formulário
  function submit(e) {
    e.preventDefault();

    const formClient = {
      nomeClient: nameClient,
      telefone: telefoneClient,
      contato: contatoClient,
      cep: cepClient,
      rua: ruaClient,
      numeroResidencia: numeroResidenciaClient,
      bairro: bairroClient,
      cidade: cidadeClient,
      estado: estadoClient,
      chave: null,
    };

    // Verificando se a função handleSubmit foi passada corretamente e é uma função
    if (typeof handleSubmit === 'function') {
      handleSubmit(formClient, id); // Envia os dados do formulário
    } else {
      console.error("handleSubmit não é uma função");
    }

    // Navega para a página de gerenciamento
    navigate(`/GerenciamentoClient/${nome}`);
  }

  return (
    <div className="container justify-content-center col-sm-12 col-md-6 col-lg-3">
      <h1 className={styles.textCenter}>Cadastro Cliente</h1>
      <form onSubmit={submit}>
        <label className="form-label" htmlFor="nameClient">
          Nome:
        </label>
        <input
          className="form-control"
          type="text"
          id="nameClient"
          value={nameClient}
          onChange={(e) => setNameClient(e.target.value)}
        />
        
        <label className="form-label" htmlFor="telefoneClient">
          Telefone:
        </label>
        <input
          className="form-control"
          type="text"
          id="telefoneClient"
          value={telefoneClient}
          onChange={(e) => setTelefone(e.target.value)}
        />
        
        <label className="form-label" htmlFor="contatoClient">
          Contato:
        </label>
        <input
          className="form-control"
          type="text"
          id="contatoClient"
          value={contatoClient}
          onChange={(e) => setContato(e.target.value)}
        />

        <label className="form-label" htmlFor="cepClient">
          Cep:
        </label>
        <input
          className="form-control"
          type="text"
          id="cepClient"
          value={cepClient}
          onChange={(e) => setCep(e.target.value)}
        />

        <label className="form-label" htmlFor="ruaClient">
          Rua:
        </label>
        <input
          className="form-control"
          type="text"
          id="ruaClient"
          value={ruaClient}
          onChange={(e) => setRua(e.target.value)}
        />

        <label className="form-label" htmlFor="numeroResidenciaClient">
          Numero da Residência:
        </label>
        <input
          className="form-control"
          type="text"
          id="numeroResidenciaClient"
          value={numeroResidenciaClient}
          onChange={(e) => setNumeroResidencia(e.target.value)}
        />

        <label className="form-label" htmlFor="bairroClient">
          Bairro:
        </label>
        <input
          className="form-control"
          type="text"
          id="bairroClient"
          value={bairroClient}
          onChange={(e) => setBairro(e.target.value)}
        />

        <label className="form-label" htmlFor="cidadeClient">
          Cidade:
        </label>
        <input
          className="form-control"
          type="text"
          id="cidadeClient"
          value={cidadeClient}
          onChange={(e) => setCidade(e.target.value)}
        />

        <label className="form-label" htmlFor="estadoClient">
          Estado:
        </label>
        <input
          className="form-control"
          type="text"
          id="estadoClient"
          value={estadoClient}
          onChange={(e) => setEstado(e.target.value)}
        />

        <Link className="btn btn-danger mt-2" to="/login-usuario">
          Cancelar
        </Link>
        <button className="btn btn-success mt-2 float-end" type="submit">
          Cadastrar {txtBtn}
        </button>
      </form>
    </div>
  );
}

export default FormCadastroClient;
