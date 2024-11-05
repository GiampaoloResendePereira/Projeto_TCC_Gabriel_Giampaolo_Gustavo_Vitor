import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormCadastroClient({ titulo, id, handleSubimit }) {

  const navigate = useNavigate(); // fazer a navegação entre as paginas 
  const [nameClient, setNameClient] = useState('');
  const [telefoneClient, setTelefone] = useState('');
  const [contatoClient, setContato] = useState('');
  const [cepClient, setCep] = useState('');
  const [ruaClient, setRua] = useState('');
  const [numeroResidenciaClient, setNumeroResidencia] = useState('');
  const [bairroClient, setBairro] = useState('');
  const [cidadeClient, setCidade] = useState('');
  const [estadoClient, setEstado] = useState('');


async function baixarClient(id) {
  try {
    const resposta = await fetch(`http://localhost:5000/client/${id}`,{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
      },
      //acertar o erro da port do json
    });
  } catch (error) {
    
  }
  
}
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
    // função responsável por lidar com o envio dos dados de um formulário
    handleSubimit(formClient, id);
    //posso colocar uma aba para aconhar form de client, gerecniar
    navigate(`/gestao`)

  }
  return (


    //criando formulario para o cadastro, e fazendo a trativa para ser enviado para o json
    <div className="container justify-content-center col-sm-12 col-md-6 col-lg-3">
      <h1 className='text-center'>Cadastro Cliente</h1>
      <form onSubmit={submit}>
        <label className="form-label" htlmFor="">
          Nome:
        </label>
        <input className="form-control"
          type="text"
          name=""
          id=""
          value={nameClient}
          onChange={(e) => setNameClient(e.target.value)} />
        <label className="form-label" htmlFor="">
          Telefone:
        </label>
        <input className="form-control"
          type="text"
          name=""
          id=""
          value={telefoneClient}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <label className="form-label" htmlFor="">
          Contato:
        </label>
        <input className="form-control"
          type="text"
          name=""
          id=""
          value={contatoClient}
          onChange={(e) => setContato(e.target.value)}
        />
        <label className="form-label" htmlFor="">
          Cep:
        </label>
        <input className="form-control"
          type="text"
          name=""
          id=""
          value={cepClient}
          onChange={(e) => setCep(e.target.value)}
        />
        <label className="form-label" htmlFor="">
          Rua:
        </label>
        <input className="form-control" 
        type="text"
        name=""
        id=""
        value={ruaClient}
        onChange={(e)=> setRua(e.target.value)}
         />
         <label className ="form-label" htmlFor="">
          Numero da Residência:
         </label>
         <input className="form-control" 
         type="text"
         name=""
         id=""
         value={numeroResidenciaClient}
         onChange={(e)=> setNumeroResidencia(e.target.value)} />
         <label className="form-label" htmlFor="">
          Bairro:
         </label>
         <input className="form-control" 
         type="text"
         name=""
         id=""
         value={bairroClient}
         onChange={(e)=> setBairro(e.targe.value)} />
         <label className="form-label" htmlFor="">
          Cidade:
         </label>
         <input className="form-control" 
         type="text"
         name=""
         id=""
         value={cidadeClient}
         onChange={(e)=> setCidade(e.targe.value)} />
         <label className="form-label" htmlFor="">
          Estado:
         </label>
         <input className="form-control" 
         type="text"
         name=""
         id=""
         value={estadoClient}
         onChange={(e)=> setEstado(e.targe.value)} />
    
         
      </form>
    </div>
  )
}

export default FormCadastroClient